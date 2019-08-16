import { connect } from "react-redux";

import { logout } from "../actions/session_actions";
import NavBar from "./navbar";
import { openModal } from "../actions/ui_actions";

const mapStateToProps = ({ session, entities: { users } }) => {
  return { currentUser: users[session.id] };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: () => dispatch(openModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
