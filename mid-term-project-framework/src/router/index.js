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
		component: () => import("../views/Dashboard"),
	},
	{
		path: '/Calendar',
		name: 'Calendar',
		component: () => import("../views/Calendar"),
	},
	{
		path: '/People',
		name: 'People',
		component: () => import("../views/People"),
	},
	{
		path: '/Team',
		name: 'Team',
		component: () => import("../views/Team"),
	},

]

const router = new VueRouter({
	routes
})

export default router
