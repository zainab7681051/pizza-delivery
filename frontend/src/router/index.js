import {
	createRouter,
	createWebHistory
} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/index.vue')
	},
	{
		path: '/menu',
		name: 'mainmenu',
		component: () => import('../views/menu.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('../views/404.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router