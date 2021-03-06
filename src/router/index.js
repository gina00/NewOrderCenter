import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)

export const constantRouterMap = [{
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index')
        }]
    },
    {
        path: '/totalordermanage',
        component: Layout,
        redirect: '/totalordermanage/index',
        name: 'totalordermanage',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/totalordermanage/index')

        }]
    },
    {
        path: '/shoppingmanage',
        component: Layout,
        redirect: '/shoppingmanage/index',
        name: 'shoppingmanage',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/shoppingmanage/index')

        }]
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})