webpackJsonp([98],{1e3:function(e,t,a){var o=a(827);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(220)("4667d9bc",o,!0)},1240:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"otherService"}},[a("div",{staticClass:"el-col"},[a("el-form",{ref:"form",staticClass:"el-form",attrs:{model:e.modeData}},[a("el-col",[a("el-form-item",[a("el-radio-group",{staticStyle:{width:"100%"},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[a("el-col",{staticClass:"radio-block"},[a("el-col",{attrs:{span:5}},[a("el-radio",{attrs:{label:"lebo"}},[a("span",{domProps:{textContent:e._s(e.LANG["LEBO客服系统"]||"LEBO客服系统")}})])],1),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",[a("p",{staticClass:"title"},[e._v("pc端")]),e._v(" "),a("el-form-item",{attrs:{prop:"lebo.pc.code"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.modeData.lebo.pc.code,expression:"modeData.lebo.pc.code"}],staticStyle:{width:"100%"},attrs:{name:"",rows:"10",placeholder:"请输入在线客服代码"},domProps:{value:e.modeData.lebo.pc.code},on:{input:function(t){t.target.composing||e.$set(e.modeData.lebo.pc,"code",t.target.value)}}})])],1),e._v(" "),a("div",[a("p",{staticClass:"title"},[e._v("移动端")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入在线客服链接"},model:{value:e.modeData.lebo.mobile.code,callback:function(t){e.$set(e.modeData.lebo.mobile,"code",t)},expression:"modeData.lebo.mobile.code"}})],1)])],1),e._v(" "),a("el-col",{staticClass:"radio-block"},[a("el-col",{attrs:{span:5}},[a("el-radio",{attrs:{label:"usa"}},[a("span",{domProps:{textContent:e._s(e.LANG["美国客服系统"]||"美国客服系统")}})])],1),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",[a("p",{staticClass:"title"},[e._v("pc端")]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.modeData.usa.pc.code,expression:"modeData.usa.pc.code"}],staticStyle:{width:"100%"},attrs:{name:"",rows:"10",placeholder:"请输入在线客服代码"},domProps:{value:e.modeData.usa.pc.code},on:{input:function(t){t.target.composing||e.$set(e.modeData.usa.pc,"code",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"supportPos"},[a("span",{staticClass:"title"},[e._v("客服入口显示位置")]),e._v(" "),a("el-radio-group",{model:{value:e.modeData.usa.pc.position,callback:function(t){e.$set(e.modeData.usa.pc,"position",t)},expression:"modeData.usa.pc.position"}},[a("el-radio",{attrs:{label:"left-middle"}},[a("span",{domProps:{textContent:e._s(e.LANG["左中"]||"左中")}})]),e._v(" "),a("el-radio",{attrs:{label:"left-bottom"}},[a("span",{domProps:{textContent:e._s(e.LANG["左下"]||"左下")}})]),e._v(" "),a("el-radio",{attrs:{label:"right-middle"}},[a("span",{domProps:{textContent:e._s(e.LANG["右中"]||"右中")}})]),e._v(" "),a("el-radio",{attrs:{label:"right-bottom"}},[a("span",{domProps:{textContent:e._s(e.LANG["右下"]||"右下")}})])],1)],1),e._v(" "),a("div",[a("p",{staticClass:"title"},[e._v("移动端")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入在线客服链接"},model:{value:e.modeData.usa.mobile.code,callback:function(t){e.$set(e.modeData.usa.mobile,"code",t)},expression:"modeData.usa.mobile.code"}})],1)])],1),e._v(" "),a("el-col",{staticClass:"radio-block"},[a("el-col",{attrs:{span:5}},[a("el-radio",{attrs:{label:"live800"}},[a("span",{domProps:{textContent:e._s(e.LANG["LIVE800客服系统"]||"LIVE800客服系统")}})])],1),e._v(" "),a("el-col",{attrs:{span:19}},[a("div",[a("p",{staticClass:"title"},[e._v("pc端")]),e._v(" "),a("el-form-item",{attrs:{prop:"live800.pc.code"}},[a("el-input",{attrs:{placeholder:"请输入在线客服窗口地址URL"},model:{value:e.modeData.live800.pc.code,callback:function(t){e.$set(e.modeData.live800.pc,"code",t)},expression:"modeData.live800.pc.code"}})],1)],1),e._v(" "),a("div",{staticClass:"supportPos"},[a("span",{staticClass:"title"},[e._v("客服入口显示位置")]),e._v(" "),a("el-radio-group",{model:{value:e.modeData.live800.pc.position,callback:function(t){e.$set(e.modeData.live800.pc,"position",t)},expression:"modeData.live800.pc.position"}},[a("el-radio",{attrs:{label:"left-middle"}},[a("span",{domProps:{textContent:e._s(e.LANG["左中"]||"左中")}})]),e._v(" "),a("el-radio",{attrs:{label:"left-bottom"}},[a("span",{domProps:{textContent:e._s(e.LANG["左下"]||"左下")}})]),e._v(" "),a("el-radio",{attrs:{label:"right-middle"}},[a("span",{domProps:{textContent:e._s(e.LANG["右中"]||"右中")}})]),e._v(" "),a("el-radio",{attrs:{label:"right-bottom"}},[a("span",{domProps:{textContent:e._s(e.LANG["右下"]||"右下")}})])],1)],1),e._v(" "),a("div",[a("p",{staticClass:"title"},[e._v("移动端")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入在线客服链接"},model:{value:e.modeData.live800.mobile.code,callback:function(t){e.$set(e.modeData.live800.mobile,"code",t)},expression:"modeData.live800.mobile.code"}})],1)])],1)],1)],1)],1),e._v(" "),a("el-button",{staticClass:"saveBtn",attrs:{type:"primary"},on:{click:e.doSave}},[a("span",{domProps:{textContent:e._s(e.LANG["保存修改"]||"保存修改")}})])],1)],1)])},staticRenderFns:[]}},308:function(e,t,a){a(1e3);var o=a(59)(a(652),a(1240),"data-v-7674cfe3",null);e.exports=o.exports},652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(27),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){return{LANG:LANG,select:"lebo",modeData:{lebo:{pc:{code:"",position:""},mobile:{code:""},selected:!1},usa:{pc:{code:"",position:"left-middle"},mobile:{code:""},selected:!1},live800:{pc:{code:"",position:"left-middle"},mobile:{code:""},selected:!1}}}},methods:{init:function(){var e=this;this.submitData=JSON.parse((0,s.default)(this.modeData)),this.$.autoAjax("get",URL.api+ROUTES.GET.system.service,"",{ok:function(t){if(0==t.state&&t.data){var a=t.data.services,o=e.modeData;e.modeData.display=t.data.display;for(var s in a)(a[s].mobile&&a[s].mobile.code||a[s].pc&&a[s].pc.code)&&(o[s]=a[s]),!0===e.modeData[s].selected&&(e.select=s)}},p:function(){},error:function(e){console.log(e)}})},doSave:function(){var e=this,t=this.select,a={services:this.modeData,display:this.modeData.display};a.services.lebo.selected=!1,a.services.usa.selected=!1,a.services.live800.selected=!1,a.services[t].selected=!0,delete a.display,this.$.autoAjax("patch",URL.api+ROUTES.PATCH.system.service,a,{ok:function(t){0==t.state&&t.data?(e.$message.success(LANG["保存成功"]||"保存成功"),e.init()):e.$message.success(LANG["保存失败！"]||"保存失败！")},p:function(){},error:function(e){console.log(e)}})},doReset:function(){},validateLeboPcCode:function(e,t,a){"lebo"===this.select&&""==t?a(new Error(LANG["请输入在线客服代码"]||"请输入在线客服代码")):a()},validateLivePcCode:function(e,t,a){"live800"===this.select&&""==t?a(new Error(LANG["请输入在线客服窗口地址URL"]||"请输入在线客服窗口地址URL")):a()}},computed:{},mounted:function(){},created:function(){this.init()}}},827:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,"#otherService[data-v-7674cfe3]{width:50%;min-width:800px;margin:0 auto;padding-top:30px}.border[data-v-7674cfe3]{border:1px solid #ccc;padding:20px;margin:10px 0}.base[data-v-7674cfe3]{text-align:center}.base textarea[data-v-7674cfe3]{width:80%;min-height:200px}.server-title[data-v-7674cfe3]{float:none;text-align:left;line-height:normal;color:inherit;font-size:inherit;padding:0}.title[data-v-7674cfe3]{font-size:14px;padding-bottom:10px}.radio-block[data-v-7674cfe3]{padding-bottom:20px}.supportPos[data-v-7674cfe3]{padding:20px 0}.supportPos .title[data-v-7674cfe3]{padding-right:15px}.saveBtn[data-v-7674cfe3]{float:right}",""])}});