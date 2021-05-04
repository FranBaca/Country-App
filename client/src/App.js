import './App.css';
import LandingPage from './Landing Page/LandingPage';
import {Route, Switch} from 'react-router-dom'; 
import Home from './Components/Home/Home';
import Country from './Components/Country/Country'
import Activity from './Components/Activity/Activity'
import About from './Components/About/About'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />

       <Route path='/home' component={Home}/>

       <Route path='/country/:id' component={Country} />

       <Route path='/activity' component={Activity} />

       <Route path='/about' component={About} />
    </Switch>
  );

  
}

export default App;
