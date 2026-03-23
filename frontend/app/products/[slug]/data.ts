export const PROJECT_DATA: Record<string, { title: string, shortDescription: string, fullDetails: string, websiteLink: string, techStack: string[], features: string[], gallery: number[] }> = {
    "smarty-inventory": {
        title: "Smarty Inventory Management System",
        shortDescription: "A modern, robust inventory management system designed to streamline stock tracking, order fulfillment, B2B warehouse operations, and supplier coordination.",
        fullDetails: "Smarty Inventory is an enterprise-grade SaaS inventory platform designed for retail and wholesale businesses looking to scale without the headache of manual stock counting. It simplifies warehouse operations with real-time stock updates, automated low-stock alerts, barcode scanning compatibility, and multi-location tracking. The intuitive analytics dashboard provides business owners with clear visibility into sales trends, product performance, and predictive purchasing needs.",
        websiteLink: "#",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Redux", "RESTful API"],
        features: [
            "Real-time inventory & stock tracking",
            "Automated procurement and low-stock alerts",
            "Vendor and B2B supplier management",
            "Comprehensive AI-driven sales reports",
        ],
        gallery: [1, 2, 3]
    },
    "coffee-shop": {
        title: "Modern Coffee Shop E-Commerce Platform",
        shortDescription: "A smart coffee shop POS and e-commerce platform built to simplify digital ordering, enhance customer engagement, and optimize retail business operations.",
        fullDetails: "This complete digital e-commerce solution for modern coffee shops provides a seamless online ordering and checkout experience for customers while giving cafe owners a powerful administrative backend to manage daily operations. From tracking daily retail orders and ingredient inventory to processing secure transactions via Razorpay payment gateway, every aspect of the cafe business is centralized for maximum ROI.",
        websiteLink: "#",
        techStack: ["Next.js", "Firebase", "Razorpay", "Tailwind CSS", "Framer Motion", "Serverless"],
        features: [
            "Seamless digital menu browsing & fast checkout",
            "Secure online payment gateway via Razorpay",
            "Powerful POS admin dashboard for retail control",
            "Firebase secure user authentication",
        ],
        gallery: [1, 2, 3]
    }
}
