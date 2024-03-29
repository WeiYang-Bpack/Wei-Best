import '../src/styles/main.css';
import {useEffect} from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../src/page/Home'
import Footer from '../src/components/Footer'
import Shop from '../src/page/Shop';
import ProductDetails from '../src/components/productComp/ProductDetails'
import Login from './components/userComp/Login';
import {loadUser} from '../src/redux/actions/userActions';
import store from '../src/redux/store';
import Register from '../src/components/userComp/Register';
import Profile from './components/userComp/Profile';
import ProtectedRoute from './components/userComp/ProtectedRoute';
import Contact from './components/Contact';
import UpdateProfile from './components/userComp/UpdateProfile';
import UpdatePassword  from './components/userComp/UpdatePassword';
import Cart from './components/CartComp/Cart';

function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])

  return (
 
      
      <Router>
        <div className="App">
        <Navbar></Navbar>
        <div className='page-container'>
        <Route path='/cart' component={Cart} exact/>
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/search/:keyword" component={Shop} exact />
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path='/login' component={Login}/>
        <Route path='/Register' component={Register}/>
        <ProtectedRoute path='/me' component={Profile} exact/>
        <ProtectedRoute path='/me/update' component={UpdateProfile} exact/>
        <ProtectedRoute path='/password/update' component={UpdatePassword} exact/>
        <Route path='/contact' component={Contact} exact/>
        </div>
        <Footer></Footer>
        </div>
       
        </Router>
        
     

    
  );
}

export default App;
