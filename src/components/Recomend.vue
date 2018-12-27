<template>
	<div class="recomendarea">
		<div class="recomend">
			<span></span><b>推荐商家</b><span></span>
		</div>
		<div class="recomend-nav">
			<a href="#" @click="indexNav=index" :class="{active:indexNav==index}" v-for="(item,index) in recomendNav">
				<span v-text="item.title">
				</span>
				<i class="fa" :class="item.icon"></i>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recomendNav: [{
					title: "综合排序",
					icon: "fa-caret-down"
				},{
					title: "距离最近",
					icon: ""
				},{
					title: "品质联盟",
					icon: ""
				},{
					title: "筛选",
					icon: "fa-filter"
				}],
				indexNav: 0
			}
		}
	}
</script>

<style>
	.recomendarea {
		width: 100%;
	}
	
	.recomendarea .recomend {
		width: 100%;
		text-align: center;
		height: 45px;
		line-height: 45px;
	}
	
	.recomendarea .recomend span {
		display: inline-block;
		width: 20px;
		border: 1px solid #8E8E93;
		margin: 5px;
	}
	
	.recomendarea .recomend-nav {
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
	
	.recomendarea .recomend-nav a {
		display: inline-block;
		width: 25%;
		text-align: center;
		text-decoration: none;
		color: #666666;
		font-size: 14px;
	}
	
	.recomendarea .recomend-nav a i {
		margin: 0px 5px;
	}
	
	.recomendarea .recomend-nav a.active {
		color: #333333;
		font-size: 16px;
	}
</style>