"use client";

import { useEffect } from "react";
import { FiX, FiArrowUpRight, FiChevronRight, FiCheckCircle } from "react-icons/fi";

export interface Partnership {
  id: string;
  name: string;
  shortDescription: string;
  logo: string;

  whatIs: string;

  bpaasTitle: string;
  bpaasDescription: string;

  capabilities: string[];
}

interface PartnershipDialogProps {
  partnership: Partnership | null;
  onClose: () => void;
}

export default function PartnershipDialog({
  partnership,
  onClose,
}: PartnershipDialogProps) {
  useEffect(() => {
    if (!partnership) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [partnership, onClose]);

  if (!partnership) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partnership-dialog-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-md"
      />

      {/* Dialog */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
        {/* Top Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-[#ec964c]/10 blur-[100px]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#ec964c]/40 hover:bg-[#ec964c]/10 hover:text-white"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Scrollable Content */}
        <div className="relative max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="border-b border-white/10 px-6 pb-7 pt-8 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Logo */}
              {/* <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4"> */}
                {/* Replace with actual logo */}
                {/* <div className="text-center text-xs text-gray-500">
                  {partnership.name}
                  <br />
                  Logo
                </div> */}

                {/* Actual logo: */}
                <img
                  src={partnership.logo}
                  alt={`${partnership.name} logo`}
                  className="max-h-14 max-w-full object-contain"
                />
              {/* </div> */}

              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#ec964c]">
                  Technology Ecosystem
                </p>

                <h2
                  id="partnership-dialog-title"
                  className="text-3xl font-bold text-white sm:text-4xl"
                >
                  {partnership.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-10 px-6 py-8 sm:px-10 sm:py-10">
            {/* What is */}
            <section>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-[#ec964c]" />

                <h3 className="text-2xl font-semibold text-white">
                  What is {partnership.name}?
                </h3>
              </div>

              <p className="max-w-3xl text-base leading-8 text-gray-400">
                {partnership.whatIs}
              </p>
            </section>

            {/* BPAAS */}
            <section className="rounded-2xl border border-[#ec964c]/20 bg-[#ec964c]/5 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ec964c] text-sm font-bold text-black">
                  B
                </span>

                <h3 className="text-2xl font-semibold text-white">
                  {partnership.bpaasTitle}
                </h3>
              </div>

              <p className="leading-8 text-gray-300">
                {partnership.bpaasDescription}
              </p>
            </section>

            {/* Capabilities */}
            <section>
              <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ec964c]">
                  Our Expertise
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  How BPAAS Adds Value
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {partnership.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-[#ec964c]/30 hover:bg-white/[0.04]"
                  >
                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ec964c]" />

                    <span className="text-sm leading-6 text-gray-300">
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </section>

           
          </div>
        </div>
      </div>
    </div>
  );
}
