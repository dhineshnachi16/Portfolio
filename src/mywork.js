import React from "react";
import './mywork.css'
import SA1 from './img/sass1.PNG'
import RE1 from './img/res1.PNG'
import TD1 from './img/todo1.PNG'
import F1 from './img/form1.PNG'
import RQ1 from './img/Rq1.PNG'




export default function MyWork(){
    return(
        <>
        <div id="work" className="container">
                <h2 className="text-center">Collection of myworks</h2>
                
                <br/>

                <div className="row">
                    <div className="col-lg-4">
                    <h3 className="text-center">Restaurant Template</h3>
                        <div className="disp">
                            <div className="effect">
                                    <img src={SA1} alt="No "/>
                                <div className="overlay_work">
                                    <p>
                                        Built with the help of SASS
                                    </p>
                                    <a href="https://restaurant-template-sass.netlify.app/" target={"_blank"} rel="noreferrer"><button className="btn btn-light">Open The Website</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                                       
                    <div className="col-lg-4">
                    <h3 className="text-center">Quiz</h3>
                        <div className="disp">
                            <div className="effect">
                                <img src={RQ1} alt="No"/>
                                <div className="overlay_work">
                                    <p>
                                        Built with the help of React
                                    </p>
                                    <a href="https://react-cricket-quiz-example.netlify.app/" target={"_blank"} rel="noreferrer"><button className="btn btn-light">Open The Website</button></a>
                                </div>
                            </div>
                        </div>                       
                    </div>
                    <div className="col-lg-4">
                    <h3 className="text-center">To-do List</h3>
                        <div className="disp">
                            <div className="effect">
                                <img src={TD1} alt="No "/>
                                <div className="overlay_work">
                                    <p>
                                        Built with the help of HTML,CSS,JQuery
                                    </p>
                                    <a href="https://jq-todo-list-template.netlify.app/" target={"_blank"} rel="noreferrer"><button className="btn btn-light">Open The Website</button></a>
                                </div>
                            </div>
                        </div>                       
                    </div>
                    
                </div>

                <br/>

                <div className="row">
                
                    <div className="col-lg-4">
                            <h3 className="text-center">Form_Validation</h3>
                        <div className="disp">
                            <div className="effect">
                                    <img src={F1} alt="No "/>
                                <div className="overlay_work">
                                    <p>
                                        Built with the help of HTML,CSS,JS
                                    </p>
                                    <a href="https://form-valid-project.netlify.app/" target={"_blank"} rel="noreferrer"><button className="btn btn-light">Open The Website</button></a>
                                </div>
                            </div>
                        </div> 
                        
                    </div>
                    <div className="col-lg-4">
                    
                    <h3 className="text-center">Resume</h3>
                        <div className="disp">
                            <div className="effect">
                                        <img src={RE1} alt="No "/>
                                <div className="overlay_work">
                                    <p>
                                        Built with the help of HTML,Bootstrap,CSS
                                    </p>
                                    <a href="https://dn-resume-bs.netlify.app/" target={"_blank"} rel="noreferrer"><button className="btn btn-light">Open The Website</button></a>
                                </div>
                            </div>
                        </div>                        
                    </div>                
                    
                </div>   

                <br/>              
            </div>
        </>
    )
}