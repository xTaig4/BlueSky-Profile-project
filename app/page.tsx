"use client";

import { useState } from "react";
import Projects from "./components/Projects";
import FloatingBar from "./components/Navigations/FloatingBar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NightModeToggle from "./components/NightModeToggle";

export default function Home() {
  const tabs = ["Profile", "Projects", "Skills", "Contact"];
  const [showComponents, setShowComponents] = useState(true);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabSelect = (tab: string) => {
    if (tab !== selectedTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }
  };

  return (
    <div className=" gap-5 flex flex-col min-h-screen items-center justify-center font-sans bg-sky-300 dark:bg-night">
      <div className="absolute top-5 right-5">
        <NightModeToggle />
      </div>
      <div className="z-1 gap-5 flex flex-col min-h-screen items-center justify-center">
        <FloatingBar
          tab={tabs}
          activeTab={selectedTab}
          onSelect={handleTabSelect}
        />
        <div className="relative min-h-[200px]">
          <div
            className={`flex flex-row gap-5 transform transition-opacity duration-600
            ${showComponents && !isTransitioning ? "opacity-100" : "opacity-0"}`}
          >
            {selectedTab === "Projects" && <Projects />}
            {selectedTab === "Profile" && <Profile />}
            {selectedTab === "Skills" && <Skills />}
            {selectedTab === "Contact" && <Contact />}
          </div>
        </div>

        {/* <button
          className="h-15 w-25 border-6 text-2xl rounded-lg fixed translate-y-100 bg-blue-400"
          onClick={() => setShowComponents(!showComponents)}
        >
          {showComponents ? "Hide" : "Show"}
        </button> */}
      </div>
      {/* Clouds */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute translate-y-1 opacity-85 cloud-1">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full">
            1
          </div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
        <div className="absolute translate-y-35 opacity-85 cloud-2">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full">
            2
          </div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
        <div className="absolute translate-y-77 opacity-85 cloud-3">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full">
            3
          </div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
        <div className="absolute translate-y-120 opacity-85 cloud-4">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full">
            4
          </div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
