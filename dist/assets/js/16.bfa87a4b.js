(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{715:function(t,e,i){var s=i(6),n=i(172);t.exports=function(t,e,i){var r,o;return n&&"function"==typeof(r=e.constructor)&&r!==i&&s(o=r.prototype)&&o!==i.prototype&&n(t,o),t}},716:function(t,e,i){"use strict";var s=i(7),n=i(4),r=i(292),o=i(30),l=i(8),a=i(38),c=i(715),u=i(72),f=i(2),h=i(50),p=i(105).f,v=i(39).f,y=i(10).f,m=i(291).trim,d=n.Number,g=d.prototype,x="Number"==a(h(g)),N=function(t){var e,i,s,n,r,o,l,a,c=u(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=m(c)).charCodeAt(0))||45===e){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+c}for(o=(r=c.slice(2)).length,l=0;l<o;l++)if((a=r.charCodeAt(l))<48||a>n)return NaN;return parseInt(r,s)}return+c};if(r("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var _,w=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof w&&(x?f((function(){g.valueOf.call(i)})):"Number"!=a(i))?c(new d(N(e)),i,w):N(e)},I=s?p(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),b=0;I.length>b;b++)l(d,_=I[b])&&!l(w,_)&&y(w,_,v(d,_));w.prototype=g,g.constructor=w,o(n,"Number",w)}},771:function(t,e,i){},815:function(t,e,i){"use strict";i(771)},869:function(t,e,i){"use strict";i.r(e);i(716);var s=i(20),n={name:"VTextEllipsis",props:{text:String,height:Number,isLimitHeight:{type:Boolean,default:!0},type:{type:String,default:"2"},lineNum:{type:Number,default:1},more:{type:String,default:"..."},textStyle:[String,Object,Array],textClass:[String,Object,Array]},data:function(){return{keyIndex:0,oversize:!1,isHide:!1,typeTwo:{"--line-Num":0},showBtn:!1}},watch:{isLimitHeight:function(){this.init()},text:function(){this.init()},height:function(){this.init()}},created:function(){},mounted:function(){this.typeTwo["--line-Num"]=this.lineNum,"2"===this.type?1===this.lineNum?Object(s.addClass)(this.$refs.typeTwoDiv,"oneLine"):Object(s.addClass)(this.$refs.typeTwoDiv,"someLine"):this.init()},methods:{init:function(){this.oversize=!1,this.keyIndex+=1,this.$el.querySelector(".v-text-ellipsis-more").style.display="none",this.isLimitHeight&&this.limitShow(),console.log(this.$refs.typeTwoDiv)},textClick:function(){this.$emit("click")},limitShow:function(){var t=this;this.$nextTick((function(){var e=t.$el.querySelector(".v-text-ellipsis-limit-text"),i=t.$el,s=t.$el.querySelector(".v-text-ellipsis-more"),n=1e3;if(e)if(i.offsetHeight>t.height){s.style.display="inline-block";for(var r=t.text;i.offsetHeight>t.height&&n>0;)i.offsetHeight>3*t.height?e.innerText=r=r.substring(0,Math.floor(r.length/2)):e.innerText=r=r.substring(0,r.length-1),n--;t.$emit("hide"),t.isHide=!0}else t.$emit("show"),t.isHide=!1}))}}},r=(i(815),i(25)),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["1"===t.type?i("div",{staticClass:"v-text-ellipsis"},[t._t("before"),t._v(" "),i("span",{class:t.textClass,style:t.textStyle,attrs:{content:t.text},on:{click:t.textClick}},[i("span",{key:t.keyIndex,staticClass:"v-text-ellipsis-limit-text"},[t._v(t._s(t.text))]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.oversize,expression:"oversize"}],staticClass:"v-text-ellipsis-more"},[t.$slots.more?t._t("more"):i("span",[t._v(t._s(t.more))])],2)]),t._v(" "),t._t("after")],2):t._e(),t._v(" "),"2"===t.type?i("div",[i("div",{ref:"typeTwoDiv",staticClass:"typeTwoStyle",style:t.typeTwo},[t._v("\n      "+t._s(t.text)+"\n    ")])]):t._e()])}),[],!1,null,"5af6775e",null);e.default=o.exports}}]);