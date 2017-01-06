<template id="">
	<div class="m-index" id="m-index">
		<!--<div class="container">
			<header>
				<p class="yo-ico">
					&#xe66e;
				</p>
				<p>请登录</p>
				<p class="yo-ico">&#xe61a;</p>
			</header>
			<section>
				<ul>
					<li>
						<p>
							<span class="yo-ico">&#xe629;</span><b>我的收藏</b></p>
						<span>></span>
					</li>
					<li>
						<p><span class="yo-ico">&#xe61c;</span><b>我的评论</b></p>
						<span>></span>
					</li>
					<li>
						<p><span class="yo-ico">&#xe64c;</span><b>我的南瓜</b></p>
						<p><span>0个</span><span>></span></p>
					</li>
					<li>
						<p><span class="yo-ico">&#xe610;</span><b>我的活动</b></p>
						<span>></span>
					</li>
					<li>
						<p><span class="yo-ico">&#xe600;</span><b>意见反馈</b></p>
						<span>></span>
					</li>
				</ul>
			</section>
		</div>-->
		<router-view></router-view>
		<footer>
			<ul>
				<li @click="changeNav(i)" :class="{active: i==3}" v-for="(fn,i) in footerNav">
					<router-link :to="fn.router">
						<i class="yo-ico" v-html="fn.ico"></i>
						<b>{{fn.title}}</b>
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				navIndex: 0,
				footerNav: [{
					router: '/',
					ico: '&#xe609;',
					title: '要闻'
				}, {
					router: '/search',
					ico: '&#xe63f;',
					title: '视频'
				}, {
					router: '/photo',
					ico: '&#xe62b;',
					title: '报纸'
				}, {
					router: '/my',
					ico: '&#xe66e;',
					title: '我的'
				}]
			}
		},
		methods: {
			changeNav: function(index) {
				this.navIndex = index;
			}
		}
	}
</script>