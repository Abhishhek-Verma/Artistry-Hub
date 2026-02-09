import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

import './style.css'
import NotFound1 from './views/not-found'
import Home from './views/home'
import Privacy from './views/privacy'
import Terms from './views/terms'
import Cookies from './views/cookies'
import Dashboard from './views/dashboard'
import Upload from './views/upload'
import Portfolio from './views/portfolio'

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Dashboard} exact path="/dashboard" />
          <Route component={Upload} exact path="/upload" />
          <Route component={Portfolio} exact path="/portfolio" />
          <Route component={Privacy} exact path="/privacy" />
          <Route component={Terms} exact path="/terms" />
          <Route component={Cookies} exact path="/cookies" />
          <Route component={NotFound1} exact path="/not-found" />
          <Route component={NotFound1} path="**" />
        </Switch>
      </Router>
    </ClerkProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
