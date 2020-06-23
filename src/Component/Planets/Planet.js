import React, { memo } from 'react';
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


const Planet = ({planet, ...props }) => {
	const { t } = useTranslation();
	return <>
		<Wrapper>
			<DataWrapper>
				<img src="https://zoko.com.ua/sites/default/files/styles/s650x650/public/categories/kosmos.jpg?itok=-oWH-Y0k" alt="NoIMG" className="photo"/>
				<div className="wrapper">
					<h4 className="name">{planet.name}</h4>
					<div className="diameter">{t("Diameter")} {planet.diameter} km</div>
					<div className="population">{t("Population")} {planet.population} </div>
					<div className="climate">{t("Climate")} {planet.climate} </div>
				</div>
			</DataWrapper>
		</Wrapper>
	</>
};



export default memo(Planet);