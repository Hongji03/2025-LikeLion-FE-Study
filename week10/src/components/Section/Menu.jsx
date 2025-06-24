import React, { useState } from 'react'
import CloseBtn from '../../assets/img/Menu/ic_close.svg'
import Toggle from '../../assets/img/Menu/ic_toggle.svg'
import Call from '../../assets/img/Menu/ic_call.svg'
import Location from '../../assets/img/Menu/ic_location.svg'
import Twitter from '../../assets/img/HomePage/ic_twitter.svg'
import Instagram from '../../assets/img/HomePage/ic_instagram.svg'
import Youtube from '../../assets/img/HomePage/ic_youtube.svg'
import Divider from '../../assets/img/HomePage/divider.svg'

const Menu = ({ onClose }) => {
    const tabList = ['WOMEN', 'MAN', 'KIDS'];
    const [activeTab, setActiveTab] = useState('WOMEN');

    return (
        <div className="Menu_wrap">
            <div className="menu_content">
                <div className="menu_top">
                    <div className="close_btn">
                        <img src={CloseBtn} alt="CloseBtn" onClick={onClose} />
                    </div>
                </div>
                <div className="tab_menu">
                    {tabList.map(tab => (
                        <div
                            key={tab}
                            className={`tab_item ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                            {activeTab === tab && <div className="underline" />}
                        </div>
                    ))}
                </div>
                <ul className="menu_list">
                    {['New', 'Apparel', 'Bag', 'Shoes', 'Beauty', 'Accessories'].map(item => (
                        <li className="menu_item" key={item}>
                            {item}
                            <img className='toggle' src={Toggle} alt="Toggle" />
                        </li>
                    ))}
                </ul>
                <div className="menu_contact">
                    <div className='contact'>
                        <div className="icon">
                            <img src={Call} alt="Call" />
                            <div className="text">(786) 713-8616</div>
                        </div>
                    </div>
                    <div className='contact'>
                        <div className="icon">
                            <img src={Location} alt="Location" />
                            <div className="text">Store locator</div>
                        </div>
                    </div>
                </div>
                <img className='divider' src={Divider} alt="Divider" />
                <div className="sns">
                    <img src={Twitter} alt="Twitter" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Youtube} alt="Youtube" />
                </div>
            </div>
        </div>
    )
}

export default Menu
