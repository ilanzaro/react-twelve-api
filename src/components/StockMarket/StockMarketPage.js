import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import i18n from '../../config/i18n';

function StockMarketPage() {
    const stockMarket = useSelector((state) => state.stockMarket);
    const dispatch = useDispatch();

    useEffect(() => {
    },[]);

    const { t }  = i18n;

    return (/* stockMarket.isLoading?<div>LOADINGGGGGG.......</div>: */
            <div>
                <h1>{t('stock_market_title')}</h1>
            </div>)
}
export default StockMarketPage;