import React, { useState } from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const [ todos, setTodos ] = useState([
        { 
            note: "十分な睡眠をとる" ,
            id: 0,
            isDone: false
        },
        { 
            note: "健康的な食事をとる" ,
            id: 1,
            isDone: false
        },
        { 
            note: "適度な運動をする" ,
            id: 2,
            isDone: false
        },
        { 
            note: "犬の散歩" ,
            id: 3,
            isDone: false
        },
        { 
            note: "身だしなみを整える" ,
            id: 4,
            isDone: false
        },
        { 
            note: "お風呂に入る" ,
            id: 5,
            isDone: false
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
            />
            <List
                todos={ todos }
                setTodos = { setTodos }
            />
        </>
    )
}

export default App