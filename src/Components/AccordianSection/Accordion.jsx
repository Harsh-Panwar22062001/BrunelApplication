import React, { useState } from "react";
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
        <div className="accordion_section" key={index}>
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
            <p className="accordion_content">{question.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
