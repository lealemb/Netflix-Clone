import React from 'react'
import "./header.css";
import NetflixLogo from '../../assets/images/Netflix1Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                    <li><img src={NetflixLogo} alt="NetflixLogo" width="100" /></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShow</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Brows by Language</li>
                </ul>
            </div>
            <div className='header-right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
