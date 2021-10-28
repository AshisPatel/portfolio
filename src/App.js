import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {

  const [rendered, setRendered] = useState('about');

  return (
  <main className="d-flex flex-column">  
      <Header rendered={ rendered } setRendered = {setRendered}/>
      <Switch>
        <Route exact path="/">
          <About rendered={ rendered} setRendered = {setRendered} />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      {/* {rendered === 'about' && <About rendered={ rendered } setRendered = {setRendered}/>} */}
      {/* {rendered === 'projects' && <Projects />}
      {rendered === 'contact' && <Contact />} */}
      <Footer />
  </main>
  );
}

export default App;
