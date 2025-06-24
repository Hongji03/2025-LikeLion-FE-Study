import React, { useState } from 'react'
import Header from '../Section/Header'
import BannerNum from '../../assets/img/HomePage/banner_num.svg'
import Divider from '../../assets/img/HomePage/divider.svg'
import PRADA from '../../assets/img/HomePage/brand_prada.svg'
import BURBERRY from '../../assets/img/HomePage/brand_burberry.png'
import BOSS from '../../assets/img/HomePage/brand_boss.png'
import CARTIER from '../../assets/img/HomePage/brand_catier.svg'
import GUCCI from '../../assets/img/HomePage/brand_gucci.svg'
import TIFFNCO from '../../assets/img/HomePage/brand_tiffanyNCo.svg'
import OctoberCollection from '../../assets/img/HomePage/collection_october.png'
import AutumnCollection from '../../assets/img/HomePage/collection_autumn.png'
import VideoCollection from '../../assets/img/HomePage/collection_video.png'
import Logo from '../../assets/img/Header/ic_logo.svg'
import DFirst from '../../assets/img/HomePage/division_first.svg'
import DSecond from '../../assets/img/HomePage/division_second.svg'
import DThird from '../../assets/img/HomePage/division_third.svg'
import DFourth from '../../assets/img/HomePage/division_fourth.svg'
import DTornado from '../../assets/img/HomePage/division_tornado.svg'
import BinInsta from '../../assets/img/HomePage/ic_instagram_bin.svg'
import FollowFirst from '../../assets/img/HomePage/follow_first.png'
import FollowSecond from '../../assets/img/HomePage/follow_second.png'
import FollowThird from '../../assets/img/HomePage/follow_third.png'
import FollowFourth from '../../assets/img/HomePage/follow_fourth.png'
import Footer from '../Section/Footer'

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabList = ['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'];

  const products = [
    {
      id: 1,
      name: '21WN reversible angora cardigan',
      price: '$120',
      category: 'Apparel',
      img: require('../../assets/img/HomePage/product1.png'),
    },
    {
      id: 2,
      name: '21WN reversible angora cardigan',
      price: '$120',
      category: 'Apparel',
      img: require('../../assets/img/HomePage/product2.png'),
    },
    {
      id: 3,
      name: '21WN reversible angora cardigan',
      price: '$120',
      category: 'Tshirt',
      img: require('../../assets/img/HomePage/product3.png'),
    },
    {
      id: 4,
      name: 'Oblong bag',
      price: '$120',
      category: 'Bag',
      img: require('../../assets/img/HomePage/product4.png'),
    },
  ];
  const filteredProducts =
  activeTab === 'All' ? products : products.filter(p => p.category === activeTab);

  return (
    <div className='HomePage_wrap'>
      <div className="header">
        <Header />
      </div>
      <div className="banner">
        <h1>LUXURY<br />FASHION<br />& ACCESSORIES</h1>
        <button>EXPLORE COLLECTION</button>
        <div className="bottom_num">
          <img src={BannerNum} alt="BannerNum" />
        </div>
      </div>
      <div className="new_arrival">
        <h3>NEW ARRIVAL</h3>
        <img src={Divider} alt="Divider" />
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
        <div className="product_grid">
          {filteredProducts.map(product => (
            <div className="product_card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <p className="product_name">{product.name}</p>
              <p className="product_price">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="explore_more">Explore More →</div>
      </div>
      <div className="brands">
        <img className='divider' src={Divider} alt="Divider" />
        <div className="brands_grid">
          <img src={PRADA} alt="PRADA" />
          <img src={BURBERRY} alt="BURBERRY" />
          <img src={BOSS} alt="BOSS" />
          <img src={CARTIER} alt="CARTIER" />
          <img src={GUCCI} alt="GUCCI" />
          <img src={TIFFNCO} alt="TIFFANY & CO." />
        </div>
        <img className='divider' src={Divider} alt="Divider" />
      </div>
      <div className="collections">
        <h3>COLLECTIONS</h3>
        <img className='full' src={OctoberCollection} alt="OctoberCollection" />
        <img className='autumn' src={AutumnCollection} alt="AutumnCollection" />
        <img className='full' src={VideoCollection} alt="VideoCollection" />
      </div>
      <div className="justforyou">
        <h3>JUST FOR YOU</h3>
        <img className='divider' src={Divider} alt="Divider" />
        <slider>

        </slider>
      </div>
      <div className="trending">
        <h3>@TRENDING</h3>
        <div className="hashtags_top">
          <div className="hashtag">#2021</div>
          <div className="hashtag">#spring</div>
          <div className="hashtag">#collection</div>
          <div className="hashtag">#fall</div>
        </div>
        <div className="hashtags_bottom">
          <div className="hashtag">#dress</div>
          <div className="hashtag">#autumncollection</div>
          <div className="hashtag">#openfashion</div>
        </div>
      </div>
      <div className="brand_info">
        <img className='logo' src={Logo} alt="Logo" />
        <p>Making a luxurious lifestyle accessible <br />for a generous group of women is our <br />daily drive.</p>
        <img className='divider' src={Divider} alt="Divider" />
        <div className="four_division">
          <div className="explain">
            <img src={DFirst} alt="DFirst" />
            <p>Fast shipping. Free on <br />orders over $25.</p>
          </div>
          <div className="explain">
            <img src={DSecond} alt="DSecond" />
            <p>Sustainable process <br />from start to finish.</p>
          </div>
          <div className="explain">
            <img src={DThird} alt="DThird" />
            <p>Unique designs <br />and high-quality materials.</p>
          </div>
          <div className="explain">
            <img src={DFourth} alt="DFourth" />
            <p>Fast shipping. <br />Free on orders over $25.</p>
          </div>
        </div>
        <img className='tornado' src={DTornado} alt="DTornado" />
      </div>
      <div className="followus">
        <h3>FOLLOW US</h3>
        <img className='bininsta' src={BinInsta} alt="BinInsta" />
        <div className="people">
          <div className="person">
            <img src={FollowFirst} alt="FollowFirst" />
            <div className="name">@mia</div>
          </div>
          <div className="person">
            <img src={FollowSecond} alt="FollowSecond" />
            <div className="name">@_jihyn</div>
          </div>
          <div className="person">
            <img src={FollowThird} alt="FollowThird" />
            <div className="name">@mia</div>
          </div>
          <div className="person">
            <img src={FollowFourth} alt="FollowFourth" />
            <div className="name">@_jihyn</div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default HomePage
