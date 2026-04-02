import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-primary to-secondary text-white p-5 md:p-8">
      <div className="  py-10 ">
        <div className="lg:grid lg:grid-cols-9 gap-5">
          <div className="w-full  lg:col-span-3">
            <div className=" space-y-3">
              <div className="">
                <Image
                  alt=""
                  src={require("../../assets/bpass-logo-white.svg")}
                />
              </div>

              <p className="max-w-sm mt-4 ">
                We are your IT consulting partner to accelerate your company’s
                growth and success graphs. BPAAS creates a secure and
                simple-to-access channel.
              </p>

              <div className="flex mt-4 ">
                <a
                  href="https://www.linkedin.com/company/bpaas-solutions-pvt-ltd/"
                  className="mx-2 "
                  aria-label="Linkden"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
                    <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                  </svg>
                </a>

                {/* <a href="/contact-us" className="mx-2 " aria-label="Facebook">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                  </svg>
                </a>

                <a href="/contact-us" className="mx-2 " aria-label="Twitter">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1 lg:col-span-6">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div className="space-y-5">
                <h3 className="text-xl font-bold ">Quick Links</h3>
                <Link passHref href="/">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Home
                  </a>
                </Link>

                <Link passHref href="/request-demo">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Request Demo
                  </a>
                </Link>
                <Link passHref href="/clients">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Clients
                  </a>
                </Link>
                <Link passHref href="/about-us">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Company
                  </a>
                </Link>
                <Link passHref href="/become-partner">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Become BPAAS Partner
                  </a>
                </Link>
                <Link passHref href="/contact-us">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Contact Us
                  </a>
                </Link>
              </div>

              <div className="space-y-5">
                <h3 className="text-xl font-bold">Solutions</h3>
                <Link passHref href="/solutions/bpaas-proqure">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS Proqure
                  </a>
                </Link>
                <Link passHref href="/solutions/bpaas-billsmart">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS BillSmart
                  </a>
                </Link>
                <Link passHref href="/solutions/bpaas-invoicer">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS Invoicer
                  </a>
                </Link>
                <Link passHref href="/solutions/bpaas-vendora">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS Vendora
                  </a>
                </Link>
                {/* <Link passHref href="/solutions/bpaas-smartex">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS SmartEx
                  </a>
                </Link> */}
                <a
                  className="block  text-sm  hover:underline hover:text-orange"
                  href="https://metasolve.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BPAAS MetaEx
                </a>
                <Link passHref href="/solutions/bpaas-pospro">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPAAS PosPro
                  </a>
                </Link>
              </div>

              <div className="space-y-5">
                <h3 className=" text-xl font-bold  ">Services</h3>

                <Link passHref href="/services/custom-development">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Custom Development
                  </a>
                </Link>
                <Link passHref href="/services/bpm-rpa-implementation">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    BPM/RPA Implementation
                  </a>
                </Link>
                <Link passHref href="/services/resource-augmentation">
                  <a className="block  text-sm  hover:underline hover:text-orange">
                    Resources Augmentation
                  </a>
                </Link>
              </div>

              <div className="space-y-5">
                <h3 className=" text-xl font-bold ">Contact Us</h3>
                {/* <span className="block  text-sm  hover:underline hover:text-orange">
                  abhishek.kumar@bpaassolutions.com
                </span> */}
                <span className="block  text-sm  hover:underline hover:text-orange">
                  sales@bpaassolutions.com
                </span>
                <span className="block  text-[13px]  hover:underline hover:text-orange">
                  +91-7503264677
                </span>
                <span className="block  text-[13px]  hover:underline hover:text-orange">
                  BPAAS Solutions Private Limited, Unit number 601 & 602, Vipul
                  Square Sushant Lok Phase 1, Gurugram, Haryana 122009
                </span>
                <input
                  className="block p-1 outline-none border text-black w-full"
                  placeholder="Enter Email...."
                />
                <button className="text-sm bg-orange px-2 py-1 w-full">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 w-full my-6 bg-gray-300 border-none " />

      <div className="flex justify-between">
        <div>
          <p className="text-center text-white">
            Copyright © 2024 BPAAS Solutions Pvt. Ltd. | All Rights Reserved
          </p>
        </div>
        <div>
          <Link passHref href="#">
            <a className="block  text-sm  hover:underline hover:text-orange">
            Privacy Policy
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
