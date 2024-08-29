import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Purple from "../../Photos/PurpleAlexis.jpg";
import lastLive from "../../Photos/84399706_3248712785158171_314242703846014976_n.jpg";
import "../../css/About.css";
import Berkshire from "../../Photos/Berkshire.jpg";
import bwMarvin from "../../Photos/bwmarvin.jpg"
import perch from "../../Photos/perch.jpg"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className={"about"}>
        <div className={"bigContainer container"}>
          <div
            className={
              "questionContainer jumbotron jumbotron-fluid text-center"
            }
          >
            <h2 className={"question jumboTextTitle "}>Who am I?</h2>
            <br></br>

            <div className="row">
              <div className="col-sm-6">
                <img
                  src={lastLive}
                  className="img-fluid jumboImage"
                  alt="Responsive image"
                />
              </div>
              <div className="col-sm-6 jumboInfo">
                <p
                  className={"info text-left"}
                  style={{
                    fontSize: "25px",
                  }}
                >
                  Hey! My name is Marvin Thompson, and I'm a Software engineer
                  from New York City. I'm a musician, playing guitar and
                  producing for many projects over the years. I'm also an avid
                  fighting game fan, so if you're a fan, I'm always down to play
                  some Street Fighter!
                </p>
              </div>
              
              <br></br>
              <br></br>
            </div>
          </div>

          <div
            className={
              "questionContainer jumbotron jumbotron-fluid text-center"
            }
          >
            <h2 className={"question jumboTextTitle"}>How did I get here?</h2>
            <br></br>
            <div className="row">
              <div className="col-sm-6 jumboInfo">
                <p
                  className={"info text-left"}
                  style={{
                    fontSize: "25px",
                  }}
                >
                  I transitioned into tech after graduating John Jay College
                  with a B.S.E in Criminal Justice. However, I wanted to explore
                  a field that allowed me to be more creative, and work in a
                  more integrated team setting. My partner was beginning her
                  Bootcamp, and after attending a few seminars, my road with
                  Javascript began.
                </p>

                <p
                  className={"info text-left"}
                  style={{
                    fontSize: "25px",
                  }}
                ></p>
              </div>
              <div className="col-sm-6">
                <img
                  src={perch}
                  className="img-fluid jumboImage"
                  alt="Responsive image"
                />
              </div>
            </div>
            <br></br>
          </div>

          <div
            className={
              "questionContainer jumbotron jumbotron-fluid text-center"
            }
          >
            <h2 className={"question jumboTextTitle"}>Why Coding?</h2>
            <br></br>
            <div className="row">
              <div className="col-sm-6">
                <img
                  src={bwMarvin}
                  className="img-fluid jumboImage"
                  alt="Responsive image"
                />
              </div>
              <div className="col-sm-6 jumboInfo">
                <p
                  className={"info text-left"}
                  style={{
                    fontSize: "3vh",
                  }}
                >
                  I've met some of the nicest people ever in my short time as a
                  developer. These people have been there for me when I thought
                  that I couldn't do it. It's because of them that I continue to
                  push myself. As a creator, the pride I feel after learning
                  about something and then using that information to create
                  something of my own is unmatched.
                </p>
              </div>
            </div>
            <br></br>
           
            <button
              type="button"
              className="btn btn-primary projectsButton"
              onClick={() => navigate("/projects")}
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
