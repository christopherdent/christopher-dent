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
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

 


 
 

function Projects() {
  let page = React.createRef();
  const [pills, setPills] = React.useState("2");

 
  

  React.useEffect(() => {
    document.body.classList.add("profile-page");
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

 
          <Container className="projContainer">

              <h3 className="title">Coding Projects</h3>
              <h2>Oh dear. </h2>
               <h3>  My databases got deleted, so most of my live apps are down except those using outside APIs only.</h3>
              <h5>I'm slowly moving all of these over to AWS - and honestly these were boot camp projects so you are not missing much.  I'll try to get some of my newer content up here soon.<br/>  
              But if you'd really like to see my early school projects, you can check out the video walkthroughs for each (if available), or the codebase, using the links below.</h5>
              <br/><br/>
                <h5 className="description">
                  This page showcases my coding projects from Flatiron school (cap) and a few I have completed since graduating (bulb).  I attended Flatiron while working a busy full time job and did all this my spare time.  Now that I am an actual developer, I hope to get these apps back online, upgraded, and grow the library soon.
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
          </Row>

       <TabContent className="gallery" activeTab={"pills" + pills}>

       
            <TabPane tabId="pills2">
                  
         
            <Row className="collections">

                <Col>
                  
                    <Card id='proj'>
                  
                      <CardImg variant="top" src="https://adventuredinosaurs.com/wp-content/uploads/2020/07/raptor-dinosaur-habitat-adventuredinosaurs.jpg" />
                  
                      <a href = "https://www.youtube.com/watch?v=-Cb8YUDdgC4" target="_blank" rel="noreferrer">Video Demo</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/dinofinder-frontend" target="_blank" rel="noreferrer">Code</a>
                     
                      <CardBody>
                  
                           <CardTitle>DinoFinder</CardTitle>
                  
                               <CardText>
                  
                                 My Flatiron Capstone project.  A graphical educational tool designed to teach kids basic internet research skills in a fun way.  Built with React and Redux frontend, Ruby on Rails backend. 
                  
                              </CardText>
                   
                       </CardBody>
                           
                    </Card>
                  
                  </Col>
               
                  <Col>

                    <Card style={{ width: '18rem' }} id='proj'>
                        <CardImg variant="top" src="https://tuality.org/wp-content/uploads/2019/01/volunteer_hero_image_03.jpg" />
                        <a href = "https://www.youtube.com/watch?v=v6ifLuecsmA" target="_blank" rel="noreferrer">Video Demo</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/VolunteerManager" target="_blank" rel="noreferrer">Code</a>
                          <CardBody>
                            <CardTitle>Volunteer Manager</CardTitle>
                            <CardText>
                              Business ready people management app, customizable for a wide range of uses.  Allows creation of groups and volunteer lists, storage of statements of expertise and CVs, and more.  Login with username guest, password guest for a quick demo.
                            </CardText>
                    
                   </CardBody>
                </Card>
              </Col>

                   

                      <Col>
                      <Card style={{ width: '18rem' }} id='proj'>
                        <CardImg variant="top" src="https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/UduwYH6XvJC5VozALe9oNi-320-80.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" />
                        <a href = "https://www.youtube.com/watch?v=H1my0ggLFn4" target="_blank" rel="noreferrer"> Video Demo</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/dent-exoplanet-sinatra" target="blank" rel="noreferrer">Code</a>
                          <CardBody>
                            <CardTitle>Exoplanet Explorer</CardTitle>
                            <CardText> Built with the Ruby DSL Sinatra, this is a simple app for cataloguing new discoveries in astronomy, specifically planets not orbiting our own sun.  Allows for the creation of star systems and orbiting planets, including all known specifics of said planet.  Simple but fun!  Login with username guest, password guest for a quick demo.
                            </CardText>
                    
                   </CardBody>
                </Card>
                </Col>
            
                {/* <Col>
                      <Card style={{ width: '18rem' }} id='proj'>
                        <CardImg variant="top" src="https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/71IVS5%2BCJ1L._AC_SL1001_.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300" />
                        <a href = "https://christopherdent.github.io/battleships-frontend/" target="_blank" rel="noreferrer">Live App</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/battleships-frontend" target="_blank" rel="noreferrer">Code</a>
                  <CardBody>
                     <CardTitle>Battle Ships</CardTitle>
                     <CardText> 
                       Admittedly not my prettiest app, I keep it in the portfolio because the codebase is a good reflection of my understanding of OOJS.  The app was built with nothing but JS classes, CSS and HTML.  Currently working on an updated React version in my spare time.
                    </CardText>
                  </CardBody>
                </Card>
                </Col>                */}
           </Row>
            
            </TabPane>










        <TabPane tabId="pills1">
        <Row className="collections">


        <Col>
                  
                  <Card style={{ width: '18rem' }} id='proj'>
                
                    <CardImg variant="top" src="https://cjdportfolio.s3.amazonaws.com/spidey.png" />
                
                    <a href = "https://christopherdent.github.io/marvel-dent/" target="_blank" rel="noreferrer">Live App</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/marvel-dent" target="_blank" rel="noreferrer">Code</a>
                   
                    <CardBody>
                
                         <CardTitle>Still online!<br />Comic Collector!</CardTitle>
                
                             <CardText>
                              I've been wanting to build an app that uses a public API for a while now and after a trip to a local comic shop a few weeks ago it was clear what API that would be.  Currently frontend only with limited functionality, but I'm too excited about this one to not share it.  Stay tuned for major improvements to what will almost certainly be my best web app yet.  
                            </CardText>
                 
                     </CardBody>
                   
                  </Card>
                
                </Col>


              
              <Col>
                  
                    <Card style={{ width: '18rem' }} id='proj'>
                  
                      <CardImg variant="top" src="https://cjdportfolio.s3.amazonaws.com/get-newsletter.png" />
                  
                      <a href = "https://github.com/christopherdent/newsletterExample" target="_blank" rel="noreferrer">Code</a>
                     
                      <CardBody>
                  
                           <CardTitle>Angular Newsletter</CardTitle>
                  
                               <CardText>

                                The first Angular app I put together, a basic newsletter signup application with a Ruby on Rails backend. 

                              </CardText>
                   
                       </CardBody>
                     
                    </Card>
                  
                  </Col>
           

                  <Col>
                      <Card style={{ width: '18rem' }} id='proj'>
                      
                        <CardImg variant="top" src="https://cjdportfolio.s3.amazonaws.com/Screenshot+from+2021-11-06+15-02-49.png" />
              
                         <a href = "https://github.com/christopherdent/fundraiser-fronted" target="_blank" rel="noreferrer">Code</a>
                
                        <CardBody>
              
                        <CardTitle>Fundraising Widget</CardTitle>
              
                           <CardText>

                            I wanted to learn some jQuery so I did and used it to help build this fundraising widget that increments per click, updating the funds thermometer as well as a backend database.

                          </CardText>
               
                        </CardBody>
               
                        </Card>

                      </Col>

                  <Col>
                     <Card style={{ width: '18rem' }} id='proj'>
                  
                  <CardImg variant="top" src="https://dr5dymrsxhdzh.cloudfront.net/blog/images/ae6058960/2021/10/portfolio-picture-id175431947.jpg" />
              
                  <a href = "https://christopherdent.github.io/christopher-dent-old" target="_blank" rel="noreferrer">Live App</a> <span id='pipe'>|</span> <a href = "https://github.com/christopherdent/christopher-dent-old" target="_blank" rel="noreferrer">Code</a>
                  
                  <CardBody>
              
                       <CardTitle>Portfolio v1</CardTitle>
              
                           <CardText>
                            My original portfolio site.  Same info you'll see here, less interactive.  Just including as an example of how my skills have evolved independently since graduating Flatiron.
                          </CardText>
               
                   </CardBody>
                 
                </Card>

                      </Col>


                   
                      </Row>
                </TabPane>
               
              </TabContent>
         
          </Container>
          </div>
        </>
  );
}

export default Projects;
