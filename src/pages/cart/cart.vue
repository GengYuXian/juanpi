<template>
	<div id="cart">

		<header>
			<div class="back"><img src="./imgs/back.png"></div>
			<div class="addr">
				<span>
					<img src="./imgs/location.png">
				</span>
				<p>请填写地址</p>
				<span>
					<img src="./imgs/down-arr.png">
				</span>
			</div>
			<div class="edit">编辑</div>
		</header>
		<!--时间-->
		<nav>
			<ul class="date-time">
				<li>今天配送</li>
				<li>4/2周日</li>
				<li>4/3周一</li>
				<li>4/4周二</li>
			</ul>
			<ul class="period-time">
				<li>17:30以前</li>
				<li>08:00-11:30</li>
				<li>15:30-17:30</li>
				<li>17:30-20:30</li>
			</ul>
		</nav>
		<section class="shawow-line" style="display: block;"></section>
		<!--商品界面-->
		<div class="cartGoods">
			<div class="cart-list-item margin-bottom">
				<div class="promotion-msg"><span>活动</span>其它</div>
				<ul class="shop-li">
					<li>
						<div class="edit-btn i-uncheck" ></div>
						<div class="check-btn i-checked" ></div>
						<div class="shop_img">
							<a href="#"><img src="http://img.i-kitchen.cn/upload/1dfa777a-5418-4b02-9fa8-b90c6fea1898.jpg" alt="荷美尔Hormel 经典上海红肠 320g"></a>
						</div>
						<div class="shop_info">
							<div class="shoose"><img src="./imgs/unselect.png" /></div>
							<div class="s-title" >荷美尔Hormel 经典上海红肠 320g</div>
							<div class="price-coupon">
								<div class="no-goods"></div>
							</div>
							<div class="show-two-ele-wrap">
								<div class="price"><span>￥25.9</span></div>
								<div class="show-left-j">
									<a class="minus num-action" href="#"><img src="./imgs/disminus.png"></a>
									<input name="orderNumber" value="1" type="text" class="order_number" >
									<a class="plus num-action" href="#"><img src="./imgs/displus.png"></a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>

		</div>

	</div>
</template>

<script>
</script>

<style>
	/*#cart{
	color: #666;
	background-color: #f4f5f7;
}*/
	
header {
	position: fixed;
	width: 100%;
	height: 1.2rem;
	line-height: 1.2rem;
	background: #fff;
	color: #666;
	border-bottom: 1px solid #e5e5e5;
	display: flex;
	justify-content: space-around;
	z-index: 3;
}
header img {
	width: 0.4rem;
}
header .back,.edit {
	width: 22%;
	text-align: center;
}
header .addr {
	width: 56%;
	display: flex;
	justify-content: space-around;
}
/*时间*/
nav {
	position: fixed;
	top: 1.2rem;
	width: 100%;
	height: 2.134rem;
	color: #333;
	text-align: center;
	background: #fef9f5;
	z-index: 1;
}
.date-time,.period-time {
	width: 100%;
	float: left;
	height: 1.067rem;
	line-height: 1.067rem;
}
.date-time li,.period-time li {
	width: 25%;
	float: left;
}
.date-time li {
	border-bottom: 1px solid #f2c0a5;
}
.shawow-line {
	width: 100%;
	background: #f8f8f8;
	position: fixed;
	top: 3.334rem;
	height: 0.267rem;
	box-shadow: inset 0 .06rem .2rem hsla(0, 0%, 92%, .8);
	z-index: 1;
}
/*商品界面*/
.cartGoods {
	width: 100%;
	height: 20rem;
	color: #666;
	background-color: #f4f5f7;
}
.cart-list-item {
	/*margin-top: 3.601rem;*/
    width: 100%;
    background: #fff;
}
.promotion-msg {
    width: 100%;
    color: #333;
    font-size: .3rem;
    line-height: .8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #e6e6e6;
}
.shop_img a img{
	width: 6.714285rem;
}
</style>