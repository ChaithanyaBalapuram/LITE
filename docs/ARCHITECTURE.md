## LITE Platform Architecture Overview

### Mission
Connect background-verified unemployed IT professionals with students seeking mentorship and project guidance, with end-to-end in‑app communication, rigorous review, and compliance-first operations.

### Core Principles
- Security and privacy by design (no direct contact, monitored comms)
- Quality assurance via internal review and plagiarism checks
- Transparent workflows, auditable events
- Scalability for large user base and media-heavy projects

### High-Level Architecture
- Frontend: React (SPA) with TypeScript, React Router, Zustand/Redux, Tailwind/Chakra UI
- Backend: Java (Spring Boot) microservices with REST APIs; Gradle/Maven
- Data: NoSQL (MongoDB) for operational data; Redis for caching/sessions/rate limits
- Search/Indexing: OpenSearch/Elasticsearch for profiles/projects search
- Messaging/Events: Kafka (async workflows, audit streams)
- File/Object Storage: S3-compatible (AWS S3, MinIO) for artifacts, documents, media
- AuthN/AuthZ: Keycloak or Spring Authorization Server (OIDC), JWT access tokens
- Moderation & Scanning: ClamAV/Cloud AV, NLP classifiers for PII/toxicity, DLP rules
- Observability: Prometheus + Grafana, ELK/OpenSearch, OpenTelemetry tracing
- CI/CD: GitHub Actions/Azure DevOps; Docker + Kubernetes (or ECS) deployments

### Primary Roles
- Student: browses experts, requests mentorship/projects, receives reviewed deliverables
- Professional: applies, completes background verification, delivers work to review
- Reviewer: validates deliverables, checks plagiarism/compliance, approves/rejects
- Moderator: monitors chats, flags violations, resolves incidents
- Admin/Operations: manages assignments, escalations, payouts, disputes

### Services (initial cut)
1. API Gateway / Edge
   - SSL termination, auth, routing, rate limiting, WAF rules
2. Identity & Access Service
   - OIDC provider integration, roles (student, professional, reviewer, moderator, admin)
3. User & Profile Service
   - Profiles, skills, domains, verification state, KYC/Background verification linkage
4. Project & Engagement Service
   - Project requests, scoping, milestones, assignments, status machine
5. Review & QA Service
   - Submission intake, plagiarism scan, code checks, approval workflow
6. Messaging/Chat Service
   - In‑app chat with PII/keyword filters, attachment controls, audit logs
7. Payment & Billing Service
   - Escrow, milestone payouts, refunds, fees, invoicing, CA/reporting exports
8. Compliance & Audit Service
   - System-wide event ledger, retention, legal hold, SAR/DSAR support
9. Notification Service
   - Email/SMS/push via providers with templates and throttling
10. Media/Artifact Service
   - Signed URLs, AV/DLP scans, versioning, watermarking for demos

### Data Stores
- MongoDB clusters (profiles, projects, chats metadata, reviews, payments)
- Redis (sessions, rate limits, OTPs, feature flags, job locks)
- S3 buckets (artifacts, KYC docs, evidence, reviewed deliverables)
- OpenSearch (searchable professional directory and project listings)
- Kafka topics (audit_events, moderation_flags, review_jobs, payout_events)

### Key Flows
1. Onboarding (Professional)
   - Sign up → KYC/Background Verification → Skill tagging → Approval → Listed in directory
2. Student Engagement
   - Search experts → Create request → Quote & scope in app → Escrow → Assignment
3. Delivery & Review
   - Professional submits to Review Service → automated checks → reviewer decision → student receives approved deliverable (no direct contact)
4. Messaging
   - All chat passes through filters (PII, prohibited content); events archived to audit
5. Disputes/Grievances
   - Ticket raised → investigation workflow → possible reassignment/refund → audit trail
6. Payouts
   - On milestone approval, release funds from escrow to professional per policy

### Security & Compliance Highlights
- No direct exchange of contacts; server-side redaction in chat and uploads
- Role-based access control and scoped resource authorization
- DLP and malware scanning on all uploads; demo artifacts watermarked
- Immutable audit streams (Kafka → Object storage) with retention policies
- Least-privilege service accounts and secret management (Vault/KMS)

### Scaling Strategy
- Stateless microservices with HPA on CPU/RPS/lag
- Async pipelines for heavy checks (plagiarism, static analysis)
- CDN for static assets; signed URLs for downloads

### Tech Choices (proposed)
- React 18, TypeScript, Vite
- Spring Boot 3, Java 21, Spring Data MongoDB, Spring Security, WebFlux (where needed)
- MongoDB Atlas; Redis (Elasticache/Redis Cloud)
- Kafka (Confluent/Azure Event Hubs for Kafka)
- OpenSearch; S3 (AWS/MinIO)

### Environments
- dev → staging → prod; separate keys/buckets; seeded demo data in dev only

### Next Steps
- Finalize entity boundaries and APIs
- Define data retention and redaction policies
- Create MVP backlog and implementation plan

