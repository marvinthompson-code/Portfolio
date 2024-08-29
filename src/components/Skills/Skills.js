import React from "react";
import { useNavigate } from "react-router-dom";
import ReactLogo from "../../Photos/React.png";
import NodeLogo from "../../Photos/Node.png";
import ReduxLogo from "../../Photos/Redux.png";
import PostGresLogo from "../../Photos/postgresql.png";
import GitLogo from "../../Photos/Git-Logo-White.png";
import HCJ from "../../Photos/HtmlCssJs.png";
import expressJs from "../../Photos/expressJsLogo.png";
import django from "../../Photos/django-logo-negative.png";
import firebaseLogo from "../../Photos/firebaselogo.png";

import marvinPdf from "../../Photos/pdfsnippet.PNG";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          className="container"
          style={{
            padding: "10px",
          }}
        >
          <div className="jumbotron jumbotron-fluid text-center bigJumbo">
            <div className="container">
              <h1 className="display-4 jumboTextTitle">Skills</h1>
              <p className="lead jumboText text-center">
                Here are some of the things I've learned during my time as a
                developer.
              </p>

              <div className={"row"}>
                <div className="col-sm-6">
                  <p className="lead jumboText text-left">Languages:</p>
                </div>

                <div className="col-sm-6">
                  <ul>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Javascript
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Python
                    </li>
                  </ul>
                </div>
              </div>

              <div className={"row"}>
                <div className="col-sm-6">
                  <p className="lead jumboText text-left">Front-End:</p>
                </div>

                <div className="col-sm-6">
                  <ul>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      HTML/CSS
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      React
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Node.js
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Redux/Redux Toolkit
                    </li>
                  </ul>
                </div>
              </div>

              <div className={"row"}>
                <div className="col-sm-6">
                  <p className="lead jumboText text-left">Back-End:</p>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Express.js
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      MySQL
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      PostGreSQL
                    </li>
                    <li
                      className="jumboText"
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      API development
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <p className="lead jumboText text-left">Testing:</p>
                </div>
                <div className="col-sm-6">
                  <ul>
                    <li
                      className={"jumboText"}
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Cypress
                    </li>
                    <li
                      className={"jumboText"}
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Jest
                    </li>
                    <li
                      className={"jumboText"}
                      style={{
                        listStyleType: "none",
                      }}
                    >
                      Manual Testing
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div>
                  <img
                    src={marvinPdf}
                    alt="Marvin's resume"
                    width={"40%"}
                    style={{
                      padding: "10px",
                    }}
                  />

                  <p className="lead jumboText">Download Resume</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary aboutButton"
              onClick={() => navigate("/contact")}
              style={{
                margin: "10px",
              }}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
