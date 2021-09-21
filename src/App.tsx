import React from 'react'
import Login from './pages/Login'
import Home from './containers/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
