require('./styles/usage/app.scss')

var layout = require('./scripts/tpls/layout.string')
var common = require('./scripts/utils/util.common.js')

common.render(layout)

// components
import index from "./scripts/components/index.vue"
import my from "./scripts/components/my.vue"
import detail from "./scripts/components/detail.vue"
import shc from "./scripts/components/shc.vue"
import pl from "./scripts/components/pl.vue"
import nangua from "./scripts/components/nangua.vue"
import flexible from "./scripts/components/flexible.vue"
import propose from "./scripts/components/propose.vue"
// import store from './vuex/store'

// vue router 2
const routes = [{
    path: '/',
    component: index,
    children: [{
        path: '/my',
        component: my
    }]
}, {
    path: '/detail',
    component: detail
},{
	path: '/shc',
    component: shc
},{
	path: '/pl',
	component: pl
},{
	path: '/nangua',
	component: nangua
},{
	path: '/flexible',
	component: flexible
},{
	path: '/propose',
	component: propose
}
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

const app = new Vue({
    router
}).$mount('#app')
