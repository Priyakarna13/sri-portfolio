"use client";
import React, { useState } from "react";
import { hobbies } from "@/data/hobbies";
import { Camera, Globe2 } from "lucide-react";

export default function HobbiesGallery() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="px-8 py-20 min-h-screen bg-transparent text-white">
      {/* ---------- HEADER ---------- */}
      <h1 className="text-5xl font-display font-bold text-center mb-4">
        Hobbies
      </h1>
      <p className="text-center text-gray-300 mb-12 text-lg">
        Beyond code, here are a few things that bring me joy ✨
      </p>

      {/* ---------- MAIN OPTIONS ---------- */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-16">
        {/* Photography Card */}
        <div
          onClick={() =>
            setActiveSection(activeSection === "photography" ? null : "photography")
          }
          className={`cursor-pointer group w-80 h-48 rounded-xl border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-md flex flex-col justify-center items-center shadow-md hover:shadow-yellow-400/20 hover:scale-105 ${
            activeSection === "photography"
              ? "border-yellow-400 shadow-yellow-400/30"
              : ""
          }`}
        >
          <Camera
            size={40}
            className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
          />
          <h2 className="text-2xl font-semibold mt-3">Photography</h2>
          <p className="text-gray-400 text-sm mt-2">
            Click to explore my captures
          </p>
        </div>

        {/* Travel Card */}
        <div
          onClick={() =>
            setActiveSection(activeSection === "travel" ? null : "travel")
          }
          className={`cursor-pointer group w-80 h-48 rounded-xl border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 bg-gradient-to-br from-gray-800/30 to-gray-700/20 backdrop-blur-md flex flex-col justify-center items-center shadow-md hover:shadow-yellow-400/20 hover:scale-105 ${
            activeSection === "travel"
              ? "border-yellow-400 shadow-yellow-400/30"
              : ""
          }`}
        >
          <Globe2
            size={40}
            className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
          />
          <h2 className="text-2xl font-semibold mt-3">Travel</h2>
          <p className="text-gray-400 text-sm mt-2">
            Click to explore my journeys
          </p>
        </div>
      </div>

      {/* ---------- PHOTOGRAPHY SECTION ---------- */}
      {activeSection === "photography" && (
        <section className="animate-fadeIn mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400 text-center">
            Photography
          </h2>
          <p className="text-gray-300 mb-10 text-center max-w-2xl mx-auto">
            Capturing sunsets, reflections, and fleeting city moments 📸
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {hobbies.photography.map((photo, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden bg-gray-900/40 hover:scale-[1.03] transition-transform duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-64"
                />
                <p className="p-3 text-sm text-gray-300 text-center bg-gray-800/60">
                  {photo.alt}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ---------- TRAVEL SECTION ---------- */}
      {activeSection === "travel" && (
        <section className="animate-fadeIn mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-yellow-400 text-center">
            Travel
          </h2>
          <p className="text-gray-300 mb-10 text-center max-w-2xl mx-auto">
            Exploring landscapes, cultures, and stories from around the world 🌍
          </p>

          {Object.entries(hobbies.travel).map(([state, photos]) => (
            <div key={state} className="mb-16">
              <h3 className="text-2xl font-medium mb-4 text-center border-b border-gray-700 inline-block pb-1">
                {state.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {photos.map((photo, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden bg-gray-900/40 hover:scale-[1.03] transition-transform duration-300"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="object-cover w-full h-64"
                    />
                    <p className="p-3 text-sm text-gray-300 text-center bg-gray-800/60">
                      {photo.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
