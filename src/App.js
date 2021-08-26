import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Pages/Landing_page';
import Video from './Pages/Video';
import './App.css';
import Prizing from './Pages/Prizing';
import BloodOrange from './Pages/BloodOrange';
import Quiz from './Pages/Quiz';

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/' exact strict component={LandingPage}/>
            <Route path='/educational-video' exact strict component={Video}/>
            <Route path='/prizing' exact strict component={Prizing}/>
            <Route path='/blood-orange' exact strict component={BloodOrange}/>
            <Route path='/Quiz' exact strict component={Quiz}/>
        </Switch>
    </Router>
  );
}

export default App;
