import React, { useState, useEffect } from "react"
import Form from "./Form"
import List from "./List"
import Header from "./Header"
import Footer from "./Footer"

import { db } from "./config/firebase"

import Reset from "./ResetStyle"
import GlobalStyle from "./GlobalStyle"


const App = () => {
    const [ todos, setTodos ] = useState([])
    const [ reRender, doReRender ] = useState(0)

    useEffect(() => {
        db.collection('todos')
            .get()
            .then(querySnapshot => {
                // querySnapshot.forEach(doc => {
                //     console.log(`${doc.id} => ${doc.data()}`);                
                // })
                const newTodos = querySnapshot.docs.map(doc => {
                    const todo = doc.data()
                    todo.id = doc.id
                    return todo
                })
                console.log(newTodos)
                setTodos(newTodos)
            })
    }, [reRender])

    const addTodo = (value) => {
        const newTodo = {
            note: value,
            isDone: false,
        }

        db.collection('todos')
            .add(newTodo)
            .then(docRef => {
                console.log("保存完了", docRef)
                newTodo.id = docRef.id
                setTodos([
                    ...todos,
                    newTodo
                ])
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteTodo = (id) => {
        db.collection("todos").doc(id)
            .delete()
            .then(() => {
                console.log("削除成功")
                doReRender(reRender + 1)
            })
            .catch(err => {
                console.log(err);                
            })
    }

    const changeIsDone = (todo) => {
        todo.isDone = !todo.isDone
        db.collection("todos").doc(todo.id)
            .update(todo)
            .then(() => {
                console.log("isDone変更")
                doReRender(reRender + 1)
            })
            .catch(err => {
                    console.log(err);
                }
            )
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