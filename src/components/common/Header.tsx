import { url } from 'inspector'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <div className="left">
          <div className="logo" id='left-text'>
            <img src='images/logo.svg' />
          </div>
          <div className="mobile-logo" id='left-text'>
            <img src='images/mobile_logo.svg' />
          </div>
        </div>
        <div className="right">
          <img className='get-the-app-btn' src='/images/get_app_btn.svg' />
          <span className='get-the-app-text'>Get the app</span>
        </div>
      </header>
  )
}

export default Header