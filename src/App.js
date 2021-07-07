import logo from './logo.svg';
import './App.css';
import Registration from "./components/Registration";
import {Route,Switch,dispath} from "react-router-dom";



function App() {


  

  return (
    <>

  
    <Route exact path="/registration">
      <Registration></Registration>
    </Route>
    </>
  );
}



export default App;

