import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const profile = {
  name: 'Adithya V',
  title: 'AI & Data Science Student | Data Science Intern',
  intro:
    'Passionate about data science and analytics, with a focus on applying data-driven insights to real-world problems. Strong foundation in Python, Java, Tableau, SQL, statistical analysis, data visualization, and predictive modeling.',
  email: 'adithyavelliyangiri24@gmail.com',
  phone: '+91 94890 36058',
  location: 'Nambiyur, Tamil Nadu',
  portfolioUrl: '',
  resumeUrl: '/Adithya_V_Resume.docx',
  photoUrl: '',
  theme: 'Blue/Cyan',
  education: [
    {
      degree: 'B.Tech Artificial Intelligence & Data Science',
      institution: 'Nandha Engineering College',
      location: 'Perundurai, India',
      start: '2023',
      end: '2027',
      status: 'Present - 3rd Year | CGPA: 7.8',
      description: 'Expected graduation in 2027.',
    },
    {
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'Kumutha Matriculation Higher Secondary School',
      location: 'Nambiyur, India',
      start: '',
      end: '',
      status: 'Percentage: 78.5%',
    },
  ],
  skills: [
    { name: 'Python', level: 88 },
    { name: 'Data Analysis', level: 82 },
    { name: 'Machine Learning', level: 75 },
    { name: 'React', level: 70 },
    { name: 'SQL', level: 72 },
  ],
  programmingLanguages: ['Python', 'Java', 'R', 'SQL'],
  frameworks: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  databases: ['SQL'],
  tools: ['Tableau', 'Dashboard Design', 'Data Visualization'],
  softSkills: [
    'Problem-Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Communication',
    'Time Management',
  ],
  certifications: [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      description: 'Completed with Elite Score.',
    },
    {
      title: 'Indoor Air Pollution',
      issuer: 'NPTEL',
    },
    {
      title: 'Tableau for Data Visualization and Analytics',
      issuer: 'Tableau',
    },
  ],
  internships: [
    {
      role: 'Data Science Intern',
      company: 'NxtLogic Software Solutions',
      start: '20 June 2025',
      end: '05 July 2025',
      description:
        'Completed a 14-day internship focused on foundational data science concepts, Python-based data analysis, visualization, and applying machine learning techniques to small-scale datasets for insight generation.',
    },
  ],
  projects: [
    {
      name: 'Smart Shoe for Foot Ulcer Detection',
      description:
        'Smart footwear to detect early signs of diabetic foot ulcers using pressure sensors and embedded IoT processing. Prototype integrates multiple sensors with an ESP32-based controller to capture gait and pressure data, process alerts, and enable preventive healthcare.',
      tech: ['ESP32', 'Pressure Sensors', 'IoT', 'Embedded C', 'Data Analysis'],
      details: {
        team: ['Adithya V', 'Kavya Sree B S', 'Samyuktha M N'],
        institution: 'Nandha Engineering College',
        highlights: [
          'Prototype / MVP developed with key components integrated and tested',
          'Cost-effective design (estimated total cost ≈ ₹3,600)',
          'Designed for early identification of foot ulcer risks and preventive interventions',
        ],
      },
    },
  ],
  achievements: [
    { title: 'State Level Silambam - 3rd Prize', issuer: 'Sports', description: 'Awarded 3rd place at the state Silambam championship.' },
    { title: 'District Level Volleyball - 3x Winner', issuer: 'Sports', description: 'Won district-level volleyball championship three times.' },
  ],
  codingProfiles: [
    {
      platform: 'LeetCode',
      title: 'LeetCode - adithya2429',
      url: 'https://leetcode.com/u/adithya2429/',
      username: 'adithya2429',
    },
  ],
  interests: [
    'Playing chess and other strategy-based games',
    'Playing cricket',
    'Exploring new technologies and analytical challenges',
  ],
  socials: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adithya-v-521606326/',
      icon: FaLinkedin,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/Adithya-24-ad',
      icon: FaGithub,
    },
  ],
};

export const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'Location', value: profile.location, href: null, icon: MapPin },
  { label: 'GitHub', value: 'Adithya-24-ad', href: 'https://github.com/Adithya-24-ad', icon: Github },
  {
    label: 'LinkedIn',
    value: 'adithya-v-521606326',
    href: 'https://www.linkedin.com/in/adithya-v-521606326/',
    icon: Linkedin,
  },
];

export const navItems = [
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Certifications',
  'Achievements',
  'Contact',
];
