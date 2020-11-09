import React from "react";
import FadeIn from "react-fade-in";
import { usHistory, useHistory } from "react-router-dom";
import ReactLogo from "../../Photos/React.png";
import NodeLogo from "../../Photos/Node.png";
import ReduxLogo from "../../Photos/Redux.png";
import PostGresLogo from "../../Photos/postgresql.png";
import GitLogo from "../../Photos/Git-Logo-White.png";
import HCJ from "../../Photos/HtmlCssJs.png";
import Contact from "../Contact/Contact";
import expressJs from "../../Photos/expressJsLogo.png"

const Skills = () => {
  const history = useHistory();
  return (
    <div>
      <div className="container">
        <div className="jumbotron jumbotron-fluid text-center bigJumbo">
          <div className="container">
            <h1 className="display-4 jumboTextTitle">Skills</h1>
            <p className="lead jumboText text-center">
              Here are some of the things I've learned during my time as a
              developer.
            </p>
            <div className={"row"}>
              <div className="col">
                <img src={ReactLogo} alt={"react"} className={"skill1"} />

                <img src={NodeLogo} alt={"node"} className={"skill2"} />

                <img src={ReduxLogo} alt={"redux"} className={"skill3"} />
              </div>
              <div className="col">
                <img
                  src={PostGresLogo}
                  alt={"PostGresql"}
                  className={"skill4"}
                />

                <img src={GitLogo} alt={"Github"} className={"skill5"} />

                <img src={HCJ} alt={"hcj"} className={"skill6"} />
                <img src={expressJs} alt={"express logo"} className={"skill7"} />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary aboutButton"
            onClick={() => history.push("/contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
