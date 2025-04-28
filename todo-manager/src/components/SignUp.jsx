import { Link } from "react-router-dom";


function SignUp() {
    return (
        <>
            <div style={{ width: '400px', height: '430px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: 'white' }}>
                <div style={{ height: '88px', fontSize: '34px', fontWeight: '700', margin: '2rem 0rem', color: '#5087B5' }}>
                    TODO MANAGER
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '400px', height: '500px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '270px', height: '40px', paddingLeft: '1rem' }} type="text" name="id" id="id" placeholder="아이디" />
                        <button style={{border: 'solid 1px #d9d9d9', width: '105px'}}>중복체크</button>
                    </div>
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem' }} type="text" name="nickName" id="nickName" placeholder="닉네임" />
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem' }} type="password" name="pwd" id="pwd" placeholder="비밀번호" />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '270px', height: '40px', paddingLeft: '1rem' }} type="text" name="email" id="email" placeholder="이메일" />
                        <button style={{border: 'solid 1px #d9d9d9', width: '105px'}}>인증</button>
                    </div>
                    <hr />
                    <Link to={'/'} ><button style={{ width: '400px', height: '60px', fontWeight: 'bold', backgroundColor: '#5087B5', color: '#FFFFFF' }}>회원 가입</button></Link>
                </div>
            </div>
        </>
    );
}
export default SignUp;