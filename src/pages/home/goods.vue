<template lang="html">
	<div class="goods">
		<ul v-for="t in 3">
			<div v-for="item in img.slice(19,20)">
				<li class="goods1" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			
			<div class="goodslist">
				<ul>
					<div v-for="item in img.slice(20,21)">
						<li v-for="item1 in item.items">
							<img :src="item1.imgUrl" alt="" />
							<div class="goods-name">{{ item1.goodsName }}</div>
							<div class="price-cart">
								<div class="price-cl">
								<div class="market-price">
									￥{{ item1.marketPrice }}
								</div>
								<div class="price">
									￥{{ item1.price }}
								</div>
								</div>
								<div class="addcart">
									<img src="./imgs/addcart.png"/>
								</div>
							</div>
						</li>
					</div>	
				</ul>	
			</div>
			
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				img : []
			}
		},
		created(){
			this.$http.get('http://api5.wochu.cn/client/v1/actsamend?parameters=%7B%22version%22%3A%2220.0.0%22%2C%22source%22%3A%22H%22%7D').then((res) => {

				this.img = res.body.data.acts;

			})
		}
	}
</script>

<style lang="less">
	.goods{
		width:10rem;
		ul{
			width:10rem;
			.goods1{
				width:10rem;
				height:4.16rem;
				img{
					width:10rem;
					height:4.053333rem;
				}
			}
			.goodslist{
				width:10rem;
				height:10.24rem;
				background:#fff;
				ul{
					width:9.36rem;
					height:9.973333rem;
					margin:0 0 0.266667rem 0.373333rem;
					
					li{
						width:3.01333333rem;
						height:4.6133333rem;
						float:left;
						margin:0.373333rem 0.106667rem 0 0;
						font-family:"微软雅黑";
						img{
							width:3.01333333rem;
							height:3.01333333rem;
						}
						.goods-name{
							width:3.013333rem;
							height:0.773333rem;
							overflow:hidden;
							font-size:0.322rem;
						}
						.price-cart{
							width:3.01333333rem;
							height:0.72rem;
							.price-cl{
								width:2.133333rem;
								height:0.72rem;
								float:left;
								.market-price{
									width:2.133333rem;
									height:0.32rem;
									text-decoration:line-through;
									font-size:.24rem;
									color:#999;
									float: left;
								}
								.price{
									width:2.133333rem;
									height:.4rem;
									font-size:.35rem;
									color:#f96d16;
									float: left;
								}
							}
							.addcart{
								width:0.88rem;
								height:0.72rem;
								float: left;
								img{
									width:0.64rem;
									height:0.64rem;
								}
							}
						}
					}
				}
			}
		}
	}
	.t{
		width:10rem;
		height:3rem;
	}
</style>