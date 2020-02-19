import React from "react"

const Form = ({ setTodos, todos }) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        setTodos(todos.concat({ note: "やらなければならないこと" }))
    }
    return (
        <form
            action="#"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
            />
            <button type="submit">追加</button>
        </form>
    )
}

export default Form