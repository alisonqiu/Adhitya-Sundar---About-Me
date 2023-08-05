import React from "react";
import '../Styles/Navbar.css'; 
import {Link} from 'react-router-dom';

    function Navbar() {

        return(<div className="navbar">
            <div className="links">


                <Link to='/home'>
                    Home
                </Link>
                <Link to= '/cadetlife'>
                Cadetlife
                </Link>
                <Link to= '/skillset'>
                    Skillset
                </Link>
                <Link to= '/ftc'>
                    FTC
                </Link>
                <Link to= '/volunteering'>
                    Volunteering
                </Link>
                <Link to= '/achievements'>
                    Achievements
                </Link>
                
             








            </div>

        </div>)

    }

    export default Navbar;