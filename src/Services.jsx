import React, { useState, useEffect } from 'react';
import { 
  BarChart2, Users, Globe, TrendingUp, Search, PieChart,
  MessageCircle, Target, Mail, Phone, MapPin, Github,
  Twitter, Linkedin, Heart
} from 'lucide-react';

import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo"
import banner from "./components/Sanuri/images/banner.avif";
import choose1 from "./components/Sanuri/images/choose1.jpg";
import choose2 from "./components/Sanuri/images/choose2.jpeg";
import choose3 from "./components/Sanuri/images/choose3.png";
import sanuri from "./components/Sanuri/images/sanuri.jpg";
import kaveesha from "./components/Sanuri/images/kaveesha.jpg";
import hirushi from "./components/Sanuri/images/hirushi.jpg";

//  components
const FeatureCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-gradient-to-br from-black-600 to-black-600 p-6 rounded-xl backdrop-blur-sm transition-all duration-300 ${
        isHovered ? 'transform scale-105 shadow-xl shadow-orange-500/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-colors duration-300 ${
          isHovered ? 'bg-orange-500/20' : 'bg-orange-500/10'
        }`}>
          <Icon className={`transition-colors duration-300 ${
            isHovered ? 'text-orange-400' : 'text-orange-500'
          }`} size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center text-center px-4 mb-16">
      <img 
        src= {banner} 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Elevate Your Brand
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Effortlessly Connect with Influencers Today
        </p>
        <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </div>
  );
};

const AnalyticsSection = () => (
  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-16">
    <div className="space-y-6">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Master Your Campaigns with Real-Time Insights
      </h2>
      <p className="text-gray-300">
        Effortlessly execute and monitor your marketing campaigns. Gain valuable insights with real-time analytics to optimize performance.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard 
          icon={BarChart2}
          title="Real-Time Analytics"
          description="Stay informed and make data-driven decisions for your campaigns."
        />
        <FeatureCard
          icon={PieChart}
          title="Advanced Tools"
          description="Utilize advanced tools to analyze and refine your marketing strategies."
        />
      </div>
    </div>
    <div className="relative">
      <img 
        src= {choose3} 
        alt="Analytics dashboard" 
        className="rounded-xl shadow-2xl"
      />
    </div>
  </div>
);

const LocalizationSection = () => (
  <div className="bg-gradient-to-br from-black-600 to-black-600 py-16 px-4 mb-16">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Unlock Your Potential with Our Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Globe}
          title="Multi-Language Support"
          description="Create content in Sinhala, Tamil, and English to connect with diverse audiences effectively."
        />
        <FeatureCard
          icon={TrendingUp}
          title="Growth Tools"
          description="Boost your rankings and showcase your portfolio with our specialized tools."
        />
        <FeatureCard
          icon={Users}
          title="Tailored Solutions"
          description="Features designed to meet the unique needs of influencers and marketers."
        />
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This platform transformed our influencer marketing strategy completely.",
      avatar: sanuri
    },
    {
      name: "David Chen",
      role: "Content Creator",
      content: "The analytics tools helped me grow my audience by 300% in 6 months.",
      avatar: kaveesha
    },
    {
      name: "Lisa Patel",
      role: "Brand Manager",
      content: "The multi-language support helped us reach new markets effectively.",
      avatar: hirushi
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
        What Our Users Say
      </h2>
      <div className="relative h-64">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`absolute w-full transform transition-all duration-500 ${
              idx === activeIndex 
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="bg-gradient-to-br from-black-600 to-black-600 p-8 rounded-xl backdrop-blur-sm">
              <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              idx === activeIndex ? 'bg-orange-500' : 'bg-gray-600'
            }`}
            onClick={() => setActiveIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    campaigns: 0,
    engagement: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        users: Math.min(prev.users + 1000, 50000),
        campaigns: Math.min(prev.campaigns + 100, 5000),
        engagement: Math.min(prev.engagement + 1, 95)
      }));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black-600 to-black-600 py-16 px-4 mb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6">
          <Users className="mx-auto text-orange-500 mb-4" size={32} />
          <h3 className="text-4xl font-bold text-white mb-2">
            {animatedStats.users.toLocaleString()}+
          </h3>
          <p className="text-gray-400">Active Users</p>
        </div>
        <div className="p-6">
          <Target className="mx-auto text-orange-500 mb-4" size={32} />
          <h3 className="text-4xl font-bold text-white mb-2">
            {animatedStats.campaigns.toLocaleString()}+
          </h3>
          <p className="text-gray-400">Campaigns Launched</p>
        </div>
        <div className="p-6">
          <TrendingUp className="mx-auto text-orange-500 mb-4" size={32} />
          <h3 className="text-4xl font-bold text-white mb-2">
            {animatedStats.engagement}%
          </h3>
          <p className="text-gray-400">Average Engagement</p>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="relative py-16 px-4">
    <img 
      src={choose2} 
      alt="CTA background" 
      className="absolute inset-0 w-full h-full object-cover opacity-10"
    />
    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
        Join Us and Transform Your Strategy
      </h2>
      <p className="text-gray-300 mb-8">
        Experience the difference with our innovative tools and support.
      </p>
      <button className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">
        Start Your Journey
      </button>
    </div>
  </div>
);



const ServicesPage = () => (
  <div className="min-h-screen bg-black-600 text-white overflow-x-hidden">
    <Header />
    <HeroSection />
    <StatsSection />
    <AnalyticsSection />
    <LocalizationSection />
    <TestimonialSection />
    <CTASection />
    <Footer />
  </div>
);

export default ServicesPage;