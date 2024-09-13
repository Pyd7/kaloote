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
  const router = useRouter()
  const { cat } = router.query
  try {
    
  var categorieName = cat.charAt(0).toUpperCase() + cat.slice(1)
  if(cat.indexOf("-") !== -1) {
    var words = cat.split("-")
    categorieName = ""
    for(var i = 0; i < words.length; i++) {
      var word = words[i]
      words[i] = word.charAt(0).toUpperCase() + word.slice(1)
      categorieName += words[i] + ' '
    }
    categorieName = categorieName.slice(0, -1)
  }
  return <ThemeProvider theme={theme}>
    <Main title="Kaloote - Blog">
      <GlobalStyle />
      <Navigation />
      <BlogPage title={categorieName + " Blog Posts"}/>
      <Contact />
      <Footer />
    </Main>
  </ThemeProvider>
  }
  catch(e){
    return <ThemeProvider theme={theme}>
  <Main title="Kaloote - Blog">
    <GlobalStyle />
    <Navigation />
    <BlogPage title={"Kaloote " + " Blog Posts"}/>
    <Contact />
    <Footer />
  </Main>
</ThemeProvider>

  }
};

export default Home;
