"use client"
import { Skill } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
// import skillsData from "./skillsData"; // your JSON data


export default function SkillsSection({ skillsData }: { skillsData: Skill[] }) {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    const activeSkills =
        skillsData.find((item) => item.title === activeCategory)?.skills || [];

    return (
        <div className="flex flex-col items-center justify-center py-16 bg-[#050a1f] text-cyan-400">
            <h2 className="text-3xl font-semibold mb-8">My Skills</h2>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
                {skillsData.map((category) => (
                    <button
                        key={category.title}
                        onClick={() => setActiveCategory(category.title)}
                        className={`px-4 py-2 rounded-md border text-sm font-medium transition-all duration-300
              ${activeCategory === category.title
                                ? "bg-cyan-500 text-white border-cyan-400 shadow-md"
                                : "border-cyan-500 text-cyan-400 hover:bg-cyan-600/20"
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Skill Icons */}
            <div className="flex flex-wrap justify-center gap-6">
                {activeSkills.map((skill) => (
                    <div
                        key={skill.skill}
                        className="group  transition-all duration-300"
                    >
                        <div className="flex flex-col items-center justify-center p-4 border border-cyan-400 rounded-xl  hover:bg-cyan-400/10">
                            <Image
                                src={skill.icon}
                                alt={skill.skill}
                                width={500}
                                height={500}
                                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300 bg-white rounded-full p-1"
                            />
                        </div>
                        <p className="opacity-0 group-hover:opacity-100 text-sm text-cyan-300 mt-2 transition-all duration-300 text-center">
                            {skill.skill}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

