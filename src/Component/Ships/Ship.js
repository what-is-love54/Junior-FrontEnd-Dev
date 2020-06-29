import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
	width:40%;
	display:flex;
	align-items:center;
`;

const DataWrapper = styled.div`
	width:100%;
	background-color:#303030;
	color:white;
	padding: 1rem;
  border: 1px solid #444;
	border-radius: 0.25rem;
	display:flex;
	.wrapper{
		width:70%;
		margin-left:10px;
	}
	.wrapper div{
		border-bottom:1px solid #444;
		padding: .25rem;
		box-sizing: border-box;
	}
	.photo{
		width: 30%;
    height: 30%;
    border-radius: 10px;
		vertical-align: middle;
    border-style: none;
		box-sizing: border-box;
	}
	.wrapper .name{
		text-align:center;
		font-size: 1.40625rem;
		font-weight: 500;
	}
	.wrapper .climate{
		border:none;
	}
`;


const Ship = ({ ship }) => {
	const { t } = useTranslation();
	return <>
		<Wrapper>
			<DataWrapper>
				<img src="https://i.pinimg.com/originals/83/9f/de/839fde98111597f23d65e4a1736c2c8c.jpg" alt="NoIMG" className="photo" />
				<div className="wrapper">
					<h4 className="name">{ship.name}</h4>
					<div className="diameter">{t("Cost")} {ship.cost_in_credits} </div>
					<div className="population">{t("Passengers")} {ship.passengers} </div>
					<div className="climate">{t("MaxSpeed")} {ship.max_atmosphering_speed} </div>
				</div>
			</DataWrapper>
		</Wrapper>
	</>
};

Ship.defaultProps = {
	ship: {}
}

Ship.propTypes = {
	ship: PropTypes.object.isRequired
};

export default memo(Ship);