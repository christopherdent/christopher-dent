/*eslint-disable*/
import React from "react";
import Social from "components/Social.js";
// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
         <div>
           <Social />
           <center>
          © {new Date().getFullYear()} | {" Christopher Dent "}
           </center>  
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
