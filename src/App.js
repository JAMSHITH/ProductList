import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Home from './Containers/Home';
import Cart from './Containers/Cart';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                {/* <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch> */}
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;