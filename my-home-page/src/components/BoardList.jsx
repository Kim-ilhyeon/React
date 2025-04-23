import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function BoardList() {
    const padding = {padding: "5% 10%"};
    return (
        <>
            {/* <!-- 헤더 표시 --> */}
            <Header />

            <div class="outer">
                <br /><br />
                <div class="inner-area" style={padding}>
                    <h2>자유 게시판</h2>
                    <br />

                    <Link to="" class="btn" style={{float:'right'}}>글쓰기</Link>
                    <br />

                    <br />
                    <table class="list-area table table-hover" align="center">
                        <thead>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>조회수</th>
                            <th>작성일</th>
                            <th>첨부파일</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>5</td>
                                <td>마지막 공지사항 제목</td>
                                <td>admin</td>
                                <td>10</td>
                                <td>2024-04-01</td>
                                <td>■</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>공지사항 제목 4</td>
                                <td>admin</td>
                                <td>10</td>
                                <td>2024-03-21</td>
                                <td>■</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>공지사항 제목 3</td>
                                <td>admin</td>
                                <td>30</td>
                                <td>2024-03-07</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>공지사항 제목 2</td>
                                <td>admin</td>
                                <td>50</td>
                                <td>2024-02-22</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>공지사항 제목 1</td>
                                <td>admin</td>
                                <td>130</td>
                                <td>2024-01-07</td>
                                <td></td>
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
                        <div class="select">
                            <select name="condition" id="" class="custom-select form-select">
                                <option value="writer">작성자</option>
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                            </select>
                        </div>
                        <div class="text text-sm">
                            <input type="text" class="form-control" name="keyword" />
                        </div>
                        <button class="btn-search btn">검색</button>
                    </form>
                    <br /><br />
                </div>
                <br /><br />
            </div>


            {/* <!-- footer 표시 --> */}
            <Footer />
        </>
    );
}
export default BoardList;