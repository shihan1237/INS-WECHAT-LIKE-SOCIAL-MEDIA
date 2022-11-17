import postData from "@/mock/postsMock.js"

const pData = postData

const getPosts = () => {
    return pData;
}

const updatePostByPidWithLike = (_pid, username, index) => {
    pData[index].reply.likes.push(username)
    return pData
}

const updatePostByPidWithUnlike = (_pid, username, index) => {
    pData[index].reply.likes.map((val, i) => {
        if (val === username) {
            pData[index].reply.likes.splice(i, 1)
        }
    });
    return pData

}

const updatePostByPidWithComment = (_pid, user, index, content) => {
    pData[index].reply.comments.push({

        author: user.username,
        text: content
    })
    return pData

}


export { getPosts, updatePostByPidWithLike, updatePostByPidWithUnlike, updatePostByPidWithComment } 