export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#About', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#Education', label: 'Education' },
  { href: '#Contact', label: 'Contact me' },
]

export const typedStrings = [
  'Full Stack Developer',
  'Frontend Developer',
  'Tech Enthusiast',
  'MERN Stack Developer',
  'Problem Solver',   
  ,
]

export const socialLinks = [
  { href: 'https://www.linkedin.com/in/mukhtar-sayyed/', label: 'linkedin', icon: "bx bxl-linkedin", style: { '--i': 10 } },
  { href: 'https://www.instagram.com/sd_mukhtar_007/', label: 'instagram', icon: "bx bxl-instagram", style: { '--i': 9 } },
  { href: 'https://wa.me/917709685469?text=Hi%20Muktar,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.', label: 'whatsapp', icon: "bx bxl-whatsapp", style: { '--i': 8 } },
]

export const skillWidgets = [
  {
    title: 'Programming Languages',
    count: 4,
    duration: '20s',
    dir: 1,
    coreType: 'code',
    items: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Cloud & Databases',
    count: 4,
    duration: '27s',
    dir: -1,
    coreType: 'stack',
    items: ['MongoDB', 'MySQL', 'DBMS', 'Cloud'],
  },
  {
    title: 'Tools & Frameworks',
    count: 7,
    duration: '18s',
    dir: 1,
    coreType: 'default',
    items: ['React.js', 'Express.js', 'Bootstrap', 'Node.js', 'Git & GitHub', 'Postman', 'API'],
  },
  {
    title: 'Areas of Interest',
    count: 4,
    duration: '30s',
    dir: -1,
    coreType: 'default',
    items: ['Full Stack Development', 'AI & Chatbots', 'UI/UX', 'Web Development'],
  },
]

export const projects = [
  {
    title: 'PayBridge',
    
    description:
      'Full-stack platform connecting users with verified agents for secure cash and digital money exchange.',
    tags: ['Node.js', 'Express.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Flutter', ],
    
    github: 'https://github.com/sdmukhtar7709/PayBridge',
    demo: 'https://github.com/sdmukhtar7709/CashLyt/releases/latest',
    
    
    image: '/assets/UPI-ATM-Cash.webp',
    alt: 'PayBridge project preview',
  },
  {
    title: 'Wanderlust',
    
    description:
      'Full-stack travel platform for Staying and listing places with authentication, maps, and reviews.',
    tags: ['Node.js', 'Express.js', 'Bootstrap', 'Cloudinary', 'Mapbox', 'MongoDB'],
    github: 'https://github.com/sdmukhtar7709/Destino-travel-marketplace',
    demo: 'https://destino-bwvq.onrender.com/',
    image: '/assets/airbnb.webp',
    alt: 'Wanderlust Airbnb clone preview',
  },
  {
    title: 'Online Food Order System',
    
    description:
      'Web-based food ordering platform with cart, dynamic menu, admin panel, and order management.',
    tags: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/sdmukhtar7709/food-order-system',
    
    image: '/assets/food.png',
    alt: 'Online food ordering system preview',
  },
  {
  title: 'ChatMinds - AI Studio',

  description:
    'Unified multi-AI chat platform with streaming responses, voice features, and responsive design.',

  tags: [
    'React',
    ,
    'JavaScript',
    'AI APIs',
    'Responsive Design'
  ],

  github: 'https://github.com/sdmukhtar7709/MultiAI-Chat-Studio',
  demo: 'https://chatminds-7p1t.onrender.com/',
  image: '/assets/aichat.jpeg',
  alt: 'ChatMinds — Multi-AI Chat Studio preview',
},
  {
    title: 'WorkBoard',
    description:
      'Collaborative project management platform for organizing tasks, teams, and workflows efficiently.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/sdmukhtar7709/WorkBoard',
    demo: 'https://work-board-zeta.vercel.app/login',
    image: '/assets/taskmag.avif',
    alt: 'WorkBoard project preview',
  },
]
