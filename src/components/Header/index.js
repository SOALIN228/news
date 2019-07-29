import React, {Component, Fragment} from 'react'
import axios from 'axios'
import {Menu, Icon} from 'antd'
import logo from './logo.png'
import './style.css'

class AppHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  getMenuItems () {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id}>
          <Icon type={item.icon}/>{item.title}
        </Menu.Item>
      )
    })
  }

  componentDidMount () {
    axios.get('http://www.dell-lee.com/react/api/header.json').then((res) => {
      this.setState({
        list: res.data.data
      })
    })
  }

  render () {
    return (
      <Fragment>
        <img src={logo} alt="" className={'app-header-logo'}/>
        <Menu mode="horizontal"
              className={'app-header-menu'}
        >
          {this.getMenuItems()}
        </Menu>
      </Fragment>
    )
  }
}

export default AppHeader
