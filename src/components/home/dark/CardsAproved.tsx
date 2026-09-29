"use client";

import { CardData } from "@/assets/Dataa";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const SmallCardsDetailsNew = dynamic(
  () => import("@/components/models/SmallCardsDetailsNew"),
  { ssr: false }
);

function InViewVideo({
  src,
  title,
  onReady,
}: {
  src: string;
  title: string;
  onReady: (title: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadSource, setLoadSource] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadSource(true);
        } else {
          node.pause();
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!loadSource || !node) return;
    node.load();
    node.play().catch(() => {});
  }, [loadSource]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      poster="https://ik.imagekit.io/wjx8terl3/loading.jpg?updatedAt=1753686985755"
      preload="none"
      onCanPlayThrough={() => onReady(title)}
      className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300"
    >
      {loadSource ? <source src={`${src}#t=0.001`} type="video/mp4" /> : null}
    </video>
  );
}

const AnimatedCard = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const [selectedCard, setSelectedCard] = useState<null | (typeof CardData)[0]>(
    null
  );

  const handleMediaLoad = (title: string) => {
    setLoadingStates((prev) => ({ ...prev, [title]: false }));
  };

  const handleMediaStart = (title: string) => {
    setLoadingStates((prev) => ({ ...prev, [title]: true }));

    setTimeout(() => {
      setLoadingStates((prev) => {
        if (prev[title]) {
          return { ...prev, [title]: false };
        }
        return prev;
      });
    }, 9000);
  };

  return (
    <div
      id="Products"
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 md:mt-14 mt-4"
    >
      {CardData.map((card) => (
        <div
          key={card.title}
          onClick={() => setSelectedCard(card)}
          className="relative block overflow-hidden w-full cursor-pointer h-[300px] md:h-[500px] mx-auto my-0 bg-cover bg-center bg-no-repeat shadow-[0_0_80px_-10px_black] rounded-lg group transition-transform duration-300 ease-in-out hover:scale-[1.05]"
          style={
            !card.isVideo && !loadingStates[card.title]
              ? { backgroundImage: `url('${card.image}')` }
              : {}
          }
        >
          {loadingStates[card.title] && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-30">
              <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {card.isVideo && (
            <InViewVideo
              src={card.image}
              title={card.title}
              onReady={handleMediaLoad}
            />
          )}

          {!card.isVideo && (
            <Image
              src={card.image}
              alt={card.title}
              loading="lazy"
              height={500}
              width={400}
              sizes="(max-width: 768px) 50vw, 25vw"
              onLoadStart={() => handleMediaStart(card.title)}
              onLoad={() => handleMediaLoad(card.title)}
              className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 ${
                loadingStates[card.title]
                  ? "opacity-30 pointer-events-none blur-sm grayscale"
                  : "opacity-100"
              }`}
            />
          )}

          <div className="absolute md:bottom-0 w-full backdrop-blur-xs p-6 bg-[#0000005f] h-fit z-10  ">
            <h1 className="md:text-2xl font-light text-sm w-full mb-6 ">{card.title}</h1>
            <p className="md:text-sm text-xs font-light hidden md:block w-full h-fit z-10 ">
              {card.description}
            </p>
          </div>
        </div>
      ))}
      <SmallCardsDetailsNew
        open={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        cardData={selectedCard}
      />
    </div>
  );
};

export default AnimatedCard;
