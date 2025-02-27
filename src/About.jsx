import React, { useEffect, useRef } from 'react';
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
import pic1 from "./components/Sanuri/images/pic1.jpg";
import visal from "./components/Sanuri/images/visal.jpg";
import sanuri from "./components/Sanuri/images/sanuri.jpg";
import kaveesha from "./components/Sanuri/images/kaveesha.jpg";
import hirushi from "./components/Sanuri/images/hirushi1.jpg";
import thamindu from "./components/Sanuri/images/thamindu.jpg";
import vidul from "./components/Sanuri/images/Vidul.jpg";
import choose1 from "./components/Sanuri/images/choose1.jpg";
import choose2 from "./components/Sanuri/images/choose2.jpeg";
import choose3 from "./components/Sanuri/images/choose2.gif";
import FluidCursorDemo from "../src/components/Sanuri/FluidCursorDemo";
import AnimatedStatsSection from './components/Sanuri/AnimatedStatsSection';
import AutoPauseVideo from './components/Sanuri/AutoPauseVideo';

const AboutPage = () => {
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
      {/* Removed the extra div with bg-black-600 class that was causing the issue */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="h-16"></div>
        {/* Hero Section - Simplified background */}
        <section className="relative py-16 overflow-hidden bg-black-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content Side */}
              <div className="lg:w-1/2 relative z-10">
                {/* Simplified backgrounds for better mobile visibility */}
                <div className="absolute -left-20 -top-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
                
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
                  Welcome to
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Communeo
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Empowering businesses through innovative social media solutions. 
                  We combine AI technology with human creativity to deliver exceptional results.
                </p>

                <div className="flex gap-6 mb-12">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10"
                  >
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Video Side */}
              <div className="lg:w-1/2 relative">
                
              </div>
            </div>
          </div>
        </section>

        <AnimatedStatsSection />

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
                <Card key={index} className="bg-black-600 border-black-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      {/* Circular image container with gradient border */}
                      <div className="rounded-full p-1 bg-gradient-to-r from-red-500 to-orange-500">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-64 h-64 object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-4">{member.role}</p>
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
                    <iframe 
                      title="Colombo Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.91730640693!2d79.77364738552652!3d6.927078400905912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594476d03231%3A0x6a1c7e74f9b1b1ff!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1708191885862!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutPage;