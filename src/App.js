import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages/MessagesUI'
import {BrowserRouter as HashRouter, Switch, Route } from 'react-router-dom';
import Network from './components/Pages/Network';
import ChatWindow from './components/Messages/ChatWindow';

function App() {
  return (
        <HashRouter>
          <div className="App">
          <Header />
          <Switch>
            <Route path='/' exact component={() => <Home authorized={false} />} />
            <Route path='/messages' component={Messages} />
            <Route path='/mynetwork' component={Network} />
            <Route path='/inbox/message' component={ChatWindow} />
          </Switch>
        </div>
        </HashRouter>
  );
}

export default App;
