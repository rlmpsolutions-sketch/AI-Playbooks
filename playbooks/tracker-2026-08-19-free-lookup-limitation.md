# Free County Lookup Pilot — Network Limitation Found (2026-08-19)

**What happened:** Raimie doesn't have PropStream or BatchLeads and asked to go the free route (county assessor sites). Proposed piloting automated pulls on the top 15 priority properties (all FL). The pilot failed at the first step:

- `WebFetch` on `manateepao.gov` returned `EGRESS_BLOCKED`.
- A raw `curl` to the same domain independently returned a 403 at the network/proxy level.

**Conclusion:** this session's network policy blocks outbound access to arbitrary external websites (only a small allow-listed set of domains and connected services work). This is environment-wide, not a WebFetch-tool quirk — confirmed via two independent failure paths. `WebSearch` still works (goes through a different channel), but fetching/scraping the actual assessor pages does not. **This session cannot automate free county-record lookups.** They have to be done manually, in a real browser, by Raimie.

## What was still useful

Used `WebSearch` to identify the correct official assessor site for all 11 counties represented in the top 15 priority properties (all Florida):

| County | Site |
|---|---|
| Manatee | manateepao.gov |
| St Lucie | paslc.gov |
| Polk | polkflpa.gov |
| Lee | leepa.org |
| Lake | lakecopropappr.com |
| Sarasota | sc-pa.com |
| Miami-Dade | miamidadepa.gov |
| Orange | ocpaweb.ocpafl.org |
| Charlotte | ccappraiser.com |
| Pinellas | pcpao.gov |
| Marion | pa.marion.fl.us |

## Deliverable

`FL_County_Lookup_Top15.xlsx` — the top 15 priority properties, each with a clickable link to its correct county assessor site, and blank fill-in columns for Owner Name / Last Sale Date / Years Owned. Raimie does the lookups himself; send the filled-in file back and years-owned/tenure flagging can be calculated and merged into the master list, same as the 71-record RV skip-trace match.

## Takeaway for future requests

Don't propose fetching arbitrary external sites (county records, broker portals, etc.) as an automated pilot without testing first — this session's network policy makes that unavailable, and it should be assumed blocked until proven otherwise on a case-by-case basis.


## Pivot: mega-communities were the wrong target (2026-08-19, later same day)

Raimie tried the top 15 (sorted by pad count descending) and both Address and Name search failed on Colony Cove (Manatee County, 2,211 pads). Root cause: parks that size are almost always REIT-owned (Equity LifeStyle, Sun Communities, etc.), split across many sub-parcels, and registered under a corporate name -- not searchable by community name or its mailing address, and not a fit for the buy box thesis anyway (institutional owners are not motivated long-term individual sellers).

Retested network access -- still blocked (curl to manateepao.gov returned the same 403 CONNECT failure as before). Confirmed persistent, not transient.

Pivoted to a new Top 15 pulled from MEDIUM-tier (51-100 pads), confirmed-unit-count parks instead -- big enough to matter, small enough to likely be individually/family owned. New batch spans 5 states (FL, IN, WI) and 12 counties. Found all 12 county assessor/records sites via WebSearch. Two Wisconsin counties (Sheboygan, Columbia) did not have an obviously correct direct portal, so those rows point to a NETR Online directory page instead of a specific county site.

Deliverable: , same format as the mega-park version (clickable county link + fill-in Owner/Sale Date columns), plus a "Why This List Instead" tab explaining the reasoning.
