import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
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
  ListFilter,
  Loader2,
  Upload,
  Send,
  Download
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

// Function to analyze job description text using keyword extraction
const analyzeJobDescription = async (text) => {
  try {
    // Simulate API call with text processing
    const keywordRegex = /\b(experience|years|skills|knowledge|proficiency|familiar|expert|degree|bachelor|master|phd|certification|qualified|requirements)\b/gi;
    const skillsRegex = /\b(react|angular|vue|javascript|typescript|python|java|c\+\+|node\.js|mongodb|sql|nosql|aws|azure|gcp|docker|kubernetes|ci\/cd|agile|scrum|kanban|product|management|strategy|research|design|communication|leadership)\b/gi;
    
    // Count keyword occurrences to determine importance
    const keywordMatches = text.match(keywordRegex) || [];
    const skillMatches = text.match(skillsRegex) || [];
    
    // Extract experience requirements
    const experienceRegex = /(\d+)[\+]?\s+years?/gi;
    const experienceMatches = text.match(experienceRegex) || [];
    
    // Extract education requirements
    const educationRegex = /\b(degree|bachelor|master|phd|bs|ms|mba)\b/gi;
    const educationMatches = text.match(educationRegex) || [];
    
    // Process results to structure like our mock data
    const requiredSkills = [...new Set(skillMatches.map(skill => {
      const skillStr = skill.toString().toLowerCase();
      return skillStr.charAt(0).toUpperCase() + skillStr.slice(1);
    }))]
      .slice(0, 5);
    
    const preferredSkills = [...new Set(skillMatches.map(skill => {
      const skillStr = skill.toString().toLowerCase();
      return skillStr.charAt(0).toUpperCase() + skillStr.slice(1);
    }))]
      .slice(5, 9);
    
    const experience = experienceMatches.length > 0 
      ? [`${experienceMatches[0]} of experience required`] 
      : ['Experience level not specified'];
    
    if (educationMatches.length > 0) {
      const educationStr = educationMatches[0].toString();
      experience.push(`${educationStr.charAt(0).toUpperCase() + educationStr.slice(1)} or equivalent required`);
    }
    
    return {
      requiredSkills,
      preferredSkills,
      experience,
      insights: "This role requires a combination of technical expertise and practical experience. The ideal candidate should have a strong foundation in the required skills with demonstrated experience in similar roles."
    };
  } catch (error) {
    console.error('Error analyzing job description:', error);
    return null;
  }
};

// Function to match resume with job description
const matchResumeWithJob = async (resumeText, jobText) => {
  try {
    // Extract skills from resume and job description
    const skillsRegex = /\b(react|angular|vue|javascript|typescript|python|java|c\+\+|node\.js|express|mongodb|sql|nosql|aws|azure|gcp|docker|kubernetes|ci\/cd|agile|scrum|kanban|product|management|strategy|research|design|communication|leadership)\b/gi;
    
    const resumeSkills = [...new Set((resumeText.match(skillsRegex) || []).map(s => s.toLowerCase()))];
    const jobSkills = [...new Set((jobText.match(skillsRegex) || []).map(s => s.toLowerCase()))];
    
    // Calculate match score based on skill overlap
    const matchedSkills = resumeSkills.filter(skill => jobSkills.includes(skill));
    const missingSkills = jobSkills.filter(skill => !resumeSkills.includes(skill));
    
    // Create partial skills (simulate skills where candidate has some but not extensive experience)
    const partialSkills = resumeSkills
      .filter(skill => jobSkills.includes(skill))
      .filter(() => Math.random() > 0.7) // Randomly select some matched skills as partial
      .slice(0, 2);
    
    // Calculate match percentage
    const matchPercentage = Math.min(
      Math.round((matchedSkills.length / Math.max(jobSkills.length, 1)) * 100),
      99
    );
    
    // Format skills for display with proper capitalization
    const formatSkills = (skills) => {
      return skills.map(skill => {
        const words = skill.split('.');
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('.');
      });
    };
    
    return {
      score: matchPercentage,
      matchedSkills: formatSkills(matchedSkills),
      missingSkills: formatSkills(missingSkills),
      partialSkills: formatSkills(partialSkills),
      recommendation: missingSkills.length > 0
        ? `This candidate has strong experience in ${matchedSkills.slice(0, 3).join(', ')} but lacks ${missingSkills.join(', ')}. Consider focusing interview questions on these gap areas.`
        : `This candidate shows an excellent match for the required skills. Focus interview questions on practical experience with ${matchedSkills.slice(0, 3).join(', ')}.`
    };
  } catch (error) {
    console.error('Error matching resume with job:', error);
    return null;
  }
};

// Function to generate interview questions based on job and candidate
const generateInterviewQuestions = async (jobDescription, candidateSkills, missingSkills) => {
  try {
    // Create question templates for different categories
    const technicalTemplates = [
      "Can you describe your experience with {skill}?",
      "What's the most challenging project you've worked on using {skill}?",
      "How do you stay current with developments in {skill}?",
      "Can you explain a technical problem you solved using {skill}?",
      "What best practices do you follow when working with {skill}?"
    ];
    
    const behavioralTemplates = [
      "Tell me about a time when you had to meet a tight deadline on a complex project.",
      "How do you approach learning new technologies and staying current in your field?",
      "Describe a situation where you had to collaborate with a difficult team member.",
      "Tell me about a project that failed and what you learned from it.",
      "How do you handle feedback and criticism of your work?"
    ];
    
    const skillGapTemplates = [
      "While you haven't worked directly with {skill}, what similar technologies are you familiar with?",
      "How would you approach learning {skill} if required for this position?",
      "What transferable skills do you have that would help you quickly adapt to using {skill}?",
      "Have you ever worked on projects related to {skill}, even if you weren't directly using it?",
      "What resources would you use to get up to speed with {skill}?"
    ];
    
    // Generate questions by filling in templates with actual skills
    const technical = candidateSkills.slice(0, 3).map(skill => {
      const template = technicalTemplates[Math.floor(Math.random() * technicalTemplates.length)];
      return template.replace('{skill}', skill);
    });
    
    const behavioral = behavioralTemplates.slice(0, 2);
    
    const skillGap = missingSkills.slice(0, 2).map(skill => {
      const template = skillGapTemplates[Math.floor(Math.random() * skillGapTemplates.length)];
      return template.replace('{skill}', skill);
    });
    
    return {
      technical,
      behavioral,
      skillGap: skillGap.length > 0 ? skillGap : ["No significant skill gaps identified. Focus on depth of experience instead."]
    };
  } catch (error) {
    console.error('Error generating interview questions:', error);
    return null;
  }
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
  const [customJobDescription, setCustomJobDescription] = useState('');
  const [questionTypes, setQuestionTypes] = useState({
    technical: true,
    behavioral: true,
    skillGap: true
  });
  const { toast } = useToast();

  // Function to handle job description analysis
  const handleAnalyzeJobDescription = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalyzedJob(null);
    
    // Simulate progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    
    try {
      // Process the active job description
      const jobText = customJobDescription || activeJob.description;
      const analysis = await analyzeJobDescription(jobText);
      
      // Continue processing after progress reaches 100%
      setTimeout(() => {
        setIsAnalyzing(false);
        
        // If using custom job, create a combined result
        const result = customJobDescription ? {
          title: "Custom Job Position",
          company: "Your Company",
          location: "Remote",
          description: customJobDescription,
          ...analysis
        } : {
          ...activeJob,
          ...analysis
        };
        
        setAnalyzedJob(result);
        
        toast({
          title: "Analysis Complete",
          description: "Job description has been analyzed successfully!",
          duration: 3000,
        });
      }, Math.max(0, (100 - analysisProgress) * 50));
    } catch (error) {
      console.error("Error in job analysis:", error);
      setIsAnalyzing(false);
      toast({
        title: "Analysis Error",
        description: "There was an error analyzing the job description.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  // Function to handle resume matching
  const handleMatchResume = async () => {
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
          return 100;
        }
        return prev + 3;
      });
    }, 30);
    
    try {
      // Process the resume and job description
      const result = await matchResumeWithJob(resumeText, jobDescription);
      
      // Continue processing after progress reaches 100%
      setTimeout(() => {
        setIsMatching(false);
        setMatchResult(result);
        
        toast({
          title: "Match Analysis Complete",
          description: `Resume match score: ${result.score}%`,
          duration: 3000,
        });
      }, Math.max(0, (100 - matchProgress) * 30));
    } catch (error) {
      console.error("Error in resume matching:", error);
      setIsMatching(false);
      toast({
        title: "Matching Error",
        description: "There was an error matching the resume with the job description.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  // Function to handle interview question generation
  const handleGenerateInterviewQuestions = async () => {
    setIsGeneratingQuestions(true);
    setGeneratedQuestions(null);
    
    try {
      // Generate questions based on selected job and candidate
      let candidateSkills, missingSkills;
      
      if (matchResult) {
        // Use results from resume matching if available
        candidateSkills = matchResult.matchedSkills;
        missingSkills = matchResult.missingSkills;
      } else {
        // Use mock data as fallback
        candidateSkills = activeCandidate.skills;
        missingSkills = activeCandidate.missingSkills;
      }
      
      const jobDesc = analyzedJob?.description || activeJob.description;
      const questions = await generateInterviewQuestions(jobDesc, candidateSkills, missingSkills);
      
      // Simulate API delay
      setTimeout(() => {
        setIsGeneratingQuestions(false);
        setGeneratedQuestions(questions);
        
        toast({
          title: "Questions Generated",
          description: "Interview questions have been generated based on the job and candidate profile!",
          duration: 3000,
        });
      }, 1000);
    } catch (error) {
      console.error("Error generating interview questions:", error);
      setIsGeneratingQuestions(false);
      toast({
        title: "Generation Error",
        description: "There was an error generating the interview questions.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  // Function to download results as JSON
  const handleDownloadResults = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Complete",
      description: `${filename} has been downloaded successfully.`,
      duration: 3000,
    });
  };

  // Scroll to demo section when component mounts (for "See Demo" button on hero)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#demo-section') {
      const demoSection = document.getElementById('demo-section');
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

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
                        Use a sample job or write your own:
                      </label>
                      <select 
                        id="job-select"
                        className="w-full border border-gray-300 rounded-md p-2"
                        onChange={(e) => {
                          const index = parseInt(e.target.value);
                          setActiveJob(jobDescriptions[index]);
                          setCustomJobDescription('');
                          setAnalyzedJob(null);
                        }}
                      >
                        <option value="0">Senior Full Stack Developer</option>
                        <option value="1">Product Manager</option>
                        <option value="-1">Custom Job Description</option>
                      </select>
                    </div>
                    
                    <Textarea 
                      placeholder="Paste job description here..."
                      className="w-full h-40 mb-4"
                      value={customJobDescription || activeJob.description}
                      onChange={(e) => {
                        if (e.target.value !== activeJob.description) {
                          setCustomJobDescription(e.target.value);
                        }
                      }}
                    />
                    
                    {isAnalyzing && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Analyzing job description...</p>
                        <Progress value={analysisProgress} className="w-full h-2" />
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleAnalyzeJobDescription}
                        disabled={isAnalyzing}
                        className="bg-trak-purple hover:bg-purple-700 flex-grow"
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
                      
                      {analyzedJob && (
                        <Button
                          variant="outline"
                          onClick={() => handleDownloadResults(analyzedJob, 'job-analysis.json')}
                          className="border-trak-purple text-trak-purple"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
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
                        onClick={handleAnalyzeJobDescription}
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
                              {analyzedJob.insights || "This role emphasizes a combination of technical expertise and practical experience. The ideal candidate should have a strong foundation in the required skills."}
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
                    
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleMatchResume}
                        disabled={isMatching}
                        className="bg-trak-purple hover:bg-purple-700 flex-grow"
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
                      
                      {matchResult && (
                        <Button
                          variant="outline"
                          onClick={() => handleDownloadResults(matchResult, 'resume-match.json')}
                          className="border-trak-purple text-trak-purple"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
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
                
                <div className="w-full lg:w-1/2 bg-gray-50 p-8 border-t lg:border-
