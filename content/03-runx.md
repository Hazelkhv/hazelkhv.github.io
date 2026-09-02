# RunX — the app that doesn't send you back to week one

**Case study · End-to-end UX / UI · Team project, 2026**

---

## Header block

| | |
|---|---|
| **Product** | RunX — responsive marketing site + iOS / Android training app |
| **Project type** | **Team project · five designers** |
| **Year** | 2026 |
| **My role** | User research · information architecture · wireframes for the Plan and Progress flows |
| **Team** | Five designers — Leyla Gharegolchian, Maryam Daryan, Hazel Khosravi, Faezeh Khazaei, Maryam Esmaeilzadeh |
| **Duration** | 6 weeks |
| **Tools** | Figma · FigJam · Google Forms · Miro |
| **Deliverables** | Research report · competitive analysis · personas and journey map · IA · task and user flows · wireframes · hi-fi prototype |

> **This was a professional team project, built in 2026.** RunX
> was not commissioned and has not shipped. It is published for the research and the
> reasoning, not for a commercial result.
>
> **Five designers worked on it over six weeks.** The work described on this page as mine
> is user research, information architecture, and the wireframes for the Plan and Progress
> flows. Everything else was shared or owned by someone else on the team.

---

## One sentence

Most people who start running stop within weeks. Running apps are built to measure runs —
not to keep a person running. RunX is designed around the one moment every competitor gets
wrong: what happens when you miss a week.

---

## The problem

Running is the cheapest way into fitness and it has the highest drop-off.

| | |
|---|---|
| **57%** | of non-runners say the barrier is motivation, not fitness *(n=23)* |
| **80%** | of respondents say beginners need a clear step-by-step plan *(n=25)* |
| **~50%** | name subscription cost as their biggest complaint |
| **3 of 6** | interviewees had abandoned an app that reset their plan |

> "It forced me to restart from week one, which made me feel behind and back to zero."
> — Mahtab, semi-professional runner, on why she deleted the app

**Problem statement.** Beginner and intermediate runners want a plan they can stick to. The
apps available optimise for tracking performance rather than sustaining motivation — they
overwhelm newcomers with data, hide personalisation behind a subscription, and penalise
anyone whose life gets in the way.

---

## How we framed it

Five How-Might-We questions opened the design space:

- How might we help a complete beginner start running without needing to know anything
  about training?
- How might we make a plan bend around a real life — missed days, bad weather, busy weeks,
  menstrual cycle — instead of breaking?
- How might we give runners a sense of belonging without competition that discourages them?
- How might we show progress in a way that motivates rather than overwhelms?
- How might we support the mental benefit of running, which is half of why people run?

Four principles came out of that framing, and every decision after this point is traceable
to one of them:

| | |
|---|---|
| **Guided, not overwhelming** | One clear action per screen. Depth is one tap away. |
| **Forgiving, not punishing** | A missed week adjusts the plan. It never resets it. |
| **Personal, not generic** | Core personalisation is free, not a premium tier. |
| **Belonging, not ranking** | Group runs and shared routes. No global leaderboard. |

---

## Research

| Method | Sample | Purpose |
|---|---|---|
| Online survey, 13 questions | 27 respondents (20–26 per question) | Quantify behaviour, goals, feature priorities |
| Semi-structured interviews, 30–40 min | 6 participants — 1 beginner, 1 professional, 4 semi-pro; Iran and Australia | Depth on motivation, friction, emotional drivers |
| Competitive analysis | 6 apps | Feature benchmark and market gap |

**Limitations, stated up front.** n=27 is directional, not statistically significant. The
sample skews 25–44 and digitally confident, under-representing runners over 55. Recruitment
was convenience sampling through personal and running-community networks, which introduces
network bias.

### What the survey said

**Why people don't run** *(n=23, multi-select)* — lack of motivation 57% · prefer other
workouts 39% · don't know where to start 22%

**Why people do run** *(n=25)* — stay fit or lose weight 72% · **mental health and stress
relief 52%** · improve speed and endurance 24%

**What beginners need** *(n=25)* — a clear step-by-step plan 80% · motivational reminders
56% · warm-up and recovery guidance 44%

**The insight:** more than half of runners run for their head, not their legs — and not one
competitor in the benchmark supports mental wellbeing in any form.

---

## The finding this product was built on

**Community scored lowest of every feature in the survey — 8%. It came up in all six
interviews.**

Taken separately, one of those is noise. Taken together they say the same thing: people do
not want to be ranked, they want company. The qualitative data explained what the
quantitative data could not.

> "A leaderboard is unhealthy for running, especially for beginners — it can make them feel
> discouraged."
> — Mahtab

**The decision:** group runs, shared routes and self-defined streaks ship in v1. No global
leaderboard ships at all.

A feature ranked last by the survey became one of the defining decisions of the product.
Following the higher number would have produced a worse app.

---

## From clusters to decisions

Affinity mapping sorted 90+ observations into six clusters. Each resolved into one insight
with one design consequence.

| # | Insight | Evidence | Design consequence |
|---|---|---|---|
| 1 | The barrier is starting and continuing, not running | 57% lack motivation · 80% want a plan | Onboarding *is* the product: goal → level → plan in under two minutes |
| 2 | Plans must forgive absence | 3 participants abandoned apps that reset progress | Missed days trigger a lighter bridge week, never a reset |
| 3 | People pay for personalisation, not more data | Cost ~50% and lack of personalisation ~45% are top complaints | Core personalisation free; premium means depth, not access |
| 4 | Two segments, one product | Beginners need scaffolding; semi-pros need analytics and sync | Simple default view, advanced stats one tap deeper |
| 5 | Community yes, competition no | Group runs valued; leaderboards described as discouraging | Group runs, shared routes, self-defined streaks |
| 6 | Running fits around life, not the reverse | Time pressure, weather, cycle, variable capacity | Weather-aware scheduling, flexible days, 20-minute plans |

Every feature later in the project traces back to one of these six numbers.

---

## The gap in the market

Six apps benchmarked in **March 2025** — Runna, Nike Run Club, Adidas Running, Strava,
Runkeeper, and Couch to 5K, which ships under several publishers at different price points.

Every competitor either coaches beginners through a fixed programme and then abandons them,
or tracks performance for people who already know how to train.

**None adapts the plan to a life that changes. None acknowledges that half of all runners
run for their mental health.** Those two columns are empty across the entire benchmark, and
they are the whole strategic argument.

**Where RunX sits:** guided and adaptive coaching, for beginners *and* the people they
become. An empty quadrant.

---

## Who it is for

**Sara Ahmadi · 28 · Marketing Coordinator · Melbourne — the beginner**

> "I want to start running, but I don't know what 'easy pace' means and I'm scared of
> looking like I don't belong."

Walks daily, has never followed a training plan, has never used a fitness app, phone only.
Wants a habit she can keep and a 5K without stopping within three months. Blocked by too
much information at once, apps that assume prior knowledge, and immediate paywalls.

Her emotional sequence is the product brief in five words:
**motivated → confused → self-conscious → guilty → gives up.**
Every RunX decision interrupts that sequence at a different point.

**Olivia Lee · 35 · Accountant · Melbourne — the intermediate**

Methodical, time-poor, runs to manage the stress of a demanding job. Wants to shave minutes
off her 5K, track long-term progress, and sync with the tools she already uses. Her
frustration trigger is a hard week at work — she needs the plan to shrink, not break.

**Two personas, two design modes.** Sara justifies progressive disclosure, plain language
and the free tier. Olivia justifies wearable sync, analytics depth and flexible scheduling.

---

## Where every competitor loses her

Journey map, Olivia, seven stages:

| Stage | Feeling | Pain | Opportunity |
|---|---|---|---|
| 1 · Trigger | Neutral | — | Mood-led entry point |
| 2 · Choosing | Sceptical | Paywall before value | Free core plan, no card required |
| 3 · Onboarding | Hopeful | Long forms, jargon | Five questions, plain language |
| 4 · First 2 weeks | Confident | Data overload | Simple default view |
| **5 · Busy week** | **Guilty — lowest point** | **Plan breaks** | **Proactive "life happens" message** |
| **6 · Return** | **Anxious** | **Reset to week 1 → churn** | **Bridge week; user-defined streak rules** |
| 7 · Long term | Satisfied | Progress buried in numbers | Weekly digest and PB highlights |

Stages 5 and 6 are where every competitor loses the user, and where RunX wins them. The
entire solution is built out of that opportunity column.

---

## Prioritisation

MoSCoW, with every feature tagged to the evidence that justifies it.

**Must have** — two-minute onboarding *(Insight 1)* · adaptive plan with bridge logic and no
reset *(Insight 2)* · GPS tracking *(48–64% demand)* · today's workout with an inline
glossary *(Shirin)* · progress dashboard *(72% motivator)* · Apple Health and Garmin sync
*(Reza, Dan)* · free core tier *(~50% cite cost)*

**Should have** — flexible scheduling · weather-aware run times *(Mahtab)* · group runs and
shared routes · self-defined streaks · warm-up and recovery guidance *(44%)*

**Could have** — post-run mood check-in *(52%)* · cycle-aware load · local coach directory ·
opt-in challenges · AI post-run feedback *(Dan)*

**Won't have — and why it matters more than the list**
- **Global leaderboards** — our own research says they discourage beginners
- **Nutrition tracking** — dilutes the core promise
- **In-app race registration** — only 8% train for races

---

## The flow that is the product

**Flow C — Missed sessions.**

Open the app after five or more days → the system detects two or more missed sessions →
*"Life happens. Let's pick this back up."* → four options: repeat last week · lighter week ·
continue as planned · rebuild my plan → plan recalculated → *"Your streak rule is two runs a
week — you're still on track"* → today's workout.

**A constraint worth stating:** no screen in this flow uses the words *failed*, *behind* or
*restart*. The copy rule is itself a design decision.

---

## Design

Six top-level areas — Home, Plan, Run, Progress, Community, Settings — mapped to the two
segments. Sara lives in Plan and Run. Olivia lives in Progress and Settings. The website has
one job: convert interest into a personalised plan and hand off to the app.

Several structural decisions came directly from participants:

| Node | Why it exists |
|---|---|
| Night mode | Interviewees run at 5 AM and in low light |
| Emergency alert / share live location | Safety, raised repeatedly |
| Weather | Mahtab — the right conditions are what keep her consistent |
| Audio guide + glossary | Shirin — training jargon is a barrier, not a detail |
| Units of measure | Mixed Iran / Australia sample; km and miles both required |
| Shoes | Mileage per pair — requested by the two highest-mileage participants |

**Visual direction.** Lime over red. Sports brands default to red and orange — the colours
of intensity and warning. RunX uses a bright lime: energetic but encouraging, closer to
growth than to alarm, and visually separate from Strava's orange and Nike's black-red. Teal
carries the data — a calm counterweight for charts and Olivia's half of the product.
Photography casts ordinary runners, not athletes mid-sprint, because Sara said she was
scared of looking like she didn't belong. Casting is a design decision.

**Accessibility.** Lime on white fails WCAG AA for text, so lime is used as a fill with Ink
on top and never as a text colour on a light surface. 44×44pt minimum targets — people tap
start and pause while moving, cold, in the dark. Primary run controls sit in the lower third
for one-handed reach. Dynamic type to 200%. VoiceOver labels on every metric tile.

---

## How we would know it worked

Proposed targets for a concept product — not results.

| Goal | Metric | Target |
|---|---|---|
| Activation | Complete onboarding and generate a plan | ≥ 70% |
| First value | First tracked run within seven days | ≥ 50% |
| Adherence | Planned sessions completed per week | ≥ 60% |
| **Recovery — the core hypothesis** | **Return after 7+ inactive days and complete another run** | **≥ 40%** |
| Retention | Week-4 retention | ≥ 30% |
| Satisfaction | System Usability Scale | ≥ 75 |

Recovery rate is the metric the whole product is built to move. If the bridge week works,
that number goes up and the others follow it.

---

## Where the project ended, and what comes next

Six weeks took RunX from a blank page to a tested-ready prototype. It ended at the
prototype deliberately — the scope was research through to interactive design, not launch.

**The next phase, already specified:**

| Step | Method | What it would settle |
|---|---|---|
| 1 | Open card sort, 8–10 participants | Whether the six top-level areas match how runners group these concepts — particularly Streak, Badges and Achievements, which could sit under Progress or Community |
| 2 | Moderated usability testing, 5–6 participants | Six tasks, including *"you missed four runs last week, get your plan back on track"* — the flow the whole product is built on |
| 3 | Second round after iteration | Movement between rounds, which is worth more than either reading alone |
| 4 | Four-week diary study, 10 beginners | Whether the bridge week actually changes real adherence, which no prototype test can answer |

The card sort and the usability protocol are written and ready to run. Step 4 is the one
that matters most and the one a six-week concept project cannot reach — adherence is a
behaviour over time, and you cannot prototype your way to it.

## What I learned

**Two data points that contradict each other are usually the most valuable finding in the
set.** Community scored 8% in the survey and appeared in every single interview. Resolving
that tension — belonging, not ranking — shaped more of this product than any high-scoring
feature did.

**What I would do differently.** Build testing into the middle of the timeline rather than
leaving validation to the end — six weeks is enough for one round if it is planned in from
week one. Recruit a wider age range: the sample under-represents runners over 45, a large
share of the recreational market. Ask about willingness to pay with concrete price points
instead of a yes/no question. And test the plan-generation logic against real training data
with a coach, not only the interface with users.

---

## Assets needed for this page

- The cover image
- Affinity board, full-bleed, with the six cluster headers legible
- The 2×2 positioning map with the empty quadrant genuinely empty
- Journey map with the emotion curve dipping at stage 5
- Flow C diagram with screen thumbnails under each node
- Six to eight hi-fi screens in flow order, each captioned with the insight that drove it
- Two short GIFs: onboarding, and the missed-week recovery
- **Redraw every chart in the RunX palette. No Google Forms screenshots.**
