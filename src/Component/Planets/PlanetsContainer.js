import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SetPlanetThunk, getPlanetByIdThunk } from '../redux/thunk/planetsThunk';
import { useEffect } from 'react';
import styled from 'styled-components';
import RenderItem from '../Common/RenderItem/RenderItem';
import Planet from './Planet';

const Preloader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const Wrapper = styled.div`
	width:100%;
	display: flex;
  justify-content: space-between;
`;

const PlanetsContainer = ({ planets, fetching, planet, SetPlanetThunk, getPlanetByIdThunk }) => {
	useEffect(() => {
		SetPlanetThunk()
	}, [SetPlanetThunk])
	return (
		!!fetching
			? <Preloader />
			: <Wrapper >
				<RenderItem items={planets} onClick={getPlanetByIdThunk} />
				{!!planet
					? <Planet planet={planet} />
					: <></>
				}
			</Wrapper>


	)
};

const mapStateToProps = ({ planet }) => {
	return {
		planets: planet.planets,
		fetching: planet.fetching,
		planet: planet.planet
	}
}

PlanetsContainer.defaultProps = {
	planets: [],
	fetching: true,
	planet: {},
	SetPlanetThunk: () => { },
	getPlanetByIdThunk: () => { }
}

PlanetsContainer.propTypes = {
	planets: PropTypes.arrayOf(PropTypes.object).isRequired,
	fetching: PropTypes.bool.isRequired,
	planet: PropTypes.object.isRequired,
	SetPlanetThunk: PropTypes.func.isRequired,
	getPlanetByIdThunk: PropTypes.func.isRequired
}

export default compose(
	memo,
	connect(mapStateToProps, { SetPlanetThunk, getPlanetByIdThunk })
)(PlanetsContainer);