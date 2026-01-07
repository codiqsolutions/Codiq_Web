"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-36">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[600px] bg-blue-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            Trusted IT & Software Solutions
            <ChevronRight className="h-4 w-4 opacity-60" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          Engineering Digital
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Products That Scale
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
        >
          We build high-performance web platforms, mobile applications, and
          AI-powered systems for startups and enterprises worldwide.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 rounded-full px-8 text-base 
             bg-[var(--primary)] 
             text-white 
             hover:bg-[var(--primary-hover)]
             shadow-lg shadow-blue-600/20"
            asChild
          >
            <Link href="/contact">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 rounded-full px-8 text-base
             border-[var(--primary)]
             text-[var(--primary)]
             hover:bg-[var(--primary-light)]"
            asChild
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
