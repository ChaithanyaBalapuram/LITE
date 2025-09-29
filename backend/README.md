# LITE Platform Backend

Backend API for the LITE (Lovely Indian Technology Empowerment) platform - connecting unemployed IT professionals with students seeking project guidance.

## Features

- **User Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: Student and professional profiles with verification
- **Project Management**: Create, assign, and track projects with milestones
- **Secure Messaging**: Monitored chat system with content filtering
- **File Upload**: Secure file handling with type validation
- **Real-time Communication**: Socket.io for live messaging
- **Security**: Rate limiting, input validation, and data sanitization

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Real-time**: Socket.io
- **Security**: Helmet, CORS, Rate Limiting

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/professionals` - Get professionals directory
- `GET /api/users/professionals/:id` - Get professional by ID
- `POST /api/users/avatar` - Upload avatar
- `PUT /api/users/password` - Change password

### Projects
- `POST /api/projects` - Create new project
- `GET /api/projects/my-projects` - Get user's projects
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `GET /api/projects/available/list` - Get available projects
- `POST /api/projects/:id/apply` - Apply for project

### Messages
- `GET /api/messages/chats` - Get user's chats
- `GET /api/messages/chats/:chatId` - Get chat by ID
- `GET /api/messages/chats/:chatId/messages` - Get chat messages
- `POST /api/messages/chats/:chatId/messages` - Send message
- `PUT /api/messages/chats/:chatId/read` - Mark messages as read
- `POST /api/messages/chats` - Create new chat

### File Upload
- `POST /api/upload/single` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files
- `POST /api/upload/avatar` - Upload avatar
- `GET /api/upload/:filename` - Serve uploaded file
- `DELETE /api/upload/:filename` - Delete file

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp config.env.example config.env
   # Edit config.env with your values
   ```

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on your system
   mongod
   ```

5. **Run the application**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/lite_platform

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_PATH=./uploads

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS
FRONTEND_URL=http://localhost:5173
```

## Database Models

### User
- Authentication and profile information
- Role-based access (student, professional, admin, etc.)
- Verification status and documents
- Skills and experience for professionals

### Project
- Project details and requirements
- Budget and timeline information
- Milestone tracking
- Status management

### Chat
- Project-based conversations
- Participant management
- Unread message tracking

### Message
- Secure messaging with moderation
- File attachments
- Content filtering and blocking

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access Control**: Different permissions for different user types
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Sanitize and validate all inputs
- **File Type Validation**: Only allow safe file types
- **Content Moderation**: Monitor and filter messages
- **CORS Protection**: Configured for specific origins

## Real-time Features

- **Live Messaging**: Socket.io for instant communication
- **Room Management**: Project-based chat rooms
- **Message Broadcasting**: Real-time message delivery
- **Connection Management**: Handle user connections and disconnections

## Development

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

## API Documentation

The API follows RESTful conventions with JSON responses. All endpoints return:

```json
{
  "success": true/false,
  "message": "Description of the result",
  "data": {
    // Response data
  }
}
```

## Error Handling

All errors are handled consistently with appropriate HTTP status codes:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.
