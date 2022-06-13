import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/NavBar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Decision from './Pages/Behaviour/Decision';
import Thinking from './Pages/Behaviour/Thinking';
import Driving from './Pages/Behaviour/Driving';
import Conflict from './Pages/Behaviour/Conflict';
import Influence from './Pages/Behaviour/Influence';
import AllBehaviour from './Pages/Behaviour/AllBehaviour';

function App() {
  return (
    <div className="App">
     <Navbar/>

    <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/allbehaviour' element ={<AllBehaviour/>}/>
        {/* <Route path='/decision' element ={<Decision/>}/>
        <Route path='/thinking' element ={<Thinking/>}/>
        <Route path='/influenec' element ={<Influence/>}/>
        <Route path='/conflict' element ={<Conflict/>}/>
        <Route path='/driving' element ={<Driving/>}/> */}
        <Route path='/login' element ={<Login/>}/>
        <Route path='/signup' element ={<SignUp/>}/>
        <Route path='*' element ={<NotFound/>}/>
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
