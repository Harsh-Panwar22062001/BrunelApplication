import React from "react";
import Img from "../../Assests/Images/Union.svg"; // Corrected import path
import Accordion from "../../Components/AccordianSection/AskData";

const AskData = () => {
  const questions = [
    {
      header: "Do you offer freelancers?",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      header: "Can I hire multiple talents at once?",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      header: "Why should I not go to an agency directly?",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
  ];
  return (
    <div className="question_box">
      <div className="question_box_header">
        <div>
          <p>What’s on your mind</p>
          <h4>Ask Questions</h4>
        </div>
        <img src={Img} alt="img" />
      </div>
      <div>
        <Accordion questions={questions} />
      </div>
    </div>
  );
};

export default AskData;
