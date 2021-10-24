import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
  <main>
    <Header />
    <section id="content">
      <Hero />
      <Projects />
      <About />
    </section>
    <Footer />
  </main>
  );
}

export default App;
