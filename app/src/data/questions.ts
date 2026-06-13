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
  well_answered: 'Well Answered in PDF',
  partially_answered: 'Partially in PDF',
  not_in_pdf: 'Not in PDF (Research Added)',
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
    status: 'not_in_pdf',
    pdfPages: [],
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

(Note: This topic is not covered in the provided PDF. Answer compiled from standard Green Chemistry knowledge.)`,
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
    status: 'partially_answered',
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
    status: 'partially_answered',
    pdfPages: [13],
    importance: 4,
    answer: `**Factors Responsible for Rate Enhancement in Aqueous Micellar Medium:**

**1. Micellar Solubilization:**
- Surfactants form micelles in water above their Critical Micelle Concentration (CMC)
- Organic reactants are solubilized inside the hydrophobic core of micelles
- This brings reactants into close proximity, increasing their effective concentration
- The micelle acts like a tiny "nanoreactor" where the reaction takes place

**2. The Hydrophobic Effect:**
- Similar to reactions in pure water, the hydrophobic effect pushes non-polar reactant molecules together
- This reduces the activation entropy (reactants lose less entropy when they come together)
- The transition state is more stabilized than the reactants

**3. Electrostatic Interactions:**
- Charged surfactants (like CTAB and SDS) create an electrostatic field at the micelle surface
- This can stabilize or destabilize charged transition states
- The local environment at the micelle-water interface has different polarity than bulk water

**4. Microenvironment Effect:**
- The interior of a micelle has a different polarity and viscosity than bulk water
- This altered microenvironment can affect reaction rates
- The polarity inside the micelle is intermediate between water and organic solvents

---

**Comparison of Three Surfactants on Diels-Alder Reaction Rate:**

| Surfactant | Type | Charge | Effect on Diels-Alder Rate |
|-----------|------|--------|---------------------------|
| **CTAB** (Cetyltrimethylammonium bromide) | Cationic | Positive | Moderate enhancement |
| **SDS** (Sodium dodecyl sulfate) | Anionic | Negative | Lesser enhancement than CTAB |
| **Triton X-100** | Non-ionic | Neutral | Better enhancement than ionic surfactants |

**Key Points:**
- **Triton X-100** (non-ionic surfactant) generally shows the best rate enhancement because it does not introduce electrostatic repulsion or attraction that might interfere with the reaction
- **CTAB** (cationic) provides a good hydrophobic environment but the positive charge may affect certain reactions
- **SDS** (anionic) shows less enhancement due to the negative charge potentially destabilizing the transition state
- The rate enhancement depends on the specific diene-dienophile pair and the charge characteristics of the transition state

**General Observation:**
The rate of Diels-Alder reaction in micellar media is typically faster than in pure organic solvents but may be slower than in pure water for some systems. The micellar environment provides a balance between solubility (micelles dissolve hydrophobic reactants) and the hydrophobic effect (water outside micelles pushes reactants together).

(Source: PDF Page 13 - partially covered; additional research included)`,
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
    status: 'partially_answered',
    pdfPages: [34],
    importance: 3,
    answer: `**Polarity and Microwave Radiation Absorption:**

Microwave heating occurs through the interaction of microwave radiation (frequency ~2.45 GHz) with **polar molecules**. The relationship between polarity and microwave absorption is:

**1. Polar Molecules Absorb Microwaves:**
- Polar molecules have a permanent dipole moment (positive and negative ends)
- Examples: Water (H2O), methanol, ethanol, DMSO, acetone
- When microwave radiation passes through these molecules, the electric field of the microwave causes the dipoles to align and rotate

**2. How it Works:**
- The microwave electric field oscillates rapidly (2.45 billion times per second)
- Polar molecules try to align themselves with this changing field
- This causes constant rotation of the molecules (called dipolar polarization)
- The molecular rotation generates heat through friction and collisions with neighboring molecules
- This is why microwave heating is called **dielectric heating**

**3. Non-Polar Molecules Do NOT Absorb:**
- Non-polar molecules (like hexane, benzene, toluene) do not have a permanent dipole
- They cannot interact with the microwave electric field
- Therefore, non-polar solvents remain cold in a microwave oven
- This is why reactions in non-polar solvents require alternative heating

**4. Dielectric Constant:**
- The ability of a molecule to absorb microwaves is measured by its **dielectric constant** (or loss tangent)
- Higher dielectric constant = better microwave absorption = faster heating
- Water has a high dielectric constant (~80 at room temperature), making it excellent for microwave heating

**Summary:** Only polar molecules with a permanent dipole moment can absorb microwave radiation. The dipole rotates to align with the oscillating electric field, and this molecular motion generates heat throughout the sample.

(Source: PDF Page 34 - partially covered)`,
  },
  {
    id: 34,
    section: 'Green Synthesis and Alternative Energy',
    question: 'The internal temperature of a solvent heated under microwave irradiation can be greater than its boiling point. Justify or criticize.',
    marks: '2 Marks',
    year: '2022',
    status: 'partially_answered',
    pdfPages: [34],
    importance: 3,
    answer: `**This statement is TRUE - I JUSTIFY it.**

Under microwave irradiation, the internal temperature of a solvent can indeed exceed its normal boiling point. This phenomenon is called **"superheating."**

**Justification:**

**1. Superheating Effect:**
- In conventional heating, the liquid at the bottom of the vessel heats first and rises, creating convection currents
- Bubbles form at nucleation sites (surface imperfections) when vapor pressure equals atmospheric pressure
- In microwave heating, heating occurs throughout the bulk of the liquid simultaneously (volumetric heating)
- There are fewer nucleation sites for bubble formation
- The liquid can be heated above its boiling point without boiling (superheating)

**2. How it Works:**
- Microwave energy is absorbed directly by polar molecules throughout the liquid
- The bulk liquid heats up faster than the surface
- Without proper nucleation sites, bubbles cannot form easily
- The temperature can rise **20-30 degC above** the normal boiling point
- Eventually, when boiling does occur, it can be very vigorous (bumping)

**3. Example:**
- Water normally boils at 100 degC at 1 atm
- Under microwave irradiation in a sealed vessel, water can reach 120-150 degC
- In organic synthesis, this superheating accelerates reactions significantly

**4. Practical Implications:**
- Faster reaction rates due to higher temperatures
- Reactions that normally require high-boiling solvents can be done in lower-boiling solvents
- However, superheating can be dangerous as sudden boiling (bumping) may occur
- Using boiling chips or stir bars helps prevent excessive superheating

**Why microwave heating is preferred:**
- The ability to achieve temperatures above the normal boiling point means reactions can be completed in minutes instead of hours
- This is one of the key advantages of microwave-assisted organic synthesis (MAOS)

(Source: PDF Page 34)`,
  },
  {
    id: 35,
    section: 'Green Synthesis and Alternative Energy',
    question: 'Explain the different outcomes of a sonication reaction on a benzyl bromide substrate. What do you mean by sonoluminescence?',
    marks: '5 Marks',
    year: '2022',
    status: 'partially_answered',
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

**3. Substitution (to form benzyl alcohol or ether):**
Ph-CH2-Br --(Ultrasound, H2O/ROH)--> Ph-CH2-OH or Ph-CH2-OR
- The bromide is replaced by OH- or OR- groups
- Accelerated by cavitation-enhanced mass transfer

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

**Characteristics:**
- The emitted light is very brief (nanoseconds to picoseconds)
- The spectrum depends on the gas inside the bubble (noble gases produce brighter light)
- It is one of the most spectacular demonstrations of the extreme conditions inside collapsing cavitation bubbles

**Significance:**
- Sonoluminescence provides direct evidence of the extreme temperatures and pressures generated during cavitation
- It confirms that cavitation creates conditions hot enough to drive chemical reactions
- In some theories, it has been proposed that temperatures inside the bubble might even reach millions of degrees (though this is debated)

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
    status: 'partially_answered',
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
    status: 'not_in_pdf',
    pdfPages: [],
    importance: 3,
    answer: `**Non-Ionising Radiation: Microwave (MW) and UV-Visible**

**Answer:** Among X-rays, gamma-rays, MW (microwaves), and UV-Visible radiation, **Microwave (MW)** and **UV-Visible** are the **non-ionising radiations**.

However, if only ONE answer is expected, **Microwave (MW)** is the clearest example of non-ionising radiation.

**Justification:**

**What is Ionising Radiation?**
Ionising radiation has enough energy to remove electrons from atoms or molecules (ionize them). This requires photon energy greater than about 10 eV.

**Classification:**

| Radiation | Type | Energy | Ionising? |
|-----------|------|--------|-----------|
| **X-rays** | Electromagnetic | High (keV - MeV) | YES |
| **gamma-rays (Gamma rays)** | Electromagnetic | Very high (MeV) | YES |
| **UV-Visible** | Electromagnetic | 1-10 eV (UV: 3-10 eV) | Partially (UV is ionising, Visible is not) |
| **Microwaves (MW)** | Electromagnetic | Very low (meV) | NO |

**Why Microwaves are Non-Ionising:**
1. **Low photon energy**: Microwave photons have energy of about 10^-5 to 10^-3 eV, which is far too low to break chemical bonds or ionize atoms
2. **Cannot remove electrons**: The energy is insufficient to knock electrons out of atoms/molecules
3. **Heating mechanism**: Microwaves cause molecular rotation (dielectric heating), not ionization
4. **Safe for living tissue**: Unlike X-rays and gamma rays, microwaves do not damage DNA by ionization

**Why UV is Ionising (partially):**
- UV radiation (especially UV-C and UV-B, 100-280 nm) has enough energy (4-10 eV) to ionize some molecules
- It can break chemical bonds and damage DNA
- UV is considered weakly ionising
- Visible light (400-700 nm) is non-ionising

**Why X-rays and gamma-rays are Ionising:**
- X-rays: 0.01-10 nm wavelength, energy 100 eV - 100 keV
- gamma-rays: <0.01 nm wavelength, energy >100 keV
- Both have extremely high energy that can penetrate matter and ionize atoms
- They can break chemical bonds and damage biological tissue

(Note: This topic is not covered in the provided PDF. Answer compiled from standard physics/chemistry knowledge.)`,
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
    status: 'partially_answered',
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
    status: 'partially_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Bio-diesel:**

**Definition:**
Bio-diesel is a renewable, biodegradable fuel made from vegetable oils, animal fats, or recycled cooking grease. It is produced through a chemical process called **transesterification**.

**Production Process (Transesterification):**
Vegetable oil/Fat + Methanol --(NaOH/KOH catalyst)--> Methyl esters (Bio-diesel) + Glycerol

**Key Properties:**
- Bio-diesel is chemically known as fatty acid methyl esters (FAME)
- It can be used in diesel engines without modification (pure or blended)
- It is biodegradable and non-toxic
- It produces significantly less emissions than petroleum diesel

**Environmental Benefits:**
1. **Renewable source**: Made from plant oils (soybean, canola, palm, jatropha) that can be grown continuously
2. **Lower emissions**: Produces 78% less CO2, 48% less carbon monoxide, and 47% less particulate matter compared to fossil diesel
3. **Biodegradable**: Degrades naturally in the environment if spilled
4. **Non-toxic**: Safer to handle than petroleum diesel
5. **Reduces dependence on fossil fuels**

**Principle 7 Connection:**
The use of bio-diesel aligns with Green Chemistry Principle 7: "Use Renewable Raw Materials." Instead of using finite petroleum resources, bio-diesel uses renewable biological feedstocks.

**Challenges:**
- Higher cost compared to petroleum diesel
- Can cause problems in cold weather (higher pour point)
- Requires large agricultural land for production
- May compete with food production if food crops are used

(Source: PDF Page 2 - mentioned briefly)`,
  },
  {
    id: 43,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'State the important characteristics of Rightfit Pigments and briefly explain how they have been established as a better alternative compared to toxic inorganic pigments.',
    marks: '5 Marks (Repeated 2 Times: 2020, 2024)',
    year: '2020, 2024',
    repeated: '2 Times',
    status: 'not_in_pdf',
    pdfPages: [],
    importance: 4,
    answer: `**Rightfit Pigments:**

Rightfit pigments are a series of **environmentally friendly, non-toxic organic pigments** developed by Ciba (now part of BASF) as replacements for toxic heavy metal-based inorganic pigments.

**Important Characteristics:**

1. **Heavy Metal-Free**: Rightfit pigments do NOT contain toxic heavy metals like lead, cadmium, chromium, or mercury that are commonly found in traditional inorganic pigments.

2. **High Color Strength**: They provide vibrant, intense colors comparable to or better than traditional pigments.

3. **Excellent Light Fastness**: They resist fading when exposed to sunlight and UV radiation.

4. **Good Heat Stability**: They can withstand high processing temperatures used in plastics and coatings manufacturing.

5. **Chemical Stability**: They are resistant to acids, bases, and other chemicals.

6. **Low Toxicity**: They are non-toxic and safe for use in consumer products, toys, and food packaging.

7. **Wide Color Range**: Available in various colors including yellows, oranges, reds, and greens.

---

**Why Rightfit Pigments are Better than Toxic Inorganic Pigments:**

| Feature | Traditional Inorganic Pigments | Rightfit Pigments |
|---------|-------------------------------|-------------------|
| Lead content | Contains lead chromate (toxic) | Lead-free |
| Cadmium content | Contains cadmium (carcinogenic) | Cadmium-free |
| Chromium content | Contains Cr(VI) (toxic, carcinogenic) | Chromium-free |
| Environmental impact | Heavy metal pollution | Environmentally benign |
| Health risk | High (neurotoxic, carcinogenic) | Low (non-toxic) |
| Disposal | Hazardous waste | Safe disposal |
| Regulatory compliance | Often banned (RoHS, REACH) | Fully compliant |

**How they were established as better alternatives:**

1. **Health safety testing**: Rightfit pigments passed all toxicological tests showing no adverse health effects
2. **Performance testing**: They matched or exceeded the performance of traditional pigments in color strength, durability, and heat stability
3. **Environmental testing**: They showed no heavy metal leaching and passed all environmental safety standards
4. **Industrial trials**: Successfully replaced toxic pigments in plastics, paints, and coatings without process modifications
5. **Regulatory compliance**: Meet all modern environmental regulations (EU REACH, RoHS directive)

(Note: This topic is not covered in the provided PDF. Answer compiled from standard Green Chemistry knowledge.)`,
  },
  {
    id: 44,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'State the important applications of Polylactic acid (PLA) and describe an efficient synthesis of this polymer following green protocols starting from corn.',
    marks: '5 Marks',
    year: '2020',
    status: 'partially_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Polylactic Acid (PLA):**

PLA is a biodegradable polyester made from renewable resources like corn starch or sugarcane.

**Important Applications:**

1. **Packaging**: Food containers, cups, films, and bottles (especially for short shelf-life products)
2. **Medical**: Surgical sutures, drug delivery systems, implants, and tissue engineering scaffolds (biocompatible and biodegradable in the body)
3. **Textiles**: Clothing, upholstery, and non-woven fabrics
4. **3D Printing**: One of the most common materials for FDM 3D printers
5. **Agriculture**: Mulch films, plant pots, and controlled-release fertilizer matrices
6. **Consumer goods**: Disposable cutlery, plates, and shopping bags

---

**Green Synthesis of PLA from Corn:**

**Step 1: Corn to Starch**
Corn -> Milling -> Corn starch extracted
- Corn kernels are ground and starch is separated from protein and fiber

**Step 2: Starch to Glucose**
Corn starch --(Enzymatic hydrolysis, amylase enzymes)--> D-Glucose
- Starch is broken down into glucose monomers using enzymes (green catalysts)
- Conditions: Mild temperature, neutral pH, aqueous medium

**Step 3: Glucose to Lactic Acid (Fermentation)**
D-Glucose --(Lactobacillus bacteria, fermentation)--> L-Lactic acid
- Glucose is fermented using Lactobacillus bacteria
- Conditions: 35-45 degC, anaerobic, pH 5-6
- This is a biological process ( Principle 9: catalysis )
- The bacteria produce high purity L-lactic acid

**Step 4: Lactic Acid to Lactide**
Lactic acid -> Lactide (cyclic dimer) + 2 H2O
- Lactic acid is first condensed to form a low molecular weight polymer
- Then depolymerized by heating under reduced pressure to form lactide (cyclic dimer)

**Step 5: Ring-Opening Polymerization (ROP)**
Lactide --(Tin(II) octoate catalyst, heat)--> Polylactic acid (PLA)
- The lactide ring is opened and polymerized
- Conditions: 150-180 degC, catalyst: Sn(Oct)2 (non-toxic catalyst)
- High molecular weight PLA is formed

**Overall Process:**
Corn -> Starch -> Glucose -> Lactic acid -> Lactide -> PLA

**Why this is Green:**
- Uses renewable feedstock (corn) - Principle 7
- Biological fermentation (enzyme/bacteria catalysis) - Principle 9
- Biodegradable product (degrades to CO2 and water) - Principle 10
- Non-toxic catalyst in polymerization step
- Reduces dependence on petroleum-based plastics

(Source: PDF Page 2 - mentioned briefly; additional research included)`,
  },
  {
    id: 45,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Point out differences between the following pairs: (i) Bio-catalysis & Photo-catalysis, (ii) Catalytic reagents & Stoichiometric reagents.',
    marks: '5 Marks',
    year: '2020',
    status: 'partially_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**(i) Differences between Bio-catalysis and Photo-catalysis:**

| Feature | Bio-catalysis | Photo-catalysis |
|---------|--------------|-----------------|
| **Catalyst type** | Enzymes or whole-cell organisms | Semiconductor materials (TiO2, ZnO, CdS) |
| **Source** | Biological (living systems) | Inorganic/physical |
| **Reaction conditions** | Mild (room temp, neutral pH, aqueous) | Requires light (UV/Visible) energy |
| **Energy source** | No external energy needed | Light energy required |
| **Selectivity** | Very high (enzyme-specific) | Moderate |
| **Example** | Fermentation, enzyme-catalyzed reactions | Water splitting, pollutant degradation |
| **Reusability** | Limited (enzymes can denature) | High (semiconductors are stable) |
| **Application** | Pharmaceuticals, food industry | Water purification, solar energy |

**Bio-catalysis Example:** Thiamine hydrochloride (Vitamin B1) used as a catalyst in benzoin condensation instead of toxic cyanide.

**Photo-catalysis Example:** TiO2 used to degrade organic pollutants in water under UV light.

---

**(ii) Differences between Catalytic Reagents and Stoichiometric Reagents:**

| Feature | Catalytic Reagents | Stoichiometric Reagents |
|---------|-------------------|------------------------|
| **Amount used** | Small amount (typically 1-10 mol%) | Large amount (equimolar or excess relative to substrate) |
| **Consumed in reaction** | NOT consumed (regenerated) | Completely consumed (used up) |
| **Waste generation** | Minimal waste | Large amount of waste |
| **Atom economy** | High | Low |
| **E-factor** | Low (green) | High (not green) |
| **Cost** | Lower overall (reusable) | Higher (used in large quantities) |
| **Separation** | Easy to recover | Difficult to separate from products |
| **Example (amidation)** | Boric acid (catalytic amount) | PCl5 or SOCl2 (stoichiometric amount) |

**Why catalytic reagents are preferred (Green Chemistry Principle 9):**
- "Catalytic reagents (as selective as possible) are superior to stoichiometric reagents"
- They reduce waste, improve atom economy, and lower environmental impact
- They can be recovered and reused multiple times

**Example from the PDF:**
In amidation:
- Stoichiometric: ArCO2H + PCl5 + R2NH -> ArCONR2 + POCl3 + HCl (toxic waste)
- Catalytic: ArCO2H + R2NH --(Boric acid cat.)--> ArCONR2 + H2O (only water waste)

(Source: PDF Page 2)`,
  },
  {
    id: 46,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Discuss the application of surfactant-absorbed carbon dioxide for precision cleaning and the service industry.',
    marks: '5 Marks',
    year: '2020',
    status: 'not_in_pdf',
    pdfPages: [],
    importance: 3,
    answer: `**Surfactant-Absorbed Carbon Dioxide for Precision Cleaning:**

**What is Surfactant-Absorbed CO2?**
Surfactant-absorbed CO2 refers to supercritical CO2 (scCO2) containing dissolved surfactants (surface-active agents). The surfactants form micelles in the supercritical CO2 medium, creating a system that can dissolve both non-polar and polar substances.

**How it Works:**
1. Surfactants are added to scCO2
2. The surfactant molecules self-assemble into micelles in the scCO2
3. The hydrophobic tails of the surfactant dissolve in scCO2
4. The hydrophilic heads face inward, creating a polar core inside the micelle
5. Water and polar contaminants can be trapped inside these micelles
6. Non-polar contaminants dissolve directly in the scCO2

**Applications in Precision Cleaning:**

**1. Semiconductor/Electronics Cleaning:**
- Removal of photoresist residues from silicon wafers
- Cleaning of precision optical components
- Removal of polishing compounds from lenses and mirrors
- No water spots or solvent residues left behind (CO2 evaporates completely)

**2. Medical Device Cleaning:**
- Cleaning of surgical instruments and implants
- Removal of machining oils and particles
- Sterilization capability (high temperature during process)
- No toxic residues on medical devices

**3. Aerospace and Automotive:**
- Cleaning of precision engine parts
- Removal of greases and oils from delicate components
- Cleaning of fuel injection nozzles

**4. Textile and Dry Cleaning (Service Industry):**
- **Green dry cleaning**: Replaces perchloroethylene (PERC), a toxic and carcinogenic dry cleaning solvent
- Surfactant-absorbed CO2 can remove stains from delicate fabrics
- No damage to fabric fibers
- No toxic chemical exposure to workers or customers
- Clothes come out clean, odor-free, and with no chemical residue
- The CO2 is recycled, making it economical

**Advantages over Traditional Cleaning:**
| Feature | Traditional (PERC, CFC) | Surfactant-CO2 |
|---------|------------------------|----------------|
| Toxicity | High (carcinogenic) | None |
| Environmental impact | Ozone depletion, pollution | Zero emissions |
| Residue left | Chemical residue | None (CO2 evaporates) |
| Fire hazard | Flammable solvents | Non-flammable |
| Cost | Expensive disposal | CO2 recyclable |

(Note: This topic is not covered in the provided PDF. Answer compiled from standard Green Chemistry knowledge.)`,
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
    status: 'partially_answered',
    pdfPages: [2],
    importance: 3,
    answer: `**Biofuel:**

A **biofuel** is a fuel that is derived from **biomass** (recently living organic materials) such as plants, algae, or animal waste. Biofuels are considered renewable because the feedstock can be replenished through natural processes.

**Types of Biofuels:**
1. **Bio-ethanol**: Made by fermenting sugars from corn, sugarcane, or cellulosic biomass
2. **Bio-diesel**: Made from vegetable oils or animal fats through transesterification
3. **Bio-gas (biomethane)**: Produced by anaerobic digestion of organic waste
4. **Bio-jet fuel**: Made from algae or plant oils for aviation use

**Common Examples:**
- Ethanol from corn or sugarcane (used as gasoline additive)
- Biodiesel from soybean or canola oil
- Biogas from agricultural waste and sewage

---

**One Advantage of Biofuel over Fossil Fuel:**

**Renewability and Reduced CO2 Emissions:**

Biofuels are **carbon-neutral** or near carbon-neutral because:
- The plants used to make biofuels absorb CO2 from the atmosphere during photosynthesis as they grow
- When biofuels are burned, they release the same CO2 back into the atmosphere
- This creates a closed carbon cycle with **net-zero CO2 emissions**
- In contrast, burning fossil fuels releases CO2 that was stored underground for millions of years, adding NEW CO2 to the atmosphere

**Additional benefits:**
- Reduces dependence on imported petroleum
- Creates agricultural and rural employment
- Biodegradable and less toxic than fossil fuels
- Can be produced domestically, enhancing energy security

(Source: PDF Page 2 - mentioned briefly)`,
  },
  {
    id: 49,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'Describe the synthesis of PLA preferably using a flow chart diagram. What are the advantages and disadvantages of PLA? Mention two uses of PLA.',
    marks: '7 Marks (Repeated 2 Times: 2022, 2025)',
    year: '2022, 2025',
    repeated: '2 Times',
    status: 'partially_answered',
    pdfPages: [2],
    importance: 4,
    answer: `**Synthesis of Polylactic Acid (PLA):**

**Flow Chart:**

[ Corn Starch ] -> (Enzymatic Hydrolysis) -> [ D-Glucose ] -> (Fermentation by Lactobacillus) -> [ L-Lactic Acid ] -> (Oligomerization) -> [ Oligomer ] -> (Depolymerization, Heat, Vacuum) -> [ Lactide (Cyclic Dimer) ] -> (Ring-Opening Polymerization, Sn(Oct)2 catalyst) -> [ PLA ]

**Detailed Steps:**

**Step 1: Starch to Glucose**
Corn starch + Water --(Amylase enzymes, 60 degC)--> D-Glucose
- Enzymatic hydrolysis breaks down starch polymer into glucose monomers

**Step 2: Glucose to Lactic Acid**
D-Glucose --(Lactobacillus bacteria, 35-45 degC, Anaerobic)--> L-Lactic acid
- Fermentation converts sugar to lactic acid
- The bacteria produce optically pure L-lactic acid

**Step 3: Lactic Acid to Lactide**
Lactic acid -> (Heating, reduced pressure) -> Lactide + Water
- Lactic acid is first condensed to form a low molecular weight oligomer
- Then heated under vacuum to form the cyclic lactide dimer
- Water is removed to drive the equilibrium

**Step 4: Lactide to PLA**
Lactide --(Tin(II) octoate, 150-180 degC)--> Polylactic acid
- Ring-opening polymerization of lactide
- High molecular weight PLA is obtained

---

**Advantages of PLA:**

1. **Biodegradable**: Breaks down into CO2 and water through microbial action in composting facilities
2. **Renewable source**: Made from corn, sugarcane, or other biomass - not petroleum
3. **Non-toxic**: Safe for food contact and medical applications
4. **Good mechanical properties**: Comparable to petroleum-based plastics like polystyrene
5. **Low carbon footprint**: Production emits less greenhouse gases than conventional plastics
6. **Transparent**: Can be made into clear films and packaging
7. **Good processability**: Can be molded, extruded, and 3D printed

**Disadvantages of PLA:**

1. **High cost**: More expensive than petroleum-based plastics like PET or PE
2. **Poor heat resistance**: Softens at temperatures above 55-60 degC
3. **Slow degradation**: Requires industrial composting conditions (high temperature, humidity); does NOT degrade well in landfills or home compost
4. **Competition with food**: Uses agricultural land that could grow food crops
5. **Brittleness**: PLA is relatively brittle compared to other plastics
6. **Hydrolysis sensitivity**: Can degrade when exposed to moisture over time
7. **Limited recycling infrastructure**: Cannot be recycled with conventional plastics

---

**Two Uses of PLA:**

**1. Food Packaging:**
PLA is widely used for disposable food containers, cups, cutlery, and films. It is FDA-approved for food contact and provides a biodegradable alternative to petroleum-based packaging. It is particularly popular for short shelf-life products like fresh salads and beverages.

**2. Medical Implants and Sutures:**
PLA is used to make surgical sutures (stitches) that dissolve in the body over time, eliminating the need for removal surgery. It is also used for drug delivery systems (controlled release of drugs), bone fixation screws, and tissue engineering scaffolds. Its biocompatibility and gradual biodegradation make it ideal for these applications.

(Source: PDF Page 2 - mentioned briefly)`,
  },
  {
    id: 50,
    section: 'Biopolymers, Biofuels, and Real-World Cases',
    question: 'What is "Eutrophication"? How does it affect the ecosystem?',
    marks: '2 Marks',
    year: '2023',
    status: 'not_in_pdf',
    pdfPages: [],
    importance: 3,
    answer: `**Eutrophication:**

**Definition:**
Eutrophication is the process of **excessive enrichment** of water bodies (lakes, rivers, ponds, coastal oceans) with nutrients, particularly **nitrogen (N)** and **phosphorus (P)**. This leads to excessive growth of algae and aquatic plants, which disrupts the aquatic ecosystem.

**Causes:**
- Agricultural runoff (fertilizers containing N and P)
- Sewage and wastewater discharge
- Industrial waste containing nutrients
- Detergents and cleaning products
- Atmospheric deposition of nitrogen compounds

**How it Affects the Ecosystem:**

**1. Algal Blooms:**
- Excess nutrients cause rapid growth of algae (algal blooms)
- The water becomes green and turbid
- Sunlight cannot penetrate the water column

**2. Oxygen Depletion:**
- When the algae die, they sink to the bottom and decompose
- Bacteria decompose the dead organic matter, consuming large amounts of dissolved oxygen
- This leads to **hypoxia** (low oxygen) or **anoxia** (no oxygen) in the water
- Fish and other aquatic animals suffocate and die

**3. Loss of Biodiversity:**
- Sensitive species (fish, shellfish, aquatic plants) die due to oxygen depletion
- Only tolerant species (some bacteria, algae) survive
- The ecosystem loses its diversity and balance

**4. Formation of Dead Zones:**
- Severe eutrophication creates "dead zones" where no aquatic life can survive
- Famous example: The Gulf of Mexico dead zone at the mouth of the Mississippi River

**5. Economic Impact:**
- Fisheries are destroyed, affecting livelihoods
- Tourism and recreational activities decline
- Water treatment costs increase

**6. Toxic Algal Blooms:**
- Some algal blooms produce toxins harmful to humans and animals
- Can contaminate drinking water sources
- Cause health problems if consumed

(Note: This topic is not covered in the provided PDF. Answer compiled from standard environmental chemistry knowledge.)`,
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
