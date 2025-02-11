//about.jsx

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
  MapPin,
  ChevronRight
} from 'lucide-react';
import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo"
import pic1 from "./components/Sanuri/images/pic1.jpg";
import map from "./components/Sanuri/images/map.png";
import visal from "./components/Sanuri/images/visal.jpg";
import sanuri from "./components/Sanuri/images/sanuri.jpg";
import kaveesha from "./components/Sanuri/images/kaveesha.jpg";
import hirushi from "./components/Sanuri/images/hirushi.jpg";
import thamindu from "./components/Sanuri/images/thamindu.jpg";
import vidul from "./components/Sanuri/images/vidul.png";
import choose1 from "./components/Sanuri/images/choose1.jpg";
import choose2 from "./components/Sanuri/images/choose2.jpeg";
import choose3 from "./components/Sanuri/images/choose3.png";


const AboutPage = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-orange-400" />,
      number: "100K+",
      label: "Active Users"
    },
    {
      icon: <Globe className="h-6 w-6 text-red-400" />,
      number: "150+",
      label: "Countries Served"
    },
    {
      icon: <BarChart className="h-6 w-6 text-yellow-400" />,
      number: "10M+",
      label: "Posts Analyzed"
    }
  ];

  const missions = [
    {
      icon: <Target className="h-12 w-12 text-orange-600" />,
      title: "Our Mission",
      description: "To empower businesses with intelligent social media solutions that drive meaningful engagement and measurable results."
    },
    {
      icon: <Zap className="h-12 w-12 text-orange-600" />,
      title: "Our Vision",
      description: "To become the global leader in AI-powered social media management, setting new standards for digital marketing excellence."
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer service."
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Customer First",
      description: "Our customers' success is our success. We prioritize their needs in every decision we make."
    },
    {
      icon: <Lock className="h-8 w-8 text-yellow-600" />,
      title: "Trust & Security",
      description: "We maintain the highest standards of data security and privacy protection for our users."
    }
  ];

  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced analytics powered by machine learning to provide actionable insights.",
      image: choose1
    },
    {
      title: "Automated Scheduling",
      description: "Intelligent content scheduling that maximizes engagement and reach.",
      image: choose2
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 monitoring of your social media presence and brand mentions.",
      image: choose3
    }
  ];

  const team = [
    {
      name: "Visal Vitanage",
      role: "CEO & Founder",
      bio: "Visionary leader with expertise in digital marketing and tech innovation.",
      imageUrl: visal
    },
    {
      name: "Kaveesha Liyanaarachchi",
      role: "CTO",
      bio: "AI expert with a passion for building scalable technology solutions.",
      imageUrl: kaveesha
    },
    {
      name: "Sanuri Perera",
      role: "Head of Product",
      bio: "Product strategist focused on creating intuitive user experiences.",
      imageUrl: sanuri
    },
    {
      name: "Hirushi Perera",
      role: "Head of Marketing",
      bio: "Marketing specialist with proven track record in digital campaigns.",
      imageUrl: hirushi
    },
    {
      name: "Thamindu Wickramaarachchi",
      role: "Lead Developer",
      bio: "Senior developer specializing in full-stack development and system architecture.",
      imageUrl: thamindu
    },
    {
      name: "Vidul Wickramasinghe",
      role: "Head of Design",
      bio: "Creative director with expertise in UI/UX and brand identity.",
      imageUrl: vidul
    }
  ];

  const officeLocations = [
    {
      city: "Colombo",
      address: "22/6,Mangal Mawatha,Maharagama",
      phone: "0716291717",
      email: "communeo@gmail.com",
      image: "/images/map.png/1000/600"
    },
    
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <div className="min-h-screen bg-black-600">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/30 to-red-950/10" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="absolute -left-8 -top-8 w-32 h-32 bg-orange-900/30 rounded-full opacity-50 blur-xl" />
              <div className="absolute -right-4 bottom-8 w-24 h-24 bg-red-600/30 rounded-full opacity-50 blur-lg" />
              <h1 className="text-7xl font-bold mb-8 leading-tight text-white">
                We Shape The
                <span className="block mt-2 bg-gradient-to-r from-orange-600 to-red-400 text-transparent bg-clip-text">
                  Future of Social Media
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Transforming how businesses connect with their audience through
                AI-powered insights and seamless automation.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-red-800 hover:bg-orange-800 text-white">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-red-600 border-orange-600 hover:bg-orange-950">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-800/20 to-red-800/20 rounded-full blur-3xl opacity-30" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  width = {600}
                  height={800}
                  src={pic1}
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-r from-red-900 to-black-400 border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-red-800 p-4 rounded-2xl">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold mb-1 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
                        {stat.number}
                      </h3>
                      <p className="text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gradient-to-b from-black-950 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Purpose
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {missions.map((mission, index) => (
              <Card key={index} className="bg-black-600 border-red shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-8 p-6 bg-red-800 rounded-full transform hover:rotate-12 transition-transform duration-300">
                      {mission.icon}
                    </div>
                    <CardTitle className="text-3xl mb-6 text-white">{mission.title}</CardTitle>
                    <p className="text-gray-400 text-lg leading-relaxed">{mission.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 to-black opacity-50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-black-600/80 backdrop-blur border-black-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-red-800 rounded-2xl inline-block">
                    {value.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4 text-white">{value.title}</CardTitle>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Us</h2>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold mb-6 text-red-600">{feature.title}</h3>
                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">{feature.description}</p>
                  <Button variant="outline" size="lg" className="text-red-600 border-red-600 hover:bg-orange-950">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-800/20 to-red-800/20 rounded-3xl blur-2xl opacity-30" />
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-black-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-black-600 border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-80">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-orange-600 font-medium">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-400">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Office Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Location</h2>
          <div className="grid md:grid-cols-1">
            {officeLocations.map((office, index) => (
              <Card key={index} className="bg-black-600 border-orange-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src={map}
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white">{office.city}</h3>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-5 h-5 text-orange-600" />
                      <p className="text-gray-400">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <p className="text-gray-400">{office.phone}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-orange-600" />
                      <p className="text-gray-400">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
      
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutPage;