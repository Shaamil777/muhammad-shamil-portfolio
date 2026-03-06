import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About — Muhammad Shamil | Full-stack Web Developer',
    description:
        'Learn about Muhammad Shamil, a self-taught full-stack developer with 1+ year of freelance experience building real-world web applications using the MERN stack.',
    alternates: {
        canonical: 'https://muhammadshamil.vercel.app/about',
    },
    openGraph: {
        title: 'About — Muhammad Shamil',
        description:
            'Self-taught MERN stack developer with real freelance experience building scalable web applications for businesses and startups.',
        url: 'https://muhammadshamil.vercel.app/about',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
