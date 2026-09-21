import { CardData } from "@/assets/Dataa";
import SmallCardsDetailsNew from "@/components/models/SmallCardsDetailsNew";
import Image from "next/image";
import React, { useState } from "react";

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
          console.warn(`Safari fallback triggered for ${title}`);
          return { ...prev, [title]: false };
        }
        return prev;
      });
    }, 9000);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 md:mt-14 mt-4">
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
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://ik.imagekit.io/wjx8terl3/loading.jpg?updatedAt=1753686985755"
              preload="metadata"
              onCanPlayThrough={() => handleMediaLoad(card.title)}
              className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-300 `}
            >
              <source src={`${card.image}#t=0.001`} type="video/mp4" />
            </video>
          )}

          {!card.isVideo && (
            <Image
              src={card.image}
              alt={card.title}
              loading="lazy"
              height={10000}
              width={10000}
              sizes="100vh"
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
            <h1 className="md:text-2xl text-sm w-full mb-6 ">{card.title}</h1>
            <p className="md:text-sm text-xs hidden md:block w-full h-fit z-10 ">
              {card.description}
            </p>
          </div>

          {/* <h1
            style={{ fontFamily: "var(--font-inter)" }}
            className="p-6 md:text-2xl font-bold backdrop-blur-xs bg-[#0000002d]"
          >
            {card.title}
          </h1>

          <div className="absolute bottom-0 w-full h-fit z-10">
            <div className="p-5 h-fit backdrop-blur-md transform translate-y-[250px] group-hover:translate-y-0 transition duration-400 ease-[cubic-bezier(0.31,1.21,0.64,1.02)] font-mono">
              <div
                style={{ fontFamily: "var(--font-inter)" }}
                className="mt-2 text-white"
              >
                {card.description}
              </div>
            </div>
          </div> */}
        </div>
      ))}
      <SmallCardsDetailsNew
        open={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        cardData={selectedCard}
      />
      {/* <SmallCardsDetails
        open={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        cardData={selectedCard}
      /> */}
    </div>
  );
};

export default AnimatedCard;
