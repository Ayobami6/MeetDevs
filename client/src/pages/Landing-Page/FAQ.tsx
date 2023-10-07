import React from "react";
import Accordion from "../../components/Accordion/Accordion";

const Faq: React.FC = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <Accordion
        title="How does Meet Devs ensure that developers work for only one employer at a time?"
        content="We employ robust monitoring and contractual agreements to ensure developers' exclusive commitment to one employer during their engagement. Violations are taken seriously and result in penalties."
      />
      <Accordion
        title="What types of developers and tech roles are available on Meet Devs"
        content="Meet Devs offers a wide range of tech roles, including but not limited to software engineers, web developers, data scientists, and UX/UI designers. Our platform caters to diverse tech talent."
      />
      <Accordion
        title="Can employers view the profiles of developers before making a hiring decision?"
        content="Yes, employers have access to developer profiles, including their skills, experience, and project history. This allows for informed hiring decisions and personalized matching."
      />
      <Accordion
        title="How does Meet Devs handle disputes or issues that may arise during developer-employer engagements?"
        content="We have a dedicated support team to assist in resolving any disputes or issues that may occur. Our goal is to ensure a smooth and mutually beneficial relationship between developers and employers."
      />
      <Accordion
        title="Is Meet Devs only for full-time positions, or can employers hire developers for freelance or part-time work as well?"
        content="Meet Devs caters to various employment types, including full-time, part-time, and freelance positions. Employers can specify their requirements, and developers can apply accordingly, providing flexibility for both parties."
      />
    </div>
  );
};

export default Faq;

