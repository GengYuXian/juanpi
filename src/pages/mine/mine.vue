<template>

	<div class="mine">
		<div class="mine-header">
			<div class="top">
				<div class="setUp">
					<a href=""><img src="./imgs/mine-header-04.png" alt=""></a>
				</div>
				<div class="logo">
					<a href=""><img src="./imgs/mine-header-03.png" alt=""></a>
				</div>
				<div class="nickname">15313163670</div>
			</div>
			<ul class="bottom">
				<li>
					<a href=""><span>0</span><br/><span>积分</span></a>
				</li>
				<li>
					<a href=""><span>0</span><br/><span>优惠券</span></a>
				</li>
			</ul>

		</div>
		<div class="mine-nav">
			<ul>
				<li>
					<a href="">
						<img src="./imgs/mine-nav-01.png" alt="">
						<span>待付款</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="./imgs/mine-nav-02.png" alt="">
						<span>待收货</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="./imgs/mine-nav-03.png" alt="">
						<span>待评价</span>
					</a>
				</li>
				<li>
					<a href="">
						<img src="./imgs/mine-nav-04.png" alt="">
						<span>退款/售后</span>
					</a>
				</li>
			</ul>
		</div>
		<ul class="mine-content">
			<li>
				<a href="">
					<img src="./imgs/mine-content-01.png" alt="">
					<span>全部订单</span>
					<span>查看全部订单<img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
			<li>
				<a href="#receivingAddress">
					<img src="./imgs/mine-content-03.png" alt="">
					<span>我的地址</span>
					<span><img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
			<li>
				<a href="">
					<img src="./imgs/mine-content-04.png" alt="">
					<span>我的收藏</span>
					<span><img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
			<li>
				<a href="#groupPurchase">
					<img src="./imgs/mine-content-04.png" alt="">
					<span>我的团</span>
					<span><img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
			<li>
				<a href="#helpCenter">
					<img src="./imgs/mine-content-05.png" alt="">
					<span>帮助中心</span>
					<span><img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
			<li>
				<a href="#Suggestions">
					<img src="./imgs/mine-content-06.png" alt="">
					<span>意见反馈</span>
					<span> <img src="./imgs/mine-content-02.png" alt=""></span>
				</a>
			</li>
		</ul>
	</div>

</template>

<script>
</script>

<style>
.mine .mine-header{
  height: 6.827rem;
  width: 100%;
  background: url("./imgs/mine-header-01.jpg") no-repeat;
  background-size: contain;

}
.mine .mine-header .top{
    height:5.430556rem;
    overflow: hidden;

  }
.mine .mine-header  img{
    width: 100%;
}
.mine .mine-header .top .setUp{

    height: 1.386806rem;
    width: 100%;
}
.mine .mine-header .top .setUp img{
    width: 0.8rem;
    height: 0.8rem;
    margin-top: 0.319444rem;
    margin-right: 0.319444rem;
    float: right;
}
.mine .mine-header .top .logo{
    text-align: center;
}
.mine .mine-header .top .logo img{
    width: 2.240139rem;
    height: 2.240139rem;
}

.mine .mine-header .top .nickname{
    text-align: center;
    font-size: 0.375018rem;
    color:#333;
    height: 1.866806rem;
    padding-top: 0.8rem;
    width: 100%;

}

.mine .mine-header .bottom{
    height: 1.386806rem;
    background: url("./imgs/mine-header-02.png");
    text-align: center;
    width: 100%;
}
.mine .mine-header .bottom li {
    display: inline-block;
    text-align: center;
    height: 1.066667rem;
    padding-top: 0.16rem;
    width: 50%;
    float: left;

 }
.mine .mine-header .bottom a{
    display: block;
    font-size: 0.431944rem;
    color: #000;
    height: 1.066667rem;

}
.mine .mine-header .bottom li:first-of-type a{
    border-right: 0.026667rem solid #fff;
}
.mine .mine-header .bottom a span:first-of-type{
    display: inline-block;
}

.mine .mine-nav{
    height: 1.520139rem;
    background: white;
    padding-top: 0.213333rem;
    padding-bottom: 0.16rem;
    width: 100%;
    border-bottom: 0.026667rem solid #e5e4e4;;
}
.mine .mine-nav ul{
    width: 100%;
    overflow: hidden;
}
.mine .mine-nav li{
    display: inline-block;
    width: 25%;
    float: left;
    text-align: center;
}
.mine .mine-nav li img{
    width: 1.115972rem;
    height: 0.937917rem;
}
.mine .mine-nav li span{
    display: block;
    margin-top: 0.08rem;
}
.mine .mine-nav li a{
    font-size: 0.375rem;
    color:#000;
    font-weight: 200;
}
.mine .mine-content{
    margin-bottom: 2.986806rem;
    background: pink;
}
.mine .mine-content li{
    line-height: 1.280056rem;
    border-bottom: 0.026389rem solid #e5e4e4;
    background: white;
    overflow: hidden;
}
.mine .mine-content li a{
    display: inline-block;
    width: 100%;
}
.mine .mine-content li a>img{
    width: 0.6rem;
    padding-left: 0.32rem;
    padding-right: 0.340139rem;
    vertical-align: middle;

}
.mine .mine-content li a span:first-of-type{
    font-size: 0.4375rem;
    color:#000;
    margin-left: 0.213333rem;
}
.mine .mine-content li a  span:last-of-type{
    float: right;
    margin-right: 0.64rem;
    font-size: 0.4375rem;
}
.mine .mine-content li a  span img{
    width: 0.20625rem;
    margin-left: 0.32rem;
    margin-top: 0.6rem;
}

</style>