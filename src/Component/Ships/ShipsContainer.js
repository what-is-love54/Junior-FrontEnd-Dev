import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setShipsThunk, setShipByIdThunk } from '../redux/thunk/shipsThunk';
import { useEffect } from 'react';
import Ship from './Ship';
import RenderItem from '../Common/RenderItem/RenderItem';
import styled from 'styled-components';

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

const ShipsContainer = ({ ships, ship, fetching, setShipsThunk, setShipByIdThunk, ...props }) => {
	useEffect(() => {
		setShipsThunk();
	}, [])
	return (
		!!fetching
			? <Preloader />
			: <Wrapper >
				<RenderItem items={ships} onClick={setShipByIdThunk} />
				{!!ship
					? <Ship ship={ship} />
					: <></>
				}
			</Wrapper>
	)
};

const mapStateToProps = (state) => {
	return {
		ships: state.shipsS.ships,
		ship: state.shipsS.ship,
		fetching: state.shipsS.fetching
	}
}

ShipsContainer.defaultProps = {
	ships: [],
	ship: {},
	fetching: true,
	setShipsThunk: () => { },
	setShipByIdThunk: () => { }
}

ShipsContainer.propTypes = {
	ships: PropTypes.array.isRequired,
	ship: PropTypes.object,
	fetching: PropTypes.bool.isRequired,
	setShipsThunk: PropTypes.func.isRequired,
	setShipByIdThunk: PropTypes.func.isRequired
};

export default compose(
	memo,
	connect(mapStateToProps, { setShipsThunk, setShipByIdThunk })
)(ShipsContainer);