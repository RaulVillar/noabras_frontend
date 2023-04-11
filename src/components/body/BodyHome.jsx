import React from 'react'
import background from "../../assets/fondo.jpg"
import "./BodyHome.css"

function BodyHome() {
  return (
    <div>
      <img src={background} className= "BgImage" alt="imagen" />
    </div>
  )
}

export default BodyHome