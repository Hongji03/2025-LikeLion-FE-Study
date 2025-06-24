import React from 'react'
import Twitter from '../../assets/img/HomePage/ic_twitter.svg'
import Instagram from '../../assets/img/HomePage/ic_instagram.svg'
import Youtube from '../../assets/img/HomePage/ic_youtube.svg'
import Divider from '../../assets/img/HomePage/divider.svg'

const Footer = () => {
  return (
    <div className='Footer_wrap'>
      <div className="sns">
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
        </div>
        <img className='divider' src={Divider} alt="Divider" />
        <p>support@openui.design<br />+60 825 876<br />08:00 - 22:00 - Everyday</p>
        <img className='divider' src={Divider} alt="Divider" />
        <div className="hyperlink">
          <p>About</p>
          <p>Contact</p>
          <p>Blog</p>
        </div>
        <div className="footer">
          <p>Copyright© OpenUI All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
