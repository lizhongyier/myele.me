<template>
	<div class="box">
		<order-login></order-login>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import FootBar from "@/components/FootBar";
	import OrderLogin from "@/components/OrderLogin";
	export default {
		data() {
			return {}
		},
		components: {
			FootBar,
			OrderLogin
		}
	}
</script>

<style>
html,body,#app{
		width: 100%;
		height: 100%;
	}

</style>