import {connect } from 'react-redux'
import Profile from './user_profile'


const mapStateToProps = (state) => {
   let currentUser = state.session.id
    let postIds = state.entities.users[currentUser].post_ids
   return {
       
    posts: postIds.map(id => state.entities.posts[id] )

   }
    
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)