import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Contact1 from "sections/ContactRequest";

import Footer from "sections/Footer";
import Subscribe from "sections/Contact";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/blog/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Kaloote - Contact">
      <GlobalStyle />
      <Navigation />
      <Contact1 />
      <Subscribe />
    <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
