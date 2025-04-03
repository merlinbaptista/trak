
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  MessageSquare, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  ArrowRight,
  Star,
  BarChart,
  ListFilter
} from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Trak in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Trak supercharges your recruiting workflow
          </p>
        </div>
        
        <Tabs defaultValue="job-analysis" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
            <TabsTrigger value="job-analysis" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white py-3">
              <FileText className="mr-2 h-5 w-5" />
              Job Analysis
            </TabsTrigger>
            <TabsTrigger value="candidate-matching" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white py-3">
              <Users className="mr-2 h-5 w-5" />
              Candidate Matching
            </TabsTrigger>
            <TabsTrigger value="interview-questions" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white py-3">
              <MessageSquare className="mr-2 h-5 w-5" />
              AI Interview Questions
            </TabsTrigger>
          </TabsList>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <TabsContent value="job-analysis" className="p-0 m-0">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">Job Description Analysis</h3>
                  <p className="text-gray-600 mb-6">
                    Trak instantly analyzes job descriptions to extract key requirements, skills, and qualifications, helping you understand what's truly important for the role.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Intelligent Extraction</p>
                        <p className="text-sm text-gray-600">Identifies key skills and requirements without manual review</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Skill Categorization</p>
                        <p className="text-sm text-gray-600">Organizes skills into categories (required vs. preferred)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Experience Insights</p>
                        <p className="text-sm text-gray-600">Highlights key experience requirements and level expectations</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-trak-purple hover:bg-purple-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-trak-purple mr-2" />
                        <span className="font-medium">Job Analysis</span>
                      </div>
                      <span className="bg-trak-softPurple text-trak-purple text-xs px-2 py-1 rounded-full">AI-Powered</span>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-3">Senior Full Stack Developer</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Required Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((skill, idx) => (
                              <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Preferred Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {['GraphQL', 'Docker', 'Kubernetes', 'CI/CD'].map((skill, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Experience & Education</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-500 mr-2" />
                              <span>5+ years of full-stack development</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-amber-500 mr-2" />
                              <span>BS in Computer Science or equivalent</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm font-medium text-gray-700 mb-2">AI Insights</p>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                            This role emphasizes both frontend and backend expertise with a strong focus on modern JavaScript frameworks and cloud technologies. The ideal candidate should have experience building scalable applications.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="candidate-matching" className="p-0 m-0">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">AI Resume Matching</h3>
                  <p className="text-gray-600 mb-6">
                    Trak compares candidate resumes with job descriptions to calculate match scores, identify skill gaps, and provide detailed compatibility insights.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Smart Matching Algorithm</p>
                        <p className="text-sm text-gray-600">Evaluates candidates on skills, experience, and qualifications</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Gap Analysis</p>
                        <p className="text-sm text-gray-600">Identifies missing skills and areas for improvement</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Candidate Ranking</p>
                        <p className="text-sm text-gray-600">Ranks and sorts applicants based on overall fit</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-trak-purple hover:bg-purple-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-trak-purple mr-2" />
                        <span className="font-medium">Candidate Match</span>
                      </div>
                      <div className="flex items-center">
                        <ListFilter className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">Filter</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold">Alex Johnson</h4>
                          <p className="text-sm text-gray-600">Senior Developer</p>
                        </div>
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-trak-purple text-white flex items-center justify-center font-bold text-lg mr-2">
                            87
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Strong Match
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Skills Match</p>
                          <div className="space-y-2">
                            {[
                              { skill: 'React', status: 'match' },
                              { skill: 'Node.js', status: 'match' },
                              { skill: 'TypeScript', status: 'match' },
                              { skill: 'MongoDB', status: 'partial' },
                              { skill: 'AWS', status: 'missing' }
                            ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <span className="text-sm">{item.skill}</span>
                                <span className={`flex items-center text-xs px-2 py-0.5 rounded-full ${
                                  item.status === 'match' ? 'bg-green-100 text-green-700' : 
                                  item.status === 'partial' ? 'bg-yellow-100 text-yellow-700' : 
                                  'bg-red-100 text-red-700'
                                }`}>
                                  {item.status === 'match' ? (
                                    <><CheckCircle className="h-3 w-3 mr-1" /> Match</>
                                  ) : item.status === 'partial' ? (
                                    <><AlertCircle className="h-3 w-3 mr-1" /> Partial</>
                                  ) : (
                                    <><XCircle className="h-3 w-3 mr-1" /> Missing</>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm font-medium text-gray-700 mb-2">Experience Match</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-trak-purple h-2.5 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>4 years (required: 5+ years)</span>
                            <span>80%</span>
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100">
                          <p className="text-sm font-medium text-gray-700 mb-2">AI Recommendation</p>
                          <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                            <p>This candidate shows strong technical skills with React and Node.js expertise. Consider focusing interview questions on AWS experience and scalability topics to assess gaps.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interview-questions" className="p-0 m-0">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">AI-Generated Interview Questions</h3>
                  <p className="text-gray-600 mb-6">
                    Trak creates tailored interview questions based on job requirements and candidate profiles, helping you conduct more effective and insightful interviews.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Role-Specific Questions</p>
                        <p className="text-sm text-gray-600">Questions tailored to specific job requirements and technologies</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Candidate-Tailored Approach</p>
                        <p className="text-sm text-gray-600">Questions designed to explore candidate strengths and address potential gaps</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Balanced Question Types</p>
                        <p className="text-sm text-gray-600">Mix of technical, behavioral, and situational questions</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="bg-trak-purple hover:bg-purple-700">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 text-trak-purple mr-2" />
                        <span className="font-medium">Interview Questions</span>
                      </div>
                      <span className="bg-trak-softPurple text-trak-purple text-xs px-2 py-1 rounded-full">
                        Senior Full Stack Developer
                      </span>
                    </div>
                    
                    <div className="p-4">
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-trak-purple mb-2">Technical Questions</h5>
                          <div className="space-y-3">
                            {[
                              "Can you describe a complex React component you've built and how you managed its state?",
                              "How do you optimize performance in a Node.js application when dealing with large datasets?",
                              "What TypeScript features do you find most valuable for maintaining code quality in large projects?"
                            ].map((question, idx) => (
                              <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100">
                          <h5 className="font-medium text-trak-purple mb-2">Behavioral Questions</h5>
                          <div className="space-y-3">
                            {[
                              "Tell me about a time when you had to meet a tight deadline on a complex project.",
                              "How do you approach learning new technologies and staying current in your field?"
                            ].map((question, idx) => (
                              <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-gray-100">
                          <h5 className="font-medium text-trak-purple mb-2">Skills Gap Questions</h5>
                          <div className="space-y-3">
                            {[
                              "While you haven't worked directly with AWS, what cloud technologies are you familiar with and how might you approach learning AWS services?",
                              "Can you describe your experience with NoSQL databases, particularly MongoDB?"
                            ].map((question, idx) => (
                              <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default DemoSection;
