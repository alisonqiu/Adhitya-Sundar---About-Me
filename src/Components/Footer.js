import React from "react";
import "../Styles/Footer.css";
import {Link} from 'react-router-dom';

function Footer() {

    return(<div className="Footer">
        
        <p> AdhityaSundar@gmail.com </p>

        <Link to= {'cadetlife'} 
                activeClass = "active"
                spy = {true}
                smooth = {true}
                duration = {500}
                >
                cadetlife
                </Link>

                

    </div>)


}

export default Footer;