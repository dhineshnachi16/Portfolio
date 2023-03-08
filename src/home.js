import React from "react";
import './home.css'
import Quote1 from './img/Dhinesh N.png'
import Wel from './img/wel.jpg'
import FD from './img/Full-Stack-Developer.jpg'
import Qu1 from './img/Carl-Sagan.webp'
import VK from './img/VK.jpg'
import Jd from './img/JordanPeterson.jpg'


export default function Home(){


    return(
        <>
        <div id="top" className="container w-100">
            <div className="carousel slide" data-bs-ride="carousel" id="h1">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2500">
                        <img className="w-100" src={Wel} alt="No1"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img className="w-100" src={Quote1} alt="No2"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2500">
                        <img className="w-100" src={FD} alt="No3"/>    
                    </div>
                </div>
                <a href="#h1" className="carousel-control-prev" data-bs-slide="prev">
                    <span className="bi bi-caret-left-fill"></span>
                </a>
                <a href="#h1" className="carousel-control-next" data-bs-slide="next">
                    <span className="bi bi-caret-right-fill"></span>
                </a>
            </div>
        </div>
        <div id="main" className="container p-2">
            <div id="box1" className="row p-2 my-2">
                <img src={Qu1} alt="No" className="col-3"/>
                <div id="quot1" className="container col-6">
                    <p><em><q>Somewhere, something incredible is waiting to be known</q></em> - You'll never know unless you go after it.</p>
                    <h2 className="text-end">-Carl Sagan</h2>
                </div>
                <div className="col-1"></div>
            </div>
            <div id="box2" className="row p-2 my-2">
                <div className="col-2"></div>
                <div id="quot2" className="container col-6">
                <p><em><q>You have to stay fresh and blank in your mind when you go out to bat. You complicate things, and you are gone</q></em></p>
                <h2 className="text-end">-Virat Kohli</h2>
                </div>
                <img src={VK} alt="No" className="col-3"/>
            </div>
            <div id="box3" className="row p-2 my-2">
                <img src={Jd} alt="No" className="col-4"/>
                <div id="quot3" className="container col-6">
                    <p><em><q>Compare yourself to who you were yesterday, not to who someone else is today</q></em></p>
                    <h2 className="text-end">-Jordan Peterson</h2>
                </div>
                <div className="col-2"></div>
            </div>
        </div>    
        </>
    )
}
