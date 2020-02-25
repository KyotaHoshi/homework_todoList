import React, { useState } from "react"

const Item = ({ todo, todos, setTodos, }) => {
    // console.log(todo);

    const handleDelete = () => {
        const newTodos = todos.slice()
        newTodos.splice(todo.id, 1)
        console.log(todo.id);
        

        // id振り直し
        newTodos.map((x, i) => {
            return (
                x.id = i
            )
        })

        setTodos(newTodos)
    }

    const [isDone, setIsDone] = useState("未完了")

    const handleIsDone = () => {
        const doneTodo = todos.find(x => x.id === todo.id)
        if ( doneTodo.isDone === false){
            doneTodo.isDone = true
            setIsDone("完了")
        } else {
            doneTodo.isDone = false
            setIsDone("未完了")
        }
        console.log(todo.isDone);
        console.log(todos);

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
                        { isDone }
                    </button>
                </li>
            </>
    )
}

export default Item