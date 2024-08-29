import React from "react";
import { useNavigate } from "react-router-dom";
import marvinPdf from "../../Photos/pdfsnippet.PNG";

const Skills = () => {
  const navigate = useNavigate();

  const onClick = () => {
    fetch("../../files/mtpdf.pdf").then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);

      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "mtpdf.pdf";
      alink.click();
    });

    // const pdfUrl = "mtpdf.pdf"
    // const link = document.createElement("a")
    // link.href = pdfUrl
    // link.download = "mtpdf.pdf"
    // document.body.appendChild(link)
    // link.click()
    // document.body.removeChild(link)
  };

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

                  <a
                    href={marvinPdf}
                    download="Marvin Thompson Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="downloadText jumboText">Download Resume</p>
                  </a>
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
