import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import Git from '../Git/Git';
import Me from '../Me/Me';
import Users from '../Users/Users';

const MainContain = styled.div`
    flex: 1 0 auto;
`;

const Contain = () => {
    return (
        <MainContain>
            <Route path="/git" render={() => <Git />} />
            <Route path="/me" render={() => <Me />} />
            <Route path="/users" render={() => <Users/> } />
            <Redirect from='/' to='/git' />
        </MainContain>
    );
};


export default Contain;