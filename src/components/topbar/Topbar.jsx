import React from 'react';
import './Topbar.css';
import { NotificationsNone,Language,Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="left">
                <span className="logo">TLC Admin</span>
            </div>
            <div className="right">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profil user" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}

export default Topbar