import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'index',
		component: ( ) => import( '../views/index.vue' )
  },
	{
		path: '/404',
		name: '404',
		component: ( ) => import( '../views/404.vue' )
  },
]

const router = createRouter( {
	history: createWebHashHistory( ),
	routes
} )

export default router