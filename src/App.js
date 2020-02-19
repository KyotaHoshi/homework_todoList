import React, { useState } from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const [ todos, setTodos ] = useState([
        { note: "十分な睡眠をとる" },
        { note: "健康的な食事をとる" },
        { note: "適度な運動をする" },
        { note: "犬の散歩" },
        { note: "身だしなみを整える" },
        { note: "お風呂に入る" }
    ])
    console.log(todos);
    
    return (
        <>
            <Form 
                setTodos = { setTodos }
                todos = { todos }
            />
            <List
                todos={ todos }
            />
        </>
    )
}

export default App