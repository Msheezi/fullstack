import {connect } from 'react-redux'
import Profile from './user_profile'


const mapStateToProps = (state) => {

    let user = state.session.id
    
   return {
       
    posts: Object.values(state.entities.posts).filter(post => post.author_id === user)

   }
    
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)