
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToDemo = () => {
    // First navigate to ensure we're on the index page
    navigate('/', { replace: true });
    
    // Then add the hash to the URL
    window.location.hash = 'demo-section';
    
    // Scroll to the demo section
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered Hiring Tools</span>
            <br />
            Directly in Your Browser
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
            Trak seamlessly integrates AI-powered recruiting tools directly into job portals like LinkedIn, Indeed, and Glassdoor for faster, smarter hiring.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-trak-purple hover:bg-purple-700 text-white px-8 py-6" size="lg" onClick={scrollToDemo}>
              See Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-trak-purple text-trak-purple hover:bg-trak-purple/10 px-8 py-6" size="lg">
              Install Extension
            </Button>
          </div>
          
          <div className="mt-16 browser-window w-full max-w-5xl">
            <div className="browser-header">
              <div className="flex items-center">
                <div className="browser-circle bg-red-400"></div>
                <div className="browser-circle bg-yellow-400"></div>
                <div className="browser-circle bg-green-400"></div>
              </div>
              <div className="flex-1 text-center text-sm text-gray-500 mx-4">
                linkedin.com/jobs
              </div>
            </div>
            <div className="browser-body p-0 relative">
              <img 
                src="/placeholder.svg" 
                alt="Trak in action" 
                className="w-full h-auto rounded-b-xl"
              />
              
              <div className="overlay-card absolute top-8 right-8 md:w-72">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-trak-purple text-white flex items-center justify-center font-bold text-lg mr-2">
                    92
                  </div>
                  <h3 className="font-bold">Match Score</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">This candidate matches 92% of the job requirements</p>
                <div className="text-xs bg-trak-softPurple text-trak-purple px-2 py-1 rounded-full inline-block">
                  AI Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
