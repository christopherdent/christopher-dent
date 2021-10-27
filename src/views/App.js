
import React from "react";
import ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "containers/Main.js";
import Projects from "containers/Projects.js";
import About from "containers/About.js";
import Blog from "containers/Blog.js";
import DarkFooter from "components/Footers/DarkFooter.js";




function App() {
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
  return (
   
<Router basename='{process.env.PUBLIC_URL}'>
  <IndexNavbar />
   <div className="wrapper">     
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/index" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
    </Switch>
   </div>
  <DarkFooter />
</Router>
  
  );
}

export default App;