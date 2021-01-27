import React, { Component } from 'react'
import Header from "./Component/Header/Header"
import BodyOne from "./Component/BodyOne/BodyOne"
import BodyTwo from "./Component/BodyTwo/BodyTwo"
import BodyThree from "./Component/BodyThree/BodyThree"
import Bodyfour from "./Component/Bodyfour/Bodyfour"
import Footer from "./Component/Footer/Footer"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BodyOne/>
        <BodyTwo/>
        <BodyThree/>
        <Bodyfour/>
        <Footer/>
      </div>
    )
  }
}

