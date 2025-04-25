import { useState } from "react";
import { getServerInfo, getUserList } from "../service/apiTest";
import MyBtn from "./MyBtn";
import Table from "./Table";

const types = ['이름', '나이', '연락처'];

function MyAPIComponent() {
    const [data, setData] = useState({ users: [] });


    const showServerInfo = async () => {
        const result = await getServerInfo();
        setData({ ...data, r1: result });
        // object로 선언되었기 떄문에 key:value 형태로 변경
    }

    const showUserList = async () => {
        const result = await getUserList();
        setData({ ...data, users: result });
    }
    return (
        <>
            <p>My API Component</p>
            <hr />
            <MyBtn clickHandler={showServerInfo} text='서버 정보 조회' />
            <p>{data.r1}</p>
            <MyBtn clickHandler={showUserList} text='사용자 목록 조회' />
            <Table typeList={types} dataList={data} keyName={'user_'} />
        </>
    );
}
export default MyAPIComponent;