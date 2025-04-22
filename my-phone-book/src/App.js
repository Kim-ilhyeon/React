import logo from './logo.svg';
import './App.css';
import PhoneInput from './component/PhoneInput';
import PhoneList from './component/PhoneList';
import ListContext from './contexts/ListContext';
import { useState } from 'react';

/*
  * 리액트에서는 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트의 상태를 직접 변경할 수 없다.
    따라서, 하위 컴포넌트에서 발생한 이벤트를 상위 컴포넌트에서 처리하도록 하는 상태 끌어올리기 패턴을 사용한다. (State lifting up)

  * Props를 통해 데이터가 전달될 때 하위 컴포넌트에서 필요하지 않은 props를 계속 전달해야 하는 상황이 발생된다. (props drilling, 상태 내리꽃기)
    > 단점 : 필요없는 컴포넌트에서도 prop로 전달을 해줘야 한다. => 코드 가독성이 떨어지고, 유지보수성을 떨어뜨릴 수 있다.
    --> 이를 해결하기 위해 React Context 또는 Redux 와 같은 상태 관리 라이브러리를 사용하기도 한다.
    
*/
function App() {
  const [list, setList] = useState([]);


  const addPhone = (data) => {
    setList([...list, data]);
    // 전개 연산자 (...) : 기존 배열(객체) 내용을 복사하고, 그 뒤에 새 항목을 추가함
    // => JavaScript 문법임
  }

  return (
    <div>
      <h2>My Phone Book</h2>

      <ListContext.Provider value={{list, setList}}>
      <PhoneInput /*addPhone={addPhone}*//>
      <hr/>
      <PhoneList /*list={list}*//>
      </ListContext.Provider>
    </div>
  );
}

export default App;
