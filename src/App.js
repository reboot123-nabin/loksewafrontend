import './App.css';
import Registration from './Components/Pages/Registration';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Dashboard from './Components/DashboardComponents/Dashboard';
import Profile from './Components/DashboardComponents/Profile';
import EditProfile from './Components/DashboardComponents/EditProfile';
import AdminNavbar from './Components/AdminComponents/AdminNavbar';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'bootstrap/dist/js/bootstrap.js';
import { About } from './Components/Pages/About';
import { Contact } from './Components/Pages/Contact';
import CreateQuiz from './Components/AdminComponents/quiz/CreateQuiz';
import ViewQuiz from './Components/AdminComponents/quiz/ViewQuiz';
import AdminTable from './Components/AdminComponents/quiz/AdminTable';
import AddQuestion from './Components/AdminComponents/quiz/AddQuestion';
import ViewQuestion from './Components/AdminComponents/quiz/ViewQuestion';
import ViewUser from './Components/UserComponents/quiz/ViewUser';
import QuestionSession from './Components/UserComponents/quiz/QuestionSession';
import SingleQuestion from './Components/AdminComponents/quiz/SingleQuestion';
import TableQuiz from './Components/AdminComponents/quiz/TableQuiz';
import Quizes from './Components/UserComponents/quiz/Quizes';
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
        <Route path='/admin-dashboard' component={AdminNavbar} />
        <Route path='/create-quiz' component={CreateQuiz} />
        <Route path='/view-quiz' component={ViewQuiz} />
        <Route path="/admin-table" component={AdminTable} />
        <Route path="/add-question" component={AddQuestion} />
        <Route path="/view-question" component={ViewQuestion}/>
        <Route path="/view-user" component={ViewUser}/>
        <Route path="/question-session/:id" component={QuestionSession}/>
        <Route path="/single-question/:id" component={SingleQuestion}/>
        <Route path="/table-quiz" component={TableQuiz}/>
        <Route path="/available-quizes" component={Quizes}/>
        </Switch>
    </>
  );
}



export default App;

