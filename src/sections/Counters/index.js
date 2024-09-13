import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import Counter from "reusecore/Counter";

import CounterSectionWrapper from "./counterSection.style";

const Counters = () => {
  return (
    <CounterSectionWrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={70} suffix="+" />
              <p>Posted Articles</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={50} suffix="+" />
              <p>Conducted Researches</p>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <div className="counter__item">
              <Counter end={120} suffix="+" />
              <p>Collaborations</p>
            </div>
          </Col>
        </Row>
      </Container>
    </CounterSectionWrapper>
  );
};

export default Counters;
