import React from "react"
import CommentList from "../commentComponents/CommentList"
import UglyForm from "./UglyForm"
import { UglyContextConsumer } from "./UglyContext"

function UglyCard(props) {
    const { id, title, url, description, comments, isEditable, setEditable, editUglyThing, deleteUglyThing } = props
    return (
        <div className='ugly'>
            {!isEditable ?
                <>
                    <div className='ugly-title'>
                        <h1> {title}</h1>
                        <br />
                        <img className='image' src={url} alt="Ugly" />
                        <br />
                        <h2> Description: {description}</h2>
                        <button className='button' onClick={() => setEditable(id)}>Edit</button>
                        <button className='button' onClick={() => deleteUglyThing(id)}>Remove</button>
                    </div>
                    <UglyContextConsumer>
                        {context => (
                            <CommentList comments={comments} uglyCardId={id} addComment={context.addComment} deleteComment={context.deleteComment} />
                        )}
                    </UglyContextConsumer>
                </>
                :
                <>
                    <UglyForm
                        id={id}
                        title={title}
                        url={url}
                        description={description}
                        buttonText="Submit Edit"
                        submit={editUglyThing}
                    />
                    <button className='cancelButton' onClick={() => setEditable(id)}>Cancel Edit</button>
                </>
            }
        </div>
    )
}
export default UglyCard
