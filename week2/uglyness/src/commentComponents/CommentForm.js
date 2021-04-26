import React, { useState } from "react"
import Header from "../components/Header"
import Button from "../components/Button"

function UglyForm(props) {
    const initInputs = {
        id: props.id || '',
        text: props.comment || '',
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
        props.addComment(inputs, props.uglyCardId)
        setInputs(initInputs)
    }

    return (
        <div >
            <form className='comment-form' onSubmit={handleSubmit}>
                <label>
                    <input
                        className='form-input'
                        type="text"
                        value={inputs.text}
                        onChange={handleChange}
                        name="text"
                        placeholder="Comment"
                    />
                </label>
                <Button type="submit" description="Submit" />
            </form>
        </div>
    )
}
export default UglyForm
