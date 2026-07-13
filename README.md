# LITE - Lovely Indian Technology Empowerment

A platform that connects students and professionals to gain experience and get expert guidance on projects while building meaningful professional relationships.

## 🎯 Project Overview

LITE is a comprehensive web application designed to bridge the gap between:
- **Students** seeking project guidance and mentorship
- **Professionals** looking to share expertise and gain experience
- **Projects** that require collaboration and knowledge transfer

## 🏗️ Project Structure

```
LITE/
├── frontend/                  # Frontend application
│   └── (React/TypeScript)
├── backend/                   # Backend API server
│   └── (Node.js/Express)
└── README.md
```

## 💻 Technology Stack

### Language Composition
- **TypeScript**: 73.1% - Core type-safe development
- **JavaScript**: 25.8% - Additional scripting
- **Other**: 1.1% - Configuration and utilities

### Frontend
- Modern React application with TypeScript
- Responsive UI/UX design
- Real-time communication capabilities

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io for live messaging
- **File Upload**: Multer for secure file handling
- **Security**: Helmet, CORS, Rate Limiting

## ✨ Key Features

### User Management
- **JWT-based Authentication** - Secure token-based user authentication
- **Role-based Access Control** - Different permissions for students, professionals, and admins
- **User Profiles** - Comprehensive profiles with verification
- **Skills & Experience** - Professional profiles showcase expertise

### Project Management
- Create and manage projects with detailed requirements
- Project assignment and tracking
- Milestone-based progress tracking
- Budget and timeline management
- Status management and updates

### Collaboration & Communication
- **Real-time Messaging** - Socket.io powered live chat
- **Project-based Chat Rooms** - Organized conversations by project
- **Secure Messaging** - Content filtering and moderation
- **File Attachments** - Share project files and documents

### Security & Reliability
- **Input Validation** - Sanitize and validate all inputs
- **Rate Limiting** - Prevent API abuse
- **File Type Validation** - Only allow safe file types
- **Content Moderation** - Monitor and filter messages
- **CORS Protection** - Configured for specific origins
- **Data Sanitization** - Protect against injection attacks

## 🚀 Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
cp config.env.example config.env
# Edit config.env with your configuration values
npm run dev
```

## 📡 API Endpoints

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

### Messaging
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

## ⚙️ Environment Configuration

Create a `config.env` file in the backend directory:

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

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChaithanyaBalapuram/LITE.git
   cd LITE
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Configure environment variables**
   ```bash
   cd backend
   cp config.env.example config.env
   # Edit config.env with your settings
   ```

5. **Start MongoDB**
   ```bash
   mongod
   ```

6. **Run the application**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```
   
   Frontend (in a new terminal):
   ```bash
   cd frontend
   npm run dev
   ```

## 🗄️ Database Schema

### User Model
- Authentication and profile information
- Role-based access (student, professional, admin)
- Verification status and documents
- Skills and experience for professionals

### Project Model
- Project details and requirements
- Budget and timeline information
- Milestone tracking
- Status management

### Chat Model
- Project-based conversations
- Participant management
- Unread message tracking

### Message Model
- Secure messaging with moderation
- File attachments
- Content filtering and blocking

## 📝 API Response Format

All endpoints follow a consistent response format:

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {
    // Response data
  }
}
```

## 🛡️ Error Handling

Standard HTTP status codes are used:

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Add tests if applicable
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Workflow

```bash
# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👥 Support

For support, please open an issue on GitHub or contact the development team.

## 🔗 Links

- **Repository**: [github.com/ChaithanyaBalapuram/LITE](https://github.com/ChaithanyaBalapuram/LITE)
- **Issues**: [GitHub Issues](https://github.com/ChaithanyaBalapuram/LITE/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ChaithanyaBalapuram/LITE/discussions)

---

**Made with ❤️ to empower students and professionals in technology**
