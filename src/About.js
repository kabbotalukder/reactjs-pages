import React from "react";
import DevCard from './DevCard';
import './About.css';
import './global.css';

const About = () => {
    return(
        <div className ='DevCard-container pad-25-t'>
            <a className="no-link" target='_blank' href="http://facebook.com/kabbotalukderr"><DevCard /></a>
        </div>
        
    );
}

export default About;