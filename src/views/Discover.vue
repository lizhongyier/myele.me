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
				<span style="display: inline-block; margin: 5px 0px; width: 10px; border: 1px solid #666666;"></span><i class="fa fa-clock-o" style="margin: 5px; color: #E81919;"></i>限时好礼<span style="display: inline-block; margin: 5px; width: 10px; border: 1px solid #666666;"></span>
				<p style="display: block; height: 20px; line-height: 20px; margin: 0px; font-size: 12px; color: #999; padding: 0px;">金币换好礼</p>
			</div>
			<ul class="middle">
				<li>
					<span>限时优惠</span><img src="../../public/img2/quan1.png"/>
				    <div class="textt"><p>3元饿了么鲜果超市红包</p><b style="color: red;">90金币</b><span style="text-decoration: line-through;color: #999;">￥3</span></div>
				</li>
				<li>
					<span>特价换购</span><img src="../../public/img2/quan2.jpeg"/>
				    <div class="textt"><p>扫地机器人</p><b style="color: red;">190金币</b><span style="text-decoration: line-through;color: #999;">￥99</span></div>
				</li>
				<li>
					<span>特价换购</span><img src="../../public/img2/quan3.jpeg"/>
				    <div class="textt"><p>电动按摩理疗仪</p><b style="color: red;">290金币</b><span style="text-decoration: line-through;color: #999;">￥299</span></div>
				</li>
			</ul>
			<div class="watchmore"><a href="#">查看更多></a></div>
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
	.middlebody{
		width: 100%;
		height: 350px;
		margin-top: 10px;
		background-color: #FFFFFF;
	}
	.middletop{
		width: 100%;
		height: 70px;
		padding-top: 10px;
		text-align: center;
		font-size: 18px;
		box-sizing: border-box;
	}
	.middlebody .middle{
		width: 100%;
		list-style-type: none;
		padding:0px 10px;
		box-sizing: border-box;
	}
	.middlebody .middle li{
		float: left;
		width: 33%;
		position: relative;
	}
	.middlebody .middle li img{
		width: 100%;
	}
	.middlebody .middle li>span{
		position: absolute;
		top: 0px;
		left: 0px;
		color: #fff;
		font-size: .293333rem;
	    background: #413d3c;
	    padding: .066667rem;
	    padding: .666667vw;
	}
	.middlebody .middle li .textt{
		font-size: .346667rem;
	    color: #333;
	    margin-bottom: .133333rem;
	    margin-bottom: 1.333333vw;
		width: 100%;
		
	}
	.middlebody .middle li .textt{
		text-align: center;
	}
	.middlebody .middle li .textt p{
		display: block;
		margin-block-start: 1em;
	    margin-block-end: 1em;
	    margin-inline-start: 0px;
	    margin-inline-end: 0px;
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
	}
	.watchmore{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		padding: 10px;
		box-sizing: border-box;
	}
	.watchmore a{
		text-decoration: none;
		color: #666666;
		font-size: 12px;
	}
</style>