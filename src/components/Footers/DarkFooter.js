/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
         <div>
           <center>
          © {new Date().getFullYear()} | {" Christopher Dent "}
           </center>  
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
