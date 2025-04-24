import { useEffect, useState } from 'react';


function NowTime() {
    const border = { border: 'solid 2px red' };
    const color = { color: 'white' };
    const [now, setNow] = useState(new Date());

    // 1초마다 now 상태를 현재 날짜 시간으로 변경 --> setInterval(함수, 시간) : 시간마다 함수 내용을 실행
    // setTimeout(함수, 시간) : 일정 시간 뒤에 함수 내용을 실행

    useEffect(() => {
        console.log(now);
    }, [now]);

    useEffect(() => {
        // 1초 마다 now 상태를 현재날짜시간으로 변경
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1 * 1000);

        return () => {
            // 컴포넌트가 소멸될 때 타이머를 정리 --> clearInterval(대상 타이머)
            clearInterval(timer);
        }
    }, []);
    // 처음 렌더링 되었을 때만 실행(Mounting, 1*1000)


    // 컴포넌트가 소멸될 때 타이머를 정리 --> clearInterval(대상 타이머)

    return (
        <div className='time'>
            <div>
                <h1 style={{color: 'white'}}>현재 시간</h1>
            </div>
            <div>
                <p style={{color: 'white'}}>
                    {now.toLocaleDateString()}
                </p>
                <p style={{color: 'white'}}>
                    {now.toLocaleTimeString()}
                </p>
            </div>
        </div>
    );
}
export default NowTime;