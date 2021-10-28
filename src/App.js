import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {

  return (
  <main className="d-flex flex-column">  
      <Header />
      <section id="content">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </section>
      <Footer />
  </main>
  );
}

export default App;
