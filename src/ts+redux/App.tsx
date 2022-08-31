import React, { Component } from 'react'
import IndexRouter from './router/Index'
import store from './redux/store'

export default class App extends Component {
  state = {
    isShow: store.getState().isShow
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        isShow: store.getState().isShow
      })
    })
  }
  render() {
    return (
      <>
      <IndexRouter></IndexRouter>
      {
        this.state.isShow  && (
      <div style={{paddingTop:'40px', fontSize:'26px'}}>
          我是底部导航栏
      </div>
        )
      }
      </>
    )
  }
}
