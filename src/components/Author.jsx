import React from "react";

import Logo from "../components/icons/logoTTU.jpg";


import {Link } from "react-router-dom"
const Author = () => {
  return (
    <div>
      <div style={{ marginTop: "30px", marginLeft: "27%" }}>
        <img src={Logo} style={{ height: "100px", width: "100px" }} />
      </div>

      <div style ={{marginTop:"20px"}} >
        <p style={{marginLeft:"19px", fontSize:"14px", fontFamily:'Sofia' }} >Design by School of Engineering </p>
        <p  style={{marginLeft:"40px", fontSize:"14px", fontFamily:'Sofia',marginTop:"10px" }}> academic year: 2019-2023</p>
        <p style={{marginLeft:"19px", fontSize:"14px", fontFamily:'Sofia', marginTop:"10px" }}>Instructor :<Link   to={{ pathname: 'https://www.dungcao.com/' }}
                  target="_blank"
                  rel="noreferrer"><span style={{textDecoration:"underline",color:"red"}}> Cao Tiến Dũng, PhD </span></Link> </p>
      </div>
    </div>
  );
};

export default Author;

