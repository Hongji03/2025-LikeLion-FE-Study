import React from 'react'
import Img01 from '../../assets/img/section04_1.png'
import Img02 from '../../assets/img/section04_2.png'
import Img03 from '../../assets/img/section04_3.png'
import Img04 from '../../assets/img/section04_4.png'

const Section05 = () => {
    return (
        <div className='Section05_wrap'>
            <div className="header">
                <h3>LIKELION MEDIA</h3>
                <h1>언록 속의 LIKELION</h1>
            </div>
            <div className="main">
                <div>
                    <img src={Img01} alt="Img01" />
                    <div>
                        <h3>“비즈니스 문제 해커톤으로 해결”…멋쟁이사자처럼, 기업 해커톤 출시</h3>
                        <div className="text">정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</div>
                        <div className="info">머니S | 2023.10.31</div>
                    </div>
                </div>
                <div>
                    <img src={Img02} alt="Img02" />
                    <div>
                        <h3>P2E ‘실타래‘, 편의성 강화해 진입 장벽 낮춘다</h3>
                        <div className="text">멋쟁이사자처럼은 메타콩즈뿐 아니라 여러 갈래의 대체불가토큰(NFT) 사업을 펼쳤다. 멋쟁이사자처럼 산하 블록...</div>
                        <div className="info">더별 | 2023.01.27</div>
                    </div>
                </div>
                <div>
                    <img src={Img03} alt="Img03" />
                    <div>
                        <h3>콘크릿, 글로벌 아티스트 톰 삭스와 이태원 전역에서 보물찾기 진행</h3>
                        <div className="text">현대카드와 멋쟁이사자처럼의 합작법인 모던라이언이 운영하는 NFT 마켓플레이스 ‘KONKRIT(이하 콘크릿)’이...</div>
                        <div className="info">경향게임스 | 2023.09.13</div>
                    </div>
                </div>
                <div>
                    <img src={Img04} alt="Img04" />
                    <div>
                        <h3>멋쟁이사자처럼, 아트 NFT·실물 연계 ‘쿼드해시‘ 프로젝트 띄운다</h3>
                        <div className="text">멋쟁이사자처럼이 아트NFT와 실물을 연계한 대체불가토큰(NFT) 프로젝트 쿼드해시를 추진한다.</div>
                        <div className="info">디지털투데이 | 2023.09.27</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section05