import React from "react";
import './about.css';
import img from './img/mywebpage.jpg'
//import {$} from 'jquery'



export default function About(){


    
    return(
        <>
        <div id="abt" className="container">
            <div className="left">
                <img src={img} alt="no" />
            </div>
            <div className="right">
                <h3>Dhinesh Nachimuthu</h3>
                <div>Full Stack Developer</div>
                <p>The appetite for learning has bought me from Automobile Engineering to Full Stack Developer at UniKaksha. Over this course of period I have equipped my self with various skills and looking to learn more. I see myself as a person who not only learn skills but also one who is able to apply those skills and still learning to do it in a better way.</p>
                <p>To know more about me see my blog <span><a href="https://blog-aboutme.netlify.app/" target={"_blank"} rel="noreferrer" id="bl" >5 topic about me</a></span> </p>
            </div>
            <div id="center" >
            <div className="data">
                <div><i className="fa-sharp fa-regular fa-calendar-days"></i>DOB: 16/03/2000</div>
                <div><i className="fa-solid fa-user-graduate"></i>Graduation: B.E AUTOMOBILE ENGINEERING</div>
                <div><i className="fa-solid fa-phone"></i>Phone: 9626050269</div>
                <div><i className="fa-solid fa-envelope"></i>E-mail: dhinesh.natchimuthu@gmail.com</div>
            </div>
            </div>

        </div>
        </>
    )
}