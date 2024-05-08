import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Plus from "../../Assests/Images/plus.svg";
import Minus from "../../Assests/Images/minus.svg";

const Accordion = ({ questions }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleSection = (index) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((item) => item !== index);
      } else {
        return [...prevOpenIndexes, index];
      }
    });
  };

  return (
    <div className="accordion">
      {questions.map((question, index) => (
        <motion.div
          className="accordion_section"
          key={index}
          initial={{ opacity: 0, y: -10 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
          transition={{ duration: 0.5 }} // Transition duration
        >
          <div
            className="accordion_header"
            onClick={() => toggleSection(index)}
          >
            {question.header}

            {openIndexes.includes(index) ? (
              <img src={Minus} alt="minus" />
            ) : (
              <img src={Plus} alt="plus" />
            )}
          </div>
          {openIndexes.includes(index) && (
            <motion.p
              className="accordion_content"
              initial={{ height: 0 }} // Initial height of the content (collapsed)
              animate={{ height: "auto" }} // Animation to expand the content
            >
              {question.content}
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Accordion;
