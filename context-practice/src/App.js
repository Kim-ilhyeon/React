import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import LoginResult from './components/LoginResult';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {/* Provider : 전역 상태를 하위 컴포넌트에게 전달하는 역할 */}
      <UserContext.Provider value={{user, setUser}}>
      <LoginForm />
      <hr/>
      <LoginResult />
      </UserContext.Provider>
    </div>
  );
}

export default App;
