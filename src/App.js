import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, Link} from "react-router-dom";
import { getUser } from "./redux/ducks/user";
import i18n from './config/i18n';
import { LANGUAGES } from './constants'
import './App.scss';
import GeneralPage from './components/GeneralPage/GeneralPage';
import CryptoPage from './components/Crypto/CryptoPage';
import LoansPage from './components/Loans/LoansPage';
import StockMarketPage from './components/StockMarket/StockMarketPage';

export const NavItems = [
  {
    id: 1,
    to: "/",
    name: 'home_title',
    icon: "bi-house",
    element: GeneralPage
  },
  {
    id: 2,
    to: "/",
    name: 'general_title',
    icon: "bi-gear",
    element: GeneralPage
  },
  {
    id: 3,
    to: "/stocks",
    name: 'stock_market_title',
    icon: "bi-graph-up",
    element: StockMarketPage
  },
  {
    id: 4,
    to: "/crypto",
    name: 'crypto_title',
    icon: "bi-currency-bitcoin",
    element: CryptoPage
  },
  {
    id: 5,
    to: "/loans",
    name: 'loans_title',
    icon: "bi-building",
    element: LoansPage
  }
]

function App() {
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

    const SideBarNavItem = ({ to, name, icon, isLogo = false, isExpended, selectedPage}) => {
      return (
        <Link to={to}>
          <span className={isLogo?"nav_logo":"nav_link"}>
            <i className={`${isLogo?"nav_logo-icon":"nav_icon"} ${icon}`}></i>     
            {isExpended ? <span className={isLogo?"nav_logo-name":"nav_name"}>{name}</span> : '' }
          </span>
        </Link>
      )
    }

    const SideBarNavigation = ({ isExpended = true }) => {
      const [selectedPage, setSelectedPage] = useState(1);
      const handleNavSelection = (id) => {
        setSelectedPage(id);
      }
      
      return (
        <nav className="nav">
          <div>
            <SideBarNavItem to="/" name="Money Watcher" icon="bi-circle-square" isLogo={true} isExpended={isExpended}/>
            <div className="nav_list">
              {NavItems.map((item, index) =>(
                <SideBarNavItem key={index} to={item.to} name={t(item.name)} icon={item.icon} isExpended={isExpended}/>
              ) )}
          </div>
        </div>
        <a href="#" className="nav_link"><i className="nav_icon bi-door-closed"></i><span className="nav_name">{t('sign_out')}</span></a>
      </nav>
      )
    }

    const AppHeader = ({ userImage, handleToggleSideNav, toggleSideNav}) => {
      return(
        <React.Fragment>
          <div className="header_toggle" onClick={handleToggleSideNav}>
              {toggleSideNav?<i className="bi bi-x-circle"></i>:<i className="bi bi-list"></i>}
          </div>
          <div className="header_img">
              <img src={userImage} alt=""/>
          </div>
        </React.Fragment>
      )
    }

    const { t }  = i18n;
    return (
    <div className='app'>
        <div className={`l-navbar ${toggleSideNav ? "show" : ""}`} id="nav-bar">
            <SideBarNavigation isExpended={toggleSideNav}/> 
        </div>  
        <div className="wrapper">
            <div className="header" id="header">
            <AppHeader
                userImage={"https://i.imgur.com/hczKIze.jpg"}
                title="Header"
                toggleSideNav={toggleSideNav}
                handleToggleSideNav={handleToggleSideNav}/>
            </div>
            <div className="content">
              <Routes>
                {NavItems.map((item, index) => (
                  <Route key={index} path={item.to} element={React.createElement(item.element)}/>))}
              </Routes>
            </div>
        </div>
    </div>)
}

export default App;