import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';

class HeaderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Header/>);
  }
}

HeaderContainer.propTypes = {
};

export default HeaderContainer;