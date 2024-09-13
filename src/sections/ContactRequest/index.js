import React from "react";

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle className="section-title" UniWidth="55%">
        
        <h2>
          <span>Contact Us </span> 
        </h2>
        <h4>We would love to hear from you</h4>
      </SectionTitle>
      <Container>
        <form name="contactform" method="post" action="#">
          <input type="text" placeholder="Enter your Name" /> 
          <input type="email" placeholder="Enter your Email" />
          
          <select id="country" name="country">
            <option value="inquiry">Inquiry</option>
            <option value="suggestion">Suggestion</option>
            <option value="Other">Other</option>
          </select>

          {/* <label for="subject">Subject</label> */}
          <textarea id="subject" name="subject" placeholder="Enter your suggestion/Inquiry here..." height="200px"></textarea> 
          <Button>Send Now</Button>
        </form>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
