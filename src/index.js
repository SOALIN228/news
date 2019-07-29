import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Layout} from 'antd'
import AppHeader from './components/Header'
import List from './containers/List'
import Detail from './containers/Detail'

import 'antd/dist/antd.css'
import './style.css'

const { Header, Footer, Content } = Layout


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout style={{ minWidth: 1300, height: '100%' }}>
          <Header className={'header'}>
            <AppHeader/>
          </Header>
          <Content className={'content'}>
            <Switch>
              <Route path={'/detail/:id'} component={Detail}/>
              <Route path={'/:id?'} component={List}/>
            </Switch>
          </Content>
          <Footer className={'footer'}>Footer</Footer>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
