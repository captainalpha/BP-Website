import Link from "next/link";
import { useState } from "react";
import AnimatedModal from "./AnimatedModal";

function OEMTopBar({ logo, heading, content, sideIMage, targetLink }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 500); // Duration should match the close animation duration
    }

    return (
        <>
            <div className="mt-[4em] lg:mt-10 md:mt-10 xl:mt-10 bg-gradient-to-r from-red-100 to-blue-100 p-8 md:p-[5em]">
                <div className="flex">
                    <div className="w-[100%] lg:-[70%] xl:lg:-[70%] md:w-[70%]">
                        <img src={logo} alt="img" className="w-100 h-[7vh]" layout='fill' />
                        <h1 className="lg:text-3xl mt-5 text-3xl lg:text-justify font-bold capitalize ">{heading}</h1>
                        <p className="lg:text-[17px] text-sm mt-5 leading-[1.8] tracking-[0.025em]">
                            {content}
                        </p>
                        <div className="block xl:flex lg:flex md:flex lg:w-[50%] md:w-[100%] xl:w-[80%]">
                            {/* <Link passHref href="#"> */}
                            <button className="px-5 w-[100%] pt-2 pb-2 mt-10 border-orange border-2 text-orange hover:text-black rounded-full hover:bg-orange 
                            font-medium text-sm"
                                onClick={openModal}
                            >
                                Download Brochure
                            </button>
                            {/* </Link> */}
                            &nbsp;
                            &nbsp;
                            <Link passHref href={targetLink}>
                                <button className="px-5 w-[100%] pt-2 pb-2 lg:mt-10 md:mt-10 border-orange border-2 text-orange hover:text-black rounded-full hover:bg-orange 
                            font-medium text-sm">
                                    More Info
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block xl:block md:block">
                        <img src={sideIMage} alt="img" className="w-100 h-[50vh] mt-10" layout='fill' />
                    </div>
                </div>
                {isModalOpen && (
                    <AnimatedModal 
                    closeModal={closeModal} 
                    isClosing={isClosing}
                    filePath={"/images/Brochure/Brochure_NewgenONE Platform_v7.0_Spread.pdf"}
                    HeadingText={(
                        <>
                                <span className="text-black">Download</span>
                                {' '}
                                <span className="text-orange">Brochure</span>
                        </>
                    )}
                    />
                )}
            </div>
        </>
    );
}

export default OEMTopBar;
