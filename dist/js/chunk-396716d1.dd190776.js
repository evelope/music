(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396716d1"],{"370b":function(t,e,s){"use strict";var i=s("f9cf"),n=s.n(i);n.a},"3e8f":function(t,e){},"50d3":function(t,e,s){},"510d":function(t,e,s){},5118:function(t,e,s){(function(t){var i="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,n=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new a(n.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new a(n.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},s("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,s("c8ba"))},"5d82":function(t,e,s){"use strict";var i=s("be4c"),n=s.n(i);n.a},6017:function(t,e,s){(function(t,e){(function(t,s){"use strict";if(!t.setImmediate){var i,n=1,a={},o=!1,c=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?d():p()?v():t.MessageChannel?h():c&&"onreadystatechange"in c.createElement("script")?w():b(),u.setImmediate=r,u.clearImmediate=l}function r(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),s=0;s<e.length;s++)e[s]=arguments[s+1];var o={callback:t,args:e};return a[n]=o,i(n),n++}function l(t){delete a[t]}function m(t){var e=t.callback,i=t.args;switch(i.length){case 0:e();break;case 1:e(i[0]);break;case 2:e(i[0],i[1]);break;case 3:e(i[0],i[1],i[2]);break;default:e.apply(s,i);break}}function f(t){if(o)setTimeout(f,0,t);else{var e=a[t];if(e){o=!0;try{m(e)}finally{l(t),o=!1}}}}function d(){i=function(t){e.nextTick(function(){f(t)})}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,s=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=s,e}}function v(){var e="setImmediate$"+Math.random()+"$",s=function(s){s.source===t&&"string"===typeof s.data&&0===s.data.indexOf(e)&&f(+s.data.slice(e.length))};t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),i=function(s){t.postMessage(e+s,"*")}}function h(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},i=function(e){t.port2.postMessage(e)}}function w(){var t=c.documentElement;i=function(e){var s=c.createElement("script");s.onreadystatechange=function(){f(e),s.onreadystatechange=null,t.removeChild(s),s=null},t.appendChild(s)}}function b(){i=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,s("c8ba"),s("4362"))},"61d2":function(t,e,s){"use strict";var i=s("510d"),n=s.n(i);n.a},"9dc9":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("BoxNav"),s("transition",{attrs:{name:t.transitionName}},[s("router-view",{staticClass:"box-content"})],1),s("box-foot")],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-nav"},[s("div",{directives:[{name:"waves",rawName:"v-waves",value:{color:"rgba(0, 0, 0, 0.2)"},expression:"{color:'rgba(0, 0, 0, 0.2)'}"}],staticClass:"caidan"},[s("span",{staticClass:"iconfont icon-caidan"})]),s("div",{staticClass:"nav"},t._l(t.navList,function(t,e){return s("router-link",{directives:[{name:"waves",rawName:"v-waves",value:{color:"rgba(0, 0, 0, 0.2)",type:"center"},expression:"{color:'rgba(0, 0, 0, 0.2)',type:'center'}"}],key:e,staticClass:"route",attrs:{tag:"div",to:t.path}},[s("span",{staticClass:"iconfont",class:t.iconClass})])}),1),s("div",{directives:[{name:"waves",rawName:"v-waves",value:{color:"rgba(0, 0, 0, 0.2)"},expression:"{color:'rgba(0, 0, 0, 0.2)'}"}],staticClass:"sousuo"},[s("span",{staticClass:"iconfont icon-sousuo"})])])},o=[],c={data:function(){return{navList:[{iconClass:"icon-yinle1",path:"/box/home"},{iconClass:"icon-yinle",path:"/box/music"},{iconClass:"icon-ico-presetvideo-IJuv",path:"/box/video"}]}}},u=c,r=(s("370b"),s("2877")),l=Object(r["a"])(u,a,o,!1,null,"409d1333",null),m=l.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box-foot"},[s("div",{staticClass:"music-swiper",on:{click:t.showCon}},[t.show?t._e():s("mt-swipe",{ref:"mtSwipe",staticClass:"box-foot-swiper",attrs:{auto:0,"show-indicators":!1,defaultIndex:t.musicStatus.index},on:{change:t.handleChange}},t._l(t.musiclist.myLike.songs,function(e,i){return s("mt-swipe-item",{key:i,staticClass:"box-foot-swiper-item"},[s("dl",[s("dt",[s("img",{directives:[{name:"lazy",rawName:"v-lazy.container",value:e.pic,expression:"v.pic",modifiers:{container:!0}}]})]),s("dd",[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"user"},[t._v(t._s(e.singer))])])])])}),1)],1),s("div",{staticClass:"music-change"},[s("p",{directives:[{name:"waves",rawName:"v-waves",value:{type:"center"},expression:"{type:'center'}"}],staticClass:"bofang",on:{click:t.palyMusic}},[s("span",{staticClass:"iconfont",class:t.musicStatus.play?"icon-zanting2":"icon-zanting"})]),s("p",{directives:[{name:"waves",rawName:"v-waves",value:{type:"center"},expression:"{type:'center'}"}],staticClass:"caidan"},[s("span",{staticClass:"iconfont icon-bofangliebiao"})])]),s("MusicController",{ref:"musicCon",attrs:{show:t.show},on:{"update:show":function(e){t.show=e}}})],1)},d=[],p=s("cebc"),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("div",{staticClass:"music-controller"},[i("div",{staticClass:"bg",style:{background:"#333 url("+t.musicBg+") center center no-repeat"}}),i("div",{staticClass:"title"},[i("div",{staticClass:"go-back"},[i("p",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:t.goback}},[i("span",{staticClass:"iconfont icon-fanhui"})])]),i("div",{staticClass:"message"},[i("p",{staticClass:"name"},[t._v(t._s(t.musicStatus.music.name))]),i("p",{staticClass:"singer"},[t._v(t._s(t.musicStatus.music.singer))])]),i("div",{staticClass:"fenxiang"},[i("p",{directives:[{name:"waves",rawName:"v-waves"}]},[i("span",{staticClass:"iconfont icon-fenxiang"})])])]),i("div",{staticClass:"music"},[i("img",{staticClass:"music-c",class:{begin:t.musicStatus.play},attrs:{src:s("b8af")}}),t._m(0),i("div",{staticClass:"music-arc music-arc2"}),i("mt-swipe",{ref:"mtSwipe",staticClass:"music-swiper",attrs:{auto:0,"show-indicators":!1,defaultIndex:t.musicStatus.index},on:{change:t.handleChange}},t._l(t.musiclist.myLike.songs,function(e,s){return i("mt-swipe-item",{key:s,ref:"mtItem",refInFor:!0,staticClass:"music-swiper-item"},[i("div",{staticClass:"music-arc"},[i("div",{class:{"stop-arc":t.stopPlay}},[i("div",[i("img",{directives:[{name:"lazy",rawName:"v-lazy.container",value:e.pic,expression:"v.pic",modifiers:{container:!0}}]})])])])])}),1)],1),i("div",{staticClass:"controller"},[t._m(1),i("div",{staticClass:"controller-box"},[i("span",[t._v(t._s(t.currentTime))]),i("div",{ref:"ctp",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.mousedown(e)},touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.mousedown(e)},mouseup:t.mouseup,touchend:t.mouseup}},[i("p",{style:{width:t.musicStatus.music.currentTime/t.musicStatus.music.time*100+"%"}}),i("div",{style:{left:t.musicStatus.music.currentTime/t.musicStatus.music.time*100+"%"},on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.mousedown(e)},touchstart:function(e){return e.preventDefault(),e.stopPropagation(),t.mousedown(e)},mouseup:t.mouseup,touchend:t.mouseup}})]),i("span",[t._v(t._s(t._f("formatFilter")(t.musicStatus.music.time)))])]),i("div",{staticClass:"controller-bottom"},[t._m(2),i("p",{staticClass:"controller-begin"},[i("span",{staticClass:"iconfont icon-zuobofang",on:{click:function(e){return t.changeMusic("up")}}}),i("span",{staticClass:"iconfont",class:t.musicStatus.play?"icon-zanting2":"icon-zanting",on:{click:t.palyMusic}}),i("span",{staticClass:"iconfont icon-zuobofang",on:{click:function(e){return t.changeMusic("down")}}})]),t._m(3)])])]):t._e()},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"t-top"},[s("div",[s("div")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab"},[s("span",{staticClass:"iconfont icon-buoumaotubiao16"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"iconfont icon-duoxunhuan"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",{staticClass:"iconfont icon-bofangliebiao"})])}],w=s("2f62"),b=s("dee4"),g=s("5118"),y=(s("3e8f"),{data:function(){return{stopPlay:!1,currentTime:"00:00:00",t:null,device:""}},props:{show:{type:Boolean,default:!1}},mounted:function(){var t=this;this.device="pc"==Object(b["a"])()?"onmousemove":"ontouchmove",setInterval(function(){t.currentTime=Object(b["b"])(t.musicStatus.music.currentTime)||"00:00:00"},1e3)},computed:Object(p["a"])({},Object(w["d"])(["musiclist","musicStatus","audio"]),{musicBg:function(){return this.musicStatus.music.pic}}),methods:Object(p["a"])({},Object(w["c"])(["palyMusic","musicEdit","musicTimeEdit","editVue"]),{handleChange:function(t){this.musicEdit({index:t}),this.palyMusic({status:!0})},goback:function(){var t=this;this.$emit("update:show",!1),this.editVue(this.$parent),this.musicStatus.play||this.$nextTick(function(){t.musicStatus.play=!1})},changeMusic:function(t){"up"==t?this.$refs.mtSwipe.prev():this.$refs.mtSwipe.next()},switchCar:function(t){var e=this;if(t!=this.musicStatus.index){var s=function(){if(void 0!==t){e.$refs.mtItem[t].$el;e.$refs.mtSwipe.index=t}e.$refs.mtSwipe.isDone&&e.$refs.mtSwipe.end(),u&&(u.$el.style.display=""),n&&(n.$el.style.display="")};if(t>this.musicStatus.index){var i=this.$refs.mtItem[this.musicStatus.index],n=this.$refs.mtItem[t],a=this.$refs.mtItem[0].$el.clientWidth;if(n&&(n.$el.style.display="block",this.$refs.mtSwipe.translate(n.$el,a)),this.$refs.mtSwipe.isDone=!0,this.$refs.mtSwipe.before(i.$el),this.$refs.mtSwipe.translate(i.$el,-a,300,s),n)var o=this,c=Object(g["setTimeout"])(function(){o.$refs.mtSwipe.translate(n.$el,0,300),Object(g["clearTimeout"])(c)},50)}else if(t<this.musicStatus.index){i=this.$refs.mtItem[this.musicStatus.index];var u=this.$refs.mtItem[t];a=this.$refs.mtItem[0].$el.clientWidth;u&&(u.$el.style.display="block",this.$refs.mtSwipe.translate(u.$el,-a)),this.$refs.mtSwipe.isDone=!0,this.$refs.mtSwipe.before(i.$el),this.$refs.mtSwipe.translate(i.$el,a,300,s),u&&this.$refs.mtSwipe.translate(u.$el,0,300)}}else console.log("break off")},mousedown:function(t){var e=this,s=Object(b["c"])(this.$refs.ctp,"music-controller"),i=this.$refs.ctp.offsetWidth,n=document.documentElement.scrollLeft||document.body.scrollLeft;t=t||window.event,t="onmousemove"==this.device?t:t.touches?t.touches[0]:t;var a=t.pageX||t.clientX+n,o=(t.offsetX,(a-s)/i),c=o*this.musicStatus.music.time;this.audio.currentTime=c,document[this.device]=function(t){t=t||window.event,t="onmousemove"==e.device?t:t.touches?t.touches[0]:t;var a=t.pageX||t.clientX+n,o=(t.offsetX,(a-s)/i);o=o<=1&&o>=0?o:o>1?1:0;var c=o*e.musicStatus.music.time;e.audio.currentTime=c;var u="onmousemove"==e.device?"onmouseup":"ontouchend";document[u]=function(t){document[e.device]=null,document[u]=null}}},mouseup:function(){var t=this,e="onmousemove"==this.device?"onmouseup":"ontouchend";document[e]=function(s){document[t.device]=null,document[e]=null}}}),filters:{formatFilter:function(t){return Object(b["b"])(t)}},watch:{"musicStatus.play":function(t){var e=this;this.t&&Object(g["clearTimeout"])(this.t),t?this.stopPlay=!1:this.t=Object(g["setTimeout"])(function(){e.stopPlay=!0},1e3)}}}),C=y,$=(s("ec07"),Object(r["a"])(C,v,h,!1,null,"5053e166",null)),_=$.exports,x={data:function(){return{show:!1}},mounted:function(){this.editVue(this)},computed:Object(p["a"])({},Object(w["d"])(["musiclist","musicStatus"])),components:{MusicController:_},methods:Object(p["a"])({},Object(w["c"])(["palyMusic","musicEdit","editVue"]),{handleChange:function(t){this.musicEdit({index:t}),this.palyMusic({status:!0})},showCon:function(){var t=this;this.show=!0,this.editVue(this.$refs.musicCon),this.musicStatus.play||this.$nextTick(function(){t.musicStatus.play=!1})}})},S=x,T=(s("61d2"),Object(r["a"])(S,f,d,!1,null,"5e831ce9",null)),I=T.exports,k={data:function(){return{transitionName:"slide-right"}},components:{BoxNav:m,BoxFoot:I},watch:{$route:function(t,e){"/box/home"==t.path?this.transitionName="slide-right":"/box/video"==t.path?this.transitionName="slide-left":"/box/home"==e.path?this.transitionName="slide-left":this.transitionName="slide-right"}}},O=k,j=(s("5d82"),Object(r["a"])(O,i,n,!1,null,"50019fc8",null));e["default"]=j.exports},b8af:function(t,e,s){t.exports=s.p+"img/music-c.1ef8b2dc.png"},be4c:function(t,e,s){},dee4:function(t,e,s){"use strict";s.d(e,"b",function(){return i}),s.d(e,"a",function(){return n}),s.d(e,"c",function(){return a});var i=function(t){var e,s,i,n="00:00:00";return t>0&&(e=Math.floor(t/3600),e<10&&(e="0"+e),s=Math.floor((t-3600*e)/60),s<10&&(s="0"+s),i=Math.floor((t-3600*e-60*s)%60),i<10&&(i="0"+i),n=e+":"+s+":"+i),n},n=function(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"ios":/(Android)/i.test(navigator.userAgent)?"android":"pc"},a=function t(e,s){if(e&&s){var i=e.offsetLeft;return e.offsetParent.className!=s&&(i+=t(e.offsetParent,s)),i}}},ec07:function(t,e,s){"use strict";var i=s("50d3"),n=s.n(i);n.a},f9cf:function(t,e,s){}}]);
//# sourceMappingURL=chunk-396716d1.dd190776.js.map