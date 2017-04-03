<template lang="html">
	<div class="homeswiper">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in lbimg"><img :src="item.picUrl" alt="" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination" style="margin-bottom: 0.2rem;"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				lbimg : []
			}
		},
		created:function(){
			this.$http.get('http://api5.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22%3A%2210.0.0%22%2C%22source%22%3A%22H%22%7D').then((res) => {
				this.lbimg = res.body.data.carousel;
			})
		},
		updated : function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2800,
			    autoplayDisableOnInteraction:false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
	  		})  
		},
		
	}
</script>

<style lang="less">
	.swiper-container {
	    width: 10rem;
	    height: 4.426667rem;
	    margin:1.2rem 0 0 0;
	    .swiper-wrapper{
			img{
				 width: 10rem;
	   	 		 height: 4.426667rem;
			}
		} 
	} 
	
</style>