# Software Components

## 1. Component Inventory
| Component/Module | Directory / File Path | Primary Responsibility | Key Dependencies |
| --- | --- | --- | --- |
| Intent Classification Engine | `/src/agents/triage` | Classifies incoming inquiries into customer support tickets or sales lead inquiries and routes flows | LLM Provider API (OpenAI / Anthropic) |
| RAG Knowledge Agent | `/src/agents/rag` | Retrieves relevant FAQ/documentation context and generates grounded answers | Vector Database (Pinecone / pgvector), FAQ Knowledge Base, LLM Provider API |
| Lead Qualification Agent | `/src/agents/qualification` | Conducts conversational qualification to capture budget, urgency, company size, and contact details | LLM Provider API, CRM / Helpdesk APIs |
| Routing & Ticket Tracker | `/src/routing` | Applies routing rules, tracks ticket/lead outcomes, and manages escalations | Ticket Log, Routing Rules store, CRM / Helpdesk APIs |
| CRM & Helpdesk Connectors | `/src/integrations` | Synchronizes tickets, lead records, customer history, and webhooks with external platforms | Zendesk/Jira REST APIs, Salesforce/HubSpot REST APIs |
| Admin & Escalation Dashboard | `/src/dashboard` | Provides live chat monitoring, classification review, manual overrides, and reporting | Backend APIs, Ticket Log, FAQ Knowledge Base, Routing Rules |

## 2. External Interfaces & APIs
- **Input Interfaces:** Customer inquiries and support tickets, admin FAQ/routing rule updates, CRM/helpdesk webhooks and customer history queries.
- **Output Interfaces:** Customer replies and status updates, qualified leads and escalated tickets, CRM/helpdesk ticket/lead record updates, and admin performance reports.
