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

import LoadingComp from './../LoadingComp.vue'
export default {
	name: 'mainmenu',
	data: () => ({
		menu: {},
		loading: true,
		counts: {},
		sumOfAll: 0,
		sumOfPrice: 0
	}),
	async mounted() {
		try {
			this.loading = true;
			await this.getAll();

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
      'cart'
    ]),

		sumOfAllOrder() {
			this.sumOfAll = 0
			for (var i in this.counts) {
				this.sumOfAll += this.counts[i]
			}
			return this.sumOfAll;
		},

		price() {
			this.sumOfPrice = 0;
			for (var i in this.menu) {
				this.sumOfPrice += (this.menu[i].price * this.counts[i])
			}
			return this.sumOfPrice;
		}
	},

	methods: {
		async getAll() {
			try {
				const q = this.cart;
				q.forEach((x, i) => {
					this.menu[x.name] = x

					this.counts[x.name] = (this.counts[x.name] || 0) + 1;
				});

			} catch (e) {
				console.log(e);
			}
		},

		async decrease(pizza) {
			try {
				this.counts[pizza.name] = this.counts[pizza.name] - 1
				if (this.counts[pizza.name] <= 0) {
					delete this.counts[pizza.name]
					delete this.menu[pizza.name]
				}
			} catch (e) {
				// statements
				console.log(e);
			}
		},
		async increase(pizza) {
			try {
				this.counts[pizza.name] = this.counts[pizza.name] + 1;
			} catch (e) {
				// statements
				console.log(e);
			}
		},
		async order() {},
		async emptyCard() {
			try {
				// statements
				await this.$store.dispatch('setCart', 0);
				this.menu = []
			} catch (e) {
				// statements
				console.log(e);
			}
		}
	},

	components: {
		LoadingComp,
	}

}