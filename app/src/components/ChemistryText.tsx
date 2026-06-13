import { useMemo } from 'react';
import katex from 'katex';

/**
 * ChemistryText - Renders chemistry answer text with proper formatting
 * 
 * Uses KaTeX for mathematical formulas and direct regex replacements for:
 * - Chemical formulas with subscripts (H2O → H₂O, KMnO4 → KMnO₄)
 * - Reaction arrows with conditions
 * - Inline math expressions
 * - Tables, lists, horizontal rules
 * - Book-quality typography
 */

// Known element symbols - used to determine if a pattern is a chemical formula
const ELEMENTS = new Set([
  'H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar',
  'K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
  'Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe',
  'Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu',
  'Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
  'Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf',
  // Common organic abbreviations
  'Ph','Me','Et','Bu','R',
]);

// Render a KaTeX expression (inline mode)
function renderKaTeX(latex: string, displayMode = false): string {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      strict: false,
      trust: true,
    });
  } catch {
    // If KaTeX fails, return the raw text
    return displayMode ? `$$${latex}$$` : `$${latex}$`;
  }
}

// Process inline math: $...$ patterns
function processInlineMath(text: string): string {
  // First handle display math $$...$$
  text = text.replace(/\$\$([^$]+?)\$\$/g, (_match, latex: string) => {
    return renderKaTeX(latex.trim(), true);
  });
  
  // Then handle inline math $...$
  text = text.replace(/\$([^$]+?)\$/g, (_match, latex: string) => {
    return renderKaTeX(latex.trim(), false);
  });
  
  return text;
}

// Process chemical formulas - convert element+number to element+subscript
function processChemicalSubscripts(text: string): string {
  return text.replace(
    /([A-Z][a-z]?)(\d+)/g,
    (match, element: string, num: string, offset: number) => {
      // Check if this is inside an already-processed subscript tag or KaTeX output
      const beforeText = text.slice(Math.max(0, offset - 40), offset);
      if (beforeText.includes('chem-sub">') || beforeText.includes('chem-formula') || beforeText.includes('katex')) {
        return match;
      }
      
      if (ELEMENTS.has(element)) {
        return `${element}<sub class="chem-sub">${num}</sub>`;
      }
      
      return match;
    }
  );
}

// Process parentheses with subscript numbers: (SO4)3 → (SO₄)₃
function processParenthesizedFormulas(text: string): string {
  return text.replace(
    /\(([A-Z][A-Za-z0-9]*)\)(\d+)/g,
    (_match, inner: string, num: string) => {
      const processedInner = inner.replace(
        /([A-Z][a-z]?)(\d+)/g,
        (m: string, element: string, n: string) => {
          if (ELEMENTS.has(element)) {
            return `${element}<sub class="chem-sub">${n}</sub>`;
          }
          return m;
        }
      );
      return `(<span class="chem-formula">${processedInner}</span>)<sub class="chem-sub">${num}</sub>`;
    }
  );
}

// Process reaction arrows with conditions
function processReactionArrows(text: string): string {
  // --(condition)--> → arrow with condition displayed above
  text = text.replace(
    /--\(([^)]+)\)-->/g,
    (_match, condition: string) => {
      return `<span class="chem-reaction-arrow"><span class="chem-arrow-condition">${condition}</span><span class="chem-arrow-symbol">\u27F6</span></span>`;
    }
  );
  
  // Simple --> arrows
  text = text.replace(/-->/g, ' \u2192 ');
  // Simple -> arrows
  text = text.replace(/ -> /g, ' \u2192 ');
  text = text.replace(/->/g, ' \u2192 ');
  
  return text;
}

// Detect and convert math-like patterns to KaTeX
// e.g., "(87 / 133) x 100 = 65.4%" → rendered with × and proper math
function processMathPatterns(text: string): string {
  // Pattern: percentages with formulas like "% Atom Economy = (87 / 133) x 100 = 65.4%"
  text = text.replace(
    /(?:%\s*)?(\w+(?:\s+\w+)*)\s*=\s*\(([^)]+)\)\s*x\s*100\s*=\s*([\d.]+)%/g,
    (_match, label: string, fraction: string, result: string) => {
      const latex = `${label} = \\frac{${fraction}} \\times 100 = ${result}\\%`;
      return renderKaTeX(latex);
    }
  );

  // Pattern: "= (96 / 374) x 100" (continuation lines without = result%)
  text = text.replace(
    /=\s*\(([^)]+)\)\s*x\s*100(?!\s*=)/g,
    (_match, fraction: string) => {
      return `= ${renderKaTeX(`\\frac{${fraction}} \\times 100`)}`;
    }
  );

  // Pattern: "= (116 / 134) x 100" etc.
  text = text.replace(
    /=\s*\(([^)]+)\)\s*x\s*(\d+)/g,
    (_match, fraction: string, multiplier: string) => {
      return `= ${renderKaTeX(`\\frac{${fraction}} \\times ${multiplier}`)}`;
    }
  );

  // Pattern: standalone fractions like (87 / 133)
  text = text.replace(
    /\((\d+)\s*\/\s*(\d+)\)/g,
    (_match, num: string, den: string) => {
      return renderKaTeX(`\\frac{${num}}{${den}}`);
    }
  );

  // Pattern: "x 100" → × 100 (when used as multiplication)
  text = text.replace(/\bx\s+100\b/g, '\\times 100');
  
  // Pattern: digit x digit (multiplication)
  text = text.replace(/(\d)\s*x\s*(\d)/g, (_match, a: string, b: string) => {
    return `${a} ${renderKaTeX('\\times')} ${b}`;
  });
  
  return text;
}

// Process superscript patterns: ^2, ^3, ^+ etc.  
function processSuperscripts(text: string): string {
  // Pattern: number^number or )^number
  text = text.replace(/\^(\d+)/g, (_match, num: string) => {
    return `<sup class="chem-sup">${num}</sup>`;
  });
  // Pattern: ^+, ^-, ^2+, ^3- etc.
  text = text.replace(/\^([2-9]?[+-])/g, (_match, sym: string) => {
    return `<sup class="chem-sup">${sym}</sup>`;
  });
  return text;
}

// Process a single line of text
function processLine(line: string): string {
  let processed = line;
  
  // Skip if already contains HTML table elements
  if (processed.includes('<table') || processed.includes('<tr') || processed.includes('<td') || processed.includes('<th')) {
    return processed;
  }
  
  // Step 1: Process reaction arrows FIRST
  processed = processReactionArrows(processed);
  
  // Step 2: Process temperature: degC → °C
  processed = processed.replace(/degC/g, '\u00B0C');
  
  // Step 3: Process inline math $...$
  processed = processInlineMath(processed);
  
  // Step 4: Process math patterns (formulas, fractions, etc.)
  processed = processMathPatterns(processed);
  
  // Step 5: Process bold text: **text** → <strong>text</strong>
  processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong class="chem-bold">$1</strong>');
  
  // Step 6: Process multiplication: "x" used as times sign (remaining cases)
  processed = processed.replace(/\)\s*x\s*(\d)/g, ') \u00D7 $1');
  
  // Step 7: Process parenthesized formulas: (SO4)3 → (SO₄)₃
  processed = processParenthesizedFormulas(processed);
  
  // Step 8: Process chemical subscripts: H2 → H₂, O2 → O₂
  processed = processChemicalSubscripts(processed);
  
  // Step 9: Process superscripts
  processed = processSuperscripts(processed);
  
  return processed;
}

// Process markdown-style tables to HTML
function processTable(lines: string[]): string {
  const parseCells = (row: string): string[] => {
    return row.split('|').slice(1, -1).map(c => c.trim());
  };
  
  const headerCells = parseCells(lines[0]);
  const dataRows = lines.slice(1).filter(r => !/^\|[\s\-:]+\|/.test(r.trim()));
  
  let html = '<div class="chem-table-wrap"><table class="chem-table"><thead><tr>';
  headerCells.forEach(h => {
    html += `<th>${processLine(h)}</th>`;
  });
  html += '</tr></thead><tbody>';
  
  dataRows.forEach(row => {
    html += '<tr>';
    parseCells(row).forEach(cell => {
      html += `<td>${processLine(cell)}</td>`;
    });
    html += '</tr>';
  });
  
  html += '</tbody></table></div>';
  return html;
}

// Main text-to-HTML converter
function textToHtml(text: string): string {
  const lines = text.split('\n');
  const outputParts: string[] = [];
  let tableLines: string[] = [];
  let inTable = false;
  
  const flushTable = () => {
    if (tableLines.length > 0) {
      outputParts.push(processTable(tableLines));
      tableLines = [];
    }
    inTable = false;
  };
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Check for table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) inTable = true;
      tableLines.push(trimmed);
      continue;
    }
    
    if (inTable) {
      flushTable();
    }
    
    // Empty line
    if (trimmed === '') {
      outputParts.push('<div class="chem-spacer"></div>');
      continue;
    }
    
    // Horizontal rule: ---
    if (/^-{3,}$/.test(trimmed)) {
      outputParts.push('<hr class="chem-hr"/>');
      continue;
    }
    
    // List item: - item
    if (/^- /.test(trimmed)) {
      const content = processLine(trimmed.slice(2));
      outputParts.push(`<div class="chem-list-item"><span class="chem-bullet">\u2022</span><span class="chem-list-content">${content}</span></div>`);
      continue;
    }
    
    // Numbered list item: 1. item
    const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (numberedMatch) {
      const content = processLine(numberedMatch[2]);
      outputParts.push(`<div class="chem-list-item chem-numbered"><span class="chem-num">${numberedMatch[1]}.</span><span class="chem-list-content">${content}</span></div>`);
      continue;
    }
    
    // Regular paragraph line
    outputParts.push(`<p class="chem-p">${processLine(trimmed)}</p>`);
  }
  
  flushTable();
  
  return outputParts.join('\n');
}

export default function ChemistryText({ text }: { text: string }) {
  const htmlContent = useMemo(() => {
    if (!text) return '';
    return textToHtml(text);
  }, [text]);
  
  if (!text) return null;
  
  return (
    <div 
      className="chemistry-text"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
