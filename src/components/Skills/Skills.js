import React from "react";
import { useHistory } from "react-router-dom";
import ReactLogo from "../../Photos/React.png";
import NodeLogo from "../../Photos/Node.png";
import ReduxLogo from "../../Photos/Redux.png";
import PostGresLogo from "../../Photos/postgresql.png";
import GitLogo from "../../Photos/Git-Logo-White.png";
import HCJ from "../../Photos/HtmlCssJs.png";
import expressJs from "../../Photos/expressJsLogo.png"
import django from "../../Photos/django-logo-negative.png"
import firebaseLogo from "../../Photos/firebaselogo.png"

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
                <div className="skillContainer container">
                  <div className="skillImageContainer">
                <img src={ReactLogo} alt={"react"} className={"skill"} />
                  </div>
                <p className="skillDescription">Reactjs</p>
                </div>



                <div div className="skillContainer container">
                <div className="skillImageContainer">
                <img src={NodeLogo} alt={"node"} className={"skill"} />
                </div>
                <p className="skillDescription">Nodejs</p>
                </div>

                <div div className="skillContainer container">
                <div className="skillImageContainer">
                <img src={ReduxLogo} alt={"redux"} className={"skill"} />
                </div>
                <p className="skillDescription">Reduxjs/Redux Toolkit</p>
                </div>

                <div div className="skillContainer container">
                <div className="skillImageContainer">
                <img src={django} alt={"django"} className={"skill"} />
                </div>
                <p className="skillDescription">Django</p>
                </div>

                <div div className="skillContainer container">
                <div className="skillImageContainer">
                  <img src={firebaseLogo}  className={"skill"}/>
                  </div>
                  <p className="skillDescription">Firebase</p>
                </div>
              </div>
              <div className="col">
              <div div className="skillContainer container">
              <div className="skillImageContainer">
                <img
                  src={PostGresLogo}
                  alt={"PostGresql"}
                  className={"skill"}
                  />
                  </div>
                  <p className="skillDescription">Postgresql</p>
                  </div>
                  <div div className="skillContainer container">
                  <div className="skillImageContainer">
                <img src={GitLogo} alt={"Github"} className={"skill"} />
                </div>
                <p className="skillDescription">Github</p>
                  </div>
                  <div div className="skillContainer container">
                  <div className="skillImageContainer">
                <img src={HCJ} alt={"hcj"} className={"skill"} />
                </div>
                <p className="skillDescription">Javascript/HTML/CSS</p>
                  </div>
                  <div div className="skillContainer container">
                  <div className="skillImageContainer">
                <img src={expressJs} alt={"express logo"} className={"skill"} />
                </div>
                <p className="skillDescription">Expressjs</p>
                  </div>
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
