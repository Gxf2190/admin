(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{491:function(t,e,a){},492:function(t,e,a){},493:function(t,e,a){},494:function(t,e,a){},495:function(t,e,a){},496:function(t,e,a){},99:function(t,e,a){"use strict";a.r(e);var s=a(198),l=a(197),i={data:()=>({LANG:LANG,tableUrl:"",columnsUrl:"",baseUrl:"",showGames:!1,username:"",gameList:[]}),methods:{init(){this.baseUrl=URL.api+"/state/summary",this.columnsUrl="static/json/userManagement/agentAccount/userAgentcolumns.json",this.tableUrl=this.baseUrl+"?date_from="+this.stime+"&date_to="+this.etime+"&type=member&agent_id="+this.nowId,this.gameList.splice(0,this.gameList.length);let t=this.gameList;this.$.autoAjax("get",URL.api+ROUTES.GET.games.listTwo,"",{ok:e=>{if(0===e.state&&e.data){let a=e.data||[];for(let e in a)t.push({game_id:a[e].game_id,game_type:a[e].game_type})}},p:()=>{},error:t=>{console.log(t)}}).catch(function(t){})},doReturn(){this.showGames?(this.showGames=!1,this.columnsUrl="static/json/userManagement/agentAccount/userAgentcolumns.json",this.tableUrl=this.baseUrl+"?date_from="+this.stime+"&date_to="+this.etime+"&type=member&agent_id="+this.nowId):this.$emit("return-page",{})},doHandle(t){switch(t.fn){case"openGameReport":this.openGameReport(t.row);break;case"openUser":this.openUser(t.row)}},openGameReport(t){this.stime,this.etime,t.name;this.showGames=!0,this.username=t.name,this.columnsUrl="static/json/statement/gameStatement/columns2.json",this.tableUrl=URL.api+ROUTES.GET.state.game+"?flag=0&type=user&games="+JSON.stringify(this.gameList)+"&date_from="+this.stime+"&date_to="+this.etime+"&user_name="+t.name},openUser(t){this.$router.push({path:"/noteManagement",query:{user_name:t.user_name,game_name:t.game_name,game_type:t.game_type,start_time:this.stime,end_time:this.etime,isopen:1}})}},props:{nowId:String,agentName:String,etime:String,stime:String,type:String},components:{tablegrid:l.a},created(){this.init()},watch:{agentName:function(t){t&&this.init()}}},o=a(24);var r=function(t){a(493)},n=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"validUserDetail"}},[a("el-col",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.doReturn}},[t._v(t._s(t.LANG["返回"]||"返回"))])],1),t._v(" "),a("el-col",[t.showGames?t._e():a("span",{staticClass:"ml10"},[t._v(t._s(t.agentName)+" "+t._s(t.LANG["代理下的会员详情"]||"代理下的会员详情"))]),t._v(" "),t.showGames?a("span",{staticClass:"ml10"},[t._v(t._s(t.LANG["会员"]||"会员")+" "+t._s(t.username))]):t._e(),t._v(" "),a("span",{staticClass:"ml10"},[t._v(t._s(t.LANG["时间"]||"时间")+" ( "+t._s(t.stime)+" "+t._s(t.LANG["到"]||"到")+" "+t._s(t.etime)+" )")]),t._v(" "),t.showGames?t._e():a("span",{staticClass:"ml10"},[t._v(t._s(t.LANG["总报表"]||"总报表"))]),t._v(" "),t.showGames?a("span",{staticClass:"ml10"},[t._v(t._s(t.LANG["游戏报表"]||"游戏报表"))]):t._e()]),t._v(" "),t.showGames?t._e():a("el-col",[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,isCreated:!0},on:{"do-handle":t.doHandle}})],1),t._v(" "),t.showGames?a("el-col",[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,isCreated:!0,sumGame:!0},on:{"do-handle":t.doHandle}})],1):t._e()],1)},[],!1,r,null,null).exports,_={data:()=>({LANG:LANG,isEdit:{},formConfig:[{type:"quickDate",showTimes:!0},{type:"dateGroup",label:"时间",prop:[{prop:"time_start",value:"",label:"开始时间"},{prop:"time_end",value:"",label:"结束时间"}]},{prop:"type",value:"",label:"账号体系",type:"select",list:[{label:"全部",value:""},{label:"层级代理",value:"1"},{label:"直属代理",value:"2"}]},{prop:"name",value:"",type:"text",label:"用户名"}],columnsUrl:"",tableUrl:"",agentbaseUrl:"",agentNames:"",stimes:sessionStorage.sysTime,etimes:sessionStorage.sysTime,outUrl:"",onDialogVisible:!1,sumShow:!1,searchObj:{},searchObjUser:{},showDetail:!1,sumData:{total:0,sub_members:0,tatal_members:0},updateKeys:"",isShow:"true"==sessionStorage.valid_user_export}),props:{stime:String,etime:String},methods:{init(){this.searchObj.time_start=this.stime?this.stime:sessionStorage.dateTimeStart,this.searchObj.time_end=this.etime?this.etime:sessionStorage.dateTimeEnd,this.stimes=this.searchObj.time_start,this.etimes=this.searchObj.time_end,this.columnsUrl="static/json/accoutManage/validUser/columns.json",this.tableUrl=URL.api+ROUTES.GET.user.agent.valid+"?time_start="+this.stimes+"&time_end="+this.etimes,this.agentbaseUrl=URL.api+ROUTES.GET.user.agent.valid,this.dates="?time_start="+this.stimes+"&time_end="+this.etimes,(this.stime||this.etime)&&(this.formConfig[1].prop[0].value=this.stimes,this.formConfig[1].prop[1].value=this.etimes)},getDate(t){t.allData&&t.allData.attributes&&(this.sumData.total=t.allData.attributes.total||0,this.sumData.sub_members=t.allData.attributes.sub_members||0,this.sumData.tatal_members=t.allData.attributes.tatal_members||0)},doQuery(t){if(""===t.item.time_start)this.$message.error(LANG["开始时间必需填写"]||"开始时间必需填写");else if(""===t.item.time_end)this.$message.error(LANG["结束时间必需填写"]||"结束时间必需填写");else{this.tableUrl=this.agentbaseUrl+this.addSearch(t.item),this.dates="?time_start="+t.item.time_start+"&time_end="+t.item.time_end+"&get_total=1",this.stimes=t.item.time_start,this.etimes=t.item.time_end;for(let e in t.item)this.searchObj[e]=t.item[e]}},doHandle(t){switch(t.fn){case"showAgent":this.showAgent(t.row);break;case"showDetails":this.showDetails(t.row)}},resetForm(){this.tableUrl=this.agentbaseUrl+"?time_start="+sessionStorage.dateTimeStart+"&time_end="+sessionStorage.dateTimeEnd},showDetails(t){this.$router.push({path:"/agentAccount",query:{id:t.id,type:t.type}})},showAgent(t){let e={id:t.agent_id,type:"1"==t.type?"level_agent":"agent",stime:this.stimes,etime:this.etimes,agentName:t.name};this.$emit("show-detail",e)},exportData(t){let e="",a=this.searchObj.time_start,s=this.searchObj.time_end;e=URL.api+"/export/download/agent",a&&s?this.$.autoAjax("get",URL.api+"/dev/download/sign?nonce="+e,"",{ok:a=>{if(a.data){let s="agent"===t?this.addSearch(this.searchObj):this.addSearch(this.searchObjUser);this.outUrl=e+s+"&nonce="+a.data.nonce+"&signature="+a.data.signature+"&time="+a.data.time+"&uuid="+a.data.uuid,this.onDialogVisible=!0}else a.message?this.$message.error(a.message):this.$message.error(LANG["数据导出失败，请稍后重试"]||"数据导出失败，请稍后重试")},p:()=>{},error:t=>{console.log(t)}}):this.$message.error(LANG["必需选择时间才能导出"]||"必需选择时间才能导出")}},components:{formEdit:s.a,tableGrid:l.a,validUserDetail:n},computed:{},mounted(){},created(){this.init()},activated(){this.init()}};var c=function(t){a(492)},d=Object(o.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"validUserAgent"}},[a("formEdit",{attrs:{formVisible:{},formConfig:t.formConfig,showAdd:!1,formType:"otherone",type:"search",labelWidth:"120px",isEdit:{state:!1},formTitel:"",defaultForm:!0},on:{"do-query":t.doQuery,"reset-form":t.resetForm}}),t._v(" "),t.isShow?a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.exportData("agent")}}},[t._v(t._s(t.LANG["导出"]||"导出"))]):t._e(),t._v(" "),a("tableGrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,isCreated:!0,getData:!0},on:{"do-handle":t.doHandle,"get-table-data":t.getDate}},[t.sumData.total?a("tr",{attrs:{slot:"other"},slot:"other"},[a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["小计"]||"小计"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.sumData.sub_members))])])]):t._e(),t._v(" "),t.sumData.total?a("tr",{attrs:{slot:"other"},slot:"other"},[a("td",{attrs:{colspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["总计"]||"总计"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.sumData.tatal_members))])])]):t._e()]),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.onDialogVisible,size:"tiny"},on:{"update:visible":function(e){t.onDialogVisible=e}}},[t._v("\n            "+t._s(t.LANG["点击”确认“导出数据"]||"点击”确认“导出数据")+"\n            "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.onDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("a",{attrs:{href:t.outUrl,target:"_blank",id:"outUrl"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onDialogVisible=!1}}},[t._v("确 认")])],1)],1)])],1)],1)},[],!1,c,null,null).exports,m={data:()=>({baseUrl:"",LANG:LANG,dataModel:[],total:0,pageSize:20,pageCount:0,subtotal:{balance:0,deposit_manual_count:0,deposit_manual_price:0,deposit_online_count:0,deposit_online_price:0,withdraw_manual_count:0,withdraw_manual_price:0,withdraw_online_count:0,withdraw_online_price:0},totals:{balance:0,deposit_manual_count:0,deposit_manual_price:0,deposit_online_count:0,deposit_online_price:0,withdraw_manual_count:0,withdraw_manual_price:0,withdraw_online_count:0,withdraw_online_price:0}}),props:{dataModelUrl:String},methods:{init(){this.total;let t=this.pageSize,e=(this.pageCount,this.dataModel),a=this;if(this.baseUrl=this.dataModelUrl,this.dataModelUrl){if(-1===this.baseUrl.indexOf("?"))this.baseUrl=this.baseUrl+"?page="+(0===this.currentPage?1:this.currentPage)+"&page_size="+(0===t?10:t);else{let e=this.baseUrl.indexOf("page=");/standard/g.test(this.baseUrl)||/fast/g.test(this.baseUrl)||(this.currentPage=1),this.baseUrl=e>0?this.baseUrl.replace(/page=\d+/,"page="+this.currentPage||!1):this.baseUrl+"&page="+(0===this.currentPage?1:this.currentPage)+"&page_size="+(0===t?10:t);let a=this.baseUrl.indexOf("page_size=");this.baseUrl=a>0?this.baseUrl.replace(/page_size=\d+/,"page_size="+(0===t?10:t)):this.baseUrl+"&page_size=10"}this.$http.get(this.baseUrl,URLCONFIG).then(t=>{if(e.splice(0,e.length),0==t.data.state&&t.data.data){let s=t.data.data.list||[];if(t.data.attributes){if(t.data.attributes.subTotalBet){let e=t.data.attributes.subTotalBet;for(let t in e)a.subTotalBet[t]=e[t]}if(t.data.attributes.totalBet){let e=t.data.attributes.totalBet;for(let t in e)a.totalBet[t]=e[t]}a.total=t&&t.data&&t.data.attributes&&t.data.attributes.total||10,a.pageSize=t&&t.data&&t.data.attributes&&t.data.attributes.size||10,a.pageCount=Math.ceil(a.total/a.pageSize)?Math.ceil(a.total/a.pageSize):1,a.currentPage=parseInt(t.data.attributes.number)?parseInt(t.data.attributes.number):1}t.data.data.agent_info&&t.data.data.agent_info.toString().length>5?this.$emit("get_agentinfo",{data:t.data.data.agent_info}):this.$emit("get_agentinfo",{data:null});for(let t in s)e.push(s[t]);let l=t.data.data.subtotal||{};for(let t in l)a.subtotal[t]=l[t];let i=t.data.data.total||{};for(let t in l)a.totals[t]=i[t]}})}},doHandle(t,e){this.$emit("do-handle",{event:event,row:t,fn:e})},doSizePage(t){this.loading=!0;let e=this.total,a=this.pageSize,s=this.pageCount,l=0,i=this;if(l=Math.ceil(a*s/e)||1,i.dataModel.splice(0,i.dataModel.length),-1===this.baseUrl.indexOf("?"))this.baseUrl=this.baseUrl+"?page=1&page_size="+t;else{let e=this.baseUrl.indexOf("page=");this.baseUrl=e>0?this.baseUrl.replace(/page=\d+/,"page=1"):this.baseUrl+"&page=1&page_size="+t;let a=this.baseUrl.indexOf("page_size=");this.baseUrl=a>0?this.baseUrl.replace(/page_size=\d+/,"page_size="+t):this.baseUrl+"&page_size=10"}this.$http.get(this.baseUrl,URLCONFIG).then(t=>{i.total=t.data.attributes.total||10,i.pageSize=t.data.attributes.size||10,i.pageCount=Math.ceil(this.total/this.pageSize),i.currentPage=1;let e=t.data.tableDemoDate||t.data.data||t.data.data.list||t.data.data.data||t.data.data.deposit||[];if(e.list)for(let t in e.list)i.dataModel.push(e.list[t]);else for(let t in e)i.dataModel.push(e[t]);let a=t.data.data.subtotal||{};for(let t in a)i.subtotal[t]=a[t];let s=t.data.data.total||{};for(let t in a)i.totals[t]=s[t];i.loading=!1}).catch(t=>{i.loading=!1,i.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！")})},doCurrentChange(t){this.loading=!0;let e=this.total,a=this.pageSize,s=this.pageCount;this.currentPage=t;let l=0,i=this;if(l=Math.ceil(a*s/e)||1,i.dataModel.splice(0,i.dataModel.length),-1===this.baseUrl.indexOf("?"))this.baseUrl=this.baseUrl+"?page="+t+"&page_size="+this.pageSize;else{let e=this.baseUrl.indexOf("page=");this.baseUrl=e>0?this.baseUrl.replace(/page=\d+/,"page="+t):this.baseUrl+"&page="+t+"&page_size="+this.pageSize;let a=this.baseUrl.indexOf("page_size=");this.baseUrl=a>0?this.baseUrl.replace(/page_size=\d+/,"page_size="+this.pageSize):this.baseUrl+"&page_size=10"}this.$http.get(this.baseUrl,URLCONFIG).then(t=>{i.total=t.data.attributes.total||10,i.pageSize=t.data.attributes.size||10,i.pageCount=Math.ceil(this.total/this.pageSize),i.currentPage=t.data.attributes.number||1;let e=t.data.tableDemoDate||t.data.data||t.data.data.list||t.data.data.data||t.data.data.deposit||[];if(e.list)for(let t in e.list)i.dataModel.push(e.list[t]);else for(let t in e)i.dataModel.push(e[t]);let a=t.data.data.subtotal||{};for(let t in a)i.subtotal[t]=a[t];let s=t.data.data.total||{};for(let t in a)i.totals[t]=s[t];i.loading=!1}).catch(t=>{i.loading=!1,i.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！")})}},watch:{dataModelUrl:function(t){t&&this.init()}},created(){this.init()},computed:{scrollClass:function(){return{scrollX:this.tableScroll}},tableWidth:function(){let t=document.body.clientWidth;return this.tableScroll?"width:"+(t-270)+"px":""}},mounted(){let t=this;Bus.$on("form_query",function(e){e&&t.init()})},deactivated(){window.clearInterval(window.PAGEREF)}};var h=function(t){a(495)},u=Object(o.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"tableSingle",class:t.scrollClass,style:t.tableWidth,attrs:{id:"tableUsers"}},[a("el-card",[a("table",{staticClass:"el-table el-table__header el-table--border",attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[a("thead",[a("tr",[a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"70px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["会员帐号"]||"会员帐号"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"60px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["真实姓名"]||"真实姓名"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["注册时间"]||"注册时间"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["代理帐号"]||"代理帐号"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["帐号状态"]||"帐号状态"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["主钱包余额"]||"主钱包余额"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["存款笔数"]||"存款笔数"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["存款金额"]||"存款金额"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["取款笔数"]||"取款笔数"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["取款金额"]||"取款金额"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v("\n                        "+t._s(t.LANG["最后存款时间"]||"最后存款时间")+"\n                    ")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"2",rowspan:"2"}},[a("div",{staticClass:"cell"},[t._v("\n                        "+t._s(t.LANG["最后取款时间"]||"最后取款时间")+"\n                    ")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"80px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["电话"]||"电话")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"150px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["邮箱"]||"邮箱")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"70px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG.QQ||"QQ")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"2",width:"70px"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["微信号"]||"微信号")),a("br")])])]),t._v(" "),a("tr",[a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["线上"]||"线上"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["人工"]||"人工")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["线上"]||"线上"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["人工"]||"人工"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["线上"]||"线上")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["人工"]||"人工"))])]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["线上"]||"线上")),a("br")])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["人工"]||"人工"))])])])]),t._v(" "),t._l(t.dataModel,function(e,s){return a("tr",[a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.user_name))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.truename))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"2"}},[a("div",{staticClass:"cell"},[t._v(t._s(e.created))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.agent_name))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.state))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s((e.balance/100).toFixed(2)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.deposit_online_times||0))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.deposit_manual_times||0))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(e.deposit_online_money)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(e.deposit_manual_money)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.withdraw_times))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.withdraw_manual_times))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(e.withdraw_money)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(e.withdraw_manual_money)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"2"}},[a("div",{staticClass:"cell"},[a("p",[t._v(t._s(e.deposit_last_time))])])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"2"}},[a("div",{staticClass:"cell"},[a("p",[t._v(t._s(e.withdraw_last_time))])])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.mobile))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.email))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.qq))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.weixin))])])])}),t._v(" "),t.dataModel.length>0?a("tr",[a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"6"}},[a("div",{staticClass:"cell"},[t._v("小计")])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.subtotal.balance)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.subtotal.deposit_online_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.subtotal.deposit_manual_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.subtotal.deposit_online_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.subtotal.deposit_manual_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.subtotal.withdraw_online_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.subtotal.withdraw_manual_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.subtotal.withdraw_online_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.subtotal.withdraw_manual_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"8"}})]):t._e(),t._v(" "),t.dataModel.length>0?a("tr",[a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"6"}},[a("div",{staticClass:"cell"},[t._v("总计")])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.totals.balance)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.totals.deposit_online_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.totals.deposit_manual_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.totals.deposit_online_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.totals.deposit_manual_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.totals.withdraw_online_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.totals.withdraw_manual_count))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.totals.withdraw_online_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatMoney")(t.totals.withdraw_manual_price)))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19",attrs:{colspan:"8"}})]):t._e(),t._v(" "),0==t.dataModel.length?a("tr",{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[a("td",{attrs:{colspan:"22"}},[a("div",{staticClass:"tCent"},[t._v(t._s(t.LANG["暂无数据"]||"暂无数据"))])])]):t._e()],2),t._v(" "),t.dataModel.length>0?a("el-col",{staticClass:"toolbar mt20 pb pRight20",staticStyle:{"text-align":"right"},attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100,1e3],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.doSizePage,"current-change":t.doCurrentChange}})],1):t._e()],1)],1)},[],!1,h,"data-v-311eeb9e",null).exports,p={data:()=>({LANG:LANG,formConfigUser:[{type:"quickDate",showTimes:!0},{type:"dateGroup",label:"注册日期",prop:[{prop:"register_from",value:"",label:"开始时间"},{prop:"register_to",value:"",label:"结束时间"}]},{prop:"name",value:"",type:"textarea",label:"帐号",placeholder:"输入会员账号，多个会员帐号之间用英文逗号 , 隔开",width:500},{prop:"type",value:"",label:"存取款方式",type:"select",list:[{label:"全部",value:"1"},{label:"有存款",value:"2"},{label:"有出款",value:"3"},{label:"有存取款",value:"4"},{label:"无存款",value:"5"},{label:"无取款",value:"6"},{label:"无存取款",value:"7"}]}],showDetail:!1,dataModelUrl:"",columnsUrl:"",stimes:sessionStorage.sysTime,etimes:sessionStorage.sysTime,updateuserKeys:"",outUrl:"",onDialogVisible:!1,searchObjUser:{},isShow:"true"==sessionStorage.valid_user_export}),props:{activeName:String()},methods:{init(){this.searchObjUser.register_from=sessionStorage.sysTime,this.searchObjUser.register_to=sessionStorage.sysTime,this.dataModelUrl=URL.api+ROUTES.GET.user.valid+"?register_from="+sessionStorage.dateTimeStart+"&register_to="+sessionStorage.dateTimeEnd+"&get_total=1",this.memberbaseUrl=URL.api+ROUTES.GET.user.valid},doQuery(t){this.addSearch(t.item)?this.dataModelUrl=this.memberbaseUrl+this.addSearch(t.item)+"&get_total=1":this.dataModelUrl=this.memberbaseUrl+"?get_total=1";for(let e in t.item)this.searchObjUser[e]=t.item[e]},resetForm(){this.dataModelUrl=this.memberbaseUrl+"?register_from="+sessionStorage.dateTimeStart+"&register_to="+sessionStorage.dateTimeEnd},returnList(){this.showDetail=!1},exportData(){let t=this.searchObjUser,e="",a=null,s=null;e=URL.api+"/export/download/user",a=t.register_from,s=t.register_to,a&&s?this.$.autoAjax("get",URL.api+"/dev/download/sign?nonce="+e,"",{ok:t=>{if(t.data){let a=this.addSearch(this.searchObjUser);this.outUrl=e+a+"&nonce="+t.data.nonce+"&signature="+t.data.signature+"&time="+t.data.time+"&uuid="+t.data.uuid,this.onDialogVisible=!0}else t.message?this.$message.error(t.message):this.$message.error(LANG["数据导出失败，请稍后重试"]||"数据导出失败，请稍后重试")},p:()=>{},error:t=>{console.log(t)}}):this.$message.error(LANG["必需选择时间才能导出"]||"必需选择时间才能导出")}},components:{formEdit:s.a,tableGrid:l.a,validUserDetail:n,tableUsers:u},computed:{},watch:{activeName:function(t,e){t!=e&&"member"===t&&this.init()}},mounted(){},created(){this.init()}};var b=function(t){a(494)},v=Object(o.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"validUser"}},["member"!=t.activeName||t.showDetail?t._e():a("el-col",[a("formEdit",{attrs:{formVisible:{},formConfig:t.formConfigUser,showAdd:!1,formType:"other",type:"search",labelWidth:"120px",isEdit:{state:!1},formTitel:""},on:{"do-query":t.doQuery,"reset-form":t.resetForm}}),t._v(" "),t.isShow?a("div",{staticStyle:{width:"100%",height:"38px"}},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.exportData("member")}}},[t._v(t._s(t.LANG["导出"]||"导出"))])],1):t._e(),t._v(" "),a("tableUsers",{attrs:{dataModelUrl:t.dataModelUrl}})],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.onDialogVisible,size:"tiny"},on:{"update:visible":function(e){t.onDialogVisible=e}}},[t._v("\n            "+t._s(t.LANG["点击”确认“导出数据"]||"点击”确认“导出数据")+"\n            "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.onDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("a",{attrs:{href:t.outUrl,target:"_blank",id:"outUrl"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onDialogVisible=!1}}},[t._v("确 认")])],1)],1)])],1),t._v(" "),t.showDetail?a("el-col",[a("validUserDetail",{attrs:{nowId:t.nowId,agentNames:t.agentNames,activeName:t.activeName,stime:t.stimes,etime:t.etimes},on:{"return-page":t.returnList}})],1):t._e()],1)},[],!1,b,null,null).exports,g={data:()=>({LANG:LANG,isEdit:{},formConfig:[{type:"quickDate",showTimes:!0},{prop:"agent_account",value:"",label:"代理账号",type:"text"},{prop:"user_account",value:"",type:"text",label:"会员帐号"},{type:"dateGroup",label:"时间",prop:[{prop:"start_time",value:"",label:"开始时间"},{prop:"end_time",value:"",label:"结束时间"}]},{prop:"type",value:"",label:"存取款方式",type:"select",list:[{label:"全部",value:"1"},{label:"有存款",value:"2"},{label:"有出款",value:"3"},{label:"有存取款",value:"4"},{label:"无存款",value:"5"},{label:"无取款",value:"6"},{label:"无存取款",value:"7"}]}],formAgentConfig:[{prop:"name",value:"",label:"代理账号",type:"label"},{prop:"truename",value:"",type:"text",label:"真实姓名"},{prop:"mobile",value:"",type:"text",label:"手机号码"},{prop:"qq",value:"",type:"text",label:"QQ"},{prop:"weixin",value:"",type:"text",label:"微信"},{prop:"email",value:"",type:"text",label:"电子邮箱"},{prop:"created",value:"",type:"label",label:"注册日期"}],showTable:!1,tableUrl:"",baseUrl:"",updateuserKeys:"",outUrl:"",onDialogVisible:!1,sumShow:!1,searchObj:{agentName:"",memberName:"",register_from:"",register_to:"",type:""},updateKeys:"",agentId:-1,showAgent:!1,isShow:"true"==sessionStorage.valid_user_export}),props:{activeName:String()},methods:{init(){this.searchObj.time_form=sessionStorage.sysTime,this.searchObj.time_to=sessionStorage.sysTime,this.tableUrl=URL.api+"/user/valid/agent.info/",this.baseUrl=URL.api+"/user/valid/agent.info/"},getAgentInfo(t){let e=this;if(this.showAgent=!1,t.data){this.agentId=t.data.id;let a={name:t.data.name||"",truename:t.data.truename||"",mobile:t.data.mobile||"",qq:t.data.qq||"",weixin:t.data.weixin||"",email:t.data.email||"",created:FORMATDATEPICKER(t.data.created)||""};this.showAgent=!0,setTimeout(function(){e.updateKeys="name,"+a.name+",truename,"+a.truename+",mobile,"+a.mobile+",qq,"+a.qq+",weixin,"+a.weixin+",email,"+a.email+",created,"+a.created},1e3)}else e.updateKeys="name,,truename,,mobile,,qq,,weixin,,email,,created,"},doQuery(t){t.item.agent_account||t.item.user_account?(this.showTable=!0,this.tableUrl=this.baseUrl+this.addSearch(t.item)+"&get_total=1"):(this.showTable=!1,this.tableUrl="",this.$message.error(LANG["代理帐号、会员帐号必填其一"]||"代理帐号、会员帐号必填其一"));for(let e in t.item)this.searchObj[e]=t.item[e]},resetForm(){this.tableUrl=""},exportData(t){let e="";e=URL.api+"/export/download/user",this.searchObj.time_form&&this.searchObj.time_to?this.$.autoAjax("get",URL.api+"/dev/download/sign?nonce="+e,"",{ok:t=>{if(t.data){let a=this.addSearch(this.searchObj);this.outUrl=e+a+"&nonce="+t.data.nonce+"&signature="+t.data.signature+"&time="+t.data.time+"&uuid="+t.data.uuid,this.onDialogVisible=!0}else t.message?this.$message.error(t.message):this.$message.error(LANG["数据导出失败，请稍后重试"]||"数据导出失败，请稍后重试")},p:()=>{},error:t=>{console.log(t)}}):this.$message.error(LANG["必需选择时间才能导出"]||"必需选择时间才能导出")},saveForm(t){let e=t.formObj,a=this,s={email:e.email,mobile:e.mobile,qq:e.qq,weixin:e.weixin};this.$.autoAjax("patch",URL.api+ROUTES.PATCH.user.agent.messages+"/"+this.agentId,s,{ok:t=>{0==t.state&&t.data?a.$message.success(LANG["代理资料修改成功！"]||"代理资料修改成功！"):4003==t.state||2003==t.state||405==t.state?a.$message.error(LANG["无权限操作"]||"无权限操作"):a.$message.error(LANG["基本资料修改失败，请稍后重试！"]||"基本资料修改失败，请稍后重试！")},p:()=>{},error:t=>{console.log(t)}})}},components:{formEdit:s.a,tableUsers:u},computed:{},watch:{activeName:function(t,e){t!=e&&"member"===t&&this.init()}},mounted(){},created(){this.init()}};var f=function(t){a(496)},w={data:()=>({LANG:LANG,activeName:"agent",showDetail:!1,nowId:-1,agentName:"",stime:"",etime:"",nowtype:""}),methods:{init(){this.activeName="agent"},doShowDetail(t){this.showDetail=!0,this.nowId=t.id,this.agentName=t.agentName,this.stime=t.stime,this.etime=t.etime,this.nowtype=t.type},returnList(){this.showDetail=!1}},components:{agent:d,member:v,agentinformation:Object(o.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"validUser"}},[a("formEdit",{attrs:{formVisible:{},formConfig:t.formConfig,showAdd:!1,formType:"other",type:"search",labelWidth:"120px",isEdit:{state:!1},formTitel:""},on:{"do-query":t.doQuery,"reset-form":t.resetForm}}),t._v(" "),t.showTable?a("el-col",[t.showAgent?a("el-card",{staticClass:"box-card-form"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"36px"}},[t._v("代理基本资料")])]),t._v(" "),a("formEdit",{attrs:{formVisible:{},formConfig:t.formAgentConfig,showAdd:!1,formType:"other",type:"pageForm",labelWidth:"120px",updateKeys:t.updateKeys,isEdit:{state:!1},formTitel:"代理基本资料"},on:{"get-form":t.saveForm}})],1):t._e(),t._v(" "),t.isShow?a("div",{staticStyle:{width:"100%",height:"38px"}},[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.exportData("user")}}},[t._v(t._s(t.LANG["导出"]||"导出"))])],1):t._e(),t._v(" "),a("tableUsers",{attrs:{dataModelUrl:t.tableUrl},on:{get_agentinfo:t.getAgentInfo}})],1):t._e(),t._v(" "),a("el-col",{attrs:{span:8}}),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.onDialogVisible,size:"tiny"},on:{"update:visible":function(e){t.onDialogVisible=e}}},[t._v("\n            "+t._s(t.LANG["点击”确认“导出数据"]||"点击”确认“导出数据")+"\n            "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.onDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("a",{attrs:{href:t.outUrl,target:"_blank",id:"outUrl"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onDialogVisible=!1}}},[t._v("确 认")])],1)],1)])],1)],1)},[],!1,f,null,null).exports,validUserDetail:n},computed:{},mounted(){},created(){this.init()},activated(){this.init(),this.activeName="agent",this.showDetail=!1}};var C=function(t){a(491)},U=Object(o.a)(w,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"validUser"}},[a("el-radio-group",{directives:[{name:"show",rawName:"v-show",value:!t.showDetail,expression:"!showDetail"}],staticClass:"mb10",model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-radio",{attrs:{label:"agent"}},[t._v(t._s(t.LANG["有效会员列表"]||"有效会员列表"))]),t._v(" "),a("el-radio",{attrs:{label:"member"}},[t._v(t._s(t.LANG["会员查询"]||"会员查询"))]),t._v(" "),a("el-radio",{attrs:{label:"agentInformation"}},[t._v(t._s(t.LANG["代理资料"]||"代理资料"))])],1),t._v(" "),"agent"!=t.activeName||t.showDetail?t._e():a("el-col",[a("agent",{attrs:{stime:t.stime,etime:t.etime},on:{"show-detail":t.doShowDetail,"return-page":t.returnList}})],1),t._v(" "),"member"!=t.activeName||t.showDetail?t._e():a("el-col",[a("member",{attrs:{activeName:t.activeName}})],1),t._v(" "),"agentInformation"!=t.activeName||t.showDetail?t._e():a("el-col",[a("agentinformation")],1),t._v(" "),t.showDetail?a("el-col",[a("validUserDetail",{attrs:{nowId:t.nowId,agentName:t.agentName,stime:t.stime,etime:t.etime,type:t.nowtype},on:{"return-page":t.returnList}})],1):t._e()],1)},[],!1,C,null,null);e.default=U.exports}}]);