import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Bollywood from './Components/Sub Component/Bollywood';
import Fitness from './Components/Sub Component/Fitness';
import Food from './Components/Sub Component/Food';
import Hollywood from './Components/Sub Component/Hollywood';
import Home from './Components/Sub Component/Home';
import readingPage from './Components/Sub Component/readingPage';
import Technology from './Components/Sub Component/Technology';


function App() {
  return (
    <Router>
        <Header />
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/bollywood" component={Bollywood}/>
        <Route exact path="/technology" component={Technology}/>
        <Route exact path="/hollywood" component={Hollywood}/>
        <Route exact path="/fitness" component={Fitness}/>
        <Route exact path="/food" component={Food}/>
        <Route exact path="/readingpage" component={readingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
