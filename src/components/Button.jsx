import React from "react"

function Button({ label, bg }) {
    return (
        <button style={{ backgroundColor: bg }}>{label}</button>
    )
}


export default Button