import React from "react"

const Item = ({ todo }) => {
    console.log(todo);
    return (
            <>
                <li>{ todo }</li>
            </>
    )
}

export default Item