import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
const routes:RouteRecordRaw [] =[
    {
        path:'/',
        component:Container,
        children:[
            {
                path:'/',
                component:Home
            },
            {
                path:'/chooseIcon',
                //懒加载
                component:()=>import('../views/chooseIcon/index.vue')
            }
        ]
    }
]


const router =  createRouter({
    routes,
    history:createWebHistory()
})

//把router导出去
export default router