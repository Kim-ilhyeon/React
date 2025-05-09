import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendEmail, verifyEmail, checkId, registUser } from "../services/apiService";
import { toast } from "react-toastify";
import { errorAlert, successAlert } from "../services/toasUtils";


function SignUp() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [id, setId] = useState("");
    const [nickname, setNickname] = useState("");
    const [pwd, setPwd] = useState("");

    const navigate = useNavigate(); // useNavigate 훅 사용

    const sendHandler = async () => {
        // alert(`입력된 이메일 ::  ${email}`);
        const result = await sendEmail(email);
        console.log(result);
    }
    
    const codeHandler = async () => {
        // alert(`입력된 이메일 ::  ${email}`);
        // alert(`입력된 코드 ::  ${code}`);
        const result = await verifyEmail(code, email);
        console.log(result);
        if (result == 'success') {
            // e.target.disabled = false;
            setIsDisabled(false);
        }

    }

    const checkIdHandler = async () => {
        // alert(`입력된 아이디 :: ${id}`);
        const result = await checkId(id);
        console.log(result);
        if (result === 'NNNNY') {
            // alert("사용 가능한 아이디 입니다.");
            // toast("사용 가능한 아이디 입니다.", { position: 'top-center' });
            successAlert("사용 가능한 아이디 입니다.");
        } else if (result == 'NNNNN') {
            // alert("중복된 아이디 입니다.");
            // toast("중복된 아이디 입니다.", { position: 'bottom-center' });
            errorAlert("중복된 아이디 입니다.");
        }
    }

    const signUpHandler = async () => {
        // 입력된 정보를 담아 회원가입 요청
        const user = {
            userId: id,
            userPwd: pwd,
            nickname: nickname,
            email: email
        };
        // const result = await registUser(id, pwd, nickname, email);
        const result = await registUser(user);
        console.log(result);
        if (result === 'success') {
            alert("먼저 나오나 테스트");
            successAlert("회원가입 성공!!.");
            // 로그인 페이지로 이동!!
            // navigate('/');
        } else if (result === 'failed') {
            errorAlert("회원가입 실패ㅠㅜ.");
        }
    }

    return (
        <>
            <div style={{ width: '400px', height: '430px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: 'white' }}>
                <div style={{ height: '88px', fontSize: '34px', fontWeight: '700', margin: '2rem 0rem', color: '#5087B5' }}>
                    TODO MANAGER
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '400px', height: '500px', justifyContent: 'space-between', margin: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '270px', height: '40px', paddingLeft: '1rem' }} 
                                    type="text" name="id" id="id" placeholder="아이디" onChange={e=>setId(e.target.value)} />
                        <button style={{ border: 'solid 1px #d9d9d9', width: '105px' }} onClick={checkIdHandler}>중복체크</button>
                    </div>
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '380px', height: '40px', paddingLeft: '1rem' }} 
                                    type="text" name="nickname" id="nickname" placeholder="닉네임" onChange={(e)=>setNickname(e.target.value)} />
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '380px', height: '40px', paddingLeft: '1rem' }} 
                                    type="password" name="pwd" id="pwd" placeholder="비밀번호" onChange={(e)=> setPwd(e.target.value)} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '270px', height: '40px', paddingLeft: '1rem' }} type="text" name="email" id="email" placeholder="이메일" 
                                onChange={e=>setEmail(e.target.value)}/>
                        <button style={{ border: 'solid 1px #d9d9d9', width: '105px' }} onClick={sendHandler}>인증</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '270px', height: '40px', paddingLeft: '1rem' }} type="text" placeholder="인증코드" 
                                onChange={e=>setCode(e.target.value)}/>
                        <button style={{ border: 'solid 1px #d9d9d9', width: '105px' }} onClick={codeHandler}>확인</button>
                    </div>
                    <hr />
                    <button style={{ width: '400px', height: '60px', fontWeight: 'bold', backgroundColor: '#5087B5', color: '#FFFFFF' }} /*disabled={isDisabled}*/ onClick={signUpHandler} >회원 가입</button>
                </div>
            </div>
        </>
    );
}
export default SignUp;