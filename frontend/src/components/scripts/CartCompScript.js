import {
	db,
	auth,
	provider
} from "../../firebase.js";

import {
	collection,
	doc,
	addDoc
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
		sumOfPrice: 0,
		message: ''
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
		//instead of writing 'this.$store.state.state-name'
		//just write this.state-name(example, this.user)
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
		async emptyCard() {
			try {
				await this.$store.dispatch('setCart', 0);
				this.menu = {};
				this.counts = {};
			} catch (e) {
				// statements
				console.log(e);
			}
		},

		async order() {
			try {
				this.loading = true
				const order = await addDoc(collection(db, 'orders'), {
					customerName: this.user.displayName,
					customerId: this.user.uid,
					customerEmail: this.user.email,
					pizza: {
						pizzasOrderd: this.menu,
						numberOfPizzas: this.counts
					},
					payment: `$${this.sumOfPrice}`
				});
				this.message = "Your order was recieved successfully."
			} catch (e) {
				this.message = "something went wrong, try again later..."
				this.loading = false
				console.log(e);
			} finally {
				await this.$store.dispatch('setCart', 0);
				this.menu = {};
				this.counts = {};
				this.loading = false
				// Get the modal
				let modal = document.getElementById("myModal");

				// Get the button that opens the modal
				let btn = document.getElementById("myBtn");

				// Get the <span> element that closes the modal
				let span = document.getElementsByClassName("close")[0];

				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = () => {
					modal.style.display = "none";
					this.$router.push('/')
				}

				// When the user clicks anywhere outside of the modal, close it
				window.onclick = (event) => {
					if (event.target == modal) {
						modal.style.display = "none";
						this.$router.push('/')
					}
				}
			}
		},
	},

	components: {
		LoadingComp,
	}

}