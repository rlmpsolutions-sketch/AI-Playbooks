# MHP & RV Park Seller Outreach — Acquisitions Playbook

*RLM Property Solutions LLC — AI Momentum Protocols*
*Category: Sales / Deal Sourcing*

---

## Purpose

You are not a listing agent pitching homes to a buyer. You are an **Acquisitions Architect** sourcing Mobile Home Park (MHP) and RV Park deals on behalf of private buyers — primarily **Doron Levi**. This playbook automates the sourcing sweep and drafts (never sends) first-contact outreach to owners/brokers, so every deal that reaches your underwriting desk is already pre-qualified against a buy box.

**Guardrail:** This playbook stops at *owner outreach drafts*. It never drafts or sends anything to Doron (or any buyer) — that only happens after you've personally underwritten the deal.

---

## Default Buy Box (Doron Levi)

| Criteria | Requirement |
|---|---|
| Pad count | 25+ |
| Cap rate | 8%+ |
| Geography | Anywhere in the US **except IL, CA, NY** |
| Financing | Creative structure **required** (seller finance / SubTo) |

This is a first-pass filter only. Treat any match as "worth underwriting," not "ready to submit."

---

## The Engine — 3 Lead Channels

```
                    ┌─────────────────────┐
                    │   WEEKLY SOURCING    │
                    │        SWEEP         │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                       │
        ▼                      ▼                       ▼
┌───────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  1. INBOX      │    │  2. WEB SEARCH    │    │  3. LISTING      │
│  Broker deals  │    │  Off-market       │    │  SITES           │
│  already sent  │    │  sourcing         │    │  LoopNet, Crexi, │
│  to you        │    │  (owner lists,    │    │  MLS — filtered  │
│                │    │  MHU marketplace, │    │  for seller-     │
│                │    │  niche groups)    │    │  financing signal│
└───────┬────────┘    └────────┬─────────┘    └────────┬─────────┘
        │                      │                        │
        └──────────────────────┼────────────────────────┘
                                ▼
                    ┌───────────────────────┐
                    │  CONSOLIDATED TRACKER │
                    │  (buy-box flagged)    │
                    └──────────┬────────────┘
                                ▼
                    ┌───────────────────────┐
                    │  DRAFT OWNER OUTREACH │
                    │  (saved, NOT sent)    │
                    └──────────┬────────────┘
                                ▼
                    ┌───────────────────────┐
                    │  YOU underwrite, then │
                    │  decide re: Doron     │
                    └───────────────────────┘
```

---

## The Cowork Prompt (paste this in, run weekly)

```
I'm an acquisitions investor sourcing Mobile Home Park (MHP) and RV Park
deals for private buyers, primarily Doron Levi. His buy box: 25+ pads,
8%+ cap rate, creative financing required (seller finance or SubTo),
anywhere in the US except IL, CA, NY.

Step 1 — Inbox sweep: Search my Gmail from the last 30 days for broker
emails about MHP or RV park deals (keywords: "mobile home park", "MHP",
"RV park", "off market", "OM"). Include the Promotions category
(category:promotions) — several real brokers and saved-search alerts
(e.g. MobileHomeParkStore.com) land there and get missed by default
searches. For each, extract: park name, location, pad count,
price/cap rate if stated, broker name + contact, and whether seller
financing or creative terms are mentioned.

Step 2 — Web search: Search the web for MHP/RV park off-market sourcing
channels — owner lists, Mobile Home University marketplace, RV Park
Store, niche broker/investor groups — for parks that might be available
off-market in states other than IL, CA, NY.

Step 3 — Listing sites: Search all of the following for MHP/RV parks
for sale, in this order (least-blocked / most useful first):
  1. MobileHomeParkStore.com — browsable by county/state, shows cap
     rate + purchase method (cash, new loan, seller financing) right
     on the listing.
  2. RVParkStore.com — sister site, RV-park-specific.
  3. BizBuySell.com (Mobile Home Parks section + Campgrounds/RV Parks
     section) — business-marketplace listings, skews toward smaller
     owner-operators who are more often open to creative terms than
     institutional broker listings.
  4. Realmo.com — another dedicated MHP/RV marketplace.
  5. LoopNet and Crexi — largest inventory but block automated
     access; browse manually or rely on saved-search email alerts.
Keep listings where the description mentions or doesn't rule out
seller financing/creative terms. Drop anything explicitly "cash only"
or "no seller financing."

Step 4 — Consolidate into one tracker with columns: Park Name | State |
Pads | Asking Price | Cap Rate (if known) | Financing Signal | Source
(Gmail/Web/LoopNet/Crexi) | Contact | Buy-Box Match (Y/N/Unknown). Flag
Y only for pad count + geography — never assume cap rate or financing
terms are confirmed without real numbers.

Step 5 — Save the tracker as a Word doc / Sheet in [folder].

Step 6 — Draft outreach (do NOT send): for each lead with an
identifiable owner or broker contact, draft a Gmail draft using the
Owner Outreach templates below, matched to source channel. Save as
drafts only — never send automatically.

Step 7 — Stop there. Do not draft or send anything to Doron Levi or any
other buyer. Those go out only after I've personally underwritten the
deal.
```

---

## Owner/Broker Outreach Templates

*Voice: clinical, peer-to-peer, data-driven. No em dashes. No hype language ("incredible deal," "must-see"). No wholesaler-list tone. Always end with a low-pressure binary ask.*

### A. Replying to a broker who already sent the deal

**Subject:** [Park Name] — Following Up

> Hi [Broker Name],
>
> Thanks for sending over [Park Name]. Before I move it forward, can you confirm two things: is the seller open to a creative structure (seller finance or subject-to), and is there a current rent roll or T12 available?
>
> If both check out I'll move it into underwriting this week. If not, no worries, just let me know.

### B. Cold outreach — owner found via public record (no broker)

**Subject:** [Park Name] — Quick Question on Long-Term Plans

> Hi [Owner Name],
>
> I work with private capital focused on mobile home park and RV park acquisitions. [Park Name] in [City, State] came up in my research and I wanted to reach out directly rather than through a broker.
>
> We work with sellers on a range of structures, including seller financing, when it fits both sides.
>
> Are you open to a conversation about a potential sale, or is the property not on the table right now?

### C. Listing-site lead (LoopNet/Crexi) — broker is point of contact

**Subject:** [Park Name] — [State] | Financing Structure Question

> Hi [Broker Name],
>
> I saw [Park Name] listed on [LoopNet/Crexi]. Before I request the full package, is the seller open to a creative structure (seller finance or subject-to)? That's a hard requirement on the buyer side.
>
> If yes, I'd like the OM, T12, and rent roll. If it's cash-only, I'll pass for now, but appreciate you letting me know either way.

---

## Reference

- Buyer buy-box and full outreach templates for submitting *to* buyers: `references/rlm-buyers-directory.md`
- Brand voice rules: `references/rlm-brand-identity.md`
