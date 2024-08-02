import React from 'react'
import './AppDownload.css'
import google from '../../assest/googlePlay.jpg'
import apple from '../../assest/appleStore.jpg'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> RealM App</p>
        <div className='app-download-platforms'>
          <img className='app-img' id='img1' src={google} alt="" />
          <img className='app-img' id='img2' src={apple} alt="" />
        </div>

    </div>
  )
}

export default AppDownload