import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterWrapper = styled.footer`
    display: flex;
	flex-direction: column;
	justify-content: top;
	background: #454545;
	flex: 0 0 auto;
	align-items: center;
    padding: 1.5% 0;
`;

const Link = styled.a`
    color:white;
    text-decoration:none;
`;

const Footer = () => {
    const { t } = useTranslation();
    return (
        <FooterWrapper>
            <Link href="https://uk.wikipedia.org/wiki/GitHub">{t('Foot')}</Link>
        </FooterWrapper>
    );
};


export default Footer;