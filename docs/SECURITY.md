## Security, Compliance, and Moderation Policies

### Contact Exchange Policy
- Prohibited to share phone numbers, emails, social handles.
- Server-side redaction in chat; violations blocked and audited.

### Authentication & Authorization
- OIDC with short-lived access tokens, refresh tokens with rotation and reuse detection.
- RBAC roles: student, professional, reviewer, moderator, admin.
- Resource-scoped authorization checks in each service.

### Data Protection
- Encrypt at rest (DB and S3) via managed KMS.
- Encrypt in transit (TLS 1.2+). HSTS at edge.
- Secrets managed via Vault/KMS; no secrets in code.
- PII minimization; field-level encryption for KYC docs.

### Content Safety & DLP
- All uploads scanned for malware (ClamAV/Cloud AV) and file type allowlist.
- DLP rules: detect PII patterns; redact or block content.
- Demo deliverables watermarked and access via time-limited signed URLs.

### Moderation
- Automated NLP classifiers for toxicity/harassment + keyword rules.
- Human-in-the-loop moderators for escalations and appeals.
- Three-strike policy → suspension → ban. Appeals supported.

### Audit & Logging
- Immutable audit events to Kafka → object storage with retention policies.
- Access logs, admin actions, moderation decisions all recorded.
- Time-synced servers; logs include request IDs and user IDs.

### Incident Response
- 24/7 on-call rotation. Defined severity levels and playbooks.
- Breach notification within legal timeframes (jurisdiction dependent).
- Forensics-ready logging and evidence preservation.

### Privacy & Compliance
- Align with GDPR/DPDP where applicable. Lawful basis: contract & legitimate interests.
- Data subject rights: access, rectification, deletion, export (subject to fraud checks).
- Data retention: messages and audits retained per policy; minimization for dev/staging.

### Payments & Financial Controls
- Escrow with PCI-compliant providers; LITE does not store card data.
- Payout KYC checks; AML watchlist screening where required.
- Separation of duties for refunds and large payouts; dual approval.

### Secure SDLC
- Mandatory code review, SAST, DAST, dependency scanning.
- Pre-commit hooks and CI checks; SBOM published per release.
- Secrets scanning on repos; blocked on failures.

### Infrastructure Security
- WAF, rate limiting, bot protection at edge.
- Network segmentation; private subnets for data stores.
- IAM least privilege; periodic key rotation.
- Backups encrypted and tested restores.

### Business Continuity
- Multi-AZ deployments; RPO/RTO targets documented.
- DR runbooks and game days.

### Acceptable Use & Enforcement
- Zero tolerance for plagiarism and direct contact attempts.
- Violations lead to suspension/ban; projects reassigned; funds handled per policy.

