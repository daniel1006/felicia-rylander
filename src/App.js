import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import { NavBar, Home, Images, Links, Messaging,FilmWork, Resume, BottomNav } from './Components';
import './index.css';

function App() {

  return (
    <div className="App">
     <Router>
     <NavBar/>
       <Switch>
         <Route  path="/" exact component={props => <Home {...props} />} />
         <Route path="/images" component={Images}> <Images/> </Route>
         <Route path="/filmwork" component={FilmWork}> <FilmWork/> </Route>
         <Route path="/links" component={Links}> <Links/> </Route>
         <Route path="/messaging" component={Messaging}> <Messaging/> <BottomNav/> </Route>
         <Route path="/resume" component={Resume}> <Resume/> </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;