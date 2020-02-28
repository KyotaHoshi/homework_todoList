import React from "react"
import { Li, TodoNote, DeleteButton } from "./ItemStyle"

const Item = ({ todo, deleteTodo, changeIsDone }) => {

    const isDoneText = (todo) => {
        if (todo.isDone === true) {
            return "済"
        } else if (todo.isDone === false) {
            return "未"
        } else {
            return "？"
        }
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }
    
    const handleIsDone = () => {
        changeIsDone(todo)
    }


    return (
            <>
                <Li>
                    <TodoNote>
                        { todo.note }
                    </TodoNote>
                    <DeleteButton
                        type = "text"
                        onClick = { handleDelete }
                    >
                        －
                    </DeleteButton>
                    <button
                        type = "text"
                        onClick = { handleIsDone }
                    >
                        { isDoneText(todo) }
                    </button>
                </Li>
            </>
    )
}

export default Item