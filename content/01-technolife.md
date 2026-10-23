# Technolife — making a catalogue of thousands of products feel like a shop

**Case study · UX / UI redesign · E-commerce**

---

## Header block

| | |
|---|---|
| **Subject** | Technolife — consumer electronics retailer, Iran |
| **Project type** | **Commissioned client work — assigned by Technolife** |
| **Employment** | Web & Visual Designer at Technolife, March–July 2019 |
| **Role** | Research, IA, wireframes, design system, usability testing |
| **Existing site** | technolife.ir |
| **Deliverables** | Research report · affinity analysis · persona · IA · hi-fi wireframes · design system · usability test report |

---

> Web & Visual Designer at Technolife, March–July 2019. This was a redesign project
> commissioned by Technolife as part of my role on the design team, not a self-initiated
> concept project. The work behind it: six interviews, a 92-response survey, and a usability
> test with nine participants on the prototype.

## The brief

Make the site easier to shop, not just easier to browse.

Technolife had a genuinely difficult problem to solve: thousands of products, a content
library alongside the shop, and buyers who often knew what they needed but not what it was
called. This was not a problem that could be solved with a visual refresh alone. It required
rethinking how the catalogue was structured and how shoppers made decisions inside it.

## In one sentence

Technolife sells laptops, phones, cameras and accessories alongside articles and buying
guides. The catalogue is deep and the content is strong — but shoppers had trouble reaching
the product they came for, and trouble telling two similar products apart once they did.

---

## The problem

Technolife runs two jobs on one site: publishing technology content, and selling technology
products. On the existing site those jobs competed instead of supporting each other.

A shopper arriving with a specific need — a laptop for graphic design, a camera within a
budget — had to work through a search and filter system that did not narrow the way they were
thinking. Once a shortlist formed, there was no way to put two products side by side. Product
pages carried the information, but rarely in an order that answered *is this the one for me*.

The journey the redesign had to support runs: **intent → search → narrow → compare → trust →
decide → buy.** Almost all of the existing design effort sat in the first two steps. Finding
products is only the beginning; people also need help narrowing the field, comparing what is
left, judging whether a seller can be trusted, and reaching enough confidence to buy.

**What the redesign set out to close:** the gap between arriving with an intention and feeling
confident enough to buy.

---

## Research

**6 interviews · 92 survey responses · 9 usability testers**

### Interviews — 6 participants

Six semi-structured, 30-minute interviews with people who buy consumer electronics online.
What I asked:

- What do you weigh up when you decide to buy an electronic product?
- Where has online electronics shopping frustrated you before?
- How do you research a product before you buy it?
- What makes it hard to find the right product for what you need?
- Do you prefer particular brands, and why?
- What information actually helps you decide?

**What came back, consistently:**

Participants were often able to find relevant products, but struggled to choose between the
few options that remained. They did not want more information so much as *comparable*
information — two products next to each other on the same terms. Most leaned on other buyers'
reviews more than on manufacturer copy. And they judged a store on whether the process felt
transparent: clear price, clear stock, clear delivery, no surprises at checkout.

Those findings carried the redesign. Everything below traces back to one of them.

## Synthesis

I clustered the interview and survey material into an affinity diagram, which resolved into
two groups: **what gets in people's way**, and **what people actually need**.

Those fed a persona and an empathy map for the primary shopper — someone who knows roughly
what they want, does not know the specification language, and is deciding between three
similar options with a real budget in mind.

### The insight the design was built on

The friction was rarely inside a single screen. It lived in the **gaps between them** — the
moment after a search when the list is still too long, and the moment after a shortlist forms
when there is no way to compare. Improving the search box alone would not have closed it.

---

## Prioritisation

A brainstorm, sorted with MoSCoW and weighed against implementation effort.

**Must have**
- Search that supports both product names and specification language
- Use-case-led filtering before specification filters — "for graphic design" before "16GB RAM"
- A clear, consistent interface across the catalogue
- Visible security and trust at the payment step

**Should have**
- Side-by-side product comparison
- Reviews and buying guides on the product page, rather than in a separate section
- More payment options
- A findable customer support route

**Could have**
- Personalised recommendations
- A loyalty programme

**Won't have, this time**
- Virtual-reality product viewing — high cost, and nothing in the research suggested demand
  for it

**Why "won't have" is on the page:** cutting a feature is a decision, and the reason for
cutting it says something about how I work.

---

## Design

**Information architecture.** Restructured so the two jobs of the site stop competing. Content
supports the purchase instead of sitting beside it — a buying guide appears where a buyer is
deciding, not in a separate magazine section.

**Hi-fi wireframes** for the flows that carried the problem: search and results, filtering,
comparison, product detail, and checkout.

**Design system** — type scale, colour, spacing, and the components a catalogue this size
repeats thousands of times: product card, filter group, specification table, comparison row,
review block, price and stock states.

The design system mattered more here than any individual screen. A retailer with this many
SKUs cannot be designed page by page; it has to be designed as a set of parts that hold
together across a catalogue nobody will ever review by hand.

---

## Testing

I built a prototype and ran a usability test in Maze with **nine participants**, reviewing the
results against Nielsen's ten usability heuristics. Three tasks, each aimed at one of the
research findings.

**Task 1 — Find a specific product.**
*"You need a laptop with a 15-inch display and an Intel Core i7 for graphic design work. Find
it."*
Tests whether someone who knows the job can reach the product without knowing the
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

## What the redesign changed

Technolife shipped the redesign.

| Before | Design response | Driven by |
|---|---|---|
| Long, specification-led discovery | Use-case-led filtering ahead of specification filters, and search that supports both product names and specification language | People know the job, not the spec language |
| No practical way to compare | Side-by-side comparison as a first-class flow, not a hidden feature | The struggle is choosing, not finding |
| Reviews buried below the specification table | Reviews surfaced earlier on the product page | Buyers read other buyers first |
| Buying guidance in a separate content section | Guidance placed at the decision points inside the shop | The two jobs of the site were competing |
| Page-by-page UI | A reusable component system for the catalogue | A catalogue this size cannot be designed page by page |

### Reported after launch

| | |
|---|---|
| **50%** | reduction in clicks |
| **+30%** | conversion |
| **+15%** | organic traffic |

---

## What the job taught me

**Comparison is not just a feature; it is a critical part of the decision.** In a catalogue
this size, the difficulty is less about finding products than about choosing between the few
that remain. The existing experience invested heavily in search and comparatively little in
the moment after it.

**Reviews carry more weight than specifications.** Participants consistently read what other
buyers said before they read the specification table — yet reviews sat below the fold,
treating the most persuasive content on the page as an afterthought.

**At this scale, a design system is not a luxury.** A catalogue of this size cannot be
designed screen by screen. The parts have to hold up on their own, because nobody on the team
will ever review them all.

---

## Assets needed for this page

- Before and after screenshots: search results, filter panel, product detail, comparison
- The affinity diagram, cleaned up and legible
- The persona card
- The IA diagram
- The design system sheet
- Prototype screens for the three tested tasks

These are artefacts from the Technolife job — the header should say this was commissioned
client work, not a self-directed concept.
