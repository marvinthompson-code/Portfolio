import React , { useState, useEffect } from 'react'
import PA from '../../Photos/PA.jpg'
import Selfie from '../../Photos/Selfie.jpg'
import Purple from '../../Photos/PurpleAlexis.jpg'
import '../../css/Home.css'

const Home = () => {
    let slideIndex = 1;

    const plusSlides = (n) => {
        showSlides(slideIndex += n)
    }
    
    const currentSlide = (n) => {
        showSlides(slideIndex = n)
    }

    const showSlides= (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides")
        let dots = document.getElementsByClassName("dot")
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    }

    return (
        <div className={"home"}>
                <h2 id={"bigText"}>Welcome!</h2>
            <div className={"image-container"}>
                <div className={"picture fade"}>
                    <img src={Selfie} className={"image"} alt={"Selfie"}/>
                </div>
            </div>
            <div id={"welcomeMessageContainer"}>
                <p id={"welcome"}>Welcome to my Portfolio Site! This webpage is meant to provide some insight about myself, as well as the Project's I've worked on while continuing my career as a Full-Stack Web Developer. To learn a bit more about me, click <a href={"/about"}>here</a> or visit the About tab. To check out some of my projects, click <a href={"/project"}>here</a> or visit the Projects tab above. Looking forward to getting to know you soon!</p>
            </div>
            
        </div>
    )
}

export default Home;