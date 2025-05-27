import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import First from '../../assets/img/section1_first.png';
import Second from '../../assets/img/section1_second.png';
import Third from '../../assets/img/section1_third.png';
import Fourth from '../../assets/img/section1_fourth.png';
import Fifth from '../../assets/img/section1_fifth.png';
import LeftArrowIcon from '../../assets/img/section1_leftarrow.svg';
import RightArrowIcon from '../../assets/img/section1_rightarrow.svg';

function Section01() {
  const sliderRef = useRef();
  const images = [First, Second, Third, Fourth, Fifth];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentIndex(next),
  };

  return (
    <div className="Section01_wrap">
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="slide">
            <img src={img} alt={`Slide ${idx + 1}`} />
            <div className="banner-text">
              <h1>24 NEW 인터런</h1>
              <button>자세히 보기</button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="custom-nav">
        <div className="nav-bar">
          {images.map((_, idx) => (
            <div key={idx} className={`bar-segment ${currentIndex === idx ? 'active' : ''}`} />
          ))}
        </div>
        <div className="arrow-group">
          <img
            src={LeftArrowIcon}
            alt="Previous"
            className="arrow-icon"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <img
            src={RightArrowIcon}
            alt="Next"
            className="arrow-icon"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default Section01;
