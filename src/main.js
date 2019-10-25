import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "u-reset.css"
import VCharts from 'v-charts';
// 1.引入组件
import login from "./view/login"
import admin from "./view/admin"
import studentadd from './view/student/add'
import studentquery from './view/student/query'
import studentedit from './view/student/edit'
import student from './view/student'
import write from './view/views/daily/write'
import query from './view/views/daily/query'
import vcharts from './view/vcharts'
Vue.config.productionTip = false
//插件，引入，
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VCharts)
let router = new VueRouter({
    mode:'history',
    routes: [
        {path: '/', component: login},
        {path: '/login', component: login},
        {path: '/student', component: student,name:'student',meta:{title:'学生主界面'},children: [
                {path: 'write', component: write,meta:{title:'学生填写日报'}},
                {path: 'query', component: query,meta:{title:'学生查看日报'}}
            ]},
        {path: '/admin', component: admin,name:'admin',
        children:[
            {path: 'studentadd', component: studentadd,meta:{title:'学生添加'}},
            {path: 'studentquery', component: studentquery,meta:{title:'学生编辑'}},
            {path: 'studentedit/:id', component: studentedit,name: 'studentedit'},
            {path: 'vcharts', component: vcharts,meta:{title:'日报视图化'},name: 'vcharts'},
        ]},],
});
//导航守卫
//组件切换 设置文档标题
//1.监听组件切换2.当前组件标题3.设置文档标题
router.beforeEach((to,from,next)=>{
document.title=to.meta.title ||'学生日报管理系统';
next();
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
