import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Header from "./components/Sanuri/Header";
import Footer from "./components/Sanuri/Footer";
import banner from "./components/Sanuri/images/banner.avif";
import FluidCursorDemo from "./components/Sanuri/FluidCursorDemo";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid md:grid-cols-1 gap-12">
      <Header />
      <div className="min-h-screen bg-black-600">
        {/* Hero Section - Made taller */}
        <div className="relative overflow-hidden">
          <img 
            src={banner}
            alt="Welcome background" 
            className="w-full h-[100vh] object-cover opacity-20 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black-600" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4 animate-fadeIn">
              <h1 className="text-7xl lg:text-8xl font-bold mb-8 text-white">
                Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Back</span>
              </h1>
              <p className="text-2xl text-white mb-12">
                Sign in to access your influencer network
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Maximized Form */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Animated border effect */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-12 text-white shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
              <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">LOGIN</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email Field */}
                <div>
                  <label className="block text-lg font-medium mb-3 text-orange-300">Your email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-hover:text-orange-300 transition-colors" size={22} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-orange-700 rounded-xl py-4 pl-12 pr-4 text-lg text-white placeholder-orange-300/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-lg font-medium mb-3 text-orange-300">Your password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-hover:text-orange-300 transition-colors" size={22} />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-black/40 border-2 border-orange-700 rounded-xl py-4 pl-12 pr-4 text-lg text-white placeholder-orange-300/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white text-xl font-bold py-5 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-3"
                >
                  Login with Email/Password <ArrowRight size={24} />
                </button>

                {/* Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-orange-700/50"></div>
                  <span className="mx-4 text-orange-400">OR</span>
                  <div className="flex-1 border-t border-orange-700/50"></div>
                </div>

                {/* Google Login Button */}
                <button
                  type="button"
                  className="w-full bg-black/40 border-2 border-orange-700 text-white text-xl font-bold py-5 rounded-xl hover:bg-black/60 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Login with Google
                </button>

                {/* Forgot Password Link */}
                <div className="text-center mt-8">
                  <a 
                    href="#" 
                    className="text-orange-500 hover:text-orange-400 text-lg font-medium transition-colors hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;