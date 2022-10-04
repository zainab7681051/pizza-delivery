import {
	db
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
			await this.getAll()
		} catch (e) {
			console.log(e)
			this.loading = false;
		} finally {
			this.loading = false;
		}

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
		}
	},
	components: {
		LoadingComp,
	}

}