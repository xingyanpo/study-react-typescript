import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Children name='hhh'></Children>
      </div>
    )
  }
}

interface IProps {
  name: string
}

class Children extends Component<IProps, any> {
  render() {
    return (
      <div>
        child-{this.props.name}
      </div>
    )
  }
}
