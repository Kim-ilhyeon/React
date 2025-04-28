import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function Login() {
    return (
        <>
            <div style={{width: '400px', height: '430px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: 'white'}}>
                <div style={{height: '88px', fontSize: '34px', fontWeight: '700', margin: '2rem 0rem', color: '#5087B5'}}>
                    TODO <br /> MANAGER
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '400px', height: '223px', justifyContent: 'space-between'}}>
                    <input style={{border: 'solid 1px #d9d9d9' ,borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem'}} type="text" name="id" id="id" placeholder="아이디" />
                    <input style={{border: 'solid 1px #d9d9d9' ,borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem'}} type="password" name="pwd" id="pwd" placeholder="비밀번호" />
                    
                    <Link to={'/todoList'} ><button style={{width: '400px', height: '60px', fontWeight: 'bold', backgroundColor: '#5087B5', color: '#FFFFFF', marginTop: '0.5rem'}}>로그인</button></Link>
                    <Link style={{marginTop: '1rem'}} to={'/signUp'}>회원가입</Link>
                </div>
            </div>
        </>
    );
}
export default Login;