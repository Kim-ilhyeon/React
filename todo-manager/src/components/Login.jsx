import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { errorAlert, successAlert } from "../services/toasUtils";
import { loginUser } from "../services/apiService";
import { ToastContainer, toast } from "react-toastify";

function Login({ setIsLogin }) {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const navigate = useNavigate(); // useNavigate 훅 사용

    const LoginHandler = async () => {
        const result = await loginUser(id, pwd);

        if (id == "" || pwd == "") {
            errorAlert("아이디와 비밀번호를 입력해주세요.");
        } else {
            console.log(result);
            if (result === "success") {
                /*
                successAlert("XXX님, 환영합니다.!!");
                setIsLogin(true);

                // 브라우저 저장공간에 로그인 여부 저장
                // (Local storage에 "logined"라는 키값에 true라는 value값을 저장)
                localStorage.setItem("logined", true);
                
                // navigate('/todoList');
                */
                toast.success("XXX님, 환영합니다.!!", {
                    onClose: () => {
                        setIsLogin(true);
                        localStorage.setItem("logined", true);
                    }
                })
            } else if (result === "failed") {
                errorAlert("올바르지 않은 정보입니다.");
            }
        }

    }

    return (
        <>
            <div style={{ width: '400px', height: '430px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: 'white' }}>
                <div style={{ height: '88px', fontSize: '34px', fontWeight: '700', margin: '2rem 0rem', color: '#5087B5' }}>
                    TODO <br /> MANAGER
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '400px', height: '223px', justifyContent: 'space-between' }}>
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem' }} type="text" name="id" id="id" placeholder="아이디"
                        onChange={e => setId(e.target.value)} />
                    <input style={{ border: 'solid 1px #d9d9d9', borderRadius: '5px', width: '392px', height: '40px', paddingLeft: '1rem' }} type="password" name="pwd" id="pwd" placeholder="비밀번호"
                        onChange={e => setPwd(e.target.value)} />

                    {/* <Link to={'/todoList'} ><button style={{width: '400px', height: '60px', fontWeight: 'bold', backgroundColor: '#5087B5', color: '#FFFFFF', marginTop: '0.5rem'}}>로그인</button></Link> */}
                    <button style={{ width: '400px', height: '60px', fontWeight: 'bold', backgroundColor: '#5087B5', color: '#FFFFFF', marginTop: '0.5rem' }}
                        onClick={LoginHandler}>로그인</button>
                    <Link style={{ marginTop: '1rem' }} to={'/signUp'}>회원가입</Link>
                </div>
            </div>
        </>
    );
}
export default Login;