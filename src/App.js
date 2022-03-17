


import React from "react";
import "./style.css";

import { Fragment } from "react";
import cc from "./assets/cc.jpg" ;

function App () {
  return (
    <Fragment>
<div style={{border:'1px solid black',maxWidth:'100vw'}}>

<h1 class="titleRed">Your name here !</h1>

<br/>

<img src={cc} alt="img" />



<img src="aa.jpg" />
<br/>
<iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/Gwg_KYNgu6Y" 
title="YouTube video player" frameborder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
 allowfullscreen></iframe>

</div>
</Fragment>

);
}
export default App;
