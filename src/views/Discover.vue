<template>
	<div class="discoverbox">
		<div class="toparea">
			<img src="../../public/img2/top1.png"/>
			<div class="topleft">
				<p style="color: rgb(255, 153, 0); font-size: 18px;">金币商城</p>
				<p style="color: #999999; font-size: 14px; margin-top: -10px;">0元好物在这里</p>
				<div class="giftimg">
				<a href="#">
				<img src="../../public/img2/gift.png"/>
				</a>
				</div>
			</div>
			<div class="topright">
				<div class="box1">
					<div class="boxtxt">
					<p style="color: rgb(27, 169, 225); font-size: 18px;">推荐有奖</p>
					<p style="color: #999999; font-size: 14px; margin-top: -10px;">10元现金拿不停</p>
					</div>
					<a href="#"><img src="../../public/img2/award.png"/></a>
				</div>
				<div class="box2">
					<div class="boxtxt">
				    <p style="color: rgb(237, 102, 96); font-size: 18px;">周边优惠</p>
					<p style="color: #999999; font-size: 14px; margin-top: -10px;">领取口碑好券</p>
					</div>
					<a href="#"><img src="../../public/img2/around.png"/></a>
				</div>
			</div>
		</div>
		<div class="middlebody">
			<div class="middletop">
				<span></span><i class="fa fa-clock-o"></i>限时好礼<span></span>
				<p>金币换好礼</p>
			</div>
		</div>
	<foot-bar></foot-bar>
	</div>
</template>

<script>
	import FootBar from "@/components/FootBar";
	export default {
		data() {
			return {}
		},
		components: {
			FootBar,
		}
	}
</script>

<style>
	.discoverbox{
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}
	.toparea{
		width: 100%;
		height: 40%;
		overflow: hidden;
		zoom: 1;
		background-color: #FFFFFF;
		box-sizing: border-box;
	}
	.toparea>img{
		width: 100%;
	}
	.toparea .topleft{
		float: left;
		width: 50%;
		height: 100%;
		padding-right: 10px;
		padding-left: 10px;
		box-sizing: border-box;
		border-right: 1px solid #EEEEEE;
	}
	.toparea .topleft a{
		display: inline-block;
		width: 100%;
		padding-left: 55%;
		box-sizing: border-box;
	}
	.toparea .topleft a img{
		width: 100%;
	}
	.toparea .topright{
		float: right;
		width: 50%;
		
	}
	.toparea .topright .box1{
		width: 100%;
		height: 50%;
		padding-right: 10px;
		padding-left: 10px;
		box-sizing: border-box;
		overflow: hidden;
		zoom: 1;
	}
	.toparea .topright .box1 a{
		float: right;
		width: 30%;
		height: 100%;
		padding-top: 10px;
	}
	.toparea .topright .boxtxt{
		float: left;
		width: 70%;
		height: 100%;
	}
	.toparea .topright .box1 a img{
		width: 100%;
		height: 100%;
	}
	.toparea .topright .box2{
		width: 100%;
		height: 50%;
		overflow: hidden;
		padding-right: 10px;
		padding-left: 10px;
		box-sizing: border-box;
		zoom: 1;
		border-top: 1px solid #EEEEEE;
	}
	.toparea .topright .box2 a{
		float: right;
		width: 30%;
		height: 100%;
		padding-top: 10px;
	}
	.toparea .topright .box2 a img{
		width: 100%;
		height: 100%;
	}
</style>