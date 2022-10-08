import {
	db,
	auth,
	provider
} from "../../firebase.js";

import {
	collection,
	doc,
	getDocs,
	where,
	orderBy,
	limit,
	query,
} from "firebase/firestore";

import {
	signInWithRedirect,
	getRedirectResult
} from 'firebase/auth';


import {
	mapState
} from 'vuex'

import LoadingComp from "./../LoadingComp.vue"
export default {
	name: 'menuOfTheWeek',
	data: () => ({
		menu: [],
		loading: false,
	}),

	async mounted() {
		try {
			this.loading = true;
			await this.getAll();

			if (!this.isUserLoggedIn) {
				const result = await getRedirectResult(auth)
				console.log(result.user)

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
			this.loading = false;
		} finally {
			this.loading = false;
		}

	},

	computed: {
		...mapState([
      'isUserLoggedIn',
      'user',
    ]),

	},

	methods: {
		async getAll() {
			try {
				const menuRef = collection(db, "menu")
				const q = query(menuRef, orderBy("name", "desc"), limit(3));
				const qq = await getDocs(q)
				qq.forEach((doc) => {
					this.menu = [...this.menu, doc.data(), ]
				});
			} catch (e) {
				// statements
				console.log(e);
			}
		},

		async login() {
			try {
				await signInWithRedirect(auth, provider);
			} catch (e) {
				console.log(e);
			}
		},

		async addToCart(pizza) {
			try {
				console.log(`${pizza}`)
				const order = {
					name: pizza.name,
					imageAdress: pizza.imageAdress,
					price: pizza.price
				}
				this.$store.dispatch('setCart', order)
			} catch (e) {
				// statements
				console.log(e);
			} finally {
				// statements
			}
		},
	},

	components: {
		LoadingComp,
	}

}