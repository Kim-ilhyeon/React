import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function NoticeList() {
    return (
        <>
            {/* <!-- 헤더 표시 --> */}
            <Header />

            <div class="outer">
                <br /><br />
                <div class="innerOuter" style="padding: 5% 10%">
                    <h2>공지사항</h2>
                    <br />

                    <Link to="" class="btn" style="float:right">글쓰기</Link>
                    <br />

                    <br />
                    <table class="table table-hover notice-list" align="center">
                        <thead>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>마지막 공지사항 제목</td>
                                <td>admin</td>
                                <td>2024-04-01</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>공지사항 제목 4</td>
                                <td>admin</td>
                                <td>2024-03-21</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>공지사항 제목 3</td>
                                <td>admin</td>
                                <td>2024-03-07</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항 제목 2</td>
                                <td>admin</td>
                                <td>2024-02-22</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>공지사항 제목 1</td>
                                <td>admin</td>
                                <td>2024-01-07</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />

                    <div class="paging-area">
                        <ul class="pagination">
                            <li class="page-item"><Link to="" class="page-link">Prev</Link></li>
                            <li class="page-item"><Link to="" class="page-link">1</Link></li>
                            <li class="page-item"><Link to="" class="page-link">2</Link></li>
                            <li class="page-item"><Link to="" class="page-link">3</Link></li>
                            <li class="page-item"><Link to="" class="page-link">4</Link></li>
                            <li class="page-item"><Link to="" class="page-link">5</Link></li>
                            <li class="page-item"><Link to="" class="page-link">Next</Link></li>
                        </ul>
                    </div>

                    <br clear="both" />

                    <form action="" class="search-form">
                        <div class="text">
                            <input type="text" class="form-control" name="keyword" placeholder="검색할 제목을 입력하세요." />
                        </div>
                        <button class="btn-search btn btn-secondary">검색</button>
                    </form>
                </div>
                <br /><br />
            </div>

            {/* <!-- footer 표시 --> */}
            <Footer />
        </>
    );
}
export default NoticeList;