import React from 'react';
import BlackLogo from '../../assets/img/footer_blacklogo.svg';
import Korea from '../../assets/img/footer_korea.svg'

const Footer = () => {
  return (
    <div className="Footer_wrap">
      <img src={BlackLogo} alt="BlackLogo" className="logo" />
      <footer>
        <div className="footer_left">
          <div className="links">
            <a href="#">매장 안내</a>
            <p>|</p>
            <a href="#">공지사항</a>
            <p>|</p>
            <a href="#">FILA MEMBERSHIP</a>
            <p>|</p>
            <a href="#">단체 판매</a>
            <p>|</p>
            <a href="#">대리점 개설문의</a>
            <p>|</p>
            <a href="#">FILA 입찰 참여 안내</a>
          </div>
          <div className="company_info">
            <p>서울특별시 성북구 보문로 35 휠라코리아(주)  대표이사: 김지헌</p>
            <p>사업자등록번호: 716-81-01573 <span>사업자 정보 확인</span>  통신판매업신고번호: 제 2020-서울강동-0160 호</p>
            <p>개인정보 관리책임자: 이학우</p>
            <br />
            <br />
            <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단 복제를 금합니다.</p>
            <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내 <span>자세히 보기</span></p>
          </div>
          <div className="legal_links">
            <a href="#">통합회원 이용약관</a>
            <p>|</p>
            <a href="#">개인정보 처리방침</a>
            <p>|</p>
            <a href="#">제보센터</a>
          </div>
        </div>
        <div className="footer_right">
          <button className="cs_button">CS CENTER</button>
          <p className="cs_phone">1577-3472</p>
          <p className="cs_email">filaonline@fila.com</p>
          <p className="cs_hours">평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
          <div className="right_bottom">
            <div className="country">
              <img src={Korea} alt="Korea" />
              <span>KOREA</span>
            </div>
            <span>FAMILY SITE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
