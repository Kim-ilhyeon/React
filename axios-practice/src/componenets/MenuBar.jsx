import { Link } from "react-router-dom";
import { styled } from 'styled-components';

// const menuInfo = [
//     {pathName: "/", text: "HOME"},
//     {pathName: "/basic", text: "BASIC"}
// ]

// function MenuBar() {
//     return (
//         <>
//         {menuInfo.map((menu) => {
//             return (
//                 <Link to={menu.pathName}>{menu.text}</Link>
//             )
//         })}
//         </>
//     );
// }

const StyledLink = styled(Link)`
    padding: 1rem;
    background-color: yellowgreen;
`;
// => styled-components 사용

function MenuBar({ menuInfo }) {
    return (
        <>
        {menuInfo.map((menu) => {
            return (
                <Link style={{border: 'solid 1px green', margin: '1rem 3rem'}} to={menu.pathName}>{menu.text}</Link>
            )
        })}
        </>
    );
}
export default MenuBar;