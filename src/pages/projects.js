import React from "react"
import Layout from "../components/layout"
import TrackList from "../components/audio-player/track-list";
import todo from "../../static/todo.png"
import quote from "../../static/quote.png"
import gym from "../../static/gym.png"
import crimble from "../../static/crimble.png"
import "../style/index.scss";

const tracks=[
    {
        url: "https://soundcloud.com/starline_audio/starline"
    },
    {
        url: "https://soundcloud.com/starline_audio/stability-in-momentum"
    },
    {
        url: "https://soundcloud.com/starline_audio/peacement"
    },
]

export default function Project() {
    return (
        <Layout>
        <div>
        <br></br>
            <div>
                <h1>QA Practical Project </h1>
            </div>
            <div>
                <h3>1. Crimble Consulting</h3>
                <p>My first freelance client project. The client needed a simple website built for his consultancy business.</p>
                <div className="paddedDiv">
                    <a href="https://www.crimbleconsulting.co.uk/" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={crimble} alt="Screenshot of Crimble"/>
                </div>
                <p>
                    This project enabled me to solidify my knowledge of using Media Queries, Web Hosting with a purchased domain and SEO. 
                    <br></br>
                    It was also an excellent opportunity to gain experience communicating with a client.
                </p>
            </div>
            <br></br>
            <div>
                <h3>2. QA Project 1 - Games Shop App</h3>
                <p>This project required me to create an application of my choosing with multiple constraints. I chose to create a Games Shop database application.</p>
                <div className="paddedDiv">
                    <a href="https://github.com/jdovener/qa-project1#readme" target="_blank" rel="noreferrer">Click here to view project documentation</a>
                </div>
                {/* <div className="paddedDiv">
                    <img src={QAProject1} alt="Screenshot of QAProject1"/>
                </div> */}
                <p>The project had to have a front-end website with full CRUD functionality and utilise a relational database to store data persistently.
                    New concepts I learnt during this project included unit testing with Pytest and using Jenkins as a build server.
                </p>
                <p>Please click the above link for very detailed documentation.</p>
            </div>
            <br></br>
            <div>
                <h3>3. QA Project 2 - Activitiy Generator App</h3>
                <p>The project brief required me to create an application of my choosing which consists of four microservices. I chose to create an Activity Generator App</p>
                <div className="paddedDiv">
                    <a href="https://github.com/jdovener/QA-DevOps-Practical#readme" target="_blank" rel="noreferrer">Click here to view project documentation</a>
                </div>
                {/* <div className="paddedDiv">
                    <img src={QAProject2} alt="Screenshot of QAProject2"/>
                </div> */}
                <p>This project was an oppotunity to learn about Containerisation and Orchestration via Docker and Docker Swarm. 
                    I was also able to learn about using Ansible as a Configuration Manager</p>
            </div>
            <br></br>   
            <div>
                <h3>4. Gym Progress Tracker</h3>
                <p>An app that will track strength training progression and compare with previous weeks. Work in progress.</p>
                <div className="paddedDiv">
                    <img src={gym} alt="Screenshot of Gym Tracker"/>
                </div>
                <p>The main goal with this project is to become comfortable working with flex box and persisting data between uses.</p>
            </div>
            <br></br>
            <div>
                <h3>5. Quote Generator</h3>
                <p>An app that randomly selects from an amalgamation of my favourite quotes.</p>
                <div className="paddedDiv">
                    <a href="https://jdovener.github.io/quote-generator" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={quote} alt="Screenshot of Quote app"/>
                </div>
                <p>Creating this app furthered my knowledge of using Math Methods, working with Arrays and experimenting with CSS. This project also uses GitHub Actions for CI.</p>
            </div>
            <br></br>
            <div>
                <h3>6. To-dos App</h3>
                <p>An organisation app created in React.</p>
                <div className="paddedDiv">
                    <a href="https://jdovener.github.io/todo" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={todo} alt="Screenshot of Todo app" />
                </div>
                <p>Through this project I practiced concepts such as: Persisting data in local storage, adding a hamburger menu and using GitHub Actions for Continous Integration.</p>
            </div>
            <br></br>
            <div>
                <h3>7. Starline</h3>
                <p>
                    A video game I am composing the music for, 
                    below are 3 of the currently available tracks.
                </p>
                <TrackList tracks={tracks}/>
                <p>This was a quick exercise in how to embed widgets.</p>
            </div>
        </div> 
        </Layout>
    )
}