"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Code2, LayoutDashboard, Database } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/PageHeader"
import { PROJECT_DATA } from "./data"

export default function ProjectOverviewClient({ slug }: { slug: string }) {
    const project = PROJECT_DATA[slug]

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Project not found</h1>
                <Link href="/products" className="text-blue-600 hover:underline flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Products
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <PageHeader
                title={project.title}
                description={project.shortDescription}
            />

            <div className="mx-auto max-w-5xl px-6 mt-16">
                <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition mb-10 font-medium">
                    <ArrowLeft className="h-4 w-4" /> Back to all projects
                </Link>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-12">

                        {/* Project Info */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">About the Project</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                {project.fullDetails}
                            </p>
                        </motion.section>

                        {/* Gallery Placeholders */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Gallery</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.gallery.map((img: number) => (
                                    <div key={img} className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-300 relative overflow-hidden group cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 opacity-50"></div>
                                        <span className="text-slate-500 font-medium z-10 flex flex-col items-center">
                                            <LayoutDashboard className="h-8 w-8 mb-2 opacity-50" />
                                            Add Photo Later
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
                        >
                            <a
                                href={project.websiteLink}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition"
                            >
                                Visit Website <ExternalLink className="h-4 w-4" />
                            </a>

                            <div className="mt-8">
                                <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 flex items-center gap-2">
                                    <Code2 className="h-4 w-4" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech: string) => (
                                        <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-4 flex items-center gap-2">
                                    <Database className="h-4 w-4" /> Key Features
                                </h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature: string, i: number) => (
                                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                                            <span className="text-blue-500 mt-0.5">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
