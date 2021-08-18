import React from "react";

import "./styles.css";

function About() {
  return (
    <section className="about">
      <h2>About Me </h2>
      <hr className="hr" />
      <div className="content">
        <p className="parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nullam
          augue dolor libero at in. Egestas in elit vitae tincidunt morbi
          egestas nec massa. Pretium, placerat quis sem gravida vel quam nisl in
          semper. Platea enim nunc aliquam volutpat, ut sed morbi. Sit leo
          aliquam at amet, eu dictumst accumsan eu, quis. Nam ac mattis
          adipiscing euismod.
        </p>
        <div className="dropdown">
          <h3>Your one stop Shop for:</h3>
          <div className="dropbtn">Branding / Logo</div>
          <hr />
          <div className="dropdown-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed
            pulvinar rutrum tempor. Etiam duis massa elementum, etiam cras
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mi sed pulvinar rutrum tempor. Etiam duis massa elem Starting at
          </div>
          <div className="dropbtn">Packaging</div>
          <hr />
          <div className="dropbtn">Websites</div>
          <hr />
        </div>
      </div>
    </section>
  );
}

export default About;
