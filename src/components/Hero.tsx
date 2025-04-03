
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Chrome } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">AI-Powered Hiring Tools</span> for Busy Recruiters
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Trak seamlessly integrates AI-powered hiring tools directly into job portals like LinkedIn, Indeed, and Glassdoor for faster, smarter recruiting.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="btn-primary flex items-center">
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary">
                See Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <p>Used by <span className="font-semibold">2,500+</span> recruitment teams</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-slide-up">
            <div className="browser-window">
              <div className="browser-header">
                <div className="flex">
                  <div className="browser-circle bg-red-400"></div>
                  <div className="browser-circle bg-yellow-400"></div>
                  <div className="browser-circle bg-green-400"></div>
                </div>
                <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs flex items-center justify-center flex-grow max-w-md mx-auto">
                  linkedin.com/jobs
                </div>
              </div>
              <div className="browser-body relative p-0 h-80 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 opacity-30 bg-[url('https://cdn.pixabay.com/photo/2018/01/19/14/45/office-3091774_1280.jpg')] bg-cover bg-center"></div>
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="overlay-card top-8 left-8 max-w-xs">
                    <div className="text-sm font-semibold text-trak-purple mb-2">Job Analysis</div>
                    <h4 className="font-bold mb-2">Senior Frontend Developer</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <span className="w-32">Experience:</span>
                        <span className="font-medium">5+ years</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-32">Key skills:</span>
                        <span className="font-medium">React, TypeScript</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-32">Match score:</span>
                        <div className="flex items-center">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="ml-2 font-bold text-green-500">85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="overlay-card bottom-8 right-8 max-w-xs">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-semibold text-trak-purple">Candidate Ranking</div>
                      <span className="text-xs bg-trak-softPurple text-trak-purple px-2 py-0.5 rounded-full">AI Powered</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: 'Sarah Johnson', score: 92 },
                        { name: 'Michael Chen', score: 87 },
                        { name: 'David Park', score: 78 }
                      ].map((candidate, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 flex items-center justify-center text-xs font-medium">
                              {idx + 1}
                            </div>
                            <span className="text-sm font-medium">{candidate.name}</span>
                          </div>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            candidate.score > 90 ? 'bg-green-100 text-green-700' : 
                            candidate.score > 80 ? 'bg-blue-100 text-blue-700' : 
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {candidate.score}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default Hero;
