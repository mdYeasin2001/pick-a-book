import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import AdminNavbar from './components/AdminNavbar/AdminNavbar';
import AddBook from './components/AddBook/AddBook';
import ManageBooks from './components/ManageBooks/ManageBooks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/home">
          <Navbar />
          <Home />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route exact path="/admin">
          <AdminNavbar />
          <AddBook />
        </Route>
        <Route path="/admin/addBook">
          <AdminNavbar />
          <AddBook />
        </Route>
        <Route path="/admin/manageBooks">
          <AdminNavbar />
          <ManageBooks />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
