import React from 'react';
import logo from '../images/react.png'
export const Header=()=>{
  return(
    <div className="hed" >
        <img src={logo} className="hed_img"/>
        <span className="hed_dis">ContactOPedia</span>
    </div>
  )
}