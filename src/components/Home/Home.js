import React from "react";
import { useNavigate } from "react-router-dom";
import Andrew from "../../Photos/Andrew.jpg";
import Contact from "../Contact/Contact";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../../css/Home.css";
import lawrence from "../../Photos/39926998_2266028230093303_5751449542830587904_o.jpg";
import bw2 from "../../Photos/bw2.jpg";
import green from "../../Photos/promo-54.jpg";
import knitting from "../../Photos/knittingResize.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home container">
        <div className="jumbotron jumbotron-fluid text-center welcomeJumbo">
          <div className="container">
            <h1 className="display-4 jumboTextTitle">Marvin Thompson</h1>
            <p className="lead jumboText">
              Full Stack Web Developer | Musician
            </p>
          </div>
        </div>

        <div className="row wrapper">
          <div
            className="col-sm-6 carouselColumn"
            style={{
              margin: "10x",
            }}
          >
            <div
              id="carouselExampleControls"
              className="carousel slide homeCarousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 carouselImage img-fluid"
                    src={bw2}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 carouselImage img-fluid"
                    src={green}
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

                <div className="carousel-item">
                  <img
                    className="d-block w-100 carouselImage img-fluid"
                    src={knitting}
                    alt="Fourth slide"
                  />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                href="#carouselExampleControls"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                href="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="jumbotron greetingsJumbo text-center">
              <h1 className="display-3 jumboTextWelcome text-center">
                Welcome
              </h1>
              <p
                className="lead jumboText jumboBodyText text-center"
                style={{
                  fontSize: "25px",
                }}
              >
                Welcome to my Portfolio Site!
              </p>
              <p
                className="lead jumboText jumboBodyText text-center"
                style={{
                  fontSize: "20px",
                  paddingBottom: "5px",
                }}
              >
                <span>
                  This webpage is meant to provide some insight about myself, as
                  well as the Project's I've worked on while continuing my
                  career as a Full-Stack Web Developer.
                </span>
              </p>

              <p
                className="jumboText jumboBodyText text-center"
                style={{
                  fontSize: "20px",
                }}
              >
                To learn a bit more about me, click <a href={"/about"}>here</a>{" "}
                or click below. To check out some of my projects, click{" "}
                <a href={"/projects"}>here</a> or visit the Projects tab above.
                Looking forward to getting to know you soon!
              </p>
              <p className="lead"></p>
              <button
                type="button"
                className="btn btn-primary aboutButton"
                onClick={() => navigate("/about")}
                style={{
                  margin: "10px",
                }}
              >
                About
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "15px",
          }}
        >
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
