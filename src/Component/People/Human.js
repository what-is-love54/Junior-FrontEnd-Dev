import React, { memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const WrapperHuman = styled.div`
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
	.photo{
		width: 30%;
    height: 35%;
    border-radius: 10px;
		vertical-align: middle;
    border-style: none;
		box-sizing: border-box;
	}
	.wrapper div{
		border-bottom:1px solid #444;
		padding: .25rem;
		box-sizing: border-box;
	}
	.wrapper .home{
		border:none;
	}
	.wrapper .name{
		text-align:center;
		font-size: 1.40625rem;
		font-weight: 500;
	}
`;


const Human = ({ home, human, ...props }) => {
	const { t } = useTranslation();
	return <>
		<WrapperHuman>
			<DataWrapper>
				<img src="https://i.stack.imgur.com/l60Hf.png" alt="NoIMG" className="photo" />
				<div className="wrapper">
					<h4 className="name">{human.name}</h4>
					<div className="gender">{t("Gender")} {human.gender} </div>
					<div className="hair">{t("HairColor")} {human.hair_color} </div>
					<div className="height">{t("Height")} {human.height} </div>
					<div className="home">{t("Home")} {home} </div>
				</div>
			</DataWrapper>
		</WrapperHuman>
	</>
};



export default memo(Human);