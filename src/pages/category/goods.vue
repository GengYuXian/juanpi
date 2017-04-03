<template>
	<div id="goods">
		
		<!-- 右边内容 -->
		<div class="classifyone">
			<div class="content">
				<!-- 商品顶部照片 -->
				<div class="topimg" v-for="item in tempNum1">
					<a href="#" >
						<img :src="item.adImg.url" />
					</a>
				</div>
				<div class="tuijian" >
					<div>
						<figure v-for="item in tempNum">
							<a href="#">
								<img :src="item.checkicon" />
							</a>
							<figcaption>{{ item.name }}</figcaption>
						</figure>
					</div>
				</div>
				
			</div>	
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				good: [],
				parentId:null,
				tempNum:null,
				tempNum1:null
			}
		},
		created() {
			this.paramsId = this.$route.params.userId;

			this.$http.get('http://api5.wochu.cn/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D')
				.then(function(res){
					this.good = res.body.data;
					
					//根据parentId，获取对应数据
					var self = this;
					this.tempNum = this.good.filter(function(item){ 
	                    return item.parentId==self.paramsId
	                });
					this.tempNum1 = this.good.filter(function(item1){
						return item1.id == self.paramsId
					})	
			});

		},
		mounted() {
			
		},
		updated() {
			
		}
	}
</script>

<style>
/*右边内容*/
.classifyone{
	float: left;
	width: 78.663%;
}
.classifyone .content{
	margin: 0 auto;
	width: 7.3327rem;
	height: 15.012rem;
	margin-top: 0.28rem;
	overflow-y: scroll;
	background-color: #FFFFFF;
}
/*商品顶部照片*/
.classifyone .content .topimg a img{
	width: 6.8rem;
	height: 2.6rem;
	padding: 0.256rem;
	padding-bottom: 0;
}
.classifyone .content .tuijian div{
	display: flex;
	justify-content: flex-start;/*左对齐*/
	flex-wrap: wrap; /*换行*/
}
.classifyone .tuijian div figure{
	width: 33.33%;
	padding-top: 0.1rem;
	padding-bottom: 0.2rem;
}
.classifyone .tuijian div figure a img{
	width: 2.1rem;
	padding-bottom: 0.15rem;
}
.classifyone .tuijian div figure figcaption{
	text-align: center;
	line-height: 0.305981rem;
}
</style>