import React from "react"

const Item = ({ item }) => {
    console.log(item);
    return (
        <>
            <li>{ item }</li>
        </>
    )
}

export default Item