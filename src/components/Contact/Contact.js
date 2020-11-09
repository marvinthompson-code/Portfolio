import React from "react";
import emailjs from "emailjs-com";
import "../../css/Contact.css";
import { USER_ID } from "../../secrets";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("gmail", "template_bogso8m", e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }
  return (
    <div className="contactDiv">
      <div className="container">
        <div className="jumbotron jumbotron-fluid text-center bigJumbo">
          <div className="container">
            <h1 className="display-4 jumboTextTitle">Contact Me</h1>
            <p className="lead jumboText">
              Let's get in touch! Looking forward to meeting you.
            </p>
            <form className="contact-form contactForm" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <div className="row">
                <div className="col-sm-6  contactInput ">
                  <label className="jumboText">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="from_name"
                    required
                  />
                </div>
                <div className="col-sm-6  contactInput">
                  <label className="jumboText">Email</label>
                  <input
                    type="email"
                    name="replay_to"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <label className="jumboText">Message</label>
              <textarea
                name="message"
                className="form-control contactInputText"
                id="exampleFormControlTextarea1"
                rows="3"
                required
              />
              <br></br>
              <input type="submit" value="Send" className="btn btn-primary enter" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
