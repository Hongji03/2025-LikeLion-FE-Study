import React from 'react'
import First from '../../assets/img/section4_first.png'
import Second from '../../assets/img/section4_second.png'
import Third from '../../assets/img/section4_third.png'
import Fourth from '../../assets/img/section4_fourth.png'
import Fifth from '../../assets/img/section4_fifth.png'
import Sixth from '../../assets/img/section4_sixth.jpg'
import Seventh from '../../assets/img/section4_seventh.jpg'
import Eighth from '../../assets/img/section4_eighth.jpg'
import Nineth from '../../assets/img/section4_nineth.png'
import Tenth from '../../assets/img/section4_tenth.png'

const Section04 = () => {
  return (
    <div className='Section04_wrap'>
      <div className="fila">@fila_korea</div>
      <div className="photos">
        <img src={First} alt="First" />
        <img src={Second} alt="Second" />
        <img src={Third} alt="Third" />
        <img src={Fourth} alt="Fourth" />
        <img src={Fifth} alt="Fifth" />
      </div>
      <div className="photos">
        <img src={Sixth} alt="Sixth" />
        <img src={Seventh} alt="Seventh" />
        <img src={Eighth} alt="Eighth" />
        <img src={Nineth} alt="Nineth" />
        <img src={Tenth} alt="Tenth" />
      </div>
    </div>
  )
}

export default Section04
