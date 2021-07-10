import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration";
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import {Route,Switch,dispath} from "react-router-dom";



function App() {


  

  return (
    <>
      <Route path='/' exact={true} component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/profile' component={Profile}/>
      
      <Route path='/editprofile' component={EditProfile}/>
     
    </>
  );
}



export default App;

