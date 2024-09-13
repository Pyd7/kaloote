import React from "react";
import Link from 'next/link';

import { Container } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";

import ContactWrapper from "./contact.style";

const SubscribePremium = () => {
  return (
    <ContactWrapper id="contact">
      <SectionTitle className="section-title" UniWidth="55%">
        {/* <h4>Contact Us</h4> */}
        <h2>
          <span>Subscribe to our Premium Content Plan </span> 
        </h2>
      </SectionTitle>
      <Container>
        <form name="contactform" >
          <Link href="/pricing">
            <a>
            <Button>Subscribe</Button>
            </a>            
          </Link>
        </form>
      </Container>
    </ContactWrapper>
  );
};

export default SubscribePremium;
