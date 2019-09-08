import {connect } from 'react-redux'
import Profile from './user_profile'
import { fetchAllPosts} from '../../actions/posts_actions'
import {fetchAllUsers} from '../../actions/user_actions'


const mapStateToProps = (state , ownProps) => {
    // debugger
    let user = ownProps.match.params.userId
    let allPosts = Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    let posts = allPosts.filter(post => post.author_id == user )
   return {
    user: state.entities.users[user],
    posts: posts

   }
    
}

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)