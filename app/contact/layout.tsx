import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact — Muhammad Shamil | Get in Touch',
    description:
        'Get in touch with Muhammad Shamil for freelance web development projects. Available for MERN stack development, e-commerce platforms, and custom web applications.',
    alternates: {
        canonical: 'https://muhammadshamil.vercel.app/contact',
    },
    openGraph: {
        title: 'Contact — Muhammad Shamil',
        description:
            'Hire Muhammad Shamil for your next web development project. Specializing in MERN stack, e-commerce, and full-stack web applications.',
        url: 'https://muhammadshamil.vercel.app/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
