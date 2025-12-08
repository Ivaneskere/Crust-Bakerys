import React from "react"
import './Hero.scss'

function Hero() {
    return(
    <section id="hero" className="hero">
        <div className="block">
            <h1>Text</h1>
            <div className="buttons">
                <button type="button" className="colored">
                    text
                </button>
                <button type="button" className="white">
                    text
                </button>
            </div>
        </div>
    </section>
    )
}

export default Hero;