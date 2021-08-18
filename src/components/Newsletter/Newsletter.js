import React from 'react'
import './styles.css'

function Newsletter() {
    return (
        <section className="newsLetter">
            <h2>Join the Newsletter!</h2>
            <p className="parag">You’ll receive an email every once in a while about new products, courses, and videos!</p>
            <div className="center"><input type="email" placeholder="name@example.com" className="email" /> <button className="submit">Submit</button></div>
            <p className="grey">We’ll never share your details. See our Privacy Policy</p>
        </section>
    )
}

export default Newsletter
