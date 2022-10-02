import {
	db
} from '../../firebase.js'
import {
	collection,
	getDocs
} from "firebase/firestore";
export default {
	name: 'mainmenu',
	data: ( ) => ( {
		menu: [ ]
	} ),

	async mounted( ) {
		this.menu = await getDocs( collection( db, "menu" ) );
		this.menu.forEach( ( pizza, index ) => {
			console.log( {
				pizza
			} )
		} );
	}
}