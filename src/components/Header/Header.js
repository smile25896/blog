import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px 0;
  font-family: 'Open Sans', '微軟正黑體', 'sans-serif';
  border-bottom: 1px #eee solid;
`;

const Title = styled.div`
  font-size: 1.5em;
  margin: 20px 20px 20px 60px;
  letter-spacing: 0.15em;
  font-weight: 500px;
`;

const OptionBar = styled.ul`
  display: flex;
  margin-right: 50px;
  font-size: 0.85em;
`;

const OptionLi = styled.li`
  padding: 0 7px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Title>Cathy P</Title>
      <OptionBar>
        <OptionLi>
          <Link to="/blog">首頁</Link>
        </OptionLi>
        <OptionLi>分類</OptionLi>
        <OptionLi>列表</OptionLi>
      </OptionBar>
    </HeaderStyled>
  );
};

Header.propTypes = {
};

export default Header;