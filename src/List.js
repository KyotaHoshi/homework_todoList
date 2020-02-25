import React from "react"
import Item from "./Item"

const List = ({ todos, setTodos }) => {
    // console.log(todos);
    const row = todos.map((x, i) =>
        <Item 
        todo = { x }
        key = { i } 
        todos = { todos }
        setTodos = { setTodos }
        // isDone = { isDone }
        // setIsDone = { setIsDone }
        />
    )
    return (
        <ul>
           {row}
        </ul>
    )
}

export default List