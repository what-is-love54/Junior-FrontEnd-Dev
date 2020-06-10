import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    border-bottom:2px solid gray;
    align-items:center;
    padding:2%;
`;

const Item = styled.button`
    border:none;
    font-size:20px;
    background:white;
    cursor: pointer;
    background:rgba(0,0,0,0);
    transition:.5s;
    &:hover{
        color:white;
    }
`;

const WrapperLink = styled.div`
    width:50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition:.2s;
    a{
        width:25%;
        text-align:center;
    }
`;

const NameOfSite = styled.div`
    font-size:30px;
    width:50%;
    text-align:start;
`;
const Language = styled.select`
    font-size: 13px;
    font-weight: 700;
    font-family: 'Lato-Regular','Lato-Medium';
    border:none;
    background: rgba(0, 0, 0, 0);
`;

const Header = props => {
    const handleClick = (lang) => {
        i18next.changeLanguage(lang)
    }
    const { t } = useTranslation();
    return (
        <HeaderWrapper>
            <NameOfSite>Git Users</NameOfSite>
            <WrapperLink>
                <NavLink to="/git"><Item>{t('Git')}</Item></NavLink>
                <NavLink to="/users"><Item>{t('Users')}</Item></NavLink>
                <NavLink to="/me"><Item>{t('Me')}</Item></NavLink>
                <Language onChange={(e) => {
                        handleClick(e.target.value)
                    }} defaultValue = 'uk'>
                    <option value='ru' onClick={() => handleClick('ru')}>RU</option>
                    <option value='uk' onClick={() => handleClick('uk')}>UK</option>
                    <option value='en' onClick={() => handleClick('en')}>EN</option>
                </Language>
            </WrapperLink>
        </HeaderWrapper>
    );
};

export default Header;