import React from 'react'
import {withRouter} from 'react-router-dom'
import PostIndexItem from '../homefeed/post_index_item'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state= ({
            loaded: false,
            offset: 50
        })

        this.parallaxShift = this.parallaxShift.bind(this)
        this.bgStyle = this.bgStyle.bind(this)
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
        let urlMe = this.props.posts[0].photoUrl
        return ({
            backgroundPositionY: this.state.offset,
            backgroundImage: `url(${urlMe})` 
        })
    }

    render() {
        
        // debugger

        
        // let user = this.props.match.params.userId
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

                <div className="layout-container">

                    <div className="photo-index-container">
                        {profPosts}
                    </div >

                </div>

                       
            </div>
        )
        } else {
            return ""
        }}
}

export default withRouter(Profile)