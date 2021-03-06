import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Dashboard from '../Dashboard/index';
import Repository from '../Repository/index';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/repositories/:repository+" component={Repository}></Route>
    </Switch>
)


export default Routes;