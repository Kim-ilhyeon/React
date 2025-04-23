import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function MenuTemplate() {
    const { no } = useParams();
    return (
      <p>Menu{no} 페이지</p>
    );
  }

function Layout() {
    return (
    <>
        <Routes>
            <Route index element={<p>메인페이지</p>} />
            {/* <Route path="/menu/1" element={<p>Menu1 페이지</p>} />
        <Route path="/menu/2" element={<p>Menu2 페이지</p>} /> */}
            <Route path="/menu/:no" element={<MenuTemplate />} />
        </Routes>
    </>
    );
}
export default Layout;