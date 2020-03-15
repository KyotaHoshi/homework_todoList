import React from "react"
import Item from "./Item"
import ListStyle from "./ListStyle"

const List = ({ 
    todos,
    deleteTodo,
    changeIsDone 
}) => {
    // console.log(todos);
    const row = todos.map(todo =>
        <Item
        todo = { todo }
        deleteTodo = { deleteTodo }
        changeIsDone = { changeIsDone }
        />
    )
    return (
        <ListStyle>
           { row }
        </ListStyle>
    )
}

export default List