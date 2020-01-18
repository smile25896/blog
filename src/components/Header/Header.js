import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.div`

  position: ${props=>props.isScrollOver? 'fixed' : 'relative'};
  width: 100%;
  background: #fff;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: ${props=>props.isScrollOver? '0' : '15px 0'};
  font-family: 'Open Sans', '微軟正黑體', 'sans-serif';
  border-bottom: ${props=>props.isScrollOver? '0px' : '1px #eee solid'};
  box-shadow: ${props=>props.isScrollOver? '0px 2px 5px 0px rgba(0,0,0,0.2)' : '0'};
`;

const Title = styled.div`
  font-size: ${props=>props.isScrollOver? '1.1em' : '1.5em'};
  margin: ${props=>props.isScrollOver? '5px 5px 5px 60px' : '20px 20px 20px 60px'};
  transition: font-size 0.2s ease-in-out 0s; 
  letter-spacing: 0.15em;
  font-weight: 500px;
  
  @media only screen and (max-width: 768px) {
    margin-left: 30px;
  }
`;

const OptionBar = styled.ul`
  display: flex;
  margin-right: 50px;
  font-size: 0.85em;
`;

const OptionLi = styled.li`
  padding: 0 7px;
`;

const Empty = styled.div`
  height: 95px;
  width: 100%;
`;

const Header = ({
  isScrollOver
}) => {
  return (
    <React.Fragment>
      <HeaderStyled isScrollOver={isScrollOver}>
        <Title isScrollOver={isScrollOver}>
          <Link to="/blog" >
            Cathy P
          </Link>
        </Title>
        {/* <OptionBar>
          <OptionLi>
            <Link to="/blog">首頁</Link>
          </OptionLi>
          <OptionLi>分類</OptionLi>
          <OptionLi>列表</OptionLi>
        </OptionBar> */}
      </HeaderStyled>
      {isScrollOver? <Empty/>:null}
    </React.Fragment>
  );
};

Header.propTypes = {
  isScrollOver: PropTypes.bool.isRequired,
};

export default Header;