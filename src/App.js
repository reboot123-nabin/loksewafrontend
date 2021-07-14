import './App.css';
import Registration from './Components/Pages/Registration';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Dashboard from './Components/DashboardComponents/Dashboard';
import Profile from './Components/DashboardComponents/Profile';
import EditProfile from './Components/DashboardComponents/EditProfile';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import QuizQuestion from './Components/CommonComponents/QuizQuestion';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about-us' exact={true} component={About} />
        <Route path='/contact-us' exact={true} component={Contact} />
        <Route path='/home' component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/profile' component={Profile} />
        <Route path='/editprofile' component={EditProfile} />
        <Route path='/quizquestion' component={QuizQuestion} />
      </Switch>
    </>
  );
}



export default App;

