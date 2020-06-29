import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
	display:flex;
	width:100%;
	justify-content:start;
	align-items:center;
	background-color:#303030;
	border:1px solid #444;
	padding:2%;
	border-radius: .25rem;
	.details{
		width:25%;
		margin-left:20px;
	}
	.photo img {
		width:200px;
		height:125px;
		border-radius:.5rem;
	}
	.details .name{
		font-size:26px;
		color:white;
		width:100%;
		text-align:center;
	}
	.details .item{
		border-bottom:1px solid #444;
		padding: .25rem;
		box-sizing: border-box;
		color:white;
	}
	.details .diameter{
		border:none;
	}
`;


const RandomPlanetContainer = ({ planet }) => {
	const { t } = useTranslation()
	return (
		<Wrapper>
			<div className='photo'>
				<img src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/planet_1280p.jpg?itok=07tueTM9' alt="NoImg" />
			</div>
			<div className='details'>
				<div className='name'>{planet.name}</div>
				<div className='population item'>{t("Population")} {planet.population}</div>
				<div className='rotation item'>{t("Rotation")} {planet.rotation_period}</div>
				<div className='diameter item'>{t("Diameter")} {planet.diameter}</div>
			</div>
		</Wrapper>
	);
};

RandomPlanetContainer.defaultProps = {
	planet: {
		name: "Earth",
		population: 75000000,
		rotation_period: 1,
		diameter: 12742,
	},
	fetching: true
}

RandomPlanetContainer.propTypes = {
	planet: PropTypes.object,
	fetching: PropTypes.bool.isRequired
};

export default memo(RandomPlanetContainer);