import { Link } from 'react-router-dom';

function Menu() {
    return (
    <div style={{padding: '5px'}}>
        <Link to="/">홈</Link> <br></br>
        <Link to="/menu/1">메뉴1</Link> <br></br>
        <Link to="/menu/2">메뉴2</Link> <br></br>
    </div>
    );
}
export default Menu;