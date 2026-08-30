import { useState } from "react";

import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Features } from "./components/sections/Features";
import { FeaturedLoaders } from "./components/sections/FeaturedLoaders";
import { Installation } from "./components/sections/Installation";
import { InteractivePlayground } from "./components/sections/InteractivePlayground";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const [selectedPlaygroundLoader, setSelectedPlaygroundLoader] =
    useState<string>("orbit");

  const handleSelectPlaygroundLoader = (loaderId: string) => {
    setSelectedPlaygroundLoader(loaderId);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-teal-100 selection:text-teal-900">

      {/* Navbar */}
      <Navbar
        onSelectPlaygroundLoader={handleSelectPlaygroundLoader}
      />

      {/* Main Content */}
      <main className="flex-1">

        {/* Hero */}
        <Hero
          onSelectPlaygroundLoader={handleSelectPlaygroundLoader}
        />

        {/* Features */}
        <Features />

        {/* Featured Loaders */}
        <FeaturedLoaders
          onSelectPlaygroundLoader={handleSelectPlaygroundLoader}
        />

        {/* Installation */}
        <Installation />

        {/* Interactive Playground */}
        <InteractivePlayground
          selectedLoaderId={selectedPlaygroundLoader}
          onSelectLoaderId={setSelectedPlaygroundLoader}
        />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}