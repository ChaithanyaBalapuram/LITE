import { useState } from 'react';
import { 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical, 
  Search, 
  Phone, 
  Video, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  User,
  MessageSquare,
  Lock
} from 'lucide-react';

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in real app, this would come from API
  const chats = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Professional',
      lastMessage: 'I\'ve completed the database design. Please review the attached files.',
      timestamp: '2 min ago',
      unread: 2,
      status: 'online',
      project: 'E-commerce Website Development'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Professional',
      lastMessage: 'The UI mockups are ready. Let me know your feedback.',
      timestamp: '1 hour ago',
      unread: 0,
      status: 'offline',
      project: 'Mobile App UI/UX Design'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Professional',
      lastMessage: 'Thank you for the feedback. I\'ll implement the changes.',
      timestamp: '3 hours ago',
      unread: 0,
      status: 'offline',
      project: 'Database Design & Implementation'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'professional',
      content: 'Hello! I\'m excited to work on your e-commerce website project. Could you please share more details about your requirements?',
      timestamp: '10:30 AM',
      attachments: []
    },
    {
      id: 2,
      sender: 'student',
      content: 'Hi Rajesh! I need a complete e-commerce website with user authentication, product catalog, shopping cart, and payment integration.',
      timestamp: '10:35 AM',
      attachments: []
    },
    {
      id: 3,
      sender: 'professional',
      content: 'Perfect! I\'ll create a detailed project plan and timeline for you. Here\'s my initial proposal:',
      timestamp: '10:40 AM',
      attachments: [
        { name: 'Project_Proposal.pdf', size: '2.3 MB', type: 'pdf' }
      ]
    },
    {
      id: 4,
      sender: 'professional',
      content: 'I\'ve completed the database design. Please review the attached files and let me know if you need any modifications.',
      timestamp: '2:15 PM',
      attachments: [
        { name: 'Database_Schema.sql', size: '1.2 MB', type: 'sql' },
        { name: 'ER_Diagram.png', size: '856 KB', type: 'image' }
      ]
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle sending message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const currentChat = chats.find(chat => chat.id === selectedChat);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Secure Messaging</h1>
                <p className="text-sm text-gray-600">All communications are monitored for safety</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure & Monitored</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Chat List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Chat List */}
              <div className="flex-1 overflow-y-auto">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                      selectedChat === chat.id ? 'bg-primary-50 border-l-4 border-l-primary-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-gray-600" />
                        </div>
                        {chat.status === 'online' && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-gray-900 truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-500">{chat.timestamp}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">{chat.role}</p>
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        <p className="text-xs text-gray-400 mt-1">{chat.project}</p>
                        {chat.unread > 0 && (
                          <div className="flex items-center justify-end mt-1">
                            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                              {chat.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      {currentChat?.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{currentChat?.name}</h3>
                      <p className="text-sm text-gray-500">{currentChat?.role} • {currentChat?.project}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'student'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{msg.content}</p>
                      
                      {msg.attachments.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {msg.attachments.map((attachment, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 bg-white bg-opacity-20 rounded">
                              <Paperclip className="w-4 h-4" />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium truncate">{attachment.name}</p>
                                <p className="text-xs opacity-75">{attachment.size}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-75">{msg.timestamp}</span>
                        {msg.sender === 'student' && (
                          <CheckCircle className="w-3 h-3" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="px-4 py-2 bg-yellow-50 border-t border-yellow-200">
                <div className="flex items-center space-x-2 text-sm text-yellow-800">
                  <AlertTriangle className="w-4 h-4" />
                  <span>This conversation is monitored for safety. Do not share personal information.</span>
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
