import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Home from './Home';
import postList from 'post/list.json'

class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.postList = postList.slice()
  }

  render() {
    return (
      <Home
        postList={this.postList}
      />);
  }
}

HomeContainer.propTypes = {
};

export default HomeContainer;