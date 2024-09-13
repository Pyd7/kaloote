import React from "react";
import { useRouter } from 'next/router'
import { ThemeProvider } from "styled-components";

import Main from "../../src/components/main";

import Navigation from "sections/Navigation";
import BlogPage from "sections/Blog-list";
import Contact from "sections/Contact";
import Footer from "sections/Footer";

import { GlobalStyle } from "sections/app.style";
import theme from "theme/blog/themeStyles";

const Home = () => {
  
  return <ThemeProvider theme={theme}>
    <Main title="Kaloote - Blog">
      <GlobalStyle />
      <Navigation />
      <BlogPage title={"Kaloote" + " Blog Posts"}/>
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
};

export default Home;
