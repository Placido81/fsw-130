import React from "react"

function CommentCard(props) {
    return (
        <div className='comments'>
            {props.comment}
            <br />
            <button className='button'
                onClick={() =>
                    props.deleteComment(props.id, props.uglyCardId)}>
                X
            </button>
        </div>
    )
}
export default CommentCard