"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Code2,
    Home,
    Layers,
    Cpu,
    Briefcase,
    Box,
    Newspaper,
    Mail,
    Info,
    Users,
    LogIn,
    LayoutDashboard
} from "lucide-react"

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Layers },
    { name: "Tech Stack", href: "/technologies", icon: Cpu },
    { name: "Portfolio", href: "/portfolio", icon: Briefcase },
    { name: "Products", href: "/products", icon: Box },
    { name: "Blog", href: "/blog", icon: Newspaper },
    { name: "About", href: "/about", icon: Info },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Contact", href: "/contact", icon: Mail },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed left-0 top-0 z-50 h-screen w-20 lg:w-64 flex-col justify-between border-r border-zinc-800 bg-black hidden md:flex">
            <div>
                {/* Logo */}
                <div className="flex h-20 items-center justify-center lg:justify-start lg:px-6 border-b border-zinc-800/50">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="p-2 rounded-xl bg-white text-black group-hover:scale-105 transition-transform">
                            <Code2 className="h-6 w-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white hidden lg:block">Codiq</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                                    isActive
                                        ? "text-white bg-zinc-900"
                                        : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
                                )}
                            >
                                <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-zinc-500 group-hover:text-white")} />
                                <span className="font-medium hidden lg:block">{item.name}</span>

                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full hidden lg:block"
                                    />
                                )}
                            </Link>
                        )
                    })}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-zinc-800/50">
                <Link
                    href="/login"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-900/50 transition-all"
                >
                    <LogIn className="h-5 w-5" />
                    <span className="font-medium hidden lg:block">Sign In</span>
                </Link>
            </div>
        </aside>
    )
}
