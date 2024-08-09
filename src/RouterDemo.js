import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import {Home} from './component/Home'
import {About} from './component/About'
import Menu from './component/Menu'

const RouterDemo = () => {
    return (
        <div>
            <Router>
                
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