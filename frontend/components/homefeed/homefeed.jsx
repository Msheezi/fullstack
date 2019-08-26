import React from "react";
import PostIndexItem from "./post_index_item";
import { connect } from "react-redux";

import { fetchAllPosts, deletePost } from "../../actions/posts_actions";
import { fetchComments } from "../../actions/comment_actions";
import { fetchAllUsers } from "../../actions/user_actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      loaded: false
    }
    this.resizeGridItem = this.resizeGridItem.bind(this)
    this.resizeAllGridItems = this.resizeAllGridItems.bind(this)
    this.resizeInstance = this.resizeInstance.bind(this)
  }

  componentDidMount() {
    window.onload = this.resizeAllGridItems()
    
    window.addEventListener("resize", this.resizeAllGridItems);
    this.props.fetchPosts().then(() => this.props.fetchUsers()).then(()=> this.setState({
      loaded: true
    })).then(()=> this.resizeAllGridItems());
  }

  componentWillUpdate(){
    this.resizeAllGridItems()
  }

//   resizeGridItem(item) {
//     grid = document.getElementsByClassName("grid")[0];
//     rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
//     item.style.gridRowEnd = "span " + rowSpan;
// }

   resizeGridItem(item){
     grid = document.getElementsByClassName("photo-index-container")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
    console.log(grid)
  }

   resizeAllGridItems(){
     var allItems = document.getElementsByClassName("item");
    let x
    for (x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
      console.log(allItems[x])

    }
  }

  resizeInstance(instance) {
    item = instance.elements[0];
    this.resizeGridItem(item);
  }



  render() {
    
    if (this.state.loaded){
    let posts = this.props.posts
      .map(post => (
        <PostIndexItem
          key={post.id}
          post={post}
          deletePost={this.props.deletePost}
          props={this.props}
        />
      ))
      .reverse();
    console.log(this.props.posts);
    // debugger
    return (
      <div className="index-title">
        <h2>Discover</h2>

        <div className="photo-index-container">{posts}</div>
      </div>
    );
    } else {
      return ""
    }
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.entities.posts).map(id => state.entities.posts[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchComments: () => dispatch(fetchComments()),
  fetchUsers: () => dispatch(fetchAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
