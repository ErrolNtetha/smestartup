import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Network from './components/Pages/Network';

function App() {
  return (
        <Router>
          <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={() => <Home authorized={false} />} />
            <Route path='/messages' component={Messages} />
            <Route path='/mynetwork' component={Network} />
          </Switch>
        </div>
        </Router>
  );
}

export default App;
