import React from "react"

export default function Journal(props){

    return(
        <div className="journal">
            <img src={props.imageUrl} alt="imagen" />
            <div className="journal--info">
                <div className="journal--ubication">
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="journal--title">{props.title}</h1>
                <div className="journal--dates">
                    <p>{props.startDate} - {props.endDate}</p>
                </div>
                <p className="journal--description">{props.description}</p>
            </div>
        </div>
    )
}