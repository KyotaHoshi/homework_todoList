import React, { useState } from "react"
import Form from "./Form"
import List from "./List"


const App = () => {
    const [ todos, useTodos ] = useState([
        { note: "十分な睡眠をとる" },
        { note: "健康的な食事をとる" },
        { note: "適度な運動をする" },
    ])
    console.log(todos);
    
    return (
        <>
            <Form 
                useTodos = { useTodos }
                todos = { todos }
            />
            <List
                todos={ todos }
            />
        </>
    )
}

export default App