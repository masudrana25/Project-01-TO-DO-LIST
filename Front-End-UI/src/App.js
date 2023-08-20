import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTask from './components/EditTask/EditTask';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ShowTask from './components/ShowTask/ShowTask';
import Profile from './components/Profile/Profile';
import AddTask from './components/AddTask/AddTask';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/edit/:id" element={<EditTask />}></Route>
          <Route path="/task" element={<ShowTask />}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path='/addTask' element={<AddTask/>}></Route>
        </Routes>
        <Contact></Contact>
        <Footer></Footer>

    </BrowserRouter>
    
    </>
  );
}

export default App;
