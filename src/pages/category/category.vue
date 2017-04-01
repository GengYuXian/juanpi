<template>
	<div id="category">

		<div class="classify">
			
			<!-- 搜索板块 -->
			<div class="topSearch">
				<input type="text"/>
			</div>
			<!-- 全部内容 -->
			<div class="main">
				<!-- 左边导航 -->
				<div class="menu">
					<ul>
						<li ><router-link to="/category/tuijian">推荐</router-link></li>
						<li v-for="nav in list">
							<router-link to="/category/goods">{{ nav.name }}</router-link>
							<!--<span>{{ nav.id }}</span>-->
						</li>
					</ul>
				</div>
				<!-- 右边菜单 引入组件 -->
				<router-view></router-view>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navs: []
			}
		},
		computed:{
            list:function(){
                return this.navs.filter(function(item){  
                    return item.parentId==0
                })  
            }
        },
        created() {
			this.$http.get('http://api5.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D')
				.then(function(res){
					this.navs = res.body.data;
					console.log(this.navs.id)
				})
		}
	}
</script>

<style>
/*搜索框*/
.topSearch{
	background-color: #fff;
	height: 1.1417rem;
	text-align: center;
	border-bottom: 1px solid #e5e5e5;
}
.topSearch input{
	width: 9.45rem;
	height: 0.7rem;
	background:url(./imgs/top_search.jpg) no-repeat 0.15299rem center;
	border-radius: 0.389rem;
	background-color: #f1f2f6;
	margin: 0.194715rem auto;
	background-size: 0.472879rem 0.472879rem;
	border:none;
    outline:medium;
    text-indent: 0.834492rem;
}
/*全部内容*/
.main{
	height: 15.01rem;
	color: #666;
	background-color: #f4f5f7;
}
/*左边导航*/
.main .menu{
	width: 21.337%;
	height: 15.01rem;
	background-color: #FFFFFF;
	float: left;
	overflow-y: scroll;
}
.main .menu ul li{
	height: 1.2356rem;
	border-bottom: 1px solid #e6e6e6;
	display: flex;
	align-items: center;
}
.main .menu ul li a{
	color: #666;
	height: 0.5627rem;
	line-height: 0.5627rem;
	width: 100%;
	text-align: center;
	font-size: 0.398rem;
}
/*点击背景无色*/
.bgc{ background-color:#f6f6f6;}
/*导航标*/
.pborder{
	color: #f96d16; 
	border-left: .15rem solid #f96d16; 
}
</style>