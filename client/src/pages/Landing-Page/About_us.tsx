import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between p-8 bg-gray-100">
        <SectionTitle 
            title='About Us - MeetDevs'
            body ="At MeetDevs, we believe in the power of connection. We're more than just a job-matching platform; we're the bridge that connects talented developers with forward-thinking employers, revolutionizing the tech talent landscape."
        />
        <SectionTitle   
            title="Our Mission"
            body="Our mission is simple yet transformative: to create an ecosystem where every developer's unique skills and potential can shine, where employers find the perfect match for their tech needs, and where innovation knows no boundaries." 
        />
        <SectionTitle 
            title="What Sets Us Apart"
            body="MeetDevs stands out for one compelling reason: our commitment to exclusivity. We believe that developers should have the freedom to focus entirely on one employer at a time. This exclusive dedication ensures unparalleled productivity and quality results for employers while offering developers an opportunity for deep immersion in their projects."
        />
        <SectionTitle
            title="How We Achieve This"
            body= {<ul className="list-disc list-inside">
            <li>Dedicated Matching: We employ cutting-edge algorithms to match developers and employers based on their specific needs, creating synergistic partnerships that drive success.</li>
            <li>Global Reach: MeetDevs transcends borders. We connect talent and opportunities from around the world, expanding possibilities and breaking geographical constraints.</li>
            <li>Innovation Hub: Beyond job listings, MeetDevs fosters a community of collaboration and continuous learning. Stay updated with industry trends, connect with peers, and push the boundaries of what's possible.</li>
          </ul>}
        />
        <SectionTitle 
            title="Our Commitment"
            body="MeetDevs is more than a platform; it's a commitment to fostering growth and innovation. We are dedicated to providing a secure, efficient, and enriching environment for developers and employers alike."
        />
        <SectionTitle 
            title="Join Us Today"
            body="Whether you're a developer ready to take your career to new heights or an employer seeking exceptional tech talent, MeetDevs is the place where dreams become realities. Join us today and experience the future of tech talent acquisition and collaboration."
        />
    </div>
  );
};

export default AboutUs;
