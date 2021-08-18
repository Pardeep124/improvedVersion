import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./styles.css";

import Navbar from "../Navbar/navbar";
import Projects from "../Projects/Projects";
import ContentCreation from "../Content/Content";
import About from "../About/About";
import Client from "../Client/Client";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import Recent from "../RecentBlog/Recent";
import Newsletter from "../Newsletter/Newsletter";

function Home() {
  return (
    <section className="main">
      <Navbar />
      <Header />
      <Projects />
      <ContentCreation />
      <About />
      <Client />
      <Contact />
      <Recent />
      {/* <hr className="first" /> */}
      <Newsletter />
      {/* <hr className="second" /> */}
      <section className="footer">
        <div className="downflex">
          <p className="logos">Logo</p>
          <p className="copyright">
            © 2021 Arnau Ros, LLC. All rights reserved.
          </p>
        </div>
        <p>
          <FacebookIcon className="icons" fontSize="large" />
          <TwitterIcon className="icons" fontSize="large" />
          <WhatsAppIcon className="icons" fontSize="large" />
        </p>
      </section>
    </section>
  );
}

export default Home;
