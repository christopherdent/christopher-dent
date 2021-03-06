import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProjectsList = (props) => {

  return (
    <React.Fragment>
    <Container fluid >
        <h1 className='heading' id='projects'>My Projects</h1>
<br />
<p id='desc'>Check out my portfolio projects from my time at Flatiron School below. <strong>Please be patient while they load.</strong> App back-ends are all hosted on Heroku, which puts apps to sleep when they aren't being used.  For apps that require a login, feel free to make one! Or, use demo account with username guest, password guest.</p>
           <CardDeck>
             {props.listProjects}
            </CardDeck>
            <br/>
            <h4 className='page-title'>+ this React-based website itself <a id='code' href = "http://www.google.com" target="_blank">(code)</a>.  <br/><br/>more coming soon...</h4>
          </Container>
     </React.Fragment>
   )
 }

export default ProjectsList
