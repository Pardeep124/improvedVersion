import React from 'react';

import './style.css'

const Projects = ()=>{
    return(
        <section className="projects">
        <h2>Projects </h2>
        <hr />
        <div className="items">
          <div className="itemL">
            <h3>01Example</h3>
            <img
              src="https://images.unsplash.com/photo-1518568740560-333139a27e72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZSUyMHN0b3J5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="simple"
              className="item1"
            />
          </div>
          <div className="itemL">
            <h3>02Example</h3>
            <img
              src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY="
              alt="simple"
              className="item1"
            />
          </div>
          <div className="itemL">
            <h3>03Example</h3>
            <img
              src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
              alt="simple"
              className="item1"
            />
          </div>
          <h1 className="plusIcon">+</h1>
        </div>
      </section>
    )
}

export default Projects;