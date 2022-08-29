import React, { Component } from 'react'
import axios from 'axios'
import {RouteComponentProps} from 'react-router-dom'

interface IItem {
  name: string,
  filmId: number
}

export default class Film extends Component<RouteComponentProps, any> {
  state = {
    list: []
  } 
  componentDidMount() {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
      headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
      }
  }).then(res=>{
      this.setState({
        list: res.data.data.films
      })
  })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item:IItem, index) => 
            <li key={item.name} onClick={() => {
              this.props.history.push(`/detail/${item.filmId}`)
            }}>{item.name}</li>
          )
        }
      </div>
    )
  }
}
