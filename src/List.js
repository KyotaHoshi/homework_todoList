import React from "react"
import Item from "./Item"
import ListStyle from "./ListStyle"

const List = ({ 
    todos,
    deleteTodo,
    changeIsDone 
}) => {
    // console.log(todos);
    const row = todos.map((todo, index) =>
        <Item
        todo = { todo }
        // key = { index }
        id = { index }
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