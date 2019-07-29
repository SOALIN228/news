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

