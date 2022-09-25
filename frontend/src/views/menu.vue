<template>

		<main class="l-main">
			<main-menu-section/>
			<menu-section/>
			<about-section/>
			<services-section/>
			<contact-section/>
		</main>

    
</template>

<script>
import MainMenuSection from '../components/MainMenu.vue'
import AboutSection from '../components/About.vue'
import ServicesSection from '../components/Services.vue'
import MenuSection from '../components/MenuOfTheWeek.vue'
import ContactSection from '../components/ContactUs.vue'
export default{
	name:"index",
	data:()=>({

	}),
	methods:{
	},
	components:{
		MainMenuSection,
		AboutSection,
		ServicesSection,
		MenuSection,
		ContactSection
	}
}

</script>
