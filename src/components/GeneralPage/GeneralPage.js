import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import i18n from '../../config/i18n';

function GeneralPage() {
    const generalSetting = useSelector((state) => state.generalSetting);
    const dispatch = useDispatch();

    useEffect(() => {
    },[]);

    const { t }  = i18n;

    return (<div className="general-tab">
               <h1>{t('general_title')}</h1>
            </div>)
}

export default GeneralPage;