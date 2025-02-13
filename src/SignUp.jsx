import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  User, 
  Users, 
  ChevronDown, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import Footer from "./components/Sanuri/Footer";
import Header from "./components/Sanuri/Header";
import { Button } from './components/Sanuri/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/Sanuri/ui/card';
import ButtonGradient from "././assets/svg/ButtonGradient";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo"
import banner from "./components/Sanuri/images/banner.avif";
import LearnMore from "./components/Sanuri/images/LearnMore.png"
import Community from "./components/Sanuri/images/community.png"




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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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

    <Header />
    <div className="min-h-screen bg-black-600">

    
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <img 
          src= {banner} 
          alt="Community background" 
          className="w-full h-96 object-cover opacity-20 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black-800" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 hover:text-orange-300 transition-colors">
              Join Communeo
            </h1>
            <p className="text-xl text-yellow-200 mb-6">
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
          {/* Form Section */}
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Register Now</h2>
            <p className="text-yellow-200 mb-8">We're excited to hear from you!</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-orange-300">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-orange-300">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-orange-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-orange-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium mb-2 text-orange-300">Select a Role</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400" size={18} />
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 pl-10 pr-10 text-white appearance-none focus:outline-none focus:border-orange-500 transition-colors"
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
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 px-4 text-white appearance-none focus:outline-none focus:border-orange-500 transition-colors"
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
                  className="w-full bg-black/30 border border-orange-700 rounded-lg py-2 px-4 text-white placeholder-orange-300/50 focus:outline-none focus:border-orange-500 transition-colors min-h-[100px]"
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Submit <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4 text-orange-400">Join Our Community Today!</h2>
              <p className="text-yellow-200 mb-6">
                Don't miss out on exclusive updates, tips, and insights delivered straight to your inbox.
              </p>
              <img 
                src= {Community} 
                alt="Community illustration" 
                className="w-full rounded-lg mb-6 hover:scale-105 transition-transform duration-500"
              />
              <div className="space-y-4">
                {['Expert guidance', 'Regular updates', 'Exclusive content', 'Community support'].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle2 className="text-yellow-400" size={20} />
                    <span className="text-orange-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 text-white text-center hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <img 
                src= {LearnMore}
                alt="Learn more" 
                className="w-24 h-24 mx-auto rounded-full mb-4 hover:rotate-12 transition-transform duration-500"
              />
              <h3 className="text-xl font-bold mb-2 text-orange-400">Learn More</h3>
              <p className="text-yellow-200 mb-4">
                Discover how our community can help you grow and succeed.
              </p>
              <button className="bg-orange-500/20 hover:bg-orange-500/30 text-white font-semibold py-2 px-6 rounded-lg transition-colors hover:scale-105 transform duration-300">
                Explore
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