<template>
	<div id="tuijian">
		
		<!-- 右边内容 -->
		<div class="classifyone">
			<div class="content">
				<div v-for="item in this.tuijian" class="tuijian">
					<p>{{ item.name }}</p>
					<div class="tuidiv">
						<figure v-for="i in item.children">
							<a href="#">
								<img :src="i.imgUrl" />
							</a>
							<figcaption>{{ i.name }}</figcaption>
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
				tuijian: []
			}
		},
		created() {
			//发起网络请求，获取数据
			this.$http.get('http://api5.wochu.cn/client/v1/goods/GetCategoryRecommendList')
				.then(function(res){
					//把网络请求拿到的数据，放到自己的data属性中
					this.tuijian = res.body.data;
			})
		},
		mounted() {
			
		},
		updated() {
			
		}
	}
</script>

<style>
/*右边内容*/
.classifyone .tuijian p{
	background-color: #f4f5f7;
	padding: 0.1rem 0;
}
.classifyone .tuijian .tuidiv{
	padding: 0.23rem 0;
}
</style>


<!--<script>
	<List :key = 'key'>	
	[678, ]
	@click = 'change($event)' :index='i'
	
	export default {
		data () {
			return {
				list :
				key : ''
			}
		}
		methods : {
			change (e) {
				this.key = this.list[e.target.getAttribute('index')].id
			}
		}
	}
	props : ['key']
	
</script>-->