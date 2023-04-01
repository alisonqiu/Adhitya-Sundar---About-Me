import React from 'react';
import '../Styles/Home.css';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom';
import Cadetlife from './Cadetlife';
import Typed from 'react-typed';
function Home() {

    return( <div className="home">  
    <div className="about">

        <h1> <Typed
            strings={["HI THERE! I’M ADHITYA","I'm a growing and passionate CSS student","I am interested in software development and enjoying creating websites"]}
            typeSpeed = {30}
            backSpeed = {50}
            loop
        />
        </h1>

        <h2> Come Explore my Website </h2> 

        <p> Thanks for visiting my site! Feel free to explore my site to learn more about me, my background, and what I have to offer. If you have any questions or would like to discuss an opportunity for us to work together, please feel free to get in touch with each other </p>

        <h1> WHO I AM </h1>
        <p> I am a Middle schooler from Basking Ridge, New Jersey. I am an enthusiastic, young engineer, artist and a future entrepreneur. I love spending time in solving complex math problems, playing the online chess games, creating wonderful works of art, and guiding my robotics team as a team captain. </p>
    
    <div className="prompt">
        <Link to = "/footer">  <ForwardToInboxIcon/> </Link>
        <YouTubeIcon/>
        </div>
    </div>    
        

        <div className="skills">
        <h1> SKILLSET </h1>
        <ul className="list">
            <li className="item"> <h2>Programming</h2> <span>PROGRAMMING IN JAVA, HTML, CSS, JAVASCRIPT, SPRINGBOOT, AND SQL</span></li>
            <li className="item"> <h2>Robotics</h2> <span>DESIGNING AND BUILDING INNOVATIVE ROBOTS</span></li>
            <li className="item"> <h2>Youtube</h2> <span>CREATING YOUTUBE EDUCATIONAL VIDEOS</span></li>
            <li className="item"> <h2>Tutoring</h2> <span>TUTORING AND MENTORING KIDS FOR SCHOOL AND STEM ACTIVITIES</span></li>
            </ul>
        </div>
        
            <Cadetlife/>

        </div>);



}



export default Home;
