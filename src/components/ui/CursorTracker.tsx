import { useMousePosition } from "@/utils/hooks/useMousePosition";
import { useCallback, useRef, useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import RequestDemo from "../models/RequestDemo";

export default function CursorTracker() {
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    // We need to offset the position to center the info div
    const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
    const offsetY = (infoRef.current?.offsetHeight || 0) / 2;

    // Use CSS variables to position the info div instead of state to avoid re-renders
    infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
    infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
  }, []);

  useMousePosition(divRef, update);

  return (
    <div
      onClick={() => setRequestDemoOpen(true)}
      ref={divRef}
      className="group relative w-64 cursor-none rounded-3xl bg-[#000000] p-6 text-white shadow-lg border border-[#2e2e3e]"
    >
      {/* Actual content */}
      <h1 className="mb-4 text-3xl font-semibold leading-none">
        Schedule Your{" "}
        <span className=" decoration-wavy text-[#fb9e50]">BPAAS</span> Demo
      </h1>
      <div className="mb-8 text-sm text-gray-300">
        Ready to grow smarter? Book a free demo and see how BPAAS simplifies and
        scales your business.
      </div>

      {/* Cursor tracker */}
      <div
        ref={infoRef}
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
        className="pointer-events-none flex items-center absolute left-0 top-0 z-50 rounded-full bg-[#fb9e50] px-4 py-2 text-sm font-bold text-white opacity-0 duration-0 group-hover:opacity-100"
      >
        Book a Demo <MdOpenInNew />
      </div>
      <RequestDemo
        open={requestDemoOpen}
        onClose={() => setRequestDemoOpen(false)}
      />
    </div>
  );
}
