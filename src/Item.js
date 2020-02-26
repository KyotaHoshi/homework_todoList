import React from "react"

const Item = ({ todo, deleteTodo, changeIsDone }) => {

    const isDoneText = (todo) => {
        if (todo.isDone === true) {
            return "完了"
        } else if (todo.isDone === false) {
            return "未完了"
        } else {
            return "不明"
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
                <li>
                    <p>
                        { todo.note }
                    </p>
                    <button
                        type = "text"
                        onClick = { handleDelete }
                    >
                        削除
                    </button>
                    <button
                        type = "text"
                        onClick = { handleIsDone }
                    >
                        { isDoneText(todo) }
                    </button>
                </li>
            </>
    )
}

export default Item