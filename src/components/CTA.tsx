
import React from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, ArrowRight, Check } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-trak-purple to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Hiring Process?</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
          Join thousands of recruiters who have revolutionized their workflow with Trak
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
          <Button size="lg" className="bg-white hover:bg-gray-100 text-trak-purple px-8">
            <Chrome className="mr-2 h-5 w-5" />
            Add to Chrome
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
            Request Demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          {[
            {
              title: "Free Starter",
              price: "$0",
              features: [
                "Basic Job Analysis",
                "Limited Resume Matching",
                "5 AI Interview Questions/mo",
                "Standard Support"
              ]
            },
            {
              title: "Pro",
              price: "$29",
              features: [
                "Advanced Job Analysis",
                "Unlimited Resume Matching",
                "100 AI Interview Questions/mo",
                "Candidate Shortlisting",
                "Priority Support"
              ],
              popular: true
            },
            {
              title: "Enterprise",
              price: "Custom",
              features: [
                "All Pro Features",
                "Team Collaboration",
                "Advanced Analytics",
                "API Access",
                "Dedicated Support",
                "Custom Integrations"
              ]
            }
          ].map((plan, idx) => (
            <div key={idx} className={`rounded-xl p-6 ${
              plan.popular ? 'bg-white text-gray-900 transform scale-105 shadow-xl' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              {plan.popular && (
                <div className="bg-trak-purple text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm opacity-80">/month</span>}
              </div>
              
              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start">
                    <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${
                      plan.popular ? 'text-trak-purple' : 'text-white'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-trak-purple hover:bg-purple-700 text-white' 
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
