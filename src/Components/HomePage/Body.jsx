import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import GirlImg from "../../Assests/Images/girl.svg";
import Spark from "../../Assests/Images/spark.svg";
import Rocket from "../../Assests/Images/rocket.svg";
import Carasoul from "../../Assests/Images/carasoul.svg"; 
import AskData from "../AccordianSection/AskData";

const Body = () => {
  return (
    <>
      <div className="banner">
        <div className="banner_top">
          <p>Success stories</p>
          <h3>
            Every success journey <br /> we’ve encountered.
          </h3>
        </div>

        <div className="banner_bottom">
          <div className="img_section">
            <motion.img src={GirlImg} alt="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
            <div className="first_box">
              <motion.img src={Spark} alt="img" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} />
              <h3 style={{ fontSize: "64px" }}>40%</h3>
              <p>
                Achieved reduction in project execution time by optimising team
                availability
              </p>
            </div>

            <div className="second_box">
              <motion.img src={Rocket} alt="rocket" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }} />
              <div>
                <h4>10 DAYS</h4>
                <p>Staff Deployment</p>
              </div>
            </div>

            <div className="third_box">
              <h4 style={{ color: "#A6A3A0" }}>
                <span style={{ fontSize: "63px", color: "white" }}>$0.5</span>{" "}
                MILLION
              </h4>
              <p>
                Reduced client expenses by saving on hiring and employee costs.
              </p>
            </div>
          </div>

          <div className="carasoul_section">
            <h4>
              Enhance fortune 50 company’s insights teams research capabilities
            </h4>
            <motion.img src={Carasoul} alt="carousel" className="carousel" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }} />
            <motion.button className="btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Explore more ➡</motion.button>
          </div>
        </div>
      </div>

      <AskData/>
    </>
  );
};

export default Body;
