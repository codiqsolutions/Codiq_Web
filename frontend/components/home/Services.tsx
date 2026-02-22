"use client"

import {
    Code,
    Smartphone,
    BarChart,
    Bot,
    Server,
    Globe,
    ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

const services = [
    {
        icon: Globe,
        title: "Web Platforms",
        description:
            "Next-gen web systems engineered with performance-first architecture and scalable design.",
        accent: "from-blue-500 to-cyan-500",
    },
    {
        icon: Bot,
        title: "AI Automation",
        description:
            "AI-powered workflows and intelligent systems that optimize operations and reduce cost.",
        accent: "from-violet-500 to-fuchsia-500",
    },
    {
        icon: Smartphone,
        title: "Mobile Experiences",
        description:
            "Pixel-perfect mobile applications delivering speed, usability, and reliability.",
        accent: "from-emerald-500 to-teal-500",
    },
    {
        icon: Server,
        title: "Custom Software",
        description:
            "Secure, enterprise-grade software tailored to complex business logic.",
        accent: "from-orange-500 to-amber-500",
    },
    {
        icon: Code,
        title: "API Engineering",
        description:
            "Robust APIs and integrations powering seamless communication between systems.",
        accent: "from-pink-500 to-rose-500",
    },
    {
        icon: BarChart,
        title: "Data Intelligence",
        description:
            "Advanced analytics and dashboards that turn data into actionable insight.",
        accent: "from-indigo-500 to-violet-500",
    },
]

export default function Services() {
    return (
        <section className="relative bg-white py-16 sm:py-24 lg:py-32">
            {/* Soft background accents */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-linear-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-60" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-10 sm:mb-16 lg:mb-20 max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
                    >
                        Solutions Designed to Scale
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-5 text-lg text-slate-600"
                    >
                        We help businesses build future-ready digital products through
                        cutting-edge technology and thoughtful engineering.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -8 }}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-slate-300  hover:shadow-[0_1px_4px_rgba(0,0,0,0.16)]"
                        >
                            {/* Diagonal accent slice */}
                            <div
                                className={cn(
                                    "pointer-events-none absolute -right-24 -top-24 h-48 w-48 rotate-45 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                    "bg-linear-to-br",
                                    service.accent
                                )}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                {/* Icon */}
                                <div
                                    className={cn(
                                        "mb-6 flex h-14 w-14 items-center justify-center rounded-xl",
                                        "bg-slate-100 text-slate-900",
                                        "transition-all duration-300",
                                        "group-hover:scale-110 group-hover:rotate-6",
                                        "group-hover:bg-linear-to-br",
                                        service.accent
                                    )}
                                >
                                    <service.icon className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                                </div>

                                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* CTA */}
                                <Link
                                    href="/services"
                                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-all group-hover:text-slate-900 cursor-pointer"
                                >
                                    Explore Services
                                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
