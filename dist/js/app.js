!function e(t,r,n){function a(l,i){if(!r[l]){if(!t[l]){var c="function"==typeof require&&require;if(!i&&c)return c(l,!0);if(o)return o(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var d=r[l]={exports:{}};t[l][0].call(d.exports,function(e){var r=t[l][1][e];return a(r||e)},d,d.exports,e,t,r,n)}return r[l].exports}for(var o="function"==typeof require&&require,l=0;l<n.length;l++)a(n[l]);return a}({1:[function(e,t,r){"use strict";function n(){x=L.map("map").setView(k["台南"],14);L.gridLayer.googleMutant({type:"roadmap",styles:v.default}).addTo(x);$("#map").hide(),$("#map").fadeIn();var e=L.control({position:"bottomright"});e.onAdd=function(){var e=L.DomUtil.create("div","info legend"),t=[0,1,50,100,150,200];e.innerHTML+='<span class = "legend-header">捕獲數（個）<hr>';for(var r=0;r<t.length;r++)e.innerHTML+=0===t[r]?'<div class=" barrel_legend" id="grade_'+r+'"><i style="background:'+m(t[r])+'"></i>'+t[r]+"<br></div>":'<div class=" barrel_legend" id="grade_'+r+'"><i style="background:'+m(t[r])+'"></i>'+t[r]+(t[r+1]?" &ndash; "+(t[r+1]-1)+"<br></div>":" <br></div>");return e.innerHTML+='<div class=" barrel_legend" id="grade_other"><i style="background:#cccccc"></i>無資料<br></div>',e},e.addTo(x)}function a(){var e={},t=moment($(".range-start").val()),r=moment($(".range-end").val()),n=T.slice().filter(function(e){var n=moment.tz(e.created_at,"Asia/Taipei");return n<=r&&n>=t});""!==t&&""!==r&&(Y.forEach(function(n){var a=moment(n);if(a>=t&&a<=r){var o=a.format("YYYY-MM-DD");e[o]=M(o)}}),o(e),s(n))}function o(e){var t=!(""===$(".range-start").val()),r=!(""===$(".range-end").val()),n=t?moment($(".range-start").val()).format("YYYY-MM-DD"):"未選擇起始日期",a=r?moment($(".range-end").val()).format("YYYY-MM-DD"):"未選擇結束日期",o={};if($(".map-container .list-group").empty(),d(),0===i(e).length){var s="沒有資料";r&&t||(s=""),c(n+" ~ "+a+" "+s)}else c(n+" ~ "+a+" 區間資料");for(var p in e){var f=e[p];for(var m in f)!function(e){var t=f[e],r=g.find(function(t){return t.lamp_id===e});l(E(r.place_id),r,t,p),o[r.lamp_id]||(o[r.lamp_id]={},o[r.lamp_id].lamp=r,o[r.lamp_id].count=0);var n=o[r.lamp_id].count;o[r.lamp_id].count=n+t}(m)}u(o),$("#map").fadeIn()}function l(e,t,r,n){var a='<a class="list-group-item ">\n        <h4 class="list-group-item-heading"><span>'+t.lamp_id+"@"+e+"</span><span>&#9889;"+r+'</span></h4>\n        <p class="list-group-item-text"> '+moment(n).format("LL")+"</p>\n      </a>";$(".map-container .list-group").append(a)}function i(e){try{return Object.keys(e)}catch(e){return[]}}function c(e){var t=$("<h3>"+e+"</h3>");$(".list-group").empty(),$(".list-group").append(t),t.hide(),t.fadeIn("slow")}function s(e){e.forEach(function(e){var t=[e.mcc_center[1],e.mcc_center[0]],r=_,n=L.circle(t,{radius:r});D.push(n),n.addTo(x)})}function d(){w.forEach(function(e){x.removeLayer(e)}),D.forEach(function(e){e.remove()}),D=[],$("#map").hide()}function u(e){for(var t in e){var r=e[t].lamp,n=e[t].count,a=r.lamp_location[1],o=r.lamp_location[0],l=L.icon({iconUrl:p(n),iconSize:[45,80],popupAnchor:[0,-40],iconAnchor:[22,60],className:f(n)}),i="<table>\n      <tr>\n        <th> ID </th>\n        <td> "+r.lamp_id+" </td>\n      </tr>\n      <tr>\n        <th>地點</th>\n        <td>"+E(r.place_id)+"</td>\n      </tr>\n        <tr>\n        <th>捕獲</th>\n        <td>"+n+"</td>\n      </tr>\n      </table>",c=L.marker([a,o],{icon:l}).bindPopup(i).addTo(x);w.push(c)}if(w.length>0){var s=new L.featureGroup(w);console.log(x),x.fitBounds(s.getBounds(),{maxZoom:17})}}function p(e){return"images/"+(0===e?"legend1":e>0&&e<=49?"legend2":e>=50&&e<=99?"legend3":e>=100&&e<=149?"legend4":e>=150&&e<=199?"legend5":e>=200?"legend6":"legend_undefined")+".svg"}function f(e){return 0===e?"grade_0":e>0&&e<=49?"grade_1":e>=50&&e<=99?"grade_2":e>=100&&e<=149?"grade_3":e>=150&&e<=199?"grade_4":e>=200?"grade_5":"grade_other"}function m(e){var t=void 0;return 0===e?t="#00FF9D":e>0&&e<=49?t="#33CC7E":e>=50&&e<=99?t="#66995E":e>=100&&e<=149?t="#99663F":e>=150&&e<=199?t="#CC331F":e>=200&&(t="#FF0000"),t}var y=function(){function e(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&i.return&&i.return()}finally{if(a)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){return e&&e.__esModule?e:{default:e}}(e("./mapStyle")),g=[],T=[],h=[],b=[],_=void 0,x=void 0,w=[],D=[],E=void 0,M=void 0,Y=void 0,k={"台南":[22.9971,120.1926],"高雄":[22.6397615,120.2999183],"屏東":[22.667431,120.486307]},F=function(e){var t={};return e.forEach(function(e){t[e.place_id]=e.place_name}),function(e){return t[e]}},O=function(e){var t={};Y.forEach(function(e){t[e]={}});for(var r in e){var n=e[r];for(var a in n)t[r][a]=+n[a].sum}return function(e){return t[e]}};moment.locale("zh-tw"),$(document).ready(function(){c("資料載入中..."),$(".range-start, .range-end").datepicker({autoclose:!0,zIndexOffset:1e3,format:"yyyy-mm-dd",disableTouchKeyboard:!0}).on("changeDate",a);var e=["lamps","rules","mcc","counts","places"].map(function(e){return $.ajax({url:e+".json",dataType:"JSON",type:"GET"})});Promise.all(e).then(function(e){console.log(e);var t=void 0,r=y(e,5);g=r[0],t=r[1],T=r[2],h=r[3],b=r[4],_=t[0].distance_lower_limit,Y=i(h),E=F(b),M=O(h),n(),c("請選擇日期區間")}).catch(function(e){console.log(e),c("資料錯誤："+e.status+" "+e.statusText)})})},{"./mapStyle":2}],2:[function(e,t,r){"use strict";var n=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:-75}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}];t.exports=n},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map
