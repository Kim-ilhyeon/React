import { useContext, useState } from "react";
import ListContext from '../contexts/ListContext';

function PhoneInput({ /*addPhone*/ }) {
    // 상태 관리 훅 : useState
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const { list, setList } = useContext(ListContext);

    const clickAddBtn = () => {
        // 이름, 연락처 출력
        // alert(`이름 : ${name}, 연락처 : ${phone}`);
        // addPhone({name: name, number: phone});
        const data = {name: name, number: phone};
        setList([...list, data]);

        // 이름, 연락처 초기화 --> 각 상태를 빈값으로 업데이트
        setName('');
        setPhone('');

        // setList({ name: name, number: phone });
    }

    function alertMsg() {
        // 이름, 연락처 출력
        // alert(`이름 : ${name}, 연락처 : ${phone}`);
        // addPhone({name: name, number: phone});
        const data = {name: name, number: phone};
        setList([...list, data]);
        
        // 이름, 연락처 초기화 --> 각 상태를 빈값으로 업데이트
        setName('');
        setPhone('');

        
    }

    return (
        <>
            {/* for -> htmlFor */}
            <label htmlFor='name'>이름</label>
            <input type='text' id='name' value={name} 
                    onChange={(e)=> { setName(e.target.value) }} />

            <label htmlFor='phone'>연락처</label>
            <input type='tel' id='phone' value={phone} 
                    onChange={(e)=> { setPhone(e.target.value) }} />

            <input type='button' value='추가' onClick={alertMsg} />
        </>
    );
}

export default PhoneInput;