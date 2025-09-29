import { useState } from 'react';
import { User, GraduationCap, CheckCircle, ArrowRight, Mail, Lock, UserCheck, Phone, MapPin, Briefcase, Award, BookOpen } from 'lucide-react';

const JoinUs = () => {
  const [selectedRole, setSelectedRole] = useState<'student' | 'professional' | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    institution: '',
    course: '',
    year: '',
    skills: '',
    experience: '',
    portfolio: '',
    location: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { role: selectedRole, ...formData });
  };

  const studentBenefits = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary-600" />,
      title: "Expert Guidance",
      description: "Get help from verified IT professionals on your projects"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-secondary-600" />,
      title: "Quality Assurance",
      description: "All work is reviewed for quality and originality"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary-600" />,
      title: "Secure Platform",
      description: "Safe, monitored environment for all interactions"
    }
  ];

  const professionalBenefits = [
    {
      icon: <Briefcase className="w-6 h-6 text-primary-600" />,
      title: "Real Experience",
      description: "Gain hands-on experience with real student projects"
    },
    {
      icon: <Award className="w-6 h-6 text-secondary-600" />,
      title: "Earn Money",
      description: "Get paid for your expertise and time"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary-600" />,
      title: "Build Portfolio",
      description: "Showcase your skills and build a strong portfolio"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">LITE</span> Community
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose your role and start your journey with LITE. Whether you're a student seeking guidance or a professional looking to share your expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      {!selectedRole && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-gray-900">Choose Your Role</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select how you'd like to participate in the LITE platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Student Option */}
              <div 
                className="card cursor-pointer group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary-200"
                onClick={() => setSelectedRole('student')}
              >
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <GraduationCap className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">I'm a Student</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get expert guidance on your projects from verified IT professionals in a secure, monitored environment.
                  </p>
                  
                  <div className="space-y-3">
                    {studentBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {benefit.icon}
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="btn-primary w-full flex items-center justify-center space-x-2">
                    <span>Join as Student</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Professional Option */}
              <div 
                className="card cursor-pointer group hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-secondary-200"
                onClick={() => setSelectedRole('professional')}
              >
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-10 h-10 text-secondary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">I'm a Professional</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Share your expertise with students, gain real-world experience, and earn money while helping others learn.
                  </p>
                  
                  <div className="space-y-3">
                    {professionalBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {benefit.icon}
                        <div className="text-left">
                          <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="btn-secondary w-full flex items-center justify-center space-x-2">
                    <span>Join as Professional</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Registration Form */}
      {selectedRole && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="text-center space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={() => setSelectedRole(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      ← Back
                    </button>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedRole === 'student' ? 'Student Registration' : 'Professional Registration'}
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    Fill in your details to create your {selectedRole} account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your city, state"
                      />
                    </div>
                  </div>

                  {/* Student-specific fields */}
                  {selectedRole === 'student' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Educational Institution *
                        </label>
                        <input
                          type="text"
                          name="institution"
                          value={formData.institution}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your college/university name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Course/Program *
                          </label>
                          <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="e.g., Computer Science"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Academic Year *
                          </label>
                          <select
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select year</option>
                            <option value="1st">1st Year</option>
                            <option value="2nd">2nd Year</option>
                            <option value="3rd">3rd Year</option>
                            <option value="4th">4th Year</option>
                            <option value="postgrad">Post Graduate</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Professional-specific fields */}
                  {selectedRole === 'professional' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Skills & Technologies *
                        </label>
                        <textarea
                          name="skills"
                          value={formData.skills}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="List your technical skills (e.g., React, Node.js, Python, Java, etc.)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-3">1-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5-10">5-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/Projects (Optional)
                        </label>
                        <textarea
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Share links to your projects, GitHub profile, or portfolio"
                        />
                      </div>
                    </>
                  )}

                  {/* Password fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Create a strong password"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Confirm your password"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms and conditions */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className={`w-full ${selectedRole === 'student' ? 'btn-primary' : 'btn-secondary'} flex items-center justify-center space-x-2`}
                  >
                    <span>Create {selectedRole === 'student' ? 'Student' : 'Professional'} Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JoinUs;
