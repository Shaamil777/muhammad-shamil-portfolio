import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Works — Muhammad Shamil | Web Development Portfolio',
    description:
        'Explore web development projects by Muhammad Shamil — e-commerce platforms, business websites, hospitality platforms, and campaign services built with modern technologies.',
    alternates: {
        canonical: 'https://muhammadshamil.vercel.app/works',
    },
    openGraph: {
        // ji
        title: 'Works — Muhammad Shamil | Portfolio',
        description:
            'Browse real-world projects including Open Door, Amritha Heritage, UrbanWorn, Lapo Cart, CAFCOHOME, and Evento — built with React, Next.js, Node.js, and MongoDB.',
        url: 'https://muhammadshamil.vercel.app/works',
    },
};

export default function WorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
