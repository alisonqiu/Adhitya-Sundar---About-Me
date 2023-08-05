import React from "react";
import "../Styles/Cadetlife.css";
import image4 from "../Images/Tab-2-Ph-4.jpg";
import image2 from "../Images/Tab-2-Ph-2.jpg";
import image3 from "../Images/Tab-2-Ph-3.jpg";
function Cadetlife() {

    return(<div className="cadetlife">

        <h1> CADET LIFE </h1>
        <img id="ph-4" src={image4}></img>
              
              
              
        <p> Living my Cadet life, I apply the Cadet core values in my day to day life including physical fitness and successfully complete several phases of the Cadet program.</p>
        
        <ol className="list">
        <li className="item">Integrity First - This value in me focuses on to do what is right, even when no one is looking.</li>
        <li className="item">Volunteer Service - This value teaches me how to focus on "giving" back to the community</li>
        <li className="item">Excellence - This value in me focus on do my best no matter what challenge I face in any situation</li>
        </ol> 

        <h3> Civil Air Patrol CADET Program Phase-1: The Learning Phase </h3>
        
        <p> In my Phase-1: The Learning Phase program, I focused on several aspects. </p>
        
        <ol className="list">
        <li className="item"> Attitude: Learned the value of positive attitude, how to be optimistic and team oriented</li>
        <li className="item"> Core Values: Follows Cadet core values, wears uniform properly, practices custom and honesty. </li>
        <li className="item"> Communication Skills: Learned how to listen actively and stay attentive </li>
        <li className="item"> Sense of Responsibility: Learned to follow directions, value of service and time management </li>
        </ol>

        <div classname="item">
            <h3 id="middle_text">Civil Air Patrol CADET Program Phase-2: The Leadership Phase </h3>
            <p>In this phase, in addition to Phase-1 activities, I have to focus on my inter-personal skills and guides my junior cadets. I have to live as an example to them and recognize them when they need help.</p>
            <b>Cadet Physical fitness program:</b>
            <p>My Cadet Physical fitness program is aligned with the Presidential Youth Fitness Program (PYFP).  PYPF is a comprehensive fitness program that promotes physical activity and fitness for improving the health of America's young people. It focuses on Activities , Academics, Attitudes, Assessment and Awards.</p>
            <b>My CAP's Model Rocketry program:</b>
            <p>My CAP's Model Rocketry program for cadets focuses on science, technology, and flight of model rockets. I have completed the written and performance requirements for each of the 3 stages of the rocket and got awarded with the Cadet Model Rocketry Badge.</p>
            <h3>CyberPatriot</h3>
            <p>As a Cadet Cyber, part of my STEM passion, I love to indulge in my RVCS Cyber Patriot Team Competitions. CyberPatriot puts teams of Middle and High school students in the position of IT professionals who manages the networks of a company. Through this competitions and trainings, I have learned basic cyber defense skills, problem solving skills, cyber domain history, ciphers and encryptions. In my competitions, me and my team is tasked with finding cybersecurity vulnerabilities within a virtual image operating systems and we enjoy hardening the system while maintaining critical services in the six hour period.</p>
        </div>

        <div className="grid">
                    
                <div className="item">

                    <img className="Ph-2" src = {image2}/>

                </div>

                <div className="item">

                    <img className="Ph-3" src = {image3}/>

                </div>
                    
        

                
                        
        </div>      
                
                
    
     

</div>);      
                






} 

export default Cadetlife;