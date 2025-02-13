import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, User, Users, ChevronDown, ArrowRight,
  CheckCircle2, Sparkles, Lock, Shield, Star, 
  Heart, Gift, Bell, Clock
} from 'lucide-react';

import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo";
import banner from "./components/Sanuri/images/banner.avif";
import LearnMore from "./components/Sanuri/images/LearnMore.png";
import Community from "./components/Sanuri/images/community.png";

// New Component: Animated Background
const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-orange-500 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${10 + Math.random() * 20}s linear infinite`,
          opacity: Math.random() * 0.5
        }}
      />
    ))}
  </div>
);

// New Component: Enhanced Input Field
const FormInput = ({ icon: Icon, label, ...props }) => (
  <div className="group">
    <label className="block text-sm font-medium mb-2 text-orange-300 group-hover:text-orange-400 transition-colors">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 group-hover:scale-110 transition-transform" size={18} />
      )}
      <input
        {...props}
        className={`w-full bg-black/30 border border-orange-700 rounded-lg py-3 ${Icon ? 'pl-10' : 'pl-4'} pr-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all hover:border-orange-500`}
      />
    </div>
  </div>
);

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    source: '',
    message: '',
    terms: false
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="grid md:grid-cols-1 gap-12">
      <FluidCursorDemo />
      <AnimatedBackground />
      <Header />
      
      <div className="min-h-screen bg-black-600">
        {/* Enhanced Hero Section */}
        <div className="relative overflow-hidden">
          <img 
            src={banner} 
            alt="Community background" 
            className="w-full h-96 object-cover opacity-20 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-800/50 to-black-800" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4 animate-fadeIn">
              <div className="flex justify-center mb-4">
                <Sparkles className="text-yellow-400 animate-pulse" size={40} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                Join Communeo
              </h1>
              <p className="text-2xl text-yellow-200 mb-6">
                Get Started Today
              </p>
              <p className="text-orange-200">
                Sign up now to receive the latest updates and exclusive content directly to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-1 gap-12">
            {/* Form Section with All Fields Preserved */}
            <div className="relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold mb-2 text-orange-400">Register Now</h2>
                <p className="text-yellow-200 mb-8">We're excited to have you join us!</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      icon={User}
                      label="First Name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                    <FormInput
                      icon={User}
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormInput
                      icon={Mail}
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                    <FormInput
                      icon={Phone}
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Role Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-300">Select a Role</label>
                    <div className="relative group">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 group-hover:scale-110 transition-transform" size={18} />
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-orange-700 rounded-lg py-3 pl-10 pr-10 text-white appearance-none focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-500"
                        required
                      >
                        <option value="">Choose one...</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Source Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-300">How did you hear about us?</label>
                    <div className="relative group">
                      <select
                        name="source"
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-orange-700 rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-500"
                        required
                      >
                        <option value="">None</option>
                        <option value="friend">Friend Referral</option>
                        <option value="social">Social Media</option>
                        <option value="search">Online Search</option>
                        <option value="newsletter">Newsletter</option>
                        <option value="other">Other Source</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-orange-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-orange-700 rounded-lg py-3 px-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors hover:border-orange-500 min-h-[100px]"
                      placeholder="Write your message..."
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="rounded border-orange-700 text-orange-500 focus:ring-orange-500 bg-black/30"
                      required
                    />
                    <label className="text-sm text-orange-200">
                      I agree to the Terms
                    </label>
                  </div>


                  {/* Enhanced Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {isLoading ? (
                        <span className="animate-spin">⟳</span>
                      ) : (
                        <>
                          Submit <ArrowRight size={18} />
                        </>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-white rounded-lg opacity-0 hover:opacity-10 transition-opacity" />
                  </button>
                </form>
              </div>
            </div>

            {/* Enhanced Information Section */}
            <div className="space-y-8">
              {/* Community Card */}
              <div className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <Heart className="text-orange-400 group-hover:scale-110 transition-transform" size={32} />
                  <h2 className="text-2xl font-bold text-orange-400">Join Our Community Today!</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-yellow-200 mb-6">
                      Don't miss out on exclusive updates, tips, and insights delivered straight to your inbox.
                    </p>
                    <div className="space-y-4">
                      {[
                        { icon: Star, text: 'Expert guidance' },
                        { icon: Bell, text: 'Regular updates' },
                        { icon: Gift, text: 'Exclusive content' },
                        { icon: Users, text: 'Community support' }
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                          <benefit.icon className="text-yellow-400 group-hover/item:scale-110 transition-transform" size={20} />
                          <span className="text-orange-200">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={Community} 
                      alt="Community illustration" 
                      className="w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Learn More Card */}
              <div className="group bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white text-center hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <img 
                    src={LearnMore}
                    alt="Learn more" 
                    className="relative w-24 h-24 rounded-full transform group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Learn More</h3>
                <p className="text-yellow-200 mb-6">
                  Discover how our community can help you grow and succeed.
                </p>
                <button className="group relative bg-orange-500/20 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-orange-500/30">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};


export default SignUpPage;