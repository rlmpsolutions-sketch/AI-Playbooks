// ---------------------------------------------------------------------------
// Sample data for the Property Investor Dashboard.
// Replace PROPERTIES below with your real deals. Each row is one property.
// followUpDate is generated relative to "today" so the demo always shows a
// realistic mix of overdue / due-soon / upcoming follow-ups.
// ---------------------------------------------------------------------------

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

const STATUS_META = {
  found:       { label: "Found",          color: "#3b82f6" },
  analyzing:   { label: "Analyzing",      color: "#22d3ee" },
  offer:       { label: "Offer Made",     color: "#a78bfa" },
  contract:    { label: "Under Contract", color: "#f59e0b" },
  purchased:   { label: "Purchased",      color: "#eab308" },
  renovating:  { label: "Renovating",     color: "#f97316" },
  listed:      { label: "Listed",         color: "#38bdf8" },
  sold:        { label: "Sold",           color: "#22c55e" },
};

const STATUS_ORDER = ["found", "analyzing", "offer", "contract", "purchased", "renovating", "listed", "sold"];

const PROPERTIES = [
  { id: 1, address: "412 Maple Ridge Dr", city: "Franklin", state: "TN", zip: "37064", propertyType: "Single Family", status: "found", source: "Driving for Dollars", owner: "R. Combs", dateFound: "2026-07-14", followUpDate: daysFromNow(-2), followUpNote: "Call owner back re: asking price", purchasePrice: null, arv: 285000, rehabBudget: 38000, estProfit: 41000, actualProfit: null, notes: "Vacant 6 months, roof needs work." },
  { id: 2, address: "88 Lakeview Terrace", city: "Brentwood", state: "TN", zip: "37027", propertyType: "Single Family", status: "analyzing", source: "MLS", owner: "Century Realty", dateFound: "2026-07-10", followUpDate: daysFromNow(-1), followUpNote: "Get contractor rehab estimate", purchasePrice: null, arv: 410000, rehabBudget: 52000, estProfit: 58000, actualProfit: null, notes: "Comps support ARV, needs inspection." },
  { id: 3, address: "215 Cedar Hollow Ln", city: "Nolensville", state: "TN", zip: "37135", propertyType: "Multi-Family", status: "offer", source: "Wholesaler", owner: "JD Wholesale Co.", dateFound: "2026-06-28", followUpDate: daysFromNow(1), followUpNote: "Awaiting counter-offer", purchasePrice: null, arv: 520000, rehabBudget: 65000, estProfit: 72000, actualProfit: null, notes: "Duplex, both units occupied." },
  { id: 4, address: "902 Sunset Grove Ave", city: "Murfreesboro", state: "TN", zip: "37130", propertyType: "Single Family", status: "contract", source: "Direct Mail", owner: "T. Whitfield", dateFound: "2026-06-15", followUpDate: daysFromNow(0), followUpNote: "Earnest money due today", purchasePrice: 168000, arv: 245000, rehabBudget: 31000, estProfit: 34000, actualProfit: null, notes: "Closing scheduled in 3 weeks." },
  { id: 5, address: "67 Birchwood Ct", city: "Franklin", state: "TN", zip: "37069", propertyType: "Condo", status: "contract", source: "MLS", owner: "Est. of M. Hale", dateFound: "2026-06-10", followUpDate: daysFromNow(4), followUpNote: "Title search results", purchasePrice: 142000, arv: 198000, rehabBudget: 18000, estProfit: 26000, actualProfit: null, notes: "Estate sale, motivated seller." },
  { id: 6, address: "331 Harvest Moon Rd", city: "Spring Hill", state: "TN", zip: "37174", propertyType: "Single Family", status: "purchased", source: "Auction", owner: "Investor-owned", dateFound: "2026-05-20", followUpDate: daysFromNow(-5), followUpNote: "Schedule dumpster + demo crew", purchasePrice: 155000, arv: 260000, rehabBudget: 45000, estProfit: 48000, actualProfit: null, notes: "Purchased at courthouse auction." },
  { id: 7, address: "19 Whispering Pines Dr", city: "Thompson's Station", state: "TN", zip: "37179", propertyType: "Single Family", status: "renovating", source: "Driving for Dollars", owner: "Investor-owned", dateFound: "2026-04-30", followUpDate: daysFromNow(2), followUpNote: "Framing inspection walkthrough", purchasePrice: 178000, arv: 289000, rehabBudget: 49000, estProfit: 52000, actualProfit: null, notes: "Rehab ~60% complete." },
  { id: 8, address: "540 Copperfield Way", city: "Nolensville", state: "TN", zip: "37135", propertyType: "Single Family", status: "renovating", source: "Referral", owner: "Investor-owned", dateFound: "2026-04-12", followUpDate: daysFromNow(-3), followUpNote: "Follow up with electrician on delay", purchasePrice: 190000, arv: 310000, rehabBudget: 58000, estProfit: 55000, actualProfit: null, notes: "Behind schedule ~2 weeks." },
  { id: 9, address: "76 Autumn Ridge Cir", city: "Murfreesboro", state: "TN", zip: "37128", propertyType: "Single Family", status: "listed", source: "MLS", owner: "Investor-owned", dateFound: "2026-03-18", followUpDate: daysFromNow(6), followUpNote: "Review offers from open house", purchasePrice: 162000, arv: 255000, rehabBudget: 40000, estProfit: 44000, actualProfit: null, notes: "Listed 5 days ago, 3 showings." },
  { id: 10, address: "1204 Founders Pointe", city: "Franklin", state: "TN", zip: "37064", propertyType: "Townhouse", status: "listed", source: "Wholesaler", owner: "Investor-owned", dateFound: "2026-03-02", followUpDate: daysFromNow(1), followUpNote: "Price reduction decision", purchasePrice: 205000, arv: 298000, rehabBudget: 35000, estProfit: 46000, actualProfit: null, notes: "On market 22 days, one offer fell through." },
  { id: 11, address: "44 Stonebridge Ln", city: "Brentwood", state: "TN", zip: "37027", propertyType: "Single Family", status: "sold", source: "MLS", owner: "—", dateFound: "2026-01-08", followUpDate: null, followUpNote: null, purchasePrice: 175000, arv: 270000, rehabBudget: 42000, estProfit: 43000, actualProfit: 39500, notes: "Closed 2026-06-02." },
  { id: 12, address: "310 Meadowlark St", city: "Murfreesboro", state: "TN", zip: "37129", propertyType: "Single Family", status: "sold", source: "Direct Mail", owner: "—", dateFound: "2025-12-14", followUpDate: null, followUpNote: null, purchasePrice: 138000, arv: 215000, rehabBudget: 33000, estProfit: 38000, actualProfit: 41200, notes: "Closed 2026-05-14, beat estimate." },
  { id: 13, address: "6 Quail Hollow Ave", city: "Spring Hill", state: "TN", zip: "37174", propertyType: "Multi-Family", status: "sold", source: "Wholesaler", owner: "—", dateFound: "2025-11-20", followUpDate: null, followUpNote: null, purchasePrice: 265000, arv: 395000, rehabBudget: 60000, estProfit: 62000, actualProfit: 58900, notes: "Closed 2026-04-28, sold as duplex rental to investor." },
  { id: 14, address: "128 Fox Run Trl", city: "Nolensville", state: "TN", zip: "37135", propertyType: "Single Family", status: "sold", source: "Auction", owner: "—", dateFound: "2025-10-05", followUpDate: null, followUpNote: null, purchasePrice: 150000, arv: 240000, rehabBudget: 40000, estProfit: 42000, actualProfit: 35800, notes: "Closed 2026-03-10, rehab overran budget." },
  { id: 15, address: "77 Providence Way", city: "Franklin", state: "TN", zip: "37067", propertyType: "Condo", status: "sold", source: "Referral", owner: "—", dateFound: "2025-09-11", followUpDate: null, followUpNote: null, purchasePrice: 120000, arv: 180000, rehabBudget: 22000, estProfit: 30000, actualProfit: 33100, notes: "Closed 2026-02-18." },
  { id: 16, address: "902 Timber Creek Dr", city: "Thompson's Station", state: "TN", zip: "37179", propertyType: "Single Family", status: "sold", source: "MLS", owner: "—", dateFound: "2025-08-02", followUpDate: null, followUpNote: null, purchasePrice: 195000, arv: 300000, rehabBudget: 47000, estProfit: 48000, actualProfit: 45700, notes: "Closed 2026-01-22." },
  { id: 17, address: "23 Willow Bend Ct", city: "Murfreesboro", state: "TN", zip: "37130", propertyType: "Land", status: "found", source: "Driving for Dollars", owner: "H. Patterson", dateFound: "2026-07-18", followUpDate: daysFromNow(3), followUpNote: "Confirm zoning for duplex build", purchasePrice: null, arv: 95000, rehabBudget: 0, estProfit: 22000, actualProfit: null, notes: "1.2 acre lot, unincorporated." },
  { id: 18, address: "561 Grandview Blvd", city: "Brentwood", state: "TN", zip: "37027", propertyType: "Single Family", status: "analyzing", source: "Cold Call", owner: "S. Nakamura", dateFound: "2026-07-05", followUpDate: daysFromNow(-4), followUpNote: "Send comps + cash offer range", purchasePrice: null, arv: 465000, rehabBudget: 40000, estProfit: 55000, actualProfit: null, notes: "Owner relocating out of state." },
  { id: 19, address: "18 Orchard Hill Rd", city: "Spring Hill", state: "TN", zip: "37174", propertyType: "Single Family", status: "offer", source: "Direct Mail", owner: "G. Alvarez", dateFound: "2026-06-24", followUpDate: daysFromNow(0), followUpNote: "Offer expires today — need answer", purchasePrice: null, arv: 250000, rehabBudget: 36000, estProfit: 37000, actualProfit: null, notes: "Second offer submitted after rejection." },
  { id: 20, address: "705 Chestnut Grove Ln", city: "Nolensville", state: "TN", zip: "37135", propertyType: "Townhouse", status: "purchased", source: "MLS", owner: "Investor-owned", dateFound: "2026-05-30", followUpDate: daysFromNow(7), followUpNote: "Kickoff meeting with GC", purchasePrice: 210000, arv: 305000, rehabBudget: 38000, estProfit: 43000, actualProfit: null, notes: "Closed on purchase last week." },
];

// Realized profit by month (last 7 months) for the trend chart — derived from
// PROPERTIES with status "sold", but kept explicit here for easy editing.
const PROFIT_TREND = [
  { month: "Jan", profit: 45700 },
  { month: "Feb", profit: 33100 },
  { month: "Mar", profit: 35800 },
  { month: "Apr", profit: 58900 },
  { month: "May", profit: 41200 },
  { month: "Jun", profit: 39500 },
  { month: "Jul", profit: 0 },
];
