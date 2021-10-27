
import React from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "containers/Main.js";
import Projects from "containers/Projects.js";
import About from "containers/About.js";
import Blog from "containers/Blog.js";
import DarkFooter from "components/Footers/DarkFooter.js";




class App extends React.Component {
  // React.useEffect(() => {
  //   document.body.classList.add("index-page");
  //   document.body.classList.add("sidebar-collapse");
  //   document.documentElement.classList.remove("nav-open");
  //   window.scrollTo(0, 0);
  //   document.body.scrollTop = 0;
  //   return function cleanup() {
  //     document.body.classList.remove("index-page");
  //     document.body.classList.remove("sidebar-collapse");
  //   };
  // });

  render() {
  return (
   
<Router basename='{process.env.PUBLIC_URL}'>
<IndexNavbar />  

   <div className="wrapper">
      
        <Switch>

            <Route exact path="/christopher-dent" component={Main} />
            <Route exact path="/index" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
      
          </Switch>
        </div>
      <DarkFooter />
    </Router>
  
    );
  }
}

export default App;