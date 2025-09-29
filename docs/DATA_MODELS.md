## Data Models and NoSQL Schema (MongoDB)

Guiding principles: privacy by design, auditability, and scalability. Collections are denormalized where it improves read performance, with references for cross-boundary relations.

### Collections

#### users
- _id (ObjectId)
- authId (string, OIDC subject)
- role (enum: student, professional, reviewer, moderator, admin)
- email (string, verified=false by default)
- displayName (string)
- createdAt, updatedAt (ISO)
- status (enum: active, suspended, deleted)
- flags: { isKycVerified: bool, isBackgroundVerified: bool }
- profileRef (ObjectId -> profiles._id)

Indexes:
- unique: authId, email
- compound: role + status

#### profiles
- _id (ObjectId)
- userId (ObjectId -> users._id)
- headline (string)
- bio (string)
- avatarUrl (string)
- skills ([string])
- domains ([string])
- experienceYears (number)
- portfolio ([{ title, url, summary }])
- rating: { average: number, count: number }
- verification: { kycLevel: string, verifiedAt: ISO }
- searchableText (string; concat for search index)

Indexes:
- text: searchableText
- userId
- domains, skills (multikey)

#### projects
- _id (ObjectId)
- studentId (ObjectId -> users._id)
- title, description
- domain (string)
- budget: { currency: string, min: number, max: number }
- milestones ([{ id, title, amount, status }])
- status (enum: draft, requested, quoted, assigned, in_review, delivered, completed, disputed, cancelled)
- assignedProfessionalId (ObjectId -> users._id, nullable)
- createdAt, updatedAt
- escrow: { status: enum(pending,funded,released,refunded), amount, txRefs: [string] }

Indexes:
- studentId
- status
- domain

#### engagements
- _id (ObjectId)
- projectId (ObjectId -> projects._id)
- professionalId (ObjectId -> users._id)
- reviewerId (ObjectId -> users._id, nullable)
- timeline: { startedAt, dueAt, submittedAt, approvedAt }
- quote: { amount, currency, notes }
- state (enum: assigned, in_progress, submitted, under_review, changes_requested, approved, reassigned)

Indexes:
- projectId, professionalId
- state

#### submissions
- _id (ObjectId)
- engagementId (ObjectId -> engagements._id)
- version (number)
- artifacts ([{ key: string, size: number, contentType: string, checksum: string, watermark: bool }])
- notes (string)
- automatedChecks: { plagiarismScore: number, staticAnalysis: { passed: bool, reportKey: string }, malwareScan: { passed: bool, engine: string } }
- review: { status: enum(pending,approved,rejected,changes_requested), reviewerId, comments, decidedAt }
- createdAt

Indexes:
- engagementId, version

#### chats
- _id (ObjectId)
- engagementId (ObjectId)
- participants ([ObjectId -> users._id])
- createdAt

Indexes:
- engagementId

#### messages
- _id (ObjectId)
- chatId (ObjectId -> chats._id)
- senderId (ObjectId -> users._id)
- content (string, stored after PII-redaction)
- attachments ([{ key, size, contentType }])
- moderation: { flags: [string], blocked: bool, reasons: [string] }
- createdAt

Indexes:
- chatId, createdAt

#### reviews
- _id (ObjectId)
- submissionId (ObjectId -> submissions._id)
- reviewerId (ObjectId -> users._id)
- checks: { plagiarism: number, codeQuality: number, security: number }
- comments (string)
- verdict (enum: approved, rejected, changes_requested)
- createdAt

Indexes:
- submissionId, reviewerId

#### payments
- _id (ObjectId)
- projectId (ObjectId)
- milestoneId (string)
- studentId (ObjectId)
- professionalId (ObjectId)
- amount, currency
- status (enum: initiated, escrowed, released, refunded, failed)
- provider: { name: string, intentId: string, txId: string }
- createdAt, updatedAt

Indexes:
- projectId, professionalId, status

#### grievances
- _id (ObjectId)
- projectId, engagementId
- raisedById (ObjectId)
- type (enum: quality, delay, conduct, policy_violation, other)
- description
- state (enum: open, investigating, resolved, reassigned, refunded)
- actions ([{ at, actorId, action, notes }])
- createdAt, updatedAt

Indexes:
- state, projectId

#### audits (append-only)
- _id (ObjectId)
- eventType (string)
- actorId (ObjectId)
- resource: { type: string, id: string }
- data (object)
- createdAt

TTL/Storage:
- Long-term offload to object storage; Mongo holds recent window per retention

### Reference Data
- domains, skills catalogs
- policy/terms versions

### Notes
- Personally identifiable information (PII) limited to verification flows and stored encrypted.
- Messages are filtered; original text is not retained if blocked.

