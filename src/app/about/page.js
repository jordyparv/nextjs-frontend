"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#f6f3ed] pt-36 overflow-x-hidden">

      {/* Subtle Paper Grain */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.4)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-8 text-center mb-40">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.7em] text-[11px] text-[#b9974d]"
        >
          About Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-[64px] leading-[1.05] font-serif text-[#111]"
        >
          Where Influence Meets Insight
        </motion.h1>

        {/* Gold Editorial Rule */}
        <div className="mt-10 mx-auto w-16 h-[2px] bg-[#b9974d]" />

        <p className="mt-12 text-xl italic text-black/70 max-w-3xl mx-auto leading-relaxed">
          Frontier Insights is a global editorial platform spotlighting the
          thinkers, builders, and leaders shaping tomorrow’s industries.
        </p>

      </section>

      {/* ================= STORY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-20 mb-48">

        <div className="lg:col-span-7 text-[19px] leading-[1.9] text-black/80 font-serif">

          <h2 className="text-3xl font-serif mb-6">
            Our Story
          </h2>

          <div className="w-12 h-[2px] bg-[#b9974d] mb-10" />

          <p className="first-letter:text-6xl first-letter:mr-3 first-letter:float-left first-letter:text-[#b9974d]">
            Frontier Insights was born from a belief that leadership deserves
            depth. In a world flooded with noise, we curate voices that shape
            industries with clarity and conviction.
          </p>

          <p className="mt-8">
            Through magazines, podcasts, and editorial features, we bridge
            influence and intellect, highlighting the stories behind innovation.
          </p>

        </div>

        <div className="lg:col-span-5 relative">

          <div className="absolute inset-0 blur-[120px] bg-[#b9974d]/20 rounded-full" />

          <img
            src="/team1.jpg"
            className="relative shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
          />

        </div>

      </section>

      {/* ================= VALUES GRID ================= */}
      <section className="max-w-7xl mx-auto px-8 mb-48">

        <h2 className="text-center text-3xl font-serif mb-20">
          Our Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-16">

          {[
            {
              title: "Editorial Integrity",
              text: "We prioritize truth, depth, and credibility in every feature."
            },
            {
              title: "Global Perspective",
              text: "Our lens spans industries, cultures, and continents."
            },
            {
              title: "Luxury in Detail",
              text: "Every story is crafted with refined design and thoughtful narrative."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto w-10 h-[2px] bg-[#b9974d] mb-6" />
              <h3 className="text-xl font-medium mb-6">{item.title}</h3>
              <p className="text-black/70 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= TIMELINE ================= */}
      <section className="max-w-6xl mx-auto px-8 mb-48">

        <h2 className="text-3xl font-serif mb-16 text-center">
          Our Journey
        </h2>

        <div className="relative border-l border-black/20 ml-6 space-y-16">

          {[
            { year: "2022", text: "Founded as a digital editorial platform." },
            { year: "2023", text: "Launched our first global leadership issue." },
            { year: "2024", text: "Expanded into podcasts and multimedia." },
            { year: "2025", text: "Recognized among premium editorial brands." }
          ].map((item, i) => (
            <div key={i} className="relative pl-10">

              <div className="absolute -left-[7px] top-1 w-3 h-3 bg-[#b9974d] rounded-full" />

              <h4 className="font-medium">{item.year}</h4>
              <p className="text-black/70">{item.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="text-center pb-32">

        <h2 className="text-4xl font-serif mb-8">
          Join the Narrative
        </h2>

        <div className="w-16 h-[2px] bg-[#b9974d] mx-auto mb-12" />

        <button className="px-10 py-4 border border-[#b9974d] text-[#b9974d] hover:bg-[#b9974d] hover:text-white transition">
          Contact Us
        </button>

      </section>

    </main>
  )
}