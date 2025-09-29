import { UserCheck, Search, MessageSquare, Shield, CheckCircle, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const HowItWorks = () => {
  const studentSteps = [
    {
      step: "01",
      icon: <UserCheck className="w-8 h-8 text-primary-600" />,
      title: "Sign Up as Student",
      description: "Create your account and verify your student status with your educational institution details."
    },
    {
      step: "02",
      icon: <Search className="w-8 h-8 text-secondary-600" />,
      title: "Browse Professionals",
      description: "Search and filter through verified IT professionals by skills, domain, and experience level."
    },
    {
      step: "03",
      icon: <MessageSquare className="w-8 h-8 text-primary-600" />,
      title: "Request Project Help",
      description: "Submit your project requirements and connect with suitable professionals through our secure messaging system."
    },
    {
      step: "04",
      icon: <Shield className="w-8 h-8 text-secondary-600" />,
      title: "Receive Reviewed Work",
      description: "Get your completed project after it passes through our quality review and plagiarism checks."
    }
  ];

  const professionalSteps = [
    {
      step: "01",
      icon: <UserCheck className="w-8 h-8 text-primary-600" />,
      title: "Apply as Professional",
      description: "Submit your application with portfolio, skills, and undergo background verification process."
    },
    {
      step: "02",
      icon: <Award className="w-8 h-8 text-secondary-600" />,
      title: "Get Verified",
      description: "Our team reviews your credentials, conducts interviews, and verifies your background before approval."
    },
    {
      step: "03",
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      title: "Accept Projects",
      description: "Browse available student projects, submit quotes, and get assigned to suitable projects."
    },
    {
      step: "04",
      icon: <CheckCircle className="w-8 h-8 text-secondary-600" />,
      title: "Deliver & Earn",
      description: "Complete projects, submit for review, and receive payment upon approval from our quality team."
    }
  ];

  const processFlow = [
    {
      title: "Student Submits Request",
      description: "Student creates project request with requirements and budget",
      icon: <Users className="w-6 h-6 text-primary-600" />
    },
    {
      title: "Professional Quotes",
      description: "Verified professionals submit quotes and timelines",
      icon: <Award className="w-6 h-6 text-secondary-600" />
    },
    {
      title: "Assignment & Escrow",
      description: "Student selects professional and funds are held in escrow",
      icon: <Shield className="w-6 h-6 text-primary-600" />
    },
    {
      title: "Secure Communication",
      description: "All communication happens through monitored platform",
      icon: <MessageSquare className="w-6 h-6 text-secondary-600" />
    },
    {
      title: "Quality Review",
      description: "Internal team reviews deliverables for quality and plagiarism",
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />
    },
    {
      title: "Delivery & Payment",
      description: "Approved work delivered to student, professional gets paid",
      icon: <Award className="w-6 h-6 text-secondary-600" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">LITE</span> Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A simple, secure process that connects students with verified IT professionals for quality project guidance and real-world learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Student Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">For Students</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance on your projects from verified IT professionals in a secure, monitored environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {studentSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < studentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">For Professionals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain real-world experience, build your portfolio, and earn money by helping students with their projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < professionalSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">The Complete Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From project request to completion, every step is monitored and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processFlow.map((step, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Security & Quality Assurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every interaction is monitored and secured to ensure the best experience for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                All messages are monitored and filtered. No direct contact or personal information sharing is allowed.
              </p>
            </div>

            <div className="card text-center">
              <CheckCircle className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Review</h3>
              <p className="text-gray-600 leading-relaxed">
                Every project undergoes thorough review for quality, originality, and compliance with requirements.
              </p>
            </div>

            <div className="card text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                All professionals undergo background verification and skill assessment before being approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of students and professionals who are already benefiting from the LITE platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join as Student
              </a>
              <a href="/join" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Join as Professional
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
