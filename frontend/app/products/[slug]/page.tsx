import { Metadata } from 'next'
import { PROJECT_DATA } from './data'
import ProjectOverviewClient from './ProjectOverviewClient'

// Generate dynamic SEO metadata based on the project slug
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = PROJECT_DATA[slug]

    if (!project) {
        return {
            title: 'Project Not Found | Codiq',
            description: 'The requested software project could not be found.',
        }
    }

    // Injecting SEO words: SaaS, Platform, Management, E-Commerce dynamically
    return {
        title: `${project.title} | Software Solutions & SaaS by Codiq`,
        description: project.shortDescription,
        keywords: `${project.title}, Next.js application, React, B2B SaaS, scalable web application, custom software development, digital platform, Codiq case study, ${project.techStack.join(', ')}`,
        openGraph: {
            title: `${project.title} | Software Solutions & SaaS by Codiq`,
            description: project.shortDescription,
            type: 'article',
        }
    }
}

export default async function ProjectOverviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    return <ProjectOverviewClient slug={slug} />
}
