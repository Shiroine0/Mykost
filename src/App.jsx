import Home from './Views/Home'
import Header from './Views/Navbar/Header';
import Login from './Views/User Authentication/Login';
import Register from './Views/User Authentication/Register';
import Details from './Views/Kost Details/Details';
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
        <Route path="/Details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App
