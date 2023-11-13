import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import i18n from '../../config/i18n';
import { getUser } from "../../redux/ducks/user";


function TopBar() {
    const generalSetting = useSelector((state) => state.generalSetting);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
    },[]);

    const { t }  = i18n;

    return (<div className='top-bar'>
                <h1>{user.firstName} {user.lastName}'s Top Bar</h1>
                
            </div>)
}

export default TopBar;