# Long-Term Owner Cross-Reference (2026-08-19)

**Source:** `Copy Raimie RV Parks List Skip Traced - Pace.xlsx` (uploaded directly by Raimie, 9,721 records, RV-specific skip-trace pull with owner-tenure fields) cross-referenced by address against the 7,410-record `MHP_RV_MoveForward_Outreach_List.xlsx`.

**Kept private from Doron's team per Raimie's instruction** — this is RLM's own sourcing data, not shared with the buyer.

## Match results

- **71 of 7,410 outreach records matched** an address in the skip-trace file. Small overlap, as expected — the skip-trace file is RV-park-specific and much smaller than the full national MHP+RV directory, so most of the 7,410 simply aren't in it.
- The `LongTermOwner` flag itself was **0 for every single match** — it's a sparse/unreliable field in this dataset (only 32 of 9,721 records total have it set). Instead, tenure was computed directly as **years since `LastSalesDate`**, which is the reliable signal used here.

## Tenure breakdown among the 71 matches

| Years since last sale | Count |
|---|---|
| 15+ years | 8 |
| 10–15 years | 9 |
| 5–10 years | 11 |
| Under 5 years | 10 |
| Unknown (no sale date on file) | 33 |

**17 of the 71 matches have owned 10+ years** — genuine long-term-ownership warm-intent leads. Top of the list: North Breeze MHP (San Antonio, TX, 20.7 yrs), Ellenton Gardens Travel Resort (Ellenton, FL, 20.5 yrs), Regency Village (San Antonio, TX, 20.3 yrs), Christmas R V Park (Christmas, FL, 19 yrs), Horseshoe Cove RV Resort (Bradenton, FL, 18.1 yrs).

## Other warm-intent signals surfaced in the same 71 matches

- **40 flagged Absentee Owner**
- Small number flagged Potentially Inherited / Deceased-Probate and Delinquent Tax / Lien — see the Summary tab in the deliverable for exact counts

## Deliverable

`Long_Term_Owner_Matches.xlsx` — sent directly to Raimie. One sheet with all 71 matches, sorted by years-since-last-sale descending, including both the directory phone (from the national list) and the skip-trace's own owner name/phone/email where available — the owner-level contact is often better for direct outreach than the business line.

## Next step if broader tenure coverage is wanted

To get ownership-tenure data across the full 7,410 (not just this 71-record overlap), the list would need to go through a skip-trace/property-records pull directly — this file only covers what RLM already had on hand for RV parks specifically.


## Skip-trace upload files prepared (2026-08-19, later same day)

Per Raimie's request, built two upload-ready files for whichever skip-trace service (PropStream, BatchLeads, etc.) he chooses to run:

- `SkipTrace_Upload_Full_7410.xlsx` -- all 7,410 outreach records, formatted as Street Address / City / State / Zip plus reference columns (County, Business Name, Pads, Size Tier, stable Record ID for merging results back later).
- `SkipTrace_Upload_ThisWeek_Top100.xlsx` -- same format, just the prioritized top-100 batch, for a smaller/cheaper first run.

Both include an Instructions tab. Kept out of Doron's team's hands per instruction -- this is RLM sourcing data only.
