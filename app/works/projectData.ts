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
            prev: { title: 'OPEN DOOR', slug: 'opendoor' },
            next: { title: 'LAPO', slug: 'lapo' }
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
            { src: "/projects/opendoor/hero-section.webp", alt: "Hero Section", type: "desktop" },
            { src: "/projects/opendoor/about.webp", alt: "About Page", type: "desktop" },
            { src: "/projects/opendoor/courses.webp", alt: "Course Catalog", type: "desktop" },
            { src: "/projects/opendoor/collages.webp", alt: "College Directory", type: "desktop" },
            { src: "/projects/opendoor/vision mission.webp", alt: "Vision & Mission", type: "desktop" },
            { src: "/projects/opendoor/phone-view.webp", alt: "Mobile View", type: "mobile" }
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
            prev: { title: 'AMRITHA', slug: 'amrithaheritage' },
            next: { title: 'URBANWORN', slug: 'urbanworn' }
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
            { src: "/projects/amritha/02.webp", alt: "Heritage Hotel Exterior", type: "desktop" },
            { src: "/projects/amritha/01.webp", alt: "Room Showcase & Booking", type: "desktop" },
            { src: "/projects/amritha/03.webp", alt: "Restaurant & Dining", type: "desktop" }
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
            prev: { title: 'DEVLOOM', slug: 'devloom' },
            next: { title: 'OPEN DOOR', slug: 'opendoor' }
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
            { src: "/projects/lapo/01.webp", alt: "Hero Section & Campaign Showcase", type: "desktop" },
            { src: "/projects/lapo/02.webp", alt: "Popular Packages", type: "desktop" },
            { src: "/projects/lapo/03.webp", alt: "About & Company Info", type: "desktop" },
            { src: "/projects/lapo/04.webp", alt: "Login & Authentication", type: "desktop" }
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
            prev: { slug: "urbanworn", title: "UrbanWorn" },
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
            { "src": "/projects/cafco/01.webp", "alt": "Modern Furniture Hero", "type": "desktop" },
            { "src": "/projects/cafco/02.webp", "alt": "Shop by Category", "type": "desktop" },
            { "src": "/projects/cafco/03.webp", "alt": "Trending Interiors & Products", "type": "desktop" },
            { "src": "/projects/cafco/04.webp", "alt": "Curated Collections", "type": "desktop" }
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
            "next": { "title": "EVENTO", "slug": "evento" }
        }
    },
    evento: {
        slug: "evento",
        title: "Evento",
        summary: "A premium convention center website showcasing luxury event venues with modern design, interactive galleries, and comprehensive facility information for hosting memorable events.",
        badges: [
            { label: "Type", value: "Convention Center Website" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2025" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "React.js",
            "Vite",
            "Tailwind CSS",
            "JavaScript (ES6+)",
            "Lenis (Smooth Scrolling)",
            "Lucide React",
            "CSS3",
            "HTML5"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "https://github.com/your-username/evento-convention", type: "secondary" }
        ],
        heroImage: "/public/images/evento-hero.jpg",
        gallery: [
            { src: "/public/images/hero-carousel.jpg", alt: "Grand Convention Hall", type: "desktop" },
            { src: "/public/images/luxury-seating.jpg", alt: "Premium Auditorium Seating", type: "desktop" },
            { src: "/public/images/stage-lighting.jpg", alt: "Dynamic Stage Setup", type: "desktop" },
            { src: "/public/images/gallery-showcase.jpg", alt: "Event Gallery", type: "mobile" }
        ],
        overview: {
            description: "Evento Convention Center is a sophisticated website showcasing a premium event venue with state-of-the-art facilities. Built with React and Tailwind CSS, it features immersive hero carousels, interactive galleries, detailed facility showcases, and seamless contact integration to attract and inform potential clients.",
            audience: "Event planners, corporate clients, wedding organizers, and individuals seeking premium venues for conferences, celebrations, and special occasions.",
            goal: "To create an elegant, user-friendly platform that showcases the convention center's luxury amenities and facilitates easy booking inquiries while providing an immersive digital experience."
        },
        features: [
            {
                icon: "🎭",
                title: "Interactive Hero Carousel",
                description: "Dynamic slideshow featuring stunning venue imagery with smooth transitions and compelling call-to-action buttons for different event types."
            },
            {
                icon: "🏛️",
                title: "Venue Showcase",
                description: "Comprehensive introduction section highlighting the convention center's architecture, ambiance, and premium positioning in the market."
            },
            {
                icon: "🎵",
                title: "Advanced Facility Features",
                description: "Detailed presentation of state-of-the-art sound systems, luxury seating, dynamic lighting, and premium interior design elements."
            },
            {
                icon: "🖼️",
                title: "3D Gallery Experience",
                description: "Interactive circular gallery with drag-to-scroll functionality, perspective transforms, and lightbox viewing for immersive image exploration."
            },
            {
                icon: "🎬",
                title: "Video Showcase Integration",
                description: "Embedded promotional video with autoplay functionality to provide virtual tours and highlight the venue's capabilities."
            },
            {
                icon: "📍",
                title: "Contact & Location Hub",
                description: "Comprehensive contact section with interactive forms, Google Maps integration, and detailed venue information for easy communication."
            },
            {
                icon: "📱",
                title: "Responsive Design",
                description: "Mobile-first responsive layout ensuring optimal viewing experience across all devices with touch-friendly interactions."
            },
            {
                icon: "🎨",
                title: "Premium UI/UX",
                description: "Elegant dark theme with gold accents, smooth animations, and sophisticated typography creating a luxury brand experience."
            },
            {
                icon: "⚡",
                title: "Performance Optimized",
                description: "Built with Vite for fast loading times, optimized images, and smooth scrolling powered by Lenis for enhanced user experience."
            },
            {
                icon: "🔗",
                title: "Social Integration",
                description: "Social media links and sharing capabilities to extend the venue's digital presence and facilitate word-of-mouth marketing."
            }
        ],
        stack: {
            frontend: [
                "React.js (Functional Components & Hooks)",
                "Tailwind CSS (Utility-First Styling)",
                "JavaScript ES6+ (Modern Syntax)",
                "CSS3 (Custom Animations & Transitions)",
                "HTML5 (Semantic Structure)"
            ],
            libraries: [
                "Lenis (Smooth Scrolling Library)",
                "Lucide React (Icon Components)",
                "React Hooks (useState, useEffect, useRef)",
                "CSS Grid & Flexbox (Layout Systems)"
            ],
            tools: [
                "Vite (Build Tool & Dev Server)",
                "ESLint (Code Quality)",
                "npm (Package Management)",
                "Git (Version Control)"
            ],
            features: [
                "Responsive Design (Mobile-First Approach)",
                "Interactive Galleries (Drag & Touch Support)",
                "Form Handling (Contact Forms)",
                "Google Maps Integration",
                "YouTube Video Embedding",
                "Smooth Scrolling & Animations"
            ]
        },
        navigation: {
            prev: { title: 'CAFCO', slug: 'cafco' },
            next: { title: 'AI DOC CHAT', slug: 'aidocchat' }
        }
    },
    aidocchat: {
        slug: "aidocchat",
        title: "AI Doc Chat",
        summary: "An AI-powered documentation chat application using RAG (Retrieval-Augmented Generation) to provide context-aware answers from uploaded documents.",
        badges: [
            { label: "Type", value: "AI Application" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2024" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "NestJS",
            "TypeScript",
            "Next.js 14",
            "React",
            "Tailwind CSS",
            "Google Gemini 2.5 Flash",
            "Gemini Embedding",
            "ChromaDB"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/projects/aidocchat/1.png",
        gallery: [
            { src: "/projects/aidocchat/1.png", alt: "AI Doc Chat Interface", type: "desktop" },
            { src: "/projects/aidocchat/2.png", alt: "Document Upload & Processing", type: "desktop" }
        ],
        overview: {
            description: "AI Doc Chat is an advanced documentation chat application built with RAG architecture. It allows users to upload documents (PDF, Markdown, Text) and ask questions about them. The system parses, chunks, and embeds the document content into ChromaDB. When a question is asked, it retrieves the most relevant chunks using semantic search and uses Google Gemini 2.5 Flash to generate accurate, context-grounded answers, significantly reducing AI hallucinations.",
            audience: "Developers, researchers, students, and professionals who need to quickly extract information and insights from large documents without reading them entirely.",
            goal: "To solve the hallucination problem in standard LLMs by grounding answers in user-provided context through a robust Retrieval-Augmented Generation pipeline."
        },
        features: [
            {
                icon: "📄",
                title: "Document Upload & Parsing",
                description: "Support for various document formats including PDFs, Markdown, and text files with intelligent text extraction."
            },
            {
                icon: "🧠",
                title: "Intelligent Chunking",
                description: "Smart document chunking with overlap to preserve context across boundaries and improve retrieval accuracy."
            },
            {
                icon: "🔍",
                title: "Semantic Retrieval",
                description: "Advanced semantic search using Gemini Embedding model and ChromaDB for highly relevant context retrieval."
            },
            {
                icon: "💬",
                title: "AI Chat Interface",
                description: "Interactive chat UI with source attribution, showing exactly which document sections informed the answer."
            },
            {
                icon: "📊",
                title: "Processing Status Tracking",
                description: "Real-time visual feedback on document processing states (parsing, embedding, ready)."
            },
            {
                icon: "💾",
                title: "Persistent State",
                description: "Maintains chat history and document state across sessions for continuous workflow."
            },
            {
                icon: "🛡️",
                title: "Error Handling",
                description: "Robust error handling and fallback responses to gracefully manage failures or unanswerable queries."
            }
        ],
        stack: {
            frontend: [
                "Next.js 14",
                "React",
                "Tailwind CSS"
            ],
            backend: [
                "NestJS",
                "TypeScript"
            ],
            database: [
                "ChromaDB (Vector Storage)"
            ],
            apis: [
                "Google Gemini 2.5 Flash API",
                "Gemini Embedding API"
            ],
            tools: [
                "RAG Pipeline Architecture",
                "Vector Embeddings",
                "Semantic Search Workflow"
            ]
        },
        navigation: {
            prev: { title: 'EVENTO', slug: 'evento' },
            next: { title: 'OJAS THEERAM', slug: 'ojastheeram' }
        }
    },
    ojastheeram: {
        slug: "ojastheeram",
        title: "Ojas Theeram",
        summary: "A premium, cinematic website for an Ayurvedic wellness clinic featuring scroll-driven animations, WebGL effects, WhatsApp booking integration, and comprehensive SEO — built with Next.js 16, React 19, Framer Motion, and Tailwind CSS v4.",
        badges: [
            { label: "Type", value: "Healthcare — Ayurvedic Wellness" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2025" },
            { label: "Status", value: "Live" }
        ],
        techStack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "Lenis",
            "WebGL (react-water-wave)",
            "Lucide React",
            "WhatsApp API",
            "Google Maps",
            "JSON-LD Structured Data"
        ],
        actions: [
            { label: "View Live Site", href: "https://ojastheeram.com", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/projects/Ojas/1.png",
        gallery: [
            { src: "/projects/Ojas/1.png", alt: "Hero Section — Full-screen cinematic video with staggered text reveal", type: "desktop" },
            { src: "/projects/Ojas/2.png", alt: "Scroll-Driven Experience — Circle reveal & shutter wipe transitions", type: "desktop" },
            { src: "/projects/Ojas/3.png", alt: "Treatments & Wellness Packages", type: "desktop" },
            { src: "/projects/Ojas/4.png", alt: "Doctor Profile — Split-screen parallax entry", type: "desktop" },
            { src: "/projects/Ojas/5.png", alt: "Products & WhatsApp Integration", type: "desktop" },
            { src: "/projects/Ojas/6.png", alt: "Location & Contact Section", type: "desktop" }
        ],
        overview: {
            description: "Ojas Theeram is a premium, cinematic website for an authentic Ayurvedic wellness clinic in Bengaluru. The site showcases the clinic's Panchakarma treatments, individual therapies, wellness packages, doctor profiles, and products — all with a luxury editorial aesthetic and high-end scroll-driven animations. Built as a fully static, SEO-optimized Next.js application with 13 distinct homepage sections, each featuring unique animation systems including clip-path circle reveals, 5-column shutter wipe transitions, and mouse-tracking parallax with three independent depth layers.",
            audience: "Health-conscious individuals seeking authentic Ayurvedic treatments, wellness tourists visiting Bengaluru, and patients looking for Panchakarma therapy, specialized care, and premium wellness experiences.",
            goal: "To create an immersive, luxury digital presence that reflects the clinic's premium positioning, drives WhatsApp-based booking inquiries, and ranks strongly in local healthcare search results through comprehensive SEO implementation."
        },
        features: [
            {
                icon: "🎬",
                title: "Cinematic Scroll-Driven Animations",
                description: "13 homepage sections with unique scroll-driven effects including clip-path circle reveals, 5-column shutter wipe transitions, spring-physics parallax, and idle floating leaf animations."
            },
            {
                icon: "🌊",
                title: "WebGL Water Ripple Effect",
                description: "Interactive WebGL water ripple effect on background images using react-water-wave, providing immersive interactivity on desktop with graceful mobile degradation."
            },
            {
                icon: "📱",
                title: "2-Step WhatsApp Booking Modal",
                description: "Animated booking form that collects personal details and service selection, then generates pre-formatted WhatsApp messages for direct appointment scheduling."
            },
            {
                icon: "🔍",
                title: "Comprehensive SEO Implementation",
                description: "JSON-LD MedicalBusiness schema, dynamic sitemap, per-page Open Graph/Twitter meta tags, robots.txt, canonical URLs, and Google Search Console integration."
            },
            {
                icon: "🎨",
                title: "Luxury Editorial Design System",
                description: "7 custom font families, CSS custom properties bridged into Tailwind v4's @theme, dark cinematic sections contrasting with warm off-white sections, and glassmorphic overlays."
            },
            {
                icon: "👨‍⚕️",
                title: "Interactive Doctor Profile",
                description: "Split-screen parallax entry with doctor qualifications, specialties, expandable certifications accordion, and adaptive mobile card-overlay pattern."
            },
            {
                icon: "🧘",
                title: "5-Phase Cinematic Slider",
                description: "Scroll-driven slider showcasing the Ayurvedic treatment journey (Consultation → Diagnosis → Treatment → Recovery → Balance) with film strip background track and touch-swipe mobile carousel."
            },
            {
                icon: "⚡",
                title: "Adaptive Performance System",
                description: "GPU-heavy effects gracefully degrade on mobile — water ripple disabled, blur replaced with opacity wash, dynamic imports for below-fold sections, and lazy-loaded iframes."
            },
            {
                icon: "🌿",
                title: "Multi-Layer Parallax Scenes",
                description: "Mouse-tracking parallax with 3 independent depth layers (background, subject, text) creating immersive visual depth throughout the site."
            },
            {
                icon: "📍",
                title: "Google Maps Integration",
                description: "Custom-themed dark Google Maps embed with desaturated styling, GPS coordinates display, and comprehensive contact information cards."
            }
        ],
        stack: {
            frontend: [
                "Next.js 16.2.2 (App Router)",
                "React 19.2.4",
                "TypeScript 5",
                "Tailwind CSS v4",
                "Framer Motion 12.38.0",
                "Lenis 1.3.21 (Smooth Scroll)",
                "react-water-wave 2.0.1 (WebGL)"
            ],
            styling: [
                "CSS Custom Properties (Design Tokens)",
                "@tailwindcss/postcss v4",
                "Glassmorphism (backdrop-blur)",
                "7 Font Families (Gallient, Cormorant Garamond, Instrument Serif, Space Grotesk, Barlow Condensed, Geist Sans, Geist Mono)"
            ],
            animations: [
                "Scroll-Driven Animations (useScroll + useTransform)",
                "Spring Physics (useSpring)",
                "Stagger Reveals (staggerChildren)",
                "Viewport Triggers (whileInView)",
                "CSS clip-path Transitions (circle, inset)",
                "Color Blend Interpolation"
            ],
            seo: [
                "JSON-LD MedicalBusiness Schema",
                "Dynamic Sitemap Generation",
                "Per-Page Open Graph & Twitter Cards",
                "Google Search Console Integration",
                "Canonical URLs"
            ],
            tools: [
                "Lucide React (Icons)",
                "Dynamic Imports (Code Splitting)",
                "Next.js Image Optimization (WebP)",
                "WhatsApp Business API Integration",
                "Google Maps Embed API"
            ]
        },
        navigation: {
            prev: { title: 'AI DOC CHAT', slug: 'aidocchat' },
            next: null
        }
    },
    devloom: {
        slug: "devloom",
        title: "DevLoom",
        summary: "A modern publishing platform designed for developers to write, share, and discover technical knowledge with a rich, distraction-free writing experience.",
        badges: [
            { label: "Type", value: "Publishing Platform" },
            { label: "Role", value: "Full Stack Developer" },
            { label: "Timeline", value: "2024" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "Next.js 15",
            "React 19",
            "Tiptap",
            "TanStack Query",
            "Zod",
            "Prisma ORM",
            "PostgreSQL",
            "NextAuth"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "https://github.com/", type: "secondary" }
        ],
        heroImage: "/projects/devloom/1.png",
        gallery: [
            { src: "/projects/devloom/1.png", alt: "DevLoom Homepage", type: "desktop" },
            { src: "/projects/devloom/2.png", alt: "Article View", type: "desktop" },
            { src: "/projects/devloom/3.png", alt: "Rich Text Editor", type: "desktop" },
            { src: "/projects/devloom/4.png", alt: "Admin Dashboard Analytics", type: "desktop" },
            { src: "/projects/devloom/5.png", alt: "User Profile and Posts", type: "mobile" }
        ],
        overview: {
            description: "DevLoom is a comprehensive publishing platform specifically designed for developers. Built with Next.js 15 and React 19, it features a distraction-free Tiptap rich text editor, robust data validation, and an interactive admin dashboard. The platform handles complex nested relations with Prisma and implements robust SEO optimizations including dynamic sitemaps and JSON-LD structured data.",
            audience: "Developers, technical writers, and software engineering teams looking for a dedicated space to share knowledge, tutorials, and insights.",
            goal: "To master the modern Next.js ecosystem by building an end-to-end application, solving real-world challenges like server component optimization, complex database relations, and responsive UI design."
        },
        features: [
            {
                icon: "✍️",
                title: "Rich Text Editor",
                description: "Distraction-free writing experience powered by Tiptap with support for code blocks, formatting, and media integration."
            },
            {
                icon: "🛡️",
                title: "Secure Authentication",
                description: "Role-based access control (Admin/User) implemented via NextAuth for secure account management."
            },
            {
                icon: "📊",
                title: "Admin Dashboard",
                description: "Interactive analytics dashboard using Recharts to track post engagement, views, and overall platform metrics."
            },
            {
                icon: "🖼️",
                title: "Media Management",
                description: "Seamless image upload and optimization pipeline using Cloudinary integration."
            },
            {
                icon: "🔍",
                title: "SEO Optimization",
                description: "Advanced Next.js SEO capabilities including dynamic sitemaps, JSON-LD Article schema, and web manifest."
            },
            {
                icon: "💾",
                title: "Robust Database Architecture",
                description: "Efficient data management using Prisma ORM with PostgreSQL, handling complex nested relations seamlessly."
            },
            {
                icon: "⚡",
                title: "Optimized Performance",
                description: "Efficient data fetching and state management utilizing TanStack Query and Zod for type-safe validation."
            }
        ],
        stack: {
            frontend: [
                "Next.js 15 (App Router)",
                "React 19",
                "Tiptap (Rich Text Editor)",
                "Recharts (Data Visualization)"
            ],
            backend: [
                "Next.js API Routes",
                "NextAuth (Authentication)",
                "Prisma ORM"
            ],
            database: [
                "PostgreSQL"
            ],
            apis: [
                "Cloudinary API"
            ],
            tools: [
                "TanStack Query",
                "Zod (Validation)",
                "Dynamic Sitemaps",
                "JSON-LD Schema"
            ]
        },
        navigation: {
            prev: { title: 'NOOZI', slug: 'noozi' },
            next: { title: 'AMRITHA', slug: 'amrithaheritage' }
        }
    },
    noozi: {
        slug: "noozi",
        title: "Noozi Creative Studio",
        summary: "A visually immersive portfolio and digital experience platform built with Vite + React + TypeScript, focused on delivering high-end UI interactions, smooth animations, and modern web performance.",
        badges: [
            { label: "Type", value: "Creative Portfolio" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Timeline", value: "2025" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Swiper.js"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/projects/noozi/1.png",
        gallery: [
            { src: "/projects/noozi/1.png", alt: "Noozi Hero & Landing", type: "desktop" },
            { src: "/projects/noozi/2.png", alt: "Creative Showcase Section", type: "desktop" },
            { src: "/projects/noozi/3.png", alt: "Project Gallery & Interactions", type: "desktop" },
            { src: "/projects/noozi/4.png", alt: "Services & Contact", type: "desktop" }
        ],
        overview: {
            description: "Noozi Creative Studio is a visually immersive portfolio and digital experience platform built using Vite + React + TypeScript, focused on delivering high-end UI interactions, smooth animations, and modern web performance. Unlike typical portfolio sites, this project emphasizes motion design, visual storytelling, and user engagement rather than just static content display. It is designed to showcase creative work, projects, and services in a way that feels dynamic, premium, and interactive.",
            audience: "Creative professionals, agencies, designers, and brands seeking a premium digital portfolio experience that goes beyond static content.",
            goal: "To build a portfolio that feels premium and performs like a product — not just a static showcase — demonstrating strong control over advanced UI/UX, animation systems, and scalable component architecture."
        },
        features: [
            {
                icon: "🎨",
                title: "Advanced UI/UX Design",
                description: "Clean, modern interface with a strong focus on visual hierarchy, aesthetics, and premium design patterns that feel alive and engaging."
            },
            {
                icon: "🎞️",
                title: "Smooth Animations & Transitions",
                description: "Built using Framer Motion for fluid user interactions, cinematic transitions, and dynamic motion design throughout the experience."
            },
            {
                icon: "⚡",
                title: "Optimized Performance with Vite",
                description: "Fast dev server, instant HMR, and optimized production builds ensuring lightning-fast load times and smooth browsing."
            },
            {
                icon: "📱",
                title: "Fully Responsive Layout",
                description: "Works seamlessly across mobile, tablet, and desktop devices with adaptive layouts and touch-friendly interactions."
            },
            {
                icon: "🧩",
                title: "Modular Component Architecture",
                description: "Reusable and scalable code structure built for maintainability, clean separation of concerns, and easy extensibility."
            },
            {
                icon: "🖼️",
                title: "Interactive Content Sections",
                description: "Dynamic project showcases, creative layouts, engaging scroll experiences, and interactive sliders that bring content to life."
            }
        ],
        stack: {
            frontend: [
                "React",
                "TypeScript",
                "Vite Build Tool",
                "Tailwind CSS",
                "Framer Motion",
                "Swiper.js"
            ],
            animations: [
                "Framer Motion (Page Transitions)",
                "Custom CSS Animations",
                "Scroll-Driven Effects",
                "Interactive Hover States"
            ],
            tools: [
                "Vite Development Server",
                "ESLint",
                "PostCSS",
                "Autoprefixer",
                "TypeScript Compiler"
            ]
        },
        navigation: {
            prev: { title: 'MICROSTORE', slug: 'microstore' },
            next: { title: 'DEVLOOM', slug: 'devloom' }
        }
    },
    autonexis: {
        slug: "autonexis",
        title: "AutoNexis",
        summary: "An event-driven order processing system designed to handle failures, retries, and asynchronous workflows in distributed environments — built around resilience, not just functionality.",
        badges: [
            { label: "Type", value: "Backend System" },
            { label: "Role", value: "Backend Developer" },
            { label: "Timeline", value: "2025" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "n8n",
            "Event-Driven Architecture"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "#", type: "secondary" }
        ],
        heroImage: "/projects/AutoNexis/1.png",
        gallery: [
            { src: "/projects/AutoNexis/1.png", alt: "System Architecture Overview", type: "desktop" },
            { src: "/projects/AutoNexis/2.jpg", alt: "n8n Workflow Automation", type: "desktop" },
            { src: "/projects/AutoNexis/3.png", alt: "Event Queue Dashboard", type: "desktop" },
            { src: "/projects/AutoNexis/4.png", alt: "Order Processing Flow", type: "desktop" },
            { src: "/projects/AutoNexis/5.png", alt: "Monitoring & Logging", type: "desktop" }
        ],
        overview: {
            description: "AutoNexis is an event-driven order processing system designed to handle failures, retries, and asynchronous workflows in distributed environments. Instead of relying on fragile synchronous flows, the system uses event queues and automation pipelines to ensure that every order is processed reliably — even when parts of the system fail. This is not a CRUD project. It demonstrates how to design resilient backend systems with failure handling, retries, and eventual consistency.",
            audience: "Backend engineers, system architects, and teams building distributed systems that need to handle partial failures gracefully.",
            goal: "Build a backend system that doesn't collapse when something fails. Most beginner projects ignore failure — this one is built around it."
        },
        features: [
            {
                icon: "\uD83D\uDD04",
                title: "Event-Driven Order Processing",
                description: "Orders are processed asynchronously through event queues instead of direct API chaining, ensuring loose coupling and reliability."
            },
            {
                icon: "\u274C",
                title: "Failure Handling & Retry Logic",
                description: "Failed events are automatically retried with exponential backoff or redirected to a Dead Letter Queue for manual recovery."
            },
            {
                icon: "\uD83E\uDDFE",
                title: "Event Queue System",
                description: "Persistent queue ensures no data loss during failures or downtime, maintaining order integrity across the system."
            },
            {
                icon: "\uD83D\uDD01",
                title: "Automated Workflows via n8n",
                description: "Background processes and workflow orchestration handled via n8n automation engine for reliable, repeatable operations."
            },
            {
                icon: "\uD83D\uDCCA",
                title: "Logging & Monitoring",
                description: "Comprehensive event tracking and failure logging for debugging, observability, and system reliability analysis."
            },
            {
                icon: "\uD83E\uDDE9",
                title: "Decoupled Architecture",
                description: "Services operate independently with clear boundaries, reducing system-wide failure impact and improving maintainability."
            }
        ],
        stack: {
            backend: [
                "Node.js",
                "Express.js",
                "RESTful API Design",
                "Event-Driven Architecture"
            ],
            database: [
                "PostgreSQL",
                "Prisma ORM"
            ],
            automation: [
                "n8n (Workflow Automation)",
                "Event Queue Processing",
                "Retry & Recovery Pipelines",
                "Dead Letter Queue (DLQ)"
            ],
            tools: [
                "Exponential Backoff Retry",
                "Structured Logging",
                "Environment Configuration",
                "Nodemon (Development)"
            ]
        },
        navigation: {
            prev: null,
            next: { title: 'MICROSTORE', slug: 'microstore' }
        }
    },
    microstore: {
        slug: "microstore",
        title: "MicroStore",
        summary: "A Dockerized ecommerce backend system built using a microservices architecture with Node.js, Express, MongoDB, JWT authentication, and an API Gateway pattern.",
        badges: [
            { label: "Type", value: "Backend System" },
            { label: "Role", value: "Backend Developer" },
            { label: "Timeline", value: "2024" },
            { label: "Status", value: "Completed" }
        ],
        techStack: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Docker",
            "Zod",
            "Swagger"
        ],
        actions: [
            { label: "View Live Demo", href: "#", type: "primary" },
            { label: "View Code", href: "https://github.com/Shaamil777", type: "secondary" }
        ],
        heroImage: "",
        gallery: [],
        overview: {
            description: "A Dockerized ecommerce backend system built using a microservices architecture. It uses an API Gateway as the single entry point for all incoming client requests, forwarding them to independent services: Auth Service, Product Service, and Order Service. This project was created to move beyond traditional monolithic CRUD applications and understand scalable backend systems in production-style environments.",
            audience: "Developers and software engineers interested in microservices architecture, API gateways, and scalable backend design.",
            goal: "To build a robust, scalable backend system demonstrating microservices separation, JWT authentication flows, service-to-service communication, and Dockerized deployment."
        },
        features: [
            {
                icon: "🚪",
                title: "API Gateway Pattern",
                description: "Central entry point for all incoming client requests, handling request forwarding, route management, and authorization header forwarding."
            },
            {
                icon: "🔐",
                title: "Advanced Authentication",
                description: "Secure JWT-based authentication using Access and Refresh tokens with role-based access control (RBAC) for route protection."
            },
            {
                icon: "📦",
                title: "Product & Order Services",
                description: "Independent services for handling product catalogs and order processing, demonstrating service-to-service communication using Axios."
            },
            {
                icon: "🛡️",
                title: "Robust Validation",
                description: "Comprehensive request validation across all services using Zod for schemas, ensuring clean request handling and early error detection."
            },
            {
                icon: "🐳",
                title: "Dockerized Architecture",
                description: "Complete system containerized using Docker Compose, including API Gateway, independent services, and MongoDB."
            },
            {
                icon: "⚠️",
                title: "Centralized Error Handling",
                description: "Consistent API error responses and async error management implemented across all microservices."
            },
            {
                icon: "📚",
                title: "Interactive Documentation",
                description: "Integrated Swagger/OpenAPI documentation for all APIs, enabling interactive testing and easier integration."
            }
        ],
        stack: {
            backend: [
                "Node.js",
                "Express.js",
                "Microservices Architecture",
                "API Gateway Pattern"
            ],
            database: [
                "MongoDB",
                "Mongoose ODM"
            ],
            auth: [
                "JWT (Access & Refresh Tokens)",
                "Bcrypt",
                "Role-Based Access Control"
            ],
            devops: [
                "Docker",
                "Docker Compose"
            ],
            tools: [
                "Zod (Validation)",
                "Swagger / OpenAPI",
                "Axios (Service Communication)"
            ]
        },
        navigation: {
            prev: { title: 'AUTONEXIS', slug: 'autonexis' },
            next: { title: 'NOOZI', slug: 'noozi' }
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
