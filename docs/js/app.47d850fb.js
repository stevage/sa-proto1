(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],n[o]&&p.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],a=!0,c=1;c<i.length;c++){var s=i[c];0!==n[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var a=i("64a9"),n=i.n(a);n.a},"04b3":function(e,t,i){},"0e59":function(e,t,i){"use strict";var a=i("3848"),n=i.n(a);n.a},1:function(e,t){},"13ec":function(e,t,i){},2:function(e,t){},"2a82":function(e,t,i){"use strict";var a=i("536d"),n=i.n(a);n.a},3:function(e,t){},3308:function(e,t,i){},3848:function(e,t,i){},4:function(e,t){},5:function(e,t){},"536d":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var a=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("div",{attrs:{id:"middle"}},[i("div",{attrs:{id:"sidebar"}},[i("FacilityInfo"),i("LayerSelector")],1),i("div",{attrs:{id:"map-container"}},[i("Map"),i("FeatureInfo"),i("Legend")],1)]),i("div",{attrs:{id:"bottom"}})])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"top"}},[i("h1",[e._v("SportAus Data Platform Prototype #1")])])}],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"map"}})},c=[],s=(i("96cf"),i("3b8d")),l=(i("55dd"),i("e192")),u=i.n(l),d=i("8936"),p=i.n(d),f=i("fb1a"),y=i.n(f),v=i("bc3a"),m=i.n(v),h=(i("2963"),i("ac6d"),i("0321").promisify),_=h(i("2ebd")),w=i("595b").circle,b=i("595b").voronoi,g=i("6e1d")(-30),S={data:function(){return{facilities:{features:[]},activeSport:void 0}},mounted:function(){u.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw";var e=new u.a.Map({container:"map",center:[145,-37.8],zoom:12,style:"mapbox://styles/mapbox/light-v9"});p.a.init(e),window.map=e,window.Map=this,e.on("load",function(){return A(e)})},computed:{similarFacilities:function(){var e=this;return this.facilities.features.filter(function(t){return t.properties.SportsPlayed===e.activeSport})}},methods:{toggleLayer:function(e,t){window.map.U.toggle(e,t)},nearestSimilar:function(e){return this.similarFacilities.map(function(t){return t._distance=g.distance(e.geometry.coordinates,t.geometry.coordinates),t}).sort(function(e,t){return e._distance-t._distance}).slice(1,6)},updateTimeCatchment:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return window.map.U.setData("time-catchment",{type:"FeatureCollection",features:[]}),e.next=4,_(window.FacilityInfo.facility.geometry.coordinates,{token:u.a.accessToken,threshold:[300,600,900],direction:"convergent"});case 4:t=e.sent,e.next=7;break;case 7:window.map.U.setData("time-catchment",t);case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};function F(e,t){window.Map.activeSport=t,e.U.setCircleColor("sport-and-rec-point",{property:"SportsPlayed",type:"categorical",stops:[[t,"hsl(150,100%,70%)"]],default:"green"}),e.U.setCircleRadius("sport-and-rec-point",{property:"SportsPlayed",type:"categorical",stops:[[t,10]],default:5});var i=2;e.U.setData("facility-catchment",{type:"FeatureCollection",features:window.Map.similarFacilities.map(function(e){return w(e.geometry.coordinates,i)})})}function C(e){var t=b({type:"FeatureCollection",features:window.Map.similarFacilities},{bbox:[141,-39,150,-34]});t.features=t.features.filter(Boolean),e.U.setData("facility-voronoi",t)}function x(e,t){window.FacilityInfo.facility=t,console.log(t.properties),e.setFilter("facility-highlight",["==","OBJECTID",t.properties.OBJECTID]),F(e,t.properties.SportsPlayed),C(e)}function A(e){e.U.addGeoJSON("sport-and-rec"),e.U.addCircle("sport-and-rec-point","sport-and-rec",{circleColor:"green",circleStrokeColor:"darkgreen",circleStrokeWidth:1}),e.U.addGeoJSON("facility-catchment"),e.U.addLine("catchments","facility-catchment",{lineColor:"green",lineOpacity:.5,lineDasharray:[2,2],visibility:"none"}),e.U.addCircle("facility-highlight","sport-and-rec",{circleColor:"transparent",circleStrokeColor:"yellow",circleStrokeWidth:3,circleRadius:20,filter:!1}),e.U.addSymbol("sport-and-rec-labels","sport-and-rec",{textField:"{FacilityName}",minzoom:15,textAnchor:"left",textOffset:[.5,0],textColor:"green",textJustify:"left"}),e.U.addGeoJSON("vicmap-sport"),m.a.get("data/vicmap_sports.geojson").then(function(t){e.U.setData("vicmap-sport",t.data)}),m.a.get("data/sport_and_rec.geojson").then(function(t){window.Map.facilities=t.data,e.U.setData("sport-and-rec",t.data)}),e.U.addGeoJSON("time-catchment"),e.U.addFill("time-catchment","time-catchment",{fillColor:"hsla(240,90%,30%,0.2)"}),e.U.addGeoJSON("facility-voronoi"),e.U.addLine("facilityVoronoi","facility-voronoi",{lineColor:"#333",visibility:"none"});new y.a({tableUrl:"data/dwelling_structure.csv",tableNumericField:"Total selected",tableIdField:"SA4_code_2011",geometryTiles:["https://vector-tiles.terria.io/FID_SA4_2011_AUST/{z}/{x}/{y}.pbf"],geometryIdField:"SA4_CODE11",sourceLayer:"FID_SA4_2011_AUST",binCount:10,colorScheme:"PuBu",legendElement:"#Legend .bar",paint:{"fill-opacity":.3},layout:{visibility:"none"},before:"sport-and-rec-point",layerId:"population"}).addTo(e);e.U.hoverPointer("sport-and-rec-point"),e.on("mouseover","sport-and-rec-point",function(e){window.FeatureInfo.properties=e.features[0].properties}),e.on("mouseout","sport-and-rec-point",function(e){window.FeatureInfo.properties=void 0}),e.on("click","sport-and-rec-point",function(t){x(e,t.features[0])}),window.LayerSelector.population=!1,window.LayerSelector.catchments=!1}var k=S,I=(i("c53c"),i("2877")),U=Object(I["a"])(k,o,c,!1,null,"30da0182",null);U.options.__file="Map.vue";var L=U.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.properties?i("div",{attrs:{id:"FeatureInfo"}},[i("table",[i("tr",[i("th",[e._v("Name")]),i("td",[e._v(e._s(e.properties.FacilityName))])]),i("tr",[i("th",[e._v("Sports")]),i("td",[e._v(e._s(e.properties.SportsPlayed))])]),e.properties.NumberFieldCourts?i("tr",[i("th",[e._v("Fields")]),i("td",[e._v(e._s(e.properties.NumberFieldCourts))])]):e._e()])]):e._e()},T=[],P={name:"FeatureInfo",data:function(){return{properties:void 0}},created:function(){window.FeatureInfo=this}},N=P,j=(i("a41a"),Object(I["a"])(N,O,T,!1,null,"61332db0",null));j.options.__file="FeatureInfo.vue";var M=j.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("legend",{attrs:{id:"Legend"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.population,expression:"population"}],staticClass:"population"},[i("h4",[e._v("Population")]),i("div",{staticClass:"bar"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.facilityCatchment,expression:"facilityCatchment"}],staticClass:"facility-catchment"},[i("h4",[e._v("Travel time")]),i("div",{staticClass:"ramp"},[i("div",{staticClass:"value"},[i("div",{staticClass:"box",style:{backgroundColor:"hsla(240,90%,30%,0.6)"}}),i("caption",[e._v("5 minutes")])]),i("div",{staticClass:"value"},[i("div",{staticClass:"box",style:{background:"hsla(240,90%,30%,0.4)"}}),i("caption",[e._v("10 minutes")])]),i("div",{staticClass:"value"},[i("div",{staticClass:"box",style:{background:"hsla(240,90%,30%,0.2)"}}),i("caption",[e._v("15 minutes")])])])])])},D=[],E={name:"Legend",data:function(){return{population:!0,facilityCatchment:!0}},created:function(){window.Legend=this},methods:{toggle:function(e,t){this[e]=t}}},G=E,J=(i("a7e2"),i("2a82"),Object(I["a"])(G,$,D,!1,null,"50e5f656",null));J.options.__file="Legend.vue";var R=J.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"LayerSelector"}},[i("h2",[e._v("Layers")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.population,expression:"layers.population"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.population)?e._i(e.layers.population,null)>-1:e.layers.population},on:{change:function(t){var i=e.layers.population,a=t.target,n=!!a.checked;if(Array.isArray(i)){var r=null,o=e._i(i,r);a.checked?o<0&&e.$set(e.layers,"population",i.concat([r])):o>-1&&e.$set(e.layers,"population",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.layers,"population",n)}}}),e._v("Population")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.catchments,expression:"layers.catchments"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.catchments)?e._i(e.layers.catchments,null)>-1:e.layers.catchments},on:{change:function(t){var i=e.layers.catchments,a=t.target,n=!!a.checked;if(Array.isArray(i)){var r=null,o=e._i(i,r);a.checked?o<0&&e.$set(e.layers,"catchments",i.concat([r])):o>-1&&e.$set(e.layers,"catchments",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.layers,"catchments",n)}}}),e._v("2km Catchments")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.facilityVoronoi,expression:"layers.facilityVoronoi"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.facilityVoronoi)?e._i(e.layers.facilityVoronoi,null)>-1:e.layers.facilityVoronoi},on:{change:function(t){var i=e.layers.facilityVoronoi,a=t.target,n=!!a.checked;if(Array.isArray(i)){var r=null,o=e._i(i,r);a.checked?o<0&&e.$set(e.layers,"facilityVoronoi",i.concat([r])):o>-1&&e.$set(e.layers,"facilityVoronoi",i.slice(0,o).concat(i.slice(o+1)))}else e.$set(e.layers,"facilityVoronoi",n)}}}),e._v("Facility voronoi polygons")])])},z=[],B=i("a4bb"),W=i.n(B),Q={name:"LayerSelector",data:function(){return{layers:{}}},created:function(){window.LayerSelector=this},methods:{toggle:function(e){}},watch:{layers:{handler:function(e){for(var t=W()(this.layers),i=0;i<t.length;i++){var a=t[i];window.Legend.toggle(a,this.layers[a]),window.map.isStyleLoaded()&&window.Map.toggleLayer(a,this.layers[a])}},deep:!0}}},q=Q,H=(i("0e59"),Object(I["a"])(q,V,z,!1,null,"5f82e684",null));H.options.__file="LayerSelector.vue";var Z=H.exports,K=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.facility?i("div",{attrs:{id:"FacilityInfo"}},[i("h3",[e._v(e._s(e.facility.properties.FacilityName))]),i("table",[i("tr",[i("th",[e._v("Sports")]),i("td",[e._v(e._s(e.p.SportsPlayed))])]),i("tr",[i("th",[e._v("Remoteness")]),i("td",[e._v(e._s(e.remotenessArea))])]),i("tr",[i("th",[e._v("LGA")]),i("td",[e._v(e._s(e.lga))])])]),i("h4",[e._v("Nearest "+e._s(e.p.SportsPlayed)+" facilities")]),i("table",e._l(e.nearest,function(t){return i("tr",[i("td",{staticClass:"distance"},[e._v(e._s(Math.round(t._distance))+" km")]),i("td",[e._v(e._s(t.properties.FacilityName)+" ")])])}),0),i("Tools")],1):e._e()},X=[],Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"Tools"}},[i("h3",[e._v("Tools")]),i("button",{on:{click:e.showTimeCatchment}},[e._v("Show driving catchment")])])},ee=[],te={name:"Tools",data:function(){return{}},created:function(){window.Tools=this},methods:{showTimeCatchment:function(){window.Map.updateTimeCatchment()}}},ie=te,ae=(i("7f39"),Object(I["a"])(ie,Y,ee,!1,null,"0b90fdfd",null));ae.options.__file="Tools.vue";var ne=ae.exports,re=i("3f94").queryLngLat,oe={name:"FacilityInfo",components:{Tools:ne},data:function(){return{facility:void 0,nearest:[],remotenessArea:void 0,lga:void 0}},created:function(){window.FacilityInfo=this},watch:{facility:function(){var e=this,t=this.facility.geometry.coordinates;re("https://vector-tiles.terria.io/FID_RA_2011_AUST/{z}/{x}/{y}.pbf",t,11,"FID_RA_2011_AUST").then(function(t){return e.remotenessArea=t.features[0].properties.RA_NAME11}),re("https://vector-tiles.terria.io/FID_LGA_2011_AUST/{z}/{x}/{y}.pbf",t,11,"FID_LGA_2011_AUST").then(function(t){return e.lga=t.features[0].properties.LGA_NAME11}),this.nearest=window.Map.nearestSimilar(this.facility)}},computed:{p:function(){return this.facility.properties}}},ce=oe,se=(i("5c88"),Object(I["a"])(ce,K,X,!1,null,"5f313fbb",null));se.options.__file="FacilityInfo.vue";var le=se.exports,ue={name:"app",components:{Map:L,FeatureInfo:M,Legend:R,LayerSelector:Z,FacilityInfo:le},mounted:function(){}},de=ue,pe=(i("034f"),Object(I["a"])(de,n,r,!1,null,null,null));pe.options.__file="App.vue";var fe=pe.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(fe)}}).$mount("#app")},"5c88":function(e,t,i){"use strict";var a=i("3308"),n=i.n(a);n.a},"64a9":function(e,t,i){},"7f39":function(e,t,i){"use strict";var a=i("13ec"),n=i.n(a);n.a},a41a:function(e,t,i){"use strict";var a=i("04b3"),n=i.n(a);n.a},a7e2:function(e,t,i){"use strict";var a=i("dcf0"),n=i.n(a);n.a},c53c:function(e,t,i){"use strict";var a=i("ee0f"),n=i.n(a);n.a},dcf0:function(e,t,i){},ee0f:function(e,t,i){}});
//# sourceMappingURL=app.47d850fb.js.map