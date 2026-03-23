import { MetadataRoute } from 'next'
import { PROJECT_DATA } from './products/[slug]/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const dynamicProducts = Object.keys(PROJECT_DATA).map((slug) => ({
        url: `https://yourdomain.com/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [
        {
            url: 'https://yourdomain.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://yourdomain.com/products',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://yourdomain.com/services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://yourdomain.com/portfolio',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...dynamicProducts,
    ]
}
