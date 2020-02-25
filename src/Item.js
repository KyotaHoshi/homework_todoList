import React/*, { useState }*/ from "react"

const Item = ({ todo, todos, setTodos }) => {
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

    //const [isDone, setIsDone] = useState("未完了")

    const handleIsDone = () => {
        const doneTodo = todos.find(x => x.id === todo.id)
        if ( doneTodo.isDone.done === false){
            doneTodo.isDone.done = true
        } else {
            doneTodo.isDone.done = false
        }
        
        const doneTodos = todos.map(x => {
            if (x.isDone.done === true) {
                return x.isDone.text = "完了"
            } else {
                return x.isDone.text = "未完了"
            }
        })

        setTodos(doneTodos)
        console.log(todo.isDone);
        console.log(todos);
        console.log(todo.isDone.text);
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
                        { todo.isDone.text }
                    </button>
                </li>
            </>
    )
}

export default Item