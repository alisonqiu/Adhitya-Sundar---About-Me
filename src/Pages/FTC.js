import React from "react";
import "../Styles/FTC.css";
import {Link} from 'react-router-dom';
import AIHand from "../Images/A.I_Hand.jpg";

function FTC() {

    return(<div className="ftc">
        <div className="info">
            <h1> First Tech Challenge (FTC) </h1>
                <div className="grid">
                    
                    <div className="item">

                        <img className="robot_hand" src = {AIHand}/>

                    </div>
                    

                    <div className="item">

                        <p> First Tech Challenge (FTC) is a robotics community that prepares young minds for the robotics programs and various levels of competition. Honestly, it is more than robotics as it teaches me the importance of STEM, leadership, team work, problem solving and innovation skills.</p>

                    </div>
                        

                        

                </div>      
                
            
                <div className="grid">
                    <p id="item_two"> Since middle school, I have founded my robotics team Botz N' Bolts (FTC team #14975). Currently, I serve as a team captain who takes individual responsibility to guide my teammates in the realm of STEM and conduct outreach programs to educate the community in STEM. Feel free to see my team photos and accomplishments below.</p>

                </div>
                
            </div>
        
    </div>);        

} 

export default FTC;