import React from "react";
import './blog.css';
import ih from './img/ih1.PNG';
import dr from './img/htm1.PNG';
import me from './img/htmp1.PNG';
import tec from './img/tecdo.PNG'




export default function Blog(){
    return(
        <>
        <div id="blog" className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="dis">
                        <div className="eff">
                            <img src={ih} alt="Not Loaded"/>
                            <div className="overlay">
                                <a href="https://blog-indian-heritage.netlify.app/" rel="noreferrer" target={"_blank"}><button className="btn btn-light">Open Blog</button></a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title">
                                <h3>Indian Hertiage</h3>
                            </div>
                            <div className="text">
                            This blog is on Indian Hertiage which shows the religious culture,festival,cuisine and clothing
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="dis">
                        <div className="eff">
                            <img src={dr} alt="Not Loaded"/>
                            <div className="overlay">
                                <a href="https://blog-tribute.netlify.app/" rel="noreferrer" target={"_blank"}><button className="btn btn-light">Open Blog</button></a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title">
                                <h3>Dr.Norman Borlaug</h3>
                            </div>
                            <div className="text">
                            Dr.Norman Borlaug was often called "the father of the Green Revolution",saving over a billion people worldwide from starvation.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="dis">
                        <div className="eff">
                            <img src={tec} alt="Not Loaded"/>
                            <div className="overlay">
                                <a href="https://blog-technical-doc.netlify.app/" rel="noreferrer" target={"_blank"}><button className="btn btn-light">Open Blog</button></a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title">
                                <h3>C++</h3>
                            </div>
                            <div className="text">
                            C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="dis">
                        <div className="eff">
                            <img src={me} alt="Not Loaded"/>
                            <div className="overlay">
                                <a href="https://blog-aboutme.netlify.app/" rel="noreferrer" target={"_blank"}><button className="btn btn-light">Open Blog</button></a>
                            </div>
                        </div>
                        <div className="body">
                            <div className="title">
                                <h3>5 Topics about me</h3>
                            </div>
                            <div className="text">
                            Sharing about my hobbies, My Current classes, If I could travel anywhere, Favorite movies or TV shows and My Favorite Food
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}