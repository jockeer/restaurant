import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Ordenes from './components/paginas/Ordenes'
import Menu from './components/paginas/Menu'
import NuevoPlatillo from './components/paginas/NuevoPlatillo'
import SideBar from './components/ui/SideBar'

function App() {
  return (
    <>
    <Router>
      <div className="md:flex min-h-screen">
        <SideBar/>
        <div className="md:w-3/5 xl:w-4/5">
          <Switch>
            <Route exact path="/" component={Ordenes} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/nuevo-platillo" component={NuevoPlatillo} />
          </Switch>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
