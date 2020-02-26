import React, { useState } from "react"
import Form from "./Form"
import List from "./List"

import styled, { createGlobalStyle } from "styled-components"


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
    ])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                note: value,
                id: todos.length,
                isDone: false
            }
        ])
    }

    const deleteTodo = (id) => {
        const newTodos = todos.slice()
        newTodos.splice(id, 1)
        
        // id振り直し
        newTodos.map((todo, i) => {
            return (
                todo.id = i
                )
        })

        setTodos(newTodos)
    }

    const changeIsDone = (todo) => {
        const newTodos = todos.slice()

        const doneTodo = todos.find(x => x.id === todo.id)
        if ( doneTodo.isDone === false){
            doneTodo.isDone = true
        } else {
            doneTodo.isDone = false
        }

        newTodos.splice(doneTodo.id, 1, doneTodo)

        setTodos(newTodos)
    }
    
    return (
        <>
            <GlobalStyle />
            <Title>ToDo App</Title>
            <Form
                addTodo = { addTodo }
            />
            <List
                todos = { todos }
                deleteTodo = { deleteTodo }
                changeIsDone = { changeIsDone }
            />
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`

const Title = styled.h1`
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    background-color: #435627;
`

export default App