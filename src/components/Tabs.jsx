import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="w-full bg-zinc-700 rounded-xl p-6 ">
      {/* Tab Buttons */}
      <div className="flex m-3 bg-black rounded-2xl p-2 ">
        <button
          className={`flex-1 py-2 px-4 rounded-2xl transition-colors duration-300  ${
            activeTab === "about"
              ? "bg-zinc-700 text-white shadow-xl shadow-black"
              : "bg-black text-gray-400"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-2xl transition-colors duration-300  ${
            activeTab === "experience"
              ? "bg-zinc-700 text-white shadow-xl shadow-black"
              : "bg-black text-gray-400"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experiences
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-2xl transition-colors duration-300  ${
            activeTab === "recommended"
              ? "bg-zinc-700 text-white shadow-xl shadow-black"
              : "bg-black text-gray-400"
          }`}
          onClick={() => setActiveTab("recommended")}
        >
          Recommended
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-400 mt-4">
        {activeTab === "about" && (
          <div>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. I was born and
            raised in Albany, NY& have been living in Santa Carla for the past
            10 years my wife Tiffany and my 4 year old twin daughters- Emma and
            Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </div>
        )}
        {activeTab === "experience" && <div>Here are my experiences...</div>}
        {activeTab === "recommended" && (
          <div>Here are my recommendations...</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
