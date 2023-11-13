import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import i18n from '../../config/i18n';
import AnnuityCalculator from './AnnuityCalculator'

function LoansPage() {
    const loanes = useSelector((state) => state.loanes);
    const dispatch = useDispatch();

    useEffect(() => {
    },[]);

    const LoanComponent = () => {
      
      return (<div className="loan-component">
        <AnnuityCalculator/>
        loan comonenet
      </div>)
    }
    const { t }  = i18n;

    return (<div>
      <h1>{t('loans_title')}</h1>
      <LoanComponent/>
</div>)
}

export default LoansPage;