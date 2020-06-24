import React from 'react'
import PA from '../../Photos/PA.jpg'
import Selfie from '../../Photos/Selfie.jpg'
import Purple from '../../Photos/PurpleAlexis.jpg'
import '../../css/Home.css'

const Home = () => {

    const plusSlides = (n) => {

    }

    const currentSlide = (n) => {

    }


    const showSlides= (n) => {
        let i;

    }

    
    let slideIndex = 1;
    showSlides(slideIndex)


    return (
        <div className={"home"}>

            <div className={"slideshow-container"}>

                <div className={"mySlides fade"}>
                    <div className={"numberText"}>1 / 3</div>
                    <img src={PA} className={"image"} alt={"PA"}/>
                    <div className={"caption"}>Performing in Allentown, PA</div>
                </div>

                <div className={"mySlides fade"}>
                    <div className={"numberText"}>2 / 3</div>
                    <img src={Selfie} className={"image"} alt={"Selfie"}/>
                    <div className={"caption"}>Relaxing at Home!</div>
                </div>

                <div className={"mySlides fade"}>
                    <div className={"numberText"}>3 / 3</div>
                    <img src={Purple} className={"image"} alt={"GoldSounds"}/>
                    <div className={"caption"}>Performing at Gold Sounds for a Fundraiser</div>
                </div>

                <a className={"prev"} onClick={plusSlides(-1)}>&#10094;</a>
                <a className={"next"} onClick={plusSlides(1)}>&#10095;</a>
            </div>
            <br></br>

            <div className={"dots"}>
                <span className={"dot"} onClick={currentSlide(1)}></span>
                <span className={"dot"} onClick={currentSlide(2)}></span>
                <span className={"dot"} onClick={currentSlide(3)}></span>
            </div>

            <div id={"welcomeMessageContainer"}>
                <p id={"welcome"}>Welcome to my Portfolio Site! This webpage is meant to provide some insight about myself, as well as the Project's I've worked on while continuing my career as a Full-Stack Web Developer. To learn a bit more about me, click <a href={"/about"}>here</a> or visit the About tab. To check out some of my projects, click <a>here</a> or visit the Projects tab above. Looking forward to getting to know you soon!</p>
            </div>
            
        </div>
    )
}

export default Home;