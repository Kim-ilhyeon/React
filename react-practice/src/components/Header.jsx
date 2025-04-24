import { Link } from "react-router-dom";

const linkStyle = {margin: "1rem 2rem", border: 'solid 1px black', padding: '0rem 1rem', backgroundColor: '#282c34', color: 'white', width: 'auto', height: '3rem', alignContent:'center'};

function Header() {
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <div style={linkStyle}>
                <Link to="/">HOME</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/timer">타이머</Link>
            </div>
            <div style={linkStyle}>
                <Link to="/count/letters">글자수세기</Link>
            </div>
        </div>
    );
}
export default Header;