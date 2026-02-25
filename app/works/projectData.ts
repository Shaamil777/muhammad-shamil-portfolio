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
        frontend?: string[];
        backend?: string[];
        database?: string[];
        apis?: string[];
        tools?: string[];
        [key: string]: string[] | undefined;
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
            { label: "View Code", href: "https://github.com/Shaamil777/E-com", type: "secondary" }
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
            { label: "Status", value: "Live" }
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
            { label: "View Live Demo", href: "https://opendooreducations.com/", type: "primary" },
            { label: "View Code", href: "https://github.com/Hemdan-MK/OpenDoor", type: "secondary" }
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


    amrithaheritage: {
        slug: "amrithaheritage",
        title: "Amritha",
        summary: "A premium heritage hotel platform featuring immersive virtual tours, elegant room showcases, dining experiences, and a modern booking interface for luxury hospitality.",

        badges: [
            { label: "Type", value: "Hospitality Platform" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Timeline", value: "2024-2025" },
            { label: "Status", value: "Live" }
        ],

        techStack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Django REST API",
            "PostgreSQL",
            "Cloudinary",
            "EmailJS",
            "Marzipano 360°",
            "Swiper.js"
        ],

        actions: [
            { label: "View Live Site", href: "https://amrithaheritage.com", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],

        heroImage: "/public/logoBlack.png",

        gallery: [
            { src: "/public/images/hero.webp", alt: "Heritage Hotel Exterior", type: "desktop" },
            { src: "/public/images/Gallery/dininghall.webp", alt: "Dining Hall", type: "desktop" },
            { src: "/public/images/room1-desktop.webp", alt: "Luxury Room", type: "desktop" },
            { src: "/public/images/Gallery/walkway.webp", alt: "Heritage Walkway", type: "mobile" }
        ],

        overview: {
            description: "Amritha Heritage is a luxury heritage hotel platform designed to showcase premium accommodations, dining experiences, and cultural ambiance through a modern digital interface. Built with React and TypeScript, the platform includes immersive virtual room tours, elegant UI animations, responsive layouts, and seamless booking inquiries powered by backend APIs.",
            audience: "Luxury travelers, heritage tourism enthusiasts, event planners, and guests seeking premium accommodation experiences.",
            goal: "To create an immersive online presence that reflects the elegance of heritage hospitality while enabling visitors to explore rooms, dining options, and services before making reservations."
        },

        features: [
            {
                icon: "🏛️",
                title: "360° Virtual Room Tours",
                description: "Interactive panoramic tours allowing users to explore rooms and spaces with seamless navigation and immersive viewing experience."
            },
            {
                icon: "🍽️",
                title: "Dining Experience Showcase",
                description: "Dedicated sections highlighting restaurant ambiance, menu offerings, and curated dining experiences available at the hotel."
            },
            {
                icon: "🛏️",
                title: "Room Showcase & Booking Inquiry",
                description: "Detailed room pages with amenities, images, pricing information, and inquiry forms for reservation requests."
            },
            {
                icon: "📧",
                title: "Automated Email Communication",
                description: "Email notifications for booking inquiries and contact submissions using EmailJS integration."
            },
            {
                icon: "🎨",
                title: "Premium UI & Animations",
                description: "Elegant visual design enhanced with smooth animations using Framer Motion for a refined user experience."
            },
            {
                icon: "🛒",
                title: "Interactive Reservation Flow",
                description: "User-friendly interface guiding visitors through room selection and inquiry submission processes."
            },
            {
                icon: "📱",
                title: "Fully Responsive Design",
                description: "Mobile-first layout ensuring seamless performance across smartphones, tablets, and desktops."
            },
            {
                icon: "⚡",
                title: "Performance Optimized",
                description: "Fast loading times achieved through modern build tools, optimized assets, and CDN-based image delivery."
            }
        ],

        stack: {
            frontend: [
                "React",
                "TypeScript",
                "Vite Build Tool",
                "Tailwind CSS",
                "Framer Motion",
                "Swiper.js",
                "Responsive Design"
            ],

            backend: [
                "Django REST Framework",
                "PostgreSQL Database",
                "API Integration",
                "CORS Configuration"
            ],

            database: [
                "PostgreSQL",
                "Cloudinary Media Storage"
            ],

            apis: [
                "Room Booking API",
                "EmailJS Service",
                "Cloudinary Image Delivery",
                "Contact Form API"
            ],

            tools: [
                "Vite Development Server",
                "ESLint",
                "Autoprefixer",
                "PostCSS",
                "Environment Configuration"
            ]
        },

        navigation: {
            prev: { slug: "opendoor", title: "Open Door" },
            next: { slug: "lapo", title: "Lapo" }
        }
    },


    lapo: {
        slug: "lapo",
        title: "Lapo Cart",
        summary: "A comprehensive Next.js e-commerce platform designed for election campaign materials and services, featuring interactive video showcases, shopping cart functionality, payment integration, and modern UI animations.",
        badges: [
            { label: "Type", value: "E-commerce Platform" },
            { label: "Role", value: "Full-Stack Frontend Developer" },
            { label: "Timeline", value: "2024-2025" },
            { label: "Status", value: "Live" }
        ],
        techStack: [
            "Next.js 15",
            "React 19 RC",
            "TypeScript",
            "Tailwind CSS",
            "Fluid Tailwind",
            "Razorpay Payment Gateway",
            "Axios",
            "Lucide React Icons",
            "Django REST API Backend",
            "Cloudinary Media Storage"
        ],
        actions: [
            { label: "View Live Site", href: "https://www.lapoelectioncart.com/", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/public/Logo.svg",
        gallery: [
            { src: "/public/intro.jpg", alt: "Platform Introduction", type: "desktop" },
            { src: "/public/helicopter-bg.jpg", alt: "Campaign Helicopter Service", type: "desktop" },
            { src: "/public/vr.webp", alt: "VR Campaign Experience", type: "desktop" },
            { src: "/public/healthatm.webp", alt: "Health ATM Service", type: "mobile" }
        ],
        overview: {
            description: "Election Cart is a modern e-commerce platform specifically designed for political campaigns in India. Built with Next.js 15 and React 19, it offers an innovative shopping experience for campaign materials, services, and digital tools. The platform features interactive video showcases, seamless payment integration via Razorpay, and a comprehensive cart system for political campaign needs.",
            audience: "Political candidates, campaign managers, election consultants, political parties, and campaign service providers across India from Panchayat to Parliamentary elections.",
            goal: "To revolutionize political campaign procurement by providing a centralized platform for innovative campaign tools, AI-powered services, and traditional campaign materials with modern e-commerce functionality."
        },
        features: [
            {
                icon: "🎥",
                title: "Interactive Video Hero Section",
                description: "Dynamic video showcase with 5 draggable campaign videos, hover-to-play functionality, and mobile carousel with touch gestures."
            },
            {
                icon: "🛒",
                title: "Advanced Shopping Cart System",
                description: "Full-featured cart with localStorage persistence, quantity management, and seamless checkout flow integrated with Razorpay."
            },
            {
                icon: "💳",
                title: "Razorpay Payment Integration",
                description: "Secure payment processing with support for multiple payment methods including UPI, cards, and net banking."
            },
            {
                icon: "🔐",
                title: "User Authentication & Profiles",
                description: "Complete user management system with login, signup, and profile management for personalized shopping experience."
            },
            {
                icon: "📦",
                title: "Campaign Packages & Services",
                description: "Comprehensive catalog of campaign packages including AI video generation, helicopter services, display vehicles, and digital tools."
            },
            {
                icon: "📱",
                title: "Fully Responsive Design",
                description: "Mobile-first approach with fluid Tailwind CSS ensuring optimal experience across all devices and screen sizes."
            },
            {
                icon: "⚡",
                title: "Performance Optimized",
                description: "Built with Next.js 15 and Turbopack for lightning-fast development and production performance with optimized images and lazy loading."
            },
            {
                icon: "🎨",
                title: "Modern UI/UX Design",
                description: "Contemporary design with smooth animations, custom fonts, and brand-consistent color scheme using Tailwind CSS."
            }
        ],
        stack: {
            frontend: [
                "Next.js 15.0.3",
                "React 19.0.0-rc",
                "TypeScript 5.x",
                "Tailwind CSS",
                "Fluid Tailwind",
                "Lucide React Icons",
                "React Icons",
                "CLSX Utility"
            ],
            backend: [
                "Django REST Framework",
                "API Integration via Axios",
                "Authentication Services",
                "Product & Campaign APIs"
            ],
            database: [
                "Backend Database (Django)",
                "LocalStorage for Cart Persistence",
                "Cloudinary Media Storage"
            ],
            apis: [
                "Razorpay Payment Gateway",
                "Campaign Management API",
                "Package Catalog API",
                "User Authentication API",
                "Order Management API",
                "Resource Upload API"
            ],
            tools: [
                "Next.js Development Server",
                "Turbopack Build Tool",
                "ESLint Code Quality",
                "PostCSS Processing",
                "Environment Configuration",
                "Vercel Deployment Ready"
            ]
        },
        navigation: {
            prev: { slug: "amrithaheritage", title: "Amritha Heritage" },
            next: { slug: "cafco", title: "Cafco" }
        }
    },
    cafco: {
        "slug": "cafco",
        "title": "CAFCOHOME",
        "summary": "A sophisticated e-commerce platform for premium furniture featuring minimalist design, interactive product showcases, curated collections, and immersive shopping experiences with modern web technologies.",
        "badges": [
            { "label": "Type", "value": "E-commerce Platform" },
            { "label": "Role", "value": "Frontend Developer" },
            { "label": "Timeline", "value": "2024-2025" },
            { "label": "Status", "value": "In Development" }
        ],
        "techStack": [
            "Next.js 16.1.1",
            "React 19.2.0",
            "TypeScript 5",
            "Tailwind CSS 3.4.0",
            "Framer Motion 12.23.24",
            "Swiper.js 12.0.3",
            "Lenis Smooth Scroll",
            "Lottie Animations",
            "Lucide React Icons"
        ],
        "actions": [
            { "label": "View Live Demo", "href": "#", "type": "primary" },
            { "label": "View Source Code", "href": "#", "type": "secondary" }
        ],
        "heroImage": "/public/herodesktop.jpg",
        "gallery": [
            { "src": "/public/herodesktop.jpg", "alt": "Modern Furniture Hero", "type": "desktop" },
            { "src": "/public/heromobile.jpg", "alt": "Mobile Hero Experience", "type": "mobile" }
        ],
        "overview": {
            "description": "CAFCOHOME is a premium furniture e-commerce platform built with Next.js 16 and React 19, showcasing modern luxury furniture through an immersive digital experience. The platform features sophisticated product categorization across 10 categories, 6 curated collections, and over 30 premium furniture pieces. Built with a minimalist luxury design philosophy, it incorporates advanced animations, smooth scrolling, and responsive design optimized for both desktop and mobile experiences.",
            "audience": "Interior design enthusiasts, luxury furniture buyers, home decorators, architects, and design professionals seeking premium furniture pieces for residential and commercial spaces.",
            "goal": "To create an elegant digital showroom that captures the essence of modern luxury furniture while providing seamless browsing and shopping experiences that convert visitors into customers through sophisticated design and user experience."
        },
        "features": [
            {
                "icon": "🏠",
                "title": "Curated Furniture Collections",
                "description": "Six distinct collections including Minimalist Luxe, Raw & Earthy, Dark Academy, Coastal Serenity, Urban Industrial, and Scandinavian Pure, each with unique design philosophies and carefully selected pieces."
            },
            {
                "icon": "🛋️",
                "title": "Comprehensive Product Catalog",
                "description": "Over 30 premium furniture pieces across 10 categories including Sofas, Tables, Chairs, Storage, Rugs, Lamps, Beds, Outdoor furniture, and Decor with detailed specifications and high-quality imagery."
            },
            {
                "icon": "🎨",
                "title": "Luxury Design System",
                "description": "Sophisticated color palette with travertine, warm obsidian, and aged bronze tones, custom typography using Hammersmith One and Playfair Display fonts, and architectural design elements throughout."
            },
            {
                "icon": "📱",
                "title": "Interactive Mobile Experience",
                "description": "Mobile-first responsive design with touch-friendly interfaces, swipeable offer cards, stacked card interactions, and optimized navigation for seamless mobile shopping experiences."
            },
            {
                "icon": "✨",
                "title": "Advanced Animations & Interactions",
                "description": "Smooth scroll implementation with Lenis, Framer Motion animations, Lottie integrations, hover effects, and cinematic transitions that enhance the luxury shopping experience."
            },
            {
                "icon": "🔍",
                "title": "Product Discovery Features",
                "description": "Advanced filtering by categories and collections, product search functionality, wishlist capabilities, quick add features, and curated product recommendations for enhanced discovery."
            },
            {
                "icon": "🛒",
                "title": "Modern Shopping Experience",
                "description": "Streamlined product cards with hover effects, quick add functionality, collection-based browsing, and intuitive navigation designed for luxury furniture shopping."
            },
            {
                "icon": "⚡",
                "title": "Performance Optimized",
                "description": "Next.js 16 App Router architecture, optimized images with Next.js Image component, code splitting, lazy loading, and fast loading times for superior user experience."
            }
        ],
        "stack": {
            "frontend": [
                "Next.js 16.1.1 (App Router)",
                "React 19.2.0 (Latest)",
                "TypeScript 5",
                "Tailwind CSS 3.4.0",
                "Framer Motion 12.23.24",
                "Swiper.js 12.0.3",
                "Lenis 1.3.17 (Smooth Scroll)"
            ],
            "ui_libraries": [
                "@lottiefiles/dotlottie-react 0.17.7",
                "Lucide React 0.554.0",
                "clsx 2.1.1",
                "tailwind-merge 3.4.0"
            ],
            "development": [
                "ESLint 9",
                "PostCSS 8.4.32",
                "Autoprefixer 10.4.16",
                "TypeScript ESLint"
            ],
            "fonts": [
                "Hammersmith One (Primary)",
                "Playfair Display (Secondary)",
                "Google Fonts Integration"
            ],
            "assets": [
                "Unsplash Image Integration",
                "Custom Hero Images",
                "Optimized Image Delivery"
            ]
        },
        "navigation": {
            "prev": { "title": "LAPO", "slug": "lapo" },
            "next": null
        }
    },


};

export function getProject(slug: string): ProjectData | undefined {
    return projects[slug];
}

export function getAllProjectSlugs(): string[] {
    return Object.keys(projects);
}

export default projects;
