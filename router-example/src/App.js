
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={UserPage} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
