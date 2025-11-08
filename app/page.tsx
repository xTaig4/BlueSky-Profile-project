"use client";

import Image from "next/image";
import { useState } from "react";
import Avatar from "./components/Avatar";
import Projects from "./components/Projects";
import FloatingBar from "./components/Navigations/FloatingBar";

export default function Home() {
  const [showComponents, setShowComponents] = useState(true);

  return (
    <div className="gap-5 flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-blue-300">
      <FloatingBar />
      <div
        className={`flex flex-row gap-5 transform transition-all duration-500
          ${showComponents ? "opacity-100" : "opacity-0"}`}
      >
        <Avatar />
        <Projects />
      </div>
      <button
        className="h-15 w-25 border-6 p-4 rounded-lg fixed translate-y-100 bg-blue-400"
        onClick={() => setShowComponents(!showComponents)}
      >
        {showComponents ? "Hide" : "Show"}
      </button>
    </div>
  );
}
