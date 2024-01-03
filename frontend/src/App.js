import './App.css';
import logo from './logo.svg';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/privateComponent';
import LogInComponent from './components/login';
import AddProduct from './components/addProduct';
import AllProducts from './components/products';
import UpdateProduct from './components/updateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes >

     <Route element={<PrivateComponent/>}>
      <Route path='/' element={<AllProducts/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>
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
