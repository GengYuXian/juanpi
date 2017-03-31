<template>
	<div id="category">

		<div class="classify">
			
			<!--搜索板块-->
			<div class="topSearch">
				<input type="text"/>
			</div>
			
			<div class="main">
				<!--左边导航-->
				<div class="menu">
					<ul>
						<li class="bgc"><p class="pborder">推荐</p></li>
						<li ><p>净菜</p></li>
						<li ><p>蔬菜</p></li>
						<li ><p>水果</p></li>
						<li ><p>肉类</p></li>
						<li ><p>禽蛋</p></li>
						<li ><p>水产</p></li>
						<li ><p>点心速食</p></li>
						<li ><p>乳饮西点</p></li>
						<li ><p>粮油副食</p></li>
						<li ><p>休闲食品</p></li>
						<li ><p>简单烘培</p></li>
					</ul>
				</div>
				<!--右边内容-->
				<div class="classifyone">
					<div class="content">
						<div class="tuijian">
							<p>我厨精选</p>
							<div>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
								<figure>
									<a ui-sref="weekoffer">
										<img src="./imgs/fa3c5da8-006c-4bf3-a263-562b318a3fd0.jpg" />
									</a>
									<figcaption>本周特惠</figcaption>
								</figure>
							</div>
						</div>
						
						<div class="tuijian">
							<p>品牌专区</p>
							<div>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
								<figure>
									<a href="#">
										<img src="./imgs/4d09e626-b733-4d4f-ad70-33f884de97d2.jpg" />
									</a>
									<figcaption>我厨优选</figcaption>
								</figure>
							</div>
						</div>
					</div>	
				</div>
				
			</div>	
			
		</div>
		
	</div>
</template>

<script>
</script>

<style>

/*搜索框*/
.topSearch{
	background-color: #fff;
	height: 1.1417rem;
	text-align: center;
	border-bottom: 1px solid #e5e5e5;
}
.topSearch input{
	width: 9.45rem;
	height: 0.7rem;
	background:url(./imgs/top_search.jpg) no-repeat 0.15299rem center;
	border-radius: 0.389rem;
	background-color: #f1f2f6;
	margin: 0.194715rem auto;
	background-size: 0.472879rem 0.472879rem;
	border:none;
    outline:medium;
    text-indent: 0.834492rem;
}
/*内容*/
.main{
	height: 15.01rem;
	color: #666;
	background-color: #f4f5f7;
}
/*左边导航*/
.main .menu{
	width: 21.337%;
	height: 15.01rem;
	background-color: #FFFFFF;
	float: left;
	overflow-y: scroll;
}
.main .menu ul li{
	height: 1.2356rem;
	border-bottom: 1px solid #e6e6e6;
	text-align:center;
}
.main .menu ul li p{
	height: 0.5627rem;
	line-height: 1.2356rem;
	font-size: 0.398rem;
	border-left: .15rem solid #f96d16;
}
/*点击背景无色*/
.bgc{ background-color:#f6f6f6; }
/*导航标*/
.pborder{ border-left: .15rem solid #f96d16; }

/*右边内容*/
.main .classifyone{
	float: left;
	width: 78.663%;
}
.classifyone .content{
	margin: 0 auto;
	width: 7.3327rem;
	height: 15.012rem;
	margin-top: 0.22rem;
	overflow-y: scroll;
}
.classifyone .content .tuijian p{
	padding: 0.1rem;
}
.classifyone .content .tuijian div{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	background-color: #FFFFFF;
	padding-bottom: 0.282rem;
}
.classifyone .tuijian div figure{
	padding: 0.11rem;
}
.classifyone .tuijian div figure img{
	width: 2.1rem;
	margin-bottom: 0.220348rem;
	margin-top: 0.163333rem;
}
.classifyone .tuijian div figure figcaption{
	text-align: center;
	line-height: 0.305981rem;
}
</style>