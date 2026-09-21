"use client";

import { CardData } from "@/assets/Dataa";
import RequestDemo from "@/components/models/RequestDemo";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import styles from "@/components/ui/HoverCards.module.css";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoEyeClosed } from "react-icons/go";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const searchParams = useSearchParams();
  const page = searchParams?.get("page");

  useEffect(() => {
    if (selectedImage) {
      setTimeout(() => setShowModal(true), 10);
    } else {
      setShowModal(false);
    }
  }, [selectedImage]);

  if (!page) return null;

  const found = CardData.find((el) => el?.id === page);
  if (!found) return null;

  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div className="relative md:h-[86vh] h-[34vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/Untitled design.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 w-full flex justify-center items-center px-6 md:px-20 h-full text-white">
          <div className="bg-[#1818183e] shadow backdrop-blur-xs p-8 flex flex-col items-center justify-center">
            <h1 className="md:text-6xl text-3xl text-center  font-bold text-[#ec964d]">
              {found.title}
            </h1>
            <p className="md:text-xl  text-center mt-4 max-w-xl text-white">
              {found.description}
            </p>
          </div>
        </div>
      </div>

      <main className="bg-zinc-950 text-white relative min-h-screen px-4 md:px-16 py-16">
        {/* features */}
        <div className={styles.container}>
          {found.useCases && (
            <div className={styles.box}>
              <span></span>
              <div className={styles.content}>
                <h2>Use Cases</h2>
                <p>
                  {found.useCases.map((ucs2, i) => (
                    <li className="text-sm py-1" key={i}>
                      {ucs2}
                    </li>
                  ))}
                </p>
              </div>
            </div>
          )}
          {found.features && (
            <div className={`${styles.box}`}>
              <span></span>
              <div className={styles.content}>
                <h2>Features</h2>
                <p>
                  {found.features.map((ucs2, i) => (
                    <li className="text-sm py-1 whitespace-normal" key={i}>
                      {ucs2}
                    </li>
                  ))}
                </p>
              </div>
            </div>
          )}
          {found.benefits && (
            <div className={styles.box}>
              <span></span>
              <div className={styles.content}>
                <h2>Benefits</h2>
                <p>
                  {found.benefits.map((ucs2, i) => (
                    <li className="text-sm py-1" key={i}>
                      {ucs2}
                    </li>
                  ))}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Industries */}
        {found.industryApplications && (
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Industry Applications</h2>
            <ul className="flex flex-wrap gap-3 text-sm text-[#ef7f1a]">
              {found.industryApplications.map((industry, i) => (
                <li
                  key={i}
                  className="bg-[#ef7d1a2b] px-4 py-1 rounded-full shadow-md"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* longDescription */}
        <CardSpotlight className="p-6 rounded-2xl border border-[#1D3A52] shadow-sm  mb-20 max-w-5xl mx-auto ">
          <h2 className="text-3xl font-bold mb-6 text-[#ef7f1a] relative z-20">
            Solution Highlight
          </h2>
          <div className="relative z-20 text-white  ">
            {found.longDescription}
          </div>
        </CardSpotlight>

        {/* Pain Points */}
        {found.painPointsSolved && (
          <CardSpotlight className="mb-16 max-w-5xl mx-auto p-6 rounded-2xl border border-[#1D3A52] shadow-sm">
            <h2 className="text-3xl font-bold mb-6 relative z-20 text-[#ef7f1a]">
              Problems Solved
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 list-disc relative z-20 pl-5 text-zinc-300">
              {found.painPointsSolved.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </CardSpotlight>
        )}

        {/* Modal Images */}
        {found.modalImages?.length > 0 && (
          <section className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Screenshots & Visuals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {found.modalImages.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Modal Screenshot ${i + 1}`}
                  width={300}
                  height={200}
                  className="rounded-xl hover:scale-105 transition-all duration-200 ease-in-out object-cover cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            {/* Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                onClick={() => setSelectedImage(null)}
              >
                <div
                  className={`
              relative
              transition-all duration-300 ease-in-out
              ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selectedImage}
                    alt="Enlarged Screenshot"
                    width={900}
                    height={600}
                    className="rounded-xl max-h-[80vh] max-w-[90vw] object-contain"
                  />
                  <button
                    className="absolute top-2 right-2 p-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    <GoEyeClosed className="bg-black text-3xl p-1 shadow rounded-full border-2 border-white cursor-pointer hover:scale-105 hover:bg-red-600 transition-all duration-200 ease-in-out" />
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* FAQ */}
        {found.faq?.length > 0 && (
          <section className="mb-20 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {found.faq.map((qa, i) => (
                <CardSpotlight
                  key={i}
                  className=" p-6 rounded-2xl border border-[#1D3A52] shadow-sm"
                >
                  <h4 className="text-xl font-semibold mb-2 relative z-20 text-[#ef7f1a]">
                    {qa.question}
                  </h4>
                  <p className="text-zinc-300 relative z-20">{qa.answer}</p>
                </CardSpotlight>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center mt-24">
          <h3 className="text-3xl font-bold mb-4 text-[#ffffff]">
            Want to See {found.title} in Action?
          </h3>
          <Button
            onClick={() => setRequestDemoOpen(true)}
            className="px-6 py-5 text-sm cursor-pointer font-medium bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-200"
          >
            {found.ctaLabel || "Book a Demo"}
          </Button>
        </section>
        <RequestDemo
          open={requestDemoOpen}
          onClose={() => setRequestDemoOpen(false)}
        />
      </main>
    </div>
  );
};

export default Services;
