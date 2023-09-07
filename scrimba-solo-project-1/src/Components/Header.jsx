
import profilePicture from "../assets/profile-pic.jpg"

export default function Header(){
    return (
    <header>
        <img src={profilePicture} alt="profile picture"/>
        <div className="personal-info">
            <h1>Alejandro Lario</h1>
            <h2>Frontend Developer</h2>
            <a href="#">alejandrolario.website</a>
        </div>
        <div className="header-btns">
            <input type="button" value="Email"></input>
            <input type="button" value="LinkedIn"></input>
        </div>
    </header>
    )
}