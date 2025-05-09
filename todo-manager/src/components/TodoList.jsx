import { useEffect, useState } from "react";
import { getTodoList } from "../services/apiService";
import Todo from "./Todo";


function TodoList() {
    const [list, setList] = useState([]);
    const [todoContent, setTodoContent] = useState("");

    const addTodoHandler = async () => {
        console.log("할 일 추가 요청 들어옴")
        const result = await addTodo(content);
        console.log(result);
    }

    const initialTodos = async () => {
        const todoList = await getTodoList();
        console.log(todoList);
        console.log("ㅇㄴㅁㅇ");
        // 조회된 데이터로 상태 업데이트
        setList(todoList);


        console.log(list);
    }
    const todoList = list.map((todoNo, idx) =>
        <Todo key={idx} content={todoNo.todoContent} />
    );


    // 현재 컴포넌트가 최초 렌더링 되었을 때 목록 조회 요청
    useEffect(() => {
        initialTodos();
    }, []);

    return (
        <div style={{ display: 'flex', width: '1910px', height: '960px' }}>
            <div style={{ width: '20%', backgroundColor: '#5087B5' }}>
                <div style={{ height: '10%', color: 'white' }}>
                    <h2>TODO MANAGER</h2>
                </div>
                <div style={{ height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '12rem auto' }}>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1.5rem 0rem', color: '#5087B5' }}>
                        진행중
                    </div>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1.5rem 0rem', color: '#5087B5' }}>
                        완료
                    </div>
                    <div style={{ borderRadius: '15px', padding: '0.8rem', width: '90%', backgroundColor: 'white', margin: '1.5rem 0rem', color: '#5087B5' }}>
                        삭제
                    </div>
                </div>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>

                <div style={{ display: 'flex', width: '95%', margin: '0 auto' }}>
                    <input style={{ borderRadius: '10px', width: '100%', padding: '1rem' }} type="text" name="input" id="input" placeholder="할 일 입력"
                        onChange={e => setTodoContent(e.target.value)} />
                    <button style={{ borderRadius: '100%' }} onClick={addTodoHandler}>+</button>
                </div>

                {todoList}


                {/* <div style={{ backgroundColor: 'white', width: '98%', height: '1px', margin: '0 auto' }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ borderRadius: '5px', width: '1400px', alignItems: 'center', border: 'solid 1px #d9d9d9', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ marginLeft: '1rem' }}>스프링과 친해지기</h4>
                        <div>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#6BAF92', margin: '0rem 0.5rem' }}>V</button>
                            <button style={{ borderRadius: '50%', color: 'white', backgroundColor: '#D46868', margin: '0rem 0.5rem' }}>X</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
export default TodoList;