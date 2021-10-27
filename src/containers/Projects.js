import React from "react";

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
  UncontrolledTooltip,
} from "reactstrap";

// core components

 
 

function Projects() {
  let page = React.createRef();
  const [pills, setPills] = React.useState("2");


  
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


  

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
      
            <h3 className="title">Coding Projects</h3>
            <h5 className="description">
              This page showcases my coding projects from Flatiron school and a few I have completed since graduating.  I attended Flatiron while working a busy full time job and continue to do all of this in my spare time.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>

                    <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                     
                       
                        <i><span className="material-icons">school</span></i>
                        

                      </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="material-icons">lightbulb</i>
                      </NavLink>
                    </NavItem>
             
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>


                <TabPane tabId="pills2">

                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      <p>Dinofinder 2020</p>
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://adventuredinosaurs.com/wp-content/uploads/2020/07/raptor-dinosaur-habitat-adventuredinosaurs.jpg"
                        
                        ></img>
                        <p>Association Volunteer Manager</p>
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://img1.wsimg.com/isteam/stock/7903/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
                        ></img>
                        
                      </Col>
                      <Col md="6">
                      <p>Exoplanet Explorer</p>
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/UduwYH6XvJC5VozALe9oNi-320-80.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
                        ></img>
                        <p>Battle, Ships!</p>
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/71IVS5%2BCJ1L._AC_SL1001_.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
                        ></img>
                        
                      </Col>
                    </Row>
                  </Col>
                </TabPane>










                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://cjdportfolio.s3.amazonaws.com/get-newsletter.png"
                        ></img>
                     
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src="https://cjdportfolio.s3.amazonaws.com/Screenshot+from+2021-10-03+23-14-19.png"
                        ></img>
                 
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
          </div>
        </>
  );
}

export default Projects;
