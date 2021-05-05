/*
 Highcharts JS v9.1.0 (2021-05-03)

 Highcharts cylinder module

 (c) 2010-2021 Kacper Madej

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/cylinder",["highcharts","highcharts/highcharts-3d"],function(h){a(h);a.Highcharts=h;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function h(a,f,b,n){a.hasOwnProperty(f)||(a[f]=n.apply(null,b))}a=a?a._modules:{};h(a,"Series/Cylinder/CylinderPoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,
f){var b=this&&this.__extends||function(){var a=function(b,m){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var l in b)b.hasOwnProperty(l)&&(a[l]=b[l])};return a(b,m)};return function(b,m){function p(){this.constructor=b}a(b,m);b.prototype=null===m?Object.create(m):(p.prototype=m.prototype,new p)}}();f=f.extend;a=function(a){function p(){var b=null!==a&&a.apply(this,arguments)||this;b.options=void 0;b.series=void 0;return b}b(p,a);return p}(a.seriesTypes.column.prototype.pointClass);
f(a.prototype,{shapeType:"cylinder"});return a});h(a,"Series/Cylinder/CylinderComposition.js",[a["Core/Color/Color.js"],a["Core/Globals.js"],a["Extensions/Math3D.js"],a["Core/Utilities.js"]],function(a,f,b,n){var h=a.parse,m=f.charts,p=f.deg2rad;a=f.Renderer.prototype;var x=b.perspective;b=n.merge;var l=n.pick,g=a.cuboidPath,q=function(c){return!c.some(function(c){return"C"===c[0]})};n=b(a.elements3d.cuboid,{parts:["top","bottom","front","back"],pathType:"cylinder",fillSetter:function(c){this.singleSetterForParts("fill",
null,{front:c,back:c,top:h(c).brighten(.1).get(),bottom:h(c).brighten(-.1).get()});this.color=this.fill=c;return this}});a.elements3d.cylinder=n;a.cylinder=function(c){return this.element3d("cylinder",c)};a.cylinderPath=function(c){var a=m[this.chartIndex],e=g.call(this,c),d=!e.isTop,b=!e.isFront,l=this.getCylinderEnd(a,c);c=this.getCylinderEnd(a,c,!0);return{front:this.getCylinderFront(l,c),back:this.getCylinderBack(l,c),top:l,bottom:c,zIndexes:{top:d?3:0,bottom:d?0:3,front:b?2:1,back:b?1:2,group:e.zIndexes.group}}};
a.getCylinderFront=function(c,a){c=c.slice(0,3);if(q(a)){var e=a[0];"M"===e[0]&&(c.push(a[2]),c.push(a[1]),c.push(["L",e[1],e[2]]))}else{e=a[0];var d=a[1];a=a[2];"M"===e[0]&&"C"===d[0]&&"C"===a[0]&&(c.push(["L",a[5],a[6]]),c.push(["C",a[3],a[4],a[1],a[2],d[5],d[6]]),c.push(["C",d[3],d[4],d[1],d[2],e[1],e[2]]))}c.push(["Z"]);return c};a.getCylinderBack=function(a,b){var c=[];if(q(a)){var d=a[0],l=a[2];"M"===d[0]&&"L"===l[0]&&(c.push(["M",l[1],l[2]]),c.push(a[3]),c.push(["L",d[1],d[2]]))}else"C"===
a[2][0]&&c.push(["M",a[2][5],a[2][6]]),c.push(a[3],a[4]);q(b)?(d=b[0],"M"===d[0]&&(c.push(["L",d[1],d[2]]),c.push(b[3]),c.push(b[2]))):(a=b[2],d=b[3],b=b[4],"C"===a[0]&&"C"===d[0]&&"C"===b[0]&&(c.push(["L",b[5],b[6]]),c.push(["C",b[3],b[4],b[1],b[2],d[5],d[6]]),c.push(["C",d[3],d[4],d[1],d[2],a[5],a[6]])));c.push(["Z"]);return c};a.getCylinderEnd=function(a,b,e){var c=b.width;c=void 0===c?0:c;var f=b.height,g=void 0===f?0:f;f=b.alphaCorrection;var h=void 0===f?0:f;f=l(b.depth,c,0);var k=Math.min(c,
f)/2;h=p*(a.options.chart.options3d.beta-90+h);e=(b.y||0)+(e?g:0);g=.5519*k;var m=c/2+(b.x||0),q=f/2+(b.z||0),n=[{x:0,y:e,z:k},{x:g,y:e,z:k},{x:k,y:e,z:g},{x:k,y:e,z:0},{x:k,y:e,z:-g},{x:g,y:e,z:-k},{x:0,y:e,z:-k},{x:-g,y:e,z:-k},{x:-k,y:e,z:-g},{x:-k,y:e,z:0},{x:-k,y:e,z:g},{x:-g,y:e,z:k},{x:0,y:e,z:k}],v=Math.cos(h),u=Math.sin(h),r,t;n.forEach(function(a,c){r=a.x;t=a.z;n[c].x=r*v-t*u+m;n[c].z=t*v+r*u+q});a=x(n,a,!0);return 2.5>Math.abs(a[3].y-a[9].y)&&2.5>Math.abs(a[0].y-a[6].y)?this.toLinePath([a[0],
a[3],a[6],a[9]],!0):this.getCurvedPath(a)};a.getCurvedPath=function(a){var c=[["M",a[0].x,a[0].y]],b=a.length-2,d;for(d=1;d<b;d+=3)c.push(["C",a[d].x,a[d].y,a[d+1].x,a[d+1].y,a[d+2].x,a[d+2].y]);return c}});h(a,"Series/Cylinder/CylinderSeries.js",[a["Series/Cylinder/CylinderPoint.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,f,b){var h=this&&this.__extends||function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=
c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(b,g)};return function(b,g){function f(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(f.prototype=g.prototype,new f)}}(),p=f.seriesTypes.column,m=b.extend,w=b.merge;b=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}h(b,a);b.defaultOptions=w(p.defaultOptions);return b}(p);m(b.prototype,{pointClass:a});f.registerSeriesType("cylinder",
b);"";return b});h(a,"masters/modules/cylinder.src.js",[],function(){})});
//# sourceMappingURL=cylinder.js.map