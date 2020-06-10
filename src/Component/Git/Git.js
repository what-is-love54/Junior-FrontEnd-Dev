import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StartWrapper = styled.div`
    display:flex;
    flex-direction:row;
    background-image:url(../photos/download.png);
    min-height:100%;
`;
const Text = styled.div`
    margin:30px 0;
    font-size:20px;
    text-decoration:none;
    color:black;
`;
const Photo = styled.div`
    width:100%;
    margin:30px;
    img{
        width:250px;
        height:250px;
    }
`;

const Git = () => {
    const { t } = useTranslation();
    return (
        <StartWrapper>
            <Photo>
                <img src={require('../../photos/git.png')}alt="NoImg"/>
            </Photo>
            <Text>
               {t('AboutGit')}
            </Text>
        </StartWrapper>
    );
};


export default Git;