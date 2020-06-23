import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const Button = styled.button`
    border: none;
    border-radius: 3px;
    background:#222222;
    font-size: 18px;
    padding: 5%;
    color:#00BC8C;
    cursor: pointer;
    transform:.2s;
    :hover{
        background:#3C4043;
        opacity:.5;
    }
`;
const Wrapper = styled.div`
    width:100%;
`;

const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
    a{

        text-decoration:none;
    }
    .logo{
        color:white;
        font-size:2rem;
        cursor: pointer;
        transform:.2s;
    }
    .logo:hover{
        color:#00BC8C;
    }
`;

const Language = styled.select`
    font-size: 13px;
    font-weight: 700;
    font-family: 'Lato-Regular','Lato-Medium';
    border:none;
    background: rgba(0, 0, 0, 0);
`;

const Navbar = (props) => {
    const handleClick = (lang) => {
        i18next.changeLanguage(lang)
    }
    const { t } = useTranslation();
    return (
        <Wrapper>
            <WrapperButton>
                <NavLink to="/people"><div className="logo">Star DB</div></NavLink>
                <NavLink to='/people' ><Button>{t('Users')}</Button></NavLink>
                <NavLink to='/second' ><Button>{t('Planets')}</Button></NavLink>
                <NavLink to='/third' ><Button>{t('Ships')}</Button></NavLink>
                <Language onChange={(e) => {
                        handleClick(e.target.value)
                    }} defaultValue = 'uk'>
                    <option value='ru' onClick={() => handleClick('ru')}>RU</option>
                    <option value='uk' onClick={() => handleClick('uk')}>UK</option>
                    <option value='en' onClick={() => handleClick('en')}>EN</option>
                </Language>
            </WrapperButton>
        </Wrapper>
    )
}

export default memo(Navbar)