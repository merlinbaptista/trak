
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
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
  ListFilter,
  Loader2,
  Upload,
  Search,
  Clock,
  Send
} from 'lucide-react';

// Mock job descriptions for demo
const jobDescriptions = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    description: "We are looking for a Senior Full Stack Developer with 5+ years of experience in React, Node.js, TypeScript, and MongoDB. The ideal candidate should have experience with AWS, understanding of CI/CD pipelines, and strong problem-solving skills. Experience with GraphQL, Docker, and Kubernetes is a plus.",
    requiredSkills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    preferredSkills: ['GraphQL', 'Docker', 'Kubernetes', 'CI/CD'],
    experience: ['5+ years of full-stack development', 'BS in Computer Science or equivalent']
  },
  {
    title: "Product Manager",
    company: "InnovateTech",
    location: "New York, NY",
    description: "Seeking an experienced Product Manager to lead our SaaS product development. The ideal candidate will have 3+ years in product management for B2B software, excellent communication skills, and experience with agile methodologies. MBA or equivalent business degree preferred.",
    requiredSkills: ['Product Strategy', 'Agile Methodologies', 'User Research', 'Roadmapping', 'Stakeholder Management'],
    preferredSkills: ['JIRA', 'SQL', 'Data Analysis', 'UX Design'],
    experience: ['3+ years in product management', 'Experience in B2B SaaS', 'MBA or business degree preferred']
  }
];

// Mock candidate resumes for demo
const candidates = [
  {
    name: "Alex Johnson",
    title: "Senior Developer",
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express', 'Git', 'RESTful APIs'],
    experience: ["4 years as Full Stack Developer at TechStart", "2 years as Frontend Developer at WebCo"],
    education: "BS in Computer Science, Stanford University",
    matchScore: 87,
    missingSkills: ['AWS'],
    partialSkills: ['MongoDB'],
    strengths: "Strong frontend development skills, particularly with React and TypeScript.",
    weaknesses: "Limited experience with cloud services like AWS."
  },
  {
    name: "Jordan Smith",
    title: "Product Manager",
    skills: ['Product Strategy', 'Agile Methodologies', 'User Research', 'Roadmapping', 'A/B Testing', 'SQL Basics'],
    experience: ["3 years as Product Manager at SoftCo", "2 years as Associate PM at AppTech"],
    education: "MBA, Columbia Business School",
    matchScore: 92,
    missingSkills: [],
    partialSkills: ['Stakeholder Management'],
    strengths: "Excellent product strategy skills with proven track record of successful launches.",
    weaknesses: "Could improve on technical communication with engineering teams."
  }
];

// Mock interview questions
const interviewQuestions = {
  technical: [
    "Can you describe a complex React component you've built and how you managed its state?",
    "How do you optimize performance in a Node.js application when dealing with large datasets?",
    "What TypeScript features do you find most valuable for maintaining code quality in large projects?"
  ],
  behavioral: [
    "Tell me about a time when you had to meet a tight deadline on a complex project.",
    "How do you approach learning new technologies and staying current in your field?"
  ],
  skillGap: [
    "While you haven't worked directly with AWS, what cloud technologies are you familiar with and how might you approach learning AWS services?",
    "Can you describe your experience with NoSQL databases, particularly MongoDB?"
  ]
};

const DemoSection = () => {
  const [activeJob, setActiveJob] = useState(jobDescriptions[0]);
  const [activeCandidate, setActiveCandidate] = useState(candidates[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analyzedJob, setAnalyzedJob] = useState(null);
  const [isMatching, setIsMatching] = useState(false);
  const [matchProgress, setMatchProgress] = useState(0);
  const [matchResult, setMatchResult] = useState(null);
  const [isGeneratingQuestions, setIsGeneratingQuestions] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState(null);
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const { toast } = useToast();

  // Function to simulate job description analysis
  const analyzeJobDescription = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalyzedJob(null);
    
    // Simulate progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalyzedJob(activeJob);
          toast({
            title: "Analysis Complete",
            description: "Job description has been analyzed successfully!",
            duration: 3000,
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  // Function to simulate resume matching
  const matchResume = () => {
    if (!resumeText || !jobDescription) {
      toast({
        title: "Input Required",
        description: "Please enter both resume and job description texts.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsMatching(true);
    setMatchProgress(0);
    setMatchResult(null);
    
    // Simulate progress
    const interval = setInterval(() => {
      setMatchProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsMatching(false);
          setMatchResult({
            score: Math.floor(Math.random() * 30) + 70, // Random score between 70-99
            matchedSkills: ['JavaScript', 'React', 'Communication'],
            missingSkills: ['AWS', 'Docker'],
            partialSkills: ['Node.js'],
            recommendation: "This candidate shows strong technical skills with React expertise. Consider focusing interview questions on cloud technologies to assess gaps."
          });
          toast({
            title: "Match Analysis Complete",
            description: "Resume has been matched with the job description!",
            duration: 3000,
          });
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  // Function to simulate generating interview questions
  const generateInterviewQuestions = () => {
    setIsGeneratingQuestions(true);
    setGeneratedQuestions(null);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsGeneratingQuestions(false);
      setGeneratedQuestions(interviewQuestions);
      toast({
        title: "Questions Generated",
        description: "Interview questions have been generated based on the job and candidate profile!",
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <section id="demo-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Trak in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how Trak supercharges your recruiting workflow with these interactive demos
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
              Resume Matching
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
                    Paste a job description below or use our sample, and Trak will instantly analyze it to extract key requirements and skills.
                  </p>
                  
                  <div className="mb-6">
                    <div className="mb-4">
                      <label htmlFor="job-select" className="block text-sm font-medium text-gray-700 mb-1">
                        Or select a sample job:
                      </label>
                      <select 
                        id="job-select"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={(e) => {
                          const index = parseInt(e.target.value);
                          setActiveJob(jobDescriptions[index]);
                          setAnalyzedJob(null);
                        }}
                      >
                        <option value="0">Senior Full Stack Developer</option>
                        <option value="1">Product Manager</option>
                      </select>
                    </div>
                    
                    <Textarea 
                      placeholder="Paste job description here..."
                      className="w-full h-40 mb-4"
                      value={activeJob.description}
                      onChange={(e) => setActiveJob({...activeJob, description: e.target.value})}
                    />
                    
                    {isAnalyzing && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Analyzing job description...</p>
                        <Progress value={analysisProgress} className="w-full h-2" />
                      </div>
                    )}
                    
                    <Button 
                      onClick={analyzeJobDescription}
                      disabled={isAnalyzing}
                      className="bg-trak-purple hover:bg-purple-700 w-full"
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          Analyze Job Description
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mt-8">
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
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  {!analyzedJob ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <FileText className="h-16 w-16 text-gray-300 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-400 mb-2">No Job Analyzed Yet</h3>
                      <p className="text-gray-500 mb-6">Use the form on the left to analyze a job description and see the results here.</p>
                      <Button 
                        variant="outline" 
                        onClick={analyzeJobDescription}
                        className="border-trak-purple text-trak-purple"
                      >
                        Try Sample Analysis
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-fade-in">
                      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-trak-purple mr-2" />
                          <span className="font-medium">Job Analysis</span>
                        </div>
                        <span className="bg-trak-softPurple text-trak-purple text-xs px-2 py-1 rounded-full">AI-Powered</span>
                      </div>
                      
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-3">{analyzedJob.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{analyzedJob.company} • {analyzedJob.location}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Required Skills</p>
                            <div className="flex flex-wrap gap-2">
                              {analyzedJob.requiredSkills.map((skill, idx) => (
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
                              {analyzedJob.preferredSkills.map((skill, idx) => (
                                <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Experience & Education</p>
                            <div className="space-y-1 text-sm">
                              {analyzedJob.experience.map((exp, idx) => (
                                <div key={idx} className="flex items-center">
                                  <Star className="h-4 w-4 text-amber-500 mr-2" />
                                  <span>{exp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700 mb-2">AI Insights</p>
                            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                              {analyzedJob.title.includes("Developer") ? 
                                "This role emphasizes both frontend and backend expertise with a strong focus on modern JavaScript frameworks and cloud technologies. The ideal candidate should have experience building scalable applications." :
                                "This role requires strong product management skills with a focus on B2B SaaS products. The ideal candidate should have experience with agile methodologies and excellent stakeholder management abilities."}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="candidate-matching" className="p-0 m-0">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">AI Resume Matching</h3>
                  <p className="text-gray-600 mb-6">
                    Paste a resume and job description to see how Trak compares them and provides matching scores and insights.
                  </p>
                  
                  <div className="mb-6">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Resume Text:
                      </label>
                      <Textarea 
                        placeholder="Paste resume text here..."
                        className="w-full h-28 mb-2"
                        value={resumeText}
                        onChange={(e) => setResumeText(e.target.value)}
                      />
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                          onClick={() => setResumeText("Alex Johnson\nSenior Developer with 4 years experience\nSkills: React, Node.js, TypeScript, MongoDB, Express\nExperience: TechStart (4 years), WebCo (2 years)\nEducation: BS Computer Science, Stanford")}
                        >
                          <Upload className="h-3 w-3 mr-1" />
                          Use Sample Resume
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs text-gray-500"
                          onClick={() => setResumeText("")}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Description:
                      </label>
                      <Textarea 
                        placeholder="Paste job description here..."
                        className="w-full h-28 mb-2"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                      <div className="flex justify-between">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                          onClick={() => setJobDescription("Senior Full Stack Developer\nRequired: 5+ years experience with React, Node.js, TypeScript, MongoDB, AWS\nPreferred: GraphQL, Docker, Kubernetes\nResponsibilities: Design and develop web applications, collaborate with team, deploy to cloud")}
                        >
                          <Upload className="h-3 w-3 mr-1" />
                          Use Sample Job
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs text-gray-500"
                          onClick={() => setJobDescription("")}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                    
                    {isMatching && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Analyzing match...</p>
                        <Progress value={matchProgress} className="w-full h-2" />
                      </div>
                    )}
                    
                    <Button 
                      onClick={matchResume}
                      disabled={isMatching}
                      className="bg-trak-purple hover:bg-purple-700 w-full"
                    >
                      {isMatching ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing match...
                        </>
                      ) : (
                        <>
                          Calculate Match Score
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mt-8">
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
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  {!matchResult ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <Users className="h-16 w-16 text-gray-300 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-400 mb-2">No Match Analysis Yet</h3>
                      <p className="text-gray-500 mb-6">Use the form on the left to analyze how a resume matches a job description.</p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setResumeText("Alex Johnson\nSenior Developer with 4 years experience\nSkills: React, Node.js, TypeScript, MongoDB, Express\nExperience: TechStart (4 years), WebCo (2 years)\nEducation: BS Computer Science, Stanford");
                          setJobDescription("Senior Full Stack Developer\nRequired: 5+ years experience with React, Node.js, TypeScript, MongoDB, AWS\nPreferred: GraphQL, Docker, Kubernetes\nResponsibilities: Design and develop web applications, collaborate with team, deploy to cloud");
                          matchResume();
                        }}
                        className="border-trak-purple text-trak-purple"
                      >
                        Try Sample Match
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-fade-in">
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
                            <h4 className="font-bold">Candidate</h4>
                            <p className="text-sm text-gray-600">Based on submitted resume</p>
                          </div>
                          <div className="flex items-center">
                            <div className="h-12 w-12 rounded-full bg-trak-purple text-white flex items-center justify-center font-bold text-lg mr-2">
                              {matchResult.score}
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {matchResult.score >= 90 ? 'Excellent Match' : matchResult.score >= 75 ? 'Strong Match' : 'Potential Match'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Skills Match</p>
                            <div className="space-y-2">
                              {matchResult.matchedSkills.map((skill, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm">{skill}</span>
                                  <span className="flex items-center text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                                    <CheckCircle className="h-3 w-3 mr-1" /> Match
                                  </span>
                                </div>
                              ))}
                              
                              {matchResult.partialSkills.map((skill, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm">{skill}</span>
                                  <span className="flex items-center text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                                    <AlertCircle className="h-3 w-3 mr-1" /> Partial
                                  </span>
                                </div>
                              ))}
                              
                              {matchResult.missingSkills.map((skill, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm">{skill}</span>
                                  <span className="flex items-center text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                                    <XCircle className="h-3 w-3 mr-1" /> Missing
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700 mb-2">Experience Match</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-trak-purple h-2.5 rounded-full" 
                                style={{ width: `${matchResult.score - 10}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Experience relative to requirements</span>
                              <span>{matchResult.score - 10}%</span>
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-700 mb-2">AI Recommendation</p>
                            <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                              <p>{matchResult.recommendation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interview-questions" className="p-0 m-0">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">AI-Generated Interview Questions</h3>
                  <p className="text-gray-600 mb-6">
                    Generate customized interview questions based on job requirements and candidate profiles.
                  </p>
                  
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Job Position:
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2"
                        defaultValue="developer"
                      >
                        <option value="developer">Senior Full Stack Developer</option>
                        <option value="product">Product Manager</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Candidate:
                      </label>
                      <select 
                        className="w-full border border-gray-300 rounded-md p-2"
                        defaultValue="alex"
                      >
                        <option value="alex">Alex Johnson (87% Match)</option>
                        <option value="jordan">Jordan Smith (92% Match)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Question Types:</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="technical" className="mr-1" defaultChecked />
                          <label htmlFor="technical" className="text-sm">Technical</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="behavioral" className="mr-1" defaultChecked />
                          <label htmlFor="behavioral" className="text-sm">Behavioral</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="skills-gap" className="mr-1" defaultChecked />
                          <label htmlFor="skills-gap" className="text-sm">Skills Gap</label>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={generateInterviewQuestions}
                      disabled={isGeneratingQuestions}
                      className="bg-trak-purple hover:bg-purple-700 w-full"
                    >
                      {isGeneratingQuestions ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating Questions...
                        </>
                      ) : (
                        <>
                          Generate Interview Questions
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="space-y-4 mt-8">
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
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  {!generatedQuestions ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-400 mb-2">No Questions Generated Yet</h3>
                      <p className="text-gray-500 mb-6">Use the form on the left to generate interview questions tailored to the job and candidate.</p>
                      <Button 
                        variant="outline" 
                        onClick={generateInterviewQuestions}
                        className="border-trak-purple text-trak-purple"
                      >
                        Generate Sample Questions
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden animate-fade-in">
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
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold">Questions for Alex Johnson</h4>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-xs"
                            onClick={() => {
                              toast({
                                title: "Questions Saved",
                                description: "Interview questions have been saved to your dashboard.",
                                duration: 3000,
                              });
                            }}
                          >
                            Save Questions
                          </Button>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-trak-purple mb-2">Technical Questions</h5>
                            <div className="space-y-3">
                              {generatedQuestions.technical.map((question, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                  <p className="text-sm">{question}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <h5 className="font-medium text-trak-purple mb-2">Behavioral Questions</h5>
                            <div className="space-y-3">
                              {generatedQuestions.behavioral.map((question, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                  <p className="text-sm">{question}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <h5 className="font-medium text-trak-purple mb-2">Skills Gap Questions</h5>
                            <div className="space-y-3">
                              {generatedQuestions.skillGap.map((question, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                  <p className="text-sm">{question}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-100">
                            <div className="flex">
                              <Input 
                                placeholder="Add a custom question..."
                                className="mr-2"
                              />
                              <Button size="sm">
                                <Send className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
