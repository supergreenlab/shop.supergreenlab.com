"use strict";function asyncGeneratorStep(e,r,t,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void t(e)}s.done?r(i):Promise.resolve(i).then(n,a)}function _asyncToGenerator(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var o=e.apply(r,t);function c(e){asyncGeneratorStep(o,n,a,c,s,"next",e)}function s(e){asyncGeneratorStep(o,n,a,c,s,"throw",e)}c(void 0)})}}_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,new Promise(function(e){return e("Hello, world!")});case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}},e)}))(),$(_asyncToGenerator(regeneratorRuntime.mark(function e(){var r,t,n,a,o,c,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.location.hash.toString().replace("#","").split(",").map(function(e){return e.split(":")}).map(function(e){return{id:e[0],quantity:e[1]?parseInt(e[1]):1}}),e.prev=1,e.next=4,$.ajax({url:"/cart/clear.js",dataType:"json"}).promise();case 4:t=!0,n=!1,a=void 0,e.prev=7,o=r[Symbol.iterator]();case 9:if(t=(c=o.next()).done){e.next=16;break}return s=c.value,e.next=13,$.ajax({url:"/cart/add.js",data:s,dataType:"json"}).promise();case 13:t=!0,e.next=9;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(7),n=!0,a=e.t0;case 22:e.prev=22,e.prev=23,t||null==o.return||o.return();case 25:if(e.prev=25,!n){e.next=28;break}throw a;case 28:return e.finish(25);case 29:return e.finish(22);case 30:window.location.href="/cart",e.next=36;break;case 33:e.prev=33,e.t1=e.catch(1),console.log("error",e.t1);case 36:case"end":return e.stop()}},e,null,[[1,33],[7,18,22,30],[23,,25,29]])})));