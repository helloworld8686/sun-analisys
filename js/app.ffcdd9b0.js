(function(t){function e(e){for(var n,r,o=e[0],h=e[1],c=e[2],u=0,l=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);d&&d(e);while(l.length)l.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var h=a[o];0!==i[h]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=h;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("66b9");var n=a("b650"),i=(a("c3a6"),a("ad06")),s=(a("5fe4"),a("8ad4")),r=(a("6d73"),a("473d")),o=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper",attrs:{id:"app"}},[a("canvas",{attrs:{id:"canvasRender"}}),a("div",{staticClass:"bottom-card"},[a("div",{staticClass:"top"},[a("h4",{staticClass:"title"},[t._v("狐厂家园")]),a("div",{staticClass:"date",on:{click:function(e){t.showCalendar=!0}}},[a("span",{staticClass:"text"},[t._v(t._s(t.dateStr))]),a("van-icon",{attrs:{name:"arrow"}})],1)]),a("div",{staticClass:"time-wrapper"},[a("div",{staticClass:"time-slider"},[a("span",{staticClass:"time"},[t._v("00:00")]),a("van-slider",{attrs:{min:0,max:24,step:1e-4,"button-size":"14px"},on:{change:t.onTimeChange},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("span",{staticClass:"time"},[t._v("24:00")]),a("span",{staticClass:"current-time"},[t._v(t._s(t.timeStr))])],1),a("van-icon",{staticClass:"play",attrs:{name:t.playing?"pause-circle-o":"play-circle-o",size:"24px"},on:{click:t.play}})],1),a("div",{staticClass:"times"},[a("p",[t._v(" 日出时间"),a("span",{staticClass:"value"},[t._v(t._s(t.riseTimeStr))])]),a("p",[t._v(" 日落时间"),a("span",{staticClass:"value"},[t._v(t._s(t.setTimeStr))])]),a("p",[t._v(" 昼长"),a("span",{staticClass:"value"},[t._v(t._s(t.dayLengthStr))])])]),a("div",{staticClass:"dates"},t._l(t.dates,(function(e){return a("van-button",{key:e.date,staticClass:"btn",class:{active:t.dateStr===e.date},attrs:{plain:"",size:"mini",type:"default"},on:{click:function(a){return t.choseDate(e.date)}}},[t._v(t._s(e.name))])})),1)]),t.loaded?t._e():a("div",{staticClass:"loading"}),a("van-calendar",{attrs:{"min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.onChoseDate},model:{value:t.showCalendar,callback:function(e){t.showCalendar=e},expression:"showCalendar"}})],1)},c=[],d=(a("99af"),a("4160"),a("d81d"),a("d3b7"),a("ac1f"),a("5319"),a("159b"),a("96cf"),a("1da1")),u=a("2909");a("4d63"),a("25f0");function l(t,e){var a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hh:mm",a=Math.floor(t),n=Math.floor(60*t-60*a),i=Math.floor(60*t*60-60*a*60-60*n),s={"h+":a,"m+":n,"s+":i};for(var r in s)new RegExp("("+r+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?s[r]:("00"+s[r]).substr((""+s[r]).length)));return e}function m(t,e){var a=t.getFullYear(),n=new Date(a+"/01/01"),i=(Date.parse(t)-n)/864e5+1;return e?i:Math.round(i)}function _(t){var e=m(t),a=2*Math.PI*(e-1)/365,n=.006918-.399912*Math.cos(a)+.070257*Math.sin(a)-.006758*Math.cos(2*a)+907e-6*Math.sin(2*a)-.002697*Math.cos(3*a)+.00148*Math.sin(3*a);return n}function v(t,e){var a=_(e);return Math.PI/2-t+a}function f(t,e){var a=_(t),n=24-24*Math.acos(Math.tan(a)*Math.tan(e))/Math.PI;return n}function g(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"hh:mm:ss",s=f(a,e),r=w(15*n),o=12+y(r-t)/15,h=p(o),c=p(o-s/2,i),d=p(o+s/2,i);return{riseTime:c,setTime:d,noonTime:h,noonTimeNum:o,dayLength:s}}function w(t){return Math.PI*t/180}function y(t){return 180*t/Math.PI}function M(t){var e=Math.abs(t),a=Math.floor(e),n=Math.floor(60*(e-a)),i=Math.round(3600*(e-a)%60),s="".concat(a,"°").concat(n,"′").concat(i,"″");return t<0&&(s="-"+s),s}function b(t){return M(y(t))}var R={dateFormat:l,timeFormat:p,getDays:m,getDeclination:_,getSunLightHeightRad:v,getDayLength:f,getSunTime:g,deg2rad:w,rad2deg:y,deg2str:M,rad2str:b},S=Math.PI,k=6378245,x=.006693421622965943;function C(t,e){if(P(t,e))return[t,e];var a=L(t-105,e-35),n=T(t-105,e-35),i=e/180*S,s=Math.sin(i);s=1-x*s*s;var r=Math.sqrt(s);a=180*a/(k*(1-x)/(s*r)*S),n=180*n/(k/r*Math.cos(i)*S);var o=e+a,h=t+n;return[h,o]}function L(t,e){var a=2*t-100+3*e+.2*e*e+.1*t*e+.2*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*S)+20*Math.sin(2*t*S))/3,a+=2*(20*Math.sin(e*S)+40*Math.sin(e/3*S))/3,a+=2*(160*Math.sin(e/12*S)+320*Math.sin(e*S/30))/3,a}function T(t,e){var a=300+t+2*e+.1*t*t+.1*t*e+.1*Math.sqrt(Math.abs(t));return a+=2*(20*Math.sin(6*t*S)+20*Math.sin(2*t*S))/3,a+=2*(20*Math.sin(t*S)+40*Math.sin(t/3*S))/3,a+=2*(150*Math.sin(t/12*S)+300*Math.sin(t/30*S))/3,a}function P(t,e){return t<72.004||t>137.8347||e<.8293||e>55.8271||!1}function j(t,e){var a=[],n=20037508.34*t/180,i=Math.log(Math.tan((90+e)*Math.PI/360))/(Math.PI/180);return i=20037508.34*i/180,a[0]=n,a[1]=i,a}a("b0c0"),a("38cf");var D=a("d4ec"),H=a("bee2"),z=a("5a89"),E=a("4721"),O=a("3191"),I=a.n(O),A=a("5664"),F=a.n(A),q=!1,B=function(){function t(e){Object(D["a"])(this,t);var a=e.lon,n=e.lat,i=e.date,s=e.time,r=e.dev,o=e.element,h=e.baseMap;this._isDev=r&&q,this._element=o,this._lon=R.deg2rad(a),this._lat=R.deg2rad(n),this._date=i,this._time=s,this._baseMap=h,this._R=2e3}return Object(H["a"])(t,[{key:"init",value:function(){var t=this;this._scene||(this._currentRotateRad=0,this._sunLightHeightRad=R.getSunLightHeightRad(this._lat,this._date),this._noonTimeNum=R.getSunTime(this._lon,this._lat,this._date).noonTimeNum,this._initRender(),this._initScene(),this._initCamera(),this._initLight(),this._initControl(),this._addSun(),this._addBasePlane(),this._isDev&&(this._addHelper(),this._addEarthAxis(),this._addStats()),window.onresize=function(){t._onWindowResize()},this._render(),this._rotate())}},{key:"addBuildings",value:function(t,e){var a=this,n=new z["k"];n.name=e,t.features.forEach((function(t){var e=t.geometry.coordinates[0].map((function(t){return[t[0],.1,-t[1]]})),i=a._creatBuilding(e,6*t.properties.height,t.properties.name);n.add(i)})),this._scene.add(n)}},{key:"destroy",value:function(){var t=this;if(console.log("destroy"),this._scene){var e=this._scene.children;e.forEach((function(e){"Group"===e.type?t._removeGroup(e):"Mesh"===e.type?t._removeMesh(e):e instanceof z["l"]&&t._scene.remove(e)}))}this._scene.dispose(),this._render.dispose(),this._scene=null,this._renderer=null,this._camera=null,this._control=null,this._ambientLight=null,this._directionalLight=null}},{key:"_removeMesh",value:function(t){"Mesh"===t.type&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach((function(t){t.map&&t.map.dispose(),t.dispose()})):t.material.dispose(),this._scene.remove(t))}},{key:"_removeGroup",value:function(t){var e=this;"Group"===t.type&&(t.children.forEach((function(t){"Mesh"===t.type&&e._removeMesh(t)})),this._scene.remove(t))}},{key:"_rotate",value:function(){var t=Math.PI*(this._time-this._noonTimeNum)/12,e=t-this._currentRotateRad,a=new z["C"](0,Math.tan(this._lat),-1);N(this._sunMesh,a,-e),N(this._directionalLight,a,-e),this._currentRotateRad=t,this._ambientLight.intensity=.6}},{key:"_render",value:function(){var t=this;this._renderer.render(this._scene,this._camera),this._control.update(),this._stats&&this._stats.update(),this._directionalLightHelper&&this._directionalLightHelper.update(),requestAnimationFrame((function(){t._render()}))}},{key:"_initRender",value:function(){var t=new z["E"]({canvas:this._element,antialias:!0,alpha:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),t.setClearColor(12178431,1),t.shadowMap.enabled=!0,this._renderer=t}},{key:"_initScene",value:function(){var t=new z["w"];t.background=new z["d"](2236962),this._scene=t}},{key:"_initCamera",value:function(){var t=new z["s"](45,window.innerWidth/window.innerHeight,.1,5e4);t.position.set(0,1600,1600),t.lookAt(this._scene.position),this._camera=t}},{key:"_initLight",value:function(){var t=new z["a"](6710886,.8),e=new z["f"](16777215,1);e.position.set(0,this._R*Math.sin(this._sunLightHeightRad),this._R*Math.cos(this._sunLightHeightRad)),e.shadow.camera.near=.5,e.shadow.camera.far=1e4,e.shadow.camera.left=-500,e.shadow.camera.right=500,e.shadow.camera.top=500,e.shadow.camera.bottom=-500,e.shadow.mapSize.set(1024,1024),e.castShadow=!0,this._scene.add(t),this._scene.add(e),this._ambientLight=t,this._directionalLight=e}},{key:"_initControl",value:function(){var t=new E["a"](this._camera,this._renderer.domElement);t.enableDamping=!0,t.enableZoom=!0,t.enablePan=!0,t.autoRotate=!1,t.autoRotateSpeed=.5,t.minPolarAngle=0,t.maxPolarAngle=Math.PI/2-.1,t.minDistance=100,t.maxDistance=1e4,this._control=t}},{key:"_addHelper",value:function(){var t=new z["b"](1e3);this._scene.add(t),this._directionalLightHelper=new z["g"](this._directionalLight,500,16776960),this._scene.add(this._directionalLightHelper)}},{key:"_addEarthAxis",value:function(){var t=new z["n"]({color:0,linewidth:1}),e=new z["j"];e.vertices.push(new z["C"](0,1e3*Math.tan(this._lat),-1e3),new z["C"](0,-1e3*Math.tan(this._lat),1e3));var a=new z["m"](e,t);this._scene.add(a)}},{key:"_addSkyBox",value:function(){this._scene.background=(new z["e"]).setPath("./static/images/").load(["sky_px.jpg","sky_nx.jpg","sky_py.jpg","sky_ny.jpg","sky_pz.jpg","sky_nz.jpg"])}},{key:"_addSun",value:function(){var t=new z["x"](20,40,40),e=new z["r"]({color:16711680}),a=new z["q"](t,e);a.name="太阳",a.position.y=this._R*Math.sin(this._sunLightHeightRad),a.position.z=this._R*Math.cos(this._sunLightHeightRad),this._scene.add(a),this._sunMesh=a}},{key:"_addBasePlane",value:function(){var t=new z["t"](1024,1024),e=(new z["A"]).load(this._baseMap),a=new z["r"]({map:e}),n=new z["q"](t,a);n.name="地图平面",n.rotateX(-Math.PI/2),n.receiveShadow=!0,n.castShadow=!0,this._scene.add(n)}},{key:"_creatBuilding",value:function(t,e,a){t.reverse();var n=$(t,e),i=(new z["A"]).load(this._baseMap);i.wrapS=z["v"],i.wrapT=z["v"],i.repeat.set(4,4);var s=[new z["r"]({color:16777215,transparent:!0,opacity:.96,side:z["c"]}),new z["r"]({color:15658734,transparent:!0,opacity:.96,side:z["c"]})],r=new z["q"](n,s);return r.name=a,r.castShadow=!0,r.receiveShadow=!0,r}},{key:"_onWindowResize",value:function(){this._camera.aspect=window.innerWidth/window.innerHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"_addStats",value:function(){var t=new I.a;t.showPanel(1),t.dom.style.top="",t.dom.style.bottom="0",document.body.appendChild(t.dom),this._stats=t}},{key:"date",set:function(t){this._date=t,this._sunLightHeightRad=R.getSunLightHeightRad(this._lat,this._date),this._sunMesh.position.y=this._R*Math.sin(this._sunLightHeightRad),this._sunMesh.position.z=this._R*Math.cos(this._sunLightHeightRad),this._directionalLight.position.set(0,this._R*Math.sin(this._sunLightHeightRad),this._R*Math.cos(this._sunLightHeightRad)),this._currentRotateRad=0,this._rotate()}},{key:"time",set:function(t){this._time=t,this._rotate()}}]),t}();function $(t,e){for(var a=[],n=0;n<t.length;n++)a.push([t[n][0],t[n][1]+e,t[n][2]]);for(var i=t.concat(a),s=[],r=0;r<i.length;r++)s.push(new z["C"](i[r][0],i[r][1],i[r][2]));for(var o=t.length,h=[],c=0;c<o;c++)c!=o-1?(h.push(new z["i"](c,c+1,o+c+1)),h.push(new z["i"](o+c+1,o+c,c))):(h.push(new z["i"](c,0,o)),h.push(new z["i"](o,o+c,c)));for(var d=[],u=0;u<o;u++)d.push(t[u][0],t[u][2]);var l=F()(d);if(l&&0!=l.length)for(var p=0;p<l.length;p++){var m=l.length;if(p%3==0&&p<m-2){var _=new z["i"](l[p],l[p+1],l[p+2]),v=new z["i"](l[p]+o,l[p+1]+o,l[p+2]+o);_.materialIndex=1,v.materialIndex=1,h.push(_),h.push(v)}}var f=new z["j"];return f.vertices=s,f.faces=h,f.computeFaceNormals(),f}function N(t,e,a){var n=new z["p"];n.makeRotationAxis(e.normalize(),a);var i=new z["D"](t.position.x,t.position.y,t.position.z,1),s=i.applyMatrix4(n);t.position.x=s.x,t.position.y=s.y,t.position.z=s.z}var G="d0d18f5a3a5abeff6f97c818019b97eb",W=null,J={data:function(){return{lon:CONFIG.lon,lat:CONFIG.lat,date:new Date,time:9,riseTimeStr:"",setTimeStr:"",noonTimeStr:"",dayLengthStr:"",minDate:new Date(2020,0,1),maxDate:new Date(2020,12,31),showCalendar:!1,playing:!1,loaded:!1,dates:[{name:"大寒",date:"2020-01-20"},{name:"春分",date:"2020-03-20"},{name:"夏至",date:"2020-06-21"},{name:"秋分",date:"2020-09-22"},{name:"立冬",date:"2020-11-07"},{name:"冬至",date:"2020-12-21"}]}},computed:{dateStr:function(){return R.dateFormat(this.date,"yyyy-MM-dd")},timeStr:function(){return R.timeFormat(this.time)}},mounted:function(){var t=this;this.date=new Date,this.getSunTime(),W=new B({element:document.querySelector("#canvasRender"),lon:this.lon,lat:this.lat,date:this.date,time:this.time,baseMap:"https://restapi.amap.com/v3/staticmap?location=".concat(this.lon,",").concat(this.lat,"&zoom=16&scale=1&size=1024*1024&key=").concat(G),dev:!1}),W.init(),this.loadBuildings(),setTimeout((function(){t.loaded=!0,t.play()}),1e3)},destroyed:function(){W.destroy()},methods:{onChoseDate:function(t){this.date=t,this.showCalendar=!1,this.getSunTime(),W.date=t},choseDate:function(t){this.date=new Date(t),this.getSunTime(),W.date=this.date},onTimeChange:function(t){W.time=t},play:function(){var t=this;this.playing=!this.playing,clearTimeout(this.timer),this.timer=0,this.playing&&(this.timer=setInterval((function(){var e=.05;(t.time<4||t.time>21)&&(e=.5),t.time=t.time+e,t.time>24&&(t.time=0),W.time=t.time}),50))},getSunTime:function(){var t=R.getSunTime(R.deg2rad(this.lon),R.deg2rad(this.lat),this.date,8,"hh:mm"),e=t.riseTime,a=t.setTime,n=t.dayLength;this.riseTimeStr=e,this.setTimeStr=a,this.dayLengthStr=R.timeFormat(n,"h h m min").replace(/\s+/g,"")},transformCoordinate:function(t){var e=j(this.lon,this.lat),a=Math.cos(R.deg2rad(this.lat));t.features.forEach((function(t){var n=t.geometry.coordinates,i=n.map((function(t){var n=[];return t.forEach((function(t){var i=j.apply(void 0,Object(u["a"])(C.apply(void 0,Object(u["a"])(t)))),s=Math.round((i[0]-e[0])*a*100)/100,r=Math.round((i[1]-e[1])*a*100)/100;n.push([s,r])})),n}));t.geometry.coordinates=i}))},loadBuildings:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data/test.json").then((function(t){return t.json()})).catch(console.error);case 2:a=e.sent,a&&a.features&&a.features.length&&(t.transformCoordinate(a),W&&W.addBuildings(a));case 4:case"end":return e.stop()}}),e)})))()}}},Y=J,X=(a("5c0b"),a("2877")),Z=Object(X["a"])(Y,h,c,!1,null,null,null),K=Z.exports;a("157a"),a("5717");o["a"].use(r["a"]),o["a"].use(s["a"]),o["a"].use(i["a"]),o["a"].use(n["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(K)}}).$mount("#app")},5717:function(t,e,a){},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.ffcdd9b0.js.map