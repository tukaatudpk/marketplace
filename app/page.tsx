import React from 'react';
import { 
  Bell, 
  Mail, 
  Store, 
  ShoppingBag, 
  Monitor, 
  Shirt, 
  Sparkles, 
  Home, 
  ShoppingCart, 
  BookOpen, 
  Car, 
  HeartPulse, 
  Baby, 
  Laptop, 
  Smartphone, 
  Dumbbell, 
  Sofa, 
  Refrigerator, 
  Gem, 
  Footprints, 
  Briefcase, 
  Plane, 
  Paperclip, 
  Utensils, 
  MoreHorizontal,
  Star
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const categories = [
    { name: 'Electronics', icon: Monitor },
    { name: 'Fashion', icon: Shirt },
    { name: 'Beauty', icon: Sparkles },
    { name: 'Home & Living', icon: Home },
    { name: 'Grocery', icon: ShoppingCart },
    { name: 'Books', icon: BookOpen },
    { name: 'Automotive', icon: Car },
    { name: 'Health', icon: HeartPulse },
    { name: 'Toys & Kids', icon: Baby },
    { name: 'Computers', icon: Laptop },
    { name: 'Mobile & Accessories', icon: Smartphone },
    { name: 'Sports & Outdoors', icon: Dumbbell },
    { name: 'Furniture', icon: Sofa },
    { name: 'Appliances', icon: Refrigerator },
    { name: 'Jewelry', icon: Gem },
    { name: 'Shoes', icon: Footprints },
    { name: 'Bags', icon: Briefcase },
    { name: 'Travel', icon: Plane },
    { name: 'Office Supplies', icon: Paperclip },
    { name: 'Food & Dining', icon: Utensils },
    { name: 'Others', icon: MoreHorizontal },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-yellow-400 selection:text-black">
      {/* Top Announcement Bar */}
      <div className="bg-[#facc15] text-[#1e293b] py-2 px-4 text-sm flex flex-col sm:flex-row justify-center items-center gap-2 font-medium z-50">
        <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
        <p className="text-center">
          Nepal's Biggest E-commerce Platform is <strong>Coming Back Soon</strong> — Shop & Sell with your Own Custom Domain Store
        </p>
        <button className="bg-white/90 hover:bg-white text-black px-4 py-1 rounded-md text-xs font-bold transition-colors ml-2 shadow-sm">
          Get Notified
        </button>
      </div>

      {/* Header / Navbar */}
      <header className="bg-white py-4 px-6 md:px-12 flex items-center z-50 relative border-b border-gray-100">
        <div className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="text-2xl font-bold text-[#1e3a8a] tracking-tight flex items-center gap-1">
            <div className="w-4 h-1 bg-yellow-400 transform -rotate-45 translate-y-1"></div>
            tukaatu
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-grow relative flex items-center overflow-hidden bg-gradient-to-br from-[#0B1E36] via-[#103052] to-[#0A546A]">
        {/* Grid Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#facc15]/30 bg-[#facc15]/10 text-[#facc15] text-sm font-medium w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]"></span>
              Launching Back in Nepal — September 2026
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Nepal's Biggest Online <br className="hidden lg:block" />
              <span className="text-[#facc15]">Shopping Marketplace</span> <br className="hidden lg:block" />
              is Coming Back.
            </h1>

            {/* Subheadline */}
            <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              The first platform built <strong>for Nepal</strong> — discover thousands of local stores or launch your own with a <strong>custom domain</strong>, your branding, and everything you need to grow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 bg-gray-800/50 hover:bg-gray-800 text-white font-medium transition-colors">
                <ShoppingBag size={18} />
                Shop from 1000s of stores
              </button>
              <Link href={"https://store.tukaatu.com/"}>
              
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-600 bg-gray-800/50 hover:bg-gray-800 text-white font-medium transition-colors">
                <Store size={18} />
                Launch your own store
              </button>
              </Link>
            </div>

            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email for early access" 
                  className="w-full pl-4 pr-10 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <Mail className="absolute right-3 top-3.5 text-gray-400" size={20} />
              </div>
              <button className="bg-[#facc15] hover:bg-yellow-500 text-[#1e293b] px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
                <Bell size={18} />
                Notify Me
              </button>
            </div>
          </div>

          {/* Right Column - Category Grid */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Floating Badge above card */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-[#1e293b] shadow-lg text-yellow-400 text-sm font-semibold whitespace-nowrap">
                  <Star size={14} className="fill-yellow-400" />
                  Coming Back Soon
                </div>
              </div>

              {/* Glassmorphism Card */}
              <div className="bg-[#1e293b]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 pt-12 shadow-2xl">
                <div className="flex flex-wrap gap-2.5 justify-center">
                  {categories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <button 
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium transition-all hover:scale-105"
                      >
                        <Icon size={14} className="opacity-70" />
                        {category.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-white/5 py-6 flex justify-center items-center relative z-20">
         <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1 text-gray-400">
               <div className="w-3 h-0.5 bg-gray-500 transform -rotate-45 translate-y-0.5"></div>
               tukaatu
            </span>
            <span>© 2026 Tukaatu Services Pvt. Ltd.</span>
         </div>
      </footer>
    </div>
  );
}