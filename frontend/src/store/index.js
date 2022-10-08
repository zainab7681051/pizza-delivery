import {
	createStore
} from 'vuex'

import createPersistedState from 'vuex-persistedstate'

export default createStore({
	strict: true,
	plugins: [
	    createPersistedState()
	  ],
	state: {
		token: null,
		user: null,
		isUserLoggedIn: false,
		cart: []
	},
	getters: {},
	mutations: {
		setToken(state, token) {
			state.token = token
			state.isUserLoggedIn = !!(token)
		},
		setUser(state, user) {
			state.user = user
		},
		setCart(state, cart) {
			try {
				state.cart = [cart, ...state.cart]
				console.log(state.cart)
			} catch (e) {
				console.log('setters', e)
			}
		}

	},
	actions: {
		setToken({
			commit
		}, token) {
			commit('setToken', token)
		},

		setUser({
			commit
		}, user) {
			commit('setUser', user)
		},

		setCart({
			commit
		}, cart) {
			commit('setCart', cart)
		},
	},
	modules: {}
})