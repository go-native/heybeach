import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNextBeaches } from "../actions/beaches";
import ImageGrid from "../components/ImageGrid/ImageGrid";

class BeachGrid extends Component {
  constructor(props) {
    super(props);
    const { onFetchNextBeaches } = this.props;
    onFetchNextBeaches();
  }
  render() {
    return <ImageGrid {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    images: state.beaches.beaches
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNextBeaches: () => dispatch(fetchNextBeaches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeachGrid);
