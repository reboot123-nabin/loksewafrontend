import './App.css';
import Registration from './Components/Pages/Registration';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Dashboard from './Components/DashboardComponents/Dashboard';
import Profile from './Components/DashboardComponents/Profile';
import EditProfile from './Components/DashboardComponents/EditProfile';
import Category from './Components/DashboardComponents/Category';
import QuizQuestion from './Components/CommonComponents/QuizQuestion';
import Quizdisplay from './Components/User/Quizdisplay';
import CreateQuiz from './Components/quiz/CreateQuiz';
import AdminTable from './Components/quiz/AdminTable';
import ViewQuiz from './Components/quiz/ViewQuiz';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';


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
        <Route path='/category'component={Category} />
        <Route path='/quizquestion'component={QuizQuestion}/>
        <Route path='/createquiz' component={CreateQuiz}/>
        <Route path='/viewquiz' component={ViewQuiz}/>
        <Route path='/admintable'component={AdminTable}/>
        <Route path='/quizdisplay' component={Quizdisplay}/>
      </Switch>
    </>
  );
}



export default App;

