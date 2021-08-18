import React from 'react'
import './styles.css'

function Header() {
    return (
        <div className="header">
        <p className="description">
          I’m Arnau Ros, a graphic designer & content creator based in
          Barcelona. Available for freelance & collaborations.{" "}
        </p>
        <div className="img">
          <img
            className="baaj"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YptOPjAb4lu11QV77JH8whMoOE3i5Gi4jg&usqp=CAU"
            alt="images"
          />
        </div>
      </div>
    )
}

export default Header
