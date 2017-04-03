<template lang="html">
	<div id="home">
		<header class="top">
			<h1 class="logo"></h1>
			<div class="home-addr">
				<span class="location"><img src="./imgs/location-white.png"/></span>
				<p class="addr">请填写地址</p>
				<span class="arr"><img src="./imgs/down-arr1.png"/></span>
			</div>
			<div class="search"><img src="./imgs/search-white.png"/></div>
		</header>
		<homeswiper></homeswiper>
		<navlist></navlist>
		<advertising></advertising>
		<goods></goods>
	</div>
</template>

<script>
import homeswiper from './homeswiper'
import navlist from './navlist'
import advertising from './advertising'
import goods from './goods'
	export default{
		components:{
			homeswiper,
			navlist,
			advertising,
			goods
		}
	}
</script>

<style lang="less">
	#home{
		background-color: #f4f5f7;
	}
	.top{
		width:10rem;
		height:1.2rem;
		background:#78c652;
		position:fixed;
		top:0;
		left:0;
		right:0;
		z-index:100;
		
		.logo{
			width:2.2rem;
			height:1.2rem;
			background:url(./imgs/wc-logo.png) no-repeat center center;
			background-size:1.253333rem 0.746667rem;
			float:left;
		}
		.home-addr{
			float:left;
			width: 5rem;
			height: 100%;
			margin-left: 0.5rem;
			.location{
				width:0.6rem;
				height:1.2rem;
				display:block;
				float:left;
				line-height:1.2rem;
				img{
					width:0.4rem;
					height:0.4rem;
				}
			}
			.addr{
				width:3.333333rem;
				height:1.2rem;
				float:left;
				text-align:center;
				line-height:1.2rem;
				color:#fff;
				font-size: 0.4rem;
			}
			.arr{
				width:0.8rem;
				height:1.2rem;
				display:block;
				float:left;
				line-height:1.2rem;
				text-align: center;
				img{
					width:0.4rem;
					height:0.4rem;
				}
			}
		}
		
		.search{
			width:1.1rem;
			height:1.2rem;
			float:right;
			img{
				width:0.746667rem;
				height:0.746667rem;
				margin-top:0.266667rem;
			}
		}
	}
</style>