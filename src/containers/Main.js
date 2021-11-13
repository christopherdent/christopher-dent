/*eslint-disable*/

import React from "react";
import ReactDOM from 'react-dom';
import Carousel from "components/Carousel.js";



// reactstrap components
import { Container } from "reactstrap";

//social component
 

import { SocialIcon } from 'react-social-icons';



function Main() {
   

  

let page = React.createRef();

React.useEffect(() => {
  if (window.innerWidth > 991) {
    const updateScroll = () => {
      let windowScrollTop = window.pageYOffset / 3;
      page.current.style.transform =
        "translate3d(0," + windowScrollTop + "px,0)";
    };
    window.addEventListener("scroll", updateScroll);
    return function cleanup() {
      window.removeEventListener("scroll", updateScroll);
    };
  }
});

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/newsky.jpg").default + ")",
          }}
          ref={page}
        >
          
        </div>
        
        <Container id="mainContain">
          <br />
          <div>
            <h1 className="h1-seo">Christopher James Dent</h1>
          </div>
       
          <Carousel />
        
        
        
    
          </Container>

 
       
       
           {/* </Table> */}
      </div>

    

      
    </>
  );
}

export default Main;
