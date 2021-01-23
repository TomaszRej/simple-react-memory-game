import React from 'react';
import StartPage from './pages/startPage/StartPage';
import GamePage from './pages/gamePage/GamePage';
import ScorePage from './pages/scorePage/ScorePage';
import history from './utils/history';
import {RouteNames} from './utils/routeNames';
import {Switch, Router, Route} from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={RouteNames.Start} component={StartPage}/>
        <Route path={RouteNames.Game} component={GamePage}/>
        <Route path={RouteNames.Score} component={ScorePage}/>
      </Switch>
    </Router>
  );
}

export default App;
