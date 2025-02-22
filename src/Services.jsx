import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart2, Users, Globe, TrendingUp, Search, PieChart,
  MessageCircle, Target, Mail, Phone, MapPin, Github,
  Twitter, Linkedin, Heart, ArrowRight, CheckCircle, Star,
  Award, Zap, Coffee
} from 'lucide-react';

import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";
import banner from "./components/Sanuri/images/banner.avif";
import choose1 from "./components/Sanuri/images/choose1.jpg";
import choose2 from "./components/Sanuri/images/choose2.jpeg";
import choose3 from "./components/Sanuri/images/choose3.png";
import videoUrl from "../src/assets/sanuri/vedio1.mp4";
import hirushi1 from "./components/Sanuri/images/hirushi1.jpg";
import kaveesha from "./components/Sanuri/images/kaveesha.jpg";
import FluidCursorDemo from "../src/components/Sanuri/FluidCursorDemo";
import sanuri1 from "./components/Sanuri/images/sanuri1.jpg";

// Enhanced Feature Card with Hover Animation
const FeatureCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-gradient-to-br from-black-600 to-black-600 p-6 rounded-xl backdrop-blur-sm transition-all duration-500 ${
        isHovered ? 'transform scale-105 shadow-xl shadow-orange-500/20' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg transition-all duration-300 ${
          isHovered ? 'bg-orange-500/20 rotate-12' : 'bg-orange-500/10'
        }`}>
          <Icon className={`transition-all duration-300 ${
            isHovered ? 'text-orange-400 scale-110' : 'text-orange-500'
          }`} size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
      {isHovered && (
        <ArrowRight className="absolute bottom-4 right-4 text-orange-500 animate-pulse" size={20} />
      )}
    </div>
  );
};

// New Component: Floating Particles Background
const ParticlesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Hero Section with Parallax Effect
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center px-4 mb-16 overflow-hidden">
      <img 
        src={banner} 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 transform scale-110"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />
      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex items-center justify-center mb-6">
          <Star className="text-orange-500 animate-spin-slow" size={32} />
        </div>
        <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-white">
          Elevate Your
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Brand
          </span>
        </h1>
        <p className="text-xl text-white mb-8">
          Effortlessly Connect with Influencers Today
        </p>
        
      </div>
    </div>
  );
};

// New Component: Achievement Cards
const AchievementCard = ({ icon: Icon, title, value, suffix }) => (
  <div className="bg-gradient-to-br from-black-600 to-black-600 p-6 rounded-xl backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
    <Icon className="text-orange-500 mb-4" size={32} />
    <h3 className="text-4xl font-bold text-white mb-2">
      {value}{suffix}
    </h3>
    <p className="text-gray-400">{title}</p>
  </div>
);

// Enhanced Stats Section with Achievement Cards
const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    campaigns: 0,
    engagement: 0,
    coffee: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        users: Math.min(prev.users + 1000, 50000),
        campaigns: Math.min(prev.campaigns + 100, 5000),
        engagement: Math.min(prev.engagement + 1, 95),
        coffee: Math.min(prev.coffee + 10, 1000)
      }));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black-600 to-black-600 py-16 px-4 mb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <AchievementCard
          icon={Users}
          title="Active Users"
          value={animatedStats.users.toLocaleString()}
          suffix="+"
        />
        <AchievementCard
          icon={Target}
          title="Campaigns Launched"
          value={animatedStats.campaigns.toLocaleString()}
          suffix="+"
        />
        <AchievementCard
          icon={TrendingUp}
          title="Average Engagement"
          value={animatedStats.engagement}
          suffix="%"
        />
        <AchievementCard
          icon={Coffee}
          title="Happy Clients"
          value={animatedStats.coffee}
          suffix="+"
        />
      </div>
    </div>
  );
};

// Enhanced Analytics Section with Hover Effects
// Enhanced Analytics Section with Fixed Video Playback
const AnalyticsSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to play video after component mounts
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Video autoplay failed:", err);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-16">
      <div className="space-y-6">
        <div className="relative">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
            Master Your Campaigns
          </h2>
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500" />
        </div>
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
      <div className="relative group h-[400px]"> {/* Added fixed height */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
        <video
          ref={videoRef}
          className="relative w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

// Rest of the components remain the same...
// (LocalizationSection, TestimonialSection, CTASection)
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
      name: "Emma Williams",
      role: "Marketing Director",
      content: "This platform revolutionized our approach to influencer marketing. The insights and campaign tracking features have saved us countless hours while improving ROI.",
      avatar: sanuri1
    },
    {
      name: "Jenny Rodriguez",
      role: "Content Creator",
      content: "Thanks to the detailed analytics and audience insights, I was able to triple my engagement and secure brand deals more effectively than ever before.",
      avatar: kaveesha
    },
    {
      name: "Sophia Lee",
      role: "Brand Manager",
      content: "The multi-language support and audience segmentation tools have allowed us to expand into international markets with ease, creating highly targeted campaigns.",
      avatar: hirushi1
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
  className="rounded-full"
  style={{ width: "100px", height: "100px" }}
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

const CTASection = () => (
  <div className="relative py-16 px-4">
    
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


// Enhanced main component with new features
const ServicesPage = () => (
  <>
   
    <div className="min-h-screen bg-black-600 text-white overflow-x-hidden">
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <StatsSection />
      <AnalyticsSection />
      <LocalizationSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  </>
);

export default ServicesPage;