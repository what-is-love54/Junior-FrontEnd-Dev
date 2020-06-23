import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const HeaderWrapper = styled.header`
    width:100%;
    background:white;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#222222;
`;

const Header = props => <HeaderWrapper> <Navbar /> </HeaderWrapper>

export default Header;