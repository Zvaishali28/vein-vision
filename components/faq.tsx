"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    key: "1",
    question: "What is VeinVision and how does it work?",
    answer:
      "VeinVision is an AI-powered varicose vein diagnostic and monitoring platform. It uses deep learning to detect varicose veins from leg images, wearable sensors to monitor blood flow and leg motion, and provides personalized risk assessment and preventive care suggestions.",
  },
  {
    key: "2",
    question: "Is VeinVision suitable for home use?",
    answer:
      "Yes. VeinVision is designed to be patient-friendly and can be used at home to monitor vein health, track symptoms, and receive real-time guidance from the AI assistant in multiple languages.",
  },
  {
    key: "3",
    question: "Which wearable sensors are compatible?",
    answer:
      "VeinVision supports IMU sensors for leg motion tracking and Doppler/pulse sensors for monitoring blood flow. These sensors provide real-time data to the platform for accurate monitoring and alerts.",
  },
  {
    key: "4",
    question: "Can I share my reports with my doctor?",
    answer:
      "Absolutely. VeinVision generates PDF health reports summarizing diagnosis, risk scores, and wearable data, which can be easily shared with healthcare professionals for consultations or follow-ups.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | false>("1");

  const toggleFAQ = (key: string) => {
    setExpanded(expanded === key ? false : key);
  };

  return (
    <section className="bg-vascular-light py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-vascular-border/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-medical-accent font-medical leading-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = expanded === faq.key;

            return (
              <div
                key={faq.key}
                className="bg-medical-light rounded-3xl shadow-md transition-all duration-300 border border-vascular-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.key)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-left text-slate-100 font-semibold text-sm sm:text-base lg:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`transition-all pr-4 ${isOpen ? "font-bold text-medical-accent" : ""}`}>
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`ml-2 sm:ml-4 text-slate-400 transform transition-transform duration-500 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-medical-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out px-4 sm:px-6 text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="py-3 sm:py-4">{faq.answer}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
