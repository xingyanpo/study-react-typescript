import React, { Component } from 'react'
interface IState {
  input: string,
  list: string[]
}
export default class App extends Component<any, IState> {
  state = {
    input: '',
    list: []
  }
  inputRef = React.createRef<HTMLInputElement>()
  render() {
    return (
      <div>
        {/* <input value={this.state.input} onChange={(eve) => {
          this.setState({
            input: eve.target.value
          })
        }}></input> */}

        <input ref={this.inputRef}></input>
        <button onClick={() => {
          console.log((this.inputRef.current as HTMLInputElement).value)  // 类型断言as ,作用：断定Input标签
          this.setState({
            list: [...this.state.list, (this.inputRef.current as HTMLInputElement).value]
            
          })
          
        }}>add</button>
        <div>
            {
            this.state.list.map((item, index) => 
            <li key={item + index}>{item}</li>
            )
             } 
        </div>
      </div>
    )
  }
}
