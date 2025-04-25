import axios from 'axios';

export async function getCatImages() {
    // 고양이 URL 주소 : https://api.thecatapi.com/v1/images/search
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    // console.log(response);
    return response.data;
}

export async function getDogImages() {
    // 강아지 URL 주소 : https://api.thedogapi.com/v1/images/search
    const response = await axios.get('https://api.thedogapi.com/v1/images/search');
    // console.log(response);
    return response.data;
}

export async function getServerInfo() {
    const response = await axios.get('http://localhost:8080/server');
    console.log(response);
    return response.data;
}

export async function getUserList() {
    const response = await axios.get('http://localhost:8080/users');
    console.log(response);
    return response.data;
}