
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
    <>
  <IndexNavbar />
   <div className="wrapper">     
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/index" render={(props) => <Main {...props} />} />
            <Route path="/projects" render={(props) => <Projects {...props} />} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/blog" render={(props) => <Blog {...props} />} />
            <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
      </Switch>
    </BrowserRouter>
   <DarkFooter />
  </div>
 </>
  );
}

export default App;