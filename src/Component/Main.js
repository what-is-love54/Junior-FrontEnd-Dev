import React from 'react';
import styled from 'styled-components'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contain from './Contain/Contain';

const AppWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
`;
const Main = props => {
    return (
        <AppWrapper>
            <Header/>
            <Contain/>
            <Footer/>
        </AppWrapper>
    );
};


export default Main;