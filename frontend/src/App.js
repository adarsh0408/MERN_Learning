import './App.css';
import logo from './logo.svg';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';
import LogInComponent from './components/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes >

     <Route element={<PrivateComponent/>}>
      <Route path='/' element={<h1>Product List</h1>}/>
      <Route path='/add' element={<h1>Add Product</h1>}/>
      <Route path='/update' element={<h1>Update Product</h1>}/>
      <Route path='/logout' element={<h1>Logout</h1>}/>
      <Route path='/profile' element={<h1>Profile</h1>}/>
      </Route>
     <Route path='/logIn' element={<LogInComponent/>}/>
      <Route path='register' element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
