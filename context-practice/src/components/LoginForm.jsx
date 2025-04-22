import { useContext, useState } from "react";
import userContext from "../contexts/UserContext";


function LoginForm() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const { setUser } = useContext(userContext);

    const clickLogin = () => {
        setUser({ id: id, pwd: pwd });
    }

    return (
        <>
            <input type="text" name="id" value={id} 
                    onChange={(e) => {setId(e.target.value)}} />

            <input type="password" name="pwd" value={pwd} 
                    onChange={(e) => {setPwd(e.target.value)}} />

            <input type="button" value="로그인" onClick={clickLogin} />
        </>
    );
}
export default LoginForm;