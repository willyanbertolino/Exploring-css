import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { links } from './links';

function App() {
  return (
    <Router>
      <Switch>
        {links.map((route, index) => {
          return (
            <Route key={index} exact path={route.path}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
