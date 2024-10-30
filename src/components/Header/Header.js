import React from 'react'
import "./header.css";
export const Header = () => {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                    {/* {#image} */}
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
                {/* <li>SearchIcon</li>
                <li>NotificationsNoneIcon</li>
                <li>AccountBoxIcon</li>
                <li>ArrowDropDownIcon</li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}
