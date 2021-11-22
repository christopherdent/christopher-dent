import React, { useState } from 'react';

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

 
 

function Blog() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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



 
          <Container>
          <a href = "https://christopher-dent.medium.com/" target="_blank" rel="noreferrer">
            <h3 className="title">My Blog</h3>
          </a>
          
          <h5 className="description">Writing as I learn more about code.  Click the monkey to read my blog on Medium.</h5>
            <a href = "https://christopher-dent.medium.com/">
          <img src="https://cjdportfolio.s3.amazonaws.com/monkey.gif" />
          
          </a>

          </Container>
          </div>
        </>
  );
}

export default Blog;
