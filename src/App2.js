/* import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import {Route, Routes, Link} from "react-router-dom";
import { getUser } from "./redux/ducks/user";
import i18n from './config/i18n';
import { LANGUAGES } from './constants'
import './App2.scss';
import SideBarNavigation from './components/SideBarNavigator/SideBarNavigator';
import TopBar from './components/TopBar/TopBar';
import GeneralPage from './components/GeneralPage/GeneralPage';
import CryptoPage from './components/Crypto/CryptoPage';
import LoansPage from './components/Loans/LoansPage';
import 'boxicons';

function App2() {
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

    const SideBarNavItem = ({ name, isLogo = false }) => {
      return (
        <a href="#" className={isLogo?"nav_logo":"nav_link"}>
        <span className={isLogo?"nav_logo-name":"nav_name"}>{name}</span>
      </a>  
      )
    }

    const SideBarNavigation = ({ isExpended }) => {
          return (
            <nav className="nav">
              <div>
                <SideBarNavItem name="Money Watcher" isLogo={true}/>
                <div className="nav_list">
                  <SideBarNavItem name="Home"/>
                  <SideBarNavItem name="General"/>
                  <SideBarNavItem name="Crypto"/>
                  <SideBarNavItem name="Loans"/>
              </div>
            </div>
            <a href="#" className="nav_link"><span className="nav_name">SignOut</span></a>
          </nav>
          )
    }

    const AppHeader = ({ userImage, title, handleToggleSideNav}) => {
      return(
        <React.Fragment>
          <div className="header_toggle" onClick={handleToggleSideNav}>{title}</div>
          <div className="header_img"><img src={userImage} alt=""/></div>
        </React.Fragment>
      )
    }

    const { t }  = i18n;
      return (
      <div className={`app ${toggleSideNav?'app-pd':''}`}>
        
            <div className={`l-navbar ${toggleSideNav ? "show" : ""}`} onClick={handleToggleSideNav} id="nav-bar">
              <SideBarNavigation isExpended={toggleSideNav}/> 
            </div>

            <div className="wrapper">

              <div className={`header ${toggleSideNav?'app-pd':''}`} id="header">
                <AppHeader
                  userImage={"https://i.imgur.com/hczKIze.jpg"}
                    title="Header"
                    handleToggleSideNav={handleToggleSideNav}/>
              </div>

              <div className="content">
                <Routes>
                  <Route path="/" element={<GeneralPage/>}/>
                  <Route path="/general" element={<GeneralPage/>}/>
                  <Route path="/crypto" element={<CryptoPage/>}/>
                  <Route path="/loans" element={<LoansPage/>}/>
                </Routes>
              </div>

            </div>
      </div>)
}

export default App2; */