# Technolife — making a 10,000-product catalogue feel like a shop

**Case study · UX / UI redesign · E-commerce**

---

## Header block

| | |
|---|---|
| **Subject** | Technolife — consumer electronics retailer, Iran |
| **Project type** | **Self-directed redesign — concept. Not commissioned by Technolife.** |
| **Role** | Everything — research, IA, wireframes, design system, usability testing |
| **Existing site** | technolife.ir |
| **Deliverables** | Research report · affinity analysis · persona · IA · hi-fi wireframes · design system · usability test report |

---

> **Technolife did not commission this work.** I chose a live retailer with a real
> catalogue because a redesign is only worth doing against real constraints — real product
> volume, real content, real competitors. Everything below is my own research, run for this
> project: six interviews, a 92-person survey, and a usability test with nine participants
> on my own prototype.

## Why this one

Most redesign concepts pick a beautiful product and restyle it. That proves taste and
nothing else.

I picked Technolife because it has the problem that is actually hard: thousands of products,
a content library sitting alongside the shop, and buyers who arrive knowing what they need
but not what it is called. You cannot solve that with a new colour palette. You have to
change how the catalogue is structured and how a decision gets made inside it.

## One sentence

Technolife sells laptops, phones, cameras and accessories alongside articles and buying
guides. The catalogue is deep and the content is good — but people cannot find the product
they came for, and cannot tell two similar products apart once they do.

---

## The problem

Technolife has two jobs on one site: publish technology content, and sell technology
products. Those two jobs compete.

Shoppers arriving with a specific need — a laptop for graphic design, a camera under a
budget — have to work through a search and filter system that does not narrow the way they
think. Once they reach a shortlist, there is no way to place two products side by side.
Product pages carry the information but not in an order that answers "is this the one for
me".

The cost of that is measurable in the places every retailer watches: people leave before
they buy, and the ones who do buy take longer and need more help.

**What I set out to fix:** the distance between arriving with an intention and being
confident enough to pay.

---

## Research

### Interviews — 6 participants

I interviewed six people who buy consumer electronics online, in a semi-structured
30-minute format. What I asked:

- What do you weigh up when you decide to buy an electronic product?
- Where has online electronics shopping frustrated you before?
- How do you research a product before you buy it?
- What makes it hard to find the right product for what you need?
- Do you prefer particular brands, and why?
- What information actually helps you decide?

**What came back, consistently:**

People do not want more information — they want *comparable* information. They want to see
two products next to each other on the same terms. They lean on other buyers' reviews more
than on manufacturer copy. And they judge a store on whether the process feels transparent:
clear price, clear stock, clear delivery, no surprises at checkout.

Those three sentences carried the whole redesign. Everything below traces back to one of
them.

## Synthesis

I clustered the interview and survey material into an affinity diagram, which resolved into
two groups: **what gets in people's way**, and **what people actually need**.

Those fed a persona and an empathy map for the primary shopper — someone who knows roughly
what they want, does not know the specification language, and is deciding between three
similar options with a real budget in mind.

### The insight the design was built on

The friction was not in any single screen. It was in the **gaps between them** — the
moment after search when the list is still too long, and the moment after the shortlist
when there is no way to compare. Fixing the search box alone would not have moved anything.

---

## Prioritisation

I ran a brainstorm, then sorted everything with MoSCoW, weighed against implementation
effort.

**Must have**
- Search that understands specification language, not just product names
- Filters that narrow the way shoppers actually think — use case, budget, key specs
- A clear, consistent interface across the catalogue
- Visible security and trust at the payment step

**Should have**
- Side-by-side product comparison
- Reviews and buying guides surfaced on the product page, not buried in a separate section
- More payment options
- A findable customer support route

**Could have**
- Personalised recommendations
- A loyalty programme

**Won't have, this time**
- Virtual-reality product viewing — high cost, no evidence anyone asked for it

**Why "won't have" is on the page:** cutting a feature is a decision, and the reason for
cutting it says more about how I work than the features I kept.

---

## Design

**Information architecture.** Restructured so the two jobs of the site stop competing.
Content supports the purchase instead of sitting beside it — a buying guide appears where a
buyer is deciding, not in a separate magazine section.

**Hi-fi wireframes** for the flows that carried the problem: search and results, filtering,
comparison, product detail, and checkout.

**Design system** — type scale, colour, spacing, and the components a catalogue this size
repeats thousands of times: product card, filter group, specification table, comparison row,
review block, price and stock states.

The design system mattered more here than the individual screens. A retailer with this many
SKUs cannot be designed page by page — it has to be designed as a set of parts that hold
together across a catalogue nobody will ever review by hand.

---

## Testing

I built a prototype and ran a usability test in Maze with **nine participants**, reviewing
the results against Nielsen's ten usability heuristics. Three tasks, each aimed at one of
the three interview findings.

**Task 1 — Find a specific product.**
*"You need a laptop with a 15-inch display and an Intel Core i7 for graphic design work.
Find it."*
Tests whether someone who knows the job can find the product without knowing the
specification language.

**Task 2 — Add to cart and check out.**
*"Add the laptop to your cart and complete the purchase. Pay attention to each step."*
Tests whether the checkout feels transparent enough to finish.

**Task 3 — Judge a product from its page.**
*"Open the product page. Read the description, look at the images, check the specifications
and read the reviews. Is there enough here to decide?"*
Tests whether the page answers *is this the one for me*, not just *what is this*.

The findings from this round shaped the final screens. The raw Maze data is not published
here.

## What the redesign proposes

This is a concept, so there is no launch metric to report. What there is, is a set of
specific proposals and the evidence behind each one.

| Proposal | Driven by |
|---|---|
| Filter by use case before specification — "for graphic design", not "16GB RAM" | Interviews: people know the job, not the spec language |
| Side-by-side comparison as a first-class flow, not a hidden feature | Interviews: the struggle is choosing, not finding |
| Reviews raised above the specification table on product pages | Interviews: buyers read other buyers first |
| Buying guides placed at the decision point, not in a separate content section | The two jobs of the site were competing |
| A component system for the catalogue rather than page-by-page design | A catalogue this size cannot be designed page by page |

**What this project demonstrates:** that I will do primary research for a redesign rather
than restyle a screenshot, and that I test my own work and publish what the test says.

---

## What I would do with a real brief

Three things this project could not do, and would need to:

- **Access to their analytics.** Where people actually drop off would sharpen every
  assumption here into a measurement.
- **A second round of testing** on the revised prototype, to show movement between rounds
  rather than a single reading.
- **Technical constraints.** A redesign that ignores the platform it has to live on is a
  drawing, not a design.

## What I would tell a retailer with this problem

**Comparison is not a feature, it is the whole decision.** In a catalogue this size, people
do not struggle to find products — they struggle to choose between the four they have
already found. Most retailers spend their design budget on search and almost none on the
moment after it.

**Reviews outrank specifications.** Every participant read what other buyers said before
they read the specification table. Putting reviews below the fold treats the most persuasive
content on the page as an afterthought.

**A design system is not a luxury at this scale.** Ten thousand products cannot be designed
screen by screen. The parts have to hold up on their own, because nobody will ever review
them all.

---

## Assets needed for this page

- Before and after screenshots: search results, filter panel, product detail, comparison
- The affinity diagram, cleaned up and legible
- The persona card
- The IA diagram
- The design system sheet
- Prototype screens for the three tested tasks

All of these are your own artefacts, so nothing here needs permission — the only rule is
that the header keeps saying this was not commissioned by Technolife.
