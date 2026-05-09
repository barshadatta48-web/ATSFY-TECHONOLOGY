/**
 * ATSFY Ecosystem intelligence Data
 */

export interface Venture {
  id: string;
  name: string;
  tagline: string;
  category: string;
  type: string;
  problem: string;
  solution: string;
  targetUsers: string[];
  liveUrl: string;
  pillarId: string;
}

export interface Pillar {
  id: string;
  name: string;
  description: string;
  ventures: string[];
  color: string;
}

export const COMPANY_INFO = {
  name: "ATSFY Technologies",
  tagline: "Ecosystem Intelligence Report",
  mission: "Nine AI Ventures. Three Pillars. One Shared Mission.",
  founded: "2024",
  origin: "NE India",
  venturesCount: 9,
  pillarsCount: 3,
  founder: {
    name: "Ayan Pal",
    role: "Founder & Managing Partner",
    bio: "Ayan Pal is a farmer-turned-tech-founder from Northeast India whose personal journey — navigating rural poverty, educational barriers, and systemic exclusion — became the founding thesis of ATSFY Technologies.",
    linkedin: "github.com/atsfy", // Using placeholder if not in OCR clearly, or extracted
    email: "info.atsfy@gmail.com"
  }
};

export const PILLARS: Pillar[] = [
  {
    id: "people-learning",
    name: "People & Learning",
    description: "Building human potential through accessible, personalised intelligence. Covers the full arc from education to healthcare access.",
    ventures: ["education-ai", "knowledge-enabler", "ashasethu"],
    color: "purple"
  },
  {
    id: "career-enterprise",
    name: "Career & Enterprise",
    description: "Enabling individuals to navigate the world of work with fair, transparent, and explainable AI tools.",
    ventures: ["atsfy-core", "ai-career-guide", "finance-xai"],
    color: "blue"
  },
  {
    id: "business-impact",
    name: "Business & Impact",
    description: "Empowering entrepreneurs, investors, and sustainability champions with AI that creates lasting economic and environmental value.",
    ventures: ["startuplens", "pitch-deck-pro", "green-to-gold"],
    color: "green"
  }
];

export const VENTURES: Venture[] = [
  {
    id: "education-ai",
    name: "Education AI",
    category: "Talent Readiness Platform",
    tagline: "Preparing the next generation through personalised AI learning",
    type: "Personalised teaching & assessment",
    problem: "Traditional education fails to personalise learning or surface skill gaps in real time, leaving students behind.",
    solution: "AI-powered teaching and formative assessment tools that adapt to each learner's pace, identify gaps instantly, and align curricula to real-world industry needs.",
    targetUsers: ["Students", "Educators", "Schools", "Upskilling Institutes"],
    liveUrl: "https://education-ai-assistant.lovable.app/",
    pillarId: "people-learning"
  },
  {
    id: "knowledge-enabler",
    name: "Knowledge Enabler",
    category: "AI Knowledge Assistant",
    tagline: "Turning complex information into contextual, actionable insight",
    type: "Conversational AI for complex knowledge",
    problem: "Information overload makes it nearly impossible to extract actionable knowledge efficiently in a fast-moving world.",
    solution: "A conversational AI assistant that distils complex topics into clear, contextual, and actionable knowledge — bridging the gap between raw information and real understanding.",
    targetUsers: ["Learners", "Researchers", "Corporate Teams", "Knowledge Workers"],
    liveUrl: "https://knowledge-enabler.lovable.app/chat",
    pillarId: "people-learning"
  },
  {
    id: "ashasethu",
    name: "AshaSethu",
    category: "AI-Assisted Healthcare",
    tagline: "Tripura's first AI-powered medical platform — bridging the healthcare divide",
    type: "AI-assisted medical startup (HISTORIC MILESTONE)",
    problem: "Rural and semi-urban communities in Northeast India face severe healthcare access gaps, with limited diagnostics and scarce specialist availability.",
    solution: "A historic milestone for Northeast India — AshaSethu is Tripura's first AI-assisted medical startup, delivering intelligent symptom assessment, diagnostic guidance, and personalised healthcare navigation.",
    targetUsers: ["Patients", "Rural Communities", "Frontline Health Workers", "Clinics", "Public Health Organisations"],
    liveUrl: "https://m-edtech-ashasetu.vercel.app/",
    pillarId: "people-learning"
  },
  {
    id: "atsfy-core",
    name: "ATSfy Core",
    category: "Core Hiring Intelligence Layer",
    tagline: "Transparent, bias-free AI hiring — end to end",
    type: "Bias-free AI hiring and talent matching",
    problem: "Hiring is opaque and biased — recruiters miss talent; candidates never know why they're rejected.",
    solution: "An AI-driven transparent hiring platform that gives recruiters precision-matched shortlists and candidates clear, explainable feedback.",
    targetUsers: ["HR Teams", "Recruiters", "Job Seekers", "Talent Acquisition Leaders"],
    liveUrl: "https://atsfycareerintelligentplatform.lovable.app/",
    pillarId: "career-enterprise"
  },
  {
    id: "ai-career-guide",
    name: "AI Career Guide",
    category: "Career Navigation & Growth Intelligence",
    tagline: "Your AI-powered career compass — from skill gaps to career goals",
    type: "Personalised career navigation and skill mapping",
    problem: "Most people lack a structured, personalised plan to navigate career transitions, skill gaps, and growth opportunities.",
    solution: "An intelligent career guidance platform that maps your current skills to future opportunities, recommends tailored learning paths, and helps you chart a clear roadmap.",
    targetUsers: ["Job Seekers", "Students", "Career Changers", "Working Professionals"],
    liveUrl: "https://ai-career-guide-tau.vercel.app/",
    pillarId: "career-enterprise"
  },
  {
    id: "finance-xai",
    name: "Finance XAI",
    category: "Explainable AI for Financial Growth",
    tagline: "Financial clarity for everyone — explained, not just recommended",
    type: "Explainable AI for personal and business finance",
    problem: "Financial advice is either inaccessible or opaque — people make costly decisions without understanding why.",
    solution: "Explainable AI (XAI) for personal and business finance that doesn't just recommend — it explains. Transparent budgeting, goal planning, and growth strategies.",
    targetUsers: ["Individuals", "Small Business Owners", "Financial Advisors", "Goal-Driven Savers"],
    liveUrl: "https://intelli-finance-insights--ayanpal0698.replit.app/",
    pillarId: "career-enterprise"
  },
  {
    id: "startuplens",
    name: "StartupLens",
    category: "Startup Validation & Founder Tools",
    tagline: "Clarity before capital — AI-powered startup scoring and investor matching",
    type: "AI startup scoring and investor matching",
    problem: "Founders lack objective validation; investors lack fast, data-driven deal screening tools.",
    solution: "An AI-powered scoring engine that evaluates startups across impact, market viability, and readiness — giving founders honest signals and investors intelligent deal flow analytics.",
    targetUsers: ["Early-Stage Founders", "Angel Investors", "Incubators", "Ecosystem Enablers"],
    liveUrl: "https://ventureval.lovable.app/",
    pillarId: "business-impact"
  },
  {
    id: "pitch-deck-pro",
    name: "Pitch Deck Pro",
    category: "Investor-Ready Storytelling Engine",
    tagline: "From idea to investor-ready pitch deck in minutes",
    type: "AI-powered investor-ready pitch deck builder",
    problem: "Most founders have a great idea but struggle to translate it into a compelling, professional pitch that investors actually respond to.",
    solution: "An AI-powered pitch deck builder that crafts investor-ready presentations — structured narrative, market sizing, traction slides, and visual storytelling.",
    targetUsers: ["Founders", "Early-Stage Startups", "Incubatees", "Student Entrepreneurs"],
    liveUrl: "https://pitchdeckanalyse.lovable.app",
    pillarId: "business-impact"
  },
  {
    id: "green-to-gold",
    name: "Green to Gold",
    category: "Carbon Footprint Intelligence Platform",
    tagline: "Turning climate accountability into measurable, verified action",
    type: "Carbon footprint intelligence and climate action",
    problem: "Businesses and individuals lack accessible, intelligent tools to accurately measure, understand, and meaningfully reduce their carbon footprint.",
    solution: "An AI-powered carbon intelligence platform — ATSFY Technologies' dedicated climate vertical — helping businesses and individuals measure their environmental impact.",
    targetUsers: ["Businesses", "Sustainability Officers", "Green Entrepreneurs", "Environmental Advocates"],
    liveUrl: "https://green-to-gold.vercel.app/",
    pillarId: "business-impact"
  }
];

export const VALUES = [
  { name: "Innovation", description: "We build what hasn't been built before — especially for communities that have been left out." },
  { name: "Integrity", description: "Every model, every output, every product decision is held to the highest ethical standard." },
  { name: "Collaboration", description: "We believe the best intelligence is collective — diverse teams build more equitable AI." },
  { name: "Ambition", description: "We aim not just to participate in India's AI story — but to define a chapter of it." },
  { name: "Rootedness", description: "Our most important stakeholder is the person in the village who has never been served by technology." },
  { name: "Accessibility", description: "AI that only works for the privileged is not good AI. We build for everyone." }
];

export const ETHICS_COMMITMENTS = [
  { name: "Explainability First", commitment: "Every AI decision can be traced and explained in plain language" },
  { name: "Bias Auditing", commitment: "Regular third-party audits of all models for demographic and socioeconomic bias" },
  { name: "Data Minimisation", commitment: "We collect only what is needed; never sell or misuse personal data" },
  { name: "Human-in-the-Loop", commitment: "Critical decisions (especially in healthcare and hiring) always include human review" },
  { name: "Open Accountability", commitment: "We publish our model limitations and known failure modes publicly" },
  { name: "Community Consent", commitment: "Communities whose data informs our models must benefit from the outputs" }
];

export const ROADMAP = [
  {
    phase: "PHASE 1 (CURRENT)",
    name: "Foundation & Product Launch",
    description: "All nine ventures live and serving initial user bases. Core infrastructure established. First revenue milestones achieved across hiring, education, and startup tools."
  },
  {
    phase: "PHASE 2 (2025–26)",
    name: "Scale & Cross-Product Intelligence",
    description: "Shared data models between ventures begin to create compounding intelligence. AshaSethu expands beyond Tripura into the broader Northeast. B2B partnerships established with government bodies."
  },
  {
    phase: "PHASE 3 (2026+)",
    name: "India-Wide Impact & Global Readiness",
    description: "ATSFY Technologies recognized as a leading responsible AI holding company in India. Carbon intelligence (Green to Gold) begins international expansion. Fund formation for the next generation of NE India founders."
  }
];
