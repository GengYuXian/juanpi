<!--注意：template标签最后会消失掉，所以一定要写跟标签-->
<template>
	  <div id="app">
	  	
		    <footer class="tabbar">
		    		<figure>
			    			<img src="./assets/index_n.png" alt="" />
			    			<figcaption><router-link to="/home">首页</router-link></figcaption>
		    		</figure>
		    		<figure>
			    			<img src="./assets/shopping_n.png" alt="" />
			    			<figcaption><router-link to="/category">分类</router-link></figcaption>
		    		</figure>
		    		<figure>
			    			<img src="./assets/cart_n.png" alt="" />
			    			<figcaption><router-link to="/cart">购物车</router-link></figcaption>
		    		</figure>
		    		<figure>
			    			<img src="./assets/my_n.png" alt="" />
			    			<figcaption><router-link to="/mine">我的</router-link></figcaption>
		    		</figure>
		    </footer>
	    	
	    	<router-view></router-view>
	    	
	  </div>
</template>

<script>
		//把Hello.vue引进来，命名为 Hello
//		import Hello from './components/Hello'
		
		//导出
		export default {
//		  name: 'app',
//		  components: {//把Hello注册为局部组件
//		    Hello
//		  }
		}
</script>

<style>
#app {
		width: 10.0rem;
	  font-family: "微软雅黑";
	  color: #898989;
}
#app .tabbar{
		width: 100%;
		height: 1.409rem;
		border-top: 1px solid #fad1b6;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		left: 0;
		right:0;
		bottom: 0;
		z-index: 999;
		background-color: #FFFFFF;
}
#app .tabbar img{
		width: 0.58rem;
}
#app .tabbar a{
		color: #898989;
}
</style>
