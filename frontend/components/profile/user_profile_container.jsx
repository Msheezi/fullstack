import { connect } from "react-redux";
import Profile from "./user_profile";
import { fetchAllPosts } from "../../actions/posts_actions";
import { fetchAllUsers } from "../../actions/user_actions";
import { fetchAllGalleries } from "../../actions/gallery_actions";

const mapStateToProps = (state, ownProps) => {
  let user = ownProps.match.params.userId;
  let allPosts = Object.keys(state.entities.posts).map(
    id => state.entities.posts[id]
  );
  let posts = allPosts.filter(post => post.author_id == user);
  let bgId = state.entities.users[user].bgphoto || allPosts[0].id;
  let defaultBG = state.entities.posts[bgId].photoUrl;

  return {
    galleries: Object.keys(state.entities.galleries).map(
      id => state.entities.galleries[id]
    ),
    user: state.entities.users[user],
    posts: posts,
    defaultBG: defaultBG
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchAllGalleries: () => dispatch(fetchAllGalleries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
