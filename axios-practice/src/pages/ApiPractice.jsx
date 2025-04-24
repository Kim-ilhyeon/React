import MenuBar from "../componenets/MenuBar";
import { Outlet } from 'react-router-dom';

const apiMenu = [
    {pathName: '/api', text: '고양이 보기'},
    {pathName: '/api/dog', text: '강아지 보기'}
];

function ApiPractice() {
    return (
        <>
            <h1>Api Practice</h1>
            <MenuBar menuInfo={apiMenu} />

            <Outlet />
        </>
    );
}
export default ApiPractice;