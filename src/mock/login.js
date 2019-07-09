import { getParams } from '@/libs/util'
const USER_MAP = {
  super_admin: {
    name: 'super_admin',
    user_id: '1',
    access: ['super_admin', 'admin'],
    token: 'super_admin',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    name: 'admin',
    user_id: '2',
    access: ['admin'],
    token: 'admin',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  return { token: USER_MAP[req.userName].token }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
export const getUserMenus = req => {
  return [
    // 粘贴到这里就可以了
    // 需要把所有的component: () => import('@/view/**/*.vue')
    // 修改为component: 'view/**/*.vue'
    // 注意main和parent-view

    {
      path: '/multilevel',
      name: 'multilevel',
      meta: {
        icon: 'md-menu',
        title: '案卷期限'
      },
      component: 'components/main',
      children: [
        {
          path: 'level_2_1',
          name: 'level_2_1',
          meta: {
            icon: 'md-funnel',
            title: '期限综合查询'
          },
          component: 'view/multilevel/level-2-1.vue'
        }, {
          path: 'level_2_3',
          name: 'level_2_3',
          meta: {

            icon: 'md-funnel',

            title: '待扩展'
          },
          component: 'view/multilevel/level_2_3.vue'
        }
      ]
    },
    {
      path: '',
      name: 'doc',
      meta: {
        title: '更新日志',
        href: 'https://lison16.github.io/iview-admin-doc/#/',
        icon: 'ios-book'
      }
    }
  ]
}
