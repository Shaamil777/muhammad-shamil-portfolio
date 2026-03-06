import type { Metadata } from 'next';
import { getProject, getAllProjectSlugs } from '../projectData';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {
            title: 'Project Not Found — Shamil Portfolio',
        };
    }

    return {
        title: `${project.title} — Muhammad Shamil | Project Case Study`,
        description: project.summary,
        alternates: {
            canonical: `https://muhammadshamil.vercel.app/works/${slug}`,
        },
        openGraph: {
            title: `${project.title} — Project by Muhammad Shamil`,
            description: project.summary,
            url: `https://muhammadshamil.vercel.app/works/${slug}`,
            type: 'article',
        },
    };
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
