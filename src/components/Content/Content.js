import React from 'react'
import CallMadeIcon from '@material-ui/icons/CallMade';

import './styles.css'

function Content() {
    return (
        <section className="contentCreation">
        <h2>Content Creation </h2>
        <hr />
        <div className="details">
          <div className="contactLink">
            <p>
              Lorem ipsum YouTube dolor sit amet, consectetur adipiscing elit. A
              nisi, accumsan, ornare donec risus pharetra mattis in. YouTube
              elit. A nisi, accumsan, ornare donec risus pharetra mattis in.
              YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis
              in.
            </p>
            <h4>Get in contact about a sponsorship <CallMadeIcon /></h4>
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mTAupMv-3t8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    )
}

export default Content;
