export type SolutionContent = {
  slug: string
  category: 'industry' | 'business-type'
  name: string
  shortName: string
  tagline: string
  hero: {
    eyebrow: string
    title: string
    description: string
  }
  challenges: {
    title: string
    description: string
  }[]
  capabilities: {
    eyebrow: string
    title: string
    description: string
  }[]
  testimonialQuote?: {
    quote: string
    author: string
    role: string
  }
}

export const industries: SolutionContent[] = [
  {
    slug: 'cosmetics',
    category: 'industry',
    name: 'Cosmetics & Personal Care',
    shortName: 'Cosmetics',
    tagline:
      'AI compliance for cosmetic formulators, brand owners, and contract manufacturers.',
    hero: {
      eyebrow: 'Industry · Cosmetics',
      title: 'Cosmetic compliance, automated end-to-end',
      description:
        'From INCI verification and allergen disclosure to PIF generation and CPNP notification, Certo turns cosmetic regulations into live, product-specific checks across EU, UK, US, ASEAN, and beyond.',
    },
    challenges: [
      {
        title: 'Fragmented ingredient regulations',
        description:
          'Restricted, prohibited, and listed substances vary across EU 1223/2009, FDA, China NMPA, and ASEAN. Manual cross-checks slow launches and miss updates.',
      },
      {
        title: 'CPSR and PIF overhead',
        description:
          'Building Product Information Files and safety reports requires aggregating supplier docs, tox data, exposure assessments, and stability studies, often in multiple languages.',
      },
      {
        title: 'Claim substantiation pressure',
        description:
          '"Hypoallergenic", "natural", "clean", "cruelty-free" claims face increasing scrutiny. Each requires evidence trails that hold up to retailer audits and regulator inquiries.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Formulas',
        title: 'INCI-level formula screening',
        description:
          'Validate every ingredient against allowed concentrations, restricted-use lists, and target-market regulations with rule-level citations.',
      },
      {
        eyebrow: 'Documents',
        title: 'PIF, CPSR, and SDS generation',
        description:
          'Auto-compile regulator-grade dossiers from your supplier documents, formula records, and stability studies, with full source traceability.',
      },
      {
        eyebrow: 'Claims',
        title: 'Marketing claim verification',
        description:
          'Check label and pack claims against EU 655/2013 common criteria, FTC Green Guides, and retailer-specific clean beauty standards.',
      },
      {
        eyebrow: 'Notifications',
        title: 'Market entry workflows',
        description:
          'Pre-fill CPNP, SCPN, FDA OCR, and equivalent registration data for every target market, drawing from a single source of product truth.',
      },
    ],
  },
  {
    slug: 'supplements',
    category: 'industry',
    name: 'Dietary Supplements & Nutraceuticals',
    shortName: 'Supplements',
    tagline:
      'AI compliance for dietary supplement, nutraceutical, and functional food brands.',
    hero: {
      eyebrow: 'Industry · Supplements',
      title: 'Supplement compliance without the regulatory bottleneck',
      description:
        'Certo automates ingredient acceptability, daily dose limits, claim substantiation, and label review across DSHEA, EFSA, Health Canada, and TGA, so launches keep moving while regulations evolve.',
    },
    challenges: [
      {
        title: 'Conflicting ingredient frameworks',
        description:
          'NDIs in the US, novel foods in the EU, natural health products in Canada, each market has its own positive lists, prohibited substances, and submission paths.',
      },
      {
        title: 'Health claim substantiation',
        description:
          'EFSA Article 13/14 claims, FDA structure-function disclaimers, and TGA permitted indications all demand specific evidence formats and language.',
      },
      {
        title: 'Label complexity',
        description:
          'Supplement Facts, NRVs, allergen statements, warnings, and quantitative ingredient declarations differ by region and need to stay aligned with the formula.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Formulas',
        title: 'Ingredient and dose validation',
        description:
          'Check actives, excipients, and total daily doses against EFSA tolerable upper levels, FDA NDI status, and Health Canada NHPID monographs.',
      },
      {
        eyebrow: 'Claims',
        title: 'Permitted claim mapping',
        description:
          'Match product claims against EFSA Register, FDA structure-function rules, and TGA permitted indications, flagging language that exceeds what the evidence supports.',
      },
      {
        eyebrow: 'Labels',
        title: 'Label artwork checks',
        description:
          'Compare on-pack copy and panels against formula records, regulatory layouts, and warning requirements per market.',
      },
      {
        eyebrow: 'Documents',
        title: 'Dossier and notification prep',
        description:
          'Assemble novel food applications, NDI notifications, and product license submissions from your existing supplier and stability data.',
      },
    ],
  },
  {
    slug: 'pet-animal',
    category: 'industry',
    name: 'Pet & Animal Care',
    shortName: 'Pet & Animal',
    tagline:
      'AI compliance for pet food, animal health, and animal nutrition brands.',
    hero: {
      eyebrow: 'Industry · Pet & Animal',
      title: 'Pet and animal compliance built for global launches',
      description:
        'Certo handles the regulatory complexity of pet food, treats, supplements, and animal health products across AAFCO, FEDIAF, FDA CVM, EU Feed regulations, and beyond.',
    },
    challenges: [
      {
        title: 'Species-specific nutrient targets',
        description:
          'AAFCO profiles, FEDIAF guidelines, and life-stage-specific requirements need to match formulas exactly, with tight margins around minimums and maximums.',
      },
      {
        title: 'Functional claims under scrutiny',
        description:
          'Health, dental, joint, and calming claims sit at the line between feed and veterinary medicine. Crossing it triggers a different regulatory regime.',
      },
      {
        title: 'Ingredient sourcing and traceability',
        description:
          'Animal by-products, novel proteins, and additives each carry their own approval paths, sourcing rules, and labeling requirements.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Formulas',
        title: 'Nutritional adequacy checks',
        description:
          'Validate complete and balanced claims against AAFCO and FEDIAF profiles, flagging gaps by life stage and species.',
      },
      {
        eyebrow: 'Ingredients',
        title: 'Approved additive screening',
        description:
          'Cross-reference every additive against EU Feed Additives Register, AAFCO Official Publication, and FDA-approved animal drug lists.',
      },
      {
        eyebrow: 'Claims',
        title: 'Feed vs. drug boundary checks',
        description:
          'Detect language that pushes a product into veterinary drug territory before it reaches packaging or marketing.',
      },
      {
        eyebrow: 'Labels',
        title: 'Multi-market label compliance',
        description:
          'Verify guaranteed analyses, ingredient lists, and feeding directions match formula records and regional formats.',
      },
    ],
  },
]

export const businessTypes: SolutionContent[] = [
  {
    slug: 'raw-material-supplier',
    category: 'business-type',
    name: 'Raw Material Suppliers',
    shortName: 'Raw Material Supplier',
    tagline:
      'Turn your technical documents into a competitive advantage your customers can verify.',
    hero: {
      eyebrow: 'Business · Raw Material Supplier',
      title: 'Make your raw materials the easy choice for compliance teams',
      description:
        'Certo helps ingredient and raw material suppliers structure their technical documentation, anticipate customer compliance questions, and respond to brand RFQs in hours instead of weeks.',
    },
    challenges: [
      {
        title: 'Document chaos across customers',
        description:
          'Each brand customer wants specs, COAs, allergen statements, and regulatory letters in their own format. Repetitive Q&A burns sales and regulatory cycles.',
      },
      {
        title: 'Regulatory questions slow deals',
        description:
          'Brand R&D and regulatory teams hold up purchase orders waiting for confirmations on novel food status, organic certification, or REACH compliance.',
      },
      {
        title: 'Hard to demonstrate quality',
        description:
          'Without a structured way to share compliance posture, suppliers compete on price instead of regulatory rigor.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Documents',
        title: 'Structured supplier profiles',
        description:
          'Convert specs, SDS, COAs, and certificates into structured data your customers can query, verify, and audit.',
      },
      {
        eyebrow: 'Responses',
        title: 'Automated customer Q&A',
        description:
          'Answer recurring brand and contract-manufacturer questions using your own document base with full citations to source files.',
      },
      {
        eyebrow: 'Regulatory',
        title: 'Pre-mapped market readiness',
        description:
          'Show brand customers exactly which markets and product categories your raw material is cleared for, with rule-level evidence.',
      },
      {
        eyebrow: 'Updates',
        title: 'Push-based document sync',
        description:
          'When your tech docs are updated, customers using your materials are alerted automatically, reducing complaint and recall risk.',
      },
    ],
  },
  {
    slug: 'contract-manufacturer',
    category: 'business-type',
    name: 'Contract Manufacturers',
    shortName: 'Contract Manufacturer',
    tagline:
      'Onboard customers, formulas, and markets faster without expanding your regulatory team.',
    hero: {
      eyebrow: 'Business · Contract Manufacturer',
      title: 'Compliance throughput that matches your manufacturing capacity',
      description:
        'Certo helps CMOs and CDMOs ingest brand customer formulas, validate them across target markets, and produce regulator-grade documentation, all without becoming a bottleneck.',
    },
    challenges: [
      {
        title: 'New customer onboarding overhead',
        description:
          'Every new brand customer brings their own formulas, claims, and target markets. Manual review delays first production runs.',
      },
      {
        title: 'Multi-brand portfolio complexity',
        description:
          'Managing compliance across dozens of customer SKUs, often in different categories and regions, strains internal regulatory teams.',
      },
      {
        title: 'Documentation handoff friction',
        description:
          'Brand customers expect dossiers, certificates, and audit packs ready to go. Pulling these together per shipment costs real time.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Onboarding',
        title: 'Rapid customer formula intake',
        description:
          'Ingest customer formulas, supplier docs, and target markets in one flow. Surface issues before the first batch is scheduled.',
      },
      {
        eyebrow: 'Operations',
        title: 'Multi-customer portfolio view',
        description:
          'Run formula and label checks across every customer SKU, with brand-specific access controls and confidentiality.',
      },
      {
        eyebrow: 'Documents',
        title: 'Production-ready dossiers',
        description:
          'Generate the regulatory documents that brand customers and retailers expect, automatically updated when formulas change.',
      },
      {
        eyebrow: 'Quality',
        title: 'Continuous batch validation',
        description:
          'Verify each production batch against the latest applicable regulations and customer specifications.',
      },
    ],
  },
  {
    slug: 'brand-owner',
    category: 'business-type',
    name: 'Brand Owners',
    shortName: 'Brand Owner',
    tagline:
      'Launch faster across more markets without compounding regulatory risk.',
    hero: {
      eyebrow: 'Business · Brand Owner',
      title: 'Compliance as a launch accelerator, not a gate',
      description:
        'Certo gives brand teams a single source of truth for formulas, claims, and market readiness, so R&D, regulatory, marketing, and supply chain stop blocking each other.',
    },
    challenges: [
      {
        title: 'Cross-functional coordination cost',
        description:
          'R&D, regulatory, marketing, packaging, and procurement each hold pieces of the compliance picture. Email threads and spreadsheets lose context fast.',
      },
      {
        title: 'Multi-market scaling pain',
        description:
          'A product that works in one market needs new claims, label artwork, and dossiers for every additional region. Each adds weeks to launch.',
      },
      {
        title: 'Innovation velocity tradeoffs',
        description:
          'Faster launches risk recalls and retailer pushback. Slower launches mean missed seasonal windows and lost shelf space.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Portfolio',
        title: 'Single source of product truth',
        description:
          'Unify formulas, supplier documents, claims, and target markets in one platform that R&D, regulatory, and marketing share.',
      },
      {
        eyebrow: 'Markets',
        title: 'What-if market expansion',
        description:
          'Preview the regulatory work required to enter a new market before committing roadmap resources.',
      },
      {
        eyebrow: 'Claims',
        title: 'Marketing copy validation',
        description:
          'Validate claims, label artwork, and packaging against applicable regulations and retailer policies before legal review.',
      },
      {
        eyebrow: 'Risk',
        title: 'Continuous risk monitoring',
        description:
          'When regulations change, automatically re-check impacted SKUs and surface required actions to product teams.',
      },
    ],
  },
  {
    slug: 'retailer',
    category: 'business-type',
    name: 'Retailers',
    shortName: 'Retailer',
    tagline:
      'Onboard suppliers and validate listings against your private-brand and retailer standards.',
    hero: {
      eyebrow: 'Business · Retailer',
      title: 'Retailer-grade compliance for the products on your shelves',
      description:
        'Certo helps retailers and marketplaces enforce private-brand specs, ingredient bans, and category policies across thousands of supplier SKUs without manual document review.',
    },
    challenges: [
      {
        title: 'Supplier onboarding scale',
        description:
          'Reviewing every supplier dossier by hand is impossible at retail scale. Critical issues slip through to shelves.',
      },
      {
        title: 'Private-brand spec enforcement',
        description:
          'Clean beauty, free-from, sustainability, and origin policies must be verified against actual formulas and supplier evidence, not just attestation.',
      },
      {
        title: 'Liability for listed products',
        description:
          'Recalls, customer complaints, and regulator inquiries land at the retailer level even when the supplier is at fault.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Onboarding',
        title: 'Automated supplier qualification',
        description:
          'Ingest supplier dossiers and validate them against your private-brand specs, restricted lists, and category policies.',
      },
      {
        eyebrow: 'Standards',
        title: 'Retailer policy as code',
        description:
          'Encode your clean, free-from, and sustainability standards as machine-checkable rules applied to every listing.',
      },
      {
        eyebrow: 'Monitoring',
        title: 'Listing-level continuous compliance',
        description:
          'Re-check every active SKU when supplier documents, formulas, or applicable regulations change.',
      },
      {
        eyebrow: 'Audits',
        title: 'Audit trail for every decision',
        description:
          'Maintain regulator-grade evidence for every listed product, ready for recalls, regulator requests, and customer complaints.',
      },
    ],
  },
  {
    slug: 'trade-association',
    category: 'business-type',
    name: 'Trade Associations',
    shortName: 'Trade Association',
    tagline:
      'Equip your members with shared regulatory intelligence and compliance tooling.',
    hero: {
      eyebrow: 'Business · Trade Association',
      title: 'Compliance infrastructure your members can rely on',
      description:
        'Certo helps industry associations deliver regulatory monitoring, member benchmarking, and shared compliance tooling that strengthens member retention and elevates industry standards.',
    },
    challenges: [
      {
        title: 'Members lack regulatory bandwidth',
        description:
          'SME members rarely have dedicated regulatory teams. Larger members hit their own scaling walls. Both look to the association for support.',
      },
      {
        title: 'Fragmented regulatory monitoring',
        description:
          'Tracking regulations across markets, categories, and authorities is duplicative work that every member does alone.',
      },
      {
        title: 'Demonstrating member value',
        description:
          'Member retention depends on tangible, ongoing value. Static newsletters and webinars compete with countless other information sources.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Intelligence',
        title: 'Curated regulatory feeds',
        description:
          'Deliver association-curated, market-specific regulatory updates with member-relevant impact analysis.',
      },
      {
        eyebrow: 'Tools',
        title: 'Member-accessible compliance checks',
        description:
          'Offer compliance screening as a member benefit, branded and configured around your industry standards.',
      },
      {
        eyebrow: 'Standards',
        title: 'Industry standard codification',
        description:
          'Encode association-recognized voluntary standards as machine-checkable rules members can validate against.',
      },
      {
        eyebrow: 'Insights',
        title: 'Anonymized member benchmarking',
        description:
          'Surface anonymized industry-level insights on regulatory readiness, common gaps, and emerging risks.',
      },
    ],
  },
  {
    slug: 'cit',
    category: 'business-type',
    name: 'Certification & Inspection Bodies (CITs)',
    shortName: 'Certification Body',
    tagline:
      'Scale your audits and certifications with structured, evidence-rich review.',
    hero: {
      eyebrow: 'Business · Certification & Inspection',
      title: 'AI-augmented audits for certification and inspection bodies',
      description:
        'Certo helps third-party certifiers, inspection bodies, and testing labs run faster, more consistent reviews against their certification schemes, with full evidence trails for every finding.',
    },
    challenges: [
      {
        title: 'Auditor capacity bottleneck',
        description:
          'Demand for certifications outpaces qualified auditor supply. Every backlog day is lost revenue and frustrated clients.',
      },
      {
        title: 'Consistency across reviewers',
        description:
          'Different auditors interpret the same scheme differently. Quality assurance and re-reviews add cost and delay.',
      },
      {
        title: 'Evidence management overhead',
        description:
          'Tracking every document referenced, every clause checked, and every finding by hand is tedious and error-prone.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Schemes',
        title: 'Certification scheme as rules',
        description:
          'Encode your scheme requirements into machine-checkable rules applied uniformly across every applicant and audit.',
      },
      {
        eyebrow: 'Pre-screening',
        title: 'Automated document review',
        description:
          'Run first-pass document and formula checks before auditor time, surfacing only the cases that need expert review.',
      },
      {
        eyebrow: 'Findings',
        title: 'Evidence-linked findings',
        description:
          'Every finding ties back to specific documents, page references, and applicable scheme clauses, ready for the audit report.',
      },
      {
        eyebrow: 'Surveillance',
        title: 'Continuous post-certification checks',
        description:
          'Monitor certified products against scheme updates and supplier document changes between formal audit cycles.',
      },
    ],
  },
  {
    slug: 'consulting-firm',
    category: 'business-type',
    name: 'Consulting Firms',
    shortName: 'Consulting Firm',
    tagline:
      'Deliver regulatory consulting at higher leverage and with stronger evidence.',
    hero: {
      eyebrow: 'Business · Consulting',
      title: 'Make regulatory consulting more leveraged and more defensible',
      description:
        'Certo helps regulatory consulting firms run faster client diagnostics, scale partner-quality work to junior consultants, and produce deliverables clients can verify and re-run themselves.',
    },
    challenges: [
      {
        title: 'Manual diagnostics dont scale',
        description:
          'The first weeks of every engagement are spent assembling client documents and finding gaps, work that doesnt show client value.',
      },
      {
        title: 'Junior leverage limits',
        description:
          'Specialist regulatory work depends on senior consultants. Scaling juniors without quality loss is hard.',
      },
      {
        title: 'Deliverables go stale',
        description:
          'Static reports become outdated the moment a regulation changes. Clients return with the same questions a year later.',
      },
    ],
    capabilities: [
      {
        eyebrow: 'Diagnostics',
        title: 'Rapid client compliance audits',
        description:
          'Ingest client product portfolios, formulas, and target markets and surface gaps in days instead of weeks.',
      },
      {
        eyebrow: 'Leverage',
        title: 'Scale partner expertise',
        description:
          'Codify senior regulatory know-how as agents that junior consultants can apply at quality.',
      },
      {
        eyebrow: 'Deliverables',
        title: 'Living compliance dashboards',
        description:
          'Hand off interactive dashboards that stay current with regulatory changes, not static one-off reports.',
      },
      {
        eyebrow: 'Practice',
        title: 'Recurring revenue surfaces',
        description:
          'Move from project-based engagements toward continuous monitoring retainers backed by automated checks.',
      },
    ],
  },
]

export const allSolutions: SolutionContent[] = [...industries, ...businessTypes]

export function findSolution(
  category: 'industry' | 'business-type',
  slug: string,
): SolutionContent | undefined {
  const list = category === 'industry' ? industries : businessTypes
  return list.find((s) => s.slug === slug)
}
