import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const WrapperMe = styled.div`
    margin-top:40px;
    width:100%;
    display:flex;
    justify-content:center;
`;
const MePhoto = styled.div`
    width:30%;
    text-align:end;
    img{
        width:250px;
    }
`;
const About = styled.div`
    width:70%;
    margin-left:30px;
    .name{
        font-size:28px;
        margin-bottom:20px;
    }
`;

const Me = props => {
    const { t } = useTranslation();
    return <WrapperMe>
        <MePhoto>
            <img src={require('../../photos/MeAva.jpg')} alt="NoImg"/>
        </MePhoto>
        <About>
            <div className="name">VladHryhoriv</div>
            <div className="link">{t('Link')}: <a href="https://github.com/VladHryhoriv">https://github.com/VladHryhoriv</a></div>
        </About>
    </WrapperMe>
};


export default Me;