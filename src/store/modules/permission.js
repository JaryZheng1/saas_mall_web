import { constantRouterMap } from '@/router/routers'
import Layout from '@/layout/index'

const permission = {
  state: {
    routers: constantRouterMap,
    levelRouters: [],
    activeRoute: '',
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      routers.push({ path: '*', redirect: '/404', hidden: true })
      state.routers = constantRouterMap.concat(routers)
      state.levelRouters = routers
    },
    SET_ACTIVEROUTE: (state, data) => {
      state.activeRoute = data
    },
    SET_LEVELROUTERS: (state, data) => {
      state.levelRouters = data
    }
  },
  actions: {
    GenerateRoutes({ commit }, asyncRouter) {
      commit('SET_ROUTERS', asyncRouter)
    },
    setActiveRoute({ commit }, route) {
      console.log(route)
      commit('SET_ACTIVEROUTE', route)
    }
  }
}

export const filterAsyncRouter = (routers) => { // 遍历后台传来的路由字符串，转换为组件对象
  return routers.filter(router => {
    if (router.component) {
      if (router.component === 'Layout') { // Layout组件特殊处理
        router.component = Layout
      } else {
        const component = router.component
        router.component = loadView(component)
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
}

export const loadView = (view) => {
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default permission
