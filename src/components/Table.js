import React from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

function TableSection() {

  return (
<Table>
    <tbody>
     <tr>
      <td>Projects</td>
     </tr>
     <tr>
      <td>Blog</td>
     </tr>
     <tr>
      <td>About</td>
     </tr>
     <tr>
      <td> </td>
     </tr>
   </tbody>
 </Table>

  );
}

export default TableSection;
