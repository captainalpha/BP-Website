/* eslint-disable @next/next/no-html-link-for-pages */
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function NavLink({ to, children }) {
  const router = useRouter();
  return (
    <a
      className={
        router.pathname == to
          ? "text-orange font-semibold"
          : "text-primaryText hover:text-orange"
      }
      href={to}
    >
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute z-50 top-0 left-0 h-screen overflow-y-scroll  w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <Link passHref href={"/"}>
        <div
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
          className="flex items-center hover:cursor-pointer  justify-start  p-4 filter drop-shadow-md bg-white h-20"
        >
          <Image
            className="h-16"
            alt=""
            src={require("../../assets/bpass-logo.svg")}
          />
        </div>
      </Link>
      <div className="flex flex-col p-5">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-gray justify-between py-2 text-left text-xl font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Solutions</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-blue-100 text-gray-500">
                <ul className="list list-disc list-inside space-y-3 text-lg text-black">
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-proqure">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS Proqure
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-vendora">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS Vendora
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-billsmart">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS BillSmart
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-smartex">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS SmartEx
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-invoicer">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS Invoicer
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/solutions/bpaas-pospro">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPAAS PosPro
                      </a>
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full text-gray justify-between py-2 text-left text-xl font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>Our Services</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm bg-blue-100 text-gray-500">
                <ul className="list list-disc list-inside space-y-3 text-lg text-black">
                  <li className="border border-b-gray-300">
                    <Link passHref href="/services/custom-development">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        Custom Development
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/services/bpm-rpa-implementation">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        BPM/RPA Implementation
                      </a>
                    </Link>
                  </li>
                  <li className="border border-b-gray-300">
                    <Link passHref href="/services/resource-augmentation">
                      <a
                        className="text-xl font-normal my-4"
                        onClick={() =>
                          setTimeout(() => {
                            setOpen(!open);
                          }, 100)
                        }
                      >
                        Resource Augmentation
                      </a>
                    </Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Link passHref href="/clients">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Clients
          </a>
        </Link>
        <Link passHref href="/become-partner">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Become BPAAS Partner
          </a>
        </Link>
        <Link passHref href="/about-us">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Company
          </a>
        </Link>
        <Link passHref href="/contact-us">
          <a
            className="text-xl font-medium my-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Contact Us
          </a>
        </Link>
        <Link passHref href="/request-demo">
          <a
            className="text-primaryText text-xl max-w-sm my-4 py-2 px-4 border border-primaryText"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Request Demo
          </a>
        </Link>
        {/* <Link passHref href="/request-demo">
          <a className=" text-primaryText text-xl max-w-sm my-4 py-2 px-4 border border-primaryText">
            Request Demo
          </a>
        </Link> */}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="flex fixed top-0 left-0 right-0 filter drop-shadow-md bg-white z-50  lg:px-10  md:px-8 px-4 py-0 h-20 items-center justify-between">
        <MobileNav open={open} setOpen={setOpen} />
        <Link passHref href={"/"}>
          <div className="lg:w-3/12 flex items-center hover:cursor-pointer">
            <Image alt="" src={require("../../assets/bpass-logo.svg")} />
          </div>
        </Link>
        <div className="w-9/12 flex lg:justify-between relative justify-end items-center">
          <div
            className="z-50 flex relative w-6 h-6 flex-col justify-between items-center lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger button */}
            <span
              className={`h-1 w-full  rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-[11px] bg-orange" : "bg-secondary"
              }`}
            />
            <span
              className={`h-1 w-full bg-secondary rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-1 w-full  rounded-lg transform transition duration-300 ease-in-out ${
                open
                  ? "-rotate-45 -translate-y-[11px]  bg-orange"
                  : "bg-secondary"
              }`}
            />
          </div>

          <div className="hidden lg:flex space-x-8 p-12 ">
            <div className="relative group duration-1000 transition  ">
              <NavLink to="/solutions">Solutions</NavLink>
              <div className="hidden p-10 top-0 -left-20 hover:flex group-hover:flex transition absolute  hover:opacity-100 opacity-0 duration-[2000ms] group-hover:opacity-100 peer-hover:opacity-100  md:min-w-[70vw] lg:min-w-[80vw] -translate-y-10 hover:translate-y-0">
                <div className="grid grid-cols-3 bg-white mt-3 p-10 gap-x-20 gap-y-5 w-full">
                  <div className="grid space-y-2 ">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-proqure"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS Proqure
                    </h1>

                    <a
                      href="/solutions/bpaas-proqure"
                      className="hover:text-orange text-primaryText"
                    >
                      Requisition Creation
                    </a>

                    {/* <Link href="/solutions/bpaas-proqure"> */}
                    <a
                      href="/solutions/bpaas-proqure"
                      className="hover:text-orange text-primaryText"
                    >
                      RFP Management
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-proqure"> */}
                    <a
                      href="/solutions/bpaas-proqure"
                      className="hover:text-orange text-primaryText"
                    >
                      Vendor Bid Comparison
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-proqure"> */}
                    <a
                      href="/solutions/bpaas-proqure"
                      className="hover:text-orange text-primaryText"
                    >
                      PO Release
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className="grid space-y-2">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-billsmart"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS BillSmart
                    </h1>
                    {/* <Link href="/solutions/bpaas-billsmart"> */}
                    <a
                      href="/solutions/bpaas-billsmart"
                      className="hover:text-orange text-primaryText"
                    >
                      Account Payable Automation
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-billsmart"> */}
                    <a
                      href="/solutions/bpaas-billsmart"
                      className="hover:text-orange text-primaryText"
                    >
                      Integration with ERP
                    </a>
                    {/* </Link> */}
                    {/* <Link  href="/solutions/bpaas-billsmart"> */}
                    <a
                      href="/solutions/bpaas-billsmart"
                      className="hover:text-orange text-primaryText"
                    >
                      Invoice extraction
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-billsmart"> */}
                    <a
                      href="/solutions/bpaas-billsmart"
                      className="hover:text-orange text-primaryText"
                    >
                      Invoice Creation through different communication Channels
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className=" grid space-y-2">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-invoicer"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS Invoicer
                    </h1>
                    {/* <Link
                    href="/solutions/bpaas-invoicer"
                  > */}
                    <a
                      href="/solutions/bpaas-invoicer"
                      className="hover:text-orange text-primaryText"
                    >
                      Einvoicing{" "}
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-invoicer"> */}
                    <a
                      href="/solutions/bpaas-invoicer"
                      className="hover:text-orange text-primaryText"
                    >
                      Integration with ERP
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-invoicer"> */}
                    <a
                      href="/solutions/bpaas-invoicer"
                      className="hover:text-orange text-primaryText"
                    >
                      Bulk Upload{" "}
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-invoicer"> */}
                    <a
                      href="/solutions/bpaas-invoicer"
                      className="hover:text-orange text-primaryText"
                    >
                      Dashboard and Analytics
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className=" grid space-y-2">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-vendora"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS Vendora
                    </h1>
                    {/* <Link href="/solutions/bpaas-vendora"> */}
                    <a
                      href="/solutions/bpaas-vendora"
                      className="hover:text-orange text-primaryText"
                    >
                      Vendor Management
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-vendora"> */}
                    <a
                      href="/solutions/bpaas-vendora"
                      className="hover:text-orange text-primaryText"
                    >
                      Vendor Invoice Processing
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-vendora"> */}
                    <a
                      href="/solutions/bpaas-vendora"
                      className="hover:text-orange text-primaryText"
                    >
                      Vendor Communication and Issue Resolution
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-vendora"> */}
                    <a
                      href="/solutions/bpaas-vendora"
                      className="hover:text-orange text-primaryText"
                    >
                      Vendor Analytics
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className=" grid grid-rows-6">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-smartex"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS SmartEx
                    </h1>
                    {/* <Link href="/solutions/bpaas-smartex"> */}
                    <a
                      href="/solutions/bpaas-smartex"
                      className="hover:text-orange text-primaryText"
                    >
                      AI Based Extraction Engine
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-smartex"> */}
                    <a
                      href="/solutions/bpaas-smartex"
                      className="hover:text-orange text-primaryText"
                    >
                      Open Integration Platform
                    </a>
                    {/* </Link> */}
                  </div>
                  <div className=" grid space-y-2">
                    <h1
                      className={
                        router.pathname == "/solutions/bpaas-pospro"
                          ? "text-orange  text-lg font-bold"
                          : " hover:text-orange text-lg font-bold"
                      }
                    >
                      BPAAS PosPro
                    </h1>
                    {/* <Link href="/solutions/bpaas-pospro"> */}
                    <a
                      href="/solutions/bpaas-pospro"
                      className="hover:text-orange text-primaryText"
                    >
                      Offline & Online Mode
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-pospro"> */}
                    <a
                      href="/solutions/bpaas-pospro"
                      className="hover:text-orange text-primaryText"
                    >
                      Create & Maintain Customers
                    </a>
                    {/* </Link> */}
                    {/* <Link  href="/solutions/bpaas-pospro"> */}
                    <a
                      href="/solutions/bpaas-pospro"
                      className="hover:text-orange text-primaryText"
                    >
                      Different Pricing & Sales
                    </a>
                    {/* </Link> */}
                    {/* <Link href="/solutions/bpaas-pospro"> */}
                    <a
                      href="/solutions/bpaas-pospro"
                      className="hover:text-orange text-primaryText"
                    >
                      Payment Modes
                    </a>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative cursor-pointer group duration-1000 transition">
              <NavLink>Services</NavLink>
              <div className="hidden p-5 top-5 bg-white -left-5 hover:flex group-hover:flex transition absolute opacity-0 duration-1000 group-hover:opacity-100 peer-hover:opacity-100  md:min-w-[250px] lg:min-w-[250px]">
                <div className=" grid gap-3">
                  <NavLink to="/services/custom-development">
                    Custom Development
                  </NavLink>
                  <NavLink to="/services/bpm-rpa-implementation">
                    BPM/RPA Implementation
                  </NavLink>
                  <NavLink to="/services/resource-augmentation">
                    Resource Augmentation
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink to="/clients">Clients</NavLink>
            <NavLink to="/become-partner">Become BPAAS Partner</NavLink>
            <NavLink to="/about-us">Company</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            {/* <NavLink to="/request-demo" >Request Demo</NavLink> */}
          </div>
          <div className="hidden lg:flex">
            <Link href="/request-demo">
              <a className=" text-primaryText py-2 px-4 border border-primaryText hover:text-orange hover:border-orange">
                Request Demo
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
