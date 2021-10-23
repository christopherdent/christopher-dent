import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
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
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              CHRISTOPHER DENT
            </NavbarBrand>
  
          </div>
      
            <Nav navbar>
     
              <NavItem>
              <NavLink href="/">
                  <p>Projects</p>
                </NavLink> 
              
              </NavItem>
              
              <NavItem>
                <NavLink href="/">
                  <p>About</p>
                </NavLink>
              </NavItem>
          
              <NavItem>
                <NavLink href="/">
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
