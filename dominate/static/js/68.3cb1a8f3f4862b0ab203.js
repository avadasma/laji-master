webpackJsonp([68],{"4xxa":function(e,t){},PsVy:function(e,t,i){"use strict";function n(e){i("4xxa")}Object.defineProperty(t,"__esModule",{value:!0});var a=i("hRKE"),r=i.n(a);!function(e){e.Jcrop=function(t,i){function n(e){return Math.round(e)+"px"}function a(e){return P.baseClass+"-"+e}function s(){return e.fx.step.hasOwnProperty("backgroundColor")}function o(t){var i=e(t).offset();return[i.left,i.top]}function c(e){return[e.pageX-H[0],e.pageY-H[1]]}function u(t){"object"!==(void 0===t?"undefined":r()(t))&&(t={}),P=e.extend(P,t),e.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){"function"!=typeof P[t]&&(P[t]=function(){})})}function d(e,t,i){if(H=o(K),ge.setCursor("move"===e?e:e+"-resize"),"move"===e)return ge.activateHandlers(h(t),v,i);var n=he.getFixed(),a=p(e),r=he.getCorner(p(a));he.setPressed(he.getCorner(a)),he.setCurrent(r),ge.activateHandlers(l(e,n),v,i)}function l(e,t){return function(i){if(P.aspectRatio)switch(e){case"e":case"w":i[1]=t.y+1;break;case"n":case"s":i[0]=t.x+1}else switch(e){case"e":case"w":i[1]=t.y2;break;case"n":case"s":i[0]=t.x2}he.setCurrent(i),fe.update()}}function h(e){var t=e;return we.watchKeys(),function(e){he.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,fe.update()}}function p(e){switch(e){case"n":return"sw";case"s":case"e":return"nw";case"w":return"ne";case"ne":return"sw";case"nw":return"se";case"se":return"nw";case"sw":return"ne"}}function f(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(H=o(K),ae=!0,d(e,c(t)),t.stopPropagation(),t.preventDefault(),!1))}}function g(e,t,i){var n=e.width(),a=e.height();n>t&&t>0&&(n=t,a=t/e.width()*e.height()),a>i&&i>0&&(a=i,n=i/e.height()*e.width()),ie=e.width()/n,ne=e.height()/a,e.width(n).height(a)}function w(e){return{x:e.x*ie,y:e.y*ne,x2:e.x2*ie,y2:e.y2*ne,w:e.w*ie,h:e.h*ne}}function v(e){var t=he.getFixed();t.w>P.minSelect[0]&&t.h>P.minSelect[1]?(fe.enableHandles(),fe.done()):fe.release(),ge.setCursor(P.allowSelect?"crosshair":"default")}function m(e){if(!P.disabled&&P.allowSelect){ae=!0,H=o(K),fe.disableHandles(),ge.setCursor("crosshair");var t=c(e);return he.setPressed(t),fe.update(),ge.activateHandlers(b,v,"touch"===e.type.substring(0,5)),we.watchKeys(),e.stopPropagation(),e.preventDefault(),!1}}function b(e){he.setCurrent(e),fe.update()}function y(){var t=e("<div></div>").addClass(a("tracker"));return B&&t.css({opacity:0,backgroundColor:"white"}),t}function x(e){q.removeClass().addClass(a("holder")).addClass(e)}function C(e,t){function i(){window.setTimeout(m,l)}var n=e[0]/ie,a=e[1]/ne,r=e[2]/ie,s=e[3]/ne;if(!re){var o=he.flipCoords(n,a,r,s),c=he.getFixed(),u=[c.x,c.y,c.x2,c.y2],d=u,l=P.animationDelay,h=o[0]-u[0],p=o[1]-u[1],f=o[2]-u[2],g=o[3]-u[3],w=0,v=P.swingSpeed;n=d[0],a=d[1],r=d[2],s=d[3],fe.animMode(!0);var m=function(){return function(){w+=(100-w)/v,d[0]=Math.round(n+w/100*h),d[1]=Math.round(a+w/100*p),d[2]=Math.round(r+w/100*f),d[3]=Math.round(s+w/100*g),w>=99.8&&(w=100),w<100?(z(d),i()):(fe.done(),fe.animMode(!1),"function"==typeof t&&t.call(ve))}}();i()}}function S(e){z([e[0]/ie,e[1]/ne,e[2]/ie,e[3]/ne]),P.onSelect.call(ve,w(he.getFixed())),fe.enableHandles()}function z(e){he.setPressed([e[0],e[1]]),he.setCurrent([e[2],e[3]]),fe.update()}function k(){return w(he.getFixed())}function M(){return he.getFixed()}function O(e){u(e),D()}function _(){P.disabled=!0,fe.disableHandles(),fe.setCursor("default"),ge.setCursor("default")}function $(){P.disabled=!1,D()}function I(){fe.done(),ge.activateHandlers(null,null)}function j(){q.remove(),A.show(),A.css("visibility","visible"),e(t).removeData("Jcrop")}function F(e,t){fe.release(),_();var i=new Image;i.onload=function(){var n=i.width,a=i.height,r=P.boxWidth,s=P.boxHeight;K.width(n).height(a),K.attr("src",e),X.attr("src",e),g(K,r,s),U=K.width(),N=K.height(),X.width(U).height(N),X.css({background:"#0f0"}),ce.width(U+2*oe).height(N+2*oe),q.width(U).height(N),pe.resize(U,N),$(),"function"==typeof t&&t.call(ve)},i.src=e}function R(e,t,i){var n=t||P.bgColor;P.bgFade&&s()&&P.fadeTime&&!i?e.animate({backgroundColor:n},{queue:!1,duration:P.fadeTime}):e.css("backgroundColor",n)}function D(e){P.allowResize?e?fe.enableOnly():fe.enableHandles():fe.disableHandles(),ge.setCursor(P.allowSelect?"crosshair":"default"),fe.setCursor(P.allowMove?"move":"default"),P.hasOwnProperty("trueSize")&&(ie=P.trueSize[0]/U,ne=P.trueSize[1]/N),P.hasOwnProperty("setSelect")&&(S(P.setSelect),fe.done(),delete P.setSelect),pe.refresh(),P.bgColor!=ue&&(R(P.shade?pe.getShades():q,P.shade?P.shadeColor||P.bgColor:P.bgColor),ue=P.bgColor),de!=P.bgOpacity&&(de=P.bgOpacity,P.shade?pe.refresh():fe.setBgOpacity(de)),Q=P.maxSize[0]||0,Z=P.maxSize[1]||0,ee=P.minSize[0]||0,te=P.minSize[1]||0,P.hasOwnProperty("outerImage")&&(K.attr("src",P.outerImage),delete P.outerImage),fe.refresh()}var H,P=e.extend({},e.Jcrop.defaults),T=navigator.userAgent.toLowerCase(),B=/msie/.test(T),J=/msie [1-6]\./.test(T);"object"!==(void 0===t?"undefined":r()(t))&&(t=e(t)[0]),"object"!==(void 0===i?"undefined":r()(i))&&(i={}),u(i);var E={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0},A=e(t),L=!0;if("IMG"==t.tagName){if(0!=A[0].width&&0!=A[0].height)A.width(A[0].width),A.height(A[0].height);else{var W=new Image;W.src=A[0].src,A.width(W.width),A.height(W.height)}var K=A.clone().removeAttr("id").css(E).show();K.width(A.width()),K.height(A.height()),A.after(K).hide()}else K=A.css(E).show(),L=!1,null===P.shade&&(P.shade=!0);g(K,P.boxWidth,P.boxHeight);var U=K.width(),N=K.height(),q=e("<div />").width(U).height(N).addClass(a("holder")).css({position:"relative",backgroundColor:P.bgColor}).insertAfter(A).append(K);P.addClass&&q.addClass(P.addClass);var X=e("<div />"),Y=e("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),V=e("<div />").width("100%").height("100%").css("zIndex",320),G=e("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var e=he.getFixed();P.onDblClick.call(ve,e)}).insertBefore(K).append(Y,V);L&&(X=e("<img />").attr("src",K.attr("src")).css(E).width(U).height(N),Y.append(X)),J&&G.css({overflowY:"hidden"});var Q,Z,ee,te,ie,ne,ae,re,se,oe=P.boundary,ce=y().width(U+2*oe).height(N+2*oe).css({position:"absolute",top:n(-oe),left:n(-oe),zIndex:290}).mousedown(m),ue=P.bgColor,de=P.bgOpacity;H=o(K);var le=function(){function e(){var e,t={},i=["touchstart","touchmove","touchend"],n=document.createElement("div");try{for(e=0;e<i.length;e++){var a=i[e];a="on"+a;var r=a in n;r||(n.setAttribute(a,"return;"),r="function"==typeof n[a]),t[i[e]]=r}return t.touchstart&&t.touchend&&t.touchmove}catch(e){return!1}}return{createDragger:function(e){return function(t){return!P.disabled&&(!("move"===e&&!P.allowMove)&&(H=o(K),ae=!0,d(e,c(le.cfilter(t)),!0),t.stopPropagation(),t.preventDefault(),!1))}},newSelection:function(e){return m(le.cfilter(e))},cfilter:function(e){return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,e},isSupported:e,support:function(){return!0===P.touchSupport||!1===P.touchSupport?P.touchSupport:e()}()}}(),he=function(){function e(e){e=s(e),f=h=e[0],g=p=e[1]}function t(e){e=s(e),d=e[0]-f,l=e[1]-g,f=e[0],g=e[1]}function i(){return[d,l]}function n(e){var t=e[0],i=e[1];h+t<0&&(t-=t+h),p+i<0&&(i-=i+p),N<g+i&&(i+=N-(g+i)),U<f+t&&(t+=U-(f+t)),h+=t,f+=t,p+=i,g+=i}function a(e){var t=r();switch(e){case"ne":return[t.x2,t.y];case"nw":return[t.x,t.y];case"se":return[t.x2,t.y2];case"sw":return[t.x,t.y2]}}function r(){if(!P.aspectRatio)return c();var e,t,i,n,a=P.aspectRatio,r=P.minSize[0]/ie,s=P.maxSize[0]/ie,d=P.maxSize[1]/ne,l=f-h,w=g-p,v=Math.abs(l),m=Math.abs(w),b=v/m;return 0===s&&(s=10*U),0===d&&(d=10*N),b<a?(t=g,i=m*a,e=l<0?h-i:i+h,e<0?(e=0,n=Math.abs((e-h)/a),t=w<0?p-n:n+p):e>U&&(e=U,n=Math.abs((e-h)/a),t=w<0?p-n:n+p)):(e=f,n=v/a,t=w<0?p-n:p+n,t<0?(t=0,i=Math.abs((t-p)*a),e=l<0?h-i:i+h):t>N&&(t=N,i=Math.abs(t-p)*a,e=l<0?h-i:i+h)),e>h?(e-h<r?e=h+r:e-h>s&&(e=h+s),t=t>p?p+(e-h)/a:p-(e-h)/a):e<h&&(h-e<r?e=h-r:h-e>s&&(e=h-s),t=t>p?p+(h-e)/a:p-(h-e)/a),e<0?(h-=e,e=0):e>U&&(h-=e-U,e=U),t<0?(p-=t,t=0):t>N&&(p-=t-N,t=N),u(o(h,p,e,t))}function s(e){return e[0]<0&&(e[0]=0),e[1]<0&&(e[1]=0),e[0]>U&&(e[0]=U),e[1]>N&&(e[1]=N),[Math.round(e[0]),Math.round(e[1])]}function o(e,t,i,n){var a=e,r=i,s=t,o=n;return i<e&&(a=i,r=e),n<t&&(s=n,o=t),[a,s,r,o]}function c(){var e,t=f-h,i=g-p;return Q&&Math.abs(t)>Q&&(f=t>0?h+Q:h-Q),Z&&Math.abs(i)>Z&&(g=i>0?p+Z:p-Z),te/ne&&Math.abs(i)<te/ne&&(g=i>0?p+te/ne:p-te/ne),ee/ie&&Math.abs(t)<ee/ie&&(f=t>0?h+ee/ie:h-ee/ie),h<0&&(f-=h,h-=h),p<0&&(g-=p,p-=p),f<0&&(h-=f,f-=f),g<0&&(p-=g,g-=g),f>U&&(e=f-U,h-=e,f-=e),g>N&&(e=g-N,p-=e,g-=e),h>U&&(e=h-N,g-=e,p-=e),p>N&&(e=p-N,g-=e,p-=e),u(o(h,p,f,g))}function u(e){return{x:e[0],y:e[1],x2:e[2],y2:e[3],w:e[2]-e[0],h:e[3]-e[1]}}var d,l,h=0,p=0,f=0,g=0;return{flipCoords:o,setPressed:e,setCurrent:t,getOffset:i,moveOffset:n,getCorner:a,getFixed:r}}(),pe=function(){function t(e,t){f.left.css({height:n(t)}),f.right.css({height:n(t)})}function i(){return a(he.getFixed())}function a(e){f.top.css({left:n(e.x),width:n(e.w),height:n(e.y)}),f.bottom.css({top:n(e.y2),left:n(e.x),width:n(e.w),height:n(N-e.y2)}),f.right.css({left:n(e.x2),width:n(U-e.x2)}),f.left.css({width:n(e.x)})}function r(){return e("<div />").css({position:"absolute",backgroundColor:P.shadeColor||P.bgColor}).appendTo(p)}function s(){h||(h=!0,p.insertBefore(K),i(),fe.setBgOpacity(1,0,1),X.hide(),o(P.shadeColor||P.bgColor,1),fe.isAwake()?u(P.bgOpacity,1):u(1,1))}function o(e,t){R(l(),e,t)}function c(){h&&(p.remove(),X.show(),h=!1,fe.isAwake()?fe.setBgOpacity(P.bgOpacity,1,1):(fe.setBgOpacity(1,1,1),fe.disableHandles()),R(q,0,1))}function u(e,t){h&&(P.bgFade&&!t?p.animate({opacity:1-e},{queue:!1,duration:P.fadeTime}):p.css({opacity:1-e}))}function d(){P.shade?s():c(),fe.isAwake()&&u(P.bgOpacity)}function l(){return p.children()}var h=!1,p=e("<div />").css({position:"absolute",zIndex:240,opacity:0}),f={top:r(),left:r().height(N),right:r().height(N),bottom:r()};return{update:i,updateRaw:a,getShades:l,setBgColor:o,enable:s,disable:c,resize:t,refresh:d,opacity:u}}(),fe=function(){function t(t){var i=e("<div />").css({position:"absolute",opacity:P.borderOpacity}).addClass(a(t));return Y.append(i),i}function i(t,i){var n=e("<div />").mousedown(f(t)).css({cursor:t+"-resize",position:"absolute",zIndex:i}).addClass("ord-"+t);return le.support&&n.bind("touchstart.jcrop",le.createDragger(t)),V.append(n),n}function r(e){var t=P.handleSize,n=i(e,z++).css({opacity:P.handleOpacity}).addClass(a("handle"));return t&&n.width(t).height(t),n}function s(e){return i(e,z++).addClass("jcrop-dragbar")}function o(e,t){P.shade||X.css({top:n(-t),left:n(-e)}),G.css({top:n(t),left:n(e)})}function c(e,t){G.width(Math.round(e)).height(Math.round(t))}function u(){var e=he.getFixed();he.setPressed([e.x,e.y]),he.setCurrent([e.x2,e.y2]),d()}function d(e){if(S)return l(e)}function l(e){var t=he.getFixed();c(t.w,t.h),o(t.x,t.y),P.shade&&pe.updateRaw(t),S||p(),e?P.onSelect.call(ve,w(t)):P.onChange.call(ve,w(t))}function h(e,t,i){(S||t)&&(P.bgFade&&!i?K.animate({opacity:e},{queue:!1,duration:P.fadeTime}):K.css("opacity",e))}function p(){G.show(),P.shade?pe.opacity(de):h(de,!0),S=!0}function g(){b(),G.hide(),P.shade?pe.opacity(1):h(1),S=!1,P.onRelease.call(ve)}function v(){_&&V.show()}function m(){if(_=!0,P.allowResize)return V.show(),!0}function b(){_=!1,V.hide()}function x(e){e?(re=!0,b()):(re=!1,m())}function C(){x(!1),u()}var S,z=370,k={},M={},O={},_=!1;P.dragEdges&&e.isArray(P.createDragbars)&&function(e){var t;for(t=0;t<e.length;t++)O[e[t]]=s(e[t])}(P.createDragbars),e.isArray(P.createHandles)&&function(e){var t;for(t=0;t<e.length;t++)M[e[t]]=r(e[t])}(P.createHandles),P.drawBorders&&e.isArray(P.createBorders)&&function(e){var i,n;for(n=0;n<e.length;n++){switch(e[n]){case"n":i="hline";break;case"s":i="hline bottom";break;case"e":i="vline right";break;case"w":i="vline"}k[e[n]]=t(i)}}(P.createBorders),e(document).bind("touchstart.jcrop-ios",function(t){e(t.currentTarget).hasClass("jcrop-tracker")&&t.stopPropagation()});var $=y().mousedown(f("move")).css({cursor:"move",position:"absolute",zIndex:360});return le.support&&$.bind("touchstart.jcrop",le.createDragger("move")),Y.append($),b(),{updateVisible:d,update:l,release:g,refresh:u,isAwake:function(){return S},setCursor:function(e){$.css("cursor",e)},enableHandles:m,enableOnly:function(){_=!0},showHandles:v,disableHandles:b,animMode:x,setBgOpacity:h,done:C}}(),ge=function(){function t(t){ce.css({zIndex:450}),t?e(document).bind("touchmove.jcrop",s).bind("touchend.jcrop",o):h&&e(document).bind("mousemove.jcrop",n).bind("mouseup.jcrop",a)}function i(){ce.css({zIndex:290}),e(document).unbind(".jcrop")}function n(e){return d(c(e)),!1}function a(e){return e.preventDefault(),e.stopPropagation(),ae&&(ae=!1,l(c(e)),fe.isAwake()&&P.onSelect.call(ve,w(he.getFixed())),i(),d=function(){},l=function(){}),!1}function r(e,i,n){return ae=!0,d=e,l=i,t(n),!1}function s(e){return d(c(le.cfilter(e))),!1}function o(e){return a(le.cfilter(e))}function u(e){ce.css("cursor",e)}var d=function(){},l=function(){},h=P.trackDocument;return h||ce.mousemove(n).mouseup(a).mouseout(a),K.before(ce),{activateHandlers:r,setCursor:u}}(),we=function(){function t(){P.keySupport&&(r.show(),r.focus())}function i(e){r.hide()}function n(e,t,i){P.allowMove&&(he.moveOffset([t,i]),fe.updateVisible(!0)),e.preventDefault(),e.stopPropagation()}function a(e){if(e.ctrlKey||e.metaKey)return!0;se=!!e.shiftKey;var t=se?10:1;switch(e.keyCode){case 37:n(e,-t,0);break;case 39:n(e,t,0);break;case 38:n(e,0,-t);break;case 40:n(e,0,t);break;case 27:P.allowSelect&&fe.release();break;case 9:return!0}return!1}var r=e('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}).addClass("jcrop-keymgr"),s=e("<div />").css({position:"absolute",overflow:"hidden"}).append(r);return P.keySupport&&(r.keydown(a).blur(i),J||!P.fixedSupport?(r.css({position:"absolute",left:"-20px"}),s.append(r).insertBefore(K)):r.insertBefore(K)),{watchKeys:t}}();le.support&&ce.bind("touchstart.jcrop",le.newSelection),V.hide(),D(!0);var ve={setImage:F,animateTo:C,setSelect:S,setOptions:O,tellSelect:k,tellScaled:M,setClass:x,disable:_,enable:$,cancel:I,release:fe.release,destroy:j,focus:we.watchKeys,getBounds:function(){return[U*ie,N*ne]},getWidgetSize:function(){return[U,N]},getScaleFactor:function(){return[ie,ne]},getOptions:function(){return P},ui:{holder:q,selection:G}};return B&&q.bind("selectstart",function(){return!1}),A.data("Jcrop",ve),ve},e.fn.Jcrop=function(t,i){var n;return this.each(function(){if(e(this).data("Jcrop")){if("api"===t)return e(this).data("Jcrop");e(this).data("Jcrop").setOptions(t)}else"IMG"==this.tagName?e.Jcrop.Loader(this,function(){e(this).css({display:"block",visibility:"hidden"}),n=e.Jcrop(this,t),e.isFunction(i)&&i.call(n)}):(e(this).css({display:"block",visibility:"hidden"}),n=e.Jcrop(this,t),e.isFunction(i)&&i.call(n))}),this},e.Jcrop.Loader=function(t,i,n){function a(){s.complete?(r.unbind(".jcloader"),e.isFunction(i)&&i.call(s)):window.setTimeout(a,50)}var r=e(t),s=r[0];r.bind("load.jcloader",a).bind("error.jcloader",function(t){r.unbind(".jcloader"),e.isFunction(n)&&n.call(s)}),s.complete&&e.isFunction(i)&&(r.unbind(".jcloader"),i.call(s))},e.Jcrop.defaults={allowSelect:!0,allowMove:!0,allowResize:!0,trackDocument:!0,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:.6,bgFade:!1,borderOpacity:.4,handleOpacity:.5,handleSize:null,aspectRatio:0,keySupport:!0,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:!0,dragEdges:!0,fixedSupport:!0,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}}(jQuery);var s=(i("rxrk"),{props:{action:{default:""},aspectRatio:{default:1},width:{default:200},url:{default:""},maxSize:{default:2},acceptType:{default:"jpeg,jpg,png"},data:{},sync:{default:!1},maxWidth:{default:600},title:{default:"图片上传"},visible:{default:!1}},data:function(){return{img_url:this.url,jcrop_api:"",boundx:"",boundy:"",widget:[0,0],$preview:void 0,$pcnt:void 0,$pimg:void 0,canvasOption:{},icon_url:"",pre_width:0,zoom:1}},methods:{testMaxSize:function(e){var t=this,i=new Image;if(e.files&&e.files[0]){var n=e.files[0],a=n.size,r=new FileReader;r.onload=function(n){var r=n.target.result;i.src=r,i.onload=function(){if(t.boundy=i.height,t.boundx=i.width,i.width>5e3||i.height>5e3)return $("#inputImage").val(""),t.$message({message:"图片尺寸太大，请重新选择！",type:"warning"}),!1;a?t.maxSize<a/1048576?(t.$message({message:"所选图片不可超过"+t.maxSize+"M",type:"warning"}),$("#inputImage").val("")):t.acceptType.indexOf(e.files[0].type.split("/")[1].toLowerCase())<0?(t.$message({message:"只能上传"+t.acceptType+"格式图片",type:"warning"}),$("#inputImage").val("")):(t.jcrop_api.setImage(r,function(){t.widget=this.getWidgetSize(),this.setSelect([0,0,300,300]),$("#pre-picture").parent().css({position:"absolute",width:t.widget[0]+"px",marginLeft:"-"+t.widget[0]/2+"px",marginTop:"-"+t.widget[1]/2+"px"})}),t.img_url=r,t.resetCrop()):t.$message({message:"请选取图片",type:"warning"})},i.onerror=function(e){return t.$message({message:"非法图片格式，请重新选择",type:"error"}),$("#inputImage").val(""),!1}},r.readAsDataURL(n)}else this.isIE()},subForm:function(){if(this.setCanvas(this.canvasOption)){if(this.syncUrl(this.icon_url),this.sync)return this.cancel(),!1;this.submitImageFile()}else this.$message({message:"无法剪裁，请更换浏览器重新尝试！",type:"warning"})},submitImageFile:function(e){var t=this;if("error"!==this.icon_url){if(""===this.icon_url)return e({returnCode:200});var i=new FormData,n=this.dataURLtoBlob(this.icon_url);i.append("file",n,"avatar-image.png");for(var a in this.data)i.append(a,this.data[a]);this.sync||this.$myLoad("正在上传中..."),$.ajax({url:this.action,type:"post",data:i,dataType:"text",processData:!1,contentType:!1,success:function(i){t.$emit("success",JSON.parse(i)),t.sync?e(JSON.parse(i)):(t.cancel(),t.$loading().close(),t.$message({message:JSON.parse(i).msg,type:"success"}))},error:function(e){t.$loading().close()},xhr:function(){var e=new XMLHttpRequest;return e.upload.addEventListener("progress",function(e){e.lengthComputable},!1),e}})}else this.$message({message:"无法获取剪切数据，请重新尝试！",type:"warning"})},dataURLtoBlob:function(e){for(var t=e.split(","),i=t[0].match(/:(.*?);/)[1],n=atob(t[1]),a=n.length,r=new Uint8Array(a);a--;)r[a]=n.charCodeAt(a);return new Blob([r],{type:i,filename:"image.png"})},resetCrop:function(){var e=this;this.$preview=$("#preview-pane"),this.$pimg=$("#preview-pane .preview-container img"),$("#pre-picture").Jcrop({bgFade:!0,boxHeight:400,boxWidth:400,onChange:this.updatePreview,onSelect:this.updatePreview,aspectRatio:this.aspectRatio},function(){e.jcrop_api=this;var t=this.getBounds();e.widget=this.getWidgetSize(),e.boundx=t[0],e.boundy=t[1],this.setSelect([0,0,300,200]),$("#pre-picture").parent().css({position:"absolute",width:e.widget[0]+"px",marginLeft:"-"+e.widget[0]/2+"px",marginTop:"-"+e.widget[1]/2+"px"})})},setCanvas:function(e){var t=$("#preview-pane .preview-container img")[0],i=document.createElement("img"),n=1;i.src=t.src;var a=document.createElement("canvas");this.zoom=i.width/this.boundx,e.w*this.zoom>this.maxWidth&&(n=this.maxWidth/(e.w*this.zoom)),a.width=e.w*this.zoom*n,a.height=e.h*this.zoom*n;try{a.getContext("2d").drawImage(t,e.x*this.zoom,e.y*this.zoom,e.w*this.zoom,e.h*this.zoom,0,0,e.w*this.zoom*n,e.h*this.zoom*n),this.icon_url=a.toDataURL()}catch(e){return this.icon_url="error"}return this.icon_url},changeImg:function(e){this.testMaxSize(e.target)},updatePreview:function(e){if(parseInt(e.w)>0){var t=this.width/e.w,i=this.width/this.aspectRatio/e.h;this.canvasOption=e,this.$pimg.css({width:Math.round(t*this.boundx)+"px",height:Math.round(i*this.boundy)+"px",marginLeft:"-"+Math.round(t*e.x)+"px",marginTop:"-"+Math.round(i*e.y)+"px"})}},isIE:function(){var e=navigator.userAgent;if(e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&(new RegExp("MSIE (\\d+\\.\\d+);").test(e),10!==parseFloat(RegExp.$1)))return this.$message({message:"您的计算机当前ie版本过低，无法使用图片上传，请您更换浏览器重新尝试！",type:"warning"}),!1},cancel:function(){this.$emit("close",!0)},syncUrl:function(e){this.$emit("syncUrl",e)}},mounted:function(){},watch:{visible:function(e){var t=this;e&&this.$nextTick(function(){t.resetCrop(t.img_url)})}}}),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.visible?i("div",{staticClass:"picture-cropper-mode"},[i("div",{staticClass:"picture-cropper-wrap"},[i("div",{staticClass:"pc-inner-header"},[i("span",{staticClass:"pc-header-title"},[e._v(e._s(e.title))]),e._v(" "),i("i",{staticClass:"el-icon-close",on:{click:e.cancel}})]),e._v(" "),i("div",{staticClass:"pc-wrap-inner clear"},[i("div",{staticClass:"wrap-container"},[i("div",{staticClass:"pic-wrapper"},[i("img",{ref:"pre-picture",attrs:{src:e.img_url,id:"pre-picture",alt:""}})])]),e._v(" "),i("div",{staticClass:"pc-wrap-inner-right",style:{width:e.width+20+"px"}},[i("div",{style:{height:e.width/e.aspectRatio+"px",width:e.width+"px"},attrs:{id:"preview-pane"}},[i("div",{staticClass:"preview-container",style:{height:e.width/e.aspectRatio+"px",width:e.width+"px"}},[i("img",{staticClass:"jcrop-preview",attrs:{src:e.img_url,alt:"Preview"}})])]),e._v(" "),e._m(0)])]),e._v(" "),i("div",{staticClass:"pc-handle-wrap"},[i("form",{attrs:{id:"picture-form",action:"",enctype:"multipart/form-data"}},[i("label",{staticClass:"btn-check-file",attrs:{for:"inputImage"}},[i("input",{staticClass:"btn-file",attrs:{name:"file",type:"file",id:"inputImage"},on:{change:e.changeImg}}),e._v(" "),i("span",[e._v("选取图片")])])]),e._v(" "),i("button",{staticClass:"el-button el-button--primary",on:{click:e.subForm}},[e._v(e._s(e.sync?"确定":"上传"))])])])]):e._e()},c=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tip-msg"},[i("p",[i("span",{staticClass:"red"},[e._v("提示：")]),e._v("请勿使用360兼容模式以及ie10以下版本，可能导致无法使用剪裁上传功能\n          ")])])}],u=i("18Nq"),d=n,l=Object(u.a)(s,o,c,!1,d,null,null);t.default=l.exports},rxrk:function(e,t){}});
//# sourceMappingURL=68.3cb1a8f3f4862b0ab203.js.map