import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Copyright from "../../Assests/Images/copyright.svg";

const Footer = () => {
  // Variants for animations
  const footerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <motion.footer className="footer" variants={footerVariant} initial="hidden" animate="visible">
      <p className="copyright">
        <span>
          <motion.img src={Copyright} alt="alt" variants={linkVariant} />
        </span>
        Talup 2023. All rights reserved
      </p>
      <motion.div className="footer_links" variants={linkVariant}>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
