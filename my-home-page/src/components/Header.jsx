import "../assets/css/common.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div class="header">
            <img src="https://khedu.co.kr/resources/images/main/logo.svg" alt="kh_logo" width="150" />
            <div></div>
            {/* <!-- 로그인 전 보여질 화면 --> */}
            <div class="login-form">
                <Link to="/join">회원가입</Link> |
                <Link to="#" data-bs-toggle="modal" data-bs-target="#loginModal">로그인</Link>
            </div>
    
            {/* <!-- 로그인 후 보여질 화면 --> */}
            {/* <!--
            <div>
                <label>홍길동님 환영합니다.</label> 
                <Link to="">마이페이지</Link>
                <Link to="">로그아웃</Link>        
            </div>
            --> */}
        </div>
        <hr/>
        <nav class="container text-center menu-bar">
            <div class="row">
                <Link to="/" class="active col-3">HOME</Link>
                <Link to="/" class="col">공지사항</Link>
                <Link to="/boards" class="col">자유게시판</Link>
                <Link to="/" class="col">사진게시판</Link>
            </div>
        </nav>
        </>
    );
}
export default Header;