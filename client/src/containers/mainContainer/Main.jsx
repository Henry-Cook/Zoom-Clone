import React from 'react'
import { Route } from "react-router-dom";
import Home from '../../screens/Home/Home';
import Video from "../../screens/video/Video"
import "./main.css"

export default function Main() {
  return (
    <div className="main-div">
      
      <Route path="/" exact>
          <Home />
      </Route>
        
      <Route path="/call/:id" exact>
        <Video/>
      </Route>


    </div>
  )
}
