import React, { memo } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import PeopleContainer from '../People/PeopleContainer';
import PlanetsContainer from '../Planets/PlanetsContainer';
import ShipsContainer from '../Ships/ShipsContainer';
import RandomPlanetContainer from '../Planets/RandomPlanet/RandomPlanetContainer';

const MainContain = styled.div`
    flex: 1 0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-left:50px;
    flex-wrap:wrap;
`;

const Contain = props => {

    return (
        <MainContain>
            <RandomPlanetContainer />
            <Route path='/people' render={() => <PeopleContainer />} />
            <Route path='/second' render={() => <PlanetsContainer />} />
            <Route path='/third' render={() => <ShipsContainer />} />
            <Redirect from='/' to='/people' />
            <Route path='*' redact={() => <div>404 NOT FOUND</div>} />
        </MainContain>
    );
};


export default memo(Contain);