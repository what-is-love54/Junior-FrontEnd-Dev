import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Third = (props) => {
    const { t } = useTranslation();
    return <div><NavLink to='/people'><button>{t('Users')}</button></NavLink></div>
}

export default memo(Third)