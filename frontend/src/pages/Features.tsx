import { Shield, Users, Award, MessageSquare, Eye, Lock, CheckCircle, AlertTriangle, Clock, Star, Zap, Heart } from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: "End-to-End Security",
      description: "Complete platform security with encrypted communications, secure file transfers, and monitored interactions.",
      benefits: [
        "256-bit SSL encryption for all data",
        "Secure file storage and transfer",
        "Regular security audits and updates",
        "GDPR compliant data handling"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-secondary-600" />,
      title: "Verified Professional Network",
      description: "Rigorous background verification and skill assessment for all IT professionals on the platform.",
      benefits: [
        "Background verification process",
        "Skill assessment and portfolio review",
        "Regular performance monitoring",
        "Continuous professional development"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-primary-600" />,
      title: "Quality Assurance Team",
      description: "Dedicated teams of experts ensuring every project meets the highest standards of quality and originality.",
      benefits: [
        "Code review and quality checks",
        "Plagiarism detection and prevention",
        "Cybersecurity expert validation",
        "Legal compliance verification"
      ]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-secondary-600" />,
      title: "Monitored Communication",
      description: "All interactions are monitored to ensure professional conduct and prevent any inappropriate behavior.",
      benefits: [
        "Real-time message monitoring",
        "Automated content filtering",
        "Human moderation team",
        "Incident reporting and resolution"
      ]
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-primary-600" />,
      title: "No Direct Contact",
      description: "Students and professionals never exchange personal information or contact details."
    },
    {
      icon: <Eye className="w-8 h-8 text-secondary-600" />,
      title: "24/7 Monitoring",
      description: "All platform activities are continuously monitored by our security team."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
      title: "Content Verification",
      description: "All submitted work undergoes thorough review before delivery to students."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-secondary-600" />,
      title: "Incident Response",
      description: "Quick response to any violations with immediate action and project reassignment."
    }
  ];

  const backendTeams = [
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Code Review Team",
      description: "Expert developers who review all code submissions for quality, security, and best practices."
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary-600" />,
      title: "Cybersecurity Team",
      description: "Security experts ensuring platform integrity and protecting user data from threats."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Interview Team",
      description: "Technical interviewers who assess and verify professional skills and experience."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-secondary-600" />,
      title: "Moderation Team",
      description: "Content moderators monitoring all communications for compliance and safety."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-600" />,
      title: "Quality Assurance",
      description: "QA specialists ensuring all deliverables meet the highest standards of quality."
    },
    {
      icon: <Star className="w-8 h-8 text-secondary-600" />,
      title: "Customer Support",
      description: "Dedicated support team providing assistance and resolving any platform issues."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Fast Turnaround",
      description: "Quick project completion with efficient review processes and automated quality checks."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary-600" />,
      title: "Student-Focused",
      description: "Every feature is designed to enhance the learning experience and academic success of students."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "24/7 Availability",
      description: "Round-the-clock platform access with support teams available when you need them."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary-600" />,
      title: "Professional Growth",
      description: "Opportunities for professionals to build portfolios and gain real-world experience."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Features</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover the comprehensive features that make LITE the most secure and reliable platform for connecting students with IT professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Core Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The essential features that ensure security, quality, and seamless user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-secondary-600 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Security & Safety</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced security measures to protect all users and ensure a safe learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Teams */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Backend Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated teams of experts working behind the scenes to ensure platform quality, security, and user satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendTeams.map((team, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {team.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{team.title}</h3>
                <p className="text-gray-600 leading-relaxed">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose LITE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The unique benefits that set LITE apart from other platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern, secure technologies to ensure reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2 text-gray-600">
                <p>React + TypeScript</p>
                <p>TailwindCSS</p>
                <p>Vite</p>
                <p>React Router</p>
              </div>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2 text-gray-600">
                <p>Node.js + Express</p>
                <p>MongoDB</p>
                <p>JWT Authentication</p>
                <p>Socket.io</p>
              </div>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security</h3>
              <div className="space-y-2 text-gray-600">
                <p>SSL/TLS Encryption</p>
                <p>Content Filtering</p>
                <p>Rate Limiting</p>
                <p>Audit Logging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Experience the LITE Difference
            </h2>
            <p className="text-xl text-primary-100">
              Join our secure platform and discover how technology can transform your learning and professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Today
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
