import React from "react";
import "./CSS/Footer.css";

class Footer extends React.Component{
    render(){
        function notice(){
            window.location.href="/api/notice";
        }
        function customer(){
            window.location.href="/api/cutomer_service";
        }
        return(
            <div className="app-footer">
                <div className="left">
                    <div onClick={customer} className="bold1">고객센터</div>
                    <div onClick={notice} className="notice">공지사항</div>
                    <div className="tel">Tel. 1234-0000</div>
                    <p>운영시간 : 09:00~18:00</p>
                    <p>평일 : 전체 문의 상담 가능</p>
                </div>
                <div className="right">
                    <p className="bold">(주)MUSE 사업자정보</p>
                    <div className="con">대표이사 : 000</div>
                    <p>개인정보보호책임자 : 000</p>
                    <p>사업자등록번호 : 123-455-677</p>
                    <p>EMAIL : 0000@hanbat.ac.kr</p>
                    <p>주소 : 대전광역시 유성구 동서대로 125</p>
                </div>
            </div>
        )
    }
}
export default Footer;