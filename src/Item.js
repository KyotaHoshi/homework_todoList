import React/*, { useState }*/ from "react"

const Item = ({ todo, todos, setTodos }) => {
    // console.log(todo);

    const isDoneText = (x) => {
        if (x.isDone === true) {
            return "完了"
        } else if (x.isDone === false) {
            return "未完了"
        } else {
            return "不明"
        }
    }
    
    // const [isDone, setIsDone] = useState(isDoneText(todo))

    const handleDelete = () => {
        const newTodos = todos.slice()
        newTodos.splice(todo.id, 1)
        
        // id振り直し
        newTodos.map((x, i) => {
            // setIsDone(isDoneText(x))
            return (
                x.id = i
                )
        })

        console.log(newTodos);
            
        setTodos(newTodos)
        console.log("-----Delete------");
        console.log(todo);
        console.log(todos);
    }

    
    const handleIsDone = () => {
        const newTodos = todos.slice()

        const doneTodo = todos.find(x => x.id === todo.id)
        if ( doneTodo.isDone === false){
            doneTodo.isDone = true
            // setIsDone("完了")
        } else {
            doneTodo.isDone = false
            // setIsDone("未完了")
        }

        newTodos.splice(doneTodo.id, 1, doneTodo)

        setTodos(newTodos)
        // setIsDone(isDoneText(todo))
        console.log("-----isDone------");
        console.log(todo);
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
                        { isDoneText(todo) }
                    </button>
                </li>
            </>
    )
}

export default Item