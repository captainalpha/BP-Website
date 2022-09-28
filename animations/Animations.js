import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: "easeInOut" };
export const ScaleIn = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
export const ScaleOut = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="visible"
      viewport={{ once: true }}
      transition={transition}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 1.5 },
      }}
    >
      {children}
    </motion.div>
  );
};
export const SlideFromRight = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { scale: 1, opacity: 1 },
        hidden: { scale: 0, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
export const PreviewTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="enter"
      animate="enter"
      exit="exit"
      viewport={{ once: true }}
      variants={{
        initial: { x: "100%", opacity: 0 },
        enter: { x: 0, opacity: 1, transition },
        exit: { x: "-100%", opacity: 0, transition },
      }}
    >
      {children}
    </motion.div>
  );
};
