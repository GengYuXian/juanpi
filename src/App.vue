//注意：template标签最后会消失掉，所以一定要写跟标签
<template> 
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<script>
	//把Hello.vue引进来，命名为 Hello
import Hello from './components/Hello'

//导出
export default {
  name: 'app',
  components: {//把Hello注册为局部组件
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
