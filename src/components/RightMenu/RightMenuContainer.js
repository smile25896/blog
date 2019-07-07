import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import RightMenu from './RightMenu';
import postList from 'post/list.json'

class RightMenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.postList = postList.slice();
  }

  render() {
    return (
      <RightMenu
        postList={this.postList}
      />
    );
  }
}

RightMenuContainer.propTypes = {
};

export default RightMenuContainer;