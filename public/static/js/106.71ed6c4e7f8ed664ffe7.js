webpackJsonp([106],{1170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"w100 tCent",attrs:{id:"errorPage"}},[o("el-col",{staticClass:"errorBox w100 tCent",attrs:{span:24}},[o("div",{staticClass:"errorBoxChild"},[o("p",{staticStyle:{"font-size":"16px"}},[e._v("请求地址："),o("span",[e._v(e._s(e.errorDada.url))])]),o("br"),e._v(" "),o("p",[e._v("提示:"),o("br"),o("span",[e._v(e._s(e.errorDada.title))])])])])],1)},staticRenderFns:[]}},246:function(e,t,o){o(938);var r=o(59)(o(576),o(1170),"data-v-392452c0",null);e.exports=r.exports},576:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{LANG:LANG,errorCode:[{code:"200",title:"OK"},{code:"400",title:"Bad Request"},{code:"401",title:"Unauthorized 权限不足"},{code:"402",title:"Request Failed"},{code:"403",title:"Forbidden"},{code:"404",title:"Not Found 页面丢失"},{code:"405",title:"Method Not Allowed"},{code:"406",title:"Not Acceptable"},{code:"407",title:"Proxy Authentication Required"},{code:"408",title:"Request Time-out"},{code:"409",title:"Conflict"},{code:"410",title:"Gone"},{code:"411",title:"Length Required"},{code:"412",title:"Precondition Failed"},{code:"413",title:"Request Entity Too Large"},{code:"414",title:"Request-URI Too Large"},{code:"415",title:"Unsupported Media Type"},{code:"416",title:"Requested range not satisfiable"},{code:"417",title:"Expectation Failed"},{code:"420",title:"Version Undefined"},{code:"500",title:"Internal Server Error 服务器故障"},{code:"501",title:"Not Implemented"},{code:"502",title:"Bad Gateway"},{code:"503",title:"Service Unavailable"},{code:"504",title:"Gateway Time-out"},{code:"505",title:"HTTP Version not supported"},{code:"510",title:"Version Error"},{code:"554",title:"Under Maintenance"},{code:"555",title:"Service Offline"}],errorDada:{lable:null,code:null}}},props:{},watch:{},computed:{},methods:{init:function(){if(this.$route.query){var e=this.$route.query;this.errorDada.url=e.url||"";for(var t in this.errorCode)if(e.code==this.errorCode[t].code)return this.errorDada.title=this.errorCode[t].title,void(this.errorDada.code=e.code)}console.log(this.errorDada)}},mounted:function(){$(window).on("load resize",function(){$(".errorBox").css({height:$(window).height()-"90"})})},created:function(){this.init()}}},767:function(e,t,o){t=e.exports=o(219)(),t.push([e.i,'#errorPage .errorBox[data-v-392452c0]{background:#fff;min-height:645px}#errorPage .errorBox .errorBoxChild[data-v-392452c0]{width:800px;height:645px;background:url("/static/img/error.png");background-size:100% 100%;margin:0 auto}#errorPage .errorBox .errorBoxChild p[data-v-392452c0]{font-size:200%;font-weight:700;font-family:宋体;color:#99a9bf;position:relative;max-width:460px;word-break:break-all;left:340px;top:360px;text-align:left}',""])},938:function(e,t,o){var r=o(767);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(220)("084f9592",r,!0)}});