(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{135:function(e,t,i){"use strict";i.r(t);var a=i(197),l=i(198),o=i(201),s=i(203),r=i(208),n={data:()=>({LANG:LANG,columnsUrl:"",tableUrl:"",editFormTtile:"",markdownTest:{length:500,type:!0},formTitel:"",editFormVisible:!1,oneColConfig:[{prop:"popup_type",label:"弹出类型",type:"radioGroup",radioInput:!0,value:"",list:[{label:"登录弹出",value:"1"},{label:"首页弹出",value:"2"},{label:"滚动公告",value:"3"}],checkIndex:"1",propkey:"send_type",arr:[{value:"1",list:[{value:"1",label:"会员"},{value:"2",label:"代理"},{value:"3",label:"自定义"}]},{value:"2",list:[{value:"4",label:"会员"},{value:"5",label:"代理"}]},{value:"3",list:[{value:"4",label:"会员"},{value:"5",label:"代理"}]}],rules:[{require:!0}]},{prop:"send_type",value:"",label:"接收人",type:"select",list:[{value:"1",label:"会员"},{value:"2",label:"代理"},{value:"3",label:"自定义"}],rules:[{require:!0}]},{prop:"checkgroup",value:[],label:"发送类型",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:[],Arr:[],ifVal:"1",ifKey:"send_type",rules:[{require:!0}]},{prop:"textarea",value:"",label:"自定义接收人",placeholder:"注:自定义接收人只能是会员用户/账号(多个请用英文逗号隔开)",type:"textarea",ifVal:"3",ifKey:"send_type",rules:[{require:!0}]},{prop:"language_id",value:"",type:"select",label:"语言",list:[],rules:[{require:!0}]},{prop:"title",value:"",type:"text",label:"标题",rules:[{require:!0}]},{prop:"login_content",value:"",label:"内容",type:"markdown",ifVal:"1",config:{maximumWords:5e3},ifKey:"popup_type",rules:[{require:!0}]},{prop:"home_content",value:"",label:"内容",type:"markdown",ifVal:"2",config:{maximumWords:5e3},ifKey:"popup_type",rules:[{require:!0}]},{prop:"scoll_content",value:"",label:"内容",type:"textarea",ifVal:"3",ifKey:"popup_type",rules:[{require:!0}]},{type:"dateTimeGroup",label:"起始时间",prop:[{prop:"start_time",value:"",label:"开始时间"},{prop:"end_time",value:"",label:"结束时间"}],rules:[{require:!0}],required:!0}],type:"default",labelWidth:"80px",isEdit:{state:!1},formVisible:{state:!1},baseUrl:"",detailform:{},searchConfig:[{prop:"title",value:"",type:"text",label:"公告标题"},{prop:"status",value:"",label:"启用状态",type:"select",list:[{label:"全部",value:""},{label:"启用",value:"1"},{label:"停用",value:"2"}]}],typeSearch:"search",labelWidthSearch:"100px",formVisibleSearch:{state:!1},isEditSearch:{state:!1},formLabelWidth:"100px",dialogTableVisible:!1,loading:!1,updated:!1,confirmConfig:{state:!1,msg:"",fn:"",obj:null},editFrom:{id:-1,title:"",content:"",start_time:sessionStorage.dateTimeStart,end_time:sessionStorage.dateTimeEnd}}),components:{tablegrid:a.a,formEdit:l.a,confirm:o.a,times:s.a,markdown:r.a},methods:{init(){this.columnsUrl="static/json/message/columns.json",this.tableUrl=URL.api+ROUTES.GET.notices.list,this.baseUrl=URL.api+ROUTES.GET.notices.list;let e=URL.api+ROUTES.GET.langeages;this.$.autoAjax("get",e,"",{ok:e=>{let t=e.data;for(let e in t)this.oneColConfig[4].list.push({label:t[e].name.toString(),value:t[e].id.toString()})},p:()=>{},error:e=>{console.log(e)}});let t=URL.api+ROUTES.GET.user.level.list,i=this;this.$.autoAjax("get",t,"",{ok:e=>{console.log(e);let t=e.data;for(let e in t)i.oneColConfig[2].list.push(t[e].level),i.oneColConfig[2].Arr.push({label:"VIP"+t[e].level,value:t[e].level})},p:()=>{},error:e=>{console.log(e)}})},changeText(e){this.editFrom.content=e.val},getDateTimeval_start(e){this.editFrom.start_time=e.data},getDateTimeval_end(e){this.editFrom.end_time=e.data},openForm(e){this.formTitel=LANG["新增"]||"新增",this.isEdit.state=!1,this.formVisible.state=!0,this.formType="add"},getForm(e){let t={},i=e.formObj;"1"==i.send_type&&"1"==i.popup_type?t.recipient=i.checkgroup.join(","):"2"==i.send_type&&"1"==i.popup_type?t.recipient="1":t.recipient=i.textarea;let a=parseInt(i.send_type);4===parseInt(i.send_type)?a=1:5===parseInt(i.send_type)&&(a=2),t.send_type=a,t.language_id=i.language_id,t.title=i.title,"1"==i.popup_type?t.content=i.login_content:"2"==i.popup_type?t.content=i.home_content:"3"==i.popup_type&&(t.content=i.scoll_content),t.start_time=i.start_time,t.end_time=i.end_time,t.popup_type=parseInt(i.popup_type,10),t.recipient.split(",").length==this.oneColConfig[2].Arr.length&&(t.recipient=""),this.updated=!1;let l="";this.$.autoAjax("put",URL.api+"/notice",t,{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["消息添加成功"]||"消息添加成功！"),this.updated=!0):0==e.data&&e.state>3&&(l=e.msg,this.$message.error(LANG[l]||l))},p:()=>{},error:e=>{console.log(e)}})},doQuery(e){this.tableUrl=this.baseUrl+this.addSearch(e.item)},resetForm(e){e.state&&"init"==e.state&&(this.tableUrl=this.baseUrl)},doHandle(e){switch(e.fn){case"doDetail":this.doDetail(e.row);break;case"doDel":this.doDel(e.row);break;case"doDesable":this.doDesable(e.row);break;case"doStart":this.doStart(e.row);break;case"doStop":this.doStop(e.row)}},doDetail(e){let t=this.detailform,i=this;for(let i in e)"content"===i&&"滚动公告"!==e.popup_type?t[i]=this.markdownTransform(e[i]):t[i]=e[i];this.dialogTableVisible=!0;for(let e in i.detailform)this.editFrom[e]=t[e];this.confirmConfig.obj=e},doSave(){let e=this,t={};e.updated=!1;for(let e in this.editFrom)if("popup_type"===e)switch(this.editFrom[e]){case"登录弹出":t[e]=1;break;case"首页弹出":t[e]=2;break;case"滚动公告":t[e]=3}else t[e]=this.editFrom[e];if("所有层级"===t.recipient)t.recipient="";else{let e=t.recipient.split(",");if("1"==t.send_type&&e.length>0){let i=this.oneColConfig[2].Arr||[],a=[];for(let t=0;t<e.length;t++)for(let l=0;l<i.length;l++)e[t]===i[l].label&&a.push(i[l].value);t.recipient=a.join(",")}}this.$.autoAjax("put",URL.api+"/notice?id="+parseInt(t.id),t,{ok:t=>{let i="";0==t.state&&t.data?(this.$message.success(LANG["消息修改成功！"]||"消息修改成功！"),this.updated=!0):0==t.data&&t.state>3?(i=t.msg,this.$message.error(LANG[i]||i)):this.$message.error(LANG["消息修改失败！"]||"消息修改失败！"),e.dialogTableVisible=!1,e.loading=!1,e.updated=!0},p:()=>{},error:e=>{console.log(e)}}).catch(t=>{e.loading=!1})},doDel(e){parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定删除标题为"]||"确定删除标题为")+'"'+e.title+'"'+(this.LANG["内容吗？删除后会员将看不到此公告信息，且不可以恢复。"]||"内容吗？删除后会员将看不到此公告信息，且不可以恢复。"),this.confirmConfig.fn="delete",this.confirmConfig.obj=e)},doStart(e){parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["你确定启用"]||"你确定启用")+'"'+e.title+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="start",this.confirmConfig.obj=e)},doStop(e){parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["你确定停用"]||"你确定停用")+'"'+e.title+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="stop",this.confirmConfig.obj=e)},doConfirm(e){this.loading=!0;let t=this;switch(this.updated=!1,e.fn){case"delete":this.$.autoAjax("delete",URL.api+ROUTES.DELETE.notice.$(parseInt(e.obj.id)),"",{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["消息删除成功！"]||"消息删除成功！"),this.updated=!0):e.state>0?this.$message.error((LANG["消息删除失败！"]||"消息删除失败！")+e.msg):this.$message.error(LANG["消息删除失败！"]||"消息删除失败！"),t.loading=!1,t.updated=!0},p:()=>{},error:e=>{console.log(e)}}).catch(e=>{t.loading=!1});break;case"start":this.$.autoAjax("patch",URL.api+"/notice?id="+parseInt(e.obj.id),{status:1},{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["消息启用成功！"]||"消息启用成功！"),this.updated=!0):e.state>0?this.$message.error((LANG["消息启用失败！"]||"消息启用失败！")+e.msg):this.$message.error(LANG["消息启用失败！"]||"消息启用失败！"),t.loading=!1,t.updated=!0},p:()=>{},error:e=>{console.log(e)}}).catch(e=>{t.loading=!1});break;case"stop":this.$.autoAjax("patch",URL.api+"/notice?id="+parseInt(e.obj.id),{status:2},{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["消息停用成功！"]||"消息停用成功！"),this.updated=!0):e.state>0?this.$message.error((LANG["消息停用失败！"]||"消息停用失败！")+e.msg):this.$message.error(LANG["消息停用失败！"]||"消息停用失败！"),t.loading=!1,t.updated=!0},p:()=>{},error:e=>{console.log(e)}}).catch(e=>{t.loading=!1})}},doDesable(e){this.updated=!1,this.$.autoAjax("put",URL.api+"/notice",{id:e.id},{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["发布成功"]||"发布成功！"),this.updated=!0):this.$message.error(LANG["发布失败"]||"发布失败！")},p:()=>{},error:e=>{console.log(e)}})}},mounted(){},created(){this.init()}},d=i(24);var p=function(e){i(421)},m=Object(d.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"notice"}},[i("el-col",{staticClass:"mb20 pb",attrs:{span:24}},[i("formEdit",{attrs:{formVisible:e.formVisibleSearch,formConfig:e.searchConfig,type:e.typeSearch,labelWidth:e.labelWidthSearch,isEdit:e.isEditSearch,addText:e.LANG["新增公告"]||"新增公告"},on:{"do-query":e.doQuery,"reset-form":e.resetForm,"add-new":e.openForm}})],1),e._v(" "),i("el-col",[i("formEdit",{attrs:{formTitel:e.formTitel,formVisible:e.formVisible,formConfig:e.oneColConfig,type:e.type,labelWidth:e.labelWidth,markdownTest:e.markdownTest,isEdit:e.isEdit},on:{"get-form":e.getForm}})],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.tableUrl,updated:e.updated,showRefresh:!1},on:{"do-handle":e.doHandle}})],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-dialog",{staticClass:"detail",attrs:{title:e.LANG["编辑消息详情"]||"编辑消息详情",size:"tiny"},model:{value:e.dialogTableVisible,callback:function(t){e.dialogTableVisible=t},expression:"dialogTableVisible"}},[e.dialogTableVisible?i("el-form",{attrs:{model:e.editFrom}},[i("el-form-item",{attrs:{label:"公告标题","label-width":e.formLabelWidth}},[i("el-input",{staticClass:"w80",attrs:{size:"small"},model:{value:e.editFrom.title,callback:function(t){e.$set(e.editFrom,"title",t)},expression:"editFrom.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"内容","label-width":e.formLabelWidth}},["滚动公告"!==e.editFrom.popup_type?i("markdown",{attrs:{id:"content"},model:{value:e.editFrom.content,callback:function(t){e.$set(e.editFrom,"content",t)},expression:"editFrom.content"}}):i("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.editFrom.content,callback:function(t){e.$set(e.editFrom,"content",t)},expression:"editFrom.content"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"弹出类型","label-width":e.formLabelWidth}},[i("span",[e._v(e._s(e.editFrom.popup_type))])]),e._v(" "),i("el-form-item",{attrs:{label:"接收人","label-width":e.formLabelWidth}},[i("span",[e._v(e._s(e.editFrom.recipient))])]),e._v(" "),i("el-form-item",{attrs:{label:"发布者","label-width":e.formLabelWidth}},[i("span",[e._v(e._s(e.editFrom.admin_name))])]),e._v(" "),i("el-form-item",{attrs:{label:"开始时间","label-width":e.formLabelWidth,prop:"start_time"}},[i("el-form-item",{attrs:{prop:"start_time"}},[i("times",{model:{value:e.editFrom.start_time,callback:function(t){e.$set(e.editFrom,"start_time",t)},expression:"editFrom['start_time']"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"结束时间","label-width":e.formLabelWidth,prop:"end_time"}},[i("el-form-item",{attrs:{prop:"end_time"}},[i("times",{model:{value:e.editFrom.end_time,callback:function(t){e.$set(e.editFrom,"end_time",t)},expression:"editFrom['end_time']"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"发布状态","label-width":e.formLabelWidth}},[i("span",[e._v(e._s("1"===e.editFrom.status?"已发布":"未发布"))])])],1):e._e(),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("关 闭")]),e._v(" "),i("el-button",{on:{click:function(t){return e.doSave()}}},[e._v("修 改")])],1)],1)],1),e._v(" "),i("confirm",{attrs:{confirmConfig:e.confirmConfig},on:{"do-confirm":e.doConfirm}})],1)},[],!1,p,null,null);t.default=m.exports},421:function(e,t,i){}}]);