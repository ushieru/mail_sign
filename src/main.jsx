import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from "wouter";
import './index.css'
import Layout from './components/Layout'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Switch>
        <Route path='/'>Hello!</Route>
        <Route path='/:id' component={App} />
        <Route>404, Not Found!</Route>
      </Switch>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)
