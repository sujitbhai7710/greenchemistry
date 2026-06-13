export type AnswerStatus = 'well_answered' | 'partially_answered' | 'not_in_pdf';

export interface Question {
  id: number;
  section: string;
  question: string;
  marks: string;
  year: string;
  repeated?: string;
  status: AnswerStatus;
  pdfPages: number[];
  importance: number;
  answer: string;
  images?: { page: number; caption: string }[];
}

export interface Section {
  id: string;
  title: string;
  questions: number[];
}

export const sections: Section[] = [
  { id: 'intro', title: '1. Introduction, Goals, Principles and Metrics', questions: [1, 2, 3, 4, 5, 6, 7, 8] },
  { id: 'atom', title: '2. Atom Economy Calculations', questions: [9, 10, 11, 12, 13, 14, 15] },
  { id: 'solvents', title: '3. Green Solvents', questions: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
  { id: 'synthesis', title: '4. Green Synthesis and Alternative Energy', questions: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41] },
  { id: 'biopolymers', title: '5. Biopolymers, Biofuels, and Real-World Cases', questions: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51] },
];

export const statusLabels: Record<AnswerStatus, string> = {
  well_answered: 'Well Answered (PDF)',
  partially_answered: 'Partially in PDF',
  not_in_pdf: 'Not in PDF (Research)',
};

export const statusColors: Record<AnswerStatus, string> = {
  well_answered: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  partially_answered: 'bg-amber-100 text-amber-800 border-amber-300',
  not_in_pdf: 'bg-rose-100 text-rose-800 border-rose-300',
};


export const allQuestions: Question[] = [
  // ==================== SECTION 1: INTRODUCTION ====================
  {
    id: 1,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'State and explain any two principles of Green Chemistry.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [1, 2, 3],
    importance: 5,
    answer: `Two important principles of Green Chemistry are:

**Principle 1: Prevention of Waste (Prevent waste)**
It is better to prevent waste than to treat or clean up waste after it is formed. This principle suggests that we should plan to minimize waste at every step of a chemical process. Instead of creating waste and then finding ways to dispose of it, green chemistry aims to design processes that prevent the formation of waste in the first place. This saves money on waste treatment and disposal, and also protects the environment from harmful by-products.

Example: Using H2O2 as an oxidizing agent instead of KMnO4 or CrO3, because H2O2 produces only water as by-product.

**Principle 2: Maximize Atom Economy**
Synthetic methods should be designed to maximize the incorporation of all materials used in the process into the final product. Atom economy is a measure of how many atoms from the starting materials end up in the desired product. The higher the atom economy, the less waste is generated.

Formula: % Atom Economy = (Molecular weight of desired product / Sum of molecular weights of all reactants) x 100

Example: The Diels-Alder reaction has 100% atom economy because all atoms from the diene and dienophile are incorporated into the product. It was introduced by Trost in 1991.

Other principles include: Design less hazardous chemical synthesis, Design safer chemicals, Use safer solvents, Design for energy efficiency, Use renewable feedstocks, Reduce derivatization, Use catalytic reagents, Design degradable products, Real-time analysis, and Inherently safer chemistry.

(Source: PDF Pages 1-3)`,
    images: [{ page: 1, caption: 'Green Chemistry definition and principles overview' }],
  },
  {
    id: 2,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'State two basic differences between E-factor and atom economy. What change in calculation of E-factors do you expect for the synthesis of bulk chemicals to fine chemicals? Why?',
    marks: '5 Marks',
    year: '2021',
    status: 'well_answered',
    pdfPages: [5],
    importance: 5,
    answer: `**Two basic differences between E-factor and Atom Economy:**

**Difference 1: Scope of waste considered**
While calculating Atom Economy, the amount of solvent, acid, or base used during work-up are NOT taken into account as they do not appear in the stoichiometric equation. Atom Economy only considers what is in the balanced chemical equation. Whereas during calculation of E-Factor, the actual amount of ALL waste produced in the process is considered, including reagents, solvent loss, and all process aids.

**Difference 2: Ideal values**
An ideal Atom Economy (AE) is 100% (all atoms go into the product), whereas the ideal E-factor is ZERO (no waste at all). Amount of water used in the process is generally avoided in the calculation.

**E-Factor Formula:**
E-Factor = (Mass of actual waste product) / (Mass of desired product)
Or simply: E-Factor = (Kg of raw materials - Kg of desired product) / (Kg of desired product)

**Change from bulk to fine chemicals:**
As we move from bulk chemicals (e.g., ammonia, sulfuric acid) to fine chemicals (e.g., pharmaceuticals, agrochemicals), the E-factor INCREASES SIGNIFICANTLY.

**Why?**
- Bulk chemicals are made through highly efficient, continuous processes with minimal waste
- Fine chemicals often require multi-step synthesis with lower yields, leading to more waste
- Fine chemical synthesis involves extensive use of organic solvents, catalysts, and reagents that generate significant waste
- Bulk chemical production typically operates in aqueous or gas-phase systems with higher atom economy

**Typical E-Factor Ranges:**
- Bulk chemicals: <1 (near-zero waste)
- Fine chemicals: 5-50
- Pharmaceuticals: 25 to >100 (due to extensive synthetic steps and purification)

(Source: PDF Page 5)`,
  },
  {
    id: 3,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Mention two reasons why green chemistry is also called sustainable chemistry.',
    marks: '2 Marks (Repeated 2 Times: 2021, 2024)',
    year: '2021, 2024',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [1],
    importance: 4,
    answer: `Green chemistry is also called **sustainable chemistry** because:

**Reason 1: Meets present needs without compromising the future**
Green chemistry aims to meet the needs of the present without compromising the ability of future generations to meet their own needs. It can only be achieved by using renewable or sustainable feedstock. It helps to protect the environment and conserve resources for the future.

**Reason 2: Focuses on long-term environmental protection**
Green chemistry focuses on four key areas that ensure sustainability:
- **Less Pollution** - It avoids harmful chemicals and reduces waste
- **Saving Resources** - It uses renewable materials instead of limited natural resources
- **Energy Efficiency** - It designs processes that use less energy
- **Safer Products** - It creates products that are non-toxic and biodegradable

By following these ideas, green chemistry helps industries make useful products while keeping the planet safe for future generations.

(Source: PDF Page 1)`,
  },
  {
    id: 4,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Elucidate the working definition of Green Chemistry.',
    marks: '2 Marks (Repeated 2 Times: 2022, 2023)',
    year: '2022, 2023',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [1],
    importance: 4,
    answer: `**Working Definition of Green Chemistry:**

Green Chemistry efficiently utilizes raw materials (preferably renewable), eliminates waste, and avoids the use of toxic or hazardous reagents and solvents in the manufacture and application of chemical products.

More specifically:
- Green chemistry is the design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances.
- Green chemistry is also called clean chemistry or benign chemistry.
- It refers to such chemical formulations that reduce the risk for human beings and minimize environmental pollution.
- Green chemistry applies across the entire life cycle of a chemical product, including its design, manufacture, use, and ultimate disposal.
- We have to use starting materials and solvents that are less polluting, and use raw materials more efficiently so that less waste is generated.
- Green chemistry reduces pollution at its source by minimizing or eliminating the hazards of chemicals, feedstocks, reagents, solvents and products.

(Source: PDF Page 1)`,
  },
  {
    id: 5,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Discuss principles 1 and 3 of green chemistry with suitable examples.',
    marks: '5 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [1, 2, 3],
    importance: 5,
    answer: `**Principle 1: Prevention of Waste (Prevent waste)**
Plan to minimize waste at every step. It suggests prevention of waste instead of its remediation. It means preventing the formation of waste rather than treating or cleaning up waste material after it is formed. Waste prevention is necessary because:
- If a process produces waste, it requires treatment/disposal, which amounts to additional expenditure
- If the waste is toxic or hazardous, its release into the environment leads to pollution, which further requires treatment and causes additional expenses
- Cost involved in the treatment and disposal of waste adds to overall production cost
- Unreacted starting materials also form part of the waste

Example: Using H2O2 as an oxidizing agent instead of KMnO4 or CrO3, because H2O2 produces only water as by-product.

**Principle 3: Design Less Hazardous Chemical Synthesis**
Synthetic schemes should be designed in such a way that the chemicals used in the process and the chemicals obtained from reactions should possess little or no toxicity to human beings and the environment.

This means:
- Avoid using toxic starting materials whenever possible
- Design reaction pathways that avoid generating toxic intermediates
- The final product should also be non-toxic or minimally toxic

Example: In the amidation process, the classical procedure uses stoichiometric amounts of toxic chemicals like PCl5 or SOCl2. But in the green modification, only a catalytic amount of boric acid (a benign reagent) is used. The greener approach is:
ArCO2H + R2NH --(Boric acid catalyst, Toluene)--> ArCONR2

This avoids the use of toxic PCl5/SOCl2 and produces less hazardous waste.

(Source: PDF Pages 1-3)`,
    images: [{ page: 2, caption: 'Classical vs Greener amidation process' }],
  },
  {
    id: 6,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Draw the pyramid that represents the waste management hierarchy indicating options to manage waste. Which is the most preferred option and why?',
    marks: '3 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [1, 3],
    importance: 3,
    answer: `**Waste Management Hierarchy Pyramid:**

The waste management hierarchy is typically represented as an inverted pyramid or a pyramid with the most preferred option at the top:

**Top (Most Preferred) -> Bottom (Least Preferred):**

1. **PREVENTION/REDUCTION** (Most Preferred)
2. **MINIMIZATION**
3. **REUSE**
4. **RECYCLING/RECOVERY**
5. **TREATMENT**
6. **DISPOSAL** (Least Preferred)

**The most preferred option is PREVENTION/REDUCTION** because:

- It stops waste from being generated in the first place, eliminating the need for costly treatment and disposal
- It saves money on raw materials since less material is wasted
- It avoids environmental pollution that would occur from waste generation
- It reduces energy consumption associated with waste treatment and cleanup
- It aligns with the first principle of Green Chemistry: "It is better to prevent waste than to treat or clean up waste after it is formed"
- Prevention is the most sustainable approach as it addresses the problem at the source rather than managing consequences

This is why Green Chemistry emphasizes designing processes that inherently produce little or no waste, rather than creating waste and then treating it.

---
*This question asks to draw a pyramid diagram. Search in Google: **"waste management hierarchy pyramid diagram"***`,
    images: [{ page: 1, caption: 'Green Chemistry principles - Prevention of waste' }],
  },
  {
    id: 7,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Discuss any four principles of green chemistry.',
    marks: '4 Marks',
    year: '2024',
    status: 'well_answered',
    pdfPages: [1, 2, 3],
    importance: 5,
    answer: `**Four Principles of Green Chemistry:**

**1. Prevent Waste (Principle 1)**
Plan to minimize waste at every step. It suggests prevention of waste instead of its remediation. It means to prevent the formation of waste than to treat or clean up waste material after it is formed. Waste prevention saves money on disposal and protects the environment.

**2. Maximize Atom Economy (Principle 2)**
Design syntheses so that the final product contains the maximum proportion of the starting materials. Waste few or no atoms. The synthetic method should be designed to maximize the incorporation of all materials used in the process into the final product.

Formula: % Atom Economy = (Mass of desired product from balanced equation / Total mass of reactants from balanced equation) x 100

Example: Diels-Alder reaction has 100% atom economy - all atoms are engaged in the product.

**3. Design Less Hazardous Chemical Synthesis (Principle 3)**
Synthetic schemes should be designed so that the chemicals used and obtained from reactions should possess little or no toxicity to human beings and the environment.

**4. Use Safer Solvents and Auxiliaries (Principle 5)**
The use of auxiliary substances (solvents, separation agents, etc.) should be avoided whenever possible and should be innocuous when used. Attempts should be made for solvent-free reactions or using innocuous solvents like water, supercritical CO2, ionic liquids, etc. Chemicals required for separation or purification of desired product should be minimized.

Other important principles include:
- Design safer chemicals and products (Principle 4)
- Design for energy efficiency (Principle 6)
- Use renewable raw materials (Principle 7)
- Reduce derivatization (Principle 8)
- Use catalytic reagents (Principle 9)
- Design degradable products (Principle 10)
- Real-time analysis (Principle 11)
- Inherently safer chemistry (Principle 12)

(Source: PDF Pages 1-3)`,
  },
  {
    id: 8,
    section: 'Introduction, Goals, Principles and Metrics',
    question: 'Explain the following terms giving one example in each case (any three): (I) VOC, (II) Toxic chemical, (III) Bio-catalyst, (IV) Non-biodegradable polymer.',
    marks: '3 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [9],
    importance: 3,
    answer: `**I. VOC (Volatile Organic Compounds)**
VOCs are organic chemicals that have a high vapor pressure at ordinary room temperature. They easily evaporate into the air and can cause air pollution, health problems, and contribute to smog formation. Many common organic solvents like benzene, toluene, xylene, and chloroform are VOCs.

Example: Toluene - widely used as a solvent in paints and coatings, but it evaporates easily and can cause respiratory problems and environmental damage.

**II. Toxic Chemical**
A toxic chemical is any substance that can cause harm, injury, or death when exposed to living organisms. Toxic chemicals can cause acute or chronic health effects depending on the dose and duration of exposure.

Example: PCl5 (Phosphorus pentachloride) - used in conventional amidation reactions, it is highly corrosive and toxic. The green alternative is using catalytic boric acid instead.

**III. Bio-catalyst**
A bio-catalyst is a natural substance (typically an enzyme or whole-cell organism) that speeds up a chemical reaction without being consumed in the process. Bio-catalysts work under mild conditions (room temperature, neutral pH) and are highly selective.

Example: Thiamine hydrochloride (Vitamin B1) - used as a bio-catalyst in benzoin condensation instead of toxic cyanide catalyst. It is non-hazardous, biodegradable, and reactions occur in mild conditions.

**IV. Non-biodegradable Polymer**
A non-biodegradable polymer is a plastic or synthetic material that cannot be broken down by natural processes (microorganisms, enzymes) into simpler, harmless substances. These polymers persist in the environment for hundreds of years, causing pollution.

Example: Polyethylene (plastic bags, bottles) - it does not degrade naturally and accumulates in landfills and oceans. In contrast, biodegradable polymers like Polylactic acid (PLA) break down into harmless CO2 and water.

(Source: PDF Pages 2, 9, 32)`,
  },

  // ==================== SECTION 2: ATOM ECONOMY ====================
  {
    id: 9,
    section: 'Atom Economy Calculations',
    question: 'Identify A & B and calculate percentage atom economy of the following reaction: MeCH2COOEt + MeNH2 -> A + B',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [5, 6, 7],
    importance: 4,
    answer: `**Given Reaction:** MeCH2COOEt + MeNH2 -> A + B

This is an aminolysis (amide formation) reaction where an ester reacts with a primary amine to form an amide and an alcohol.

**Identification of A and B:**
- **A = MeCH2CONHMe** (N-methylpropanamide) - the amide product
- **B = EtOH** (Ethanol) - the alcohol by-product

**Calculation of Percentage Atom Economy:**

The balanced reaction: CH3CH2COOCH2CH3 + CH3NH2 -> CH3CH2CONHCH3 + CH3CH2OH

Molecular weights:
- Ester (MeCH2COOEt): C5H10O2 = (5x12) + (10x1) + (2x16) = 60 + 10 + 32 = 102
- Amine (MeNH2): CH5N = 12 + 5 + 14 = 31
- Desired product A (Amide, C4H9NO): (4x12) + (9x1) + 14 + 16 = 48 + 9 + 14 + 16 = 87
- By-product B (EtOH, C2H6O): (2x12) + 6 + 16 = 46

Total mass of reactants = 102 + 31 = 133
Mass of desired product (A) = 87

**% Atom Economy = (87 / 133) x 100 = 65.4%**

This means only 65.4% of the atoms from the reactants end up in the desired amide product. The rest (34.6%) goes into the ethanol by-product.

(Source: PDF Pages 5-7 - method demonstrated)`,
  },
  {
    id: 10,
    section: 'Atom Economy Calculations',
    question: 'Calculate the atom economy for olefination of cyclohexanone by Wittig method. (Given, At. Wt: P = 31)',
    marks: '3 Marks (Repeated 2 Times: 2021, 2024)',
    year: '2021, 2024',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [2, 7],
    importance: 5,
    answer: `**Olefination of Cyclohexanone by Wittig Method:**

**Reaction:** Cyclohexanone + Ph3P=CH2 -> Methylenecyclohexane + Ph3PO

**Given:** At. Wt: P = 31, C = 12, H = 1, O = 16

**Step 1: Calculate molecular weights of reactants**

Cyclohexanone (C6H10O):
= (6 x 12) + (10 x 1) + 16
= 72 + 10 + 16 = **98**

Wittig reagent (Ph3P=CH2 = C19H17P):
Note: Ph = C6H5, so Ph3P = (C6H5)3P = C18H15P
Plus CH2 group: C19H17P
= (19 x 12) + (17 x 1) + 31
= 228 + 17 + 31 = **276**

Total mass of reactants = 98 + 276 = **374**

**Step 2: Calculate molecular weight of desired product**

Methylenecyclohexane (C7H12):
= (7 x 12) + (12 x 1)
= 84 + 12 = **96**

**Step 3: Calculate % Atom Economy**

% Atom Economy = (Mass of desired product / Total mass of reactants) x 100
= (96 / 374) x 100
= **25.7% (approx)**

**Conclusion:** The Wittig reaction has poor atom economy (~25.7%) because the bulky triphenylphosphine oxide (Ph3PO, MW = 278) by-product is generated, which constitutes most of the waste. This is why the Wittig reaction, while very useful synthetically, is not considered "green" in terms of atom economy.

By-product Ph3PO: (3 x C6H5) + P + O = C18H15 + 31 + 16 = 228 + 15 + 31 + 16 = 278
Check: 96 + 278 = 374 (matches total reactants)

(Source: PDF Pages 2, 7)`,
    images: [{ page: 7, caption: 'Wittig olefination atom economy calculation' }],
  },
  {
    id: 11,
    section: 'Atom Economy Calculations',
    question: 'Calculate the atom economy (AE) of the following reaction sequence: (Propylene glycol synthesis - old route)',
    marks: '2.5 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [7],
    importance: 4,
    answer: `**Propylene Glycol Synthesis (Old Route):**

**Reaction Sequence:**
CH3CH=CH2 --(Cl2/H2O)--> CH3CHOHCH2Cl --(NaOH)--> Epoxide --(H2O, 120-190 degC, High pressure)--> CH3CHOHCH2OH

**Step 1: Identify all reactants and their molecular weights**
- Propene (CH3CH=CH2, C3H6): (3 x 12) + (6 x 1) = 36 + 6 = **42**
- Cl2: (2 x 35.5) = **71**
- H2O: (2 x 1) + 16 = **18**
- NaOH: 23 + 16 + 1 = **40**
- H2O (hydrolysis): **18**

Total mass of all reactants = 42 + 71 + 18 + 40 + 18 = **189**

**Step 2: Molecular weight of desired product**
Propylene glycol (CH3CHOHCH2OH, C3H8O2):
= (3 x 12) + (8 x 1) + (2 x 16)
= 36 + 8 + 32 = **76**

**Step 3: Calculate % Atom Economy**

% AE = (76 / 189) x 100 = **40.2%**

**Conclusion:** The old route for propylene glycol synthesis has a poor atom economy of only 40.2%, meaning nearly 60% of the atoms from reactants become waste (including NaCl, NaOH by-products).

**Comparison with Green Route:**
The green approach uses: HOCH2CHOHCH2OH + H2 --(CuCrO4 catalyst, 200 degC, 200 psi)--> CH3CHOHCH2OH
% AE = (76 / 94) x 100 = **80.8%**

The green route has DOUBLE the atom economy (80.8% vs 40.2%)!

(Source: PDF Page 7)`,
    images: [{ page: 7, caption: 'Propylene glycol old route vs green route atom economy' }],
  },
  {
    id: 12,
    section: 'Atom Economy Calculations',
    question: 'Calculate the atom economy of the following reaction: (Substitution reaction for 1-bromobutane synthesis)',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [5, 6],
    importance: 4,
    answer: `**Reaction for synthesis of 1-bromobutane:**

CH3CH2CH2CH2-OH + NaBr + H2SO4 -> CH3CH2CH2CH2-Br + NaHSO4 + H2O

**Step 1: Calculate molecular weights of reactants**

Butan-1-ol (C4H10O):
= (4 x 12) + (10 x 1) + 16 = 48 + 10 + 16 = **74**

NaBr:
= 23 + 80 = **103**

H2SO4:
= (2 x 1) + 32 + (4 x 16) = 2 + 32 + 64 = **98**

Total mass of reactants = 74 + 103 + 98 = **275**

**Step 2: Calculate molecular weight of desired product**

1-bromobutane (C4H9Br):
= (4 x 12) + (9 x 1) + 80 = 48 + 9 + 80 = **137**

**Step 3: Calculate % Atom Economy**

% Atom Economy = (137 / 275) x 100 = **49.8% ~ 50%**

**Conclusion:** Only about 50% of the mass of reactants is incorporated into the desired product. The rest half is wasted as undesired side products (NaHSO4 and H2O). This is typical of substitution reactions where atom economy is less because by-products are inevitably formed.

The waste products are:
- NaHSO4 (MW = 23 + 1 + 32 + 64 = 120)
- H2O (MW = 18)
Total waste = 120 + 18 = 138
Check: 137 + 138 = 275 (matches)

Thus, in substitution reactions, atom economy is generally lower compared to addition or rearrangement reactions.

(Source: PDF Pages 5-6)`,
  },
  {
    id: 13,
    section: 'Atom Economy Calculations',
    question: 'Two methods of synthesis of a secondary amide are given. Calculate the Atom Economy and E-Factor for both methods to establish the fact that "catalytic reagents are superior to stoichiometric ones".',
    marks: '5 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [2, 4, 5],
    importance: 5,
    answer: `**Synthesis of a Secondary Amide - Two Methods:**

**METHOD 1: Classical (Stoichiometric)**
ArCO2H + SOCl2 (or PCl5) -> ArCOCl --(R2NH)--> ArCONR2

Using PCl5 route: ArCO2H + PCl5 -> ArCOCl + POCl3 + HCl
Then: ArCOCl + R2NH -> ArCONR2 + HCl

Overall: ArCO2H + PCl5 + R2NH -> ArCONR2 + POCl3 + 2HCl

Molecular weights (for benzamide synthesis example):
- Benzoic acid (C7H6O2): (7x12) + 6 + 32 = 122
- PCl5: 31 + (5x35.5) = 208.5
- Dimethylamine (C2H7N): 24 + 7 + 14 = 45
Total reactants = 122 + 208.5 + 45 = 375.5

Desired product (N,N-dimethylbenzamide, C9H11NO): 108 + 11 + 14 + 16 = 149

**AE (Method 1) = (149 / 375.5) x 100 = 39.7%**

Waste = POCl3 + 2HCl = 153.5 + 73 = 226.5
**E-Factor (Method 1) = 226.5 / 149 = 1.52**

---

**METHOD 2: Green (Catalytic)**
ArCO2H + R2NH --(Boric acid cat., Toluene)--> ArCONR2 + H2O

- Benzoic acid (C7H6O2): **122**
- Dimethylamine (C2H7N): **45**
Total reactants = 122 + 45 = 167

Desired product: **149**
By-product: H2O = **18**

**AE (Method 2) = (149 / 167) x 100 = 89.2%**

Waste = H2O = 18
**E-Factor (Method 2) = 18 / 149 = 0.12**

---

**COMPARISON TABLE:**

| Parameter | Method 1 (Stoichiometric) | Method 2 (Catalytic) |
|-----------|---------------------------|----------------------|
| Atom Economy | ~40% | ~89% |
| E-Factor | 1.52 | 0.12 |
| Toxic reagents | PCl5 (toxic) | Boric acid (benign) |
| By-products | POCl3, HCl (hazardous) | H2O only |
| Conditions | Multiple steps | Single step |

**Conclusion:** Catalytic reagents (Method 2) are superior to stoichiometric ones (Method 1) because they have much higher atom economy (89% vs 40%), much lower E-factor (0.12 vs 1.52), use benign catalyst instead of toxic reagents, and produce only water as waste instead of hazardous POCl3 and HCl.

(Source: PDF Pages 2, 4-5)`,
    images: [{ page: 2, caption: 'Classical vs Catalytic amidation comparison' }],
  },
  {
    id: 14,
    section: 'Atom Economy Calculations',
    question: 'Acetophenone can be synthesized by two different methods. Calculate Atom Economy and E-Factor for both the methods to establish that "catalytic reagents are superior to stoichiometric ones". Method 1: Ph-CHOH-Me + 2CrO3 + H2SO4 -> ... Method 2: Ph-CHOH-Me + 0.5O2 ->(catalyst)-> Ph-CO-Me + H2O. Which process should be adopted as a green method and why?',
    marks: '5 Marks',
    year: '2024',
    status: 'well_answered',
    pdfPages: [9],
    importance: 5,
    answer: `**Synthesis of Acetophenone - Two Methods:**

**METHOD 1: Stoichiometric Oxidation (using CrO3)**
3 Ph-CHOH-Me + 2 CrO3 + H2SO4 -> 3 Ph-CO-Me + Cr2(SO4)3 + 6 H2O

Molecular weights:
- 1-phenylethanol (C8H10O): (8x12) + 10 + 16 = 96 + 10 + 16 = **122**
- CrO3: 52 + (3x16) = 52 + 48 = **100** (for 2 CrO3: 200)
- H2SO4: 2 + 32 + 64 = **98**

Total reactants (for 3 moles of alcohol) = (3 x 122) + 200 + 98 = 366 + 200 + 98 = **664**

Desired product - Acetophenone (C8H8O): (8x12) + 8 + 16 = 96 + 8 + 16 = **120**
For 3 moles = 3 x 120 = **360**

**Atom Economy (Method 1) = (360 / 664) x 100 = 54.2%**

Waste products: Cr2(SO4)3 + 6H2O = 392 + 108 = 500
**E-Factor (Method 1) = 500 / 360 = 1.39**

---

**METHOD 2: Catalytic Oxidation (using O2)**
Ph-CHOH-Me + 0.5 O2 --(catalyst)--> Ph-CO-Me + H2O

Molecular weights:
- 1-phenylethanol: **122**
- 0.5 O2: **16**
Total reactants = 122 + 16 = **138**

Desired product - Acetophenone: **120**

**Atom Economy (Method 2) = (120 / 138) x 100 = 87.0%**

Waste = H2O = **18**
**E-Factor (Method 2) = 18 / 120 = 0.15**

---

**COMPARISON:**

| Parameter | Method 1 (CrO3) | Method 2 (O2, Catalytic) |
|-----------|-----------------|--------------------------|
| Atom Economy | 54.2% | 87.0% |
| E-Factor | 1.39 | 0.15 |
| Toxic reagents | CrO3 (toxic, carcinogenic) | O2 (non-toxic) |
| By-products | Cr2(SO4)3 (hazardous) | H2O only |
| Catalyst needed | No | Yes (recyclable) |

**Which process is greener?**
**Method 2 (Catalytic oxidation) should be adopted** as the green method because:
1. It has much higher atom economy (87% vs 54%)
2. Much lower E-factor (0.15 vs 1.39)
3. Uses non-toxic O2 instead of toxic, carcinogenic CrO3
4. Produces only water as waste instead of hazardous chromium sulfate
5. The catalyst can be recovered and reused
6. Avoids the use of corrosive H2SO4
7. The process is safer and more environmentally friendly

This clearly establishes that "catalytic reagents are superior to stoichiometric ones."

(Source: PDF Page 9)`,
    images: [{ page: 9, caption: 'Acetophenone synthesis - two methods comparison' }],
  },
  {
    id: 15,
    section: 'Atom Economy Calculations',
    question: 'For the synthesis of Butyl acetate from Butanol (37g), Glacial Acetic Acid (60g) and Conc. H2SO4, calculate Atom Economy, E-Factor, and EMY (Effective Mass Yield).',
    marks: '5 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [9, 10],
    importance: 5,
    answer: `**Synthesis of Butyl Acetate:**

**Given Data:**
| Chemical | Weight (g) |
|----------|------------|
| Butanol (CH3(CH2)3OH) | 37 g |
| Glacial Acetic Acid (CH3CO2H) | 60 g |
| Conc. H2SO4 | Catalytic |
| n-Butyl Acetate (product) | 40 g |

**Reaction:**
CH3(CH2)3OH + CH3CO2H -> CH3CO2(CH2)3CH3 + H2O

**Step 1: Calculate Molecular Weights**
- Butanol (C4H10O): (4x12) + 10 + 16 = **74 g/mol**
- Acetic acid (C2H4O2): 24 + 4 + 32 = **60 g/mol**
- Butyl acetate (C6H12O2): 72 + 12 + 32 = **116 g/mol**
- Water (H2O): **18 g/mol**

**Step 2: Calculate Atom Economy (AE)**

AE = (Molecular weight of product / Sum of molecular weights of reactants) x 100
= (116 / (74 + 60)) x 100
= (116 / 134) x 100
= **86.6%**

**Step 3: Calculate E-Factor**

Total mass of reactants = 37 + 60 = 97 g (H2SO4 is catalytic, not counted)
Mass of product = 40 g
Mass of waste = Total reactants - Product = 97 - 40 = 57 g

E-Factor = Mass of waste / Mass of desired product
= 57 / 40
= **1.43**

**Step 4: Calculate EMY (Effective Mass Yield)**

% EMY = (Mass of desired product / Total mass of non-benign reactants) x 100

Here, water is a benign by-product. Butanol and acetic acid are relatively benign.
Total mass of non-benign reactants = 37 + 60 = 97 g

% EMY = (40 / 97) x 100 = **41.2%**

**Summary:**
- **Atom Economy = 86.6%** (theoretical maximum - very good)
- **E-Factor = 1.43** (moderate - could be improved with better yield)
- **EMY = 41.2%** (actual efficiency considering yield)

The high atom economy (86.6%) indicates this is a green reaction in terms of atom utilization. However, the practical E-factor of 1.43 suggests room for improvement in actual yield. The catalytic H2SO4 is recoverable, making this process relatively green.

(Source: PDF Pages 9-10)`,
    images: [{ page: 9, caption: 'Butyl acetate synthesis data table' }],
  },

  // ==================== SECTION 3: GREEN SOLVENTS ====================
  {
    id: 16,
    section: 'Green Solvents',
    question: 'Mention three types of ionic liquids and cite any two examples of green synthesis using ionic liquids as solvent.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [15, 16, 17],
    importance: 5,
    answer: `**Three Types of Ionic Liquids:**

**1. Neutral Ionic Liquids:**
These are the most common type, consisting of a bulky organic cation and an inorganic anion. They have very low vapor pressure, are non-flammable, and remain liquid over a wide temperature range.

Example: [BMIM][PF6] (1-butyl-3-methylimidazolium hexafluorophosphate)
- Viscosity: 450 cP
- Density: 1.37 g/cm3
- Solubility: Soluble in acetone, acetonitrile, methylene chloride, and alkyl acetates; insoluble in water, alcohols, ethers, and alkanes

**2. Acidic Ionic Liquids:**
These contain acidic groups and can act as both solvent and catalyst. They are particularly useful for reactions requiring acidic conditions.

Example: [BMIM][Cl]/AlCl3 system
- This acts as both solvent and catalyst
- Can be used for Diels-Alder reactions
- Modified Diels-Alder reaction of cyclopentadiene with methyl acrylate in [BMIM][Cl]/AlCl3 ionic liquid gives 97.2% endo product

**3. Basic Ionic Liquids:**
These contain basic groups and can act as both solvent and base catalyst. They are useful for reactions requiring basic conditions without adding separate base.

Example: [BMIM][OH] - basic ionic liquid used for base-catalyzed reactions

---

**Two Examples of Green Synthesis Using Ionic Liquids:**

**Example 1: Diels-Alder Reaction**
Cyclopentadiene + Methyl acrylate -> Adduct
- Solvent: [BMIM][Cl]/AlCl3
- Product ratio: 97.2% endo : 2.8% exo (compared to 82:18 in conventional solvents)
- The ionic liquid can be recovered and reused multiple times
- Higher selectivity compared to conventional solvents

**Example 2: Simmons-Smith Reaction (Cyclopropanation)**
Allyl alcohol + CH2I2 -> Cyclopropanation product
- Using ionic liquid [BMIM][PF6]
- Zinc bis(trifluoromethanesulfonimide) [Zn(Tf2N)2] as catalyst
- The reaction is faster in ionic liquid than in ether
- Product yields in [BMIM][PF6] are much higher than in DCM
- Ionic liquid and zinc complex can be recovered and recycled

(Source: PDF Pages 15-17)`,
    images: [
      { page: 16, caption: 'Types of ionic liquids and their properties' },
      { page: 17, caption: 'Ionic liquid synthesis and Simmons-Smith reaction' },
    ],
  },
  {
    id: 17,
    section: 'Green Solvents',
    question: 'Write short notes on Immobilized solvents.',
    marks: '2.5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [22],
    importance: 3,
    answer: `**Immobilized Solvents:**

Immobilized solvents are solvents that are chemically attached (anchored) to solid supports, typically silica or polymer materials. This approach combines the benefits of both homogeneous and heterogeneous catalysis systems.

**How they work:**
The solvent molecule is tethered to an insoluble support material through a covalent chemical bond. For example, a polyethylene glycol (PEG) chain can be attached to silica gel.

**Advantages:**
1. **Easy separation**: The anchored solvent stays with the solid support and can be easily filtered or separated from the reaction mixture
2. **No solvent contamination**: The product is not contaminated with free solvent
3. **Reusability**: The immobilized solvent can be recovered and reused multiple times
4. **Combines homogeneous and heterogeneous benefits**: Reagents get the solvation benefits of the solvent while the system behaves like a heterogeneous catalyst

**Example - Silica-supported PEG:**
When a PEG molecule is tethered to silica gel, it can act as a solvent for various reactions. The solubilizing power of PEG is retained, but it can be easily separated from the product by simple filtration.

**Applications:**
- Used in reactions where solvent recovery is important
- Particularly useful in pharmaceutical synthesis where purity is critical
- Environmentally friendly alternative to traditional solvent extraction methods

(Source: PDF Page 22)`,
  },
  {
    id: 18,
    section: 'Green Solvents',
    question: 'Discuss the advantages of any two alternatives to the VOCs. Mention the names of organic solvents that are benign to the environment.',
    marks: '5 Marks',
    year: '2021',
    status: 'well_answered',
    pdfPages: [9, 10, 11, 12, 13, 15, 16, 21, 22],
    importance: 4,
    answer: `**Two Alternatives to VOCs and Their Advantages:**

**1. Supercritical CO2 (scCO2)**

Advantages over VOCs:
- **Non-flammable**: Unlike many organic solvents, scCO2 does not burn, making it much safer to handle
- **Non-toxic**: CO2 is a natural compound that is not harmful to human health at normal exposure levels
- **Inexpensive**: CO2 is cheap and readily available as a by-product of other industrial processes
- **Environmentally benign**: It does not contribute to smog formation or ozone depletion
- **Easy removal**: After the reaction, CO2 simply depressurizes to gas and can be vented or recycled - no solvent residue remains in the product
- **Tunable properties**: By changing temperature and pressure, the solvent properties of scCO2 can be adjusted for different reactions
- **High diffusion rates**: Supercritical fluids have gas-like diffusion, allowing faster reactions

**2. Ionic Liquids (ILs)**

Advantages over VOCs:
- **Negligible vapor pressure**: They do not evaporate into the atmosphere, eliminating air pollution
- **Non-flammable**: Most ionic liquids are not combustible
- **Recyclable**: They can be reused many times without loss of activity
- **"Designer solvents"**: Their properties can be tailored by choosing different cation-anion combinations
- **Wide liquid range**: Many remain liquid from below room temperature to above 300 degC
- **Can act as both solvent and catalyst**: Some ionic liquids serve dual purposes

---

**Names of Organic Solvents Benign to the Environment:**
1. **Ethyl acetate** - biodegradable, low toxicity
2. **Ethanol** - renewable, biodegradable
3. **2-Methyltetrahydrofuran (2-MeTHF)** - derived from renewable resources
4. **Glycerol** - non-toxic, biodegradable, from renewable sources
5. **Propylene glycol** - safe, non-toxic alternative
6. **Water** - the ultimate green solvent (inorganic but environmentally benign)
7. **Supercritical CO2** - non-toxic, non-flammable, recyclable
8. **PEG (Polyethylene glycol)** - non-toxic, biodegradable

(Source: PDF Pages 9-22)`,
  },
  {
    id: 19,
    section: 'Green Solvents',
    question: 'Why CO2 is commonly used as supercritical fluid? Name a few other supercritical fluids. What are the drawbacks of using scCO2?',
    marks: '5 Marks',
    year: '2021',
    status: 'well_answered',
    pdfPages: [10, 11],
    importance: 5,
    answer: `**Why CO2 is commonly used as Supercritical Fluid:**

A supercritical fluid exists above its critical temperature (Tcrit) and critical pressure (Pcrit). For CO2, the critical point is easily accessible:
- **Tcrit of CO2 = 31.1 degC** (near room temperature!)
- **Pcrit of CO2 = 72.8 bar** (moderately high pressure)

Reasons for choosing CO2:

1. **Easily accessible critical point**: The critical temperature is near room temperature, so high temperatures are not needed. This saves energy and prevents thermal degradation of heat-sensitive compounds.

2. **Non-flammable**: Unlike many organic solvents, CO2 does not burn, making it safe for industrial use.

3. **Non-toxic**: CO2 is a natural compound found in our bodies and the environment. It does not cause health hazards at normal exposure levels.

4. **Inexpensive**: CO2 is cheap and readily available, often as a by-product from ammonia plants and fermentation processes.

5. **High diffusion coefficient**: Supercritical CO2 has gas-like diffusion rates, which means it penetrates materials quickly and speeds up reactions.

6. **Adjustable solvent properties**: The density (and therefore solvating power) of scCO2 can be tuned simply by changing pressure or temperature.

7. **Easy removal**: After use, CO2 simply returns to gas phase upon depressurization, leaving no solvent residue.

---

**Other Supercritical Fluids:**
| Fluid | Tcrit (degC) | Pcrit (bar) |
|-------|------------|-------------|
| Methane | -82.6 | 45.9 |
| Ethane | 32.2 | 48.2 |
| Ethene | 9.3 | 50.3 |
| Water | 374.2 | 220.5 |
| Ammonia | 132.5 | 112.5 |
| Propane | 96.7 | 41.9 |
| Fluoroform | 25.9 | 48.2 |

---

**Drawbacks of using scCO2:**

1. **High pressure requirement**: The critical pressure of 72.8 bar requires specialized high-pressure equipment, which is expensive.

2. **Expensive equipment**: High-pressure vessels, pumps, and safety systems are costly to install and maintain.

3. **Poor solubility of polar compounds**: scCO2 is non-polar and dissolves non-polar substances well, but polar compounds (like sugars, salts, most pharmaceuticals) are not soluble. This limits its application range.

4. **Requires co-solvents**: To dissolve polar compounds, co-solvents (modifiers like methanol) must be added, which reduces the "green" advantage.

5. **Safety concerns**: Although non-flammable, high-pressure CO2 systems require careful handling to prevent rapid depressurization accidents.

(Source: PDF Pages 10-11)`,
    images: [{ page: 11, caption: 'Table of critical temperatures and pressures of various fluids' }],
  },
  {
    id: 20,
    section: 'Green Solvents',
    question: 'Why do we call ionic liquids as "designer solvents"?',
    marks: '2 Marks (Repeated 4 Times: 2021, 2022, 2023, 2024)',
    year: '2021, 2022, 2023, 2024',
    repeated: '4 Times',
    status: 'well_answered',
    pdfPages: [16],
    importance: 5,
    answer: `**Why Ionic Liquids are called "Designer Solvents":**

Ionic liquids are called **"designer solvents"** because their physical and chemical properties can be custom-designed and tailored for specific applications by choosing appropriate cation-anion combinations.

**Key reasons:**

1. **Tunable properties**: By changing the cation (imidazolium, pyridinium, ammonium, phosphonium) or the anion (PF6-, BF4-, Cl-, Br-), we can control:
   - Melting point
   - Viscosity
   - Density
   - Polarity
   - Solubility characteristics
   - Acidity/basicity
   - Hydrophobicity/hydrophilicity

2. **Custom combinations**: There are thousands of possible cation-anion pairs, giving us a vast library of solvents with different properties.

3. **Task-specific design**: For a particular reaction, we can design an ionic liquid that:
   - Dissolves the reactants
   - Provides the right reaction environment (acidic, basic, or neutral)
   - Facilitates product separation
   - Can be recovered and reused

4. **Three types available**: We can choose neutral, acidic, or basic ionic liquids depending on the reaction requirements.

5. **Example of tailor-made property**: [BMIM][PF6] is hydrophobic and suitable for organic reactions, while [BMIM][BF4] is more hydrophilic - simply changing the anion changes the solvent behavior.

This ability to "design" the solvent for a specific task, like a tailor making a custom suit, is why ionic liquids are called "designer solvents."

(Source: PDF Page 16)`,
  },
  {
    id: 21,
    section: 'Green Solvents',
    question: 'Mention two advantages of using scCO2 as a solvent for organic synthesis / food extraction industry.',
    marks: '2 Marks (Repeated 2 Times: 2022, 2023)',
    year: '2022, 2023',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [10, 11],
    importance: 4,
    answer: `**Two Advantages of Using scCO2:**

**1. Food Extraction Industry (Caffeine from Coffee/Tea):**

- **Selective extraction**: The density and solvating power of scCO2 can be tuned by adjusting temperature and pressure. This allows selective extraction of caffeine without removing other flavor compounds from coffee or tea.
- **No toxic residue**: After extraction, when pressure is released, CO2 simply evaporates as a gas, leaving absolutely no solvent residue in the food product. This makes it ideal for food-grade applications.
- **Process**: Raw green coffee beans are steamed to release caffeine, then scCO2 selectively dissolves and removes the caffeine. The caffeine-free CO2 is recycled, and the beans retain their original flavor.

**2. Organic Synthesis:**

- **Environmentally benign**: scCO2 is non-toxic, non-flammable, and does not contribute to air pollution or smog formation. Unlike VOCs, it does not evaporate into the atmosphere.
- **Easy product separation**: After the reaction, simply reducing the pressure converts scCO2 to gas, which separates cleanly from the products. No energy-intensive distillation or solvent recovery steps are needed.
- **High diffusion rates**: The gas-like diffusion of scCO2 means reactants mix faster, leading to quicker reactions and higher throughput.
- **Recyclable**: The CO2 gas can be recompressed and reused, making the process economically and environmentally sustainable.

These advantages make scCO2 one of the most promising green solvents for both industrial extraction and chemical synthesis.

(Source: PDF Pages 10-11)`,
  },
  {
    id: 22,
    section: 'Green Solvents',
    question: 'Give reasons why water is considered as a unique reaction medium in terms of economic and environmental benefits. Why does water behave differently under special conditions?',
    marks: '5 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [12, 13, 14, 15],
    importance: 5,
    answer: `**Why Water is a Unique Reaction Medium:**

**Economic Benefits:**

1. **Readily available and cheap**: Water is the most abundant and inexpensive solvent on Earth. It costs almost nothing compared to organic solvents.

2. **Safe to handle**: Water is non-flammable and non-toxic, eliminating the need for expensive safety equipment and ventilation systems.

3. **Easy separation**: Organic products typically do not mix with water, so they can be separated by simple phase separation (decantation or extraction), saving energy and equipment costs.

4. **No disposal cost**: Unlike organic solvents that require expensive disposal procedures, water can be safely released to the environment after treatment.

**Environmental Benefits:**

1. **Non-toxic**: Water poses no health risk to workers or the environment.

2. **Non-flammable**: No fire hazards, reducing industrial accidents.

3. **Renewable**: Water is a naturally renewable resource.

4. **Hydrophobic effect**: In water, non-polar molecules are pushed together, which can accelerate certain reactions like the Diels-Alder reaction by up to 700 times.

5. **Enhanced solubility of gases**: Oxygen and hydrogen are more soluble in water at elevated temperatures, which is useful for oxidation/hydrogenation reactions.

---

**Why Water Behaves Differently Under Special Conditions:**

**1. At High Temperature (around 200-300 degC):**

As temperature increases, water's properties change dramatically:
- **Dielectric constant decreases**: At room temperature, water has a high dielectric constant (~78), which makes it excellent for dissolving ionic compounds. At 200 degC, the dielectric constant drops to about 35 (similar to acetonitrile at room temperature). This means hot water can dissolve organic compounds that are normally insoluble.
- **Density decreases**: Water becomes less dense and more "organic-like."
- **Hydrogen bonding weakens**: The hydrogen-bonded network of water molecules breaks down, reducing water's polarity.
- **Increased solubility of organic compounds**: Organic compounds like benzene, toluene, and naphthalene become soluble in hot water.
- **More like an organic solvent**: At high temperature, water behaves more like an organic solvent, enabling reactions that normally require toxic organic solvents.

**2. At Very High Temperature (around 375 degC, near critical point):**
- Water becomes completely miscible with many organic compounds
- It can dissolve non-polar substances like oils and waxes
- The ionic product increases, making water both acidic and basic simultaneously

This is why many organic reactions that traditionally use organic solvents can be carried out in water simply by raising the temperature, making the process greener and more economical.

(Source: PDF Pages 12-15)`,
    images: [
      { page: 13, caption: 'Diels-Alder reaction in water medium' },
      { page: 14, caption: 'Water as unique reaction medium - properties' },
    ],
  },
  {
    id: 23,
    section: 'Green Solvents',
    question: 'Mention two characteristics of water that make it a benign solvent.',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [14, 15],
    importance: 3,
    answer: `**Two Characteristics that make Water a Benign Solvent:**

**1. High Heat Capacity:**
Water has one of the highest specific heat capacities of any liquid (4.18 J/g degC). This means:
- Water can absorb a large amount of heat without a significant temperature change
- Reactions in water can be controlled more precisely because temperature fluctuations are minimal
- This makes water ideal for exothermic reactions where heat management is critical
- Energy costs are reduced because less external heating/cooling is needed

**2. Enhanced Solubility of Gases at Elevated Temperatures:**
- At elevated temperatures, the solubility of gases like O2 and H2 in water increases significantly
- This is very useful for oxidation and hydrogenation reactions where these gases are reactants
- Higher gas solubility means faster reaction rates and better yields
- Reactions can be carried out without the need for pressurized gas systems or special equipment

These characteristics, combined with water being non-toxic, non-flammable, cheap, and readily available, make it one of the most environmentally benign and economically viable solvents for chemical reactions.

(Source: PDF Pages 14-15)`,
  },
  {
    id: 24,
    section: 'Green Solvents',
    question: 'In the successful synthesis of an ionic liquid (IL), what are the two important factors that should be maintained?',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [17],
    importance: 3,
    answer: `**Two Important Factors for Successful Synthesis of Ionic Liquids:**

**1. Moisture-Free Condition (Anhydrous):**
The synthesis of ionic liquids must be carried out under strictly moisture-free conditions. This means:
- All glassware must be thoroughly dried before use
- Reagents must be anhydrous (free from water)
- The reaction should be performed under an inert atmosphere (nitrogen or argon)
- Even trace amounts of water can interfere with the reaction and affect the purity of the ionic liquid

**2. Completely Dry Glassware:**
All glassware used in the preparation must be completely dry because:
- Water can react with the starting materials (especially halide salts)
- Moisture affects the ion exchange process
- The presence of water changes the physical properties of the final ionic liquid
- Purity is critical because ionic liquids are often used in sensitive catalytic reactions

These two factors are essential because ionic liquids are hygroscopic (they absorb moisture from the air), and water contamination can significantly alter their properties such as viscosity, conductivity, and catalytic activity.

(Source: PDF Page 17)`,
  },
  {
    id: 25,
    section: 'Green Solvents',
    question: 'Complete the synthesis of the following ionic liquid by providing structures for the missing compounds A, B, C, D and E.',
    marks: '3 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [17],
    importance: 4,
    answer: `**Synthesis of [BMIM][PF6] Ionic Liquid:**

The step-by-step synthesis with all structures:

**Step 1:** N-methylimidazole + Bromobutane -> [BMIM][Br]
- 1,3-dimethylimidazole reacts with 1-bromobutane
- This is an alkylation reaction at the imidazole nitrogen
- Forms 1-butyl-3-methylimidazolium bromide ([BMIM][Br])

**Step 2:** [BMIM][Br] + HPF6 -> [BMIM][PF6] + HBr
- The bromide salt is treated with hexafluorophosphoric acid
- Anion exchange occurs: Br- is replaced by PF6-
- Forms the final product: 1-butyl-3-methylimidazolium hexafluorophosphate

**The complete sequence:**
N-methylimidazole + CH3(CH2)3Br -> [BMIM][Br] --(HPF6)--> [BMIM][PF6]

**Identification of compounds:**
- **A = [BMIM][Br]** (1-butyl-3-methylimidazolium bromide)
- **B = HBr** (hydrogen bromide - by-product)

**Structure of [BMIM][PF6]:**
- Cation: Imidazolium ring with methyl group at position 1 and butyl group at position 3
- Anion: PF6- (octahedral hexafluorophosphate)

**Key properties of [BMIM][PF6]:**
- Viscosity: 450 cP (centipoise) - it is viscous
- Density: 1.37 g/cm3
- It is a hydrophobic ionic liquid (insoluble in water)
- Soluble in acetone, acetonitrile, methylene chloride, and alkyl acetates
- Insoluble in water, alcohols, ethers, and alkanes

(Source: PDF Page 17)`,
    images: [{ page: 17, caption: 'Synthesis of [BMIM][PF6] ionic liquid' }],
  },
  {
    id: 26,
    section: 'Green Solvents',
    question: '"At high temperature, water becomes more like an organic solvent." Do you agree? Justify with at least two reasons.',
    marks: '3 Marks',
    year: '2024',
    status: 'well_answered',
    pdfPages: [14, 15],
    importance: 4,
    answer: `**"At high temperature, water becomes more like an organic solvent." - YES, I AGREE.**

Water undergoes dramatic property changes at high temperature, making it behave more like an organic solvent. Here are two reasons:

**Reason 1: Decrease in Dielectric Constant**

At room temperature, water has a very high dielectric constant of about 78, which makes it excellent at dissolving ionic compounds (salts, acids, bases). However, as temperature increases:
- At 200 degC, the dielectric constant drops to about 35 (similar to acetonitrile at room temperature)
- At 300 degC, it drops further to about 20 (similar to acetone)
- At the critical point (374 degC), the dielectric constant approaches 5-10 (similar to ethanol or organic solvents)

This decrease in dielectric constant means:
- Water loses its ability to dissolve ionic compounds
- It gains the ability to dissolve organic (non-polar) compounds
- Substances like benzene, toluene, and naphthalene that are insoluble in cold water become soluble in hot water
- This is exactly how organic solvents behave

**Reason 2: Breakdown of Hydrogen-Bonded Network**

In normal liquid water, molecules are extensively hydrogen-bonded to each other, forming a 3D network. This network is responsible for water's high polarity and unique properties. At high temperature:
- The hydrogen bonds between water molecules break down
- The ordered 3D network disintegrates
- Individual water molecules behave more independently
- The polarity of water decreases significantly
- Water molecules can now interact with organic (non-polar) molecules

At very high temperatures (near 375 degC):
- Water becomes completely miscible with benzene and other non-polar organic compounds
- It can dissolve organic materials that are normally insoluble
- The ionic product of water increases, making it act as both an acid and a base simultaneously

These changes clearly demonstrate that at high temperature, water loses its "water-like" properties and acquires "organic solvent-like" properties, enabling organic reactions to be carried out in water without the need for toxic organic solvents.

(Source: PDF Pages 14-15)`,
  },
  {
    id: 27,
    section: 'Green Solvents',
    question: 'Based on the provided passage on the copolymerization of cyclohexane epoxide and CO2 in scCO2: (i) What was the initial ratio of epoxide to CO2? (ii) How was the polyether formation suppressed? (iii) What alternative procedure was used? (iv) Why is the term "copolymerization" used?',
    marks: '5 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [24],
    importance: 4,
    answer: `**Copolymerization of Cyclohexene Epoxide and CO2 in scCO2:**

**(i) Initial Ratio of Epoxide to CO2:**
The initial copolymerization was carried out using a **1:1 (equal) ratio of cyclohexene epoxide to CO2**.

**(ii) How Polyether Formation was Suppressed:**
When the reaction was run with a 1:1 ratio, the scCO2 was rapidly vented from the reactor. The resulting polymer was found to contain a significant proportion of polyether linkages. To suppress polyether formation:
- The ratio of **epoxide to CO2 was raised to 1:10**
- By having a large excess of CO2 in the supercritical medium, the incorporation of CO2 units into the polymer chain was favored over epoxide-epoxide coupling
- This excess CO2 drives the reaction toward polycarbonate formation rather than polyether formation

**(iii) Alternative Procedure Used:**
An alternative procedure was used to increase CO2 incorporation:
- The reaction was run at a **lower temperature (80 degC instead of 100 degC)**
- At this lower temperature, the percentage of CO2 incorporation into the polymer increased from 65% to **80%**
- This is because lower temperature favors the CO2 insertion step over the epoxide homopolymerization step

**(iv) Why "Copolymerization" is Used:**
The term **"copolymerization"** is used because:
- Two different monomers (cyclohexene epoxide AND CO2) are combined together in the polymer chain
- The resulting polymer is a **polycarbonate** containing both epoxide-derived units and CO2-derived units in the same polymer backbone
- It is NOT a simple polymerization of one monomer, but a joint polymerization of two different monomers
- The polymer contains carbonate linkages (-O-CO-O-) formed from CO2 and ether linkages from the epoxide

**Additional Information:**
- The catalyst used was a zinc complex that was active in scCO2
- The polymer obtained has potential applications as a biodegradable plastic
- This is a green process because it uses CO2 (a waste greenhouse gas) as a monomer

(Source: PDF Page 24)`,
    images: [{ page: 24, caption: 'Copolymerization of cyclohexene epoxide and CO2 in scCO2' }],
  },
  {
    id: 28,
    section: 'Green Solvents',
    question: 'The rate of a specific organic reaction is enhanced by almost 700 times when carried out in water as the reaction medium. Identify the reaction and explain the two driving forces responsible for such an enhancement.',
    marks: '4 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [12, 13],
    importance: 5,
    answer: `**The Reaction: Diels-Alder Reaction**

The specific organic reaction that shows approximately **700-fold rate enhancement** in water is the **Diels-Alder reaction** between cyclopentadiene and methyl vinyl ketone (or similar diene-dienophile pairs).

**The Reaction:**
Cyclopentadiene + Methyl vinyl ketone -> Bicyclic adduct (Diels-Alder product)

**Two Driving Forces Responsible for Rate Enhancement:**

**1. The Hydrophobic Effect (Hydrophobic Interactions):**

Water forces non-polar molecules (the diene and dienophile) to come together and aggregate because:
- Non-polar molecules are "uncomfortable" in water and try to minimize their contact with water molecules
- This is called the **"hydrophobic effect"** - water literally pushes the reactant molecules together
- The two reactants are brought into close proximity, effectively increasing their local concentration
- This enhanced local concentration leads to a much faster reaction rate
- The hydrophobic effect also stabilizes the transition state more than the reactants, lowering the activation energy

**2. Hydrogen Bonding Interactions:**

Water forms hydrogen bonds with the transition state of the Diels-Alder reaction:
- The transition state of the Diels-Alder reaction has a more compact, polar structure compared to the reactants
- Water molecules can form hydrogen bonds with the polar carbonyl group (C=O) of the dienophile in the transition state
- These hydrogen bonds stabilize the transition state, lowering the activation energy
- The reactants are less stabilized by hydrogen bonding than the transition state, so the energy barrier for the reaction is reduced
- This selective stabilization of the transition state over the reactants is a key factor in the rate enhancement

**Additional Note:**
- The Diels-Alder reaction also shows enhanced selectivity in water
- The endo:exo selectivity is much higher in water (e.g., 82:18) compared to organic solvents
- Water acts as both a solvent and a catalyst in this reaction

(Source: PDF Pages 12-13)`,
    images: [{ page: 13, caption: 'Diels-Alder reaction in water medium' }],
  },
  {
    id: 29,
    section: 'Green Solvents',
    question: 'Mention the factors responsible for the rate enhancement of organic reactions carried out in aqueous micellar medium. Compare the use of three surfactants (CTAB, SDS, Triton X-100) on the rate of the Diels-Alder reaction.',
    marks: '5 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [13],
    importance: 4,
    answer: `**Factors Responsible for Rate Enhancement in Aqueous Micellar Medium:**

**1. Micellar Solubilization:**
Surfactants form micelles in water above their Critical Micelle Concentration (CMC). Organic reactants are solubilized inside the hydrophobic core of micelles, bringing reactants into close proximity and increasing their effective concentration. The micelle acts like a tiny "nanoreactor" where the reaction takes place at a much higher local concentration of reactants.

**2. The Hydrophobic Effect:**
Similar to reactions in pure water, the hydrophobic effect pushes non-polar reactant molecules together inside the micelle. This reduces the activation entropy and the transition state is more stabilized than the reactants, lowering the activation energy barrier.

**3. Electrostatic Interactions:**
Charged surfactants (like CTAB and SDS) create an electrostatic field at the micelle surface. This can stabilize or destabilize charged transition states. Cationic micelles attract anionic reactants, while anionic micelles attract cationic reactants, concentrating them at the micelle-water interface.

**4. Microenvironment Effect:**
The interior of a micelle has a different polarity and viscosity than bulk water. This altered microenvironment can accelerate reactions by providing a medium that better stabilizes the transition state.

**5. Pre-organization of Reactants:**
Micelles can pre-organize reactants in favorable orientations within their structure, reducing the entropy loss required to reach the transition state.

---

**Why Cationic Micelles (CTAB) Increase Substitution Rate for p-Fluoronitrobenzene with Aniline:**

The reaction of p-fluoronitrobenzene with aniline is a nucleophilic aromatic substitution (SNAr) where aniline acts as the nucleophile. CTAB increases the rate by approximately 30 times because:

- **Concentration effect**: The cationic head groups of CTAB micelles attract the partially negative nitro group of p-fluoronitrobenzene and concentrate both reactants at the micelle surface
- **Aniline is concentrated at the micelle-water interface**: Aniline, being a weak base with moderate hydrophobicity, partitions into the micelle palisade layer where it is concentrated near the substrate
- **Electrostatic stabilization of the Meisenheimer complex**: The negative charge that develops on the Meisenheimer intermediate in SNAr is stabilized by the positive charge of the CTAB head groups, lowering the activation energy

**Why Anionic Micelles (SDS) Inhibit the Reaction:**

SDS micelles inhibit the reaction because:
- **Electrostatic repulsion**: The anionic sulfate head groups of SDS repel the negatively charged Meisenheimer intermediate, destabilizing the transition state
- **Aniline is excluded from the micelle surface**: The positive charge of aniline (protonated form) may be attracted to the negative surface, but the neutral aniline is repelled by the anionic head groups, preventing effective concentration of both reactants
- **The negative charge on SDS micelles increases the energy barrier** for the formation of the negatively charged intermediate, thus inhibiting the reaction

| Surfactant | Type | Effect on SNAr Rate | Reason |
|-----------|------|---------------------|--------|
| **CTAB** | Cationic | 30x rate enhancement | Attracts and concentrates both reactants; stabilizes Meisenheimer intermediate |
| **SDS** | Anionic | Inhibits reaction | Repels Meisenheimer intermediate; prevents reactant co-localization |
| **Triton X-100** | Non-ionic | Moderate enhancement | Provides hydrophobic concentration without electrostatic effects |

(Source: PDF Pages 12-15, 30)`,
  },

  // ==================== SECTION 4: GREEN SYNTHESIS ====================
  {
    id: 30,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Describe two important green syntheses that can be carried out in solvent-free conditions.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [21, 22],
    importance: 4,
    answer: `**Two Important Green Syntheses in Solvent-Free Conditions:**

**1. Diels-Alder Reaction (Solvent-Free):**

The Diels-Alder reaction is a [4+2] cycloaddition between a diene and a dienophile that forms a six-membered ring.

**Reaction:**
Cyclopentadiene + Maleic anhydride -> Norbornene derivative (endo adduct)

**Green Features:**
- Carried out **without any solvent** - the reactants are simply mixed together
- The reaction is **highly exothermic** and proceeds spontaneously
- **100% atom economy** - all atoms from both reactants are incorporated into the product
- No waste is generated
- No need for solvent recovery or disposal
- Product can be purified by simple recrystallization
- High yield and excellent endo selectivity

**Mechanism:**
The reaction proceeds through a concerted cyclic transition state where the diene (4 pi electrons) and dienophile (2 pi electrons) combine to form two new sigma bonds and a new pi bond simultaneously.

---

**2. Oxidation of Alcohols to Aldehydes (Solvent-Free):**

The oxidation of primary alcohols to aldehydes can be carried out using solid-supported oxidants without any solvent.

**Reaction:**
R-CH2-OH --(Solid oxidant, no solvent)--> R-CHO

**Green Features:**
- Uses **solid-supported reagents** like polymer-supported chromium(VI) reagents
- **No solvent** needed for the oxidation step
- The reagent can be **recovered and regenerated** by filtration
- Reduced exposure to toxic chromium compounds (they are bound to the polymer)
- Easy separation of products by simple filtration
- Can also use PCC (Pyridinium chlorochromate) supported on alumina

**Advantages of Solvent-Free Synthesis:**
1. Eliminates the need for potentially toxic organic solvents
2. No solvent waste to dispose of
3. Higher concentration of reactants often leads to faster reactions
4. Simplified work-up and product isolation
5. Lower cost (no solvent purchase or recovery)
6. Safer for workers (no exposure to volatile solvents)
7. Environmentally friendly - no VOC emissions

(Source: PDF Pages 21-22)`,
  },
  {
    id: 31,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Describe the green synthesis of (i) adipic acid from cyclohexene and (ii) benzoic acid from toluene.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [25, 26, 35],
    importance: 4,
    answer: `**(i) Green Synthesis of Adipic Acid from Cyclohexene:**

Adipic acid is an important industrial chemical used in the production of nylon-6,6. The green synthesis avoids toxic nitric acid.

**Reaction Sequence:**
Cyclohexene --(1. HCO2H, H2O2; 2. OH-)--> Adipic acid

**Step-by-Step:**
Step 1: Cyclohexene reacts with formic acid (HCO2H) and hydrogen peroxide (H2O2)
Step 2: This forms a diol intermediate (cyclohexane-1,2-diol)
Step 3: Oxidative cleavage with hydroxide (OH-) gives adipic acid

**Green Features:**
- Uses H2O2 (clean oxidant - produces only water as by-product)
- Uses formic acid (relatively benign compared to nitric acid)
- Avoids concentrated HNO3 which produces toxic NOx gases
- One-pot synthesis (all steps in same vessel)

**Comparison with Non-Green Method:**
The conventional industrial process uses benzene -> cyclohexane -> cyclohexanone/cyclohexanol (KA oil) -> adipic acid using concentrated HNO3. This produces large amounts of nitrous oxide (N2O), a potent greenhouse gas.

---

**(ii) Green Synthesis of Benzoic Acid from Toluene:**

**Reaction:**
Toluene (Ph-CH3) --(Cobalt catalyst, O2, acetic acid)--> Benzoic acid (Ph-CO2H)

**Green Features:**
- Uses molecular oxygen (O2) as the oxidant - the ultimate green oxidant
- Cobalt salt catalyst is recyclable
- Only water is formed as a by-product
- Avoids toxic oxidants like KMnO4 or chromic acid
- The catalyst can be recovered and reused

**Mechanism:**
1. The cobalt catalyst activates the benzylic C-H bond of toluene
2. O2 inserts into this activated C-H bond
3. Further oxidation gives benzoic acid
4. The cobalt catalyst is regenerated

**Why it's green:**
- Catalytic process (not stoichiometric)
- Uses air/O2 (renewable, non-toxic)
- No hazardous waste
- High atom economy
- Industrially viable process (Amoco process)

(Source: PDF Pages 25-26, 35)`,
    images: [{ page: 25, caption: 'Green synthesis of adipic acid from cyclohexene' }],
  },
  {
    id: 32,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Does the direct interaction of ultrasound waves responsible for bringing about chemical changes? Justify in light of cavitation theory.',
    marks: '5 Marks (Repeated 2 Times: 2021, 2024)',
    year: '2021, 2024',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [26, 27],
    importance: 5,
    answer: `**No, the direct interaction of ultrasound waves is NOT responsible for chemical changes.**

Ultrasound waves are sound waves with frequencies higher than the upper audible limit of human hearing (>20 kHz). They do NOT directly cause chemical changes by interacting with molecules. Instead, chemical changes occur due to a phenomenon called **cavitation**.

**Cavitation Theory:**

**What is Cavitation?**
Cavitation is the formation, growth, and implosive collapse of microscopic gas bubbles (cavities) in a liquid when ultrasound passes through it.

**The Process:**

1. **Bubble Formation (Rarefaction Phase):**
   - When ultrasound passes through a liquid, it creates alternating regions of high pressure (compression) and low pressure (rarefaction)
   - During the rarefaction (low pressure) phase, tiny gas bubbles (cavities) present in the liquid expand and grow

2. **Bubble Growth:**
   - Over several acoustic cycles, these bubbles absorb gas and vapor from the surrounding liquid
   - They grow larger with each cycle

3. **Bubble Collapse (Implosion):**
   - When the bubbles reach a critical size (about 10-100 micrometers), they can no longer absorb energy efficiently
   - During the next compression phase, the bubbles undergo **violent, implosive collapse**
   - This collapse happens in microseconds

4. **Extreme Local Conditions Created:**
   - **Temperature**: Up to **5000 K** (comparable to the surface of the sun!) is generated locally inside the collapsing bubble
   - **Pressure**: Up to **1000 atm** (about 1000 times normal atmospheric pressure)
   - These extreme conditions are localized in tiny regions (microscopic hotspots)

5. **Chemical Effects:**
   - The extreme heat and pressure cause bond breaking in molecules
   - Water molecules inside the bubble dissociate: H2O -> H. + .OH (hydrogen and hydroxyl radicals)
   - These highly reactive free radicals then initiate chemical reactions in the bulk liquid
   - The high-velocity microjets and shock waves from bubble collapse near surfaces also enhance mass transfer and reaction rates

**Conclusion:**
The ultrasound waves themselves do NOT directly break chemical bonds. The chemical changes are caused by the **extreme local conditions** (temperature ~5000K, pressure ~1000 atm) generated during **cavitation bubble collapse**. This is why sonochemistry is so effective - it creates conditions that would be impossible to achieve by conventional heating.

**Example - Simmons-Smith Reaction:**
The cyclopropanation of allyl alcohol using ultrasound and zinc-triflimide catalyst in ionic liquid is an example where cavitation enhances the reaction rate significantly compared to conventional stirring.

(Source: PDF Pages 26-27)`,
    images: [{ page: 27, caption: 'Cavitation theory and ultrasound effects' }],
  },
  {
    id: 33,
    section: 'Green Synthesis and Alternative Energy',
    question: 'How is the polarity of a molecule associated with the absorption of Microwave radiations?',
    marks: '2 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [34],
    importance: 3,
    answer: `**Polarity and Microwave Radiation Absorption:**

Microwave heating occurs through the interaction of microwave radiation (frequency ~2.45 GHz) with **polar molecules**. The relationship between polarity and microwave absorption is direct and fundamental:

**1. Polar Molecules Absorb Microwaves:**
- Polar molecules have a permanent dipole moment (positive and negative ends)
- Examples: Water (H2O), methanol, ethanol, DMSO, acetone
- When microwave radiation passes through these molecules, the electric field of the microwave causes the dipoles to align and rotate

**2. How it Works - Dipolar Polarization:**
- The microwave electric field oscillates rapidly (2.45 billion times per second)
- Polar molecules try to align themselves with this changing field
- This causes constant rotation of the molecules (called dipolar polarization)
- The molecular rotation generates heat through friction and collisions with neighboring molecules
- This is why microwave heating is called **dielectric heating**
- **More polar molecules = stronger dipole = more interaction with the field = more absorption = faster heating**

**3. Non-Polar Molecules Do NOT Absorb:**
- Non-polar molecules (like hexane, benzene, toluene) do not have a permanent dipole
- They cannot interact with the microwave electric field
- Therefore, non-polar solvents remain cold in a microwave oven
- This is why reactions in non-polar solvents require alternative heating

**4. Dielectric Constant as a Measure:**
- The ability of a molecule to absorb microwaves is measured by its **dielectric constant** (or loss tangent)
- Higher dielectric constant = better microwave absorption = faster heating
- Water has a high dielectric constant (~80 at room temperature), making it excellent for microwave heating
- Hexane has a very low dielectric constant (~1.9), so it does not absorb microwaves

**Summary:** Only polar molecules with a permanent dipole moment can absorb microwave radiation. The more polar the molecule, the more strongly it interacts with the oscillating electric field, and the more microwave energy it absorbs. This is why water heats very quickly in a microwave while oil does not.

(Source: PDF Page 34)`,
  },
  {
    id: 34,
    section: 'Green Synthesis and Alternative Energy',
    question: 'The internal temperature of a solvent heated under microwave irradiation can be greater than its boiling point. Justify or criticize.',
    marks: '2 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [34],
    importance: 3,
    answer: `**This statement is TRUE - I JUSTIFY it.**

Under microwave irradiation, the internal temperature of a solvent can indeed exceed its normal boiling point. This phenomenon is called **"superheating."**

**Justification:**

**1. Superheating Effect:**
- In conventional heating, the liquid at the bottom of the vessel heats first and rises, creating convection currents
- Bubbles form at nucleation sites (surface imperfections) when vapor pressure equals atmospheric pressure
- In microwave heating, heating occurs throughout the bulk of the liquid simultaneously (volumetric heating)
- The surface of the liquid remains relatively cooler since it is not in direct contact with a hot surface
- There are fewer nucleation sites for bubble formation
- The liquid can be heated above its boiling point without boiling (superheating)

**2. Mechanism of Superheating:**
- Microwave energy is absorbed directly by polar molecules throughout the liquid (volumetric heating)
- The bulk liquid heats up faster than the surface
- Without proper nucleation sites, bubbles cannot form easily even when the temperature exceeds the boiling point
- The lack of nucleation sites prevents the phase transition from liquid to gas
- The temperature can rise **20-30 degC above** the normal boiling point
- Eventually, when boiling does occur, it can be very vigorous (bumping)

**3. Example:**
- Water normally boils at 100 degC at 1 atm
- Under microwave irradiation, water can reach 110-120 degC or even higher before boiling occurs
- In sealed vessels, temperatures of 150-200 degC can be achieved
- In organic synthesis, this superheating accelerates reactions significantly

**4. Practical Implications:**
- Faster reaction rates due to higher temperatures
- Reactions that normally require high-boiling solvents can be done in lower-boiling solvents
- However, superheating can be dangerous as sudden boiling (bumping) may occur
- Using boiling chips or stir bars helps prevent excessive superheating by providing nucleation sites

**Why microwave heating is preferred:**
The ability to achieve temperatures above the normal boiling point means reactions can be completed in minutes instead of hours. This is one of the key advantages of microwave-assisted organic synthesis (MAOS).

(Source: PDF Page 34)`,
  },
  {
    id: 35,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Explain the different outcomes of a sonication reaction on a benzyl bromide substrate. What do you mean by sonoluminescence?',
    marks: '5 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [26, 27],
    importance: 4,
    answer: `**Different Outcomes of Sonication on Benzyl Bromide Substrate:**

The sonochemical reaction of benzyl bromide (Ph-CH2-Br) can give different products depending on the reaction conditions:

**1. Wurtz-Type Coupling (to form bibenzyl):**
2 Ph-CH2-Br --(Ultrasound, Zn/THF)--> Ph-CH2-CH2-Ph + ZnBr2
- Two benzyl radicals couple together to form bibenzyl
- This occurs through radical intermediates generated by cavitation

**2. Reduction (to form toluene):**
Ph-CH2-Br --(Ultrasound, Zn/H2O)--> Ph-CH3 + HBr
- The benzyl bromide is reduced to toluene
- Water provides hydrogen atoms for the reduction

**3. Substitution with KCN on Alumina (to form benzyl cyanide):**
Ph-CH2-Br + KCN --(Ultrasound, Al2O3 support)--> Ph-CH2-CN + KBr
- Sonication of benzyl bromide with KCN adsorbed on alumina (Al2O3) gives benzyl cyanide (phenylacetonitrile)
- The solid support (Al2O3) provides a large surface area for the reaction
- Cavitation enhances mass transfer between the solid reagent and the organic substrate
- This is a green approach as it avoids using toxic solvents and operates at room temperature

**4. Grignard-Type Reaction:**
Ph-CH2-Br --(Ultrasound, Mg)--> Ph-CH2-MgBr
- Formation of benzyl Grignard reagent
- Ultrasound activates the magnesium surface by cleaning it

---

**Sonoluminescence:**

**Definition:**
Sonoluminescence is the emission of **light** (luminescence) from imploding cavitation bubbles created when a liquid is exposed to intense ultrasound.

**How it occurs:**
1. When cavitation bubbles collapse violently, they create extremely high local temperatures (up to **5000-10,000 K**) and pressures (up to **1000 atm**)
2. These extreme conditions are sufficient to ionize gas atoms inside the bubble
3. The ionized gas emits light when electrons recombine with ions (similar to how neon lights work)
4. The light appears as tiny flashes from individual bubble collapses

**Types:**
- **Single-bubble sonoluminescence (SBSL)**: One bubble trapped in a standing ultrasonic wave emits continuous light pulses
- **Multi-bubble sonoluminescence (MBSL)**: Many bubbles in a cavitation field emit light simultaneously

**Significance:**
- Sonoluminescence provides direct evidence of the extreme temperatures and pressures generated during cavitation
- It confirms that cavitation creates conditions hot enough to drive chemical reactions
- It demonstrates that ultrasound energy is converted into both thermal and electromagnetic radiation through cavitation

(Source: PDF Pages 26-27)`,
  },
  {
    id: 36,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Write down the green synthesis of adipic acid starting from cyclohexene.',
    marks: '3 Marks (Repeated 2 Times: 2022, 2023)',
    year: '2022, 2023',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [25, 26],
    importance: 5,
    answer: `**Green Synthesis of Adipic Acid from Cyclohexene:**

Adipic acid (HOOC-(CH2)4-COOH) is a dicarboxylic acid used to make nylon-6,6. The green synthesis avoids the environmentally harmful nitric acid oxidation.

**Reaction:**
Cyclohexene --(HCO2H, H2O2, then OH-)--> Adipic acid

**Step-by-Step Process:**

**Step 1: Epoxidation**
Cyclohexene + H2O2 --(Formic acid)--> Cyclohexene oxide + H2O
- Hydrogen peroxide (H2O2) in formic acid (HCO2H) converts the double bond to an epoxide
- H2O2 is a green oxidant - its only by-product is water

**Step 2: Hydrolysis**
Cyclohexene oxide + H2O -> trans-1,2-cyclohexanediol
- The epoxide is opened by water to form the diol

**Step 3: Oxidative Cleavage**
trans-1,2-cyclohexanediol --(OH- oxidation)--> HOOC-(CH2)4-COOH (Adipic acid)
- The diol undergoes oxidative cleavage to give adipic acid

**Overall:**
Cyclohexene + H2O2 --(HCO2H, OH-)--> Adipic acid + H2O

**Why this is Green:**

1. **Uses H2O2 as oxidant**: H2O2 is environmentally friendly - it decomposes to water and oxygen only
2. **Avoids concentrated HNO3**: The conventional process uses nitric acid, which produces:
   - Toxic NOx gases (nitrogen oxides)
   - Large amounts of N2O (nitrous oxide, a potent greenhouse gas)
   - Acidic waste water
3. **One-pot synthesis**: All steps can be carried out in the same reaction vessel
4. **High atom economy**: Most atoms end up in the product
5. **Safer conditions**: No corrosive nitric acid needed

**Comparison with Non-Green Route:**
| Feature | Green Route | Conventional Route |
|---------|-------------|-------------------|
| Starting material | Cyclohexene | Benzene |
| Oxidant | H2O2 | HNO3 |
| By-products | H2O | NOx, N2O |
| Steps | 1-pot | Multiple |
| Environmental impact | Low | High |

(Source: PDF Pages 25-26)`,
    images: [{ page: 25, caption: 'Green synthesis of adipic acid' }],
  },
  {
    id: 37,
    section: 'Green Synthesis and Alternative Energy',
    question: 'List two important differences between "Conventional heating" and "Microwave heating".',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [33, 34],
    importance: 3,
    answer: `**Two Important Differences Between Conventional and Microwave Heating:**

**1. Mode of Heating (Surface vs Volumetric):**

- **Conventional Heating**: Heat is transferred from the outside to the inside of the reaction mixture through conduction and convection. The vessel wall heats first, then heat slowly transfers to the center of the liquid. This creates a temperature gradient - the outside is hotter than the inside. This is called **surface heating**.

- **Microwave Heating**: Heat is generated throughout the entire volume of the reaction mixture simultaneously. Microwave energy is absorbed directly by polar molecules in the liquid, causing them to rotate and generate heat everywhere at once. This is called **volumetric heating** or **bulk heating**. There is minimal temperature gradient - the entire liquid heats uniformly.

**2. Heating Rate and Efficiency:**

- **Conventional Heating**: Heating is slow because heat must transfer through the vessel walls and then through the liquid by conduction. A significant amount of energy is lost to the surroundings. It can take hours to reach the desired temperature.

- **Microwave Heating**: Heating is extremely rapid because energy is delivered directly to the molecules. Reactions that take hours with conventional heating can be completed in minutes with microwaves. Energy efficiency is higher because heating is targeted at the reaction mixture, not the vessel or surroundings.

**Additional Differences:**

| Feature | Conventional Heating | Microwave Heating |
|---------|---------------------|-------------------|
| Heat source | External (hot plate, oil bath) | Internal (molecular rotation) |
| Temperature control | Slower response | Rapid, precise |
| Superheating | Not possible | Possible (above boiling point) |
| Selectivity | Heats everything | Selective for polar components |
| Reaction time | Hours | Minutes |
| Energy efficiency | Lower | Higher |

(Source: PDF Pages 33-34)`,
  },
  {
    id: 38,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Identify the non-ionising radiation among the following: X-rays, gamma-rays, MW, UV-Visible, and justify.',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [34],
    importance: 3,
    answer: `**Identification of Non-Ionising Radiation:**

Among the given options — X-rays, gamma-rays, MW (microwave), UV-Visible — the non-ionising radiation is **Microwave (MW)** and **Visible light** (the visible portion of UV-Visible).

**Justification:**

Electromagnetic radiation is classified as ionising or non-ionising based on whether it has enough energy to remove tightly bound electrons from atoms, creating ions. This requires photon energy above approximately 10 eV.

**Ionising radiation** (X-rays and gamma-rays):
- Have very short wavelengths (less than 10 nm) and very high frequencies
- Carry sufficient energy to break chemical bonds and eject electrons from atoms
- X-rays: wavelength 0.01-10 nm, energy > 100 eV
- Gamma-rays: wavelength less than 0.01 nm, energy > 100 keV
- Both can cause DNA damage and are known carcinogens

**Non-ionising radiation** (Microwave and Visible light):
- Have longer wavelengths and lower frequencies
- Their photon energies are far too low to remove electrons from atoms
- Microwave: wavelength ~1 mm to 1 m, energy ~0.00001 to 0.001 eV
- Visible light: wavelength ~400-700 nm, energy ~1.6 to 3.1 eV
- They can only cause molecular vibrations, rotations, or electronic excitations without ionisation

**Why microwave is non-ionising:**
Microwave radiation causes polar molecules to rotate and oscillate (dielectric heating), but the energy per photon (approximately 0.00001 to 0.001 eV) is millions of times too low to break any chemical bond or remove an electron. This is why microwave heating is safe and is widely used in domestic ovens and chemical laboratories.

**Note on UV:** UV radiation is borderline — UV-A and UV-B are generally considered non-ionising, while UV-C and vacuum UV (below 200 nm) can be ionising. In the given list, microwave and visible light are clearly and unambiguously non-ionising.

(Research source: Standard physics/chemistry references)`,
    images: [{ page: 34, caption: 'Microwave heating and electromagnetic spectrum' }],
  },
  {
    id: 39,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Provide two arguments in favour of the statement: "Oxidation of cyclohexanol/cyclohexanone to adipic acid by concentrated nitric acid is not considered a green synthesis".',
    marks: '3 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [26],
    importance: 5,
    answer: `**Why Nitric Acid Oxidation to Adipic Acid is NOT Green:**

**Argument 1: Production of Toxic NOx Gases and N2O (Greenhouse Gas)**

When concentrated nitric acid (HNO3) is used to oxidize cyclohexanol/cyclohexanone to adipic acid, it produces various nitrogen oxides:

- **NO (nitric oxide)** and **NO2 (nitrogen dioxide)**: These are toxic gases that cause respiratory problems and contribute to acid rain and smog
- **N2O (nitrous oxide)**: This is a potent greenhouse gas with a global warming potential about **300 times** that of CO2. It also depletes the ozone layer
- The conventional industrial process for adipic acid production is one of the largest sources of atmospheric N2O emissions

The reactions involved:
C6H10O + HNO3 -> HOOC(CH2)4COOH + NOx + N2O + H2O

These toxic emissions pollute the air, harm human health, and contribute to climate change.

**Argument 2: Use of Corrosive and Hazardous Chemicals** 

- Concentrated nitric acid is a **highly corrosive** and **strongly oxidizing** substance
- It is dangerous to handle, requiring special equipment and safety measures
- It can cause severe burns on contact with skin
- It is a powerful oxidizer that can react violently with organic materials
- The waste stream from this process contains unreacted HNO3 and various nitrogen compounds that are difficult and expensive to treat
- This creates hazardous waste disposal problems and increases the environmental footprint of the process

**Alternative Green Route:**
The green synthesis uses cyclohexene + H2O2/formic acid -> adipic acid, which:
- Uses H2O2 (benign oxidant, produces only water as by-product)
- Does NOT produce NOx or N2O gases
- Does NOT use corrosive nitric acid
- Has higher atom economy
- Is safer and more environmentally friendly

(Source: PDF Page 26)`,
  },
  {
    id: 40,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Why is microwave heating more dynamic and preferred over standard resistive heating methods used in undergraduate laboratories? Write any two reasons.',
    marks: '2 Marks',
    year: '2024',
    status: 'well_answered',
    pdfPages: [33, 34],
    importance: 3,
    answer: `**Why Microwave Heating is More Dynamic and Preferred:**

**Reason 1: Rapid and Selective Heating (Speed)**

- Microwave heating is **volumetric** - energy is absorbed directly by polar molecules throughout the entire reaction mixture simultaneously
- This leads to extremely fast heating rates (temperature can increase by 10 degC per second)
- Reactions that normally take **hours** with conventional heating can be completed in **minutes** with microwaves
- For example, the Dieckmann condensation that takes 4 hours with conventional heating is complete in just 10 minutes using microwave heating (24 times faster!)
- This rapid heating saves enormous amounts of time in both research and industrial settings

**Reason 2: Higher Reaction Temperatures (Superheating)**

- Under microwave irradiation, solvents can be heated **above their normal boiling points** (superheating)
- This is because microwave heating creates fewer nucleation sites for bubble formation
- Higher temperatures mean:
  - Faster reaction rates (typically 10-1000x faster)
  - Higher conversions and yields
  - Some reactions that don't proceed well at normal boiling points work excellently under microwave conditions
- The combination of rapid heating and higher achievable temperatures makes microwave heating far more efficient than conventional resistive heating

**Additional Benefits:**
- Energy efficiency: Only the reaction mixture is heated, not the vessel
- Cleaner products: Shorter reaction times reduce side reactions
- Reproducibility: Precise temperature and time control
- Safety: No open flames or hot oil baths needed

(Source: PDF Pages 33-34)`,
  },
  {
    id: 41,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Define and explain acoustic cavitation with an example.',
    marks: '2 Marks',
    year: '2025',
    status: 'well_answered',
    pdfPages: [26, 27],
    importance: 4,
    answer: `**Acoustic Cavitation:**

**Definition:**
Acoustic cavitation is the phenomenon of formation, growth, and violent collapse of microscopic gas bubbles (cavities) in a liquid when it is exposed to intense ultrasound sound waves.

**Explanation:**

**Step 1 - Formation:**
When ultrasound waves pass through a liquid, they create alternating regions of:
- **Compression** (high pressure)
- **Rarefaction** (low pressure)

During the rarefaction phase, the liquid is "pulled apart" and tiny gas bubbles (cavities) form and grow.

**Step 2 - Growth:**
Over several sound cycles, these bubbles absorb gas and vapor from the surrounding liquid and grow larger.

**Step 3 - Collapse:**
When the bubbles reach a critical size, they can no longer absorb energy efficiently. During the next compression phase, they undergo **violent, implosive collapse**.

**Extreme Conditions Created:**
| Parameter | Value |
|-----------|-------|
| Local Temperature | ~5,000 K (as hot as the sun's surface!) |
| Local Pressure | ~1,000 atm |
| Duration of collapse | Microseconds |

These extreme conditions are enough to:
- Break chemical bonds
- Create free radicals (H., .OH from water)
- Initiate chemical reactions that don't occur under normal conditions
- Generate light (sonoluminescence)

**Example: Simmons-Smith Reaction (Cyclopropanation)**
Allyl alcohol + CH2I2 --(Ultrasound, Zn catalyst in ionic liquid)--> Cyclopropane product

In this reaction:
- Ultrasound activates the zinc catalyst through cavitation
- Cavitation cleans the metal surface and enhances mass transfer
- The reaction rate is significantly higher than with conventional stirring
- The extreme local conditions facilitate the formation of the organozinc intermediate

(Source: PDF Pages 26-27)`,
    images: [{ page: 27, caption: 'Cavitation theory and Simmons-Smith reaction' }],
  },

  // ==================== SECTION 5: BIOPOLYMERS, BIOFUELS, REAL-WORLD ====================
  {
    id: 42,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Write short notes on Bio-diesel.',
    marks: '2.5 Marks (Repeated 4 Times: 2020, 2021, 2023, 2025)',
    year: '2020, 2021, 2023, 2025',
    repeated: '4 Times',
    status: 'well_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Biodiesel**

Biodiesel is a renewable, biodegradable alternative fuel produced from vegetable oils, animal fats, or recycled cooking oils (yellow grease) through a chemical process called **transesterification**.

**Production Process (Transesterification):**
In transesterification, the triglycerides in vegetable oil or animal fat react with a short-chain alcohol (typically methanol or ethanol) in the presence of a catalyst (NaOH, KOH, or solid acid/base catalysts). The reaction produces **fatty acid methyl esters (FAME)** — which is biodiesel — and **glycerol** as a by-product.

**Reaction:** Triglyceride + 3 CH3OH --(NaOH/KOH catalyst)--> 3 FAME (biodiesel) + Glycerol

**Key Properties:**
- Renewable and biodegradable
- Low toxicity compared to petroleum diesel
- Lower emissions of CO, particulate matter, and unburned hydrocarbons
- Higher cetane number (better ignition quality)
- Good lubricity (extends engine life)
- Can be used in pure form (B100) or blended with petroleum diesel (e.g., B20 = 20% biodiesel)

**Advantages:**
- Carbon-neutral (CO2 released = CO2 absorbed by plants during growth)
- Reduces dependence on imported fossil fuels
- Non-toxic and biodegradable — safer spills
- Can be produced from waste cooking oils
- Reduces sulfur emissions (essentially sulfur-free)

**Limitations:**
- Higher viscosity than petroleum diesel (can cause engine issues in cold weather)
- Lower energy density (~9% less energy per gallon)
- Potential food vs. fuel competition if food crops are used
- Requires engine modifications for B100 use in older vehicles

(Source: PDF Pages 9, 10; Research supplemented)`,
  },
  {
    id: 43,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'State the important characteristics of Rightfit Pigments and briefly explain how they have been established as a better alternative compared to toxic inorganic pigments.',
    marks: '5 Marks (Repeated 2 Times: 2020, 2024)',
    year: '2020, 2024',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [],
    importance: 4,
    answer: `**Rightfit Pigments**

Rightfit pigments are a family of **synthetic organic azo pigments** developed by **Engelhard Corporation** (now BASF), which won the **2004 Presidential Green Chemistry Challenge Award** (Designing Greener Chemicals category). They are designed to replace conventional heavy-metal-based inorganic pigments in the red, orange, and yellow color market.

**Important Characteristics:**

1. **Safer metal composition**: They contain **calcium (Ca), strontium (Sr), or barium (Ba)** instead of toxic heavy metals like lead (Pb), hexavalent chromium Cr(VI), or cadmium (Cd). These alkaline earth metals have very low toxicity compared to heavy metals.

2. **Azo-based organic structure**: They are organic azo pigments (containing the -N=N- chromophore group), which gives them excellent color strength and vibrancy comparable to heavy-metal pigments.

3. **Very low migration**: The pigments have extremely low migration (leaching) from the materials they color, reducing exposure risk to humans and the environment.

4. **Regulatory approval**: Most Rightfit pigments have received approval from the **U.S. FDA** and the **Canadian Health Protection Branch (HPB)** for **indirect food contact applications** — something not possible with heavy-metal pigments.

5. **Manufactured in aqueous media**: They are synthesized in water-based medium, eliminating the need for large volumes of organic solvents and avoiding exposure to polychlorinated intermediates (like dichlorobenzidine) associated with traditional high-performance pigments.

6. **Earth-abundant elements**: Ca, Sr, and Ba are abundant in the earth's crust, unlike scarce and toxic heavy metals.

**How Rightfit Pigments Are Better Alternatives to Toxic Inorganic Pigments:**

| Feature | Traditional Heavy-Metal Pigments | Rightfit Azo Pigments |
|---------|--------------------------------|----------------------|
| Heavy metals | Contain Pb, Cr(VI), Cd — highly toxic, carcinogenic | Contain Ca, Sr, Ba — low toxicity |
| Solvent use | Manufactured using large volumes of organic solvents | Manufactured in aqueous medium |
| Food contact | Generally NOT approved | FDA/HPB approved for indirect food contact |
| Environmental risk | Risk of heavy metal leaching into soil/water | Very low migration, minimal risk |
| Chlorinated byproducts | Some based on dichlorobenzidine or polychlorinated phenyls | No chlorinated intermediates |
| Regulatory compliance | Increasingly restricted by EPA worldwide | Meets all current regulations |
| Cost | High-performance organic replacements are expensive | Cost-competitive with heavy-metal pigments |

**Impact**: Since 1995, Engelhard transitioned from producing 6.5 million pounds of heavy-metal pigments to only 1.2 million pounds by 2002, with plans to phase them out completely. Rightfit pigments serve packaging markets for food, beverages, petroleum products, detergents, and household durable goods.

---
*This topic is not covered in the provided PDF. Search in Google: **"Rightfit Pigments EPA Green Chemistry Award 2004 Engelhard"***

(Research source: EPA Green Chemistry Challenge Awards 2004)`,
  },
  {
    id: 44,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'State the important applications of Polylactic acid (PLA) and describe an efficient synthesis of this polymer following green protocols starting from corn.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Applications of Polylactic Acid (PLA):**

PLA has diverse applications across multiple industries:
- **Packaging**: Food containers, cups, plates, clamshells, shrink-wrap films (FDA-approved for food contact)
- **Medical**: Biodegradable sutures, surgical screws, pins, plates, drug delivery systems, tissue engineering scaffolds
- **3D Printing**: Most widely used FDM 3D printing filament
- **Textiles**: Fibers for clothing, nonwoven fabrics, carpets
- **Agriculture**: Mulch films, plant pots that biodegrade in soil
- **Consumer goods**: Disposable cutlery, bags, phone cases

---

**Green Synthesis of PLA from Corn:**

**Step 1: Cultivation of Corn**
Corn is grown as a renewable, annually harvestable feedstock.

**Step 2: Starch Extraction**
Corn kernels are processed through wet milling to extract corn starch.

**Step 3: Enzymatic Hydrolysis of Starch to Glucose**
Corn starch is hydrolyzed into glucose (dextrose) using enzymes (amylases) — a green, aqueous process at mild temperatures. No harsh chemicals are needed.

**Step 4: Fermentation of Glucose to Lactic Acid**
Glucose is fermented by Lactobacillus bacteria (e.g., L. delbrueckii, L. plantarum) under anaerobic conditions to produce lactic acid (2-hydroxypropanoic acid).
- This is a **biocatalytic** (green) process — mild conditions (37-42 degC, atmospheric pressure), aqueous medium, no toxic solvents
- The lactic acid exists as L-lactic acid and D-lactic acid enantiomers

**Step 5: Polymerization to PLA**

**Route A - Direct Condensation Polymerization:**
Lactic acid is polymerized by condensation, removing water under reduced pressure at 130-180 degC. Produces low-to-medium molecular weight PLA.

**Route B - Ring-Opening Polymerization of Lactide (Preferred for high MW):**
- Two lactic acid molecules condense to form **lactide** (a cyclic dimer) under reduced pressure
- Lactide is purified by distillation
- Lactide undergoes **ring-opening polymerization** using a catalyst (traditionally tin(II) octoate, but greener zinc or enzyme catalysts are being developed)
- This produces **high molecular weight PLA** with controlled properties

**Green Protocol Features:**
| Feature | Green Advantage |
|---------|----------------|
| Feedstock | Renewable (corn), not petroleum |
| Hydrolysis | Enzymatic, aqueous, mild conditions |
| Fermentation | Biocatalytic, ambient T and P, no solvents |
| Polymerization | No toxic solvents, catalyst-based |
| Waste | Water and CO2 as by-products |
| Biodegradability | PLA is compostable under industrial conditions |

---
*This question describes synthesis starting from corn. Search in Google: **"PLA polylactic acid synthesis from corn reaction scheme diagram"***

(Source: PDF Pages 32, 33; Research supplemented)`,
  },
  {
    id: 45,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Point out differences between the following pairs: (i) Bio-catalysis & Photo-catalysis, (ii) Catalytic reagents & Stoichiometric reagents.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**(i) Differences between Bio-catalysis and Photo-catalysis:**

| Parameter | Bio-catalysis | Photo-catalysis |
|-----------|--------------|----------------|
| **Definition** | Use of natural catalysts (enzymes, whole cells, microorganisms) to accelerate chemical reactions | Use of light-absorbing catalysts (typically semiconductor materials like TiO2, ZnO, or photosensitizers) to accelerate reactions using light energy |
| **Catalyst type** | Biological: enzymes (proteins), immobilized cells, microbes | Inorganic/organic: TiO2, ZnO, CdS, Ru/Ir complexes, organic dyes |
| **Energy source** | Thermal energy (mild heat, typically 25-40 degC) | Photon energy (light — UV or visible) |
| **Reaction conditions** | Very mild: ambient temperature, atmospheric pressure, aqueous media | Requires light source (UV lamp, LED, sunlight); may need controlled atmosphere |
| **Selectivity** | Extremely high — enzymes are chiral and regio-selective; produce specific enantiomers | Generally lower selectivity — radical-based mechanisms often produce mixtures |
| **Solvent** | Predominantly aqueous (green) | Often requires organic solvents (though aqueous systems exist) |
| **Toxicity** | Non-toxic, biodegradable catalysts from renewable sources | Some photocatalysts (e.g., CdS) are toxic; TiO2 is relatively safe |

**Key example of Bio-catalysis**: Thiamine hydrochloride (Vitamin B1) used as bio-catalyst in benzoin condensation instead of toxic cyanide catalyst. It is non-hazardous, biodegradable, and reactions occur in mild conditions.

**Key example of Photo-catalysis**: TiO2-mediated degradation of organic pollutants in water using sunlight — the photocatalyst absorbs UV light and generates reactive oxygen species that break down contaminants.

---

**(ii) Differences between Catalytic Reagents and Stoichiometric Reagents:**

| Parameter | Catalytic Reagents | Stoichiometric Reagents |
|-----------|-------------------|----------------------|
| **Amount required** | Very small amount (catalytic, typically 0.1-10 mol%) | Large amount (stoichiometric, 1:1 or greater molar ratio) |
| **Consumption** | NOT consumed in the reaction; regenerated and reused | Consumed completely in the reaction; becomes waste |
| **Waste generation** | Minimal waste; catalyst is recovered | Large amounts of waste by-products |
| **Atom economy** | High atom economy | Lower atom economy |
| **E-factor** | Low E-factor | High E-factor |
| **Cost** | Higher initial cost but reusable; cheaper overall | Lower initial cost but generates disposal costs |
| **Green chemistry** | Aligns with Principle 9 (Use catalytic reagents) | Violates Principle 1 (Prevent waste) |
| **Example** | Boric acid catalyst in amide synthesis (AE = 89.2%, E-factor = 0.12) | PCl5 in amide synthesis (AE = 39.7%, E-factor = 1.52) |

**Example illustrating superiority of catalytic reagents:**
In the synthesis of N,N-dimethylbenzamide:
- **Stoichiometric method** (using PCl5): Atom Economy = 39.7%, E-Factor = 1.52, produces toxic POCl3 and HCl waste
- **Catalytic method** (using boric acid): Atom Economy = 89.2%, E-Factor = 0.12, produces only water as by-product

This clearly establishes that catalytic reagents are superior to stoichiometric reagents in green chemistry.

---
*Search in Google for comparison diagrams: **"bio-catalysis vs photo-catalysis diagram"** and **"catalytic vs stoichiometric reagents comparison"***

(Source: PDF Pages 2, 3, 4, 5, 32)`,
  },
  {
    id: 46,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Discuss the application of surfactant-absorbed carbon dioxide for precision cleaning and the service industry.',
    marks: '5 Marks',
    year: '2020',
    status: 'well_answered',
    pdfPages: [],
    importance: 3,
    answer: `**Surfactant-Absorbed Carbon Dioxide for Precision Cleaning and Service Industry**

This technology was developed by **Professor Joseph M. DeSimone** at the University of North Carolina at Chapel Hill (UNC) and North Carolina State University (NCSU), winning the **1997 Presidential Green Chemistry Challenge Award** (Academic category).

**The Innovation:**
The innovation involves designing specialized surfactants (detergents) that make CO2 an effective solvent for industrial cleaning applications. CO2 in its liquid or supercritical state has long been recognized as an ideal solvent — it is nontoxic, nonflammable, energy-efficient, cost-effective, waste-minimizing, reusable, and safe. However, CO2 alone is a very poor solvent for many substances (oils, greases, polar contaminants) at easily accessible conditions.

DeSimone's breakthrough was the identification of **"CO2-philic" polymeric segments** — materials that are highly soluble in CO2. These were used to build **amphiphilic (surfactant) molecules** with a CO2-philic tail and a CO2-phobic head. In CO2, these surfactants form **micelles** — spherical clusters where the CO2-phobic heads surround and trap oily/greasy contaminants while the CO2-philic tails face outward into the CO2 medium.

**Application in Precision Cleaning:**

1. **Metal and Electronic Component Cleaning**: Surfactant-modified CO2 can clean metal components, electronic parts, and precision instruments by removing oils, greases, and particulate contaminants without leaving any solvent residue. This is critical for:
   - Semiconductor manufacturing (cleaning wafers, tools, equipment)
   - Medical device fabrication (sterile, residue-free cleaning)
   - Aerospace component cleaning (no solvent residue on critical parts)

2. **Garment Care (Dry Cleaning)**: Micell Technologies developed commercial CO2 dry-cleaning machines using liquid CO2 (at approximately 18-22 degC) combined with surfactant packages. This eliminates the need for perchloroethylene ("perc"), a suspected carcinogen used in over 80% of traditional dry cleaning.

3. **Service Industry Applications**:
   - Reduced worker exposure to hazardous solvents
   - No hazardous waste disposal costs
   - Energy efficiency — CO2 cleaning operates at near-ambient temperatures
   - CO2 can be captured and reused, making it cost-effective
   - Avoids VOC and HAP (Hazardous Air Pollutant) emissions

**Green Chemistry Advantages:**
- Eliminates need for halogenated organic solvents (over 30 billion pounds used worldwide annually)
- CO2 is non-toxic, non-flammable, and naturally occurring
- Waste minimization through CO2 recapture and reuse
- Energy-efficient process (near-ambient temperatures)
- Safe for workers — no exposure to toxic fumes or carcinogens

---
*This topic is not covered in the provided PDF. Search in Google: **"DeSimone surfactant CO2 precision cleaning EPA Green Chemistry 1997"***

(Research source: EPA Green Chemistry Challenge Awards 1997)`,
  },
  {
    id: 47,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'How can a benzoin condensation be carried out without the use of toxic cyanides?',
    marks: '2 Marks (Repeated 2 Times: 2021, 2023)',
    year: '2021, 2023',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [32, 33],
    importance: 5,
    answer: `**Benzoin Condensation without Toxic Cyanides:**

The traditional benzoin condensation uses **toxic cyanide ions (CN-)** as a catalyst. The green alternative uses **Thiamine hydrochloride (Vitamin B1)** as a bio-catalyst.

**Why Cyanide is Toxic:**
- Cyanide is extremely poisonous and can be lethal even in small amounts
- It inhibits cytochrome c oxidase in mitochondria, preventing cellular respiration
- Handling cyanide requires special safety equipment and procedures
- Cyanide waste disposal is expensive and environmentally hazardous

---

**Green Method using Thiamine Hydrochloride:**

**Thiamine (Vitamin B1)** contains a **thiazolium ring** that acts similarly to cyanide:
- The thiazolium ring has an acidic proton at the C-2 position
- This proton can be removed by a base (like NaOH) to form an ylide (a type of carbanion)
- This ylide can attack the aldehyde carbonyl carbon, just like cyanide does
- The reaction proceeds through the same mechanism but uses a non-toxic, biodegradable catalyst

**Reaction:**
2 Benzaldehyde --(Thiamine HCl, NaOH, Ethanol, Water)--> Benzoin

**Mechanism:**
1. NaOH deprotonates the thiazolium C-2 position of thiamine
2. The resulting ylide attacks benzaldehyde
3. The adduct attacks a second benzaldehyde molecule
4. Proton transfer and elimination of the catalyst gives benzoin
5. Thiamine is regenerated and can catalyze more reactions

**Advantages of Thiamine Method:**
- **Non-toxic**: Vitamin B1 is safe and essential for human health
- **Biodegradable**: Thiamine breaks down naturally in the environment
- **Mild conditions**: Reaction occurs at room temperature in ethanol-water mixture
- **High yield**: Comparable yields to the cyanide method
- **No hazardous waste**: Safe to dispose of
- **Inexpensive**: Thiamine is cheap and readily available
- **Educational**: Can be performed in undergraduate laboratories safely

This is a classic example of Green Chemistry Principle 9: using a catalytic, non-toxic reagent instead of a toxic, stoichiometric one.

(Source: PDF Pages 32-33)`,
    images: [{ page: 32, caption: 'Benzoin condensation using thiamine hydrochloride' }],
  },
  {
    id: 48,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'What is a biofuel? Mention one advantage of biofuel over fossil fuel.',
    marks: '2 Marks',
    year: '2022',
    status: 'well_answered',
    pdfPages: [2],
    importance: 3,
    answer: `**Biofuel**

A **biofuel** is any fuel that is derived from **biomass** — that is, recently living organic matter such as plant materials, agricultural waste, algae, or animal waste. Common types of biofuels include:

- **Bioethanol**: Produced by fermentation of sugars/starches from crops like sugarcane, corn, or cellulosic biomass
- **Biodiesel**: Produced by transesterification of vegetable oils or animal fats
- **Biogas**: Produced by anaerobic digestion of organic waste (mainly methane and CO2)
- **Biohydrogen**: Produced by biological processes from organic matter

Biofuels are considered **renewable energy sources** because the biomass feedstocks can be regrown in a relatively short period (months to years), unlike fossil fuels which take millions of years to form.

**One Advantage of Biofuel Over Fossil Fuel:**

Biofuels are **carbon-neutral** (or nearly so) — the CO2 released when biofuels are burned was recently absorbed from the atmosphere by the plants during photosynthesis, creating a closed carbon cycle. In contrast, burning fossil fuels releases CO2 that was sequestered underground for millions of years, adding net new CO2 to the atmosphere and contributing to climate change and global warming. This makes biofuels a significantly more environmentally sustainable energy option.

(Source: PDF Pages 9, 10; Research supplemented)`,
  },
  {
    id: 49,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Describe the synthesis of PLA preferably using a flow chart diagram. What are the advantages and disadvantages of PLA? Mention two uses of PLA.',
    marks: '7 Marks (Repeated 2 Times: 2022, 2025)',
    year: '2022, 2025',
    repeated: '2 Times',
    status: 'well_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Synthesis of PLA (Polylactic Acid):**

**Flow Chart of PLA Production from Corn:**

Corn (Renewable Feedstock)
    -> Wet Milling / Starch Extraction
    -> Corn Starch
    -> Enzymatic Hydrolysis (Amylase enzymes, aqueous)
    -> Glucose (Dextrose)
    -> Microbial Fermentation (Lactobacillus, anaerobic, 37-42 degC)
    -> Lactic Acid (L- and D- enantiomers)
    -> Pre-condensation to Oligomers
    -> Thermal Depolymerization to Lactide (cyclic dimer)
    -> Purification (Distillation)
    -> Ring-Opening Polymerization (Catalyst: Sn(Oct)2 / Zn / Enzyme)
    -> High Molecular Weight PLA

**Alternative route**: Direct condensation polymerization of lactic acid produces low-to-medium molecular weight PLA (suitable for some applications).

---

**Advantages of PLA:**

1. **Renewable**: Made from annually renewable resources (corn, sugarcane, sugar beet) — not petroleum
2. **Biodegradable and Compostable**: Degrades under industrial composting conditions (58 degC, humidity) within 60-90 days into CO2 and water
3. **Reduced carbon footprint**: Produces 68% fewer greenhouse gases and uses 65% less energy than conventional plastics
4. **Biocompatible**: Non-toxic and safe for medical applications; degrades into lactic acid (naturally occurring in the body)
5. **Versatile processing**: Can be processed using same equipment as conventional plastics (extrusion, injection molding, 3D printing)
6. **Food safe**: FDA-approved for food contact
7. **Clean incineration**: Burns cleanly with no toxic fumes, generates 19.5 MJ/kg energy

**Disadvantages of PLA:**

1. **Low heat resistance**: Glass transition temperature approximately 55-60 degC; deforms with hot liquids
2. **Slow ambient degradation**: Does not degrade readily in ambient conditions or seawater (no significant degradation in over 1 year at 25 degC in seawater)
3. **Requires industrial composting**: Will not compost effectively in home composting or landfill
4. **Higher cost**: More expensive than conventional petroleum-based plastics
5. **Brittle**: Relatively low impact strength and elongation at break
6. **Food vs. fuel debate**: Using food crops (corn) for plastic production may compete with food supply
7. **Recycling challenges**: Cannot be mixed with conventional plastic recycling streams; requires separate collection

**Two Uses of PLA:**

1. **Packaging**: Food containers, cups, plates, clamshells, and shrink-wrap films — PLA is FDA-approved for food contact and provides a sustainable alternative to petroleum-based packaging
2. **Medical implants**: Biodegradable sutures, surgical screws, pins, and drug delivery systems — PLA degrades naturally in the body into lactic acid, eliminating the need for removal surgery

---
*This question asks for a flow chart diagram. Search in Google: **"PLA polylactic acid synthesis flow chart from corn"***

(Source: PDF Pages 32, 33; Research supplemented)`,
    images: [{ page: 32, caption: 'PLA synthesis and benzoin condensation' }],
  },
  {
    id: 50,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'What is "Eutrophication"? How does it affect the ecosystem?',
    marks: '2 Marks',
    year: '2023',
    status: 'well_answered',
    pdfPages: [],
    importance: 3,
    answer: `**Eutrophication**

**Eutrophication** is the gradual increase in the concentration of phosphorus, nitrogen, and other plant nutrients in an aquatic ecosystem (such as a lake, river, or coastal water), leading to excessive growth of algae and other aquatic plants. **Cultural eutrophication** is the accelerated form caused by human activities — agricultural runoff, sewage discharge, industrial effluents, and urban stormwater — as opposed to the natural aging of water bodies.

**How Eutrophication Affects the Ecosystem:**

1. **Algal blooms**: Excess nutrients (especially nitrogen and phosphorus) trigger rapid, uncontrolled growth of phytoplankton and algae, turning water green and creating thick mats on the surface that block sunlight from reaching submerged aquatic vegetation.

2. **Oxygen depletion (Hypoxia/Dead zones)**: When the massive algal blooms die and decompose, bacteria consume dissolved oxygen in the water, creating hypoxic (low-oxygen) or anoxic (no-oxygen) "dead zones" where fish and other aquatic organisms cannot survive. This leads to mass fish kills.

3. **Loss of biodiversity**: Sensitive species are eliminated as water quality deteriorates, reducing overall ecosystem diversity and disrupting food chains.

4. **Toxin production**: Some algal blooms (harmful algal blooms, HABs) release toxins (cyanotoxins) that are harmful to aquatic life, livestock, and humans, causing health risks in drinking water supplies.

5. **Water quality degradation**: Algae cause bad odors, taste problems in drinking water, and clog water treatment filters, increasing the cost of water purification.

6. **Disruption of food chains**: The imbalance in primary and secondary productivity disrupts the entire aquatic food web, affecting everything from microscopic zooplankton to large fish species.

---
*This topic is not covered in the provided PDF. Search in Google: **"eutrophication diagram aquatic ecosystem effects"***

(Research source: Standard environmental chemistry references)`,
  },
  {
    id: 51,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Suggest an environmentally safer alternative reagent to liquid bromine (Br2).',
    marks: '1 Mark',
    year: '2023',
    status: 'well_answered',
    pdfPages: [35],
    importance: 4,
    answer: `**Environmentally Safer Alternative to Liquid Bromine (Br2):**

**KBr/KBrO3 (Potassium bromide / Potassium bromate) system**

**Why Liquid Bromine is Hazardous:**
- Bromine is highly toxic and corrosive
- It causes severe chemical burns on contact with skin
- It produces toxic fumes that are irritating to eyes, skin, and respiratory system
- It is difficult to handle and store safely
- Spills can cause serious environmental damage

**The Green Alternative:**
Instead of using liquid bromine directly, a **bromine surrogate** can be generated in situ (in the reaction mixture) using potassium bromide (KBr) and potassium bromate (KBrO3) in acidic solution.

**Reaction for in situ bromine generation:**
5 KBr + KBrO3 + 6 H+ -> 3 Br2 + 6 K+ + 3 H2O

**Advantages of KBr/KBrO3 System:**

1. **Non-toxic reagents**: Both KBr and KBrO3 are solid salts that are much safer to handle than liquid bromine
2. **In situ generation**: Bromine is generated only when needed and in controlled amounts
3. **No storage hazards**: Solid salts are easy to store and transport
4. **Controlled release**: The amount of bromine generated can be controlled by stoichiometry
5. **Less waste**: The by-products (K+ salts) are relatively benign
6. **Safer for workers**: No direct contact with corrosive liquid bromine
7. **Environmentally friendly**: Reduces the risk of bromine spills and contamination

**Application Example:**
This system can be used for bromination of aromatic compounds, where bromine generated in situ reacts with the substrate without the hazards of handling liquid bromine directly.

(Source: PDF Page 35)`,
  },
];
