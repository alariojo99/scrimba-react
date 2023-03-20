import React from "react"
import logo from "../assets/glove.svg"

export default function Header(){
    return(
        <nav className="header">
            <img src={logo} className="header--logo"/>
            <h1 className="header--title">my travel journal</h1>
        </nav>
    )
        
}