
import React from 'react';
import { 
  FileText, 
  UserCheck, 
  Users, 
  FileEdit, 
  Github, 
  MessageSquare, 
  Calendar, 
  Zap,
  BrainCircuit,
  Layout,
  BellRing,
  Bot,
  Chrome
} from 'lucide-react';

const FeatureCard = ({ icon, title, description, color }) => {
  const Icon = icon;
  
  return (
    <div className="feature-card group">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="text-white h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Features = () => {
  const coreFeatures = [
    {
      icon: FileText,
      title: "Job Description Analysis",
      description: "Extract and summarize key skills, qualifications, and experience from job listings.",
      color: "bg-trak-purple"
    },
    {
      icon: UserCheck,
      title: "AI Resume Matching",
      description: "Compare resumes with job descriptions to generate match scores and highlight gaps.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Candidate Shortlisting",
      description: "Rank applicants based on AI-driven compatibility insights and detailed reports.",
      color: "bg-green-500"
    },
    {
      icon: FileEdit,
      title: "Resume Enhancement",
      description: "Get real-time feedback on resume structure, content, and ATS optimization.",
      color: "bg-amber-500"
    },
    {
      icon: Github,
      title: "LinkedIn & GitHub Analysis",
      description: "Extract skills and evaluate coding expertise from candidate profiles and repositories.",
      color: "bg-gray-700"
    },
    {
      icon: MessageSquare,
      title: "AI Interview Questions",
      description: "Generate role-specific questions based on job requirements and candidate strengths.",
      color: "bg-indigo-500"
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Sync with calendars to suggest and book optimal interview slots automatically.",
      color: "bg-rose-500"
    },
    {
      icon: Zap,
      title: "One-Click Insights",
      description: "Get instant AI-generated strengths and weaknesses assessments for candidates.",
      color: "bg-orange-500"
    },
    {
      icon: Layout,
      title: "Recruiter Dashboard",
      description: "Manage job postings, candidate pipelines, and schedules in one interface.",
      color: "bg-cyan-500"
    },
    {
      icon: BellRing,
      title: "Smart Notifications",
      description: "Receive alerts for updates like new matches, scheduled interviews, and more.",
      color: "bg-pink-500"
    },
    {
      icon: Bot,
      title: "AI Chatbot Assistant",
      description: "Get instant hiring recommendations and answers to recruitment queries.",
      color: "bg-emerald-500"
    },
    {
      icon: Chrome,
      title: "Browser Integration",
      description: "Works as an overlay on job portals without requiring tab switching.",
      color: "bg-violet-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Recruiting Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trak combines AI-powered tools to streamline every aspect of your recruiting workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-trak-softPurple to-trak-softBlue rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <BrainCircuit className="w-full h-full text-trak-purple" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Advanced AI Technology</h3>
            <p className="text-lg mb-6">
              Trak leverages state-of-the-art AI models to analyze job descriptions, evaluate resumes, and provide intelligent hiring recommendations with unmatched accuracy.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Bias Detection', 'Diversity Hiring', 'Sentiment Analysis', 'Automated Outreach', 'Collaboration Tools'].map((tag, idx) => (
                <span key={idx} className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
