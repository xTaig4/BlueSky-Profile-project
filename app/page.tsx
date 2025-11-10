"use client";

import Image from "next/image";
import { useState } from "react";
import Avatar from "./components/Avatar";
import Projects from "./components/Projects";
import FloatingBar from "./components/Navigations/FloatingBar";
import Profile from "./components/Profile";

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
    <div className="gap-5 flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-blue-300">
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
          </div>
        </div>

        <button
          className="h-15 w-25 border-6 text-2xl rounded-lg fixed translate-y-100 bg-blue-400"
          onClick={() => setShowComponents(!showComponents)}
        >
          {showComponents ? "Hide" : "Show"}
        </button>
      </div>
      <div className="absolute z-0">
        <div className="absolute -translate-x-170 -translate-y-70 opacity-85">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
        <div className="absolute -translate-x-20 -translate-y-115 opacity-85">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
        <div className="absolute translate-x-105 -translate-y-30 opacity-85">
          <div className="absolute h-18 w-22  translate-y-5 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-11 -translate-x-10 bg-white rounded-full"></div>
          <div className="absolute h-15 w-25 translate-y-14 translate-x-5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
