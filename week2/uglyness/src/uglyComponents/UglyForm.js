import React, { useState } from "react"
import Button from "../components/Button"
import Header from '../components/Header'

function UglyForm(props) {
    const initInputs = {
        id: props.id || '',
        title: props.title || '',
        url: props.url || '',
        description: props.description || '',
        comments: props.comment || [],
        isEditable: false
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.submit(inputs)
        setInputs(initInputs)
    }

    return (
        <div className='form'>
            <h1>Add New Ugly :</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className='form-input'
                    type="text"
                    value={inputs.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                />
                <br />
                <input
                    className='form-input'
                    type="text"
                    value={inputs.url}
                    onChange={handleChange}
                    name="url"
                    placeholder="Image" />
                <br />
                <input
                    className='form-input'
                    type="text"
                    value={inputs.description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Description"
                />
                <br />
                <Button type="submit" description={props.buttonText} />
            </form>
        </div>
    )
}
export default UglyForm
