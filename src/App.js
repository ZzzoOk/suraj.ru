import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Main from './main/Main'
import Imt from './imt/Imt'
import Nback from './nback/Nback'
import Simon from './simon/Simon'

function App() {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/imt' component={Imt} />
      <Route path='/nback' component={Nback} />
      <Route path='/simon' component={Simon} />
    </Router>
  );
}

export default App;