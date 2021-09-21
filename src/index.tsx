import React from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import reportWebVitals from './reportWebVitals'
import moment from 'moment'
// import { Provider } from 'react-redux'
// import store from './redux'
moment.locale('zh-cn')
ReactDOM.render(
  //全局配置
  <ConfigProvider locale={zhCN}>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </ConfigProvider>,
  document.getElementById('root')
)
reportWebVitals()
