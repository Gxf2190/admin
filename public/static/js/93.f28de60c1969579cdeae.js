(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{145:function(t,e,i){"use strict";i.r(e);var s=i(202),o=i(203),a=i(206),r={data:()=>({LANG:LANG,formConfig:[{prop:"name",value:"",type:"text",label:"优惠活动类型名称",rules:[{require:!0}]},{prop:"description",value:"",type:"textarea",label:"优惠活动类型描述",rules:[{max:30,require:!0}]},{prop:"sort",value:"0",type:"text",label:"排序",rules:[{max:30,require:!0},{integer:!0}]}],type:"default",formTitel:"",labelWidth:"150px",editVisible:{state:!1},isEdit:{state:!1},tableUrl:"",columnsUrl:"",baseUrl:"",updated:!1,formType:"",confirmConfig:{state:!1,msg:"",fn:""},loading:!1,nowId:-1}),components:{tablegrid:s.a,formEdit:o.a,confirm:a.a},methods:{init(){this.tableUrl=URL.api+ROUTES.GET.activity.types,this.columnsUrl="static/json/preAct/typeList/columns.json"},AddNew(){this.formTitel=this.LANG["新增优惠活动类型"]||"新增优惠活动类型",this.editVisible.state=!0,this.formType="add"},getForm(t){let e=this;this.updated=!1,this.fullscreenLoading=!0,t.formObj.id=this.nowId,"add"==this.formType?this.$.autoAjax("put",URL.api+ROUTES.POST.activity.type,t.formObj,{ok:t=>{0==t.state&&t.data?(e.$message.success(e.LANG["恭喜您，新增优惠活动类型成功！"]||"恭喜您，新增优惠活动类型成功！"),e.formType="",e.updated=!0):(e.$message.success((e.LANG["新增优惠活动类型失败！"]||"新增优惠活动类型失败！")+t.msg),e.formType="",e.updated=!0)},p:()=>{},error:t=>{console.log(t)}}):(t.formObj.id=this.nowId,this.$.autoAjax("put",URL.api+ROUTES.PUT.activity.newType+"?id="+t.formObj.id,t.formObj,{ok:t=>{null!=t.state&&0==t.state?(e.$message.success(e.LANG["恭喜您，修改优惠活动类型成功！"]||"恭喜您，修改优惠活动类型成功！"),e.formType="",e.updated=!0):(e.$message.success((e.LANG["新增优惠活动类型失败！"]||"新增优惠活动类型失败！")+t.msg),e.formType="",e.updated=!0)},p:()=>{},error:t=>{console.log(t)}}))},doHandle(t){switch(this.updated=!1,this.formType="",this.nowId=t.row.id,t.fn){case"doEdit":this.doEdit(t.row);break;case"doDelete":this.doDelete(t.row)}},doEdit(t){let e=this;this.loading=!0,this.formTitel=this.LANG["修改优惠活动类型"]||"修改优惠活动类型",FORMVAL(t,this.formConfig),setTimeout(()=>{e.formType="edit",e.loading=!1,e.editVisible.state=!0},1e3)},doDelete(t){parseInt(t.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定删除"]||"确定删除")+'"'+t.name+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="delete")},doConfirm(t){this.loading=!0;let e=this;switch(t.fn){case"delete":this.$.autoAjax("delete",URL.api+ROUTES.DELETE.activity.type.$(parseInt(this.nowId)),{ok:t=>{0==t.state&&t.data?(e.updated=!0,e.$message.success(e.LANG["删除成功"]||"删除成功")):(e.updated=!1,e.$message.success(e.LANG["删除失败"]||"删除失败")),e.loading=!1},p:()=>{},error:t=>{console.log(t)}})}}},computed:{},mounted(){},created(){this.init()}},l=i(10);var d=function(t){i(429)},n=Object(l.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"typeList"}},[i("el-col",{staticStyle:{"text-align":"right","margin-bottom":"10px"}},[i("el-button",{staticClass:"btn_right",attrs:{type:"primary",size:"small"},domProps:{textContent:t._s(t.LANG["新增优惠类型"]||"新增优惠类型")},on:{click:t.AddNew}})],1),t._v(" "),i("el-col",[i("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableIndex:!1,tableCheck:!1,updated:t.updated,showRefresh:!0,tableUrl:t.tableUrl},on:{"do-handle":t.doHandle}})],1),t._v(" "),i("el-col",[i("formEdit",{attrs:{formTitel:t.formTitel,formVisible:t.editVisible,formConfig:t.formConfig,type:t.type,size:"small",labelWidth:t.labelWidth,isEdit:t.isEdit,formType:t.formType},on:{"get-form":t.getForm}})],1),t._v(" "),i("el-col",[i("confirm",{attrs:{confirmConfig:t.confirmConfig},on:{"do-confirm":t.doConfirm}})],1)],1)},[],!1,d,null,null);e.default=n.exports},429:function(t,e,i){}}]);