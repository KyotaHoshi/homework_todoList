import React, { useState } from "react"
import Form from "./Form"
import List from "./List"
import Header from "./Header"
import Footer from "./Footer"

import { db } from "./config/firebase"

import Reset from "./ResetStyle"
import GlobalStyle from "./GlobalStyle"


const App = () => {
    const [ todos, setTodos ] = useState([
        { 
            note: "十分な睡眠をとる" ,
            isDone: false
        },
    ])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                note: value,
                isDone: false
            }
        ])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo, index) => index !== id))
    }

    const changeIsDone = (id) => {
        const newTodos = todos.slice()
        newTodos[id].isDone = !newTodos[id].isDone
        setTodos(newTodos)
    }
    
    return (
        <>
            <Reset />
            <GlobalStyle />
            <Header />
            <Form
                addTodo = { addTodo }
            />
            <List
                todos = { todos }
                deleteTodo = { deleteTodo }
                changeIsDone = { changeIsDone }
            />
            <Footer />
        </>
    )
}

export default App