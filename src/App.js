import './App.css';
import Registration from "./Components/Registration";
import { Route } from "react-router-dom";
import { Home } from './Components/Pages/Home';



function App() {




  return (
    <>
      <Route path="/">
        <Home></Home>
      </Route>
      <Route exact path="/registration">
        <Registration></Registration>
      </Route>
    </>
  );
}



export default App;