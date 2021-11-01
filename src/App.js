import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages/MessagesUI'
import Network from './components/Pages/Network';
import Sent from './components/Messages/Sent';
import Received from './components/Messages/Received';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import ChatUI from './components/Messages/ChatUI';
import Profile from './components/Pages/Profile';


function App() {
  return (
        <Router>
          <div className="App">
            <Header />
              <Switch>
                <Route path='/' exact component={() => <Home authorized={false} />} />
                <Route path='/messages/inbox' component={Messages} />
                <Route path='/mynetwork' component={Network} />
                <Route path='/messages/msg' component={ChatUI} />
                <Route path='/messages/sent' component={Sent} />
                <Route path='/messages/received' component={Received} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/profile' component={Profile} />

              </Switch>
        </div>
        </Router>
  );
}

export default App;
