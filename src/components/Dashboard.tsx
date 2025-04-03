
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  BarChart3, 
  Search,
  CheckCircle2,
  Clock,
  XCircle,
  MessageSquare,
  UserCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Recruiter Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your entire recruitment pipeline from one central location
          </p>
        </div>
        
        <div className="browser-window w-full max-w-6xl mx-auto">
          <div className="browser-header">
            <div className="flex">
              <div className="browser-circle bg-red-400"></div>
              <div className="browser-circle bg-yellow-400"></div>
              <div className="browser-circle bg-green-400"></div>
            </div>
            <div className="ml-4 bg-gray-200 rounded-full px-3 py-1 text-xs flex items-center justify-center flex-grow max-w-md mx-auto">
              app.trak.ai/dashboard
            </div>
          </div>
          
          <div className="p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-6 px-2">
              <div className="flex items-center gap-x-4">
                <img 
                  src="/lovable-uploads/d9d28319-0bb1-4967-992a-a421d208e28a.png" 
                  alt="Trak Logo" 
                  className="h-8 w-8"
                />
                <h3 className="font-bold text-lg">Trak Dashboard</h3>
              </div>
              
              <div className="flex items-center gap-x-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-white pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm w-48"
                  />
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  <UserCircle className="h-4 w-4 mr-1" />
                  Profile
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Open Positions', value: '24', icon: Briefcase, color: 'bg-blue-100 text-blue-600' },
                { label: 'Active Candidates', value: '156', icon: Users, color: 'bg-green-100 text-green-600' },
                { label: 'Interviews Today', value: '8', icon: Calendar, color: 'bg-amber-100 text-amber-600' },
                { label: 'Avg. Time to Hire', value: '18d', icon: Clock, color: 'bg-purple-100 text-purple-600' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`p-2 rounded-lg ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Tabs defaultValue="candidates">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="candidates" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white">
                    <Users className="h-4 w-4 mr-2" />
                    Candidates
                  </TabsTrigger>
                  <TabsTrigger value="jobs" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Jobs
                  </TabsTrigger>
                  <TabsTrigger value="interviews" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Interviews
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="data-[state=active]:bg-trak-purple data-[state=active]:text-white">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex gap-x-2">
                  <Button size="sm" variant="outline" className="text-xs">Filter</Button>
                  <Button size="sm" className="bg-trak-purple hover:bg-purple-700 text-xs">+ Add New</Button>
                </div>
              </div>
              
              <TabsContent value="candidates" className="mt-0">
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="min-w-full divide-y divide-gray-200">
                    <div className="bg-gray-50 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-4">Candidate</div>
                        <div className="col-span-2">Position</div>
                        <div className="col-span-2">Match Score</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2">Actions</div>
                      </div>
                    </div>
                    
                    <div className="bg-white divide-y divide-gray-100">
                      {[
                        { name: 'Sarah Johnson', position: 'Senior Developer', score: 94, status: 'Interview' },
                        { name: 'Michael Chen', position: 'Senior Developer', score: 87, status: 'Screening' },
                        { name: 'Emily Rodriguez', position: 'UX Designer', score: 92, status: 'Interview' },
                        { name: 'David Kim', position: 'Product Manager', score: 78, status: 'Applied' }
                      ].map((candidate, idx) => (
                        <div key={idx} className="px-6 py-4 whitespace-nowrap">
                          <div className="grid grid-cols-12 gap-4 items-center">
                            <div className="col-span-4 flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-medium text-gray-600">
                                {candidate.name.charAt(0)}
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium">{candidate.name}</p>
                                <p className="text-xs text-gray-500">Applied Apr 2, 2025</p>
                              </div>
                            </div>
                            <div className="col-span-2 text-sm">{candidate.position}</div>
                            <div className="col-span-2">
                              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                                candidate.score > 90 ? 'bg-green-100 text-green-800' :
                                candidate.score > 80 ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {candidate.score}%
                              </span>
                            </div>
                            <div className="col-span-2">
                              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                candidate.status === 'Interview' ? 'bg-purple-100 text-purple-800' :
                                candidate.status === 'Screening' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {candidate.status}
                              </span>
                            </div>
                            <div className="col-span-2 flex space-x-2">
                              <button className="p-1 rounded-full hover:bg-gray-100">
                                <MessageSquare className="h-4 w-4 text-gray-500" />
                              </button>
                              <button className="p-1 rounded-full hover:bg-gray-100">
                                <Calendar className="h-4 w-4 text-gray-500" />
                              </button>
                              <button className="p-1 rounded-full hover:bg-gray-100">
                                <CheckCircle2 className="h-4 w-4 text-gray-500" />
                              </button>
                              <button className="p-1 rounded-full hover:bg-gray-100">
                                <XCircle className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                    <p className="text-xs text-gray-500">Showing 4 of 156 candidates</p>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs rounded border border-gray-300 bg-white">Previous</button>
                      <button className="px-3 py-1 text-xs rounded border border-gray-300 bg-trak-purple text-white">1</button>
                      <button className="px-3 py-1 text-xs rounded border border-gray-300 bg-white">2</button>
                      <button className="px-3 py-1 text-xs rounded border border-gray-300 bg-white">3</button>
                      <button className="px-3 py-1 text-xs rounded border border-gray-300 bg-white">Next</button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="jobs">
                <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-500">Jobs tab content would appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="interviews">
                <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-500">Interviews tab content would appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="flex items-center justify-center h-64 bg-white rounded-lg border border-gray-200">
                  <p className="text-gray-500">Analytics tab content would appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
