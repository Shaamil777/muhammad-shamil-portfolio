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
    problem: {
        issue: string;
        constraints: string[];
    };
    solution: {
        approach: string;
        decisions: string[];
    };
    features: { icon: string; title: string; description: string }[];
    stack: {
        frontend: string[];
        backend: string[];
        database: string[];
        apis: string[];
        tools: string[];
    };
    results: { metric: string; description: string }[];
    lessons: string[];
    navigation: {
        prev: { title: string; slug: string } | null;
        next: { title: string; slug: string } | null;
    };
}

const projects: Record<string, ProjectData> = {
    ward: {
        slug: 'ward',
        title: 'WARD',
        summary:
            'A full-stack food delivery platform built for a local restaurant chain, featuring real-time order tracking, restaurant management dashboard, and seamless payment integration.',
        badges: [
            { label: 'Role', value: 'Full-Stack Developer' },
            { label: 'Timeline', value: '6 Weeks' },
            { label: 'Client', value: 'Restaurant Chain' },
            { label: 'Status', value: 'Live' },
        ],
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Razorpay'],
        actions: [
            { label: 'Live Demo', href: '#', type: 'primary' },
            { label: 'GitHub', href: '#', type: 'secondary' },
            { label: 'Case Study', href: '#', type: 'secondary' },
        ],
        heroImage: '/project-hero.png',
        gallery: [
            { src: '/project-desktop-1.png', alt: 'Dashboard overview', type: 'desktop' },
            { src: '/project-desktop-2.png', alt: 'Order management panel', type: 'desktop' },
            { src: '/project-mobile-1.png', alt: 'Mobile menu view', type: 'mobile' },
            { src: '/project-mobile-2.png', alt: 'Mobile cart and checkout', type: 'mobile' },
        ],
        overview: {
            description:
                'Ward is a complete food delivery platform that connects customers with local restaurants. It provides a streamlined ordering experience on the frontend and a powerful management dashboard for restaurant owners on the backend.',
            audience:
                'Built for a restaurant chain with 4 outlets looking to digitize their ordering process and reduce dependency on third-party delivery apps.',
            goal:
                'Reduce order processing time by 60%, eliminate third-party commission fees, and provide direct customer data ownership to the business.',
        },
        problem: {
            issue:
                'The client was losing 25-30% of revenue to third-party delivery platforms and had no direct relationship with their customers. Order errors were frequent due to phone-based ordering, and there was zero visibility into business analytics.',
            constraints: [
                'Must handle 200+ concurrent orders during peak hours',
                'Integration with existing POS system required',
                'Mobile-first design for delivery staff interface',
                'Budget-conscious — single developer delivery',
            ],
        },
        solution: {
            approach:
                'Built a custom MERN stack platform with real-time WebSocket communication for instant order updates. Designed a role-based architecture supporting customers, restaurant admins, and delivery personnel with separate optimized interfaces.',
            decisions: [
                'Chose MongoDB for flexible menu schema that varies across restaurant locations',
                'Implemented Socket.io for real-time order tracking instead of polling',
                'Used Razorpay for payment processing with automatic split payments to outlets',
                'Built a Progressive Web App for delivery staff to avoid app store dependencies',
            ],
        },
        features: [
            {
                icon: '🛒',
                title: 'Smart Ordering System',
                description: 'Location-aware menu display with real-time availability, cart persistence, and scheduled ordering.',
            },
            {
                icon: '📊',
                title: 'Restaurant Dashboard',
                description: 'Complete admin panel with order management, menu editing, analytics, and revenue tracking.',
            },
            {
                icon: '🔔',
                title: 'Real-Time Notifications',
                description: 'Instant order status updates via WebSockets for customers, restaurants, and delivery staff.',
            },
            {
                icon: '💳',
                title: 'Payment Integration',
                description: 'Secure checkout with Razorpay supporting UPI, cards, wallets, and automatic split settlements.',
            },
            {
                icon: '🗺️',
                title: 'Delivery Tracking',
                description: 'Live delivery tracking with estimated delivery time and delivery personnel assignment.',
            },
            {
                icon: '📱',
                title: 'Mobile-First PWA',
                description: 'Responsive Progressive Web App optimized for delivery staff with offline order caching.',
            },
        ],
        stack: {
            frontend: ['React 18', 'Next.js 14', 'Tailwind CSS', 'Framer Motion'],
            backend: ['Node.js', 'Express.js', 'Socket.io', 'JWT Auth'],
            database: ['MongoDB', 'Mongoose', 'Redis (caching)'],
            apis: ['Razorpay API', 'Google Maps API', 'Twilio SMS', 'Cloudinary'],
            tools: ['Git', 'Vercel', 'Render', 'Postman', 'MongoDB Atlas'],
        },
        results: [
            { metric: '60% Faster Orders', description: 'Average order processing time reduced from 8 minutes to under 3 minutes.' },
            { metric: '₹2.4L Saved Monthly', description: 'Eliminated third-party platform commissions across all 4 outlets.' },
            { metric: '1,200+ Orders/Week', description: 'Platform handles over 1,200 orders weekly with 99.8% uptime.' },
            { metric: '4.8★ User Rating', description: 'Average customer satisfaction rating based on in-app feedback.' },
        ],
        lessons: [
            'Learned to architect systems for high concurrency — Socket.io connection pooling was critical for peak hours.',
            'Early investment in a flexible database schema saved weeks of refactoring when new outlets were onboarded.',
            'Building the delivery staff PWA first (before customer-facing features) revealed key UX assumptions that were wrong.',
        ],
        navigation: {
            prev: null,
            next: { title: 'SUPERLINK', slug: 'superlink' },
        },
    },

    superlink: {
        slug: 'superlink',
        title: 'SUPERLINK',
        summary:
            'A SaaS link management platform with branded short links, click analytics, QR code generation, and team collaboration features.',
        badges: [
            { label: 'Role', value: 'Full-Stack Developer' },
            { label: 'Timeline', value: '4 Weeks' },
            { label: 'Client', value: 'Personal Project' },
            { label: 'Status', value: 'Live' },
        ],
        techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
        actions: [
            { label: 'Live Demo', href: '#', type: 'primary' },
            { label: 'GitHub', href: '#', type: 'secondary' },
        ],
        heroImage: '/project-hero.png',
        gallery: [
            { src: '/project-desktop-1.png', alt: 'Link dashboard', type: 'desktop' },
            { src: '/project-mobile-1.png', alt: 'Mobile analytics view', type: 'mobile' },
        ],
        overview: {
            description:
                'Superlink is a link management tool that allows users to create branded short URLs, track click analytics in real time, and generate QR codes — all from a single dashboard.',
            audience:
                'Designed for marketers, content creators, and small businesses who need link tracking without enterprise-level pricing.',
            goal:
                'Demonstrate full-stack proficiency with a production-grade SaaS product, including authentication, role-based access, and real-time data visualization.',
        },
        problem: {
            issue:
                'Existing link shorteners either lack analytics depth or charge premium prices. Small businesses and freelancers need a simple, affordable solution with branded link support.',
            constraints: [
                'Must support custom domains for branded links',
                'Analytics must update in real time without page reload',
                'Free tier must be genuinely useful, not just a teaser',
            ],
        },
        solution: {
            approach:
                'Built a Next.js application with server-side rendering for SEO, MongoDB for flexible analytics storage, and Chart.js for interactive data visualization.',
            decisions: [
                'Used Next.js API routes to keep everything in a single deployable unit',
                'Implemented click tracking as non-blocking background jobs',
                'Chose MongoDB for its flexible document model suited to varying analytics schemas',
            ],
        },
        features: [
            {
                icon: '🔗',
                title: 'Branded Short Links',
                description: 'Create short URLs with custom slugs and optional custom domains.',
            },
            {
                icon: '📈',
                title: 'Real-Time Analytics',
                description: 'Track clicks, referrers, devices, locations, and time-based patterns.',
            },
            {
                icon: '📲',
                title: 'QR Code Generator',
                description: 'Auto-generate downloadable QR codes for any shortened link.',
            },
            {
                icon: '👥',
                title: 'Team Workspaces',
                description: 'Invite team members with role-based permissions to manage links collaboratively.',
            },
        ],
        stack: {
            frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
            backend: ['Next.js API Routes', 'JWT Auth', 'Rate Limiting'],
            database: ['MongoDB', 'Mongoose'],
            apis: ['QR Code API', 'GeoIP Lookup'],
            tools: ['Git', 'Vercel', 'MongoDB Atlas', 'Postman'],
        },
        results: [
            { metric: 'Production-Ready SaaS', description: 'Fully functional product with auth, billing logic, and analytics.' },
            { metric: '50ms Avg Response', description: 'Optimized redirect latency for shortened URLs.' },
            { metric: 'Open Source', description: 'Starred on GitHub as a reference MERN SaaS implementation.' },
        ],
        lessons: [
            'Non-blocking analytics writes were essential — initial synchronous approach caused redirect delays.',
            'Building a free tier that is genuinely useful increased signups significantly compared to a locked-down trial.',
        ],
        navigation: {
            prev: { title: 'WARD', slug: 'ward' },
            next: { title: 'OKALPHA', slug: 'okalpha' },
        },
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
        problem: {
            issue:
                'The agency relied on social media and word-of-mouth for leads. They had no website, no portfolio, and no way for potential clients to understand their services or book a call.',
            constraints: [
                'The design must reflect the agency\'s premium branding and creative identity',
                'Booking system must integrate with the existing Calendly workflow',
                'Site must load fast and perform well for SEO',
            ],
        },
        solution: {
            approach:
                'Designed and developed a visually rich Next.js website with smooth scroll animations, dynamic project galleries, and embedded Calendly scheduling — all optimized for performance and SEO.',
            decisions: [
                'Used Framer Motion for scroll-triggered animations that showcase agency projects elegantly',
                'Implemented ISR (Incremental Static Regeneration) for project pages to balance performance and freshness',
                'Integrated Calendly embed widget for a frictionless booking experience without leaving the site',
            ],
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
        results: [
            { metric: '45% More Bookings', description: 'Consultation requests increased significantly within the first month.' },
            { metric: '95+ Lighthouse Score', description: 'Optimized performance, accessibility, and SEO out of the box.' },
            { metric: '3.2s Avg Session', description: 'Strong engagement with average visitor session exceeding 3 minutes.' },
        ],
        lessons: [
            'Scroll-based animations need careful performance profiling — initial Framer Motion usage caused jank on mid-range devices.',
            'Calendly embed load time affected perceived performance; lazy-loading it below the fold solved this.',
        ],
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
        problem: {
            issue:
                'Existing crypto exchange apps are complex and intimidating for average users. The target market needed a simple, mobile-first solution with local bank integration and compliance-ready KYC.',
            constraints: [
                'Must comply with Indian financial regulations and KYC requirements',
                'Real-time exchange rates with minimal latency',
                'Secure handling of sensitive financial and identity data',
                'Cross-platform support (iOS and Android) with a single codebase',
            ],
        },
        solution: {
            approach:
                'Developed a React Native application using Expo for cross-platform support, with a Node.js/Express backend handling authentication, KYC verification, and real-time rate fetching from CoinGecko API.',
            decisions: [
                'Chose React Native with Expo for rapid cross-platform development',
                'Implemented JWT-based authentication with refresh token rotation for security',
                'Used CoinGecko API for live exchange rate data with local caching to reduce API calls',
                'Built modular screen architecture for easy addition of new crypto pairs',
            ],
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
        results: [
            { metric: 'Cross-Platform MVP', description: 'Single codebase running on both iOS and Android via Expo.' },
            { metric: 'Real-Time Rates', description: 'Sub-second rate updates with intelligent caching layer.' },
            { metric: 'Compliance Ready', description: 'Full KYC flow built to Indian regulatory requirements.' },
        ],
        lessons: [
            'Financial app UX needs extreme simplification — early prototypes with too many options confused test users.',
            'Rate caching strategy was critical; without it, CoinGecko rate limits were hit within minutes of testing.',
            'Building the bank management module as a standalone tab improved both UX and code modularity.',
        ],
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
