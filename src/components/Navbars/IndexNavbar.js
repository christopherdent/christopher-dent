import React, { useState } from 'react';

// reactstrap components
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function IndexNavbar() {
  const [collapsed, setCollapsed] = useState(true);

  // const toggleNavbar = () => setCollapsed(!collapsed);



  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 109 ||
        document.body.scrollTop > 109
      ) {
        setNavbarColor("");
        
      } else if (
        document.documentElement.scrollTop < 110 ||
        document.body.scrollTop < 110
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
              href="/christopher-dent"
               
              id="navbar-brand"
            >
             <h4> CJD </h4> 
            </NavbarBrand>
  
          </div>
           
            <Nav>
            
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
