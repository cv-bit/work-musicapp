import './App.css';
import { useState } from 'react'
import Nav from './components/Navbar'
import Login from './components/LoginForm'

function App() {

  const [isShowLogin, setIsShowLogin] = useState(false)

  const handleLoginClick = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  return (
    <div className="App">
      <Nav handleLoginClick={ handleLoginClick }/>
      <Login isShowLogin={ isShowLogin } handleLoginClick={ handleLoginClick }/>
    </div>
  );
}

export default App;
