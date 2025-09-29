import { Target, Eye, Users, Award, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-primary-600" />,
      title: "Security First",
      description: "We prioritize the safety and security of all our users through rigorous monitoring and verification processes."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary-600" />,
      title: "Quality Excellence",
      description: "Every project undergoes thorough review to ensure the highest standards of quality and originality."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Community Focus",
      description: "We believe in building a supportive community where everyone can learn, grow, and succeed together."
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary-600" />,
      title: "Empowerment",
      description: "Our mission is to empower both students and professionals to achieve their goals and aspirations."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      description: "Former tech executive with 15+ years in education technology and workforce development.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      role: "CTO",
      description: "Technology leader specializing in secure platforms and scalable systems architecture.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Anita Patel",
      role: "Head of Operations",
      description: "Operations expert focused on creating seamless user experiences and efficient processes.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      role: "Head of Security",
      description: "Cybersecurity expert ensuring platform security and user data protection.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Helped" },
    { number: "5,000+", label: "Professionals Verified" },
    { number: "50,000+", label: "Projects Completed" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding overflow-hidden">
        {/* Subtle background gradient (avoids inline SVG escaping issues) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4 mr-2" />
              Empowering India's Future
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">LITE</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Lovely Indian Technology Empowerment (LITE) is a revolutionary platform that bridges the gap between unemployed IT professionals and aspiring students through a secure, skill-based, and monitored environment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower unemployed IT professionals by providing them with real-world project experience and earning opportunities, while simultaneously helping students access quality mentorship and project guidance in a secure, monitored environment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a trusted digital ecosystem where skilled professionals can showcase their expertise, students can access quality learning experiences, and both can grow together in a secure, transparent, and empowering environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to empowering India's IT talent.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at LITE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind LITE's mission to empower India's IT talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center text-primary-600 font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
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
              Join the LITE Movement
            </h2>
            <p className="text-xl text-primary-100">
              Be part of a platform that's transforming how students learn and professionals grow in India's IT sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/join" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Today
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
