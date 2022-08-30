import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  const styles = {
    display: "none",
  };

  const doHover = () => {
    setDisplay(true);
  };

  const doHover2 = () => {
    setDisplay(false);
  };

  const doHoverh2 = () => {
    setDisplay2(true);
  };
  const doHoverh22 = () => {
    setDisplay2(false);
  };

  const doHoverh3 = () => {
    setDisplay3(true);
  };

  const doHoverh33 = () => {
    setDisplay3(false);
  };

  return (
    <div className="App">
      <div className="hope">
        <Link to="/about"style={{ textDecoration: 'none' }}>
          <h1 
            onMouseEnter={doHover}
            onMouseLeave={doHover2}
            style={{ styles }}
            className="hello hope"
          >
            {display === true ? "About" : "Hello."}
          </h1>
           </Link>
           <Link to="/work"style={{ textDecoration: 'none' }}>
            
        <h2
          onMouseEnter={doHoverh2}
          onMouseLeave={doHoverh22}
          style={{ styles }}
          className="hello hope"
        >
          {display2 === true ? "I am" : "Work"}
        </h2>
        </Link>
        <Link to="/contact"style={{ textDecoration: 'none' }}>
          <h3
            onMouseEnter={doHoverh3}
            onMouseLeave={doHoverh33}
            style={{ styles }}
            className="helo"
          >
            {display3 === true ? "Tope" : "Contact"}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
