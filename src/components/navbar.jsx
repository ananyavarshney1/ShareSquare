import React from "react";
import login from '../assets/user.png'
import './navbar.css'
import { Link,NavLink } from "react-router-dom"
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="part1">
                    <div className="logo"><img src="#" alt="" />   </div>
                    <div className="name "><h2>ShareSquare</h2></div>
                </div>
                <div className="part2">
                    <div className="login"><img src="src\assets\login.png" alt="" className="logoimg" /> Login</div>
                    <div className="seperator"><img src="src\assets\icons8-vertical-line-32.png" alt="" /></div>
                    <div className="signup"><img src="src\assets\add-user.png" alt="" className="logoimg" />Sign Up</div>
                </div>
            </div>
            <div className="navbar1">
                <div className="home1">
                    <NavLink to="/home"><div className="home">Home</div></NavLink>
                    <div className="home">Post your Property</div>
                    <div className="home"> About Us</div>
                </div>
                <div className="profilemain">
                    <div className="profile"> <button><img src="src\assets\user.png" alt="" className="user" /></button></div>

                </div>
            </div>
        </>
    )
}
export default Navbar;