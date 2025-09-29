## REST API Contracts (Draft)

Base URL: `/api/v1`
Auth: OAuth2/OIDC (Bearer JWT). All endpoints require auth unless noted.

### Auth & Users
- GET `/me` → current user profile
- PATCH `/me` body: { displayName, avatarUrl, bio }

### Professionals Directory
- GET `/professionals` query: `domain, skills[], sort, page, size`
- GET `/professionals/{id}`

### Projects
- POST `/projects` body: { title, description, domain, budget }
- GET `/projects/{id}`
- GET `/projects?status=&domain=&page=&size=`
- POST `/projects/{id}/quote` body: { amount, notes } role: professional
- POST `/projects/{id}/assign` body: { professionalId } role: admin/ops
- POST `/projects/{id}/milestones` body: { title, amount }
- PATCH `/projects/{id}/milestones/{mid}` body: { title?, amount?, status? }

### Engagements
- GET `/engagements/{id}`
- POST `/engagements/{id}/submit` multipart: artifacts[], notes
- POST `/engagements/{id}/request-changes` body: { comments } role: reviewer
- POST `/engagements/{id}/approve` role: reviewer

### Submissions & Reviews
- GET `/submissions/{id}`
- GET `/engagements/{id}/submissions` query: `page,size`
- POST `/submissions/{id}/review` body: { verdict, comments, checks } role: reviewer

### Chat (In‑App Only)
- POST `/chats` body: { engagementId }
- GET `/chats/{id}`
- GET `/chats?engagementId=`
- POST `/chats/{id}/messages` body: { content, attachments? }
- GET `/chats/{id}/messages` query: `since, page, size`

Server filters PII; messages with violations are blocked and logged.

### Payments
- POST `/projects/{id}/escrow` body: { amount, provider }
- POST `/projects/{id}/milestones/{mid}/release`
- POST `/projects/{id}/refund` body: { reason }
- GET `/payments?projectId=&status=`

### Grievances
- POST `/grievances` body: { projectId, engagementId, type, description }
- GET `/grievances/{id}`
- PATCH `/grievances/{id}` body: { state, action }

### Admin/Moderation
- GET `/moderation/flags` query: `state, page, size`
- POST `/moderation/messages/{id}/block`
- POST `/moderation/users/{id}/suspend` body: { reason }
- POST `/moderation/users/{id}/reinstate`

### Webhooks (from providers)
- POST `/webhooks/payments/{provider}`
- POST `/webhooks/storage` (scan results)
- POST `/webhooks/plagiarism`

### Error Model
```json
{
  "timestamp": "2025-09-26T10:00:00Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/api/v1/projects"
}
```

### Rate Limits
- Authenticated: 120 req/min per user
- Sensitive endpoints (messages, submissions): stricter dynamic limits

### Idempotency
- Write endpoints accept `Idempotency-Key` header

