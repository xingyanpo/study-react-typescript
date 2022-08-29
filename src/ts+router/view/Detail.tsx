import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IParam {
  id: string
}

export default class Detail extends Component<RouteComponentProps<IParam>> {
  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div>Detail</div>
    )
  }
}
