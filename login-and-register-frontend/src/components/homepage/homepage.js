import React from "react"
import "./homepage.css"

const Homepage = ({updateUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Homepage</h1>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
    )
}

export default Homepage