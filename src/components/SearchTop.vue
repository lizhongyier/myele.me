<template>
	<div class="search-top">
		<div class="address">
			<i class="el-icon-location"></i><span>人民大厦</span><i class="el-icon-caret-bottom"></i>
		</div>
		<div class="searcharea">
			<el-input placeholder="请输入商家、商品名称"  prefix-icon="el-icon-search" v-model="input10" clearable></el-input>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.search-top{
		width: 100%;
		height: 100px;
		background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
	    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
	    background-image: linear-gradient(90deg,#0af,#0085ff);
	    position: fixed;
	    top: 0px;
	    left: 0px;
	    z-index: 99999;
	}
	.searcharea{
		width:100%;
		padding:0px 20px;
		box-sizing: border-box;
	}
	.searcharea .el-input{
		width: 100%;
	}
	.address{
		margin: 10px 20px;
		color: #FFFFFF;
		font-size: 18px;
	}
	.address i{
		width: .346667rem;
	    width: 3.466667vw;
	    height: .413333rem;
	    height: 4.133333vw;
	    fill: #fff;
	}
	.address span{
	display: inline-block;
	margin: 0 1.333333vw;
    font-size: .453333rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}
</style>