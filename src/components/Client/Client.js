import React from "react";
import "./styles.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Client() {
  return (
    <section className="client">
      <h2>What Clients Say </h2>
      <hr className="hr" />
      <Carousel className="length">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
}

export default Client;
