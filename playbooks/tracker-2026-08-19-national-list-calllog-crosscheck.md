# Outreach List vs. Team Call Log — Cross-Check (2026-08-19)

**Source:** `Orbit_Program__Call_Log_612026.xlsx` (team-wide call log, uploaded by Raimie) cross-referenced against `MHP_RV_MoveForward_Outreach_List.xlsx` (7,410-record national outreach list).

## What the call log actually is

The Orbit Program call log has three tabs (MF, RV Park, MHP). Only RV Park and MHP are relevant (MF = multifamily, out of scope). Of ~4,200 template rows in each, **495 have real entries** (251 RV, 244 MHP). Critically, these are logged as **broker/platform-level relationship calls by city or market** — e.g. "Marcus & Millichap — Tucson AZ MHP," "ABI Multifamily — Maricopa County AZ MHP," "MHVillage FSBO — Carter County OK MHP" — not calls to each individually named park. Team members are calling brokerage teams and FSBO leads to build a pipeline for a market, not working down a park-by-park list.

This matters for matching: the log's phone numbers are almost entirely broker/platform numbers (e.g. ABI Multifamily's main line), not the individual park's own listed phone.

## Matching method and results

- **Phone number exact match:** 1 out of 7,410. Essentially no signal — confirms the log isn't tracking calls to individual park lines.
- **City + State match** (normalized): **820 of 7,410 records (11%) share a city with a logged call log entry.** This is the only usable signal, but it means "a team member has an active broker/FSBO relationship in this market," not "this specific park has been called." A single Tucson, AZ broker relationship call matched all 7 Tucson parks in the outreach list, for example.

**Important — do not treat the 820 as "already contacted, skip."** They should be flagged as "check with the team member before duplicating outreach," nothing stronger.

## Result

- **6,590 of 7,410 (89%) have zero overlap with anything in the call log** — clear to call with no coordination risk.
- **820 (11%)** are in an already-worked market — flagged with which team member's log entry caused the match.

## Deliverable

`MHP_RV_Outreach_vs_CallLog.xlsx` — sent directly to Raimie. Tabs:
- **Summary** — methodology and the caveat above, stated explicitly so it isn't lost
- **Open to Call (Priority)** — top 200 open records, same priority sort as the earlier "This Week" batch (state volume, confirmed pad count, size)
- **Open to Call (All, A-Z)** — all 6,590 open records, alphabetical by state
- **Team Overlap - Check First** — the 820, each row tagged with the team member(s) and matched call log entry that caused the overlap
