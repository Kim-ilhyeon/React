import axios from 'axios';

// 설정을 통해 axios 객체를 생성
const apiAxios = axios.create({
    baseURL: 'http://localhost:8080'
});

export const sendEmail = async (email) => {
    const response = await apiAxios.post('/email/send', {email: email});
    return response.data;
}

export const verifyEmail = async (code, email) => {
    const response = await apiAxios.post('/email/verify', {code: code, email: email});
    if (response.status === 200) {
        return response.data;
    } else {
        
    }

}

export const checkId = async (id) => {
    const response = await apiAxios.post('/checkId', {id: id});
    // status : 통신 상태코드, data : 응답 데이터
    return response.data;
}

// export const registUser = async (id, pwd, nickname, email) => {
//     const response = await apiAxios.post('/user/regist', {id: id, pwd: pwd, nickname: nickname, email: email});
//     return response.data;
// }

export const registUser = async (user) => {
    const response = await apiAxios.post('/user/regist', user);
    return response.data;
}

export const loginUser = async (id, pwd) => {
    console.log(id);
    console.log(pwd);
    const response = await apiAxios.post('/login', {userId: id, userPwd: pwd});
    return response.data;
}

