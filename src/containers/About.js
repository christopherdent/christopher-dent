/*eslint-disable*/

import React, { useState } from 'react';

// reactstrap components
import { Button, Container, Card, CardBody, Media, Collapse, Col, Row } from "reactstrap";

function About() {

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
       <h3 className="title">About Me</h3>
       </Container>


      <Collapse isOpen={!isOpen}>

      <Container className = "aboutContainer" >
  
       <Row>
         <Col className = "lg-4 d-flex align-items-stretch">
      <Card id='leftAbout'>
       <CardBody>
         <h4 className="card-subtitle mb-2 text-muted">My Skills</h4>
         <p className="card-text">Flatiron taught me Ruby, Sinatra, Ruby on Rails, and JavaScript (including React/Redux). My job has led to me becoming proficient in Typescript and VueJS as well.  Comfortable with SQL databases including PostgreSQL and MySQL. More recently taught myself Angular. Familiar with but still learning C++, Java and various other technologies. Continuous learning is what I love about code. I do this in my spare time and only wish I had more time to devote to it! I have strong organizational skills and international experience across a range of industries. Certified Project Manager (PMI, PRINCE2) and Change Manager (Prosci).</p>
        </CardBody>
      </Card>
     </Col>

     <Col className = "lg-4 d-flex align-items-stretch">
      <Card id='middleAbout'>
        <CardBody>
        <h4 className="card-subtitle mb-2 text-muted">My Experience</h4>
        <p className="card-text">I graduated from McGill University in Canada with a double major in political science and history. I've been working in various project management roles pretty much ever since - mostly at a DC-based nonprofit analytical standards development association, but with a brief stint in the UK where I worked for the City of Edinburgh Council as an IT Project Manager. I've got approximately 12 years project management experiece, all the while learning code in my spare time.</p>  
      </CardBody>
    </Card>
  </Col>


  <Col className = "lg-4 d-flex align-items-stretch">
    <Card id='rightAbout'>
      <CardBody>
    
          <h4 className="card-subtitle mb-2 text-muted">My Goals</h4>
          <p className="card-text">Since I was young, I've always been fascinated by code and tech in general. 
            I am looking for any and all opportunities to put my coding skills to good use, 
            ideally leveraging my extensive project management and/or association management experience. 
            I'm fascinated with the concept of creating amazing programs from nothing but a text editor and really glad to have made this career change.
              Have a project you're like to talk about? Drop me line using one of the social contacts below.
          </p>
   
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</Collapse>

            <center>
            <Button color="primary" 
            onClick={toggle} 
            style={{ marginBottom: '1rem' }}> 
            
            {isOpen === false ? "or, the life story" : "i liked the short version"}
            
            </Button>
            </center>
    <br />
    <br />
    <br />
    <br />
              


    <Collapse isOpen={isOpen}>

      <Container style={{ backgroundColor: 'navy' }}>

          <Media>
   
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/asperida.jpg" alt="Generic placeholder image" id="about-img" />
                <div class="media-body">
                 <p><br/><br/><br/>
                    Born to an American mother and a British father, I grew up with influences from both sides of the Atlantic.  As a baby, I sailed around the islands with my parents on our boat Asperida, which was also our home for many years.  I grew up around boats and the ocean, and have always loved the sea, and the natural world in general – something you’ll probably notice throughout my collection of apps.                   
                </p>
              </div>
            </Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/asperida.jpg" alt="Generic placeholder image" id="about-img" id="mobile"/>
            <br/><br/><br/>
            <Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/house.jpg" alt="Generic placeholder image" id="about-img" />
                <div class="media-body">
                 <p>
            Eventually, my family moved from the sea to the land and built a house in the woods in Sag Harbor, NY on the eastern tip of Long Island.  It was during these years that I first gained a passion for tech.  We didn’t have a lot, but an aunt donated her old computer to me -  a Gateway I think, with a 386 processor.  486 was all the rage by then, but I took what I could get.  It was painfully slow with only 4MB of RAM so I saved all summer to upgrade it to 8MB, in doing so teaching myself how to take a computer apart and put it back together again.  Then I set my sights on software – using as many free AOL trials as possible, I learned all I could about the internet at that time.  I printed out several hundred pages of an HTML guide ad started building websites – websites for school, websites for my favorite shows and movies, websites for everything I could imagine.  I used these skills to volunteer at the local hospital and help them build some rudimentary sites too, something pretty new in the mid-90’s.  Moving on from HTML I started teaching myself some more advanced programming like C++.  The height of all this was a pretty complex text-based video game starring some of my friends from school.  I was absolutely in love with tech and everyone fully expected me to go on to college and major in computer science or something similar.
                </p>
            </div>
            </Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/house.jpg" alt="Generic placeholder image" id="about-img" id="mobile"/>
            <br/><br/><br/>
            <Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/castle.jpg" alt="Generic placeholder image" id="about-img" />
                <div class="media-body">

                     <p>  
                     But I also wanted adventure, at any cost.  So, at 17 years old, I left Sag Harbor – and my tech hobby - to study abroad at an actual castle in Herstmonceux, England as part of McGill University’s freshman year abroad program.  McGill offered everything I wanted – a reputable school, a solid education, and a chance to live in not just one foriegn country but two.  The only thing was, the study abroad program that I wanted so badly to attend was part of the BA program.  There were absolutely no BS courses taught at the Herstmonceux campus.  At that age, my desire for adventure far outweighed practicality, and I enrolled in the BA program.  When I got to the main campus in Montreal the next year, after a full year of gathering arts credits and developing a genuine interest in history and politics, I declared for a double major in just that and left tech behind.  
                     </p>
                     </div>
            </Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/castle.jpg" alt="Generic placeholder image" id="about-img" id="mobile"/>
            <br/><br/><br/>
            <Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg" alt="Generic placeholder image" id="about-img" />
                <div class="media-body">
                <br/><br/>
                     <p>
                     Fast forward to 2018.  By then, I’d moved to Washington, DC where I began supporting technical projects for awesome scientific association.  After a few years of that I took a moved back to the UK (Scotland this time) where I got to work at the Royal Bank of Scotland and the Edinburgh Council, gaining valuable skills and certifications in project management working for the Royal Bank of Scotland and then the City of Edinburgh.  Three years later I moved back to DC again and finally here, to historic Saint Augustine, Florida and got married to the love of my life, Angelica.  Today I work remotely for that same DC based scientific association, now running programs and gaining more skills in project and association management.  I’ve done well and had some great adventures.  But they’re not over yet.  
                     </p>
                     </div>
            </Media>
            <img class="align-self-center mr-3"  src="https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg" alt="Generic placeholder image" id="about-img" id="mobile"/>
            <br/><br/><br/>
                     <Media>
            <img class="align-self-center mr-3"  src="https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g" alt="Generic placeholder image" id="about-img" />
                <div class="media-body">

                <br/>
                     <p> 
                     I like to be challenged and I love to learn.  When it comes down to it, I’m a planner who likes to keep things organized.  Moving away from tech was one of the few regrets I had in life.  So, a couple years ago, I planned to get myself back into tech, my old passion and lifelong interest.  That’s when I enrolled in Flatiron School’s Self-Paced Online Software Engineering school and graduated in December 2020 with a boatload of new skills under my belt, skills I want to use to keep this adventure going and take my career to a new level.  So, welcome to my portfolio site.  Here you’ll find my final projects from Flatiron as well as some smaller projects I’ve completed since graduation using new skills I taught myself since then.  Because I love to learn, and learning to code professionally has taught me that there is always something new to learn.  
                    </p>
                    </div>
            </Media>
            <img class="align-self-center mr-3"  src="https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g" alt="Generic placeholder image" id="about-img" id="mobile"/>
            </Container>
        
          </Collapse>
    
    
        

      </div>

    

      
    </>
  );
}

export default About;
