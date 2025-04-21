

function ProfileCard() {
    const name = "하이유";      // 이름
    const age = 20;             // 나이
    const job = "가수";         // 직업
    const isStudent = false;    // 학생여부

    function alertName() {
        alert(`안녕하세요, ${name}님`);
    }

    const cardStyle = { textAlign: 'center', border: 'solid 2px cyan', width: '300px', margin: '2px auto' };

    return (
        <div style={cardStyle}>
            <h3>이름 :  {name}</h3>
            <h3>나이 : {age}</h3>
            <h3>직업 : {job}</h3>
            <p>
                {/* 학생인 경우 "학생입니다." 그렇지 않으면 "학생이 아닙니다." */}
                {isStudent == true ? "학생입니다." : "학생이 아닙니다."};
            </p>
            {/* 버튼 클릭 시 "안녕하세요, xxx님" 알림창 표시 */}
            {/* <button onClick={() => alert(`안녕하세요, ${name}님`)}>확인</button> */}
            <button onClick={alertName}>확인</button>
        </div>
    );
}

// 컴포넌트 내보내기 : 다른 파일에서 해당 컴포넌트를 사용할 수 있게됨.
export default ProfileCard;