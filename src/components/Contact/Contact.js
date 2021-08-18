import React from "react";

import "./styles.css";

function Contact() {
  return (
    <section className="about">
      <h2>Say Hello </h2>
      <hr className="hr" />
      <div className="container">
        <div className="contents">
          <p className="paragraph">
            Looking to start a new project or just want to say hi? Send me an
            email and I’ll do my best to reply within 24 hrs!
          </p>
          <p className="para2">If contact forms aren’t your thing... send me an email at hello@arnau.design</p>
        </div>
        <form action="" className="form">
          <h4 className="name"> Name*</h4>
          <div className="inputs">
            <input placeholder="First Name" type="text" className="sInput" />
            <input placeholder="Last Name" type="text" className="sInput" />
          </div>
          <div className="inputs">
            <div>
              <h4 className="heading">Inquiry*</h4>
              <input placeholder="Inquiry" type="text" className="sInput" />
            </div>
            <div>
              <h4 className="heading">Email*</h4>
              <input placeholder="Email" type="text" className="sInput" />
            </div>
          </div>
          <div className="message">
            <h4 className="heading">Message*</h4>
            <textarea placeholder="Hello" className="sInput messages" />
          </div>
          <button className="send">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
