import React from "react"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

function CommentList(props) {
    const commentData = props.comments.map(comment => (
        <CommentCard
            key={comment.id}
            id={comment.id}
            comment={comment.text}
            deleteComment={props.deleteComment}
            uglyCardId={props.uglyCardId}
        />
    ))
    return (
        <div>
            <h3>User Comments:</h3>
            {commentData}
            <CommentForm addComment={props.addComment} uglyCardId={props.uglyCardId} />
        </div>
    )
}
export default CommentList