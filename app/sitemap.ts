import { MetadataRoute } from 'next';
import { getAllProjectSlugs } from './works/projectData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://muhammadshamil.vercel.app';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/works`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic project pages
    const projectSlugs = getAllProjectSlugs();
    const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/works/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...projectPages];
}
