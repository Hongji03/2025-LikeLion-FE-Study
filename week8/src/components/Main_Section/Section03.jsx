import React from 'react'
import Custom from '../../assets/img/section3_customStudio.png'
import Pertex from '../../assets/img/section3_pertexLife.png'

const Section03 = () => {
  return (
    <div className='Section03_wrap'>
      <h2>기획전</h2>
      <div className="offer_list">
        <div className="offer">
          <img src={Custom} alt="Custom" />
          <p>FILA CUSTOM STUDIO</p>
          <button>자세히 보기</button>
        </div>
        <div className="offer">
          <img src={Pertex} alt="Pertex" />
          <p>Pertex Life</p>
          <button>자세히 보기</button>
        </div>
      </div>
    </div>
  )
}

export default Section03
