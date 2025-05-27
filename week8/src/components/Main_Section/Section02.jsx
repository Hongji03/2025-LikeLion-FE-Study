import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import First from '../../assets/img/section2_first.png';
import Second from '../../assets/img/section2_second.png';
import Third from '../../assets/img/section2_third.png';
import Fourth from '../../assets/img/section2_fourth.png';
import Fifth from '../../assets/img/section2_fifth.png';
import Sixth from '../../assets/img/section2_sixth.png';
import Seventh from '../../assets/img/section2_seventh.png';
import Favo from '../../assets/img/section2_favo.svg';

function Section02() {
  const sliderRef = useRef();
  
  const products = [
    { imgSrc: First, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Second, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Third, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Fourth, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Fifth, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Sixth, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
    { imgSrc: Seventh, name: '<COLD WAVE> 그라데 로고 반팔 티셔츠', price: '49,000원', tags: ['공용', '컴포트핏', '라이프스타일'] },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <div className='Section02_wrap'>
      <h2>지금 많이 찾는 상품</h2>
      <div className="tags">
        <div className="tag_bold"># 냉감티셔츠</div>
        <div className="tag"># 에샤페</div>
        <div className="tag"># 반팔티셔츠</div>
        <div className="tag"># 페이토&샌들</div>
        <div className="tag"># 인터런</div>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <div className="product-card">
              <img src={product.imgSrc} alt={product.name} />
              <div className="product-info">
                <div className="product-tags">
                  {product.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
                <div className="product-name">
                  {product.name.split(' ')[0]}{' '}
                  {product.name.split(' ').slice(1).join(' ')}
                </div>
                <div className="last_row">
                  <div className="product-price">{product.price}</div>
                  <div className="favo">
                    <img src={Favo} alt="Favo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Section02
