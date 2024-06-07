import CommentItem from '../CommentItem/CommentItem';
import './DisplayComments.scss'

export default function DisplayComments({ currentVideo }) {
    const commentsList = currentVideo.comments;
    
    return (
        <section className="displayComments">
            {commentsList.map((comment) => <CommentItem
                key={comment.id}
                name={comment.name} 
                comment={comment.comment}
                timestamp={comment.timestamp}
                />
            )}
        </section>
    )
}