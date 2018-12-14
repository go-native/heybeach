import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { fetchMe } from "../actions/user";
import { setContentVisibility } from "../actions/common";
import BeachGrid from "./BeachGrid";

class Main extends Component {
  componentDidMount() {
    const { fetchMe, setContentVisibility } = this.props;
    fetchMe()
      .then(() => setContentVisibility(true))
      .catch(() => setContentVisibility(true));
  }
  render() {
    const { isContentVisible } = this.props;
    return isContentVisible ? (
      <Fragment>
        <Header />
        <BeachGrid />
        <RegisterModal />
        <LoginModal />
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    isContentVisible: state.common.isContentVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMe: () => dispatch(fetchMe()),
    setContentVisibility: isContentVisible =>
      dispatch(setContentVisibility(isContentVisible))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
