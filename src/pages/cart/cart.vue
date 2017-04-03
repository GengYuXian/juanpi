<template>
	<div id="cart">

		<header class="cartheader">
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
		<nav class="carttime">
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
						<div class="shoose"><img src="./imgs/unselect.png" /></div>
						<div class="shop_img">
							<a href="#"><img src="http://img.i-kitchen.cn/upload/1dfa777a-5418-4b02-9fa8-b90c6fea1898.jpg" alt="荷美尔Hormel 经典上海红肠 320g"></a>
						</div>
						<div class="shop_info">
							<div class="s-title">荷美尔Hormel 经典上海红肠 320g</div>
							<div class="price-coupon">
								<div class="no-goods">库存紧张</div>
							</div>
							<div class="show-two-ele-wrap">
								<div class="price"><span>￥25.9</span></div>
								<div class="show-left-j">
									<a class="minus num-action" href="#"><img src="./imgs/disminus.png"></a>
									<span class="order_number">1</span>
									<a class="plus num-action" href="#"><img src="./imgs/displus.png"></a>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>

		</div>
		<!--总价-->
		<footer class="check-footer">
			<div class="allshoose"><img src="./imgs/unselect.png" /></div>
			<div class="check-price">
				<div class="cart_total_price"><span>合计: </span>￥47.80</div>
				<div class="freight">不含运费</div>
			</div>
			<div class="btn_checkout">结算(2)</div>
			<div class="btn-coudan" style="display: block;">全场满99包邮 点我凑单
				<p></p>
			</div>
		</footer>

	</div>
</template>

<script>
</script>

<style>
.cartheader {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 1.168rem;
	line-height: 1.2rem;
	background: #fff;
	color: #333;
	border-bottom: 1px solid #e5e5e5;
	display: flex;
	justify-content: space-around;
	z-index: 1;
}

.cartheader img {
	width: 0.4rem;
}

.cartheader .back,
.edit {
	width: 9%;
}

.cartheader .addr {
	width: 56%;
	display: flex;
	justify-content: space-around;
	font-size: 0.4rem;
}
/*时间*/

.carttime {
	position: fixed;
	top: 1.2rem;
	width: 100%;
	height: 2.134rem;
	color: #333;
	text-align: center;
	background: #fef9f5;
	z-index: 1;
}

.date-time,
.period-time {
	width: 100%;
	float: left;
	height: 1.067rem;
	line-height: 1.067rem;
}

.date-time li,
.period-time li {
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
	position: fixed;
	top: 3.601rem;
	width: 100%;
	height: 11.5rem;
	color: #333;
	background-color: #f4f5f7;
}

.cart-list-item {
	width: 100%;
	background: #fff;
}

.promotion-msg {
	width: 100%;
	color: #333;
	font-size: .4rem;
	line-height: .8rem;
	border-bottom: 1px solid #e6e6e6;
	padding: 0.125rem 0.25rem;
}

.promotion-msg span {
	color: #f96d16;
	padding: .05rem .15rem;
	border: 1px solid #f96d16;
	border-radius: .1rem;
	margin-right: .25rem;
	font-size: .26rem;
}

.shop-li li {
	width: 9.467rem;
	height: 2.929rem;
	border-bottom: 1px solid #e6e6e6;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
}
.shoose {
	margin: auto 0;
}

.shoose img,.allshoose img {
	width: 0.46rem;
}

.shop_img a img {
	width: 2.929rem;
}

.shop_info {
	width: 5.55rem;
}

.s-title {
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	word-break: break-all;
	text-overflow: ellipsis;
	height: .7rem;
	line-height: .32rem;
	font-size: .28rem;
	padding-top: 0.35rem;
}

.price-coupon {
	color: #999;
	font-size: .24rem;
	margin: .2rem 0;
	height: .24rem;
	line-height: .24rem;
	padding-top: 0.2rem;
}

.no-goods {
	float: right;
	color: #f96d16;
}

.price {
	width: 2.17rem;
	float: left;
	color: #f96d16;
}
.show-two-ele-wrap {
	padding-top: 0.03rem;
}
.show-left-j {
	width: 2.067rem;
	height: .667rem;
	float: right;
	border-radius: 15px;
	background: #f5f5f5;
	display: flex;
	justify-content: space-between;
}
.show-left-j a img {
	width: 0.6rem;
}
.check-footer{
	border-top: 1px solid #fad1b6;
	width: 100%;
	height: 1.4885rem;
    position: fixed;
    bottom: 1.547rem;
    left: 0;
    font-size: .28rem;
    color:#333;
    z-index: 1;
    background-color: #FFFFFF;
}
.allshoose{
	margin-left: 0.25rem;
	margin-top: 0.5rem;
	float: left;
	display: inline-block;
}
.check-price{
    float: left;
    margin-left:  0.25rem;
    line-height: 1rem;
}
.cart_total_price{
	font-size: 0.47rem;
    color: #f96d16;
}
.cart_total_price span{
    color: #333;
    font-size: .28rem;
}
.freight {
    font-size: .26rem;
    color: #999;
    line-height: .1rem;
}
.btn_checkout{
	font-size: 0.47rem;
	width: 3.067rem;
    height: 100%;
    float: right;
    line-height: 1.4885rem;
    color: #fff;
    text-align: center;
    background: rgb(249, 109, 22);
}
.btn-coudan {
    height: .6666rem;
    position: absolute;
    top: -.9rem;
    background: #f1c0a3;
    padding: 0 .15rem;
    border-radius: 15px;
    color: #fff;
    font-size: 0.4rem;
    line-height: .6666rem;
    margin-left: 1.3rem;
    /*display: none;*/
}
.btn-coudan p {
    width: 0;
    height: 0;
    left: .86rem;
    border-left: .15rem solid transparent;
    border-right: .15rem solid transparent;
    border-top: .15rem solid #f1c0a3;
    margin-left: 1.1rem;
}
</style>