<template>

    <header-comp/>

		<main class="l-main">
			<home-section/>
			<about-section/>
			<services-section/>
			<menu-section/>
			<contact-section/>
		</main>

    <footer-comp/>
    
</template>

<script>
import HomeSection from '../components/Home.vue'
import AboutSection from '../components/About.vue'
import ServicesSection from '../components/Services.vue'
import MenuSection from '../components/Menu.vue'
import ContactSection from '../components/ContactUs.vue'
export default{
	name:"index",
	data:()=>({

	}),
	methods:{
	},
	components:{
	    HeaderComp,
	    FooterComp.
		HomeSection,
		AboutSection,
		ServicesSection,
		MenuSection,
		ContactSection
	}
}
</script>
