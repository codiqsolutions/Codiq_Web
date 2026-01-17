"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Globe, Layers, Server, Code, Smartphone, Cloud } from "lucide-react"

const technologies = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "Python", icon: SnakeIcon },
    { name: "PostgreSQL", icon: Database },
    { name: "AWS", icon: Cloud },
    { name: "Three.js", icon: Layers },
    { name: "TensorFlow", icon: Cpu },
    { name: "Flutter", icon: Smartphone },
    { name: "Docker", icon: ContainerIcon },
]

// Fallback icons for specific branded tech if Lucide doesn't cover them well
function SnakeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v20M2 12h20" strokeOpacity="0" />
            {/* Simplified generic shape or placeholder if actual SVG paths are complex/unavailable to generate perfectly. 
          Using Lucide defaults is safer, but for Python/Docker we might want custom SVGs. 
          For now, I'll use Lucide generic icons or simple replacements to ensure it compiles.
      */}
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    )
}

function ContainerIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M21 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" /><path d="M12 6V3" /></svg>
    )
}


export function Technologies() {
    return (
        <section id="technologies" className="py-24 bg-white dark:bg-black overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        Powered by Modern Tech
                    </h2>
                    <div className="h-1 w-20 bg-black dark:bg-white mx-auto mt-4 rounded-full" />
                </motion.div>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap space-x-12 px-6">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 mx-4 group/item cursor-default">
                            <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 group-hover/item:border-zinc-400 dark:group-hover/item:border-zinc-600 group-hover/item:scale-110 transition-all duration-300">
                                <tech.icon className="h-10 w-10 text-zinc-600 dark:text-zinc-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap space-x-12 px-6">
                    {technologies.map((tech, index) => (
                        <div key={`dup-${index}`} className="flex flex-col items-center space-y-4 mx-4 group/item cursor-default">
                            <div className="h-20 w-20 flex items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 group-hover/item:border-zinc-400 dark:group-hover/item:border-zinc-600 group-hover/item:scale-110 transition-all duration-300">
                                <tech.icon className="h-10 w-10 text-zinc-600 dark:text-zinc-400 group-hover/item:text-black dark:group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles for marquee animation need to be in global css or tailwind config, 
          but we can add inline style for now or updating globals.css 
      */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        .group:hover .animate-marquee,
        .group:hover .animate-marquee2 {
            animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}
