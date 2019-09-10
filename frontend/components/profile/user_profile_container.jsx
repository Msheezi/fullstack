import {connect } from 'react-redux'
import Profile from './user_profile'
import { fetchAllPosts} from '../../actions/posts_actions'
import {fetchAllUsers} from '../../actions/user_actions'


const mapStateToProps = (state , ownProps) => {
    
    let user = ownProps.match.params.userId
    let allPosts = Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    let posts = allPosts.filter(post => post.author_id == user )
    let bgId = state.entities.users[user].bgphoto || 1
    let defaultBG = state.entities.posts[bgId].photoUrl
   return {
    user: state.entities.users[user],
    posts: posts,
    defaultBG: defaultBG

   }
    
}

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)