webpackJsonp([58],{GwdR:function(o,e,t){"use strict";function a(o){t("SAqg")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("3cXf"),r=t.n(i),n={data:function(){var o=this;return{fullLoading:!1,activeName:"base",reloading:!0,baseData:{},userList:[],selectValue:{},bookDetail:{bookName:"",writerName:"",bookWriterId:"",bookClassificationId:null,bookLabId:[],bookAuthorization:null,bookIntroduction:""},rules1:{bookName:[{required:!0,validator:function(e,t,a){var i=o.$http.trim(t);return i.length<1?a(new Error("作品名称不能为空")):/^[a-zA-Z0-9\u4e00-\u9fa5:：]{1,20}$/.test(i)?void o.$ajax("/book-checkName",{bookName:i},function(o){200!==o.returnCode?a(new Error("作品名称已存在，请重新填写")):a()}):(a(new Error("书籍名称只能包含中文、数字、字母和冒号")),!1)},message:"请输入书名",trigger:"blur"}],writerName:[{required:!0,message:"请填写作者",trigger:"blur"}],bookClassificationId:[{required:!0,type:"number",message:"请选择作品分类",trigger:"change"}],bookLabId:[{type:"array",required:!0,message:"至少选取2个标签",trigger:"change"},{type:"array",min:2,max:5,message:"请选择2-5个标签",trigger:"change"}],bookAuthorization:[{required:!0,type:"number",message:"请选择发布状态",trigger:"change"}],bookIntroduction:[{required:!0,message:"请填写作品简介",trigger:"blur"},{min:1,max:400,message:"长度在 1 到 400 个字符",trigger:"blur"}]}}},methods:{onSubmit:function(o){var e=this;this.fullLoading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var t=JSON.parse(r()(this.bookDetail));t.bookLabId=t.bookLabId.toString(),t.bookIntroduction=this.$http.trim(t.bookIntroduction).replace(/\s*\n+\s*/g,"\n"),this.$refs[o].validate(function(o){o?e.$ajax("/admin/addBookInfo",t,function(o){e.$nextTick(function(){e.fullLoading.close()}),200===o.returnCode&&e.$confirm("创建成功, 可直接发布章节！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({path:"/add_new_chapter/"+o.data})})}):(e.$nextTick(function(){e.fullLoading.close()}),e.$message({message:"请完善信息后提交！",type:"warning"}))})},remoteMethod:function(o){var e=this;""!==o?(this.reloading=!0,this.$ajax("/getAuthorIdByAuthorName",{key:this.$http.trim(o)},function(t){200===t.returnCode&&(e.reloading=!1,e.userList=t.data.filter(function(e){return e.pseudonym.toLowerCase().indexOf(o.toLowerCase())>-1}))})):this.userList=[]},getBaseInfo:function(){var o=this;this.$ajax("/book-EditBookEcho","",function(e){200===e.returnCode&&(o.baseData=e.data)},"get")},getBookDetail:function(){var o=this;this.$ajax("/book-showBookInfo",{bookid:this.$route.params.bid},function(e){200===e.returnCode&&(e.data.bookLabId=function(){var o=[];return e.data.bookLabId.split(",").forEach(function(e){o.push(parseInt(e))}),o}(),e.data.bookClassificationId=parseInt(e.data.bookClassificationId),o.bookDetail=e.data)})}},created:function(){this.getBaseInfo()},watch:{"bookDetail.bookIntroduction":function(o){this.bookDetail.bookIntroduction=o.replace(/\s*\n+\s*/g,"\n\n")},selectValue:function(o){o.name&&(this.bookDetail.writerName=o.name,this.bookDetail.bookWriterId=o.id)}}},l=function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"add-new-book-wrap"},[t("el-breadcrumb",{staticClass:"mbt20",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",[o._v("书籍管理")]),o._v(" "),t("el-breadcrumb-item",{attrs:{to:"/book/list"}},[o._v("书籍列表")]),o._v(" "),t("el-breadcrumb-item",[o._v("新建书籍")])],1),o._v(" "),t("el-alert",{attrs:{title:"操作说明",type:"info","show-icon":""}},[t("div",[o._v("\n      新建书籍的作者必需已经存在，否则无法创建新书；书籍标签至少2个，最多不超过5个;且书籍简介不可超过字数上限\n    ")])]),o._v(" "),t("el-form",{ref:"detailForm1",staticClass:"mbt20",attrs:{rules:o.rules1,model:o.bookDetail,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"书籍名称",prop:"bookName"}},[t("el-col",{attrs:{xs:20,sm:16,md:12,lg:9,xl:4}},[t("el-input",{model:{value:o.bookDetail.bookName,callback:function(e){o.$set(o.bookDetail,"bookName",e)},expression:"bookDetail.bookName"}})],1)],1),o._v(" "),t("el-form-item",{attrs:{label:"作者笔名",prop:"writerName"}},[t("el-col",{attrs:{xs:20,sm:16,md:12,lg:9,xl:4}},[t("el-select",{attrs:{filterable:"",remote:"",loading:o.reloading,"remote-method":o.remoteMethod,placeholder:"请选择"},model:{value:o.selectValue,callback:function(e){o.selectValue=e},expression:"selectValue"}},o._l(o.userList,function(e){return t("el-option",{key:e.userId,attrs:{label:e.pseudonym,value:{id:e.userId,name:e.pseudonym}}},[t("span",{staticStyle:{float:"left"}},[o._v(o._s(e.pseudonym)+"("+o._s(e.userId)+")")])])}))],1)],1),o._v(" "),t("el-form-item",{attrs:{label:"作品分类",prop:"bookClassificationId"}},[t("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:o.bookDetail.bookClassificationId,callback:function(e){o.$set(o.bookDetail,"bookClassificationId",e)},expression:"bookDetail.bookClassificationId"}},o._l(o.baseData.classificationList,function(o,e){return t("el-option",{key:e,attrs:{label:o.classificationName,value:o.id}})}))],1),o._v(" "),t("el-form-item",{attrs:{label:"书籍标签",prop:"bookLabId"}},[t("el-checkbox-group",{model:{value:o.bookDetail.bookLabId,callback:function(e){o.$set(o.bookDetail,"bookLabId",e)},expression:"bookDetail.bookLabId"}},o._l(o.baseData.booklablesList,function(e,a){return t("el-checkbox",{key:a,attrs:{label:e.id,name:"bookLabId"}},[o._v(o._s(e.bookLableName))])}))],1),o._v(" "),t("el-form-item",{attrs:{label:"发布状态",prop:"bookAuthorization"}},[t("el-radio-group",{model:{value:o.bookDetail.bookAuthorization,callback:function(e){o.$set(o.bookDetail,"bookAuthorization",e)},expression:"bookDetail.bookAuthorization"}},[t("el-radio",{attrs:{label:0}},[o._v("网站首发")]),o._v(" "),t("el-radio",{attrs:{label:1}},[o._v("授权发布")])],1)],1),o._v(" "),t("el-form-item",{attrs:{label:"作品简介",prop:"bookIntroduction"}},[t("el-input",{staticClass:"book-intro",attrs:{type:"textarea"},model:{value:o.bookDetail.bookIntroduction,callback:function(e){o.$set(o.bookDetail,"bookIntroduction",e)},expression:"bookDetail.bookIntroduction"}}),o._v(" "),t("span",{staticClass:"fr"},[o._v(o._s(o.bookDetail.bookIntroduction.length)+"/400")])],1),o._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(e){o.onSubmit("detailForm1")}}},[o._v("\n        保存提交\n      ")])],1)],1)],1)},s=[],b=t("18Nq"),u=a,c=Object(b.a)(n,l,s,!1,u,null,null);e.default=c.exports},SAqg:function(o,e){}});
//# sourceMappingURL=58.147f970b4b190a20480f.js.map