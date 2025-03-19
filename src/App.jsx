import Home from './Views/Home'
import Header from './Views/Navbar/Header';
import Login from './User Authentication/Login';
import Register from './User Authentication/Register';
import { Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return(
    <div ClassName="App"> 
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App
