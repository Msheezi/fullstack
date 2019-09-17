import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { fetchAllPosts } from "../../actions/posts_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllGalleries } from '../../actions/gallery_actions'
import PostIndexItem from '../homefeed/post_index_item'


class GalleryShow extends React.Component{
    constructor(props){
        super(props)

        this.state =({
            loaded: false,
            offset: 0,
        })

        this.parallaxShift = this.parallaxShift.bind(this)
        this.bgStyle = this.bgStyle.bind(this)
    }

    componentDidMount(){
        this.props.fetchAllUsers().then(
            () => this.props.fetchAllPosts()
        )
            .then(() => this.props.fetchAllGalleries())
            .then(() => this.setState({ loaded: true }))
        window.addEventListener('scroll', this.parallaxShift)
    }
    
    parallaxShift() {
        this.setState({
            offset: window.pageYOffset
        })
    }

    bgStyle() {
        let width = window.innerWidth
        // let urlMe = this.props.posts[3].photoUrl === undefined ? this.props.defaultBG : this.props.posts[3].photoUrl
        let urlMe = this.props.defaultBG
        let betterUrl = urlMe.split("?")[0]
        let finalUrl = `https://res.cloudinary.com/ddtykf72z/image/fetch/c_fill,g_center,f_auto,h_500,w_${width},q_auto:best/${betterUrl}`
        return ({
            backgroundPositionY: this.state.offset,
            backgroundImage: `url(${finalUrl})`
        })
    }

    renderPhotos() {
        let profPosts = this.props.posts.map(post =>
            (
                <PostIndexItem
                    key={post.id}
                    post={post}

                    props={this.props}
                />
            )
        )
            .reverse()

        return (

            <div className="layout-container">

                <div className="photo-index-container">
                    {profPosts}
                </div >

            </div>
        )
    }

    render() {
        if (this.state.loaded) {
            return (
                <div className="profile-page">
                    <div className="parallax-bg"
                        style={this.bgStyle()

                        }></div>
                    <div className="profile-index-title"
                        style={{ bottom: this.state.offset / 2 }}>
                        <h2>{this.props.gallery.name}</h2>
                    </div>
                    

                    {this.renderPhotos()}


                </div>
            )
        } else {
            return ""
        }

    }
}

const msp = (state, ownProps) => {
    

    let postids = Object.keys(state.entities.galleries).map(id => state.entities.galleries[id].post_ids)
    let posts = postids.map(id => state.entities.posts[id])
    // let posts = allPosts.filter(post => post_ids.includes(post.id))
    // let posts = state.entities.posts.filter(post => post.id.includes(post_ids))
    let defaultBG = posts[0].photoUrl
    let galleryId = ownProps.match.params.galleryId
    return {
        gallery: state.entities.galleries[galleryId],
        posts: posts,
        defaultBG: defaultBG
    }

}

const mdp = dispatch => ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllGalleries: () => dispatch(fetchAllGalleries())
})

export default withRouter(connect(msp, mdp)(GalleryShow))