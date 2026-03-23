import dynamic from "next/dynamic"
import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"

// Dynamically lazy-load below the fold components
const Approach = dynamic(() => import("@/components/home/Approch").then((mod) => mod.Approach))
const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"))
const TechnologiesWeUse = dynamic(() => import("@/components/home/TechnologiesWeUse"))
const CompanyStats = dynamic(() => import("@/components/home/CompanyStats"))
const Testimonials = dynamic(() => import("@/components/home/Testimonials"))
const IndustriesWeServe = dynamic(() => import("@/components/home/IndustriesWeServe"))
const CTA = dynamic(() => import("@/components/home/CTA"))

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <WhyChooseUs />
      <TechnologiesWeUse />
      <CompanyStats />
      <Testimonials />
      <IndustriesWeServe />
      <CTA />
    </>
  )
}
