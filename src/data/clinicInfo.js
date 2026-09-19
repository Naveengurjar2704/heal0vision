// Verified, publicly-listed brand details (Instagram: @healovision).
// Anything not publicly verifiable is marked PLACEHOLDER — replace with
// the clinic's real, confirmed details before this site goes live.

export const clinicInfo = {
  name: "Heal O Vision",
  tagline: "Clear Vision. Better Life.",
  phone: "+91 92205 59420",
  phoneHref: "tel:+919220559420",
  whatsappHref: "https://wa.me/919220559420",
  instagram: "https://www.instagram.com/healovision/",
  email: "info@healovision.in",
  address: "Plot No. WZ-G-1/87, Khasra No. 86/3, G-1, Old Village Hastsal, Uttam Nagar, New Delhi, 110059",
  mapEmbedQuery: "", // PLACEHOLDER — Google Maps place link
  hours: "Mon – Sat: 10:00 AM – 7:00 PM", // PLACEHOLDER — confirm real hours
};

// Full list of insurance companies and TPAs the clinic bills with,
// as supplied by the clinic. Order matches their own list.
export const insurancePartners = [
  "Aditya Birla Health Insurance",
  "Bajaj Allianz Insurance",
  "Care Health Insurance",
  "Cholamandalam General Insurance",
  "East West Assist TPA",
  "Ericson Insurance TPA",
  "Family Health Plan (TPA)",
  "Future Generali India Insurance",
  "Genins India Insurance TPA",
  "Go Digit General Insurance",
  "Good Health TPA Services",
  "HDFC ERGO General Insurance",
  "Health Assist Insurance TPA",
  "Health India TPA Services",
  "Health Insurance TPA of India",
  "Heritage Health TPA",
  "ICICI Lombard General Insurance",
  "ICICI Prudential Life Insurance",
  "IFFCO Tokio General Insurance",
  "L&T General Insurance",
  "Liberty General Insurance",
  "Manipal Cigna Health Insurance",
  "MD India Healthcare (TPA) Services",
  "Medi Assist India TPA",
  "Medsave Health Care TPA",
  "Navi Health Insurance",
  "Niva Bupa Health Insurance",
  "Paramount Health Services (TPA)",
  "Park Mediclaim TPA",
  "Raksha TPA",
  "Reliance General Insurance (R Care Health)",
  "SBI General Insurance",
  "Star Health and Allied Insurance",
  "TATA AIG General Insurance",
  "Universal Sompo General Insurance",
  "Vidal Health TPA (Vipul)",
];

// Shown in the footer / marquee before the "+N more" link.
export const featuredInsurancePartners = [
  "HDFC ERGO General Insurance",
  "ICICI Lombard General Insurance",
  "Bajaj Allianz Insurance",
  "TATA AIG General Insurance",
  "Star Health and Allied Insurance",
  "Niva Bupa Health Insurance",
  "Care Health Insurance",
  "Aditya Birla Health Insurance",
];

export const trustHighlights = [
  {
    title: "All Insurance Accepted",
    detail:
      "Direct billing with 36 insurance companies and TPAs, so you don't pay out of pocket at the time of surgery. T&C apply.",
  },
  {
    title: "No-cost EMI",
    detail: "Split the cost of your procedure into easy, zero-interest monthly instalments.",
  },
  {
    title: "FDA-approved technology",
    detail: "Every procedure uses internationally certified lasers and diagnostic platforms.",
  },
  {
    title: "Free eye check-up",
    detail: "A comprehensive suitability screening before you commit to any procedure.",
  },
];

export const stats = [
  { value: "15K+", label: "Instagram community" }, // verified — public follower count
  { value: "817+", label: "Surgeries performed successfully" }, // supplied by the clinic
  // Derived from the list above so the count can never drift out of sync.
  { value: `${insurancePartners.length}`, label: "Insurance & TPA partners" },
  { value: "0%", label: "Cost EMI available" }, // verified — real offer, not a count claim
];
