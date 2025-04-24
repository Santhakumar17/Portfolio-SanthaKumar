import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className="fixed h-full w-full overflow-y-auto bg-white">
      <SpeedInsights />
      <Analytics />
      <main className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;