import React from "react";
import '../Styles/Navbar.css'; 
import {Link} from 'react-scroll';

    function Navbar() {

        return(<div className="navbar">
            <div className="links">


                <Link to='/home'>
                    Home
                </Link>
                <Link to= {'cadetlife'} 
                activeClass = "active"
                spy = {true}
                smooth = {true}
                duration = {500}
                >
                cadetlife
                </Link>
                
             








            </div>

        </div>)

    }

    export default Navbar;