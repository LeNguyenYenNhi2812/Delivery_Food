import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'
const appDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience download. <br/>TOMATO APP </p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />

        </div>
    </div>
  )
}

export default appDownload


