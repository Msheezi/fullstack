
export const fetchPosts = () => (
    $.ajax({
        method: 'get',
        url: 'api/posts'
    })
)

export const fetchPost = (id) => (
    $.ajax({
        method: 'get',
        url: `api/posts/${id}`
    })
)

export const createPost = (post) => {

    
    return (
        
        $.ajax({
            method: 'post',
            url: 'api/posts',
            data: post,
            contentType: false,
            processData: false
        })
    )
    }


export const updatePost = post => (
    $.ajax({
        method: 'patch',
        url: `api/posts/${post.id}`,
        data: {post}
    })
)


export const deletePost = postId => (
    $.ajax({
        method: 'delete',
        url: `api/posts/${postId}`
    })
)


