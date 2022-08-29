import React, { Component } from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Film from '../view/Film'
import Cinema from '../view/Cinema'
import Center from '../view/Center'
import Detail from '../view/Detail'

export default class IndexRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/film' component={Film} />
          <Route path='/cinema' component={Cinema} />
          <Route path='/center' component={Center} />
          <Route path={'/detail/:id'} component={Detail} />

          <Redirect from='/' to='/film'></Redirect>
        </Switch>
      </HashRouter>
    )
  }
}
