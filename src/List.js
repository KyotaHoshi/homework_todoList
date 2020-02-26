import React from "react"
import Item from "./Item"

const List = ({ todos, deleteTodo, changeIsDone }) => {
    // console.log(todos);
    const row = todos.map(todo =>
        <Item 
        todo = { todo }
        deleteTodo = { deleteTodo }
        changeIsDone = { changeIsDone }
        />
    )
    return (
        <ul>
           {row}
        </ul>
    )
}

export default List