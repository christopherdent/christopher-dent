import React, { useState } from 'react';
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function IndexNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);



  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>

      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
               
              id="navbar-brand"
            >
             <h4> CJD </h4> 
            </NavbarBrand>
  
          </div>
           
            <Nav navbar>
            
              <NavItem>
              <NavLink href="/christopher-dent/projects">
                  <p>Projects</p>
                </NavLink> 
              
              </NavItem>
              
              <NavItem>
                <NavLink href="/christopher-dent/about">
                  <p>About</p>
                </NavLink>
              </NavItem>
          
              <NavItem>
                <NavLink href="/christopher-dent/blog">
                  <p>Blog</p>
                </NavLink>
              </NavItem>
              
            </Nav>
       
        </Container>
        <br/>
      
      </Navbar>
  
    </>
  );
}

export default IndexNavbar;
