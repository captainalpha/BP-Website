import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import SpotlightCard from "../animations/SpotlightCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import Image from "next/image";
import { GoCheckCircleFill } from "react-icons/go";
import RequestDemo from "./RequestDemo";

interface SmallCardsDetailsProps {
  open: boolean;
  onClose: () => void;
  cardData?: {
    title: string;
    image: string;
    modalImages: string[];
    isVideo?: boolean;
    icon: React.ReactNode;
    description: string;
    features: string[];
  } | null;
}

const SmallCardsDetails = ({
  open,
  onClose,
  cardData,
}: SmallCardsDetailsProps) => {
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!cardData?.modalImages) return;

    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          let maxRatio = 0;
          let maxIdx = 0;
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              maxIdx = Number(entry.target.getAttribute("data-idx"));
            }
          });
          if (maxRatio > 0) {
            setCurrentImageIdx(maxIdx);
            console.log("Image in view:", maxIdx);
          }
        },
        {
          root: imageContainerRef.current,
          threshold: 0.2,
        }
      );

      imageRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        imageRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, 0);
  }, [cardData?.modalImages]);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0  backdrop-blur-md transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-full overflow-y-auto pt-20 md:px-28">
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-lg text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-fit  data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="">
              <SpotlightCard className="custom-spotlight-card">
                <div className="flex w-[80vw] justify-between h-[60vh]">
                  <div className="flex flex-col   gap-4 justify-between cursor-pointer ">
                    <div className="text-3xl">
                      {cardData?.icon}
                      <h2 className="text-xl font-bold">{cardData?.title}</h2>
                      <p className="text-sm text-muted mt-2">
                        {cardData?.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      {cardData?.features.map((feature, idx) => (
                        <p key={idx} className="flex text-xs items-center mt-1">
                          <span>
                            <GoCheckCircleFill className="mr-2 text-green-300" />
                          </span>
                          {feature}
                        </p>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <button
                        onClick={() => setRequestDemoOpen(true)}
                        className="text-xs w-fit bg-black text-white p-4 cursor-pointer hover:bg-white hover:text-black border border-white transition-all duration-200 ease-in-out"
                      >
                        Book a Demo
                      </button>
                      <button className="text-xs w-fit bg-black text-white p-4 cursor-pointer hover:bg-white hover:text-black border border-white transition-all duration-200 ease-in-out">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="absolute right-1/2 text-center text-2xl font-bold ">
                    Our Demos
                  </div>
                  <div
                    ref={imageContainerRef}
                    className="overflow-auto h-[77vh] forHidScroll relative "
                  >
                    <div
                      className="relative "
                      style={{
                        height: `${
                          (cardData?.modalImages?.length || 0) * 600
                        }px`,
                      }}
                    >
                      {cardData?.modalImages.map((img, idx) => (
                        <div
                          key={idx}
                          ref={(el) => {
                            imageRefs.current[idx] = el;
                          }}
                          data-idx={idx}
                          className="sticky top-0 flex justify-center items-center"
                          style={{ height: "600px" }}
                        >
                          <div className="absolute bg-black top-28 w-28 h-6 rounded-lg text-center items-center">
                            <div className="w-full h-2 absolute text-[#6d6d6d]">
                              o
                            </div>
                          </div>
                          <Image
                            src={img}
                            alt={cardData?.title || "Bpaas"}
                            height={800}
                            width={800}
                            className="rounded-xl transition-opacity bg-black border border-white p-2 shadow-xl shadow-[#583b3b56] m-6 duration-300 "
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 absolute  right-5 top-1/2 transform -translate-x-1/2 z-10">
                    {cardData?.modalImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-2 rounded-full ${
                          idx === currentImageIdx ? "bg-white" : "bg-gray-400"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </DialogPanel>
        </div>
        <RequestDemo
          open={requestDemoOpen}
          onClose={() => setRequestDemoOpen(false)}
        />
      </div>
    </Dialog>
  );
};

export default SmallCardsDetails;
