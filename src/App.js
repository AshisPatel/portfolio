import React, {useState} from "react";
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
      {rendered === 'about' && <About rendered={ rendered } setRendered = {setRendered}/>}
      {rendered === 'projects' && <Projects />}
      {rendered === 'contact' && <Contact />}
      <Footer />
  </main>
  );
}

export default App;
