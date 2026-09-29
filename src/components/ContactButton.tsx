"use client";

import { TbMessagePlus } from "react-icons/tb";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const RequestDemo = dynamic(() => import("./models/RequestDemo"), {
  ssr: false,
});

export default function ContactButton() {
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("requestDemoShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setRequestDemoOpen(true);
        localStorage.setItem("requestDemoShown", "true");
      }, 120000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setRequestDemoOpen(false);
    localStorage.setItem("requestDemoShown", "true");
  };

  return (
    <div>
      <div className="fixed border border-r-0 rounded-l-full bg-[#7c7b7b2d] backdrop-blur-xs  bottom-6 right-0 z-50 ">
        <button
          onClick={() => setRequestDemoOpen(true)}
          className="relative cursor-pointer hover:text-white p-2  text-[#ec964d] rounded-full shadow-xl transition-all  duration-300 ease-in-out"
        >
          <TbMessagePlus size={30} />
        </button>
      </div>
      {requestDemoOpen ? (
        <RequestDemo open={requestDemoOpen} onClose={handleClose} />
      ) : null}
    </div>
  );
}
