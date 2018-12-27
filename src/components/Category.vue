<template>
	<div class="category-box">
		<div class="block">
			<el-carousel height="150px" :interval="8000" indicator-position="outside">
				<el-carousel-item v-for="item in 1"  :key="item">
					<ul class="navcategory">
						<li v-for="(item,index) in nav"><img :src="item.image" /><a v-text="item.title"></a></li>
					</ul>
				</el-carousel-item>
				<el-carousel-item v-for="item in 1"  :key="item">
					<ul class="navcategory">
						<li v-for="(item,index) in nav2"><img :src="item.image" /><a v-text="item.title"></a></li>
					</ul>
				</el-carousel-item>
			</el-carousel>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					image: "/img1/icon1.png",
					title: "美食"
				}, {
					image: "/img1/icon2.png",
					title: "美食"
				}, {
					image: "/img1/icon3.png",
					title: "美食"
				}, {
					image: "/img1/icon4.png",
					title: "美食"
				}, {
					image: "/img1/icon5.png",
					title: "美食"
				}, {
					image: "/img1/icon6.png",
					title: "美食"
				}, {
					image: "/img1/icon7.png",
					title: "美食"
				}, {
					image: "/img1/icon8.png",
					title: "美食"
				}, {
					image: "/img1/icon9.png",
					title: "美食"
				}, {
					image: "/img1/icon10.png",
					title: "美食"
				}, ],
			nav2:[{
					image: "/img1/icon11.png",
					title: "美食"
				}, {
					image: "/img1/icon12.png",
					title: "美食"
				}, {
					image: "/img1/icon10.png",
					title: "美食"
				}, {
					image: "/img1/icon14.png",
					title: "美食"
				}, {
					image: "/img1/icon15.png",
					title: "美食"
				}, {
					image: "/img1/icon16.png",
					title: "美食"
				}, {
					image: "/img1/icon17.png",
					title: "美食"
				}, {
					image: "/img1/icon18.png",
					title: "美食"
				}, {
					image: "/img1/icon19.png",
					title: "美食"
				},{
					image: "/img1/icon20.png",
					title: "美食"
				} ]	
			}
		}
	}
</script>

<style>
	.category-box .navcategory{
		width: 100%;
		height: 150px;
		margin: 0px;
		padding: 0px;
		list-style-type: none;
	}
	.category-box .navcategory li{
		float: left;
		width: 20%;
		height: 70px;
		margin: 5px 0px;
		text-align: center;
	}
	.category-box .navcategory li img{
		width: 1.066667rem;
	    width: 10.666667vw;
	    height: 1.066667rem;
	    height: 10.666667vw;
	    vertical-align: top;
	}
	.category-box .navcategory li a{
		display: block;
	    margin-top: .133333rem;
	    margin-top: 1.333333vw;
	    color: #666;
	    font-size: .32rem;
	}
	.category-box .el-carousel{
		width: 100%;
		overflow: hidden;
	}
	.category-box .el-carousel__item:nth-child(2n) {
		background-color: #FFFFFF;
	}
	
	.category-box .el-carousel__item:nth-child(2n+1) {
		background-color: #FFFFFF;
	}
	.category-box{
		margin-top: 110px;
	}
</style>