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
    }, {
        path: '/card',
        component: Layout,
        redirect: '/card/index',
        name: 'card',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/card/index')

        }]
    },
    {
        path: '/saleordercenter',
        component: Layout,
        redirect: '/saleordercenter/index',
        name: 'saleordercenter',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/saleorder/index')

        }]
    },
    {
        path: '/backstagesalesman',
        component: Layout,
        redirect: '/backstagesalesman/index',
        name: 'backstagesalesman',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/backstagesalesman/index')

        }]
    },
    {
        path: '/payform',
        component: Layout,
        redirect: '/payform/index',
        name: 'payform',
        hidden: true,
        children: [{
            path: 'index',
            component: () =>
                import ('@/views/payform/index')

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