import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Our Software Products & Live Projects | Codiq',
    description: 'Explore Codiq’s featured software products, live projects, and digital solutions designed for scalability. Discover our Smarty Inventory Management and Coffee Shop E-Commerce platforms.',
    keywords: 'software products, live projects, inventory management, e-commerce platform, digital solutions, Next.js, active development, Codiq portfolio, B2B SaaS, custom software development',
    openGraph: {
        title: 'Our Software Products & Live Projects | Codiq',
        description: 'Explore Codiq’s featured software products, live projects, and digital solutions designed for scalability.',
        type: 'website',
    }
}

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
