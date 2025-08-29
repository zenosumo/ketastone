# Business and Marketing

### Target user

- Diet Struggler: difficulty following plans.
- Bored Eater: needs variety and seasonal, regional menus.
- Fitness/Sport Tracker: monitors training and body composition.

### Scope

- Onboarding assessment: goals, health flags, allergies, cultural/seasonal prefs, budget, cooking time, equipment, activity level.
- Diet style selection and macro targets per user and season.
- Conversational coaching with persistent memories and refusal rules.
- Italy-friendly defaults: metric units; timezone Europe/Rome.

### Outcomes

- Sustainable fat loss or recomp.
- Improved adherence and dietary quality.
- Strength/fitness progress with fewer stalls.
- Reduced boredom via culturally familiar, seasonal meals.
- Success metrics
- Weekly KPIs: weight Δ, body-fat %, adherence %, kcal planned vs actual, training volume, strength PRs.
- Trend methods: 7-day moving averages; stall detection window (e.g., 14 days) and relapse flags.
- Adherence threshold trigger (e.g., <70%) proposes plan tweaks.

### Coaching model and constraints

- Cadence: user-selectable daily nudges, weekly reviews, or hybrid; quiet hours respected.
- Constraints: health-safe menus, allergies honored, budget/time aware, seasonal/region ingredients target (e.g., ≥80% seasonal).
- Supported diet modes at launch: keto, Mediterranean, sport-specific; switchable without data loss.

### Data and integrations

- Inputs v1: manual logs for weight, body-fat, calories, training, adherence; chat-captured facts → structured memories.
- Dashboard: progress charts, editable memories, exports (JSON/CSV).
- Roadmap: bioimpedance scales, food diary, wearables, CSV import, device APIs, richer analytics.

### Differentiators

- Continuous monitoring and memory-driven personalization.
- Seasonal and regional menu generation to fight boredom.
- Automatic stall detection and relapse-recovery prompts.
- Transparent refusal policy with rationale stored in memories.

### Safety

- Guardrails: no medical diagnoses; condition-aware exclusions; safe alternatives on refusal.
- Privacy: GDPR alignment, consent and data-export/delete flows, encrypted storage and transport.
- Auditability: versioned constraints, change logs, and refusal justifications.

### Acceptance criteria

- Personas and Initial Assessment
- Diet/fitness Selection and Macro Engine
- Coaching Cadence
- Memory System
- Progress Tracking
- Seasonal and Cultural Menus
- Interface and Behavior: Char, KPI dashboards, calendar, notifications
- Notifications
- Data integrations: Diary, Bioimpedance Scale, wearables
