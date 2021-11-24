import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/styles/Global";

import Container from "./Components/styles/Container.styled";
import Header from "./Components/Layout/Header";
import Card from "./Components/Layout/Card";
import Footer from "./Components/Layout/Footer";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "48rem",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} {...item}></Card>
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
