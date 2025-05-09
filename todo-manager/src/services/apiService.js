import axios from 'axios';
import { errorAlert } from './toasUtils';

// 설정을 통해 axios 객체를 생성
const apiAxios = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true // 쿠키 또는 인증 헤더를 포함하여 요청할 것인지에 대한 설정
});

// 통신 오류 발샐 시 처리
apiAxios.interceptors.response.use(function (response) {
    // 2xx 범위의 코드 시 현재 함수를 실행.
    return response;    // 응답 결과 전달
}, function (error) {
    if (error.status === 401) {
        localStorage.removeItem("logined");
        location.href = "/";
    }

    // 2xx 외 범위의 코드 시 현재 함수를 실행.
    errorAlert("문제가 발생했습니다.");
    return Promise.reject(error);       // 응답 오류가 있는 작업 수행
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
    // console.log(id);
    // console.log(pwd);
    const response = await apiAxios.post('/login', {memberId: id, password: pwd});
    return response.data;
}

export const getTodoList = async () => {
    const response = await apiAxios.get('/todo');
    return response.data;
}

export const addTodo = async (content) => {
    const response = await apiAxios.post('/todo', {content: content});
    return response.data;
}