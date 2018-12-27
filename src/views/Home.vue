<template>
	<div class="home">
		<search-top></search-top>
		<category></category>
		<div class="hotpro">
			<ul class="setmeal">
				<li>
					<div class="setmeallist">
						<h3>品质套餐</h3>
						<div class="title">搭配齐全吃得好</div>
						<div class="purchase purchasecolor">立即抢购></div>
						<div class="pic"><img src="../../public/img2/pro1.png" /></div>
					</div>
				</li>
				<li>
					<div class="setmeallist">
						<h3 class="purchasecolor2">限量抢购</h3>
						<div class="title">超值美味9.9元起</div>
						<div class="purchase"><span class="purchasecolor2">4312</span>人正在抢></div>
						<div class="pic"><img src="../../public/img2/pro2.png" /></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="hotSwiper">
			<div class="block" height="100px">
				<el-carousel height="100px">
					<el-carousel-item height="100px" :key="item">
						<img src="../../public/img2/banner1.jpeg" style="width: 100%;"/>
					</el-carousel-item>
					<el-carousel-item height="100px" :key="item">
						<img src="../../public/img2/banner2.jpeg" style="width: 100%;"/>
					</el-carousel-item>
					<el-carousel-item height="100px" :key="item">
						<img src="../../public/img2/banner3.jpeg" style="width: 100%;"/>
					</el-carousel-item>
					<el-carousel-item height="100px" :key="item">
						<img src="../../public/img2/banner4.jpeg" style="width: 100%;"/>
					</el-carousel-item>
					<el-carousel-item height="100px" :key="item">
						<img src="../../public/img2/banner5.jpeg" style="width: 100%;"/>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<recomend></recomend>
		<product-list></product-list>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import FootBar from "@/components/FootBar";
	import SearchTop from "@/components/SearchTop";
	import Category from "@/components/Category";
	import Recomend from "@/components/Recomend";
	import ProductList from "@/components/ProductList";
	export default {
		data() {
			return {}
		},
		components: {
			SearchTop,
			FootBar,
			Category,
			Recomend,
			ProductList
		}
	}
</script>

<style>
	.hotpro {
		width: 100%;
		padding: 8px;
		box-sizing: border-box;
	}
	
	.setmeal {
		width: 100%;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		zoom: 1;
		list-style-type: none;
	}
	
	.setmeal li .setmeallist {
		margin: 0px 2px;
		background-color: #EEEEEE;
	}
	
	.setmeal li {
		float: left;
		width: 50%;
		/*margin: 0px 2px;*/
		height: 150px;
	}
	
	.setmeal li .setmeallist h3 {
		padding: 10px;
		margin: 0px;
	}
	
	.setmeal li .title {
		font-size: 16px;
		color: #777;
		padding: 5px 10px;
	}
	
	.setmeal li .purchase {
		font-size: 12px;
		padding: 5px 10px;
	}
	
	.setmeal li .pic {
		margin-top: -20px;
		width: 100%;
		padding-left: 40%;
		box-sizing: border-box;
	}
	
	.setmeal li .pic img {
		width: 100%;
	}
	
	.purchasecolor {
		color: #af8260;
	}
	
	.purchasecolor2 {
		color: #e81919;
	}
	.hotSwiper{
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
	.hotSwiper .block{
		width: 100%;
	}
	.hotSwiper .block .el-carousel-item{
		width: 100%;
		height: auto;
		text-align: center;
	}
</style>