import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './main/Main';
import Imt from './imt/Imt';
import Nback from './nback/Nback';
import Simon from './simon/Simon';
import Arcana from './arcana/Arcana';
import './App.css';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Main} />
      <Route path='/imt' component={Imt} />
      <Route path='/nback' component={Nback} />
      <Route path='/simon' component={Simon} />
      <Route path='/arcana' component={Arcana} />
    </Router>
  );
}

export default App;