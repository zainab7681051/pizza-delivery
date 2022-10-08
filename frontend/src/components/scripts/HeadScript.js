import {
	db,
	auth,
	provider
} from "../../firebase.js";

import {
	signInWithRedirect,
	getRedirectResult
} from 'firebase/auth';


import {
	mapState
} from 'vuex'

export default {
	name: 'headComp',
	data: () => ({}),

	async mounted() {
		try {
			if (!this.isUserLoggedIn) {
				const result = await getRedirectResult(auth)

				this.$store.dispatch(
					'setToken',
					result
					.user
					.accessToken
				)

				this.$store.dispatch(
					'setUser',
					result
					.user
				)
			}

		} catch (e) {
			console.log(e);
		}

	},

	computed: {
		...mapState([
      'isUserLoggedIn',
      'user',
    ]),

	},
	methods: {
		async login() {
			try {
				await signInWithRedirect(auth, provider);
			} catch (e) {
				console.log(e);
			}
		},
	}
}