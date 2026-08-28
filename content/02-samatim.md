# Samatim — putting a paper supply chain on a phone

**Case study · End-to-end UX / UI · B2B platform**

---

## Header block

| | |
|---|---|
| **Product** | Samatim — poultry supply-chain platform, Iran |
| **Project type** | **Product design — shipped** |
| **Role** | Product designer, end to end — research, IA, user flows, wireframes, UI kit, usability testing |
| **Live** | Google Play — `com.samatim` |
| **Deliverables** | Research · affinity maps · persona · user flows · IA · lo-fi and hi-fi wireframes · UI kit · usability test report |

---

## One sentence

Iran's chicken supply chain ran on phone calls, paper and trust. Samatim is the platform
that made every transaction between farm, intermediary and slaughterhouse visible — designed
for users who had never wanted software in the first place.

---

## The problem

Chicken moves through a long chain: poultry farms, intermediaries, slaughterhouses,
distributors, retailers. Almost none of that movement was recorded.

The consequences compounded. Nobody could see real supply or demand by province, so
policy was set on estimates. Price swings could not be traced to a cause. Unrecorded
intermediary transactions left room for hoarding and smuggling. And the paperwork that did
exist was slow enough that by the time it was filed, it described a market that had already
moved.

**The hard part was not the system. It was the users.**

The people who had to adopt it were poultry farmers with entrenched, working practices,
some with limited internet access and limited appetite for software. Every previous attempt
had failed on exactly this. A platform that was correct but unusable would fail the same
way.

**Business goal:** bring order to production and distribution through one integrated
information system.

**Design goal:** make it faster to record a transaction in the app than to not record it.

---

## Who it is for

Three groups, with genuinely different needs:

| Group | What they need from it |
|---|---|
| **Poultry farmers** | Register stock and declare cargo in the fewest possible steps, on a phone, sometimes on a weak connection |
| **Slaughterhouses** | Log incoming loads accurately, know what is arriving and when |
| **Managers and policymakers** | See supply and demand by province, in something they can act on and export |

---

## Research

### Interviews

I could not design a supply chain I did not understand, so I interviewed people working
inside it — farm operators, intermediaries and union managers — and structured the questions
around how the trade actually runs day to day:

- How do you manage a transaction from farm to slaughterhouse today?
- How do you find and verify a poultry farmer?
- What is being done to control price rises?
- With this transaction volume, how is income and production cost recorded?
- How do managers know real supply and demand in each province?

**What came back:** the process was not undocumented because people wanted opacity. It was
undocumented because recording it was slower than doing the work. Every extra field was a
reason to go back to the phone call.

---

## Synthesis

Affinity mapping across the interviews produced a persona built on the group with the most
leverage: the union manager who has to get everyone else to comply.

**Hossein · 35 · Slaughterhouse Union Manager · Amol**

He wants visibility across the chain from hatching to retail, specifically to prevent
hoarding and smuggling.

**His obstacles**
- Farmers and intermediaries do not want to change a method that works for them
- Nobody wants to disclose real production volume
- No supply-chain management exists to build on
- Policy differs province to province

**What he needs the system to do**
- Require every seller to declare inventory
- Register intermediaries and keep them accountable
- Let each seller file a cargo declaration
- Handle inter-province shipping during surplus
- Issue permits to farmers inside the system
- Let slaughterhouses log live-chicken collection
- Calculate meat supply per province accurately

An empathy map extended this into what he says, thinks, does and feels — which is where the
resistance problem became a design problem rather than a policy one.

---

## Design

**User flows.** I mapped the routes before any screen existed, including the conditional
paths — for example, a declaration from a cooperative-group farmer in Mazandaran under
standard allocation follows a different branch from a private seller. Getting these
conditions into the flow early is what kept the forms short later.

**Information architecture.** Structured around the three user groups rather than around the
database, so each group meets only the parts of the system that concern them.

**Lo-fi wireframes** to move quickly through layout options, then **hi-fi wireframes** once
the structure held.

**UI kit and components.** Built as a system: forms, tables, declaration cards, status
states, report views. In a product this form-heavy, the components *are* the product.

---

## Testing — round one

I put the prototype through a moderated review against Nielsen's heuristics, and ran an
unmoderated test in **Maze with 7 participants** drawn from the target groups.

**Tasks**
1. Register as a new user on first launch
2. Complete a cargo declaration as a seller
3. Register a new announcement
4. Log loads received at the slaughterhouse

### The numbers

| | |
|---|---|
| Testers | 7 |
| Average task success | **42.9%** |
| Misclick rate | **29.5%** |
| Average duration | 5.4s |

**These are not good numbers, and I am publishing them on purpose.**

Under half of participants completed the registration path as designed, and nearly a third
of clicks landed somewhere I had not planned. In a product whose entire premise is that
recording a transaction must be easier than not recording it, that is a failure of the
premise, not a rough edge.

Time on screen was fine — 4.8s average. People were not confused about *what* a screen was.
They were confused about *where to go next*. That distinction told me the problem was
navigation and affordance, not content or density.

### What participants told me they needed

1. Reports shown graphically, not as tables
2. Notifications surfaced on the home screen at login
3. Daily, weekly and monthly reporting periods
4. Reports exportable to Excel or PDF
5. Exact details of the vehicle carrying cargo from farm to slaughterhouse

Item 5 is the one I would not have predicted. Vehicle identity is how they establish trust
in a shipment — and it was missing entirely from my model of the transaction.

### What round one told me to change

Each finding carried a design implication. This is what the round said the product needed:

| What the test found | What it meant for the design |
|---|---|
| Off-path clicks far outweighed slow screens | The problem was wayfinding, not density. Fix navigation and affordance before touching content |
| Reports wanted as charts, not tables | Reporting screens lead with a chart; the table becomes the detail view, not the default |
| Notifications wanted at login | The home screen becomes a status surface, not a menu |
| Daily, weekly and monthly periods wanted | Reporting needs a period selector, not one fixed view |
| Excel and PDF export wanted | These users hand numbers to people outside the system. Export is core, not a settings item |
| Vehicle details missing from the cargo flow | The transaction model was incomplete — trust in a shipment runs through the vehicle |

**Round one is what this case study documents.** The numbers above are the first reading on
the first prototype, published as they came back.

## Outcome

Samatim shipped and is live on Google Play for the poultry industry. Sellers register
products and list them for trade; the platform operates B2B across the supply chain.

The install count is public on the Play Store listing.

---

## What I would tell the next B2B client

**Test the premise, not the interface.** My prototype looked right and failed anyway. The
42.9% did not tell me a button was in the wrong place — it told me my assumption about how
easily these users move through a form was wrong. That is worth finding at prototype stage
and expensive to find after launch.

**In products people did not ask for, every field is a reason to quit.** Users here were not
choosing between my product and a competitor. They were choosing between my product and the
phone call they already trusted. That is a much harder competitor.

**Ask what makes them trust a transaction.** Nobody mentioned vehicle details until they saw
a prototype without them. The things users will not think to tell you are the things they
have stopped noticing they rely on.

---

## Assets needed for this page

- Screens: registration, cargo declaration, announcement, slaughterhouse intake, reports
- The user flow diagram, including the conditional branches
- The IA diagram
- The UI kit sheet
- The four headline test numbers — **redrawn in your own styling, not a screenshot of Maze's interface**

**Publication rule for this page.** Samatim is publicly distributed on Google Play, so
screens from the shipped app are already public and safe to show. Internal artefacts are
not: keep the user flows, IA and UI kit generic, and remove any real trade volumes, prices,
province figures or company names that appear in a mockup. If a diagram cannot be
de-identified, leave it out — the page does not need it.

---

## Note on framing

This is the strongest page in the portfolio, for one reason: it is a **shipped product** in a
domain nobody would choose for its glamour, designed for users who did not want software.
Anyone can make a beautiful concept. Getting a poultry supply chain onto a phone and into
production is a different claim, and it is one only you can make.
