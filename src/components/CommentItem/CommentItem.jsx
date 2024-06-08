import "./CommentItem.scss";

export default function CommentItem({ name, comment, timestamp }) {
    const date = new Date(timestamp);
    
    return (
        <>
            <div className="comment">
                <div className="comment__avatar"></div>
                <div className="comment__container">
                    <div className="comment__whoWhen">
                        <h2 className="comment__whoWhen--who">{name}</h2>
                        <h3 className="comment__whoWhen--when">{date.toLocaleDateString('es-pa')}</h3>
                    </div>
                    <div className="comment__details">
                        {comment}
                    </div>
                </div>
            </div>
            <div className="divider"></div>
        </>
    )
}