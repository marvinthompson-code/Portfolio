import React from "react";
import { useHistory } from "react-router-dom";
import Andrew from "../../Photos/Andrew.jpg";
import Contact from "../Contact/Contact";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../../css/Home.css";
import lawrence from "../../Photos/39926998_2266028230093303_5751449542830587904_o.jpg";
import marissa from "../../Photos/ANAHATA (FB, IG)-71.jpg";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home container">
      <div className="jumbotron jumbotron-fluid text-center welcomeJumbo">
        <div className="container">
          <h1 className="display-4 jumboTextTitle">Marvin Thompson</h1>
          <p className="lead jumboText">Full Stack Web Developer | Musician</p>
        </div>
      </div>

      <div className="row wrapper">
        <div className="col-sm-6 carouselColumn">
          <div
            id="carouselExampleControls"
            className="carousel slide homeCarousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 carouselImage img-fluid"
                  src={marissa}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carouselImage img-fluid"
                  src={Andrew}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 carouselImage img-fluid"
                  src={lawrence}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="jumbotron greetingsJumbo text-center">
            <h1 className="display-3 jumboTextWelcome text-center">Welcome</h1>
            <p
              className="lead jumboText jumboBodyText"
              style={{
                fontSize: "3vh",
              }}
            >
              Welcome to my Portfolio Site! This webpage is meant to provide
              some insight about myself, as well as the Project's I've worked on
              while continuing my career as a Full-Stack Web Developer.
            </p>
            <hr className="my-4" />
            <p
              className="jumboText jumboBodyText"
              style={{
                fontSize: "3vh",
              }}
            >
              To learn a bit more about me, click <a href={"/about"}>here</a> or
              click below. To check out some of my projects, click{" "}
              <a href={"/projects"}>here</a> or visit the Projects tab above.
              Looking forward to getting to know you soon!
            </p>
            <p className="lead"></p>
            <button
              type="button"
              className="btn btn-primary aboutButton"
              onClick={() => history.push("/about")}
            >
              About
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
