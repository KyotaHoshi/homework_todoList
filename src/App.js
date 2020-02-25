import React, { useState } from "react"
import Form from "./Form"
import List from "./List"


const App = () => {

    const [isDone, setIsDone] = useState({
        done: false,
        text: "未完了"
        }
    )

    const [ todos, setTodos ] = useState([
        { 
            note: "十分な睡眠をとる" ,
            id: 0,
            isDone: isDone
        },
        { 
            note: "健康的な食事をとる" ,
            id: 1,
            isDone: isDone
        },
        { 
            note: "適度な運動をする" ,
            id: 2,
            isDone: isDone
        },
        { 
            note: "犬の散歩" ,
            id: 3,
            isDone: isDone
        },
        { 
            note: "身だしなみを整える" ,
            id: 4,
            isDone: isDone
        },
        { 
            note: "お風呂に入る" ,
            id: 5,
            isDone: isDone
        }
    ])
    // console.log(todos);

    const [newNote, setNewNote] = useState("")
    



    return (
        <>
            <Form 
                setTodos = { setTodos }
                todos = { todos }
                newNote = { newNote }
                setNewNote = {setNewNote}
                isDone = { isDone }
            />
            <List
                todos={ todos }
                setTodos = { setTodos }
                isDone = { isDone }
                setIsDone = { setIsDone }
            />
        </>
    )
}

export default App