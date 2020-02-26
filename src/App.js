import React, { useState } from "react"
import Form from "./Form"
import List from "./List"


const App = () => {

    // const [isDoneText, setIsDoneText] = useState()

    const [ todos, setTodos ] = useState([
        { 
            note: "十分な睡眠をとる" ,
            id: 0,
            isDone: "未完了"
        },
        { 
            note: "健康的な食事をとる" ,
            id: 1,
            isDone: "未完了"
        },
        { 
            note: "適度な運動をする" ,
            id: 2,
            isDone: "未完了"
        },
        { 
            note: "犬の散歩" ,
            id: 3,
            isDone: "未完了"
        },
        { 
            note: "身だしなみを整える" ,
            id: 4,
            isDone: "未完了"
        },
        { 
            note: "お風呂に入る" ,
            id: 5,
            isDone: "未完了"
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