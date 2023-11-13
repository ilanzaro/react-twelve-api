/* import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import {Route, Routes} from "react-router-dom";
import { getUser } from "./redux/ducks/user";
import i18n from './config/i18n';
import { LANGUAGES } from './constants'
import './App.scss';
import SideBarNavigation from './components/SideBarNavigator/SideBarNavigator';
import TopBar from './components/TopBar/TopBar';
import GeneralPage from './components/GeneralPage/GeneralPage';
import CryptoPage from './components/Crypto/CryptoPage';
import LoansPage from './components/Loans/LoansPage';

function App3() {
    const [toggleSideNav, setToggleSideNav] = useState(true);
    const handleToggleSideNav = () => {
      setToggleSideNav(!toggleSideNav);
    }

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      document.body.dir = LANGUAGES.find(l => l.code === navigator.language).dir|| 'ltr';
      i18n.changeLanguage(navigator.language)
      dispatch(getUser())
    },[navigator]);

    const { t }  = i18n;

    return (user.isLoading?<div>LOADINGGGGGG.......</div>:
      <div className="wrapper">
        <div id="sidebar" className={`sidebar ${toggleSideNav ? "active" : ""}`} >
          <div className="sidebar-header" >
            <button type="button" onClick={handleToggleSideNav}>Click counter</button>
          </div>
          <SideBarNavigation isExpended={toggleSideNav}/>
        </div>
        <div id="content" className="content">
          <TopBar/>
          <Routes>
            <Route path="/" element={<GeneralPage/>}/>
            <Route path="/general" element={<GeneralPage/>}/>
            <Route path="/crypto" element={<CryptoPage/>}/>
            <Route path="/loans" element={<LoansPage/>}/>
          </Routes>
        </div>
      </div>)
}

export default App3; */