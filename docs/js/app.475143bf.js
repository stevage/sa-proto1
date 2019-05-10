(function(e){function t(t){for(var i,o,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)o=c[d],n[o]&&p.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("64a9"),n=a.n(i);n.a},"04b3":function(e,t,a){},"0e59":function(e,t,a){"use strict";var i=a("3848"),n=a.n(i);n.a},1:function(e,t){},"13ec":function(e,t,a){},2:function(e,t){},"2a82":function(e,t,a){"use strict";var i=a("536d"),n=a.n(i);n.a},"2fd0":function(e,t,a){},3:function(e,t){},3308:function(e,t,a){},3848:function(e,t,a){},4:function(e,t){},5:function(e,t){},"536d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),a("div",{attrs:{id:"middle"}},[a("div",{attrs:{id:"sidebar"}},[a("FacilityInfo"),a("LayerSelector")],1),a("div",{attrs:{id:"map-container"}},[a("Map"),a("FeatureInfo"),a("Legend")],1)]),a("div",{attrs:{id:"bottom"}})])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"top"}},[a("h1",[e._v("SportAus Data Platform Prototype #1")])])}],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}})},c=[],s=(a("96cf"),a("3b8d")),l=(a("55dd"),a("e192")),u=a.n(l),d=a("8936"),p=a.n(d),f=a("fb1a"),y=a.n(f),v=a("bc3a"),m=a.n(v),h=(a("2963"),a("ac6d"),a("0321").promisify),_=(h(a("2ebd")),a("595b").circle),b=a("595b").voronoi,w=a("6e1d")(-30),g={data:function(){return{facilities:{features:[]},activeSport:void 0}},mounted:function(){u.a.accessToken="pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw";var e=new u.a.Map({container:"map",center:[145,-37.8],zoom:12,style:"mapbox://styles/mapbox/light-v9"});p.a.init(e),window.map=e,window.Map=this,e.on("load",function(){return C(e)})},computed:{similarFacilities:function(){var e=this;return this.facilities.features.filter(function(t){return t.properties.SportsPlayed===e.activeSport})}},methods:{toggleLayer:function(e,t){window.map.U.toggle(e,t)},nearestSimilar:function(e){return this.similarFacilities.map(function(t){return t._distance=w.distance(e.geometry.coordinates,t.geometry.coordinates),t}).sort(function(e,t){return e._distance-t._distance}).slice(1,6)},updateTimeCatchment:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:window.map.U.setData("time-catchment",{type:"FeatureCollection",features:[]}),a=window.FacilityInfo.facility.geometry.coordinates,e.next=8;break;case 5:t=e.sent,e.next=12;break;case 8:return e.next=10,m.a.get("https://api.mapbox.com/isochrone/v1/mapbox/driving/".concat(a),{params:{contours_minutes:"5,10,15",access_token:u.a.accessToken,polygons:!0,denoise:.5}});case 10:i=e.sent,t=i.data;case 12:window.map.U.setData("time-catchment",t);case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};function S(e,t){window.Map.activeSport=t,e.U.setCircleColor("sport-and-rec-point",{property:"SportsPlayed",type:"categorical",stops:[[t,"hsl(150,100%,70%)"]],default:"green"}),e.U.setCircleRadius("sport-and-rec-point",{property:"SportsPlayed",type:"categorical",stops:[[t,10]],default:5});var a=2;e.U.setData("facility-catchment",{type:"FeatureCollection",features:window.Map.similarFacilities.map(function(e){return _(e.geometry.coordinates,a)})})}function F(e){var t=b({type:"FeatureCollection",features:window.Map.similarFacilities},{bbox:[141,-39,150,-34]});t.features=t.features.filter(Boolean),e.U.setData("facility-voronoi",t)}function x(e,t){window.FacilityInfo.facility=t,console.log(t.properties),e.setFilter("facility-highlight",["==","OBJECTID",t.properties.OBJECTID]),S(e,t.properties.SportsPlayed),F(e)}function C(e){e.U.addGeoJSON("sport-and-rec"),e.U.addCircle("sport-and-rec-point","sport-and-rec",{circleColor:"green",circleStrokeColor:"darkgreen",circleStrokeWidth:1}),e.U.addGeoJSON("facility-catchment"),e.U.addLine("catchments","facility-catchment",{lineColor:"green",lineOpacity:.5,lineDasharray:[2,2],visibility:"none"}),e.U.addCircle("facility-highlight","sport-and-rec",{circleColor:"transparent",circleStrokeColor:"yellow",circleStrokeWidth:3,circleRadius:20,filter:!1}),e.U.addSymbol("sport-and-rec-labels","sport-and-rec",{textField:"{FacilityName}",minzoom:15,textAnchor:"left",textOffset:[.5,0],textColor:"green",textJustify:"left"}),e.U.addGeoJSON("vicmap-sport"),m.a.get("data/vicmap_sports.geojson").then(function(t){e.U.setData("vicmap-sport",t.data)}),m.a.get("data/sport_and_rec.geojson").then(function(t){window.Map.facilities=t.data,e.U.setData("sport-and-rec",t.data)}),e.U.addGeoJSON("time-catchment"),e.U.addFill("time-catchment","time-catchment",{fillColor:"hsla(240,90%,30%,0.2)"}),e.U.addGeoJSON("facility-voronoi"),e.U.addLine("facilityVoronoi","facility-voronoi",{lineColor:"#333",visibility:"none"});new y.a({tableUrl:"data/dwelling_structure.csv",tableNumericField:"Total selected",tableIdField:"SA4_code_2011",geometryTiles:["https://vector-tiles.terria.io/FID_SA4_2011_AUST/{z}/{x}/{y}.pbf"],geometryIdField:"SA4_CODE11",sourceLayer:"FID_SA4_2011_AUST",binCount:10,colorScheme:"PuBu",legendElement:"#Legend .bar",paint:{"fill-opacity":.3},layout:{visibility:"none"},before:"sport-and-rec-point",layerId:"population"}).addTo(e);e.U.hoverPointer("sport-and-rec-point"),e.on("mouseover","sport-and-rec-point",function(e){window.FeatureInfo.properties=e.features[0].properties}),e.on("mouseout","sport-and-rec-point",function(e){window.FeatureInfo.properties=void 0}),e.on("click","sport-and-rec-point",function(t){x(e,t.features[0])}),window.LayerSelector.population=!1,window.LayerSelector.catchments=!1}var A=g,k=(a("ed8c"),a("2877")),I=Object(k["a"])(A,o,c,!1,null,"c6aa288a",null);I.options.__file="Map.vue";var U=I.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.properties?a("div",{attrs:{id:"FeatureInfo"}},[a("table",[a("tr",[a("th",[e._v("Name")]),a("td",[e._v(e._s(e.properties.FacilityName))])]),a("tr",[a("th",[e._v("Sports")]),a("td",[e._v(e._s(e.properties.SportsPlayed))])]),e.properties.NumberFieldCourts?a("tr",[a("th",[e._v("Fields")]),a("td",[e._v(e._s(e.properties.NumberFieldCourts))])]):e._e()])]):e._e()},O=[],T={name:"FeatureInfo",data:function(){return{properties:void 0}},created:function(){window.FeatureInfo=this}},P=T,N=(a("a41a"),Object(k["a"])(P,L,O,!1,null,"61332db0",null));N.options.__file="FeatureInfo.vue";var j=N.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("legend",{attrs:{id:"Legend"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.population,expression:"population"}],staticClass:"population"},[a("h4",[e._v("Population")]),a("div",{staticClass:"bar"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.facilityCatchment,expression:"facilityCatchment"}],staticClass:"facility-catchment"},[a("h4",[e._v("Travel time")]),a("div",{staticClass:"ramp"},[a("div",{staticClass:"value"},[a("div",{staticClass:"box",style:{backgroundColor:"hsla(240,90%,30%,0.6)"}}),a("caption",[e._v("5 minutes")])]),a("div",{staticClass:"value"},[a("div",{staticClass:"box",style:{background:"hsla(240,90%,30%,0.4)"}}),a("caption",[e._v("10 minutes")])]),a("div",{staticClass:"value"},[a("div",{staticClass:"box",style:{background:"hsla(240,90%,30%,0.2)"}}),a("caption",[e._v("15 minutes")])])])])])},$=[],D={name:"Legend",data:function(){return{population:!0,facilityCatchment:!0}},created:function(){window.Legend=this},methods:{toggle:function(e,t){this[e]=t}}},E=D,G=(a("a7e2"),a("2a82"),Object(k["a"])(E,M,$,!1,null,"50e5f656",null));G.options.__file="Legend.vue";var J=G.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"LayerSelector"}},[a("h2",[e._v("Layers")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.population,expression:"layers.population"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.population)?e._i(e.layers.population,null)>-1:e.layers.population},on:{change:function(t){var a=e.layers.population,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);i.checked?o<0&&e.$set(e.layers,"population",a.concat([r])):o>-1&&e.$set(e.layers,"population",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.layers,"population",n)}}}),e._v("Population")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.catchments,expression:"layers.catchments"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.catchments)?e._i(e.layers.catchments,null)>-1:e.layers.catchments},on:{change:function(t){var a=e.layers.catchments,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);i.checked?o<0&&e.$set(e.layers,"catchments",a.concat([r])):o>-1&&e.$set(e.layers,"catchments",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.layers,"catchments",n)}}}),e._v("2km Catchments")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.layers.facilityVoronoi,expression:"layers.facilityVoronoi"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.layers.facilityVoronoi)?e._i(e.layers.facilityVoronoi,null)>-1:e.layers.facilityVoronoi},on:{change:function(t){var a=e.layers.facilityVoronoi,i=t.target,n=!!i.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);i.checked?o<0&&e.$set(e.layers,"facilityVoronoi",a.concat([r])):o>-1&&e.$set(e.layers,"facilityVoronoi",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.layers,"facilityVoronoi",n)}}}),e._v("Facility voronoi polygons")])])},V=[],z=a("a4bb"),B=a.n(z),W={name:"LayerSelector",data:function(){return{layers:{}}},created:function(){window.LayerSelector=this},methods:{toggle:function(e){}},watch:{layers:{handler:function(e){for(var t=B()(this.layers),a=0;a<t.length;a++){var i=t[a];window.Legend.toggle(i,this.layers[i]),window.map.isStyleLoaded()&&window.Map.toggleLayer(i,this.layers[i])}},deep:!0}}},Q=W,q=(a("0e59"),Object(k["a"])(Q,R,V,!1,null,"5f82e684",null));q.options.__file="LayerSelector.vue";var H=q.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.facility?a("div",{attrs:{id:"FacilityInfo"}},[a("h3",[e._v(e._s(e.facility.properties.FacilityName))]),a("table",[a("tr",[a("th",[e._v("Sports")]),a("td",[e._v(e._s(e.p.SportsPlayed))])]),a("tr",[a("th",[e._v("Remoteness")]),a("td",[e._v(e._s(e.remotenessArea))])]),a("tr",[a("th",[e._v("LGA")]),a("td",[e._v(e._s(e.lga))])])]),a("h4",[e._v("Nearest "+e._s(e.p.SportsPlayed)+" facilities")]),a("table",e._l(e.nearest,function(t){return a("tr",[a("td",{staticClass:"distance"},[e._v(e._s(Math.round(t._distance))+" km")]),a("td",[e._v(e._s(t.properties.FacilityName)+" ")])])}),0),a("Tools")],1):e._e()},K=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Tools"}},[a("h3",[e._v("Tools")]),a("button",{on:{click:e.showTimeCatchment}},[e._v("Show driving catchment")])])},Y=[],ee={name:"Tools",data:function(){return{}},created:function(){window.Tools=this},methods:{showTimeCatchment:function(){window.Map.updateTimeCatchment()}}},te=ee,ae=(a("7f39"),Object(k["a"])(te,X,Y,!1,null,"0b90fdfd",null));ae.options.__file="Tools.vue";var ie=ae.exports,ne=a("3f94").queryLngLat,re={name:"FacilityInfo",components:{Tools:ie},data:function(){return{facility:void 0,nearest:[],remotenessArea:void 0,lga:void 0}},created:function(){window.FacilityInfo=this},watch:{facility:function(){var e=this,t=this.facility.geometry.coordinates;ne("https://vector-tiles.terria.io/FID_RA_2011_AUST/{z}/{x}/{y}.pbf",t,11,"FID_RA_2011_AUST").then(function(t){return e.remotenessArea=t.features[0].properties.RA_NAME11}),ne("https://vector-tiles.terria.io/FID_LGA_2011_AUST/{z}/{x}/{y}.pbf",t,11,"FID_LGA_2011_AUST").then(function(t){return e.lga=t.features[0].properties.LGA_NAME11}),this.nearest=window.Map.nearestSimilar(this.facility)}},computed:{p:function(){return this.facility.properties}}},oe=re,ce=(a("5c88"),Object(k["a"])(oe,Z,K,!1,null,"5f313fbb",null));ce.options.__file="FacilityInfo.vue";var se=ce.exports,le={name:"app",components:{Map:U,FeatureInfo:j,Legend:J,LayerSelector:H,FacilityInfo:se},mounted:function(){}},ue=le,de=(a("034f"),Object(k["a"])(ue,n,r,!1,null,null,null));de.options.__file="App.vue";var pe=de.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(pe)}}).$mount("#app")},"5c88":function(e,t,a){"use strict";var i=a("3308"),n=a.n(i);n.a},"64a9":function(e,t,a){},"7f39":function(e,t,a){"use strict";var i=a("13ec"),n=a.n(i);n.a},a41a:function(e,t,a){"use strict";var i=a("04b3"),n=a.n(i);n.a},a7e2:function(e,t,a){"use strict";var i=a("dcf0"),n=a.n(i);n.a},dcf0:function(e,t,a){},ed8c:function(e,t,a){"use strict";var i=a("2fd0"),n=a.n(i);n.a}});
//# sourceMappingURL=app.475143bf.js.map