"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Lottie from "lottie-react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

// Placeholder animation data (replace with your own Lottie JSON)
const lottieData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Placeholder",
  ddd: 0,
  assets: [],
  layers: []
};

const chartData = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 200 },
  { name: "D", value: 278 },
  { name: "E", value: 189 },
];

export default function Home() {
  // For navigation dots (optional, placeholder)
  const sections = ["Hero", "Animation", "Chart", "Summary"];
  const sectionRefs = sections.map(() => useRef<HTMLDivElement>(null));

  return (
    <div className="relative h-screen w-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      {/* Navigation Dots (right side, optional) */}
      <div className="fixed right-6 top-1/2 z-50 flex flex-col gap-4 -translate-y-1/2">
        {sections.map((_, i) => (
          <button
            key={i}
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 border-2 border-white shadow transition-colors"
            onClick={() => sectionRefs[i].current?.scrollIntoView({ behavior: "smooth" })}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* Section 1: Hero */}
      <section
        ref={sectionRefs[0]}
        className="h-screen snap-start flex flex-col items-center justify-center px-4 text-center relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent"
        >
          Vertex Open Innovation Study
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mb-8"
        >
          Insights, data, and trends from the forefront of open innovation. Scroll to explore the report.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8"
        >
          <ArrowDownIcon className="w-8 h-8 text-blue-500 animate-bounce" />
        </motion.div>
      </section>

      {/* Section 2: Animated Graphic */}
      <section
        ref={sectionRefs[1]}
        className="h-screen snap-start flex flex-col items-center justify-center px-4 bg-white dark:bg-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Animated Graphic</h2>
          <div className="w-48 h-48">
            <Lottie animationData={lottieData} loop={true} />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">(Replace with your own Lottie animation)</p>
        </motion.div>
      </section>

      {/* Section 3: Chart */}
      <section
        ref={sectionRefs[2]}
        className="h-screen snap-start flex flex-col items-center justify-center px-4 bg-gray-50 dark:bg-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-teal-600">Sample Chart</h2>
          <div className="w-full max-w-xs h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Bar dataKey="value" fill="#38bdf8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">(Replace with your own data)</p>
        </motion.div>
      </section>

      {/* Section 4: Call to Action / Summary */}
      <section
        ref={sectionRefs[3]}
        className="h-screen snap-start flex flex-col items-center justify-center px-4 bg-gradient-to-b from-teal-100 to-blue-200 dark:from-gray-900 dark:to-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Ready to Innovate?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-xl text-center">
            Join us in shaping the future of open innovation. Contact us or scroll back up to explore more insights!
          </p>
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition">Contact Us</button>
        </motion.div>
      </section>

      {/* Footer (optional, can be a small sticky footer or inside last section) */}
      <footer className="absolute bottom-0 left-0 w-full py-4 text-center text-gray-500 text-sm pointer-events-none">
        &copy; {new Date().getFullYear()} Vertex Open Innovation Study. All rights reserved.
      </footer>
    </div>
  );
}
