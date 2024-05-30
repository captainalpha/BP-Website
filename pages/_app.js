import Navbar from "../components/common/Navbar";
import "../styles/globals.css";
import Footer from "../components/common/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



import { motion, AnimatePresence } from "framer-motion";
import CookiesMain from "../components/common/CookiesMain";

// import styles from './slider.module.scss'
function MyApp({ Component, pageProps, router }) {
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    when: "afterChildren",
  };
  return (
    <>
      <div className="z-50 scroll-smooth">
        <Navbar />
      </div>
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            key={router.pathname}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            id="page-transition-container"
          >
            <Component {...pageProps} /> <Footer />{" "}
            <CookiesMain/>
          </motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
