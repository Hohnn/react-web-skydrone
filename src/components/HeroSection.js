import React from "react"
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { useParallax } from 'react-scroll-parallax'


function HeroSection() {


    return (
        <div className="hero-container">
            <h1>SKY DRONE</h1>
            <p>Votre prestataire aérien pour tous vos projets.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>réserver</Button>
            </div>
            <div className="scroll"></div>
        </div>
    )
}

export default HeroSection