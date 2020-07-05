import React from 'react'
import PA from '../../Photos/PA.jpg'
import Purple from '../../Photos/PurpleAlexis.jpg'
import '../../css/About.css'

const About = () => {

    return (
        <div className={"about"}>
            <div className={"bigContainer"}>
                <div className={"questionContainer fade"}>
                    <h2 className={"question"}>Who am I?</h2>
                        <p className={"info fade"}>Hey! My name is Marvin Thompson, and I'm a Musician-turned-Full Stack Developer from Queens, New York. I'm a college alum hailing from John Jay College, Graduating with a Bachelors of Science in Criminal Justice. I'm a lover of video games, specifically Fighting Games (Feel free to use the contact form to ask for Tekken 7 or Smash matches at your own peril), documentaries, astronomy and music. On my free time you'll most likely find me on Twitch, writing music or deep in a moshpit at some local show. I have an insatiable appetite for learning, and that's what eventually lead me to try my hand at Tech.</p> 
                </div>

                <div className={"questionContainer fade"}>
                    <h2 className={"question"}>How did I get here?</h2>
                        <p className={"info fade"}>It's quite the story, actually. Growing up I had a few friends that would tell me about coding, but it seemed more like a niche interest at the time than a career path. I focused a large part of my life on music, whether playing in bands, playing shows, recording - you name it. I also balanced a healthy school life, which you can imagine was a very busy time for me. However, during my time at John Jay, I started to feel what I can only describe as lost. My heart wasn't invested in subjects like Criminal Justice, and at the time, music was beginning to become extremely hard for me. I was drained, unmotivated, and I found myself at wits end about where I would end up. My girlfriend, who at the time was beginning her time at a Program called Pursuit, invited me to come to one of their welcoming seminars. There, I ended up learning about the program, meeting developers in training, and falling in love with the place. The tech environment felt incredibly refreshing. People from all walks of life ventured to this field to make something of themselves - People with stories that echoed my own. After a lot of encouragement from my new friends, my girlfriend, my band and others, I decided that I needed to be here. I needed to give it a try. Before long, I fell in love with coding, and I want to do this for the rest of my life.</p>
                </div>

                <div className={"questionContainer fade"}>
                    <h2 className={"question fade"}>Why Coding?</h2>
                    <p className={"info fade"}>I've met some of the nicest people ever in my short time as a developer. These people have been there for me when I thought that I couldn't do it. It's because of them that I continue to push myself. As a creator, the pride I feel after learning about something and then using that information to create something of my own is unmatched. I get so happy after solving problems that I didn't know how to before, or being introduced to new concepts or tricks. Coding is always evolving. There is always a new challenge to face, or a new thing to learn, or a new way to express yourself with it. I want to push myself and help create products that can help others out, and learn more about myself in the process.</p>
                </div>

            </div>

        </div>
    )
}

export default About;