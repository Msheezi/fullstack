export const createComment = (comment) => {


    return (

        $.ajax({
            method: 'post',
            url: 'api/comments',
            data: {comment}
        })
    )
}

export const fetchComment = (id) => {


    return (

        $.ajax({
            method: 'get',
            url: `api/comments/${id}`
            
        })
    )
}