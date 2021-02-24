import React, { useEffect } from "react";
import "../../css/Project.css";
import noThanks from "../../Photos/ntcscreenshot.png";
import faceSpace from "../../Photos/facespacethumb2.jpg";
import { useHistory } from "react-router-dom";
import roadie from "../../Photos/Screen Shot 2020-09-19 at 2.48.37 PM.png";

const Project = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className="projects">
      <div className="container">
        <div className="jumbotron jumbotron-fluid text-center bigJumbo">
          <div className="container ">
            <div className="jumbotron jumbotron-fluid  innerJumbo">
              <div className="container">
                <h1 className="display-4 jumboTextTitle">Projects</h1>
                <p className="lead jumboText text-center">
                  Check out some of the projects I've built! Use the buttons in
                  the slides to view the Live Site as well as the Github for
                  each app.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary aboutButton"
              onClick={() => history.push("/skills")}
            >
              Skills
            </button>
          </div>
        </div>

        <div className="card-deck  justify-content-md-center ">
          <div
            className="card text-center slideCard"
            // style={{ width: "18rem" }}
          >
            <img
              className="card-img-top d-block img-fluid img-responsive cardImage"
              src={roadie}
              alt="Card image cap"
            />
            <div className="card-body cardBody">
              <h5 className="card-title jumboTextTitle projectTitle">Roadie</h5>
              <p
                className="card-text jumboText projectText text-left"
                style={{
                  fontSize: "3vh",
                }}
              >
                A booking application that is designed to connect musicians with
                event booking clients utilizing Reactjs and Redux Toolkit.
              </p>
              <a
                target="__blank"
                href="https://roadie-app.netlify.app/"
                className="btn enter btn-primary"
              >
                Live Site
              </a>
              <a
                target="__blank"
                href="https://github.com/marvinthompson-code/capstone_team1_roadie_app"
                className="btn enter btn-primary"
              >
                Github
              </a>
            </div>
          </div>

          <div
            className="card text-center slideCard"
            // style={{ width: "18rem" }}
          >
            <img
              className="card-img-top d-block img-fluid img-responsive cardImage"
              src={faceSpace}
              alt="Card image cap"
            />
            <div className="card-body cardBody">
              <h5 className="card-title jumboTextTitle projectTitle">FaceSpace</h5>
              <p
                className="card-text jumboText projectText text-left"
                style={{
                  fontSize: "3vh",
                }}
              >
                A social media website built using Reactjs and Redux toolkit.
                Users can create/share/delete posts, and customize profiles.
              </p>
              <a
                target="__blank"
                href="https://facespace.netlify.app/login"
                className="btn enter btn-primary"
              >
                Live Site
              </a>
              <a
                target="__blank"
                href="https://github.com/marvinthompson-code/CTA-FACESPACE"
                className="btn enter btn-primary"
              >
                Github
              </a>
            </div>
          </div>

          <div
            className="card text-center slideCard"
            // style={{ width: "18rem" }}
          >
            <img
              className="card-img-top d-block img-fluid img-responsive cardImage"
              src={noThanks}
              alt="Card image cap"
            />
            <div className="card-body cardBody">
              <h5 className="card-title jumboTextTitle projectTitle">#NowThatsCap</h5>
              <p
                className="card-text jumboText projectText text-left"
                style={{
                  fontSize: "3vh",
                }}
              >
                "#NowThatsCap" is an educational Black-History Card Game, currently in Beta. Test your cultural knowledge against the clock!
              </p>
              <a
                target="__blank"
                href="https://nowthatscap.netlify.app/"
                className="btn enter btn-primary"
              >
                Live Site
              </a>
              <a
                target="__blank"
                href="https://github.com/marvinthompson-code/now-thats-cap"
                className="btn enter btn-primary"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
