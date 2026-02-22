"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Rocket,
  Users,
  Code2,
  Clock,
  TrendingUp,
} from "lucide-react"

type Feature = {
  icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "We build future-ready applications designed to scale with your business growth.",
  },
  {
    icon: Code2,
    title: "Clean & Modern Code",
    description:
      "Industry best practices, optimized performance, and maintainable codebases.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We collaborate closely with clients to deliver solutions aligned with real needs.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Strong focus on data protection, secure authentication, and safe transactions.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Agile development process ensures timely delivery without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Business-Driven Results",
    description:
      "Technology solutions crafted to improve efficiency, revenue, and user experience.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32">
      {/* Soft background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-violet-100 blur-3xl opacity-60" />
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
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-slate-600"
          >
            We combine technology, strategy, and creativity to deliver reliable
            digital solutions that create real business value.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:bg-blue-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
