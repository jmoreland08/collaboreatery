import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  
    <>
        <NavLink className="link" to="/add-listing">Add New Restaraunt</NavLink>
        {/* <NavLink className="link" to="/sign-out">Sign Out</NavLink> */}
    </>
)

const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
)

const alwaysOptions = (
    <>
        <NavLink className="link" to="/listings">View Restaraunts</NavLink>
    </>
)

const Nav = ({ user }) => {
        return (
            <nav>
                <div id="nav">
                    <NavLink className="logo" to="/">Collaboreatery</NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}

export default Nav