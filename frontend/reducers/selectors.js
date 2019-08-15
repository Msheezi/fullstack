 export const getPostComments = (state) => Object.keys(state.entities.comments).map(id => state.entities.comments[id])
   
    //return allComments.filter(comment => comment.post_id === ownProps.postId)


