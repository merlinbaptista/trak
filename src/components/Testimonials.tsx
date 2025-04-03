
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica Rivera",
      role: "Senior Recruiter, TechCorp",
      text: "Trak has revolutionized our hiring process. I can analyze 3x more resumes per day with better results. The AI-powered insights help me identify the best candidates instantly.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Talent Acquisition Manager",
      text: "The job description analysis tool alone saved our team hours of work. Being able to match candidates automatically against requirements has improved our hiring quality dramatically.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "HR Director, StartupX",
      text: "We reduced our time-to-hire by 40% after implementing Trak. The interview question generation and scheduling features streamline our entire process.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Recruiters Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of hiring professionals who have transformed their recruiting process with Trak
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-white border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-6 relative">
                <div className="absolute top-3 right-3 text-gray-200 opacity-20">
                  <Quote className="h-20 w-20" />
                </div>
                
                <div className="mb-4 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 relative z-10">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-trak-purple text-white flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl border border-gray-200 shadow-md p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2,500+", label: "Recruiting Teams" },
              { number: "150,000+", label: "Candidates Evaluated" },
              { number: "40%", label: "Time-to-hire Reduction" }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-trak-purple mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
