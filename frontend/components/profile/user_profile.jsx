import React from 'react'
import {withRouter} from 'react-router-dom'
import PostIndexItem from '../homefeed/post_index_item'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state= ({
            loaded: false,
            offset: 0,
            selectedTab: ""
        })

        this.parallaxShift = this.parallaxShift.bind(this)
        this.bgStyle = this.bgStyle.bind(this)
        this.renderPhotos = this.renderPhotos.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllUsers().then(
          () =>  this.props.fetchAllPosts()
        )
        .then(()=> this.setState({loaded: true}))
        window.addEventListener('scroll', this.parallaxShift)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.parallaxShift)
    }

    parallaxShift() {
        this.setState({
            offset: window.pageYOffset
        })
    }

    bgStyle() {
        let width = window.innerWidth
        let urlMe = this.props.posts[3].photoUrl
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
        
        // debugger

        
        // let user = this.props.match.params.userId
        
        if (this.state.loaded) {
        return (
            <div className="profile-page">
                <div className="parallax-bg" 
                    style={ this.bgStyle()
                        
                         }></div> 
                <div className="profile-index-title"
                    style={{bottom: this.state.offset / 2}}>
                    <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
                </div>
                <div className="photo-gallery-pane-selector">
                   <span className="selector-photos">Photos</span>
                   <span className="selector-spacer"></span> 
                   <span className="select-galleries">Galleries</span>
                </div>

                {this.renderPhotos()}

                       
            </div>
        )
        } else {
            return ""
        }}
}

export default withRouter(Profile)