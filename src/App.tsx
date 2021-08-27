import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CreateMeal} from "./pages/CreateMeal";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/create">
                    <CreateMeal />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
