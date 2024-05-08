import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Logo from "../../Assests/Images/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Variants for animations
  const logoVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const linkVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <header className="header">
      {/* Animate the logo */}
      <motion.img src={Logo} alt="logo" variants={logoVariant} initial="hidden" animate="visible" />

      <div className="header_right">
        {/* Animate the links */}
        <motion.p onClick={() => navigate("/register")} variants={linkVariant} initial="hidden" animate="visible">Get Projects</motion.p>
        <motion.p variants={linkVariant} initial="hidden" animate="visible">Onboard Talent</motion.p>
      </div>
    </header>
  );
};

export default Header;
