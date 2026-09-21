import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { GoCheckCircleFill } from "react-icons/go";
import Expandable from "../ui/expandable";
import CursorTracker from "../ui/CursorTracker";
import Link from "next/link";
import RequestDemo from "./RequestDemo";
import Image from "next/image";

interface SmallCardsDetailsProps {
  open: boolean;
  onClose: () => void;
  cardData?: {
    title: string;
    openPage: string;
    image: string;
    modalImages: string[];
    isVideo?: boolean;
    icon: string;
    description: string;
    features: string[];
  } | null;
}

const SmallCardsDetailsNew = ({
  open,
  onClose,
  cardData,
}: SmallCardsDetailsProps) => {
  // const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<"text" | "image">("text");
  const textSectionRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);

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
            // setCurrentImageIdx(maxIdx);
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

  useEffect(() => {
    if (!open) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === textSectionRef.current && entry.isIntersecting) {
          setActiveSection("text");
        }
        if (entry.target === imageSectionRef.current && entry.isIntersecting) {
          setActiveSection("image");
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: document.querySelector(".forHidScroll"), // scrollable container
      threshold: 0.5, // 50% visible
    });

    if (textSectionRef.current) observer.observe(textSectionRef.current);
    if (imageSectionRef.current) observer.observe(imageSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setActiveSection("text");
      setTimeout(() => {
        textSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0  backdrop-blur-md transition-opacity  data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-full  pt-20 md:px-28">
        <div className="flex  min-h-full items-center justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-lg text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-fit  data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="">
              <div className="absolute hidden md:flex gap-4 z-20 bottom-2 left-1/2 -translate-x-1/2 bg-[#6262625b] backdrop-blur-xs rounded-lg p-2 ">
                {["text", "image"].map((section) => (
                  <label
                    key={section}
                    className={`w-4 h-4 rounded-full border-2 cursor-pointer ${
                      activeSection === section
                        ? "bg-white border-white"
                        : "bg-transparent border-gray-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="section"
                      checked={activeSection === section}
                      onChange={() => {
                        setActiveSection(section as "text" | "image");
                        const sectionRef =
                          section === "text" ? textSectionRef : imageSectionRef;
                        setTimeout(() => {
                          sectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }, 0);
                      }}
                      className="hidden"
                    />
                  </label>
                ))}
              </div>

              <div className="bg-[#1a1a1a] border-2 border-[#4f4f4f] p-6 md:px-0 rounded-2xl md:h-fit flex w-[90vw] md:w-[60vw] overflow-x-auto  forHidScroll">
                <section
                  id="text-section"
                  ref={textSectionRef}
                  className="snap-start flex justify-between items-center md:p-6 gap-5  md:w-[60vw] rounded-2xl"
                >
                  <div className="md:w-[35vw] ">
                    {/* Header Section */}
                    <div className="md:flex items-center gap-4">
                      <div>
                        <Image
                          src={cardData?.icon || "/fallback.png"}
                          alt={`${cardData?.title ?? "icon"} icon`}
                          width={100}
                          height={100}
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,..."
                        />
                      </div>
                      {/* <div className="text-4xl">{cardData?.icon}</div> */}
                      <div>
                        <h2 className="text-3xl font-semibold">
                          {cardData?.title}
                        </h2>
                        <p className=" text-gray-400 mt-1">
                          {cardData?.description}
                        </p>
                      </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 pl-4 ">
                      {cardData?.features.map((feature, idx) => (
                        <p
                          key={idx}
                          className="flex items-center text-xs text-green-200"
                        >
                          <GoCheckCircleFill className="mr-2 text-green-400" />
                          {feature}
                        </p>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className=" flex gap-2 mt-10 ">
                      <button
                        onClick={() => setRequestDemoOpen(true)}
                        className="px-6 md:hidden py-2 text-sm cursor-pointer font-medium bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-200"
                      >
                        Book a Demo
                      </button>
                      {cardData?.openPage && (
                        <Link href={cardData.openPage}>
                          <button className="px-6 py-2 text-sm cursor-pointer font-medium bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-200">
                            Learn More
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:flex  items-center px-10">
                    <CursorTracker />
                  </div>
                </section>

                <section
                  ref={imageSectionRef}
                  id="image-section"
                  className="snap-start px-4 hidden md:flex items-center w-[60vw]"
                >
                  <Expandable
                    list={
                      cardData?.modalImages
                        ? cardData.modalImages.map((img) => ({
                            image: img,
                            title: cardData.title,
                          }))
                        : []
                    }
                  />
                </section>
              </div>
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

export default SmallCardsDetailsNew;
