"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import {
  Briefcase,
  FileText,
  Bot,
  Sparkles,
  ArrowUpRight,
  Clock,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function ProductsPage() {
  const texts = ["Full Stack Development", "Graphics Design", "Digital Marketing"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentFullText.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <>
      <PageHeader
        title="Our Products"
        description="Innovative software products currently under active development and future roadmap planning."
      />

      {/* CURRENT DEVELOPMENT */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">
              Our Projects
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Featured Live Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Carefully engineered platforms designed to
              deliver long-term value and scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* CONNECTIFY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-10 transition hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Briefcase className="h-7 w-7" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                  <Sparkles className="h-4 w-4" /> Live
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Smarty Inventory Management
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                Connectify is a professional networking and career growth platform
                aimed at connecting talent, recruiters, companies, and mentors
                within one intelligent digital ecosystem.
              </p>

              <Link href="/products/smarty-inventory" className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition">
                Project Overview <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* PDF CONVERTER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-10 transition hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <FileText className="h-7 w-7" />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                  <Sparkles className="h-4 w-4" /> Live
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Coffee Shop Management
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                A smart coffee shop e-commerce platform built to
                simplify digital ordering, enhance customer engagement,
                and optimize business operations.
              </p>

              <Link href="/products/coffee-shop" className="mt-8 inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700 transition">
                Project Overview <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FUTURE ROADMAP */}
      <section className="bg-linear-to-b from-blue-50 to-white py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <p className="text-sm font-semibold tracking-widest uppercase text-blue-600">
                Product Roadmap
              </p>
            </div>

            <h2 className="text-4xl font-extrabold text-slate-900">
              Future Innovations
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Upcoming AI-driven solutions focused on automation, intelligence,
              and scalable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Codiq AI Assistant",
                desc: "Intelligent assistant for workflow automation, insights, and decision support.",
              },
              {
                title: "VisionExtract",
                desc: "Advanced document intelligence powered by OCR and computer vision.",
              },
              {
                title: "Predictive Analytics Suite",
                desc: "Data-driven forecasting tools for business intelligence and e-commerce.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-blue-100 bg-white p-8"
              >
                <Bot className="h-6 w-6 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {item.desc}
                </p>
                <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Planned
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
