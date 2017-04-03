<template lang="html">
	<div class="advertising">
		<ul>
			<div v-for="item in img.slice(0, 7)">
				<li class="list1" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			<div v-for="item in img.slice(7, 8)">
				<li  class="list2" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			<div v-for="item in img.slice(8, 13)">
				<li class="list3" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			<div v-for="item in img.slice(13, 14)">
				<li  class="list4" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			<div v-for="item in img.slice(14, 18)">
				<li  class="list5" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
			</div>
			<div v-for="item in img.slice(18, 19)">
				<li  class="list6" v-for="item1 in item.items">
					<img :src="item1.imgUrl" alt="" />
				</li>
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
				console.log(res.body.data.acts)
				this.img = res.body.data.acts;

			})
		}
	}
</script>

<style lang="less">
	.advertising{
		width:10rem;
		ul{
			width:10rem;
			.list1,.list3,.list5{
				width:10rem;
				height:4.16rem;
				img{
					width:10rem;
					height:4.053333rem;
				}
			}
			.list2,.list4,.list6{
					width:10rem;
					height:1.2rem;
					position:relative;
					img{
						width:10rem;
						height:1.013333rem;
						position:absolute;
						bottom:.06rem;
					}
			}
		}
	}
</style>