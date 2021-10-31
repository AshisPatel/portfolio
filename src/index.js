import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../src/style.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCoffee, faMusic, faStickyNote, faDollarSign, faPizzaSlice, faCloud, faMagic, faEnvelopeOpenText, faMobileAlt, faHome, faComment, faPaperPlane, faHashtag, faCodeBranch, faFile, faAddressCard, fa } from '@fortawesome/free-solid-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(fab, faHeart, faMusic, faCoffee, faStickyNote, faDollarSign, faPizzaSlice, faCloud, faMagic, faEnvelopeOpenText, faMobileAlt, faHome, faComment, faPaperPlane, faHashtag, faCodeBranch, faFile, faAddressCard); 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
