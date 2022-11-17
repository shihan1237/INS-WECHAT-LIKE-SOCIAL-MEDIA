

function LikeZone(props) {
    const likes = props.likes
    if (!likes.length) {
        return (<></>)
    }
    return (
        <>
            <div className=" pt-0.5 pb-2 px-0.5 ml-1">
                <i className="icon-like-blue"></i>
                {
                    likes.map((like, index) => {
                        return (
                            <div key = {index} className = 'inline'>
                                <a className="reply-who text-sky-800" href="#" key = {index}>{like}</a>
                                {
                                    index != likes.length - 1 ?
                                        <>, </> :
                                        <>
                                        </>
                                }
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

function CommentsZone(props) {
    const comments = props.comments
    if (!comments.length) {
        return (<></>)
    }
    return (
        <>
            <div className="reply-comment">
                {
                    comments.map((comment, index) => {
                        return (
                            <div key = {index}>
                                <div className="ml-1" key = {index}>
                                    <a className="reply-who text-sky-800" href="#">{comment.author}: </a>
                                    {comment.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default (props) => {
    const reply = props.reply

    return (
        <div className="reply-zone bg-slate-100">
            <LikeZone likes={reply.likes} />
            <CommentsZone comments={reply.comments} />
        </div>
    )


}