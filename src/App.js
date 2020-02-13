import React from "react"
import Form from "./Form"
import List from "./List"

const items = [
    "十分な睡眠をとる",
    "健康的な食事をとる",
    "適度な運動をする",
]

const App = () => {
    console.log(items);
    
    return (
        <>
            <Form/>
            <List
                items={ items }
            />
        </>
    )
}

export default App