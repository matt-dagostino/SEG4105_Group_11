# Development Methodology

## 1. Software Development Lifecycle (SDLC)
- **Framework:** 12-week phased iterative delivery across Phase 1 (Architecture & Deliverables), Phase 2 (Core Agent & Pipeline Development), Phase 3 (System Integration & Admin Dashboard), and Phase 4 (Testing, Evaluation & Final Delivery).
- **Planning & Tracking:** Work items are tracked via GitHub Issues and aligned with Phase 1–4 deliverables and RACI ownership across Group 11.

## 2. Version Control & Branching Strategy
- **Workflow:** GitHub Flow with feature/documentation branches merged into `main` via Pull Requests.
- `main`: Holds integrated project files, documentation, and production-ready code.
- `feature/*` | `fix/*` | `docs/*`: Short-lived branches created from `main` for isolated changes.
- **Commit Convention:** Concise descriptive messages prefixed by scope/type (e.g., `Initial commit: ...`, `Docs: ...`).

## 3. Code Review & Definition of Done (DoD)
1. Changes build and run locally without errors or regressions.
2. Key workflows and targets (intent accuracy > 92%, response latency < 3.0s, routing < 30s, and zero-hallucination escalation behavior) are verified.
3. Relevant documentation (`README.md` and `docs/`) is updated and linked.
4. Changes are submitted via a Pull Request, reviewed on GitHub, and merged into `main`.

## 4. Testing & Quality Assurance Strategy
- **Unit Testing:** Validate intent classification logic, PII sanitization, routing rule evaluation, and API payload/webhook handlers.
- **Integration / System Testing:** Test end-to-end inquiry triage, RAG retrieval grounding, lead qualification flows, mock CRM/helpdesk webhook integrations, latency (< 3.0s), hallucination/escalation rates, and Docker container execution.