import { useState } from 'react';
import { 
  User, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  Bell, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  CheckCircle, 
  Star, 
  Award, 
  TrendingUp,
  Users,
  FileText,
  Calendar,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole] = useState('student'); // This would come from auth context
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in real app, this would come from API
  const studentStats = {
    activeProjects: 3,
    completedProjects: 12,
    totalSpent: 25000,
    averageRating: 4.8
  };

  const professionalStats = {
    activeProjects: 5,
    completedProjects: 28,
    totalEarned: 125000,
    averageRating: 4.9
  };

  const recentProjects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-10-15',
      professional: 'Rajesh Kumar',
      amount: 15000
    },
    {
      id: 2,
      title: 'Mobile App UI/UX Design',
      status: 'review',
      progress: 100,
      dueDate: '2024-10-10',
      professional: 'Priya Sharma',
      amount: 12000
    },
    {
      id: 3,
      title: 'Database Design & Implementation',
      status: 'completed',
      progress: 100,
      dueDate: '2024-10-05',
      professional: 'Amit Patel',
      amount: 8000
    }
  ];

  const availableProjects = [
    {
      id: 1,
      title: 'React Native Mobile App',
      description: 'Need help building a cross-platform mobile application',
      budget: '₹15,000 - ₹25,000',
      duration: '2-3 weeks',
      skills: ['React Native', 'JavaScript', 'Firebase'],
      postedBy: 'Computer Science Student',
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'Machine Learning Model',
      description: 'Implement a recommendation system using Python',
      budget: '₹20,000 - ₹35,000',
      duration: '3-4 weeks',
      skills: ['Python', 'TensorFlow', 'Data Science'],
      postedBy: 'AI/ML Student',
      postedDate: '1 day ago'
    },
    {
      id: 3,
      title: 'Full Stack Web Application',
      description: 'Build a complete web application with frontend and backend',
      budget: '₹25,000 - ₹40,000',
      duration: '4-5 weeks',
      skills: ['React', 'Node.js', 'MongoDB'],
      postedBy: 'Web Development Student',
      postedDate: '3 days ago'
    }
  ];

  const StudentDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{studentStats.activeProjects}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{studentStats.completedProjects}</p>
            </div>
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">₹{studentStats.totalSpent.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{studentStats.averageRating}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Recent Projects</h3>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>

        <div className="space-y-4">
          {recentProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{project.title}</h4>
                  <p className="text-sm text-gray-600">Professional: {project.professional}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">Due: {project.dueDate}</span>
                    <span className="text-sm text-gray-500">Amount: ₹{project.amount.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{project.progress}%</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProfessionalDashboard = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{professionalStats.activeProjects}</p>
            </div>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{professionalStats.completedProjects}</p>
            </div>
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Earned</p>
              <p className="text-2xl font-bold text-gray-900">₹{professionalStats.totalEarned.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900">{professionalStats.averageRating}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Available Projects */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Available Projects</h3>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {availableProjects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>Budget: {project.budget}</span>
                    <span>Duration: {project.duration}</span>
                    <span>Posted: {project.postedDate}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="btn-primary text-sm px-4 py-2">
                    Apply Now
                  </button>
                  <button className="btn-outline text-sm px-4 py-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">
                  Welcome back, {userRole === 'student' ? 'Student' : 'Professional'}!
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                <Settings className="w-6 h-6" />
              </button>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <TrendingUp className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-4 h-4" /> },
              { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        {activeTab === 'overview' && (
          userRole === 'student' ? <StudentDashboard /> : <ProfessionalDashboard />
        )}
        
        {activeTab === 'projects' && (
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">All Projects</h3>
            <p className="text-gray-600">Project management interface will be implemented here.</p>
          </div>
        )}
        
        {activeTab === 'messages' && (
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Messages</h3>
            <p className="text-gray-600">Secure messaging interface will be implemented here.</p>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h3>
            <p className="text-gray-600">Profile management interface will be implemented here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
