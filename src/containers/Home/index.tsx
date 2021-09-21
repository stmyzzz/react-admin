import { Layout } from 'antd'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from '../Home'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons'
const { Footer, Sider, Content } = Layout

// const { SubMenu } = Menu

const Nav = () => {
  return (
    <Layout>
      <Sider>
        <div>sider</div>
      </Sider>
      <Layout>
        {/* <Header></Header> */}
        <Content style={{ backgroundColor: '#fff', margin: '20px' }}>
          <Switch>
            <Redirect exact={true} from='/' to='/home'></Redirect>
            <Route path='/home' component={Home}></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', color: '#cccccc' }}>
          推荐使用谷歌浏览器，可以获得最佳页面操作体验
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Nav
