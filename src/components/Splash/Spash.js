import React, { useEffect } from "react";
import "../../css/Splash.css";
import FadeIn from "react-fade-in";
import { useHistory } from "react-router-dom";
import note from "../../Photos/musical-note.png";

const Splash = () => {
  const history = useHistory();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function script() {
    setTimeout(function () {
      document.getElementsByClassName("splashDiv").style.left = "1000px";
    }, 2000);
  }

  return (
    <div className={"splash container vertical-center "}>
      <div className="jumbotron jumbotron-fluid splashJumbo d-flex align-items-center min-vh-100 container">
        <div className="container">
          <h1 className="display-4 spashTextTitle">Marvin Thompson</h1>
          <p className="lead splashText">
            Full Stack Web Developer | Musician{" "}
          </p>

          <button
            type={"button"}
            className={"enter btn btn-primary"}
            onClick={() => history.push("/home")}
          >
            <img src={note} alt="enter" className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
