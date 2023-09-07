// eslint-disable-next-line no-unused-vars
import React from "react"
import icon from "../assets/world-icon.svg"

export default function Header(){
    return(
        <header>
            <img src={icon}/>
            <h1>my travel journal</h1>
        </header>
    )
}