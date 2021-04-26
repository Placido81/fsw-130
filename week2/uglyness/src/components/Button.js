import React from "react"

function Button(props) {
    return (
        <button className='button'>{props.description}</button>
    )
}

export default Button