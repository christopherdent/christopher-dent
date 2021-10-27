import React from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

function TableSection() {

  return (
  
<Table>
    <tbody>
     
     <tr>
      <td><a href = "/christopher-dent/projects">Projects  </a></td>
     </tr>
   

     
     <tr>

      <td><a href = "/christopher-dent/blog">Blog</a></td>
     </tr>
  

     
     <tr>
      <td><a href = "/christopher-dent/about">About </a></td>
     </tr>
   

     <tr>
      <td> </td>
     </tr>


   </tbody>
 </Table>
  
  );
}

export default TableSection;
