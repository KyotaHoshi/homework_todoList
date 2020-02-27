import React from "react"
import styled from "styled-components"

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
                    <p>
                        { todo.note }
                    </p>
                    <button
                        type = "text"
                        onClick = { handleDelete }
                    >
                        －
                    </button>
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

const Li = styled.li`
    background-color: #fff;
`

export default Item