import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import { NavBar, Home, Images } from './Components';
import './index.css';

function App() {
  return (
    <div className="App">
     <Router>
     <NavBar/>
       <Switch>
         <Route  path="/" exact component={props => <Home {...props} />} />
         <Route path="/images" component={Images}> <Images/> </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;