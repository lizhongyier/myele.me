<template>
	<div class="foot-bar">
		<ul class="footer">
			<li>
				<router-link to="/">
				<i class="fa fa-home"></i>
				<span>首页</span>
				</router-link>
			</li>
			<li>
				<router-link to="/discover">
				<i class="el-icon-view"></i>
				<span>发现</span>
				</router-link>
			</li>
			<li>
				<router-link to="/order">
				<i class="el-icon-tickets"></i>
				<span>订单</span>
				</router-link>
			</li>
			<li>
				<router-link to="/user">
				<i class="fa fa-user"></i>
				<span>我的</span>
				</router-link>
			</li>
		</ul>
		
	</div>
</template>

<script>
</script>

<style>
	.footer{
	list-style-type: none;
	position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 20px 0px 0px 0px;
	margin: 0px;
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
	}
	.footer li a{
	outline: 0;
	display: inline-block;
	padding: 0px;
	margin: 0px;
    color: inherit;
    text-decoration: none;
	}
	.footer li{
	display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0px;
	margin: 0px;
    text-align: center;
	}
	.footer li a{
		cursor: pointer;
		color: #8e8e93;;
	}
	.footer li a.router-link-exact-active{
		color:#0085ff;
	}
	.footer li a i{
		display: block;
		padding: 0px;
		margin: 0px;
		cursor: pointer;
		font-size: 20px;
	}
	.footer li a span{
		font-size: 18px;
		display: block;
		height: 30px;
		line-height: 25px;
		width: 50px;
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
		cursor: pointer;
	}
</style>