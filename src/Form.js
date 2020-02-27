import React, { useState } from "react"
import { FormStyle, Input, SubmitButton, FormText } from "./FormStyle"

const Form = ({ addTodo }) => {
    const [value, setValue] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        addTodo(value)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <FormStyle
            action="#"
            onSubmit= { handleSubmit }
        >
            <Input
                type="text"
                value= { value }
                onChange= { handleChange }
            />
            <SubmitButton type="submit">＋</SubmitButton>
            <FormText>todoを入力しよう！</FormText>
        </FormStyle>
    )
}

export default Form