webpackJsonp([76],{1090:function(t,e,n){n(899);var a=n(59)(n(537),n(1131),"data-v-0886e746",null);t.exports=a.exports},1131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"modelSet"}},[n("el-button",{staticStyle:{position:"absolute",right:"10px",top:"-36px"},attrs:{type:"primary",size:"small"},domProps:{textContent:t._s(t.LANG["保 存"]||"保 存")},on:{click:t.doSave}}),t._v(" "),n("table",{staticClass:"el-table el-table__header el-table--border",staticStyle:{width:"100%"},attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[n("thead",[n("tr",[n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell"},[n("el-checkbox",{on:{change:t.allCheckedOdd},model:{value:t.allChecked,callback:function(e){t.allChecked=e},expression:"allChecked"}})],1)]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["玩法名称"]||"玩法名称")}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{padding:"0 20px"},attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell",staticStyle:{"padding-top":"46px"},domProps:{textContent:t._s(t.LANG["当前赔率"]||"当前赔率")}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputone,expression:"inputone"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调",min:"1"},domProps:{value:t.inputone},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.changeCol(e,"odds")},blur:function(e){t.changeCol(e,"odds")},input:function(e){e.target.composing||(t.inputone=e.target.value)}}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["最低赔率"]||"最低赔率")}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["最高赔率"]||"最高赔率")}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["玩法开启"]||"玩法开启")}},[n("br"),t._v(" "),n("el-checkbox",{staticStyle:{"margin-top":"10px"},attrs:{checked:!!t.checksPlayOn},on:{change:function(e){t.checkAllChange(e,"stateus")}},model:{value:t.checksPlayOn,callback:function(e){t.checksPlayOn=e},expression:"checksPlayOn"}})],1)]),t._v(" "),n("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"4",rowspan:"1"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["限额设置"]||"限额设置")}})])]),t._v(" "),n("tr",[n("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最小"]||"单注最小")}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最大"]||"单注最大")}})]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单项最大"]||"单项最大")}},[t._v(t._s())])]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最高派奖"]||"单注最高派奖")}})])]),t._v(" "),n("tr",[n("th",{staticClass:"el-table_1_column_37_column_39_column_40 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtwo,expression:"inputtwo"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",min:"2",placeholder:"快调"},domProps:{value:t.inputtwo},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.changeCol(e,"min_bet")},blur:function(e){t.changeCol(e,"min_bet")},input:function(e){e.target.composing||(t.inputtwo=e.target.value)}}})])]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_39_column_41 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputthree,expression:"inputthree"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputthree},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.changeCol(e,"one_bet")},blur:function(e){t.changeCol(e,"one_bet")},input:function(e){e.target.composing||(t.inputthree=e.target.value)}}})])]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_39_column_42 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputfour,expression:"inputfour"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputfour},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.changeCol(e,"one_term")},blur:function(e){t.changeCol(e,"one_term")},input:function(e){e.target.composing||(t.inputfour=e.target.value)}}})])]),t._v(" "),n("th",{staticClass:"el-table_1_column_37_column_39_column_43 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[n("div",{staticClass:"cell"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputfive,expression:"inputfive"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputfive},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.changeCol(e,"one_max_money")},blur:function(e){t.changeCol(e,"one_max_money")},input:function(e){e.target.composing||(t.inputfive=e.target.value)}}})])])])]),t._v(" "),t._l(t.dataModel,function(e,a){return t.dataModel.length?n("tr",[n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("el-checkbox",{on:{change:function(n){t.checkedOdd(a,e.checked)}},model:{value:e.checked,callback:function(n){t.$set(e,"checked",n)},expression:"item.checked"}})],1)]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[1===t.playTypeId?n("span",[t._v(t._s(e.odds_type)+" - "+t._s(e.result))]):n("span",[t._v(t._s(e.result))])])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[t._l(e.sub_odds,function(e,i){return n("div",{staticStyle:{clear:"both"}},[n("span",{staticClass:"sub"},[t._v(t._s(e.name))]),t._v(" "),n("span",{staticClass:"sub",on:{click:function(e){t.changeInput(e,a,"zdpl")}}},[t._v(t._s(e.odds))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.odds,expression:"sub.odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.odds},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"odds",i)},blur:function(e){t.doEnter(a,"odds",i)},input:function(n){n.target.composing||t.$set(e,"odds",n.target.value)}}})])}),t._v(" "),e.sub_odds?t._e():n("span",{on:{click:function(e){t.changeInput(e,a,"zdpl")}}},[t._v(t._s(e.odds))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.odds,expression:"item.odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.odds},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"odds")},blur:function(e){t.doEnter(a,"odds")},input:function(n){n.target.composing||t.$set(e,"odds",n.target.value)}}})],2)]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[t._v(t._s(e.min_odds))])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[t._v(t._s(e.max_odds))])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("el-checkbox",{attrs:{"true-label":"enabled","false-label":"disabled"},model:{value:e.status,callback:function(n){t.$set(e,"status",n)},expression:"item.status"}})],1)]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("span",{on:{click:function(e){t.changeInput(e,a,"dzzx")}}},[t._v(t._s(e.min_bet))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.min_bet,expression:"item.min_bet"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.min_bet},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"min_bet")},blur:function(e){t.doEnter(a,"min_bet")},input:function(n){n.target.composing||t.$set(e,"min_bet",n.target.value)}}})])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("span",{on:{click:function(e){t.changeInput(e,a,"dzzd")}}},[t._v(t._s(e.one_bet))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.one_bet,expression:"item.one_bet"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_bet},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"one_bet")},blur:function(e){t.doEnter(a,"one_bet")},input:function(n){n.target.composing||t.$set(e,"one_bet",n.target.value)}}})])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("span",{on:{click:function(e){t.changeInput(e,a,"dxzx")}}},[t._v(t._s(e.one_term))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.one_term,expression:"item.one_term"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_term},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"one_term")},blur:function(e){t.doEnter(a,"one_term")},input:function(n){n.target.composing||t.$set(e,"one_term",n.target.value)}}})])]),t._v(" "),n("td",{staticClass:"el-table_1_column_19"},[n("div",{staticClass:"cell"},[n("span",{on:{click:function(e){t.changeInput(e,a,"dxzgpj")}}},[t._v(t._s(e.one_max_money))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.one_max_money,expression:"item.one_max_money"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_max_money},on:{keyup:function(e){if(!("button"in e)&&13!==e.keyCode)return null;t.doEnter(a,"one_max_money")},blur:function(e){t.doEnter(a,"one_max_money")},input:function(n){n.target.composing||t.$set(e,"one_max_money",n.target.value)}}})])])]):t._e()}),t._v(" "),0==t.dataModel.length?n("tr",{staticStyle:{"text-align":"center",height:"100px"}},[n("td",{attrs:{colspan:"8"}},[t._v("暂无数据")])]):t._e()],2),t._v(" "),t.dataModel.length>0?n("el-col",{staticClass:"toolbar mt20",staticStyle:{position:"relative"},attrs:{span:24}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":[10,50,100,200,500],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.doCurrentChange,"size-change":t.doSizePage}})],1):t._e()],1)},staticRenderFns:[]}},1132:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"lotteryOdds"}},[n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-col",{attrs:{span:20}},[n("changeplay",{on:{"do-change-play":t.doChangePlay}})],1),t._v(" "),n("el-col",{staticClass:"tRight",attrs:{span:4}},[n("el-button",{attrs:{type:"primary",size:"small",icon:"arrow-left"},on:{click:t.goBlack}},[t._v("返 回")])],1)],1),t._v(" "),n("el-col",{staticStyle:{"text-align":"left","margin-bottom":"10px"},attrs:{span:24}},[n("span",[t._v(t._s(t.LANG["当前模板"]||"当前模板")+" => "+t._s(t.lotteryTemplate))])]),t._v(" "),n("el-col",{staticClass:"btngroup"},t._l(t.lotteryList,function(e,a){return n("el-button",{key:a,staticClass:"formCancel",class:{"el-button--primary":parseInt(e.id)==parseInt(t.nowLotteryId)},staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{click:function(n){t.changeGame(e,a)}}},[t._v(t._s(e.name))])})),t._v(" "),n("el-col",t._l(t.playTypeList,function(e,a){return n("el-button",{key:a,staticClass:"formCancel",class:{"el-button--primary":parseInt(e.id)==parseInt(t.nowPlayTypeId)},staticStyle:{padding:"10px"},attrs:{type:"text"},on:{click:function(n){t.changePlayType(e)}}},[t._v(t._s(e.name))])})),t._v(" "),n("el-col",[n("oddsSet",{attrs:{tableUrl:t.tableUrl,columnsUrl:t.columnsUrl,playTypeId:t.lotteryTypeId,updated:t.updated},on:{"save-data":t.saveOdds}})],1)],1)},staticRenderFns:[]}},260:function(t,e,n){n(900);var a=n(59)(n(594),n(1132),"data-v-088cd9e4",null);t.exports=a.exports},424:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{LANG:LANG,standardActive:"primary",quickActive:""}},props:{active:{type:String,default:"standard"}},methods:{init:function(){},doChangePlay:function(t){"standard"==t?(this.standardActive="primary",this.quickActive="",this.$emit("do-change-play",{item:"standard"})):(this.standardActive="",this.quickActive="primary",this.$emit("do-change-play",{item:"fast"}))}},watch:{active:function(t){t&&this.doChangePlay(t)}}}},464:function(t,e,n){var a=n(59)(n(424),n(475),null,null);t.exports=a.exports},475:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"typeBtn"},[n("el-button",{attrs:{type:t.standardActive,size:"small"},domProps:{textContent:t._s(t.LANG["官方玩法"]||"官方玩法")},on:{click:function(e){t.doChangePlay("standard")}}}),t._v(" "),n("el-button",{attrs:{type:t.quickActive,size:"small"},domProps:{textContent:t._s(t.LANG["信用玩法"]||"信用玩法")},on:{click:function(e){t.doChangePlay("fast")}}})],1)},staticRenderFns:[]}},489:function(t,e,n){var a=n(21);t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},537:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(681),s=a(i),o=n(115),l=a(o),r=n(27),c=a(r),d=n(4);a(d);e.default={data:function(){return{LANG:LANG,checksPlayOn:!1,dataModel:[],loading:!1,total:0,pageSize:50,pageCount:0,currentPage:0,all_min_odds:0,old_odds:"",inputfive:"",inputfour:"",inputthree:"",inputtwo:"",inputone:"",allChecked:!1,currentCheck:[],baseUrl:""}},props:{tableUrl:String,columnsUrl:String,updated:{type:Boolean,default:!1},playTypeId:Number},watch:{tableUrl:function(t){t&&this.init()},updated:function(t){t&&this.init()}},methods:{init:function(){var t=this,e=this;this.inputfive="",this.inputfour="",this.inputthree="",this.inputtwo="",this.inputone="";var n=(this.total,this.pageSize),a=(this.pageCount,this.currentPage);if(this.baseUrl=this.tableUrl,this.baseUrl){this.loading=!0;if(-1===this.baseUrl.indexOf("?"))this.baseUrl=this.baseUrl+"?page="+(0===a?1:a)+"&page_size="+(0===n?10:n);else{var i=this.baseUrl.indexOf("page=");this.baseUrl=i>0?this.baseUrl.replace(/page=\d+/,"page="+a||1):this.baseUrl+"&page="+(0===a?1:a)+"&page_size="+(0===n?10:n);var s=this.baseUrl.indexOf("page_size=");this.baseUrl=s>0?this.baseUrl.replace(/page_size=\d+/,"page_size="+(0===n?10:n)):this.baseUrl+"&page_size=10"}this.dataModel=[],this.all_min_odds=0,this.$.autoAjax("get",this.baseUrl,"",{ok:function(n){if(0===n.state&&n.data){e.total=n.attributes.total||10,e.pageSize=n.attributes.size||50,e.pageCount=Math.ceil(t.total/t.pageSize),e.currentPage=n.attributes.number||1;var a=n.data||n.data.list||[],i=e.dataModel,s=!0,o=!1,r=void 0;try{for(var d,u=(0,l.default)(a);!(s=(d=u.next()).done);s=!0){d.value.checked=!1}}catch(t){o=!0,r=t}finally{try{!s&&u.return&&u.return()}finally{if(o)throw r}}e.all_min_odds=FORMATNUMBER(n.data[0].max_odds);for(var p in a){var _=a[p],h={};for(var f in _)"min_bet"===f||"one_bet"===f||"one_term"===f||"one_max_money"===f?h[f]=FORMATMONEY(_[f]):("max_odds"===f&&FORMATNUMBER(e.all_min_odds)>0&&FORMATNUMBER(_[f])<FORMATNUMBER(e.all_min_odds)&&(e.all_min_odds=FORMATNUMBER(_[f])),h[f]=_[f]);e.$set(i,p,h)}var v=i;sessionStorage.setItem("old_odds",(0,c.default)(v))}e.loading=!1},p:function(){},error:function(t){console.log(t)}}).catch(function(t){e.loading=!1,e.$message.error(LANG["未知错误 ，请稍后重试！"]||"未知错误 ，请稍后重试！")})}},doSave:function(){var t=this.dataModel,e=JSON.parse(sessionStorage.getItem("old_odds")),n=[],a=[];for(var i in t){var s=t[i],o={};for(var l in s)o[l]="min_bet"===l||"one_bet"===l||"one_term"===l||"one_max_money"===l?FORMATMultiplyMoney(s[l]):s[l];n.push(o)}for(var r in e){var c=e[r],d={};for(var u in c)d[u]="min_bet"===u||"one_bet"===u||"one_term"===u||"one_max_money"===u?FORMATMultiplyMoney(c[u]):c[u];a.push(d)}this.$emit("save-data",{item:n,old_odds:a})},doCurrentChange:function(t){this.currentPage=t,this.init()},doSizePage:function(t){this.pageSize=t,this.init()},changeInput:function(t,e,n){var a=window.event||t;a.srcElement?a.srcElement:a.target;a.target.style.display="none",a.target.nextElementSibling.style.display="block",a.target.focus()},doEnter:function(t,e,n){var a=this;if("odds"===e){var i=this.$createElement;parseInt(n)>=0?FORMATNUMBER(this.dataModel[t].sub_odds[n].odds)>FORMATNUMBER(this.dataModel[t].max_odds)&&(a.$notify.error({title:"标题名称",message:i("i",{style:"color: teal"},(LANG["赠率值不可大于最高赔率,已修改为最大值"]||"赠率值不可大于最高赔率,已修改为最大值")+this.dataModel[t].max_odds)}),this.dataModel[t].sub_odds[n].odds=this.dataModel[t].max_odds):FORMATNUMBER(this.dataModel[t].odds)>FORMATNUMBER(this.dataModel[t].max_odds)&&(a.$notify.error({title:"标题名称",message:i("i",{style:"color: teal"},(LANG["赠率值不可大于最高赔率,已修改为最大值"]||"赠率值不可大于最高赔率,已修改为最大值")+this.dataModel[t].max_odds)}),this.dataModel[t].odds=this.dataModel[t].max_odds)}var s=window.event||event;s.srcElement?s.srcElement:s.target;event.target.style.display="none",event.target.previousElementSibling.style.display="block"},checkAllChange:function(t,e){var n=window.event||t,a=this.dataModel;if((n.srcElement?n.srcElement:n.target).checked)for(var i in this.dataModel)a[i][e]=!0;else for(var s in this.dataModel)a[s][e]=!1},changeCol:function(t,e){var n=this.$createElement,a=this,i=window.event||t,s=i.srcElement?i.srcElement:i.target;if("odds"===e)if(this.currentCheck.length>0){var o=0,r=0,c=[],d=[],u=!0,p=!1,_=void 0;try{for(var h,f=(0,l.default)(this.currentCheck);!(u=(h=f.next()).done);u=!0){var v=h.value;c.push(FORMATNUMBER(this.dataModel[v].max_odds)),d.push(FORMATNUMBER(this.dataModel[v].min_odds))}}catch(t){p=!0,_=t}finally{try{!u&&f.return&&f.return()}finally{if(p)throw _}}if(o=GETARRAYMIN(c),r=GETARRAYMAX(d),FORMATNUMBER(s.value)>FORMATNUMBER(o))return void this.$notify.error({title:"标题名称",message:n("i",{style:"color: teal"},(LANG["赠率值不可大于最高赔率,请修改后重试"]||"赠率值不可大于最高赔率,请修改后重试")+s.value)});if(FORMATNUMBER(s.value)<FORMATNUMBER(r))return void this.$notify.error({title:"标题名称",message:n("i",{style:"color: teal"},(LANG["赠率值不可大于最小赔率,请修改后重试"]||"赠率值不可小于最高赔率,请修改后重试")+s.value)})}else if(FORMATNUMBER(s.value)>FORMATNUMBER(this.all_min_odds))return void a.$notify.error({title:"标题名称",message:n("i",{style:"color: teal"},(LANG["赠率值不可大于最高赔率,请修改后重试"]||"赠率值不可大于最高赔率,请修改后重试")+s.value)});if(FORMATNUMBER(s.value)<0)return this.$message.error(LANG["最小值为0"]||"最小值为0");if(s.value){for(var m in this.dataModel)if(this.dataModel[m].sub_odds&&"odds"===e)if(0===this.currentCheck.length)for(var y=this.dataModel[m].sub_odds,g=0;g<y.length;g++)y[g].odds=s.value;else{var b=!0,C=!1,x=void 0;try{for(var k,w=(0,l.default)(this.currentCheck);!(b=(k=w.next()).done);b=!0){var T=k.value;if(T==m)for(var M=this.dataModel[m].sub_odds,A=0;A<M.length;A++)M[A].odds=s.value}}catch(t){C=!0,x=t}finally{try{!b&&w.return&&w.return()}finally{if(C)throw x}}}else if(0===this.currentCheck.length)this.dataModel[m][e]=s.value;else{var N=!0,E=!1,P=void 0;try{for(var U,L=(0,l.default)(this.currentCheck);!(N=(U=L.next()).done);N=!0){var S=U.value;S==m&&(this.dataModel[m][e]=s.value)}}catch(t){E=!0,P=t}finally{try{!N&&L.return&&L.return()}finally{if(E)throw P}}}s.blur()}},allCheckedOdd:function(){var t=this.allChecked,e=!0,n=!1,a=void 0;try{for(var i,s=(0,l.default)(this.dataModel);!(e=(i=s.next()).done);e=!0){i.value.checked=t}}catch(t){n=!0,a=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw a}}if(this.allChecked){this.currentCheck=[];var o=!0,r=!1,c=void 0;try{for(var d,u=(0,l.default)(this.dataModel.keys());!(o=(d=u.next()).done);o=!0){var p=d.value;this.currentCheck.push(p)}}catch(t){r=!0,c=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw c}}}else this.currentCheck=[]},checkedOdd:function(t,e){if(e)this.currentCheck.push(t),new s.default(this.currentCheck);else{var n=this.currentCheck.indexOf(t);this.currentCheck.splice(n,1)}}},created:function(){this.init()}}},594:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1090),s=a(i),o=n(464),l=a(o);e.default={data:function(){return{LANG:LANG,tableUrl:"",columnsUrl:"",lotteryTemplate:"",lotteryTemplateId:-1,lotteryTypeId:0,lotteryTypeName:"标准玩法",lotteryList:[],nowLotteryId:-1,nowLotteryTemplate:"",nowLotteryPid:-1,nowPlayTypeId:-1,playTypeList:[],loading:!1,updated:!1}},components:{oddsSet:s.default,changeplay:l.default},methods:{init:function(){this.lotteryTemplate=this.$route.query.name||"",this.lotteryTemplateId=this.$route.query.id||-1,this.baseUrl="",0===this.lotteryTypeId?this.baseUrl=URL.api+ROUTES.GET.lottery.rate+"?tid="+this.lotteryTemplateId:this.baseUrl=URL.api+ROUTES.GET.lottery.fast+"?tid="+this.lotteryTemplateId,this.getPlayType()},getPlayType:function(){var t=this,e=this;this.loading=!0;var n=URL.api+ROUTES.GET.lottery.types.play+"?tid="+this.lotteryTemplateId+"&lottery_type="+this.lotteryTypeId;this.$.autoAjax("get",n,"",{ok:function(n){if(0==n.state&&n.data){n.data&&n.data[0]&&n.data[0].sub&&n.data[0].sub[0]&&(e.nowPlayTypeId=n.data[0].sub[0].play_type1||-1,e.nowLotteryId=n.data[0].lottery_id||-1,e.nowLotteryTemplate=n.data[0].name||""),e.lotteryList=[];var a=n.data||[];for(var i in a)e.lotteryList.push({id:a[i].lottery_id,name:a[i].name,sub:a[i].sub});e.getPlayTypeList(0),e.tableUrl=e.baseUrl+"&lottery_type="+t.lotteryTypeId+"&lottery_id="+t.nowLotteryId+"&play_id="+t.nowPlayTypeId}e.loading=!1},p:function(){},error:function(t){e.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),e.loading=!1}})},getPlayTypeList:function(t){this.playTypeList=[],this.nowPlayTypeId=this.lotteryList[t].sub[0].play_type1||-1;var e=this.playTypeList,n=this.lotteryList[t].sub||[];for(var a in n)e.push({id:n[a].play_type1,name:n[a].play_type1_name})},changeGame:function(t,e){this.nowLotteryId=parseInt(t.id),this.getPlayTypeList(e),this.tableUrl=this.baseUrl+"&lottery_type="+this.lotteryTypeId+"&lottery_id="+this.nowLotteryId+"&play_id="+this.nowPlayTypeId},changePlayType:function(t){this.nowPlayTypeId=t.id||-1,this.tableUrl=this.baseUrl+"&lottery_type="+this.lotteryTypeId+"&lottery_id="+this.nowLotteryId+"&play_id="+this.nowPlayTypeId},doChangePlay:function(t){"fast"==t.item&&0===this.lotteryTypeId&&(this.lotteryTypeId=1,this.lotteryTypeName="快捷玩法",this.init()),"standard"==t.item&&1===this.lotteryTypeId&&(this.lotteryTypeId=0,this.lotteryTypeName="标准玩法",this.init())},saveOdds:function(t){var e=this;this.updated=!1;var n={};n.tid=this.lotteryTemplateId,n.tname=this.lotteryTemplate,n.lid=this.nowLotteryId,n.lottery_name=this.nowLotteryTemplate,n.odds=t.item,n.old_odds=t.old_odds;var a="";a=0===this.lotteryTypeId?URL.api+ROUTES.PUT.lottery.rate:URL.api+ROUTES.PUT.lottery.fast,this.$.autoAjax("put",a,n,{ok:function(t){0==t.state&&t.data?(e.updated=!0,e.$message.success(LANG["恭喜您，赔率设置成功！"]||"恭喜您，赔率设置成功！")):t.msg?e.$message.error(t.msg):e.$message.error(LANG["赔率设置失败！"]||"赔率设置失败！")},p:function(){},error:function(t){e.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！")}})},goBlack:function(){window.history.go(-1)}},computed:{},mounted:function(){},created:function(){this.init()},watch:{$route:function(t){t.query.name&&this.init()}}}},681:function(t,e,n){t.exports={default:n(703),__esModule:!0}},703:function(t,e,n){n(66),n(38),n(39),n(715),n(719),n(718),n(717),t.exports=n(2).Set},704:function(t,e,n){var a=n(116);t.exports=function(t,e){var n=[];return a(t,!1,n.push,n,e),n}},705:function(t,e,n){var a=n(28),i=n(63),s=n(32),o=n(65),l=n(707);t.exports=function(t,e){var n=1==t,r=2==t,c=3==t,d=4==t,u=6==t,p=5==t||u,_=e||l;return function(e,l,h){for(var f,v,m=s(e),y=i(m),g=a(l,h,3),b=o(y.length),C=0,x=n?_(e,b):r?_(e,0):void 0;b>C;C++)if((p||C in y)&&(f=y[C],v=g(f,C,m),t))if(n)x[C]=v;else if(v)switch(t){case 3:return!0;case 5:return f;case 6:return C;case 2:x.push(f)}else if(d)return!1;return u?-1:c||d?d:x}}},706:function(t,e,n){var a=n(21),i=n(120),s=n(6)("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),a(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},707:function(t,e,n){var a=n(706);t.exports=function(t,e){return new(a(t))(e)}},708:function(t,e,n){"use strict";var a=n(12).f,i=n(40),s=n(119),o=n(28),l=n(117),r=n(116),c=n(64),d=n(121),u=n(122),p=n(11),_=n(118).fastKey,h=n(489),f=p?"_s":"size",v=function(t,e){var n,a=_(e);if("F"!==a)return t._i[a];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var d=t(function(t,a){l(t,d,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[f]=0,void 0!=a&&r(a,n,t[c],t)});return s(d.prototype,{clear:function(){for(var t=h(this,e),n=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];t._f=t._l=void 0,t[f]=0},delete:function(t){var n=h(this,e),a=v(n,t);if(a){var i=a.n,s=a.p;delete n._i[a.i],a.r=!0,s&&(s.n=i),i&&(i.p=s),n._f==a&&(n._f=i),n._l==a&&(n._l=s),n[f]--}return!!a},forEach:function(t){h(this,e);for(var n,a=o(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!v(h(this,e),t)}}),p&&a(d.prototype,"size",{get:function(){return h(this,e)[f]}}),d},def:function(t,e,n){var a,i,s=v(t,e);return s?s.v=n:(t._l=s={i:i=_(e,!0),k:e,v:n,p:a=t._l,n:void 0,r:!1},t._f||(t._f=s),a&&(a.n=s),t[f]++,"F"!==i&&(t._i[i]=s)),t},getEntry:v,setStrong:function(t,e,n){c(t,e,function(t,n){this._t=h(t,e),this._k=n,this._l=void 0},function(){for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?d(0,n.k):"values"==e?d(0,n.v):d(0,[n.k,n.v]):(t._t=void 0,d(1))},n?"entries":"values",!n,!0),u(e)}}},709:function(t,e,n){var a=n(62),i=n(704);t.exports=function(t){return function(){if(a(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},710:function(t,e,n){"use strict";var a=n(5),i=n(8),s=n(118),o=n(20),l=n(17),r=n(119),c=n(116),d=n(117),u=n(21),p=n(31),_=n(12).f,h=n(705)(0),f=n(11);t.exports=function(t,e,n,v,m,y){var g=a[t],b=g,C=m?"set":"add",x=b&&b.prototype,k={};return f&&"function"==typeof b&&(y||x.forEach&&!o(function(){(new b).entries().next()}))?(b=e(function(e,n){d(e,b,t,"_c"),e._c=new g,void 0!=n&&c(n,m,e[C],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!y||"clear"!=t)&&l(b.prototype,t,function(n,a){if(d(this,b,t),!e&&y&&!u(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,a);return e?this:i})}),y||_(b.prototype,"size",{get:function(){return this._c.size}})):(b=v.getConstructor(e,t,m,C),r(b.prototype,n),s.NEED=!0),p(b,t),k[t]=b,i(i.G+i.W+i.F,k),y||v.setStrong(b,t,m),b}},712:function(t,e,n){"use strict";var a=n(8),i=n(29),s=n(28),o=n(116);t.exports=function(t){a(a.S,t,{from:function(t){var e,n,a,l,r=arguments[1];return i(this),e=void 0!==r,e&&i(r),void 0==t?new this:(n=[],e?(a=0,l=s(r,arguments[2],2),o(t,!1,function(t){n.push(l(t,a++))})):o(t,!1,n.push,n),new this(n))}})}},713:function(t,e,n){"use strict";var a=n(8);t.exports=function(t){a(a.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},715:function(t,e,n){"use strict";var a=n(708),i=n(489);t.exports=n(710)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return a.def(i(this,"Set"),t=0===t?0:t,t)}},a)},717:function(t,e,n){n(712)("Set")},718:function(t,e,n){n(713)("Set")},719:function(t,e,n){var a=n(8);a(a.P+a.R,"Set",{toJSON:n(709)("Set")})},728:function(t,e,n){e=t.exports=n(219)(),e.push([t.i,"#modelSet[data-v-0886e746]{position:relative}.cell[data-v-0886e746]{text-align:center}.cell input[data-v-0886e746]{display:none}.cell span[data-v-0886e746]{display:block;width:100%;height:100%}.cell .sub[data-v-0886e746]{display:block;width:50%;float:left}",""])},729:function(t,e,n){e=t.exports=n(219)(),e.push([t.i,"#lotteryOdds .btngroup>.el-button[data-v-088cd9e4]{margin-right:10px}#lotteryOdds .btngroup>.el-button+.el-button[data-v-088cd9e4]{margin-left:0}",""])},899:function(t,e,n){var a=n(728);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(220)("bf9ded52",a,!0)},900:function(t,e,n){var a=n(729);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(220)("2f2bd188",a,!0)}});