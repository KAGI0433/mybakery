import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import {Home} from './component/Home'
import {About} from './component/About'
import Menu from './component/Menu'

const RouterDemo = () => {
    return (
        <div>
            <Router>
                <Link to="/home">Home</Link>

                <Link to="/about">About</Link>

                <Link to="menu">Menu</Link>

                <Switch>

                    <Route path="/home">  
                     <Home/>
                     </Route>

                     <Route path="/about">
                       <About/>
                     </Route>

                     <Route path="menu">
                        <Menu/>
                     </Route>
                 
                </Switch>


            </Router>

        </div>
    )
}

export default RouterDemo;