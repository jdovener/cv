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
            <div>
                <h3>1. Crimble Consulting</h3>
                <p>My first freelance client project. The client needed a simple website built for his consultancy business.</p>
                <div className="paddedDiv">
                    <a href="https://www.crimbleconsulting.co.uk/" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={crimble} alt="Screenshot of Crimble"/>
                </div>
            </div>   
            <div>
                <h3>2. Gym progress tracker</h3>
                <p>An app that will track strength training progression and compare with previous weeks. Work in progress.</p>
                <div className="paddedDiv">
                    <img src={gym} alt="Screenshot of Gym Tracker"/>
                </div>
            </div>
            <div>
                <h3>3. Quote Generator</h3>
                <p>An app that randomly selects from an amalgamation of my favourite quotes.</p>
                <div className="paddedDiv">
                    <a href="https://jdovener.github.io/quote-generator" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={quote} alt="Screenshot of Quote app"/>
                </div>
            </div>
            <div>
                <h3>4. To-dos App</h3>
                <p>An organisation app created in React.</p>
                <div className="paddedDiv">
                    <a href="https://jdovener.github.io/todo" target="_blank" rel="noreferrer">Click here to view live page</a>
                </div>
                <div className="paddedDiv">
                    <img src={todo} alt="Screenshot of Todo app" />
                </div>
            </div>
            <div>
                <h3>5. Starline</h3>
                <p>
                    A video game I am composing the music for, 
                    below are 3 of the currently available tracks.
                </p>
                <TrackList tracks={tracks}/>
            </div>
        </div> 
        </Layout>
    )
}