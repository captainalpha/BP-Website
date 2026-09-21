"use client";
import React, {
  useState,
  MouseEvent as ReactMouseEvent,
  useEffect,
} from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FileUpload } from "@/components/ui/file-upload";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { toast } from "react-toastify";
import { VscLoading } from "react-icons/vsc";
import { AiOutlineLoading } from "react-icons/ai";
import { JOB } from "@/utils/constants/endpoints";
import { IoIosCloseCircleOutline } from "react-icons/io";

const JobOpening = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jopLoading, setJobLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [files, setFiles] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  console.log("names, ", formData);
  const [data, setData] = useState<IJob[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  const openModal = (job: any) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !files) {
      toast.error("Please fill all fields and upload a file.");
      return;
    }

    const data = new FormData();
    data.append("JobTitle", selectedJob.position);
    data.append("jobDescription", selectedJob.description);
    data.append("fullName", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("pdfFile", files);

    try {
      setLoading(true);
      const res = await fetch("/api/sendJobEmail", {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Application sent successfully!");
        setIsOpen(false);
        setFormData({ name: "", phone: "", email: "" });
        setFiles(null);
      } else {
        toast.error("Failed to send application: " + result.error);
      }
      setLoading(false);
    } catch (error) {
      console.error("SEND ERROR:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleFileUpload = (file: File | null) => {
    setFiles(file);
    toast.success("File uploaded successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setJobLoading(true);
        const res = await fetch(JOB);
        const response = await res.json();
        if (!response.success) throw new Error(response.message);
        setData(response?.data);
      } catch (err: any) {
        toast.error(err?.message);
      } finally {
        setJobLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <div
        className="h-[85vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jonHeroSaction.jpg')" }}
      >
        <div className="flex items-center justify-center h-full md:px-20">
          <div className="bg-[#12121223] hover:bg-[#12121254] hover:rounded-2xl hover:backdrop-blur-lg hover:scale-104 p-13 backdrop-blur-xs transition-all duration-200 ease-in text-center">
            <h1
              style={{ fontFamily: "var(--font-inter)" }}
              className="md:text-7xl text-5xl font-bold text-[#ec964d] tracking-tight"
            >
              Shape Your Future with Us
            </h1>
            <p
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-lg mt-4 text-white/90 max-w-2xl mx-auto"
            >
              Explore exciting career opportunities at BPAAS. We&apos;re always
              looking for passionate, talented individuals who are ready to make
              an impact. Browse the listings below and apply today your dream
              role might be just one click away.
            </p>
          </div>
        </div>
      </div>
      <div className=" min-h-screen text-gray-200 p-8">
        <div className="w-full px-4 sm:px-6 md:px-10 py-12 flex justify-center">
          <div
            role="button"
            className="group relative  rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{ background }}
            />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Join the Future of Work at{" "}
              <span className="text-[#ec964d]">BPAAS</span>
            </h2>
            <p
              className="text-gray-400 text-base md:text-lg mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              We are hiring passionate minds to shape next-gen digital
              solutions.
            </p>
            <p
              className="text-gray-400 text-sm md:text-base mb-6"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Browse open roles below and click Apply to get started. We&apos;ll
              review and contact you within{" "}
              <span className="text-white font-medium">a days</span> if
              there&apos;s a match.
            </p>
            <p
              className="text-xs text-gray-400"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Can&apos;t find your role? Email us at{" "}
              <a
                href="mailto:sales@bpaassolutions.com"
                className="text-[#ec964d] font-medium text-sm"
              >
                sales@bpaassolutions.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-[#222] rounded-lg overflow-hidden">
            <thead className="bg-[#282828] scale-95 text-gray-400 text-sm uppercase">
              <tr className="" style={{ fontFamily: "var(--font-inter)" }}>
                <th className="px-6 py-8 text-left">No</th>
                <th className="px-6 py-3 text-left">Position</th>
                <th className="px-6 py-3 text-left whitespace-nowrap">
                  Job Description
                </th>
                <th className="px-6 py-3">Experience</th>
                <th className="px-6 py-3">Location</th>
                <th className="px-6 py-3">Apply</th>
              </tr>
            </thead>
            <tbody>
              {jopLoading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10 bg-[#151515] rounded-2xl "
                  >
                    <span className=" animate-pulse text-gray-400 flex justify-center items-center">
                      {" "}
                      <AiOutlineLoading className="animate-spin mr-2" />
                      Loading jobs...
                    </span>
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center py-10 bg-[#2b2b2b] rounded-2xl"
                  >
                    No job openings found.
                  </td>
                </tr>
              ) : (
                data.map((job, ind) => (
                  <tr
                    key={job?._id}
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="border-y-20 scale-95 hover:scale-100  border-[#000000] bg-[#151515] rounded-2xl hover:bg-[#282828] transition"
                  >
                    <td className="px-6 py-10  text-center">{ind + 1}</td>
                    <td className="px-6 py-10">{job?.position}</td>
                    <td className="px-6 py-10">{job?.description}</td>
                    <td className="px-6 py-10 text-center">
                      {job?.minimumExperience}
                    </td>
                    <td className="px-6 py-10 text-center">{job?.jobType}</td>
                    <td className="px-6 py-10 text-center">
                      <button
                        onClick={() => openModal(job)}
                        className=" bg-black px-4 py-2 rounded-xl text-white hover:opacity-90 transition cursor-pointer"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center  justify-center p-4">
            <DialogPanel className="bg-[#101010] relative text-gray-200 p-6 rounded-2xl w-full max-w-3xl shadow-xl border border-[#2c2f3a]">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute right-8 hover:text-red-700 cursor-pointer transition-all duration-200 ease-in-out md:right-6"
              >
                <IoIosCloseCircleOutline />
              </div>
              <DialogTitle
                style={{ fontFamily: "var(--font-inter)" }}
                className="text-2xl w-full text-center p-4 font-bold mb-4 text-white"
              >
                Apply for {selectedJob?.position}
              </DialogTitle>
              <form
                onSubmit={handleSubmit}
                style={{ fontFamily: "var(--font-inter)" }}
                className="space-y-4 grid md:grid-cols-2 gap-4"
              >
                <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                  <FileUpload onChange={handleFileUpload} />
                </div>
                <div className="flex flex-col h-full justify-between p-1 gap-10">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full h-full bg-[#000000] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#e4f4ff text-white"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full h-full bg-[#000000] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#e4f4ff text-white"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full h-full bg-[#000000] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#e4f4ff] text-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="bg-[#2e2e2e] h-full rounded hover:bg-black hover:ring-1 p-3  hover:text-white col-span-2 px-20 transition-all duration-150 ease-in-out cursor-pointer "
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <VscLoading className="animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div>Submit Application</div>
                    )}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default JobOpening;
