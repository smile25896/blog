import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';

class HeaderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isScrollOver: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    if(document.documentElement.scrollTop<68 && this.state.isScrollOver){
      this.setState({
        isScrollOver: false
      })
    }
    else if(document.documentElement.scrollTop>=68 && !this.state.isScrollOver){
      this.setState({
        isScrollOver: true
      })
    }
  }

  render() {
    return (
      <Header
        isScrollOver={this.state.isScrollOver}
      />
    );
  }
}

HeaderContainer.propTypes = {
};

export default HeaderContainer;