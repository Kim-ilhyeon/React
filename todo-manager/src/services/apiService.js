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
