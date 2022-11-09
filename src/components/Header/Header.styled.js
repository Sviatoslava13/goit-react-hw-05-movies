import styled from 'styled-components';
const { NavLink } = require('react-router-dom');
export const HeaderContent = styled.header`
  padding: 20px 0;
  box-shadow: 2px 2px 4px 1px blue;
`;
export const Nav = styled.nav`
  padding: 0 50px;
`;
export const Link = styled(NavLink)`
  font-family: system-ui;
  font-size: 18px;
  font-weight: 700;
  color: black;
  margin-right: 20px;
  :last-child {
    margin-right: 0;
  }
  &.active {
    background-color: blue;
    color: white;
    border-radius: 4px;
    padding: 3px;
    text-decoration: none;
  }
`;
