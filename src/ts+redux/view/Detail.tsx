import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import store from '../redux/store'

interface IParam {
  id: string
}

export default class Detail extends Component<RouteComponentProps<IParam>> {
  componentDidMount() {
    store.dispatch({
      type: 'hide'
    })
  }
  componentWillUnmount() {
    store.dispatch({
      type: 'show'
    })
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
