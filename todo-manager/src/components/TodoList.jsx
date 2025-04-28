

function TodoList() {
    return (
            <div id="root" style={{margin: '0 0', border: 'solid 1px red', display: 'flex', width: '2000px'}}>
                <div>
                    <h2>TODO MANAGER</h2>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1rem 0rem' }}>
                        진행중
                    </div>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1rem 0rem' }}>
                        완료
                    </div>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1rem 0rem' }}>
                        삭제
                    </div>
                </div>
                <div>
                    <div>
                        <input style={{ borderRadius: '10px', width: '90%', padding: '1rem' }} type="text" name="input" id="input" placeholder="할 일 입력" />
                        <button style={{ borderRadius: '100%' }}>+</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
    );
}
export default TodoList;