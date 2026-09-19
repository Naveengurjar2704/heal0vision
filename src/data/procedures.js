// Eye-care procedures offered by Heal O Vision.
// Clinical descriptions are general patient-education content, not a
// substitute for an in-person suitability assessment.
//
// `group` splits procedures into two display tiers:
//  - "laser-vision": the four core laser refractive procedures (spotlighted)
//  - "eye-care": broader ophthalmology services (shown as a secondary band)

export const procedures = [
  {
    slug: "custom-lasik",
    name: "Custom LASIK",
    fullName: "Custom (Wavefront-Guided) LASIK",
    tagline: "Laser correction mapped to the unique optics of your eye.",
    summary:
      "Detailed wavefront mapping of your eye guides the excimer laser, correcting not just your basic prescription but the subtle, individual imperfections that a standard profile would miss.",
    recovery: "Vision improves within 24 hours; most patients resume work in 1–2 days.",
    idealFor: [
      "Moderate to high spectacle power",
      "Patients wanting a correction profile personalised to their eyes",
      "Normal corneal thickness",
    ],
    steps: [
      "Detailed wavefront mapping captures the unique optical imperfections of your eye.",
      "A femtosecond laser creates a thin, hinged corneal flap.",
      "The excimer laser reshapes the cornea using your personalised wavefront profile.",
      "The flap is repositioned — it self-seals within minutes, no stitches needed.",
    ],
    highlights: ["Wavefront-guided, personalised correction", "Blade-free flap creation", "Rapid visual recovery"],
    group: "laser-vision",
  },
  {
    slug: "femto-lasik",
    name: "Femto LASIK",
    fullName: "Femtosecond (Blade-Free) LASIK",
    tagline: "All-laser flap creation for a precise, blade-free LASIK experience.",
    summary:
      "A femtosecond laser replaces the traditional blade to create your corneal flap with exceptional precision, before an excimer laser reshapes the cornea to your prescription.",
    recovery: "Vision improves within 24 hours; most patients resume work in 1–2 days.",
    idealFor: [
      "Moderate to high spectacle power",
      "Normal corneal thickness",
      "Patients wanting the fastest visual recovery with a fully blade-free technique",
    ],
    steps: [
      "A femtosecond laser creates a thin, hinged corneal flap — no blade involved.",
      "The flap is gently lifted to expose the corneal bed.",
      "An excimer laser reshapes the cornea based on your prescription.",
      "The flap is repositioned — it self-seals within minutes, no stitches needed.",
    ],
    highlights: ["100% blade-free, all-laser technique", "Painless, ~10 minutes per eye", "Rapid visual recovery"],
    group: "laser-vision",
  },
  {
    slug: "smile",
    name: "SMILE",
    fullName: "Small Incision Lenticule Extraction",
    tagline: "Flap-free vision correction through a keyhole incision.",
    summary:
      "A single femtosecond laser reshapes the cornea from within and removes a tiny lens-shaped tissue layer (lenticule) through a small incision — no flap is created.",
    recovery: "Most patients return to daily activities within 1–2 days, with a slightly gentler healing curve than LASIK.",
    idealFor: [
      "Short-sightedness, with or without astigmatism",
      "Active lifestyles, sports and defence aspirants",
      "Patients concerned about flap-related risks",
    ],
    steps: [
      "A femtosecond laser creates a lens-shaped lenticule within the cornea.",
      "The same laser creates a small, ~2–4mm incision.",
      "The surgeon gently separates and removes the lenticule through the incision.",
      "The cornea reshapes instantly — no flap, no stitches.",
    ],
    highlights: ["Single-laser, flap-free procedure", "Minimally invasive keyhole incision", "Strong corneal biomechanical stability"],
    group: "laser-vision",
  },
  {
    slug: "touchless",
    name: "Touchless",
    fullName: "Touchless Surface Laser Treatment",
    tagline: "A completely touch-free, no-flap, no-blade surface treatment.",
    summary:
      "A single excimer laser removes the corneal surface epithelium and reshapes the cornea in one continuous, touch-free pass — no flap or incision of any kind, and nothing but the laser ever touches your eye.",
    recovery: "The surface layer regenerates over 3–5 days; vision continues to sharpen over the following weeks.",
    idealFor: [
      "Thinner corneas not suited to flap-based procedures",
      "Patients in contact sports or high-risk occupations",
      "Those who prioritise a completely blade-free, touch-free technique",
    ],
    steps: [
      "Numbing eye drops are applied — no injections, no blade, no instrument touches the eye.",
      "A single excimer laser removes the thin epithelial layer and reshapes the cornea.",
      "A protective bandage contact lens is placed over the eye.",
      "The surface epithelium naturally regenerates within a few days.",
    ],
    highlights: ["Zero touch, zero flap, zero incision", "Preserves maximum corneal tissue", "Well suited to thinner corneas"],
    group: "laser-vision",
  },
  {
    slug: "cataract",
    name: "Cataract Surgery",
    fullName: "Phacoemulsification with IOL Implantation",
    tagline: "Modern, blade-free cataract removal with a lens implant matched to your lifestyle.",
    summary:
      "A clouded natural lens is gently broken down with ultrasound energy and removed through a micro-incision, then replaced with a clear artificial intraocular lens (IOL) chosen for your vision needs.",
    recovery: "Most patients notice clearer vision within a day or two, with full stabilisation over a few weeks.",
    idealFor: [
      "Blurred, cloudy or dim vision from cataracts",
      "Increasing glare or halos, especially at night",
      "Patients wanting both cataract removal and reduced dependence on glasses",
    ],
    steps: [
      "Numbing eye drops are applied — no injections in most cases.",
      "A micro-incision is made and the clouded lens is broken up with gentle ultrasound energy.",
      "The lens fragments are removed and a folded intraocular lens (IOL) is inserted through the same incision.",
      "The IOL unfolds and settles into place — the incision is self-sealing, usually with no stitches.",
    ],
    highlights: ["Blade-free micro-incision technique", "Choice of monofocal, toric or premium multifocal IOLs", "Typically a day-care procedure"],
    group: "eye-care",
  },
  {
    slug: "icl",
    name: "ICL",
    fullName: "Implantable Collamer Lens",
    tagline: "A removable, implantable lens for high power or thin corneas not suited to laser correction.",
    summary:
      "A biocompatible Collamer lens is placed between the iris and your natural lens through a tiny incision, correcting vision without removing any corneal tissue.",
    recovery: "Vision often improves within a day, with most patients resuming normal routines within 2–3 days.",
    idealFor: [
      "Very high spectacle power",
      "Thinner corneas not suited to laser vision correction",
      "Patients who want a correction option that can be removed if ever needed",
    ],
    steps: [
      "Numbing eye drops are applied and the eye is prepared for the procedure.",
      "A small incision is made at the edge of the cornea.",
      "The folded Collamer lens is inserted and positioned behind the iris, in front of the natural lens.",
      "The lens unfolds into place — no corneal tissue is removed or reshaped.",
    ],
    highlights: ["No corneal tissue removed", "Removable or exchangeable if required", "UV-protective lens material"],
    group: "eye-care",
  },
  {
    slug: "squint-surgery",
    name: "Squint Surgery",
    fullName: "Strabismus (Squint) Correction Surgery",
    tagline: "Realigning the eye muscles for straighter, better-coordinated vision.",
    summary:
      "The muscles controlling eye movement are adjusted — tightened, repositioned or loosened — to correct misalignment between the two eyes and improve coordinated binocular vision.",
    recovery: "Most patients resume normal activity within a few days; final alignment settles over several weeks.",
    idealFor: [
      "Visibly misaligned or crossed eyes",
      "Double vision linked to eye misalignment",
      "Children and adults with diagnosed strabismus",
    ],
    steps: [
      "A detailed assessment maps the exact muscle imbalance causing the misalignment.",
      "Under anaesthesia, the surgeon accesses the relevant eye muscle(s) through the conjunctiva.",
      "The muscle is repositioned, tightened or loosened to correct the alignment.",
      "The tissue is closed with dissolvable sutures — no external stitches are visible.",
    ],
    highlights: ["Suitable for both children and adults", "Improves alignment and, often, depth perception", "Day-care procedure in most cases"],
    group: "eye-care",
  },
  {
    slug: "corneal-treatment",
    name: "Corneal Treatment",
    fullName: "Corneal Disorders & Transplant Care",
    tagline: "From corneal infections to transplants — specialised care for a healthy, clear cornea.",
    summary:
      "Covers diagnosis and treatment of corneal conditions such as keratoconus, infections and scarring, including corneal transplant (keratoplasty) when the cornea needs to be replaced with healthy donor tissue.",
    recovery: "Recovery varies by condition and technique — from days for minor treatments to months of monitoring after a transplant.",
    idealFor: [
      "Keratoconus or progressive corneal thinning",
      "Corneal scarring, infection or injury",
      "Patients advised they may need a corneal transplant",
    ],
    steps: [
      "Detailed corneal imaging and topography confirm the exact condition and its severity.",
      "A tailored treatment plan is created — from medical management or collagen cross-linking to partial or full-thickness transplant.",
      "For transplants, the damaged corneal tissue is carefully replaced with matched, healthy donor tissue.",
      "Scheduled follow-ups track healing and visual recovery over time.",
    ],
    highlights: ["Includes collagen cross-linking for keratoconus", "Partial and full-thickness transplant options", "Ongoing monitoring built into the care plan"],
    group: "eye-care",
  },
  {
    slug: "glaucoma-treatment",
    name: "Glaucoma Treatment",
    fullName: "Glaucoma Diagnosis & Management",
    tagline: "Protecting your optic nerve and vision through early detection and pressure control.",
    summary:
      "Combines regular eye-pressure monitoring and visual field testing with medication, laser or surgical options to control intraocular pressure and protect the optic nerve from further damage.",
    recovery: "Medication and laser treatments typically involve no downtime; surgical options have a recovery period your surgeon will outline.",
    idealFor: [
      "Elevated eye pressure found during a routine check-up",
      "Family history of glaucoma",
      "Patients already diagnosed and needing ongoing management",
    ],
    steps: [
      "Eye pressure, optic nerve imaging and visual field tests establish a baseline.",
      "A management plan is set — pressure-lowering drops are usually the first step.",
      "If drops aren't enough, laser treatment may be used to improve fluid drainage.",
      "For advanced cases, a surgical drainage procedure may be recommended, with regular follow-up to protect vision.",
    ],
    highlights: ["Early-detection focus to help prevent vision loss", "Stepwise approach — drops, laser, then surgery if needed", "Regular monitoring built into every plan"],
    group: "eye-care",
  },
  {
    slug: "retina-treatment",
    name: "Retina Treatment",
    fullName: "Retinal Disorders — Laser & Surgical Care",
    tagline: "Specialised care for the retina, from diabetic eye disease to retinal detachment.",
    summary:
      "Covers diagnosis and treatment of retinal conditions — including diabetic retinopathy, retinal tears and detachment — using retinal imaging, laser treatment and surgical repair as needed.",
    recovery: "Depends on the condition and treatment used — laser treatments usually involve no downtime, surgical repair requires a monitored recovery period.",
    idealFor: [
      "Diabetic patients due for a retinal screening",
      "Sudden flashes, floaters or a curtain-like shadow in vision",
      "Patients diagnosed with a retinal tear or detachment",
    ],
    steps: [
      "Dilated retinal examination and OCT imaging assess the retina in detail.",
      "Diabetic retinopathy or minor tears are often treated with targeted laser therapy.",
      "Retinal detachment is treated surgically to reattach and stabilise the retina.",
      "Follow-up imaging confirms healing and monitors long-term retinal health.",
    ],
    highlights: ["OCT-based retinal imaging", "Laser treatment for diabetic eye disease", "Surgical repair for retinal detachment"],
    group: "eye-care",
  },
  {
    slug: "oculoplasty",
    name: "Oculoplasty",
    fullName: "Oculoplasty — Eyelid & Orbit Surgery",
    tagline: "Correcting eyelid, tear duct and orbit conditions for both function and appearance.",
    summary:
      "Covers surgical correction of eyelid and orbit conditions — such as drooping eyelids, in-turned or out-turned eyelids and blocked tear ducts — restoring comfort, eye protection and natural appearance.",
    recovery: "Most procedures allow a return to routine activities within a week, with swelling settling over several weeks.",
    idealFor: [
      "Drooping eyelid affecting vision or appearance",
      "In-turned or out-turned eyelids causing irritation",
      "Watering eyes from a blocked tear duct",
    ],
    steps: [
      "A focused assessment identifies the exact eyelid, tear duct or orbit condition.",
      "The procedure is planned to address both function and natural appearance.",
      "Surgery is performed, typically under local anaesthesia, through minimal, well-concealed incisions.",
      "Follow-up visits track healing as swelling subsides over the following weeks.",
    ],
    highlights: ["Addresses both comfort and appearance", "Minimal, well-concealed incisions", "Usually a day-care procedure"],
    group: "eye-care",
  },
];

export const getProcedureBySlug = (slug) => procedures.find((p) => p.slug === slug);

export const laserProcedures = procedures.filter((p) => p.group === "laser-vision");
export const moreEyeCareProcedures = procedures.filter((p) => p.group === "eye-care");

// Comparison table shown on the "Compare Procedures" section.
// `values` is keyed by procedure slug so the table can render however many
// laser-vision procedures exist without needing matching column props.
export const comparisonRows = [
  {
    label: "Technique",
    values: {
      "custom-lasik": "Flap + wavefront-guided reshaping",
      "femto-lasik": "Blade-free flap + laser reshaping",
      smile: "Flap-free, keyhole incision",
      touchless: "No flap, no incision, no touch",
    },
  },
  {
    label: "Best for corneal thickness",
    values: {
      "custom-lasik": "Normal",
      "femto-lasik": "Normal",
      smile: "Normal to slightly thin",
      touchless: "Thinner corneas",
    },
  },
  {
    label: "Typical recovery",
    values: {
      "custom-lasik": "1–2 days",
      "femto-lasik": "1–2 days",
      smile: "1–2 days",
      touchless: "3–5 days",
    },
  },
  {
    label: "Contact / sports suitability",
    values: {
      "custom-lasik": "Good, after initial healing",
      "femto-lasik": "Good, after initial healing",
      smile: "Very good",
      touchless: "Excellent, most robust surface",
    },
  },
];
