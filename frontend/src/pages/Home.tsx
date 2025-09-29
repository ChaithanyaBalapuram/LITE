import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Secure Communication",
      description: "All interactions are monitored and secure, with no direct contact between students and professionals."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary-600" />,
      title: "Verified Professionals",
      description: "Background-verified IT professionals with proven skills and experience in their domains."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Quality Assurance",
      description: "All projects go through rigorous review and plagiarism checks before reaching students."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      content: "LITE helped me complete my final year project with guidance from verified professionals. The quality was exceptional!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Software Developer",
      content: "As an unemployed developer, LITE gave me real-world experience and helped me build my portfolio while earning.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "IT Student",
      content: "The secure platform gave me confidence to learn from experts without worrying about safety or quality.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23e5e7eb%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40'></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Trusted by 10,000+ Students & Professionals
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering India's
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                    {" "}IT Talent
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect unemployed IT professionals with students seeking mentorship and real-world project experience in a secure, monitored environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/join" className="btn-primary flex items-center justify-center space-x-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/how-it-works" className="btn-outline flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                  <span>Quality Assured</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              {/* Floating Cards */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">For Students</h3>
                        <p className="text-gray-600">Get expert guidance on your projects</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">For Professionals</h3>
                        <p className="text-gray-600">Gain experience and earn money</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-20 animate-bounce-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose LITE?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a secure, monitored platform that ensures quality learning experiences for students and meaningful work opportunities for professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl font-semibold text-gray-600">Trusted by Leading Institutions</h2>
            <p className="text-gray-500">Universities and colleges across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "IIT Delhi", "IIT Mumbai", "IIT Bangalore", "NIT Trichy", "BITS Pilani", "IIIT Hyderabad"
            ].map((institution, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary-600 font-bold text-sm">{institution.split(' ')[0]}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">{institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and professionals who have benefited from the LITE platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Learning Journey?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of students and professionals who are already benefiting from the LITE platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join as Student
              </Link>
              <Link to="/join" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Join as Professional
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
