// var Vue = require('../lib/vue.js');
// var $ = require('../lib/zepto.min.js');
// var IScroll = require('../lib/iscroll-probe.js');
// var Swiper = require('../lib/swiper.js');

var common = require('../utils/util.common.js');

new Vue({
  el: '#m-index',

  data: {
    swiper: null,

    navIndex: 0,

    nav: ['足球现场', '足球生活', '足球美女'],

    list: []
  },

  methods: {
    changeTab: function (index) {
      this.swiper.slideTo(index);
      //this.navIndex = index;
    }
  },

  mounted: function () {
    fetch('/api/list')
    .then(response => response.json())
    .then(res => {

      var that = this;
      that.list = res;
      that.swiper = new Swiper('#index-swiper', {
        loop: false,
        onSlideChangeStart: function(swiper){
          that.navIndex = swiper.activeIndex;
        }
      });

      common.isAllLoaded('#index-scroll ul', function () {
        common.scroll(that);
      })
    })
    .catch(e => console.log("Oops, error", e));
  }
});
