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
						<li >
							<p><router-link to="/category/tuijian">推荐</router-link></p></li>
						<li  v-for="nav in list">
							<p @click="t(innerid,$event)">
								<router-link to="/category/goods">{{ nav.name }}</router-link>
							</p>
							<!--<p>{{ nav.id }}</p>-->
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
				navs: [],
				innerid:new Map([
					['净菜', 648],
					['蔬菜', 691],
					['水果', 726],
					['肉类', 722],
					['禽蛋', 739],
					['水产', 758],
					['点心速食', 812],
					['乳饮西点', 759],
					['粮油副食', 806],
					['休闲食品', 1215],
					['烘培DIY', 1226]
				])
			}
		},
		methods:{
			t:function(innerid,$event){
//				console.log($event.currentTarget.innerText)
//				console.log(innerid.get($event.currentTarget.innerText));
				this.$router.push({ name: 'goods', 
				params: { userId:  innerid.get($event.currentTarget.innerText)}})
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
.main .menu ul li p{
	width: 100%;
	height: 1.2356rem;
	line-height:1.2356rem;
	text-align: center;
}
.main .menu ul li p a{
	display: inline-block;
	color: #666;
	width: 2.0085rem;
	height: 0.5627rem;
	line-height: 0.5627rem;
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