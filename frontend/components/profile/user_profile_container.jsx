import {connect } from 'react-redux'
import Profile from './user_profile'


const mapStateToProps = (state, ownProps) => {
//    let userId = ownProps.match.params.userId
//     let postIds = state.entities.users[userId].post_ids
debugger
    let postIds = state.entities.users[ownProps.match.params.userId].post_ids
   return {
       
    posts: postIds.map(id => state.entities.posts[id] )

   }
    
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)