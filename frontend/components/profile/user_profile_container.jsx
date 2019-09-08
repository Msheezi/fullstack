import {connect } from 'react-redux'
import Profile from './user_profile'
import { fetchAllPosts} from '../../actions/posts_actions'


const mapStateToProps = (state , ownProps) => {
    // debugger
    let user = ownProps.match.params.userId
    let allPosts = Object.keys(state.entities.posts).map(id => state.entities.posts[id])
    let posts = allPosts.filter(post => post.author_id == user )
   return {
       
    posts: posts

   }
    
}

const mapDispatchToProps = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)