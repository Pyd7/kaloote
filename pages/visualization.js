import React from "react";
import { ThemeProvider } from "styled-components";

import Main from "../src/components/main";
import PreSell from "sections/PreSell";

import Navigation from "sections/Navigation";
import Banner from "sections/Banner-hosting";
import Counters from "sections/Counters";
import Footer from "sections/Footer";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/hosting/themeStyles";

const Home = () => (
  <ThemeProvider theme={theme}>
    <Main title="Kaloote - Data">
      <GlobalStyle />
      <Navigation />
      <Banner />
      <PreSell />
      <Counters />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default Home;
