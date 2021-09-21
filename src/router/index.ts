import Login from '../pages/Login'
export const routes = [
  {
    key: 'login',
    path: '/login',
    name: '合同管理',
    component: Login
  }
  // {
  //   key: 'auth',
  //   name: '权限管理',
  //   children: [
  //     {
  //       key: 'userlist',
  //       path: '/userList',
  //       name: '账户管理',
  //       component: UserList,
  //       access: ['BserBserIndex']
  //     },
  //     {
  //       key: 'rolelist',
  //       path: '/roleList',
  //       name: '角色管理',
  //       component: RoleList,
  //       access: ['BserRoleIndex']
  //     }
  //   ]
  // }
]
