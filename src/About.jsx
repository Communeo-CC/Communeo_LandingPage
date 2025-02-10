import React from 'react';
import { 
  ArrowRight, 
  Target, 
  Users, 
  Zap, 
  Award, 
  Globe, 
  BarChart,
  Lock, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";

const AboutPage = () => {
  const missions = [
    {
      title: "Our Mission",
      description: "To empower businesses with intelligent social media solutions that drive meaningful engagement and measurable growth.",
      icon: <Target className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Our Vision",
      description: "To become the global standard for data-driven social media marketing, helping businesses build authentic connections with their audience.",
      icon: <Zap className="w-8 h-8 text-orange-600" />
    }
  ];

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced algorithms that analyze engagement patterns and provide actionable insights for your social media strategy."
    },
    {
      title: "Cross-Platform Integration",
      description: "Seamlessly manage all your social media accounts from a single, intuitive dashboard."
    },
    {
      title: "Smart Scheduling",
      description: "Optimize post timing with our ML-powered scheduling system that predicts peak engagement periods."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Former social media strategist with 15+ years of experience in digital marketing.",
      imageUrl: "/api/placeholder/150/150"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      bio: "AI specialist with a background in building scalable social media analytics platforms.",
      imageUrl: "/api/placeholder/150/150"
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      bio: "Product leader specialized in user-centric design and agile methodologies.",
      imageUrl: "/api/placeholder/150/150"
    }
  ];

  const stats = [
    {
      number: "500K+",
      label: "Active Users",
      icon: <Users className="w-6 h-6 text-orange-600" />
    },
    {
      number: "50M+",
      label: "Posts Analyzed",
      icon: <BarChart className="w-6 h-6 text-orange-600" />
    },
    {
      number: "100+",
      label: "Countries",
      icon: <Globe className="w-6 h-6 text-orange-600" />
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to solve complex social media challenges.",
      icon: <Zap className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Trust",
      description: "We maintain the highest standards of data security and privacy for our users.",
      icon: <Lock className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every feature and service we provide.",
      icon: <Award className="w-6 h-6 text-orange-600" />
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, SF, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@platform.com"
    },
    {
      city: "London",
      address: "456 Digital Lane, London, UK EC2A 2BB",
      phone: "+44 20 7123 4567",
      email: "london@platform.com"
    }
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-5xl text-orange-600 font-bold mb-6">
              Revolutionizing Social Media Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We're building the future of social media management with AI-powered
              insights and seamless automation.
            </p>
            <Button className="flex items-center gap-2 text-orange-600">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex flex-col items-center text-center">
                    {stat.icon}
                    <h3 className="text-3xl font-bold mt-4 mb-2">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mission and Vision Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {missions.map((mission, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="mb-4">{mission.icon}</div>
                    <CardTitle className="mb-2">{mission.title}</CardTitle>
                    <p className="text-gray-600">{mission.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="mb-2">{value.title}</CardTitle>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <CardTitle className="mb-2">{feature.title}</CardTitle>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex flex-col items-center text-center">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-42 h-42 rounded-full mb-5 object-cover"
                    />
                    <CardTitle className="mb-1">{member.name}</CardTitle>
                    <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Journey
            </h2>
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Global Expansion",
                  description: "Reached users in over 100 countries and launched advanced AI features"
                },
                {
                  year: "2023",
                  title: "Series B Funding",
                  description: "Secured $50M in funding to accelerate product development"
                },
                {
                  year: "2022",
                  title: "Platform Launch",
                  description: "Successfully launched our platform with core analytics features"
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex items-start gap-4">
                    <div className="w-24 font-bold">{item.year}</div>
                    <div>
                      <CardTitle className="mb-2">{item.title}</CardTitle>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Office Locations Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Offices
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {officeLocations.map((office, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <CardTitle className="mb-4">{office.city}</CardTitle>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <p className="text-gray-600">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-red-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already using our platform to grow their social media presence.
            </p>
            <Button size="lg" className="flex items-center gap-2 text-orange-600">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Button>
          </section>
        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutPage;