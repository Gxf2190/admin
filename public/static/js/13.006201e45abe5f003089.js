(window.webpackJsonp=window.webpackJsonp||[]).push([[13,71],{102:function(e,t,a){"use strict";a.r(t);var i=a(202),s=(a(15),a(206)),l={data:()=>({LANG:LANG,columnsUrl:"",tableUrl:"",updated:!1,arrTwo:null,arrTwoObj:null,levelsList:[],listKey:"",listArr:[],lockType:"",mode:[],loading:!1}),props:{levelId:{type:String,default:""},activeName:String,searchTableUrl:String,showSet:Boolean,colTwo:String},components:{tablegrid:i.a,confirm:s.a},methods:{init(e){this.loading=!1,this.baseUrl=URL.api+ROUTES.GET.user.level.group,this.lid=FORMATNUMBER(this.$route.query.level),this.$route.query&&!0===this.$route.query.coltwo||"searLevel"===this.activeName?this.columnsUrl="/static/json/accoutManage/memberHierarSet/columnsTwo.json":this.columnsUrl="/static/json/accoutManage/memberHierarSet/columns.json",this.tableUrl=this.baseUrl+"/?lid="+this.lid,e&&(this.updated=!1,setTimeout(()=>{this.updated=!0},500))},blackMemberHierarchy(){this.$router.push({path:"/memberHierarchy"})}},computed:{},mounted(){},created(){this.init()},watch:{searchTableUrl:function(e){e&&this.init()}},activated(){this.init("init")}},r=a(10);var o=function(e){a(264)},n=Object(r.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"memberHierartSet"}},[a("el-row",["searLevel"!==e.activeName?a("el-col",{staticClass:"pb",attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.blackMemberHierarchy}},[e._v("\n                返 回\n            ")])],1):e._e(),e._v(" "),a("el-col",{attrs:{span:24}},["searLevel"==e.activeName?a("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.searchTableUrl,pageSet:!0,updated:e.updated,isCreated:!0,saveData:!1,showRefresh:!1}}):e._e(),e._v(" "),"searLevel"!==e.activeName?a("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.tableUrl,isCreated:!0,pageSet:!0,showRefresh:!1,updated:e.updated}}):e._e()],1)],1)],1)},[],!1,o,null,null);t.default=n.exports},107:function(e,t,a){"use strict";a.r(t);var i=a(0);i.default.filter("formatDate",function(e,t){10==parseInt(e).toString().length&&(e=1e3*parseInt(e));let a=new Date(e),i=function(e){return(e<10?"0":"")+e};return t.replace(/yyyy|MM|dd|HH|mm|ss/g,function(e){switch(e){case"yyyy":return i(a.getFullYear());case"MM":return i(a.getMonth()+1);case"mm":return i(a.getMinutes());case"dd":return i(a.getDate());case"HH":return i(a.getHours());case"ss":return i(a.getSeconds())}})}),i.default.filter("formatConnect",function(e,t){let a=e||{},i="",s=(t||"").split(",");for(let t in s)s[t]&&a[s[t]]&&(i=i+e[s[t]]+" - ");return(i=i.toString()).substring(0,i.length-2)}),i.default.filter("formatConnect",function(e,t){let a=e||{},i="",s=(t||"").split(",");for(let t in s)s[t]&&a[s[t]]&&(i=i+e[s[t]]+" - ");return(i=i.toString()).substring(0,i.length-2)}),i.default.filter("formatInt",function(e){return parseInt(FORMATNUMBER(e)/100)});var s={data:()=>({LANG:LANG,dataModel:[],columnList:[]}),props:{dataModelUrl:String,columnsUrl:String,updateDate:Object,updated:{type:Boolean,default:!1},formType:String},components:{},methods:{init(){let e=this.dataModel=[],t=this;this.dataModelUrl&&this.$.autoAjax("get",this.dataModelUrl,"",{ok:t=>{let a=t.data||[];for(let t in a)e.push(a[t])},p:()=>{},error:e=>{this.$message.error(e)}});let a=this.columnList=[];this.columnsUrl&&this.$.get(this.columnsUrl,e=>{let i=e.columns||[];for(let e in i)a.push(i[e]);i.length>10?t.tableScroll=!0:t.tableScroll=!1})},doHandle(e,t){this.$emit("do-handle",{event:event,row:e,fn:t})}},watch:{dataModelUrl:function(e){this.init()},updated:function(e){e&&this.init()},formType:function(e){e&&this.init()}},created(){this.init()},computed:{scrollClass:function(){return{scrollX:this.tableScroll}},tableWidth:function(){let e=document.body.clientWidth;return this.tableScroll?"width:"+(e-270)+"px":""}}},l=a(10);var r=function(e){a(484)},o=Object(l.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"memberHierarchy_table"}},[a("div",{ref:"tableSingle",class:e.scrollClass,style:e.tableWidth,attrs:{id:"tableSingle"}},[a("div",{attrs:{id:"tables"}},[a("table",{staticClass:"el-table-data w100",attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[e._m(0),e._v(" "),0!==e.dataModel.length?a("thead",[a("tr",[a("th",{attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["会员等级"]||"会员等级"))])]),e._v(" "),a("th",{attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["描述"]||"描述"))])]),e._v(" "),a("th",{attrs:{colspan:"2",rowspan:"1"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["晋级所需条件"]||"晋级所需条件"))])]),e._v(" "),a("th",{attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["会员人数"]||"会员人数"))])]),e._v(" "),a("th",{attrs:{colspan:"1",rowspan:"2"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["操作"]||"操作")),a("br")])])]),e._v(" "),a("tr",[a("th",{attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["有效投注"]||"有效投注"))])]),e._v(" "),a("th",{attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[e._v(e._s(e.LANG["历史充值"]||"历史充值"))])])])]):e._e(),e._v(" "),e._l(e.dataModel,function(t,i){return a("tr",e._l(e.columnList,function(i,s){return a("td",{staticClass:"el-table_1_column_19"},["button"!=i.type?a("div",{staticClass:"cell"},["link"===i.type?a("div",{staticClass:"success",on:{click:function(a){return e.doHandle(t,i.fn)}}},[t[i.prop]?a("a",{staticClass:"state_blue",attrs:{href:"javascript:;"},on:{click:function(a){return e.doHandle(i,t.fn)}}},[e._v("\n                                    "+e._s(t[i.prop])+"\n                                ")]):e._e(),e._v(" "),t[i.prop]?e._e():a("span",[e._v(e._s(t[i.prop]))])]):e._e(),e._v(" "),null==i.filters&&"date"!=i.type&&"divisionMoney"!=i.type&&"link"!==i.type?a("span",[e._v(e._s(t[i.prop]))]):e._e(),e._v(" "),a("div",{staticStyle:{"line-height":"24px"}},[null!=i.filters?a("span",{class:{sucess_text:1==t[i.prop],danger_text:0==t[i.prop]}},[e._v(e._s(e._f("formatSex")(t[i.prop],i.filters)))]):e._e(),e._v(" "),"0"==t.level?a("p",{staticClass:"defutFont"},[e._v("[ "+e._s(e.LANG["默认"]||"默认")+" ]")]):e._e()])]):e._e(),e._v(" "),"button"==i.type&&"0"!==t.level?a("div",{staticClass:"cell"},e._l(i.btnGroup,function(i){return a("div",{staticStyle:{float:"left","margin-left":"5px"}},[i.prop?e._e():a("el-button",{attrs:{size:"small",type:i.btnType},domProps:{textContent:e._s(i.label)},on:{click:function(a){return e.doHandle(t,i.fn)}}}),e._v(" "),i.prop&&t[i.prop]!=i.val?a("el-button",{attrs:{size:"small",type:i.btnType},domProps:{textContent:e._s(i.label)},on:{click:function(a){return e.doHandle(t,i.fn)}}}):e._e()],1)}),0):e._e(),e._v(" "),"button"==i.type&&"0"==t.level?a("div",e._l(i.btnGroup,function(i){return a("div",{staticStyle:{float:"left","margin-left":"5px"}},["编辑"===i.label?a("el-button",{attrs:{size:"small",type:i.btnType},domProps:{textContent:e._s(i.label)},on:{click:function(a){return e.doHandle(t,i.fn)}}}):e._e(),e._v(" "),"出入款设置"===i.label?a("el-button",{attrs:{size:"small",type:i.btnType},domProps:{textContent:e._s(i.label)},on:{click:function(a){return e.doHandle(t,i.fn)}}}):e._e()],1)}),0):e._e()])}),0)}),e._v(" "),0==e.dataModel.length?a("tr",{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[a("div",{staticStyle:{width:"1439px"}},[e._v(e._s(e.LANG["暂无数据"]||"暂无数据"))])]):e._e()],2)])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("colgroup",[t("col",{attrs:{width:"10%"}}),this._v(" "),t("col",{attrs:{width:"20%"}}),this._v(" "),t("col",{attrs:{width:"20%"}}),this._v(" "),t("col",{attrs:{width:"20%"}}),this._v(" "),t("col"),this._v(" "),t("col",{attrs:{width:"10%"}})])}],!1,r,"data-v-82dda37e",null).exports,n=a(203),d={data:()=>({LANG:LANG,activeData:[]}),props:{model:Object},methods:{init(){this.activeData=[]},doLayered(){console.log(this.model.visible),0===this.activeData.length?this.$message.error(LANG["请先选择层级！"]||"请先选择层级！"):(this.$emit("update-level",this.activeData),this.model.visible=!1)},checkRadio(){let e=[];this.model.lList.forEach(t=>{t.disable&&e.push({lid:t.id,val:t.name})}),this.activeData=e}},watch:{model:{handler(e,t){e.visible||(this.activeData=[])},immediate:!1,deep:!0}},created(){this.init()}};var c=function(e){a(485)},m=Object(l.a)(d,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"userLevelLayer"}},[a("el-dialog",{attrs:{title:e.LANG["修改会员等级"]||"修改会员等级",size:"tiny"},model:{value:e.model.visible,callback:function(t){e.$set(e.model,"visible",t)},expression:"model.visible"}},[a("h1",[e._v(e._s(e.LANG[e.model.title]||e.model.title))]),e._v(" "),a("el-table",{attrs:{data:e.model.lList}},[a("el-table-column",{attrs:{prop:"date",label:e.LANG["等级选择"]||"等级选择",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox-group",{model:{value:t.row.disable,callback:function(a){e.$set(t.row,"disable",a)},expression:"scope.row.disable"}},[a("el-checkbox",{on:{change:e.checkRadio}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:e.LANG["等级名称"]||"等级名称",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:e.LANG["描述"]||"描述"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.model.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.doLayered}},[e._v("确 定")])],1)],1)],1)},[],!1,c,"data-v-75067faa",null).exports,u=a(206),p={data:()=>({LANG:LANG}),props:{editForm:{type:Object,default:{}},setName:String},components:{},methods:{saveForm(){this.$refs.editForm.validate(e=>{e&&this.$emit("get-form",this.setName)})},validatorNumber(e,t,a){/^[0-9]+(.[0-9]{1,2})?$/.test(t)?parseInt(t)<0?a(new Error(LANG["输入金额必需大于0"]||"输入金额必需大于0")):parseInt(t)>99999999?a(new Error(LANG["输入金额不能大于99999999"]||"输入金额不能大于99999999")):a():a(new Error(LANG["请输入数字值"]||"请输入数字值"))},validatorNumber1(e,t,a){/^[0-9]+(.[0-9]{1,2})?$/.test(t)?parseInt(t)<0?a(new Error(LANG["输入次数不能小于0次"]||"输入次数不能小于0次")):parseInt(t)>999999999?a(new Error(LANG["输入次数不能大于999999999次"]||"输入次数不能大于999999999次")):a():a(new Error(LANG["请输入数字值"]||"请输入数字值"))},validatorNumber2(e,t,a){/^[0-9]+(.[0-9]{1,2})?$/.test(t)?parseInt(t)<1?a(new Error(LANG["输入金额必需不能少于 1"]||"输入金额必需不能少于 1")):parseInt(t)>99999999?a(new Error(LANG["输入金额不能大于99999999"]||"输入金额不能大于99999999")):a():a(new Error(LANG["请输入数字值"]||"请输入数字值"))},validatorNumber3(e,t,a){/^[0-9]+(.[0-9]{1,2})?$/.test(t)?parseInt(t)<1?a(new Error(LANG["倍数必须大于或等于1倍"]||"倍数必须大于或等于1倍")):parseInt(t)>5?a(new Error(LANG["倍数必须小于5倍"]||"倍数必须小于5倍")):a():a(new Error(LANG["请输入数字值"]||"请输入数字值"))},validatorNumber4(e,t,a){/^[0-9]+(.[0-9]{1,2})?$/.test(t)?t<0?a(new Error(LANG["输入金额必需大于0"]||"输入金额必需大于0")):t>100?a(new Error(LANG["输入金额不能大于100"]||"输入金额不能大于100")):a():a(new Error(LANG["请输入数字值"]||"请输入数字值"))},cancelFrom(){this.$emit("cancel-form")}},computed:{},mounted(){},created(){}};var _=function(e){a(486)},v=Object(l.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w50 tCent",attrs:{id:"userLevelSet"}},[a("el-form",{ref:"editForm",attrs:{model:e.editForm}},[a("el-col",{staticClass:"mb20",attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark mb10",staticStyle:{"text-align":"center"}},[a("span",[e._v("【"+e._s(e.setName?"VIP"+e.setName:"未获取到")+"】")]),e._v("\n                "+e._s(e.LANG["出款相关设定"]||"出款相关设定")+"\n            ")])]),e._v(" "),a("el-row",{attrs:{gutter:22}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["每次最低出款金额"]||"每次最低出款金额"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"each_min_out",rules:[{required:!0,message:"每次最低出款金额不能小于1",min:1},{validator:this.validatorNumber2}]}},[a("el-input",{attrs:{type:"number","auto-complete":"off"},model:{value:e.editForm.each_min_out,callback:function(t){e.$set(e.editForm,"each_min_out",t)},expression:"editForm.each_min_out"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["每日出款次数限制"]||"每日出款次数限制"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"day_out_times",rules:[{required:!0,message:"每日出款次数限制"},{validator:this.validatorNumber1}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.day_out_times,callback:function(t){e.$set(e.editForm,"day_out_times",t)},expression:"editForm.day_out_times"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:22}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["每次最高出款金额"]||"每次最高出款金额"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"each_max_out",rules:[{required:!0,message:"每次最高出款金额"},{validator:this.validatorNumber2}]}},[a("el-input",{attrs:{type:"number","auto-complete":"off"},model:{value:e.editForm.each_max_out,callback:function(t){e.$set(e.editForm,"each_max_out",t)},expression:"editForm.each_max_out"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["每日出款免手续费笔数"]||"每日出款免手续费笔数"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"day_out_times_nofee",rules:[{required:!0,message:"每日出款免手续费笔数"},{validator:this.validatorNumber1}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.day_out_times_nofee,callback:function(t){e.$set(e.editForm,"day_out_times_nofee",t)},expression:"editForm.day_out_times_nofee"}}),e._v(" "),parseInt(e.editForm.day_out_times_nofee)>parseInt(e.editForm.day_out_times)?a("p",{staticClass:"help_red",staticStyle:{position:"absolute",bottom:"-2px"}},[e._v("每日限免不能大于每日出款次数")]):e._e()],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:22}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["提现手续费"]||"提现手续费"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"withdraw_fee",rules:[{required:!0,message:"请输入提现手续费"},{validator:this.validatorNumber}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.withdraw_fee,callback:function(t){e.$set(e.editForm,"withdraw_fee",t)},expression:"editForm.withdraw_fee"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["请输入线上打码倍数"]||"请输入线上打码倍数"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"online_glide_multi",rules:[{required:!0,message:"请输入线上打码倍数"},{validator:this.validatorNumber1}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.online_glide_multi,callback:function(t){e.$set(e.editForm,"online_glide_multi",t)},expression:"editForm.online_glide_multi"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:22}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[e._v(e._s(e.LANG["线下打码倍数"]||"线下打码倍数"))])])]),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{prop:"offline_glide_multi",rules:[{required:!0,message:"请输入线下打码倍数"},{validator:this.validatorNumber1}]}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.offline_glide_multi,callback:function(t){e.$set(e.editForm,"offline_glide_multi",t)},expression:"editForm.offline_glide_multi"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:22}},[a("el-col",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveForm}},[e._v(e._s(e.LANG["保存"]||"保存"))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.cancelFrom}},[e._v(e._s(e.LANG["取消"]||"取消"))])],1)],1)],1)],1)},[],!1,_,"data-v-72c6a0d4",null).exports,h=a(102),f={data:()=>({LANG:LANG,limitVisible:!1,limitform:{name:"",id:""},nowId:0,limitList:[],cancelLimitVisible:!0,activeType:!0,activeName:"agents",level_id:"",columnsUrl:"",tableUrl:"",agentbaseUrl:"",searchTableUrl:"",showSet:!1,tableData:[],formConfig:[{prop:"level",value:"",type:"select",label:"会员层级",placeholder:"请选择会员等级",list:ARRAYS.LEVELSLIST,disabled:!0},{prop:"advance_valid_bet",value:"",type:"number",label:"有效投注额",placeholder:"请输入有效投注金额",rules:[{require:!0},{varMax:99999999}]},{prop:"advance_money",value:"",type:"text",label:"历史充值",placeholder:"请输入历史充值金额",rules:[{require:!0},{moreZero:!0}]},{prop:"gift",value:"",type:"number",label:"奖励",placeholder:"请输入奖励金额",rules:[{require:!1,max:9,"min:":1}]},{prop:"memo",value:"",type:"textarea",label:"描述",placeholder:"请输入描述",rules:[{max:40}]}],size:"tiny",type:"default",formType:"",formTitel:"",labelWidth:"110px",editVisible:{state:!1},searchType:"search",searchEdit:{},searchConfig:[{prop:"name",value:"",type:"text",label:"会员名称"}],userLeve:{lList:[],title:"",visible:!1,nowLeve:""},nowId:-1,updateDate:{id:-1,row:{}},updated:!1,confirmConfig:{state:!1,msg:"",fn:""},isEdit:{state:!1},editForm:{level_id:"",online_glide_multi:"",offline_glide_multi:"",each_min_out:"",each_max_out:"",day_out_times:"",day_out_times_nofee:""},levelSet:!1,setName:"",baseUrl:"",loading:!1,members:"",LevelTableShow:!1,colTwo:"",updateKeys:"",params:{}}),components:{memberHierarchy:o,formEdit:n.a,userLevelLayer:m,confirm:u.a,userLevelSet:v,memberHierarSet:h.default},methods:{init(){this.loading=!0,this.activeType=!0,this.members="",this.activeName="agents",this.columnsUrl="/static/json/accoutManage/memberHierarchy/columns.json",this.agentbaseUrl=URL.api+ROUTES.GET.user.levelsList,this.tableUrl=this.agentbaseUrl,this.searchTableUrl=URL.api+ROUTES.GET.user.level.group,this.baseUrl=URL.api+ROUTES.GET.user.level.group,this.LevelTableShow=!1,this.getLimitModel(),this.loading=!1},navTabsChange1(){this.activeType=!0,this.activeName="agents"},navTabsChange2(){this.members="",this.LevelTableShow=!1,this.activeType=!1,this.activeName="searLevel"},returnPage(){this.levelSet=!1,this.updated=!0},cleanFrom(e){e.clear&&(this.members="")},doHandle(e){switch(this.updated=!1,this.nowId=e.id||-1,this.formType="",e.fn){case"doEdit":this.doEdit(e.row);break;case"doSet":this.doSet(e.row);break;case"doSeatchMember":this.doSeatchMember(e.row);break;case"doLimitLines":this.doLimitLines(e.row)}},doLimitLines(e){this.nowId=e.id,this.limitform.name=e.name,this.limitform.id="",this.cancelLimitVisible=!!e.tid,e.tid?(this.cancelLimitVisible=!0,this.limitform.id=parseInt(e.tid)):(this.cancelLimitVisible=!1,this.limitform.id=""),this.limitVisible=!0},doQuery(e){let t={};t.members=this.members,this.colTwo="init",this.LevelTableShow=!0,this.searchTableUrl=this.baseUrl+this.addSearch(t)},resetForm(){this.LevelTableShow=!1},doSeatchMember(e){let t=!1;t=!(!/^0000/.test(e.deposit_stime)&&!/^0000/.test(e.deposit_etime)),this.level_id=e.level,parseInt(e.num)>0?this.$router.push({path:"/memberHierarSet",query:{level:parseInt(e.level),coltwo:t}}):this.$message.error(LANG["无层级人数"]||"无层级人数")},getForm(e){let t="",a="",i={},s=this;i.advance_money=e.formObj.advance_money,i.advance_valid_bet=e.formObj.advance_valid_bet,i.gift=e.formObj.gift,i.level=e.formObj.level,i.memo=e.formObj.memo,a=URL.api+ROUTES.PUT.user.level.$+"/"+e.formObj.level,this.$.autoAjax("put",a,i,{ok:e=>{0===e.state&&e.data?(t=s.LANG["恭喜您，会员等级修改成功！"]||"恭喜您，会员等级修改成功！",s.$message.success(t)):(t=s.LANG["会员等级修改失败，请稍候重试！"]||"会员等级修改失败，请稍候重试！",s.$message.error(t)),s.updated=!0,s.loading=!1,s.formType=""},error:e=>{s.loading=!1,console.log(e.responseJSON.msg)}})},doEdit(e){console.log(e),this.loading=!0,this.formType="",this.nowId=e.id,this.formTitel="编辑会员等级";let t=this;setTimeout(()=>{FORMVAL(e,t.formConfig),t.formConfig[0].value=e.level,t.formConfig[1].value=e.advance_valid_bet,t.formConfig[2].value=e.advance_money,t.formConfig[3].value=e.gift,t.formConfig[4].value=e.memo,t.formType="edit",t.isEdit.state=!0,t.editVisible.state=!0,t.loading=!1},500)},doConfirm(e){this.updated=!1},doSet(e){this.setName=e.level;let t=this,a=this.editForm;this.loading=!0,this.$.autoAjax("get",URL.api+ROUTES.GET.user.level.set.$(parseInt(e.level)),"",{ok:e=>{if(0==e.state&&e.data){let t=e.data||[];a.each_min_out=t.each_min_out.toString(),a.each_max_out=t.each_max_out.toString(),a.day_out_times=t.day_out_times.toString(),a.day_out_times_nofee=t.day_out_times_nofee.toString(),a.online_glide_multi=t.online_glide_multi.toString(),a.offline_glide_multi=t.offline_glide_multi.toString(),a.withdraw_fee=t.withdraw_fee.toString(),this.levelSet=!0}else t.$message.error(t.LANG["会员等级获取资料失败，请稍候重试！"]||"会员等级获取资料失败，请稍候重试！");t.loading=!1},p:()=>{},error:e=>{console.log(e.responseJSON.msg)}})},MultiplyMoney(e){let t=parseFloat(e);return 0===t?0:100*t},saveSet(e){let t={each_min_out:this.editForm.each_min_out,each_max_out:this.editForm.each_max_out,day_out_times:this.editForm.day_out_times,day_out_times_nofee:this.editForm.day_out_times_nofee,withdraw_fee:this.editForm.withdraw_fee,online_glide_multi:this.editForm.online_glide_multi,offline_glide_multi:this.editForm.offline_glide_multi};parseInt(t.day_out_times_nofee)>parseInt(t.day_out_times)?this.$message.error("请检查填写内容是否符合要求"):(this.loading=!0,this.$.autoAjax("put",URL.api+ROUTES.PUT.user.level.set+"/"+e,t,{ok:t=>{0==t.state&&t.data?(this.$message.success(this.LANG["恭喜您，VIP"+e+"出入款设置成功！"]||"恭喜您，VIP"+e+"出入款设置成功！"),this.levelSet=!1):(this.$message.error(this.LANG["Sorry，VIP"+e+"出入款设置失败！"]||"Sorry，VIP"+e+"出入款设置失败！"),this.levelSet=!1),this.loading=!1},p:()=>{},error:e=>{console.log(e.responseJSON.msg)}}))},cancelForm(){this.levelSet=!1},resetForm(){this.init()},getResetPage(){},saveData(e){this.LevelTableShow=!1,this.updateKeys="members"},saveLimit(){""!==this.limitform.id?(this.updated=!1,this.$.autoAjax("put",URL.api+"/lottery/template.levels",{tid:parseInt(this.limitform.id),level_id:this.nowId},{ok:e=>{0===e.state&&e.data?(this.$message.success(LANG["恭喜您，会员层级限额成功！"]||"恭喜您，会员层级限额成功！"),this.updated=!0):405==e.state?this.$message.error(LANG["会员层级限额失败,权限不足！"]||"会员层级限额失败,权限不足！"):this.$message.error(LANG["会员层级限额失败！"]||"会员层级限额失败！"),this.limitVisible=!1},p:()=>{},error:e=>{console.log(e.responseJSON.msg)}})):this.$message.error(LANG["请至少选中一个模版"]||"请至少选中一个模版")},cancelLimit(){let e=[];e.push(this.nowId),this.updated=!1,this.$.autoAjax("post",URL.api+"/lottery/template.users",{user_id:e},{ok:e=>{0===e.state?(this.$message.success(LANG["恭喜您，会员层级取消限额成功！"]||"恭喜您，会员层级取消限额成功！"),this.limitform.id="",this.cancelLimitVisible=!1,this.updated=!0):405==e.state?this.$message.error(LANG["会员层级取消限额失败,权限不足！"]||"会员层级取消限额失败,权限不足！"):this.$message.error(LANG["会员层级取消限额失败！"]||"会员层级取消限额失败！")},p:()=>{},error:e=>{console.log(e.responseJSON.msg)}})},getLimitModel(){this.$.autoAjax("get",URL.api+ROUTES.GET.lottery.template,"",{ok:e=>{if(0===e.state){this.limitList=[];let t=e.data;for(let e of t)"1"!=e.t_id&&this.limitList.push({id:parseInt(e.t_id),name:e.t_name})}},p:()=>{},error:e=>{console.log(e)}})},gotoLotteryOdds(e,t){window.open(window.location.origin+"/lotteryOdds?id="+e+"&name="+t)}},computed:{},mounted(){},created(){this.init()},activated(){this.init(),this.returnPage()}};var b=function(e){a(483)},g=Object(l.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"page clearfix",attrs:{id:"memberHierarchy"}},[a("div",{staticClass:"w100 main el-card box-card el-tabs"},[a("div",{staticClass:"el-tabs__header clearfix",staticStyle:{border:"0",margin:"0"}},[a("ul",{staticClass:"navTabs font14 el-tabs__nav w100"},[a("li",{staticClass:"fl tCent el-tabs__item",staticStyle:{padding:"0"}},[a("a",{class:{navOne:e.activeType},attrs:{href:"javascript:;"},on:{click:e.navTabsChange1}},[e._v(e._s(e.LANG["等级管理"]||"等级管理"))])]),e._v(" "),a("li",{staticClass:"fl tCent el-tabs__item",staticStyle:{padding:"0"}},[a("a",{class:{navTwo:!e.activeType},attrs:{href:"javascript:;"},on:{click:e.navTabsChange2}},[e._v(e._s(e.LANG["会员查询"]||"会员查询"))])])])]),e._v(" "),a("ul",{staticClass:"navContant w100 el-tabs__content"},[e.activeType?a("li",{staticClass:"w100 el-tab-pane"},[a("el-row",{staticClass:"pleft20 pRight20 mt10 mb10"},[a("el-col",{directives:[{name:"show",rawName:"v-show",value:!e.levelSet,expression:"!levelSet"}],staticClass:"mt10"},[a("memberHierarchy",{attrs:{columnsUrl:e.columnsUrl,dataModelUrl:e.tableUrl,updated:e.updated,formType:e.formType},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("el-col",[a("formEdit",{staticClass:"addLevers",attrs:{formTitel:e.formTitel,formVisible:e.editVisible,formConfig:e.formConfig,type:e.type,labelWidth:e.labelWidth,isEdit:e.isEdit,formType:e.formType,size:e.size},on:{"get-form":e.getForm}})],1),e._v(" "),a("el-col"),e._v(" "),a("el-col",[a("confirm",{attrs:{confirmConfig:e.confirmConfig},on:{"do-confirm":e.doConfirm}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.levelSet,expression:"levelSet"}],staticClass:"bankBtn",on:{click:e.returnPage}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"arrow-left"},on:{click:e.returnPage}},[e._v("\n                            "+e._s(e.LANG["返 回"]||"返 回")+"\n                        ")])],1),e._v(" "),e.levelSet?a("el-col",{attrs:{span:20,offset:2}},[a("userLevelSet",{attrs:{editForm:e.editForm,setName:e.setName},on:{"get-form":e.saveSet,"cancel-form":e.cancelForm}})],1):e._e()],1)],1):e._e(),e._v(" "),e.activeType?e._e():a("li",{staticClass:"w100 el-tab-pane"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-col",{staticStyle:{padding:"10px"},attrs:{span:24}},[a("label",{staticClass:"font14",staticStyle:{width:"80px",color:"#475669"}},[e._v("用户名:")]),e._v(" "),a("el-input",{staticStyle:{width:"300px","vertical-align":"middle"},attrs:{type:"textarea",rows:1,placeholder:"多用户之间用英文逗号隔开"},model:{value:e.members,callback:function(t){e.members=t},expression:"members"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.doQuery}},[e._v("\n                                "+e._s(e.LANG["查 询"]||"查 询")+"\n                            ")]),e._v(" "),a("span",{staticClass:"help_gray"},[e._v("提示：多用户查询，请在多用户之间用英文逗号隔开。")])],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[e.LevelTableShow?a("memberHierarSet",{attrs:{activeName:e.activeName,colTwo:e.colTwo,searchTableUrl:e.searchTableUrl},on:{"get-reset":e.getResetPage,"save-data":e.saveData,clearFrom:e.cleanFrom}}):e._e()],1)],1)],1)])]),e._v(" "),a("el-dialog",{attrs:{title:"层级限额",size:"tiny"},model:{value:e.limitVisible,callback:function(t){e.limitVisible=t},expression:"limitVisible"}},[a("el-form",{ref:"limitform",attrs:{model:e.limitform,"label-width":"80px"}},[a("div",{staticStyle:{"line-height":"30px"}},[e._v(e._s(e.LANG["层级名称"]||"层级名称")+"： "+e._s(e.limitform.name))]),e._v(" "),a("div",{staticStyle:{"border-bottom":"1px solid #ccc","line-hieght":"30px","margin-bottom":"10px"}},[e._v("彩票")]),e._v(" "),a("el-radio-group",{model:{value:e.limitform.id,callback:function(t){e.$set(e.limitform,"id",t)},expression:"limitform.id"}},e._l(e.limitList,function(t,i){return a("div",{key:i,staticStyle:{margin:"5px 0",height:"20px"}},[a("div",{staticStyle:{float:"left"}},[a("el-radio",{attrs:{label:t.id}},[a("span")])],1),e._v(" "),a("div",{staticStyle:{float:"left",width:"400px",height:"20px","font-size":"14px","line-height":"20px","margin-left":"15px",cursor:"pointer"},on:{click:function(a){return e.gotoLotteryOdds(t.id,t.name)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])])}),0)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.limitVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveLimit}},[e._v("确 定")])],1)],1)],1)},[],!1,b,"data-v-5545c2ea",null);t.default=g.exports},264:function(e,t,a){},483:function(e,t,a){},484:function(e,t,a){},485:function(e,t,a){},486:function(e,t,a){}}]);