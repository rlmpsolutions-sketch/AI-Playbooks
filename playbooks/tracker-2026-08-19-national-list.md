# National MHP/RV Prospecting List — Buy Box Screen (2026-08-19)

**Source:** `SPECIAL_LIST_NATIONAL_MHP_RV_50K.xlsx`, pulled from Doron's team — a national business-directory export (54,270 records) of mobile home parks and RV parks: Name, Address, City, State, Zip, Telephone, Type, County, Description, Units, and a Size tier (SMALL <50 / MEDIUM 51–100 / LARGE >100).

**Important distinction from every other file screened so far:** this is a **raw prospecting universe**, not a deal sheet. There is no price, no cap rate, no NOI, no financing signal, and no owner-motivation flag (absentee, probate, tax lien, etc.) anywhere in the source. It answers "which parks exist and roughly how big are they," not "which parks are for sale on what terms." Treat this as the top of the funnel, not warm or ready-to-submit leads.

## Buy box screen applied

- **State:** excluded IL, CA, NY (7,522 records removed)
- **Pads:** kept a record if either (a) the actual `Units` value on file is ≥25, or (b) no unit count is on file but the Size tier is MEDIUM (51–100) or LARGE (>100) — a reasonable proxy, since sampled records with a known unit count show LARGE median 181 pads and MEDIUM median 73 pads. **This is an estimate where the exact unit count is missing — verify before outreach**, especially near the 25-pad line.
- **Cap rate / financing / warm intent:** not screenable from this file at all — no data present.

**Result: 13,931 of 54,270 records (25.7%) qualify on state + estimated pad count.**

## Data quality caveat

Of the 13,931 qualifying records: **5,269 (38%) have no business name on file** ("NOT AVAILABLE"), **6,519 (47%) have no phone number**, and **5,267 (38%) are missing both**. Address and county are populated for effectively all records, so these are usable for a mail campaign or a skip-trace/owner-lookup pass, but not for immediate cold calling as-is.

## Top qualifying states by record count

| State | Qualifying Records |
|---|---|
| FL | 2,864 |
| TX | 1,325 |
| AZ | 847 |
| PA | 575 |
| IN | 547 |
| NC | 492 |
| MI | 490 |
| OH | 483 |
| WI | 446 |
| WA | 375 |
| GA | 352 |
| SC | 349 |
| LA | 347 |
| OR | 337 |
| VA | 279 |

## Deliverable

Filtered workbook `MHP_RV_BuyBox_Qualified_National_List.xlsx` sent to Raimie directly — sorted by state, then by size tier (Large → Medium → Small-with-confirmed-25+), then by pad count descending. Each row is tagged `Pad Count Basis`: **Confirmed** (actual unit count on file) or **Estimated** (size tier proxy only) — filter to "Confirmed" first if you want a smaller, higher-confidence starting batch instead of all 13,931.

## Recommended next step

This list has no motivation signal, so it needs one of two treatments before it's worth spending outreach time on:
1. **Skip-trace overlay** — cross-reference against a source like the earlier `RV Parks List Skip Traced - Pace` sheet (which does carry AbsenteeOwner/LongTermOwner/PotentiallyInherited/DelinquentTaxActivity flags) to find warm-intent overlap.
2. **Direct mail / cold call campaign** at scale, treating this purely as a numbers-driven top-of-funnel sweep rather than individually-qualified leads — the 5,267 records missing both name and phone would need an owner lookup first regardless.

Given the size (13,931 records), recommend starting with the top 3–5 states by volume (FL, TX, AZ, PA, IN) and the "Confirmed" pad-count subset before expanding further.
