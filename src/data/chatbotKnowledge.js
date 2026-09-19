// Knowledge base for the on-site "Vision Assistant".
// This is a scoped, rule-based assistant — it only answers eye-care
// questions from this fixed knowledge base. It does not call any external
// AI service, so it cannot go off-topic or make up medical claims.

export const knowledgeBase = [
  {
    id: "lasik",
    keywords: ["lasik"],
    answer:
      "LASIK reshapes your cornea with an excimer laser after creating a thin corneal flap. It's a great fit for moderate–high spectacle power with a normal corneal thickness, and most patients see clearly within 24 hours.",
  },
  {
    id: "smile",
    keywords: ["smile"],
    answer:
      "SMILE is a flap-free procedure — a single laser reshapes the cornea from within and removes a tiny lenticule through a keyhole incision (2–4mm). It suits active lifestyles well, including sports and defence aspirants.",
  },
  {
    id: "transprk",
    keywords: ["transprk", "trans-prk", "trans prk", "prk"],
    answer:
      "TransPRK is a completely touch-free, no-flap, no-blade surface treatment done with a single laser pass. It's often recommended for thinner corneas, with the surface healing over 3–5 days.",
  },
  {
    id: "cataract",
    keywords: ["cataract", "phaco", "iol", "cloudy lens", "cloudy vision"],
    answer:
      "Cataract surgery removes your eye's clouded natural lens (using gentle ultrasound energy) and replaces it with a clear artificial lens (IOL) — monofocal, toric or premium multifocal options are available. Most patients notice clearer vision within a day or two.",
  },
  {
    id: "icl",
    keywords: ["icl", "implantable lens", "implantable contact lens", "collamer"],
    answer:
      "ICL (Implantable Collamer Lens) places a small lens between your iris and natural lens — great for very high spectacle power or corneas too thin for LASIK/SMILE/TransPRK. No corneal tissue is removed, and it's removable if ever needed.",
  },
  {
    id: "squint",
    keywords: ["squint", "strabismus", "crossed eyes", "misaligned eyes"],
    answer:
      "Squint (strabismus) surgery adjusts the eye muscles to correct misalignment between the two eyes. It's suitable for both children and adults and is usually a day-care procedure.",
  },
  {
    id: "cornea-care",
    keywords: ["cornea", "corneal", "keratoconus", "transplant", "keratoplasty"],
    answer:
      "We treat corneal conditions like keratoconus, scarring and infections, including collagen cross-linking and corneal transplant (keratoplasty) when the cornea needs replacing with healthy donor tissue.",
  },
  {
    id: "glaucoma",
    keywords: ["glaucoma", "eye pressure", "optic nerve"],
    answer:
      "Glaucoma care starts with monitoring eye pressure and the optic nerve, then a stepwise plan — pressure-lowering drops first, laser treatment if needed, and surgery for advanced cases — to protect your vision long-term.",
  },
  {
    id: "retina",
    keywords: ["retina", "retinal", "diabetic retinopathy", "detachment", "floaters", "flashes"],
    answer:
      "Retina care covers diabetic eye disease, retinal tears and detachment — using OCT imaging, laser therapy for diabetic retinopathy, and surgical repair for retinal detachment.",
  },
  {
    id: "oculoplasty",
    keywords: ["oculoplasty", "eyelid", "droopy eyelid", "ptosis", "tear duct", "watering eyes"],
    answer:
      "Oculoplasty covers eyelid and tear-duct surgery — drooping eyelids, in-turned/out-turned eyelids and blocked tear ducts — restoring both comfort and natural appearance, usually as a day-care procedure.",
  },
  {
    id: "compare",
    keywords: ["difference", "compare", "which is better", "better option", "vs"],
    answer:
      "In short: LASIK uses a corneal flap and has the fastest recovery; SMILE is flap-free with a tiny incision, great for active lifestyles; TransPRK is entirely flap- and blade-free, often preferred for thinner corneas. The right one for you depends on your prescription and corneal thickness — a free screening will confirm this.",
  },
  {
    id: "pain",
    keywords: ["pain", "hurt", "painful"],
    answer:
      "All three procedures are done under numbing eye drops, not injections — patients typically feel pressure but not pain. Mild grittiness for a day or two afterward is normal, especially with TransPRK.",
  },
  {
    id: "recovery",
    keywords: ["recovery", "heal", "downtime", "back to work", "return to work"],
    answer:
      "Recovery depends on the procedure: LASIK and SMILE patients often resume work in 1–2 days, while TransPRK's surface layer takes about 3–5 days to regenerate before vision fully settles.",
  },
  {
    id: "eligibility",
    keywords: ["eligible", "candidate", "suitable", "qualify", "age", "power", "number"],
    answer:
      "Eligibility depends on your spectacle power, corneal thickness and overall eye health — generally you should be 18+ with a stable number for at least a year. A free eye check-up at Heal O Vision will confirm exactly which procedure suits you.",
  },
  {
    id: "cost",
    keywords: ["cost", "price", "fee", "charges", "expensive", "emi", "installment", "instalment"],
    answer:
      "Heal O Vision offers no-cost EMI, so you can split your procedure cost into easy, zero-interest monthly instalments. Exact pricing depends on the procedure and eye — please contact us for a personalised quote.",
  },
  {
    id: "insurance",
    keywords: ["insurance", "cashless", "hdfc", "icici", "bajaj", "tata", "star health", "claim"],
    answer:
      "We offer cashless insurance billing with partners including HDFC ERGO, ICICI Lombard, Bajaj Allianz, TATA AIG and Star Health — our team handles the paperwork directly with your insurer.",
  },
  {
    id: "checkup",
    keywords: ["checkup", "check-up", "screening", "test", "assessment", "consultation"],
    answer:
      "Every journey starts with a free, comprehensive eye check-up — corneal mapping, prescription and eye-health tests — so our surgeons can confirm the safest, most suitable procedure for you.",
  },
  {
    id: "safety",
    keywords: ["safe", "safety", "risk", "side effect", "complication"],
    answer:
      "All procedures use FDA-approved laser and diagnostic technology, and every patient is screened beforehand to confirm suitability, which is the biggest factor in a safe outcome. Your surgeon will walk you through personal risk factors at your consultation.",
  },
  {
    id: "glasses",
    keywords: ["glasses", "spectacles", "contact lens", "contacts", "specs"],
    answer:
      "Yes — the goal of LASIK, SMILE and TransPRK is to significantly reduce or remove your day-to-day dependence on glasses or contact lenses. Most patients achieve 20/20 or near-20/20 vision.",
  },
  {
    id: "book",
    keywords: ["book", "appointment", "schedule", "visit", "call", "contact", "phone", "number"],
    answer:
      "You can book a free consultation using the appointment form on this page, call us directly, or message us on WhatsApp — our team will get back to you to confirm a slot.",
  },
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "namaste"],
    answer:
      "Hello! I'm the Heal O Vision assistant. Ask me about LASIK, SMILE, TransPRK, cataract, ICL, squint, cornea, glaucoma, retina, oculoplasty, recovery, cost/EMI, insurance, or how to book a free eye check-up.",
  },
];

export const fallbackAnswer =
  "I can only help with questions about eye care at Heal O Vision — laser vision correction (LASIK, SMILE, TransPRK) and other eye procedures (cataract, ICL, squint, cornea, glaucoma, retina, oculoplasty), plus recovery, cost or booking. For anything else, please call us or use the contact form and our team will help directly.";

export const welcomeMessage =
  "Hi, I'm the Heal O Vision assistant. Ask me about LASIK, SMILE, TransPRK, cataract, ICL, squint, cornea, glaucoma, retina, oculoplasty, recovery, cost/EMI, insurance or booking a free check-up.";

export function findAnswer(message) {
  const text = message.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    const score = entry.keywords.reduce(
      (acc, kw) => (text.includes(kw) ? acc + kw.length : acc),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return best ? best.answer : fallbackAnswer;
}
