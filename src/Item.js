import React from "react"
import { Li, TodoNote, DeleteButton } from "./ItemStyle"

const Item = ({
    todo,
    deleteTodo,
    changeIsDone,
    id
}) => {

    const isDoneText = () => {
        if (todo.isDone) {
            return "済"
        } else {
            return "未"
        }
    }

    return (
            <>
                <Li>
                    <TodoNote>
                        { todo.note }
                    </TodoNote>
                    <DeleteButton
                        type = "text"
                        onClick = { () => {
                            deleteTodo(id)
                        } }
                    >
                        －
                    </DeleteButton>
                    <button
                        type = "text"
                        onClick = { () => {
                            changeIsDone(id)
                        } }
                    >
                        { isDoneText() }
                    </button>
                </Li>
            </>
    )
}

export default Item