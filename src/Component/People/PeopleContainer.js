import React, { memo } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { SetPeopleThunk, setHumanThunk } from '../redux/thunk/peopleThunk';
import { useEffect } from 'react';
import Human from './Human';
import RenderItem from '../Common/RenderItem/RenderItem';

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

const WrapperPreload = styled.div`
    display:flex;
`;

const Wrapper = styled.div`
	width:100%;
	display: flex;
  justify-content: space-between;
`;

const PeopleContainer = ({ people, human, home, fetching, ...props }) => {
	useEffect(() => {
		props.SetPeopleThunk()
	}, [people])
	return (
		!!fetching
			? <WrapperPreload><Preloader />Loading</WrapperPreload>
			: <Wrapper >
				<RenderItem items={people} onClick={props.setHumanThunk} />
				{human
					? <Human human={human} home={home} />
					: <></>
				}
			</Wrapper>
	)
}

const mapStateToProps = ({ people, ...state }) => {
	return {
		people: people.people,
		human: people.human,
		home: people.home,
		fetching: people.fetching
	}
}

PeopleContainer.defaultProps = {
	people: [],
	home: {},
	fetching: true,
	human: {},
	SetPeopleThunk: () => { },
	setHumanThunk: () => { }
}

PeopleContainer.propTypes = {
	people: PropTypes.arrayOf(PropTypes.object).isRequired,
	fetching: PropTypes.bool.isRequired,
	human: PropTypes.object.isRequired,
	home: PropTypes.object.isRequired,
	SetPeopleThunk: PropTypes.func.isRequired,
	setHumanThunk: PropTypes.func.isRequired
}

export default compose(
	memo,
	connect(mapStateToProps, { SetPeopleThunk, setHumanThunk })
)(PeopleContainer)