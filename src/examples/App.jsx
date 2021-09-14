import React from "react";
import { useState, Fragment } from "react"

//Lib
import { Modal } from "../lib";

//Style
import "./App.css";


function App () {
  const [active, setActive] = useState(false)

  const close = () => {
    setActive(!active)
  }

  return (
    <Fragment>
      <div className = "container">
        <h1>React Modal</h1>
        <button onClick = {() => setActive(true)}>Save</button>
        <Modal
          open = {active}
          content = "React modal is open !"
          close = {close}
        />
      </div>
    </Fragment>

  )
}
 
export default App;