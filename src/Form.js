import React from "react"

const Form = ({ setTodos, todos, newNote, setNewNote, isDone }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos(todos.concat({
            note: newNote,
            id: todos.length,
            isDone: isDone
        }))
    }
    const handleChange = (e) => {
        setNewNote(e.target.value)
    }
    return (
        <form
            action="#"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                /*name="name"*/
                value= { newNote }
                onChange={ handleChange }
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form