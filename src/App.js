import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/home.js';
import History from './pages/history';


function App() {
  return (
    <div className="vw-100 vh-100 text-black" style={{backgroundImage: "radial-gradient(circle,#585858 20%,#f25f25  32%,#25b8f2  90%)"}}>
    <Router>

      <Switch>

        {/* Routes to History page ONLY when URL matches '/history'*/}
        <Route exact path="/history" component={History} />

        {/* Error Handling:Redirects to Homepage if anything other than'/history' is typed */}
        <Route component={Home} />

      </Switch>

    </Router>  
    </div>
  );
}

export default App;
