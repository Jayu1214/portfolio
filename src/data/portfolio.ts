export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'cybersecurity' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  year: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description: string;
  achievements: string[];
  coursework: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: 'internship' | 'part-time' | 'full-time' | 'freelance';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'ai' | 'cybersecurity' | 'other';
  proficiency: 1 | 2 | 3 | 4 | 5; // 1 = Beginner, 5 = Expert
  icon?: string;
}

// Sample data for development
export const projects: Project[] = [
  {
    id: 'dual-portfolio',
    title: 'Dual-Mode Portfolio',
    description: 'Professional portfolio with cyber theme toggle',
    longDescription: 'A Next.js portfolio website featuring a unique dual-mode design that switches between professional and cyberpunk aesthetics. Built with TypeScript, Tailwind CSS, and Framer Motion.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    category: 'web',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/jay/portfolio',
    liveUrl: 'https://jay-portfolio.vercel.app',
    year: 2025,
  },
  {
    id: 'task-management',
    title: 'Smart Task Manager',
    description: 'AI-powered task management application',
    longDescription: 'A modern task management app with AI assistance for task prioritization and time estimation. Features real-time collaboration and smart notifications.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Socket.io'],
    category: 'web',
    status: 'in-progress',
    featured: true,
    githubUrl: 'https://github.com/jay/task-manager',
    year: 2024,
  },
  {
    id: 'cyber-security-scanner',
    title: 'Network Security Scanner',
    description: 'Automated vulnerability detection system',
    longDescription: 'A Python-based network security scanner that identifies vulnerabilities and provides detailed reports with remediation suggestions.',
    technologies: ['Python', 'Nmap', 'Scapy', 'Flask', 'SQLite'],
    category: 'cybersecurity',
    status: 'completed',
    featured: true,
    githubUrl: 'https://github.com/jay/security-scanner',
    year: 2024,
  },
];

export const education: Education[] = [
  {
    id: 'computer-science-degree',
    institution: 'University of Technology',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2021-09',
    endDate: '2025-06',
    gpa: '3.8/4.0',
    description: 'Comprehensive computer science program with focus on software engineering, cybersecurity, and artificial intelligence.',
    achievements: [
      'Dean\'s List - 6 semesters',
      'Outstanding Student in Cybersecurity',
      'Programming Contest - 2nd Place',
      'Undergraduate Research Award',
    ],
    coursework: [
      'Data Structures & Algorithms',
      'Software Engineering',
      'Database Management Systems',
      'Computer Networks',
      'Cybersecurity Fundamentals',
      'Machine Learning',
      'Web Development',
      'Mobile App Development',
    ],
  },
];

export const experience: Experience[] = [
  {
    id: 'software-intern',
    company: 'Tech Solutions Inc.',
    position: 'Software Development Intern',
    startDate: '2024-06',
    endDate: '2024-08',
    description: 'Developed and maintained web applications using modern technologies.',
    responsibilities: [
      'Built responsive web applications using React and Node.js',
      'Collaborated with senior developers on code reviews',
      'Implemented RESTful APIs and database optimizations',
      'Participated in agile development processes',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Git', 'Docker'],
    type: 'internship',
  },
  {
    id: 'freelance-developer',
    company: 'Freelance',
    position: 'Full-Stack Developer',
    startDate: '2023-01',
    endDate: 'Present',
    description: 'Providing web development services to small businesses and startups.',
    responsibilities: [
      'Design and develop custom web applications',
      'Implement responsive designs and user interfaces',
      'Set up hosting and deployment pipelines',
      'Provide ongoing maintenance and support',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    type: 'freelance',
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'frontend', proficiency: 4 },
  { id: 'nextjs', name: 'Next.js', category: 'frontend', proficiency: 4 },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', proficiency: 4 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', proficiency: 4 },
  { id: 'html', name: 'HTML5', category: 'frontend', proficiency: 5 },
  { id: 'css', name: 'CSS3', category: 'frontend', proficiency: 4 },
  { id: 'javascript', name: 'JavaScript', category: 'frontend', proficiency: 4 },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend', proficiency: 4 },
  { id: 'python', name: 'Python', category: 'backend', proficiency: 4 },
  { id: 'express', name: 'Express.js', category: 'backend', proficiency: 3 },
  { id: 'fastapi', name: 'FastAPI', category: 'backend', proficiency: 3 },
  
  // Database
  { id: 'mongodb', name: 'MongoDB', category: 'database', proficiency: 3 },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database', proficiency: 3 },
  { id: 'sqlite', name: 'SQLite', category: 'database', proficiency: 4 },
  
  // DevOps
  { id: 'git', name: 'Git', category: 'devops', proficiency: 4 },
  { id: 'docker', name: 'Docker', category: 'devops', proficiency: 3 },
  { id: 'vercel', name: 'Vercel', category: 'devops', proficiency: 4 },
  { id: 'netlify', name: 'Netlify', category: 'devops', proficiency: 3 },
  
  // Cybersecurity
  { id: 'nmap', name: 'Nmap', category: 'cybersecurity', proficiency: 3 },
  { id: 'wireshark', name: 'Wireshark', category: 'cybersecurity', proficiency: 3 },
  { id: 'kali', name: 'Kali Linux', category: 'cybersecurity', proficiency: 3 },
  
  // AI/ML
  { id: 'tensorflow', name: 'TensorFlow', category: 'ai', proficiency: 2 },
  { id: 'pytorch', name: 'PyTorch', category: 'ai', proficiency: 2 },
  { id: 'openai', name: 'OpenAI API', category: 'ai', proficiency: 3 },
];
