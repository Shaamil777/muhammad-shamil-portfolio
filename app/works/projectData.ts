// All project data lives here — swap content to reuse the detail page template

export interface ProjectData {
    slug: string;
    title: string;
    summary: string;
    badges: { label: string; value: string }[];
    techStack: string[];
    actions: { label: string; href: string; type: 'primary' | 'secondary' }[];
    heroImage: string;
    gallery: { src: string; alt: string; type: 'desktop' | 'mobile' }[];
    overview: {
        description: string;
        audience: string;
        goal: string;
    };
    features: { icon: string; title: string; description: string }[];
    stack: {
        frontend: string[];
        backend: string[];
        database: string[];
        apis: string[];
        tools: string[];
    };
    navigation: {
        prev: { title: string; slug: string } | null;
        next: { title: string; slug: string } | null;
    };
}

const projects: Record<string, ProjectData> = {
    urbanworn: {
        slug: "urbanworn",
        title: "UrbanWorn",
        summary: "A full-stack e-commerce platform for fashion retail with comprehensive user management, product catalog, order processing, and admin dashboard.",
        badges: [
            { label: "Type", value: "E-commerce Platform" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2024" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "EJS",
            "JavaScript",
            "CSS3",
            "HTML5",
            "Razorpay",
            "Passport.js",
            "Multer"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/public/images/urbanworn-hero.jpg",
        gallery: [
            { src: "/public/images/dashboard.jpg", alt: "Admin Dashboard", type: "desktop" },
            { src: "/public/images/shop.jpg", alt: "Product Catalog", type: "desktop" },
            { src: "/public/images/cart.jpg", alt: "Shopping Cart", type: "mobile" },
            { src: "/public/images/checkout.jpg", alt: "Checkout Process", type: "desktop" }
        ],
        overview: {
            description: "UrbanWorn is a comprehensive fashion e-commerce platform built with Node.js and MongoDB. It features a complete shopping experience with user authentication, product management, shopping cart, order processing, payment integration, and an admin dashboard for business management.",
            audience: "Fashion retailers, online shoppers, and e-commerce businesses looking for a complete digital storefront solution.",
            goal: "To create a scalable, user-friendly e-commerce platform that handles the complete online shopping lifecycle from product browsing to order fulfillment."
        },
        features: [
            {
                icon: "👤",
                title: "User Authentication & Management",
                description: "Secure user registration, login with Google OAuth integration, profile management, and address book functionality."
            },
            {
                icon: "🛍️",
                title: "Product Catalog & Search",
                description: "Comprehensive product management with categories, detailed product pages, image galleries, and advanced filtering options."
            },
            {
                icon: "🛒",
                title: "Shopping Cart & Wishlist",
                description: "Persistent shopping cart, wishlist functionality, and seamless product quantity management across sessions."
            },
            {
                icon: "💳",
                title: "Payment Integration",
                description: "Multiple payment options including Cash on Delivery and Razorpay integration for secure online payments."
            },
            {
                icon: "📦",
                title: "Order Management",
                description: "Complete order lifecycle management with status tracking, order history, and return/refund processing."
            },
            {
                icon: "🎟️",
                title: "Coupon & Offers System",
                description: "Dynamic coupon management with percentage discounts, minimum order values, and time-based validity."
            },
            {
                icon: "💰",
                title: "Digital Wallet",
                description: "Built-in wallet system for refunds, credits, and transaction history with detailed financial tracking."
            },
            {
                icon: "📊",
                title: "Admin Dashboard",
                description: "Comprehensive admin panel for user management, product catalog, order processing, and sales reporting."
            },
            {
                icon: "📧",
                title: "Email Integration",
                description: "Automated email notifications for OTP verification, order confirmations, and account management."
            },
            {
                icon: "📱",
                title: "Responsive Design",
                description: "Mobile-first responsive design ensuring optimal user experience across all devices and screen sizes."
            }
        ],
        stack: {
            frontend: [
                "EJS (Embedded JavaScript Templates)",
                "CSS3",
                "JavaScript (ES6+)",
                "Bootstrap",
                "Responsive Design"
            ],
            backend: [
                "Node.js",
                "Express.js",
                "Express Session",
                "Passport.js (Google OAuth)",
                "Bcrypt (Password Hashing)",
                "Node-cron (Scheduled Tasks)"
            ],
            database: [
                "MongoDB",
                "Mongoose ODM"
            ],
            apis: [
                "Razorpay Payment Gateway",
                "Google OAuth 2.0",
                "Nodemailer (Email Service)",
                "RESTful API Architecture"
            ],
            tools: [
                "Multer (File Upload)",
                "PDFKit (Invoice Generation)",
                "Moment.js (Date Handling)",
                "Nodemon (Development)",
                "Dotenv (Environment Variables)"
            ]
        },
        navigation: {
            prev: null,
            next: { title: 'OPEN DOOR   ', slug: 'opendoor' }
        }
    },


    opendoor: {
        slug: "opendoor",
        title: "Open Door",
        summary: "A comprehensive educational consultancy platform that helps students discover and apply to colleges across various academic disciplines with expert guidance and streamlined application processes.",
        badges: [
            { label: "Type", value: "Educational Platform" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2024" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "Node.js",
            "Express.js",
            "EJS",
            "JavaScript",
            "CSS3",
            "HTML5",
            "Nodemailer",
            "Bootstrap",
            "AOS (Animate On Scroll)"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/public/assets/OPEN DOOR LOGO 1 CIRCLE.png",
        gallery: [
            { src: "/public/assets/about.webp", alt: "About Page", type: "desktop" },
            { src: "/public/assets/courses.webp", alt: "Course Catalog", type: "desktop" },
            { src: "/public/assets/colleges.webp", alt: "College Directory", type: "desktop" },
            { src: "/public/assets/form.webp", alt: "Student Registration", type: "mobile" }
        ],
        overview: {
            description: "Open Door Educations is a comprehensive educational consultancy platform built with Node.js and EJS templating. It provides students with access to extensive course catalogs across multiple disciplines, college information, and streamlined application processes. The platform features detailed course information, college partnerships, and automated email communication for student inquiries.",
            audience: "Students seeking higher education opportunities, educational consultants, colleges and universities looking to connect with prospective students.",
            goal: "To simplify the college selection and application process by providing comprehensive information about courses, colleges, and facilitating direct communication between students and educational institutions."
        },
        features: [
            {
                icon: "🎓",
                title: "Comprehensive Course Catalog",
                description: "Extensive database of undergraduate and postgraduate courses across 5 major disciplines: Business & Management, Engineering & Technology, Creative Arts & Design, Law & Humanities, and Medical & Healthcare."
            },
            {
                icon: "🏫",
                title: "College Directory & Partnerships",
                description: "Detailed information about partner colleges across major Indian cities including Bangalore, Chennai, Coimbatore, Kerala, and Mangalore with institutional profiles and program offerings."
            },
            {
                icon: "📝",
                title: "Student Registration System",
                description: "Streamlined registration form with comprehensive student information collection, program selection, and preferred college choices with real-time validation."
            },
            {
                icon: "📧",
                title: "Automated Email Communication",
                description: "Professional email notifications sent to administrators upon student registration with detailed student information and course preferences for follow-up."
            },
            {
                icon: "🎨",
                title: "Interactive User Interface",
                description: "Modern, responsive design with smooth animations, loading screens, and intuitive navigation across all device types for optimal user experience."
            },
            {
                icon: "🔍",
                title: "Advanced Course Filtering",
                description: "Categorized course browsing with detailed program information, duration, specializations, and career prospects for informed decision-making."
            },
            {
                icon: "📱",
                title: "Mobile-First Design",
                description: "Fully responsive platform optimized for mobile devices with touch-friendly interfaces and fast loading times across all screen sizes."
            },
            {
                icon: "🌟",
                title: "Professional Branding",
                description: "Cohesive brand identity with professional logo design, consistent color schemes, and polished visual elements throughout the platform."
            }
        ],
        stack: {
            frontend: [
                "EJS (Embedded JavaScript Templates)",
                "CSS3 with Custom Animations",
                "JavaScript (ES6+)",
                "Bootstrap Framework",
                "AOS (Animate On Scroll Library)",
                "Responsive Grid System"
            ],
            backend: [
                "Node.js Runtime Environment",
                "Express.js Web Framework",
                "Express Session Management",
                "CORS (Cross-Origin Resource Sharing)",
                "Path Module for File Handling"
            ],
            database: [
                "JSON-based Data Storage",
                "Static Asset Management",
                "File System Operations"
            ],
            apis: [
                "Nodemailer (Email Service)",
                "Gmail SMTP Integration",
                "RESTful API Architecture",
                "Form Data Processing"
            ],
            tools: [
                "Nodemon (Development Server)",
                "Dotenv (Environment Variables)",
                "Static File Serving",
                "Template Engine Integration",
                "Asset Optimization"
            ]
        },
        navigation: {
            prev: { slug: 'urbanworn', title: 'URBANWORN' },
            next: { slug: 'okalpha', title: 'OKALPHA' }
        }
    },


    okalpha: {
        slug: 'okalpha',
        title: 'OKALPHA',
        summary:
            'A business portfolio and booking website for a creative agency, featuring service showcase, project galleries, testimonials, and integrated appointment scheduling.',
        badges: [
            { label: 'Role', value: 'Frontend Developer' },
            { label: 'Timeline', value: '3 Weeks' },
            { label: 'Client', value: 'Creative Agency' },
            { label: 'Status', value: 'Live' },
        ],
        techStack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Calendly API'],
        actions: [
            { label: 'Live Demo', href: '#', type: 'primary' },
            { label: 'GitHub', href: '#', type: 'secondary' },
        ],
        heroImage: '/project-hero.png',
        gallery: [
            { src: '/project-desktop-1.png', alt: 'Agency homepage', type: 'desktop' },
            { src: '/project-desktop-2.png', alt: 'Services section', type: 'desktop' },
        ],
        overview: {
            description:
                'OkAlpha is a premium business website for a creative agency, designed to showcase their services, past work, and client testimonials while enabling visitors to book consultations directly.',
            audience:
                'A growing creative agency that needed a professional digital presence to convert website visitors into booked consultations.',
            goal:
                'Increase consultation bookings by 40% and establish a cohesive brand identity online.',
        },

        features: [
            {
                icon: '🎨',
                title: 'Visual Portfolio Gallery',
                description: 'Interactive project showcase with filtering by service category and smooth transitions.',
            },
            {
                icon: '📅',
                title: 'Consultation Booking',
                description: 'Embedded Calendly integration for instant appointment scheduling.',
            },
            {
                icon: '⭐',
                title: 'Client Testimonials',
                description: 'Animated testimonial carousel with client photos and detailed reviews.',
            },
            {
                icon: '🚀',
                title: 'Performance Optimized',
                description: 'Lighthouse score of 95+ with lazy-loaded images and optimized fonts.',
            },
        ],
        stack: {
            frontend: ['React 18', 'Next.js 14', 'Tailwind CSS', 'Framer Motion'],
            backend: ['Next.js API Routes'],
            database: [],
            apis: ['Calendly API', 'Cloudinary'],
            tools: ['Git', 'Vercel', 'Figma'],
        },

        navigation: {
            prev: { title: 'SUPERLINK', slug: 'superlink' },
            next: { title: 'KAROO', slug: 'karoo' },
        },
    },

    karoo: {
        slug: 'karoo',
        title: 'KAROO',
        summary:
            'A fintech mobile application built with React Native for peer-to-peer USDT-to-INR exchange, featuring real-time rates, secure KYC verification, and bank account management.',
        badges: [
            { label: 'Role', value: 'Mobile Developer' },
            { label: 'Timeline', value: '8 Weeks' },
            { label: 'Client', value: 'Startup' },
            { label: 'Status', value: 'In Development' },
        ],
        techStack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Express', 'CoinGecko API'],
        actions: [
            { label: 'GitHub', href: '#', type: 'primary' },
            { label: 'Case Study', href: '#', type: 'secondary' },
        ],
        heroImage: '/project-hero.png',
        gallery: [
            { src: '/project-mobile-1.png', alt: 'Exchange screen', type: 'mobile' },
            { src: '/project-mobile-2.png', alt: 'KYC verification flow', type: 'mobile' },
        ],
        overview: {
            description:
                'Karoo is a mobile-first fintech application enabling peer-to-peer cryptocurrency exchange, specifically USDT to INR conversion, with live market rates, KYC-verified transactions, and integrated bank account management.',
            audience:
                'Built for a fintech startup targeting users in India who need a reliable, compliant platform for crypto-to-fiat conversions.',
            goal:
                'Create a secure, regulation-ready mobile app that simplifies crypto-to-fiat exchange for everyday users.',
        },

        features: [
            {
                icon: '💱',
                title: 'Live Exchange Rates',
                description: 'Real-time USDT/INR rates from CoinGecko with auto-refresh and manual update.',
            },
            {
                icon: '🔐',
                title: 'KYC Verification',
                description: 'Multi-step identity verification with document upload and selfie matching.',
            },
            {
                icon: '🏦',
                title: 'Bank Management',
                description: 'Add, verify, and manage bank accounts for INR payouts.',
            },
            {
                icon: '📊',
                title: 'Transaction History',
                description: 'Complete exchange history with status tracking and receipt generation.',
            },
            {
                icon: '👁️',
                title: 'Balance Privacy',
                description: 'Toggle balance visibility with eye icon for privacy in public settings.',
            },
        ],
        stack: {
            frontend: ['React Native', 'Expo', 'React Navigation', 'Async Storage'],
            backend: ['Node.js', 'Express.js', 'JWT Auth', 'Multer'],
            database: ['MongoDB', 'Mongoose'],
            apis: ['CoinGecko API', 'Bank Verification API'],
            tools: ['Git', 'Expo Go', 'Postman', 'MongoDB Atlas'],
        },

        navigation: {
            prev: { title: 'OKALPHA', slug: 'okalpha' },
            next: null,
        },
    },
};

export function getProject(slug: string): ProjectData | undefined {
    return projects[slug];
}

export function getAllProjectSlugs(): string[] {
    return Object.keys(projects);
}

export default projects;
