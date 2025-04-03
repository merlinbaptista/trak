
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  ChevronDown, 
  Search, 
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d9d28319-0bb1-4967-992a-a421d208e28a.png" 
                alt="Trak Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-trak-dark">trak</span>
            </a>
            
            <div className="hidden md:flex ml-10 space-x-6">
              <a href="#features" className="text-gray-600 hover:text-trak-purple font-medium transition-colors">
                Features
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-trak-purple font-medium transition-colors">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">For Recruiters</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">For HR Teams</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-50">For Hiring Managers</a>
                </div>
              </div>
              <a href="#" className="text-gray-600 hover:text-trak-purple font-medium transition-colors">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-trak-purple font-medium transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost" size="sm">Log in</Button>
            <Button className="bg-trak-purple hover:bg-purple-700">Get Started</Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t border-gray-100 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 font-medium py-2">Features</a>
            <a href="#solutions" className="text-gray-600 font-medium py-2">Solutions</a>
            <a href="#pricing" className="text-gray-600 font-medium py-2">Pricing</a>
            <a href="#about" className="text-gray-600 font-medium py-2">About</a>
            <Button className="w-full justify-center">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
