"use client"

import { Sidebar } from "./Sidebar"
import { Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Code2 } from "lucide-react"

export function AppShell({ children }: { children: React.ReactNode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-black text-zinc-100 flex">
            {/* Sidebar (Desktop) */}
            <Sidebar />

            {/* Mobile Header (Visible on small screens) */}
            <div className="md:hidden fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-white text-black">
                        <Code2 className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-white">Codiq</span>
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-zinc-400 hover:text-white"
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu Overlay (Simple implementations for now) */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black pt-20 px-4 md:hidden">
                    <nav className="space-y-4">
                        <Link href="/" className="block py-2 text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/services" className="block py-2 text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                        <Link href="/portfolio" className="block py-2 text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
                        <Link href="/about" className="block py-2 text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="block py-2 text-lg font-medium text-zinc-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                        <Link href="/login" className="block py-2 text-lg font-medium text-white bg-zinc-900 rounded-lg px-4 mt-4" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                    </nav>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 w-full md:pl-20 lg:pl-64 min-h-screen transition-all duration-300">
                <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-10 pt-20 md:pt-10">
                    {children}
                </div>
            </main>
        </div>
    )
}
