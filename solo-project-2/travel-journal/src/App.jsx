import React from "react";
import Header from "./components/Header"
import Journal from "./components/Journal"
import data from "./data"

import "./App.css"

export default function App(){

  const journals = data.map((journal) => {
    return (
      <Journal 
       {...journal}
    />
    )
  })



  return(
    <div className="App">
      <Header />
      {journals}
    </div>
  )
}