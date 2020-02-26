import React/*, { useState }*/ from "react"

const Item = ({ todo, todos, setTodos }) => {

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

    //const [isDone, setIsDone] = useState("未完了")

    const handleIsDone = () => {
        const newTodos = todos.slice()
        const doneTodo = todos.find(x => x.id === todo.id)
        if ( doneTodo.isDone === "未完了"){
            doneTodo.isDone = "完了"
        } else {
            doneTodo.isDone = "未完了"
        }

        newTodos.splice(todo.id, 1, doneTodo)
        
        setTodos(newTodos)
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
                        { todo.isDone }
                    </button>
                </li>
            </>
    )
}

export default Item