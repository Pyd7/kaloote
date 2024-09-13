import React from "react";
import {FaSearch } from 'react-icons/fa'; 

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import Particle from "reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";

import BannerSectionWrapper from "./banner.style";
import imgHero1 from "assets/images/hosting/banner/01.png";
import imgHero2 from "assets/images/hosting/banner/02.png";

const BannerHosting= () => {
  return (
    <BannerSectionWrapper>
      <img src={imgHero1} alt="img" className="section-particle one"/>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col lg={6}>
            <SectionTitle
              className="section-title"
              UniWidth="100%"
            >
              <h4>Kaloote is also data collection, organization, and analysis</h4>
              <h1>
                We provide some of the best data analysis and visualization content
              </h1>
              <p>
              Exploring and browsing data has never been easier<br/>
                for your startsup, company
              </p>
            </SectionTitle>
            <div className="domain-search-block">
              <div className="search-box">
                <input type='text' placeholder='Search...' />
                <Button className="src-btn">
                  <FaSearch />
                </Button>
              </div>
              <div className="domain-extention-block">
                <span className="com">
                  Stats
                </span>
                <span className="org">
                  Charts
                </span>
                <span className="net">
                  Data
                </span>
                <span className="dev">
                  Surveys
                </span>
                <span className="xyz">
                  studies
                </span>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-img-block">
              <img src={imgHero2} alt="img" />
            </div>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerHosting;
