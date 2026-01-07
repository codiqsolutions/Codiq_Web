"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Target,
  Users,
  Lightbulb,
  ShieldCheck,
  Rocket,
} from "lucide-react"
import { PageHeader } from "@/components/PageHeader"

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Codiq Solutions"
        description="We build intelligent, scalable, and future-ready software solutions for modern businesses."
      />

      {/* WHO WE ARE */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Codiq Solutions is a technology-driven IT company focused on
                building high-quality software products that solve real-world
                business challenges.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We partner with startups, enterprises, and product teams to
                transform ideas into scalable digital solutions using modern
                technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-10"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Code2, label: "Clean Code" },
                  { icon: Rocket, label: "Scalable Systems" },
                  { icon: ShieldCheck, label: "Secure Architecture" },
                  { icon: Users, label: "Client-Focused" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 border border-slate-200 hover:shadow-md transition"
                  >
                    <item.icon className="h-6 w-6 text-blue-600" />
                    <span className="font-medium text-slate-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200 p-10 transition-all hover:shadow-xl"
            >
              <Target className="h-10 w-10 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver innovative, reliable, and scalable software
                solutions that empower businesses to grow faster and operate
                smarter.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200 p-10 transition-all hover:shadow-xl"
            >
              <Lightbulb className="h-10 w-10 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted global technology partner known for
                building intelligent digital products with long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600">
              The principles that guide everything we design, build, and
              deliver.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Innovation",
                desc: "We continuously explore new technologies and creative approaches.",
              },
              {
                title: "Integrity",
                desc: "Transparency, honesty, and trust define our client relationships.",
              },
              {
                title: "Excellence",
                desc: "We aim for high standards in code quality and user experience.",
              },
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-10 transition-all hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CODIQ */}
      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16">
            Why Choose Codiq Solutions
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Modern Technology Stack",
              "Scalable Product Architecture",
              "Dedicated Development Team",
              "Security-First Approach",
              "Transparent Communication",
              "On-Time Delivery",
            ].map((point) => (
              <div
                key={point}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-md transition"
              >
                <p className="font-medium text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
