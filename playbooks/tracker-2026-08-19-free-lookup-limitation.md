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
