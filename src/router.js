import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Homeone from './views/Homeone.vue'
import Home from './views/Home.vue'
import Impactanalysis from './views/Impactanalysis/Impactanalysis.vue' //传播力
import AssociatedMedia from './views/Impactanalysis/AssociatedMedia/AssociatedMedia.vue' //合作媒体
import ManuscriptLibrary from './views/Impactanalysis/manuscriptLibrary/manuscriptLibrary.vue' //通讯稿件
import MeidiaListMain from './views/Impactanalysis/AssociatedMedia/MeidiaListMain.vue' //合作媒体报道
import MeidiaList from './views/Impactanalysis/AssociatedMedia/meidiaList.vue' //合作媒体报道
import AnalysisDetaile from './views/Impactanalysis/AssociatedMedia/analysisDetaile.vue' //合作媒体稿件分析






Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '',
            name: 'home',
            component: Home,
            children: [{
                path: '',
                name: 'impactanalysis',
                component: Impactanalysis,
                children: [{
                    path: '/', //合作媒体
                    name: 'associatedMedia',
                    component: AssociatedMedia
                }, {
                    path: '/manuscriptLibrary', //通讯稿件
                    name: 'manuscriptLibrary',
                    component: ManuscriptLibrary
                }]
            }, {
                path: '',
                name: 'meidiaListMain',
                component: MeidiaListMain,
                children: [{
                    path: '/meidiaList', //合作媒体
                    name: 'meidiaList',
                    component: MeidiaList
                }]
            }, {
                path: '/analysisDetaile', //合作媒体稿件分析
                name: 'analysisDetaile',
                component: AnalysisDetaile,
            }],
        }, {
            path: '/homeone',
            name: 'homeone',
            component: Homeone
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})