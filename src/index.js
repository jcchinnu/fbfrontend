import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import App from './App'
import Users from './users'
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/users" component={Users} />
            </Switch>

        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))