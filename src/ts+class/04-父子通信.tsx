import React, { Component } from 'react'

export default class App extends Component {
  state = {
    isShow: true
  }
  render() {
    return (
      <div>

        <Children cb={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}></Children>

        {this.state.isShow && <div>siderbar</div>}
      </div>
    )
  }
}

interface IProps {
  cb:() => void
}
class Children extends Component<IProps,any> {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.cb()
        }}>click</button>
      </div>
    )
  }
}
