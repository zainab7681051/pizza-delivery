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
		counts: {}
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

	},

	methods: {
		async getAll() {
			try {
				const q = this.cart;
				q.forEach((x, i) => {
					this.menu[x.name] = x

					this.counts[x.name] = (this.counts[x.name] || 0) + 1;
				});
				/*
								for (var i = 0; i < names.length; i++) {
									for (var j = 0, c = 0; j < this.menu.length; j++) {
										if (this.menu[j].name === names[i] && c === 0) {
											
											c++;

											console.log(`${this.menu[j].name}==>${names[i]}`)
										} else if (this.menu[j].name === names[i] && c !== 0) {
											this.menu.splice(j, 1)
											console.log(`${this.menu[j].name} was deleted==>${names[i]}`)
										}
										else {
											console.log('ELSE', `${this.menu[j].name}==>${names[i]}`)
										}
									}
								}*/
				console.log('menu', this.menu)

			} catch (e) {
				console.log(e);
			}
		},

		async decrease(pizza) {},
		async increase(pizza) {},
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