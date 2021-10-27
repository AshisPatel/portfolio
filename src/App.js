import React, {useState} from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {

  const [rendered, setRendered] = useState('about');

  return (
  <main>  
    <Header rendered={ rendered } setRendered = {setRendered}/>
    <section id="content">
      {rendered === 'about' && <About rendered={ rendered } setRendered = {setRendered}/>}
      {rendered === 'projects' && <Projects />}
      {rendered === 'contact' && <Contact />}
    </section>
    <Footer />
  </main>
  );
}

export default App;
