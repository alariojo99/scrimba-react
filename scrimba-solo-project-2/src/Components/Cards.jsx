/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import pin from "../assets/pin-location.svg"

export default function Card(props){
    return(
        <section className="card">

            <img className="place--img" src={props.imageUrl}/>

            <div className="card--info">
                <div className="card--location">
                    <img id="pin" src={pin}/>
                    <span id="location">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p id="dates">{props.startDate} - {props.endDate}</p>
                <p id="description">{props.description}</p>
            </div>

        </section>
    )
}