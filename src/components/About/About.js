import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Purple from "../../Photos/PurpleAlexis.jpg";
import lastLive from "../../Photos/84399706_3248712785158171_314242703846014976_n.jpg";
import "../../css/About.css";
import Berkshire from "../../Photos/Berkshire.jpg";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const history = useHistory();
  return (
    <div className={"about"}>
      <div className={"bigContainer container"}>
        <div
          className={"questionContainer jumbotron jumbotron-fluid text-center"}
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
                  fontSize: "3vh",
                }}
              >
                Hey! My name is Marvin Thompson, and I'm a Musician-turned-Full
                Stack Developer from Queens, New York. I'm a college alum
                hailing from John Jay College, Graduating with a Bachelors of
                Science in Criminal Justice.
              </p>

              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                I'm a lover of video games, documentaries, astronomy and music.
                On my free time you'll most likely find me on Twitch, writing
                music or deep in a moshpit at some local show. I have an
                insatiable appetite for learning, and that's what eventually
                lead me to try my hand at Tech.
              </p>
            </div>
          </div>
        </div>

        <div
          className={"questionContainer jumbotron jumbotron-fluid text-center"}
        >
          <h2 className={"question jumboTextTitle"}>How did I get here?</h2>
          <br></br>
          <div className="row">
            <div className="col-sm-6 jumboInfo">
              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                Growing up I had a few friends that would tell me about coding,
                but it seemed like a niche interest at the time than a career
                path.
              </p>

              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                However, during my time at John Jay, I started to feel lost, and
                I found myself at wits end about where I would end up. My
                girlfriend, who at the time was beginning her time at a Program
                called Pursuit, invited me to come to one of their welcoming
                seminars.
              </p>

              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                There, I ended up learning about the program, meeting developers
                in training, and falling in love with the place. The tech
                environment felt incredibly refreshing. People from all walks of
                life ventured to this field to make something of themselves -
                People with stories that echoed my own. After a lot of
                encouragement from my new friends, I decided that I needed to be
                here. Before long, I fell in love with coding, and I want to do
                this for the rest of my life.
              </p>
            </div>
            <div className="col-sm-6">
              <img
                src={Purple}
                className="img-fluid jumboImage"
                alt="Responsive image"
              />
            </div>
          </div>
        </div>

        <div
          className={"questionContainer jumbotron jumbotron-fluid text-center"}
        >
          <h2 className={"question jumboTextTitle"}>Why Coding?</h2>
          <br></br>
          <div className="row">
            <div className="col-sm-6">
              <img
                src={Berkshire}
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
                push myself. As a creator, the pride I feel after learning about
                something and then using that information to create something of
                my own is unmatched.
              </p>

              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                I get so happy after solving problems that I didn't know how to
                before, or being introduced to new concepts or tricks. Coding is
                always evolving. There is always a new challenge to face, or a
                new thing to learn, or a new way to express yourself with it.
              </p>

              <p
                className={"info text-left"}
                style={{
                  fontSize: "3vh",
                }}
              >
                I want to push myself and help create products that can help
                others out, and learn more about myself in the process.
              </p>
              <button
                type="button"
                className="btn btn-primary projectsButton"
                onClick={() => history.push("/projects")}
              >
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
