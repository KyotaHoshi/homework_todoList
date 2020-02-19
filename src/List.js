import React from "react"
import Item from "./Item"

const List = ({ todos }) => {
    console.log(todos);
    const row = todos.map(x => <Item todo = { x.note } />)
    return (
        <ul>
           {row}
        </ul>
    )
}

export default List