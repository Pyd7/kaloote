import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";

import Navigation from "sections/Navigation";
import Pricing from "sections/Pricing";
import Contact from "sections/Contact";
import Footer from "sections/Footer";


import { GlobalStyle } from "sections/app.style";
import theme from "theme/app/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Kaloote - Home">
      <GlobalStyle />
      <Navigation />
      <Pricing />
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
