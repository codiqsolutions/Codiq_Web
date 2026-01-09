"use client"

import { PageHeader } from "@/components/PageHeader"
import { motion } from "framer-motion"
import { useState } from "react"
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiRestapi,
  SiHtml5,
  SiAndroid,
  SiApple,
  SiFlutter,
  SiMicrosoftazure,
  SiAmazonaws,
  SiGooglecloud,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
} from "react-icons/si"
import { FaCode, FaDatabase, FaMobileAlt, FaCloud, FaPaintBrush } from "react-icons/fa"

// Technology logo mapping
const techLogos: Record<string, React.ComponentType<{ className?: string }>> = {
  "JavaScript": SiJavascript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "TypeScript": SiTypescript,
  "REST APIs": SiRestapi,
  "Frontend UI": SiHtml5,
  "Android Apps": SiAndroid,
  "iOS Apps": SiApple,
  "Cross-Platform Apps": SiFlutter,
  "Custom Software": FaCode,
  "SaaS Platforms": FaCloud,
  "API Integrations": SiRestapi,
  "Automation Tools": FaCode,
  "Enterprise Systems": SiMicrosoftazure,
  "Digital Marketing": FaPaintBrush,
  "SEO & Growth": FaPaintBrush,
  "Graphics Design": SiAdobephotoshop,
  "UI / UX Design": SiFigma,
  "PostgreSQL": SiPostgresql,
  "Prisma ORM": SiPrisma,
  "Database Architecture": FaDatabase,
}

const rows = [
  {
    cols: "grid-cols-9",
    size: "h-28 w-28",
    items: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "REST APIs",
      "Frontend UI",
    ],
  },
  {
    cols: "grid-cols-8",
    size: "h-32 w-32",
    items: [
      "Android Apps",
      "iOS Apps",
      "Cross-Platform Apps",
      "Custom Software",
      "SaaS Platforms",
      "API Integrations",
      "Automation Tools",
      "Enterprise Systems",
    ],
  },
  {
    cols: "grid-cols-7",
    size: "h-36 w-36",
    items: [
      "Digital Marketing",
      "SEO & Growth",
      "Graphics Design",
      "UI / UX Design",
      "PostgreSQL",
      "Prisma ORM",
      "Database Architecture",
    ],
  },
]

export default function Technologies() {
  return (
    <>
      <PageHeader
        title="Our Technology Expertise"
        description="A multidimensional technology ecosystem built for modern digital products."
      />

      <section className="relative bg-white py-44 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100 blur-[120px] opacity-60" />
        </div>

        <div className="mx-auto max-w-7xl px-6 space-y-28">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid ${row.cols} justify-center gap-x-14 gap-y-20`}
            >
              {row.items.map((text, i) => (
                <motion.div
                  key={text}
                  animate={{ y: [0, -16, 0] }}
                  transition={{
                    duration: 4.5 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                  className={`
                    ${row.size}
                    rounded-full
                    bg-gradient-to-br
                    from-blue-50/70
                    via-white/60
                    to-indigo-50/70
                    backdrop-blur-2xl
                    border border-blue-100/60
                    shadow-[0_40px_90px_rgba(59,130,246,0.15)]
                    flex items-center justify-center
                    text-center
                    relative
                  `}
                >
                  {/* Inner glass reflection */}
                  <div className="absolute inset-3 rounded-full bg-blue-100/30 blur-xl" />

                  <span className="relative z-10 px-4 text-sm font-semibold text-slate-800">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
