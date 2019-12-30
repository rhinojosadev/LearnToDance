import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Courses from "./modules/courses/Courses";
import Salsa from "./modules/courses/salsa/Salsa";
import Bachata from "./modules/courses/bachata/Bachata";
import HipHop from "./modules/courses/hiphop/HipHop";

const App: React.FC = () => {

  return (
    <Router>
      <Grid container={true}>
        <Switch>
          <Route path="/" exact={true} component={Courses} />
          <Route path="/salsa" component={Salsa} />
          <Route path="/bachata" component={Bachata} />
          <Route path="/hiphop" component={HipHop} />
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
