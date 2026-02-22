"use client"

import { motion } from "framer-motion"
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Rocket,
} from "lucide-react"

const industries = [
  {
    icon: Landmark,
    title: "FinTech",
    focus: "Security, compliance, real-time processing",
    solution:
      "Payment systems, dashboards, risk monitoring, scalable financial platforms.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    focus: "Data privacy, accuracy, reliability",
    solution:
      "Patient portals, healthcare dashboards, analytics & secure data systems.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    focus: "Engagement, accessibility, scalability",
    solution:
      "Learning platforms, admin portals, performance tracking systems.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    focus: "Performance, conversion, automation",
    solution:
      "Custom stores, admin panels, payment flows & analytics systems.",
  },
  {
    icon: Truck,
    title: "Logistics",
    focus: "Tracking, optimization, operations",
    solution:
      "Supply chain dashboards, tracking tools & workflow automation.",
  },
  {
    icon: Rocket,
    title: "Startups",
    focus: "Speed, validation, growth",
    solution:
      "MVPs, scalable architectures & rapid product iterations.",
  },
]

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-16 lg:mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-slate-600"
          >
            Our experience spans multiple industries, allowing us to design
            scalable systems that solve real business challenges.
          </motion.p>
        </div>

        {/* Matrix */}
        <div className="divide-y divide-slate-200">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-4 py-8 sm:py-10 md:grid-cols-3 md:gap-6"
            >
              {/* Industry */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>

              {/* Focus */}
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Industry Focus
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  What We Build
                </p>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
