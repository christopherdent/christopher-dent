
import React from "react";
import ReactDOM from 'react-dom';
 
// reactstrap components
import { Container } from "reactstrap";

//social component
 import { SocialIcon } from 'react-social-icons';



function Social() {
return (
<div id="social">

        
    <SocialIcon url="https://www.linkedin.com/in/christopher-james-dent/" />
    
    <SocialIcon url="https://github.com/christopherdent" bgColor='#7DF9FF'/>

    <SocialIcon url="https://www.youtube.com/channel/UCZBxvf3wO37Ymx-mO8tPwLQ/videos" />   

    <SocialIcon url="mailto: christopherdent01@gmail.com" bgColor='#f0f0d6' />

    <SocialIcon url="https://twitter.com/christopjdent" />


</div>
    
    )
}

export default Social 