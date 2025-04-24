import { useState } from "react";



function TextCount() {
    const [text, setText] = useState('');
    function onChange(e) {
        setText(e.target.value);
        console.log(e.target.value.length); // 공백포함 글자 수
        
    }
    return (
        <>
            <form action="">
                <div>
                    <textarea value={text} onChange={onChange} 
                                style={{ width: '55%', height: '40rem', margin: '1rem 0rem', resize: 'none'}}>
                    </textarea>
                </div>
                <hr />
                <div>
                    <h2>공백 포함 <span>{text.length}</span>자</h2>
                    <h2>공백 제외 <span>{text.replace(/ /gi, '').length}</span>자</h2>
                </div>
                <hr />
                <div>
                    <input type="reset" value="초기화" />
                    {/* onCLick 이벤트로도 가능하니 시간나면 해보기 */}
                </div>
            </form>
        </>
    );
}
export default TextCount;