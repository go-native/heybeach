import { connect } from "react-redux";
import Header from "./../components/Header/Header";
import { openRegisterModal, openLoginModal } from "../actions/common";
import { logout } from "../actions/user";

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenRegisterModal: () => dispatch(openRegisterModal()),
    onOpenLoginModal: () => dispatch(openLoginModal()),
    onLogout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
