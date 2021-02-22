import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import("../views/Home"),
	},
	{
		path: '/Dashboard',
		name: 'Dashboard',
		component: () => import("../views/Dashboard")

	}
]

const router = new VueRouter({
	routes
})

export default router
