import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from "wouter";
import './index.css'
import Layout from './components/Layout'
import App from './components/App'
import Welcome from './components/Welcome'
import HowToUse from './components/HowToUse'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Switch>
        <Route path='/' component={Welcome} />
        <Route path='/howtouse' component={HowToUse} />
        <Route path='/:sign' component={App} />
        <Route>404, Not Found!</Route>
      </Switch>
    </Layout>
  </React.StrictMode >,
  document.getElementById('root')
)
