
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/d9d28319-0bb1-4967-992a-a421d208e28a.png" 
                alt="Trak Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">trak</span>
            </div>
            <p className="text-sm mb-4">
              AI-powered hiring tools that seamlessly integrate with job portals to transform your recruiting workflow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">GDPR Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Trak AI, Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
