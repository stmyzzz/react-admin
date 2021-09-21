import { Menu } from 'antd'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'
import './index.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { routes } from '../router'

const { SubMenu } = Menu
const App = () => {
  const renderRoute = children => {
    children.map(({ key, path, exact, component }) => {
      return <Route key={key} path={path} exact={exact} component={component} />
    })
  }
  return (
    <Router>
      <Menu style={{ width: 256 }} defaultOpenKeys={['sub1']} mode='inline'>
        <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
          <Menu.Item key='1'>
            <Link to='/login'></Link>
          </Menu.Item>
          <Menu.Item key='2'>Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='7'>Option 7</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='Navigation Three'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
        </SubMenu>
      </Menu>

      <Switch>
        {routes.map(({ key, path, exact, children, component }) => {
          if (children) return renderRoute(children)
          return (
            <Route key={key} path={path} exact={exact} component={component} />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
