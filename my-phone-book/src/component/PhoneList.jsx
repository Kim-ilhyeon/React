import { useContext } from "react";
import ListContext from "../contexts/ListContext";


function PhoneList({ /*list*/ }) {
     const {list} = useContext(ListContext);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>연락처</th>
                    </tr>
                </thead>
                <tbody>
                    { list.length === 0 && 
                        <tr>
                            <td colSpan={2}>저장된 연락처가 없습니다.</td>
                        </tr>
                    }
                    { list.map((phone, index) => (
                        <tr key={'phone_' + index}>
                            <td>
                                {phone.name}
                            </td>
                            <td>
                                {phone.number}
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </>
    );
}

export default PhoneList;