# news
React 新闻网站

## 学到的知识
1. 路由使用react-router-dom

   ```react
   <BrowserRouter> // 路由都写在BrowserRouter中
     <Switch> // 使用Switch进行路由唯一匹配
       <Route path={'/detail'} component={Detail}/>
       <Route path={'/'} component={List}/> 
       // 根路由要写在最下面，因为任意路由都会被根路由匹配成功
     </Switch>
   </BrowserRouter>
   ```

2. 动态路由

   ```react
   <Route path={'/:id?'} component={List}/> // 添加？表示动态的参数可传可不传
   ```

   ```javascript
   this.props.match.params.id // 接收url传递的路由参数
   ```

3. 如果组件不再Switch中又想在js中使用路由相关的操作，可以使用withRouter，获取路由相关的操作

   ```react
   import {Link, withRouter} from 'react-router-dom'
   this.props.history.push('/') // 跳转到根路由
   export default withRouter(Login)
   ```
