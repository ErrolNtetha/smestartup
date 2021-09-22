import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <Router>
          <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/messages' component={Messages} />
          </Switch>
        </div>
        </Router>
  );
}

export default App;
