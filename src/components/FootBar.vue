<template>
	<div class="foot-bar">
		<ul class="footer">
			<li>
				<router-link to="/">
				<i class="fa fa-home"></i>
				<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<i class="el-icon-view"></i>
				<p>发现</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<i class="el-icon-tickets"></i>
				<p>订单</p>
				</router-link>
			</li>
			<li>
				<router-link to="/">
				<i class="fa fa-user"></i>
				<p>我的</p>
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
    padding-top: .12rem;
    padding-top: 1.2vw;
    background-color: #fff;
    height: 1.333333rem;
    height: 13.333333vw;
    -webkit-box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    -webkit-box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
	}
	.footer li a{
	outline: 0;
    color: inherit;
    text-decoration: none;
	}
	.footer li{
	display: block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
	}
	.footer li a i{
		display: block;
		padding: 0px;
		margin: 0px;
	}
	.footer li a p{
		display: block;
		padding: 0px;
		margin: 0px;
	}
</style>