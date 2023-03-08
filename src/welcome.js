import React from "react";
import { Route,Routes,HashRouter,Link } from 'react-router-dom';
import About from "./about";
import './welcome.css'
import Home from "./home";
import MyWork from "./mywork";
import Blog from "./blog";


export default function Welcome(){
    return(
    <>
    <HashRouter>
    
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <a href={<Link to="home"></Link>} className="navbar-brand"><i className="fa-solid fa-d"></i>hinesh <i className="fa-solid fa-n"></i>achimuthu</a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-collapse">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link text-light p-3" to="home">Home</Link>   
                        <Link className="nav-link text-light p-3" to="about">About</Link>              
                        <Link className="nav-link text-light p-3" to="mywork">My Work</Link>
                        <Link className="nav-link text-light p-3" to="blog">Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/mywork' element={<MyWork/>}></Route>
            <Route path='/blog' element={<Blog/>}></Route>

        </Routes>
        </div>
    </HashRouter>
        
        <footer>
        <hr className="text-light"></hr>
        <div className="ftr-name"><p><i className="fa-solid fa-d"></i>hinesh</p> <p><i className="fa-solid fa-n"></i>achimuthu</p>
        <div id="con" className="text-center">Contact me: 
        <div><span className="mx-2"><i className="fa-solid fa-phone"></i></span>Phone: 9626050269</div>
        <div><span className="mx-2"><i className="fa-solid fa-envelope"></i></span>E-mail: dhinesh.natchimuthu@gmail.com</div>
        </div>
        </div>
        <div className="social-med text-center">
            <a href="https://www.facebook.com/" target={"_blank"} id="fk" rel="noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
            <a href="https://www.instagram.com/" target={"_blank"} id="ist" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://twitter.com/" target={"_blank"} id="tw" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.youtube.com/" target={"_blank"} id="yt" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/dhinesh-nachimuthu-4b5693164" target={"_blank"} id="lin" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.linkedin.com/in/dhinesh-nachimuthu-4b5693164" target={"_blank"} id="ist" rel="noreferrer"><i className="fa-brands fa-github"></i></a>

        </div>
        <p className="text-center my-2">&copy; Copyright. Dhinesh Nachimuthu. All Rights Reserved</p>
        </footer>
    </>
    )
}
