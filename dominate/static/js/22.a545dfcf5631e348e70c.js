webpackJsonp([22],{I6C7:function(t,e,a){"use strict";function s(t){a("awcr")}Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{versionData:{version:"",versionTerminal:"安卓",versionUpdateDataTime:new Date,versionDescription:"",code:"200"},file:null}},mounted:function(){this.$store.dispatch("system/getVersionList")},methods:{handleChange:function(t,e){this.file=t},handleRemove:function(t,e){this.file=null},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},versionUpdate:function(){var t=this;if(null===this.file)this.$message({message:"请上传文件！",type:"warning"});else if(""===this.versionData.version)this.$message({message:"请填写版本号！",type:"warning"});else if(""===this.versionData.versionUpdateDataTime)this.$message({message:"请选择版本更新时间！",type:"warning"});else if(""===this.versionData.versionDescription)this.$message({message:"请填写版本描述！！",type:"warning"});else{this.FunWeekTime(this.versionData.versionUpdateDataTime.getTime())==this.FunWeekTime((new Date).getTime())?this.versionData.versionUpdateDataTime=this.nowDate(this.versionData.versionUpdateDataTime.getTime()):this.versionData.versionUpdateDataTime=this.dateTiming(this.versionData.versionUpdateDataTime,"start");var e=new FormData;e.append("file",this.file.raw),this.$store.dispatch("system/versionUpdate",{file:e,info:this.versionData}).then(function(e){200===e.returnCode&&t.$message({message:e.msg,type:"success"})})}},dataURLtoBlob:function(t){for(var e=t.split(","),a=e[0].match(/:(.*?);/)[1],s=atob(e[1]),i=s.length,n=new Uint8Array(i);i--;)n[i]=s.charCodeAt(i);var r=new Blob([n],{type:a,filename:"image.png"});return console.log(r),r}},computed:{versionTimeLine:function(){return this.$store.state.system.versionTimeLine}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"version-update"},[a("el-alert",{attrs:{title:"操作说明",type:"info","show-icon":""}},[a("div",[a("span",[t._v("暂无")])])]),t._v(" "),a("div",{staticClass:"version-contain"},[a("el-row",{staticStyle:{margin:"0"},attrs:{gutter:24}},[a("el-col",{staticClass:"version-info",attrs:{span:8}},[a("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("p",{staticStyle:{"text-align":"right"}},[t._v("上传APK文件")])]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-upload",{ref:"upload",attrs:{action:"",limit:1,"auto-upload":!1,"on-change":t.handleChange,"on-remove":t.handleRemove,"before-remove":t.beforeRemove}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传apk文件")])],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("p",{staticStyle:{"text-align":"right"}},[t._v("版本号")])]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-input",{model:{value:t.versionData.version,callback:function(e){t.$set(t.versionData,"version",e)},expression:"versionData.version"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("p",{staticStyle:{"text-align":"right"}},[t._v("更新时间")])]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.versionData.versionUpdateDataTime,callback:function(e){t.$set(t.versionData,"versionUpdateDataTime",e)},expression:"versionData.versionUpdateDataTime"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:20}},[a("el-col",{attrs:{span:4}},[a("p",{staticStyle:{"text-align":"right"}},[t._v("版本号描述")])]),t._v(" "),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.versionData.versionDescription,callback:function(e){t.$set(t.versionData,"versionDescription",e)},expression:"versionData.versionDescription"}})],1)],1),t._v(" "),a("el-row",{staticStyle:{margin:"20px 0"},attrs:{gutter:20}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:20}},[a("el-button",{staticStyle:{outline:"none"},attrs:{type:"primary",round:""},on:{click:function(e){t.versionUpdate()}}},[t._v("更新版本")])],1)],1)],1),t._v(" "),a("el-col",{attrs:{span:14,offset:1}},[a("div",{staticClass:"version-date",attrs:{id:"version-date"}},t._l(t.versionTimeLine,function(e,s){return a("div",{key:s,staticClass:"timeline-block"},[a("div",{staticClass:"timeline-img"},[a("i",{staticClass:"fa fa-clock-o"})]),t._v(" "),a("div",{staticClass:"timeline-content"},[a("p",[a("span",{staticClass:"title"},[t._v("版本号：")]),a("span",{staticClass:"content"},[t._v(t._s(e.version))])]),t._v(" "),a("p",[a("span",{staticClass:"title"},[t._v("版本号ID：")]),a("span",{staticClass:"content"},[t._v(t._s(e.id))])]),t._v(" "),a("p",[a("span",{staticClass:"title"},[t._v("版本更新描述：")]),a("span",{staticClass:"content"},[t._v(t._s(e.versionDescription))])]),t._v(" "),a("span",{staticClass:"cd-date"},[t._v(t._s(t._f("time")(e.versionUpdateDataTime,"long")))])])])}))])],1)],1),t._v(" "),a("input",{attrs:{type:"file",id:"aaa"}})],1)},r=[],o=a("18Nq"),l=s,v=Object(o.a)(i,n,r,!1,l,null,null);e.default=v.exports},awcr:function(t,e){}});
//# sourceMappingURL=22.a545dfcf5631e348e70c.js.map