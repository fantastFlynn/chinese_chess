!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=6)}([function(n,t,e){var o=e(1);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(3)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(n.exports=e(2)(!0)).push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  color: gold;\n}\nbody {\n  background-color: #eee;\n}\n.gameWrap {\n  display: inline-block;\n  text-align: center;\n  padding: 80px 0 0 80px;\n  border: 3px solid gold;\n}\n.chessboard {\n  font-size: 0;\n  display: inline-block;\n}\n.row {\n  position: relative;\n}\n.row:nth-child(1) .cell {\n  border-top: solid #222 2px;\n}\n.row:nth-child(1) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:last-child {\n  border-top: none;\n}\n.row:nth-child(4) .cell {\n  border-bottom: solid #222 2px;\n}\n.row:nth-child(4) .cell:last-child {\n  border: none;\n}\n.row:nth-child(5)::after {\n  content: '楚河 汉界';\n  font-size: 20px;\n  color: #aaa;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -80px;\n  width: 50%;\n  height: 50%;\n  margin: auto;\n}\n.row:nth-child(5) .cell {\n  border: none;\n  height: 53.33333333px;\n}\n.row:nth-child(5) .cell:first-child {\n  border-left: solid #222 2px;\n}\n.row:nth-child(5) .cell:nth-last-child(2) {\n  border-right: solid #222 2px;\n}\n.row:nth-child(6) .cell {\n  border-top: solid #222 2px;\n}\n.row:nth-child(6) .cell:last-child {\n  border: none;\n}\n.row:last-child .cell {\n  border: none;\n  border-top: solid #222 1px;\n}\n.row:last-child .cell:last-child {\n  border: none;\n}\n.row:nth-last-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-last-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.cell {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: solid #222 1px;\n  position: relative;\n  box-sizing: border-box;\n}\n.cell:first-child {\n  border-left: solid #222 2px;\n}\n.cell:nth-last-child(2) {\n  border-right: solid #222 2px;\n}\n.cell:last-child {\n  border: none;\n}\n.chess {\n  font-size: 25px;\n  font-weight: bold;\n  font-family: kaiti;\n  text-align: center;\n  line-height: 61.53846154px;\n  width: 61.53846154px;\n  height: 61.53846154px;\n  background-color: #ccc;\n  position: absolute;\n  top: -30.76923077px;\n  left: -30.76923077px;\n  user-select: none;\n  opacity: 0;\n  box-sizing: border-box;\n}\n.chess[data-status=normal] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.chess[data-status=active] {\n  opacity: 1;\n  border-radius: 50%;\n  animation: resize 0.5s linear infinite alternate;\n}\n.chess[data-status=move] {\n  opacity: 0.4;\n  cursor: pointer;\n  outline: 1px solid gold;\n}\n.chess[data-status=replace] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid gold;\n}\n@keyframes resize {\n  0% {\n    background-color: gold;\n  }\n  100% {\n    background-color: gray;\n  }\n}\n","",{version:3,sources:["F:/repository/projects/chinese_chess/src/styles/index.less","index.less"],names:[],mappings:"AAAA;EACE,SAAA;EACA,UAAA;EACA,WAAA;ACCF;ADCA;EACE,sBAAA;ACCF;ADWA;EACE,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,sBAAA;ACTF;ADWA;EACE,YAAA;EACA,qBAAA;ACTF;ADWA;EACE,kBAAA;ACTF;ADWA;EACE,0BAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,qBAAA;EACA,yBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,wBAAA;EACA,wBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,wBAAA;EACA,wBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,qBAAA;EACA,yBAAA;ACTF;ADWA;EACE,gBAAA;ACTF;ADWA;EACE,6BAAA;ACTF;ADWA;EACE,YAAA;ACTF;ADWA;EACE,gBAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;ACTF;ADWA;EACE,YAAA;EACA,qBAAA;ACTF;ADWA;EACE,2BAAA;ACTF;ADWA;EACE,4BAAA;ACTF;ADWA;EACE,0BAAA;ACTF;ADWA;EACE,YAAA;ACTF;ADWA;EACE,YAAA;EACA,0BAAA;ACTF;ADWA;EACE,YAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,wBAAA;EACA,wBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,qBAAA;EACA,yBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,qBAAA;EACA,yBAAA;ACTF;ADWA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sBAAA;EACA,cAAA;EACA,wBAAA;EACA,wBAAA;ACTF;ADWA;EACE,qBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;ACTF;ADWA;EACE,2BAAA;ACTF;ADWA;EACE,4BAAA;ACTF;ADWA;EACE,YAAA;ACTF;ADWA;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,0BAAA;EACA,oBAAA;EACA,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;EACA,UAAA;EACA,sBAAA;ACTF;ADWA;EACE,UAAA;EACA,kBAAA;EACA,eAAA;ACTF;ADWA;EACE,UAAA;EACA,kBAAA;EACA,gDAAA;ACTF;ADWA;EACE,YAAA;EACA,eAAA;EACA,uBAAA;ACTF;ADWA;EACE,UAAA;EACA,kBAAA;EACA,eAAA;EACA,sBAAA;ACTF;ADYA;EACE;IACE,sBAAA;ECVF;EDYA;IACE,sBAAA;ECVF;AACF",file:"index.less",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  color: gold;\n}\nbody {\n  background-color: #eee;\n}\n\n@lineColor: #222; \n@cellW: 80px;\n@cellH: 80px;\n@riverH: 1/1.5*@cellH; \n@chessBg: #ccc;\n@chessW: 1/1.3*@cellW;\n@chessH: 1/1.3*@cellH;\n@border: solid @lineColor 1px;\n@border2: solid @lineColor 2px;\n.gameWrap {\n  display: inline-block;\n  text-align: center;\n  padding: @cellH 0 0 @cellW;\n  border: 3px solid gold;\n}\n.chessboard {\n  font-size: 0; \n  display: inline-block;\n}\n.row {\n  position: relative;\n}\n.row:nth-child(1) .cell{\n  border-top: @border2;\n}\n.row:nth-child(1) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:last-child {\n  border-top: none;\n}\n.row:nth-child(4) .cell {\n  border-bottom: @border2;\n}\n.row:nth-child(4) .cell:last-child {\n  border: none;\n}\n.row:nth-child(5)::after {\n  content: '楚河 汉界';\n  font-size: 20px;\n  color: #aaa;\n  position: absolute;\n  top: 0; \n  right: 0; \n  bottom: 0; \n  left: -1*@cellW;\n  width: 50%; \n  height: 50%;\n  margin: auto;\n}\n.row:nth-child(5) .cell {\n  border: none;\n  height: 1*@riverH;\n}\n.row:nth-child(5) .cell:first-child {\n  border-left: @border2;\n}\n.row:nth-child(5) .cell:nth-last-child(2) {\n  border-right: @border2;\n}\n.row:nth-child(6) .cell {\n  border-top: @border2;\n}\n.row:nth-child(6) .cell:last-child {\n  border: none;\n}\n.row:last-child .cell {\n  border: none;\n  border-top: @border;\n}\n.row:last-child .cell:last-child {\n  border: none;\n}\n.row:nth-last-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-last-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid @lineColor;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.cell {\n  display: inline-block;\n  width: 1*@cellW;\n  height: 1*@cellH;\n  border: @border;\n  position: relative;\n  box-sizing: border-box;\n}\n.cell:first-child {\n  border-left: @border2;\n}\n.cell:nth-last-child(2) {\n  border-right: @border2;\n}\n.cell:last-child {\n  border: none;\n}\n.chess {\n  font-size: 25px;\n  font-weight: bold;\n  font-family: kaiti;\n  text-align: center;\n  line-height: 1*@chessH;\n  width: 1*@chessW;\n  height: 1*@chessH;\n  background-color: @chessBg;\n  position: absolute;\n  top: -1/2*@chessH; \n  left: -1/2*@chessW; \n  user-select: none; \n  opacity: 0;\n  box-sizing: border-box;\n}\n.chess[data-status=normal] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.chess[data-status=active] {\n  opacity: 1;\n  border-radius: 50%;\n  animation: resize 0.5s linear infinite alternate;\n}\n.chess[data-status=move] {\n  opacity: 0.4;\n  cursor: pointer;\n  outline: 1px solid gold;\n}\n.chess[data-status=replace] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid gold;\n}\n\n@keyframes resize {\n  0% {\n    background-color: gold;\n  }\n  100% {\n    background-color: gray;\n  }\n}\n","* {\n  margin: 0;\n  padding: 0;\n  color: gold;\n}\nbody {\n  background-color: #eee;\n}\n.gameWrap {\n  display: inline-block;\n  text-align: center;\n  padding: 80px 0 0 80px;\n  border: 3px solid gold;\n}\n.chessboard {\n  font-size: 0;\n  display: inline-block;\n}\n.row {\n  position: relative;\n}\n.row:nth-child(1) .cell {\n  border-top: solid #222 2px;\n}\n.row:nth-child(1) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-child(1) .cell:last-child {\n  border-top: none;\n}\n.row:nth-child(4) .cell {\n  border-bottom: solid #222 2px;\n}\n.row:nth-child(4) .cell:last-child {\n  border: none;\n}\n.row:nth-child(5)::after {\n  content: '楚河 汉界';\n  font-size: 20px;\n  color: #aaa;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: -80px;\n  width: 50%;\n  height: 50%;\n  margin: auto;\n}\n.row:nth-child(5) .cell {\n  border: none;\n  height: 53.33333333px;\n}\n.row:nth-child(5) .cell:first-child {\n  border-left: solid #222 2px;\n}\n.row:nth-child(5) .cell:nth-last-child(2) {\n  border-right: solid #222 2px;\n}\n.row:nth-child(6) .cell {\n  border-top: solid #222 2px;\n}\n.row:nth-child(6) .cell:last-child {\n  border: none;\n}\n.row:last-child .cell {\n  border: none;\n  border-top: solid #222 1px;\n}\n.row:last-child .cell:last-child {\n  border: none;\n}\n.row:nth-last-child(2) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.row:nth-last-child(2) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(4)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: top;\n  transform: rotate(-45deg);\n}\n.row:nth-last-child(3) .cell:nth-child(5)::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  border: 1px solid #222;\n  height: 141.4%;\n  transform-origin: bottom;\n  transform: rotate(45deg);\n}\n.cell {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  border: solid #222 1px;\n  position: relative;\n  box-sizing: border-box;\n}\n.cell:first-child {\n  border-left: solid #222 2px;\n}\n.cell:nth-last-child(2) {\n  border-right: solid #222 2px;\n}\n.cell:last-child {\n  border: none;\n}\n.chess {\n  font-size: 25px;\n  font-weight: bold;\n  font-family: kaiti;\n  text-align: center;\n  line-height: 61.53846154px;\n  width: 61.53846154px;\n  height: 61.53846154px;\n  background-color: #ccc;\n  position: absolute;\n  top: -30.76923077px;\n  left: -30.76923077px;\n  user-select: none;\n  opacity: 0;\n  box-sizing: border-box;\n}\n.chess[data-status=normal] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.chess[data-status=active] {\n  opacity: 1;\n  border-radius: 50%;\n  animation: resize 0.5s linear infinite alternate;\n}\n.chess[data-status=move] {\n  opacity: 0.4;\n  cursor: pointer;\n  outline: 1px solid gold;\n}\n.chess[data-status=replace] {\n  opacity: 1;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 1px solid gold;\n}\n@keyframes resize {\n  0% {\n    background-color: gold;\n  }\n  100% {\n    background-color: gray;\n  }\n}\n"]}])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(l=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var l;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var l=n[r];null!=l[0]&&o[l[0]]||(e&&!l[2]?l[2]=e:e&&(l[2]="("+l[2]+") and ("+e+")"),t.push(l))}},t}},function(n,t,e){var o,r,i={},l=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),A=null,a=0,c=[],d=e(4);function h(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](o.parts[l]);for(;l<o.parts.length;l++)r.parts.push(g(o.parts[l],t))}else{var s=[];for(l=0;l<o.parts.length;l++)s.push(g(o.parts[l],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],l=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[l]?o[l].parts.push(s):e.push(o[l]={id:l,parts:[s]})}return e}function u(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),c.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertAt.before,e);e.insertBefore(t,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=c.indexOf(n);t>=0&&c.splice(t,1)}function f(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return C(t,n.attrs),u(n,t),t}function C(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function g(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var l=a++;e=A||(A=f(t)),o=y.bind(null,e,l,!1),r=y.bind(null,e,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",C(t,n.attrs),u(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var l=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(l),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=f(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){b(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=l()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return h(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var l=e[r];(s=i[l.id]).refs--,o.push(s)}n&&h(p(n,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var A=0;A<s.parts.length;A++)s.parts[A]();delete i[s.id]}}}};var m,E=(m=[],function(n,t){return m[n]=t,m.filter(Boolean).join("\n")});function y(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=E(t,r);else{var i=document.createTextNode(r),l=n.childNodes;l[t]&&n.removeChild(l[t]),l.length?n.insertBefore(i,l[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},,function(n,t,e){"use strict";e.r(t);e(0);let o=document.createElement("div");o.setAttribute("class","chessboard");let r=new class{constructor(n){this._chessTypes={blackCar:{type:"car",name:"车",color:"black",steps:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],range:[[0,0],[9,8]],init:[[0,0],[0,8]]},blackHorse:{type:"horse",name:"马",color:"black",range:[[0,0],[9,8]],steps:[[1,2],[1,-2],[-1,-2],[-1,2],[2,1],[2,-1],[-2,-1],[-2,1]],init:[[0,1],[0,7]]},blackMinister:{type:"minister",name:"相",color:"black",range:[[0,0],[4,8]],steps:[[2,2],[2,-2],[-2,-2],[-2,2]],init:[[0,2],[0,6]]},blackServant:{type:"servant",name:"士",color:"black",range:[[0,3],[2,5]],steps:[[1,1],[1,-1],[-1,-1],[-1,1]],init:[[0,3],[0,5]]},blackKing:{type:"king",name:"将",color:"black",range:[[0,3],[2,5]],steps:[[0,-1],[0,1],[1,0],[-1,0]],init:[[0,4]]},blackGun:{type:"gun",name:"炮",color:"black",range:[[0,0],[9,8]],steps:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],init:[[2,1],[2,7]]},blackSoldier:{type:"soldier",name:"卒",color:"black",range:[[4,0],[9,8]],steps:[[0,1],[0,-1],[1,0],[-1,0]],init:[[3,0],[3,2],[3,4],[3,6],[3,8]]},redSoldier:{type:"soldier",name:"兵",color:"red",range:[[0,0],[5,8]],steps:[[0,1],[0,-1],[1,0],[-1,0]],init:[[6,0],[6,2],[6,4],[6,6],[6,8]]},redGun:{type:"gun",name:"炮",color:"red",range:[[0,0],[9,8]],steps:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[0,-9],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0]],init:[[7,1],[7,7]]},redCar:{type:"car",name:"车",color:"red",range:[[0,0],[9,8]],steps:[[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,-1],[0,-2],[0,-3],[0,-4],[0,-5],[0,-6],[0,-7],[0,-8],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[-1,0],[-2,0],[-3,0],[-4,0],[-5,0],[-6,0],[-7,0],[-8,0],[-9,0]],init:[[9,0],[9,8]]},redHorse:{type:"horse",name:"马",color:"red",range:[[0,0],[9,8]],steps:[[1,2],[1,-2],[-1,-2],[-1,2],[2,1],[2,-1],[-2,-1],[-2,1]],init:[[9,1],[9,7]]},redMinister:{type:"minister",name:"相",color:"red",range:[[5,0],[9,8]],steps:[[2,2],[2,-2],[-2,-2],[-2,2]],init:[[9,2],[9,6]]},redServant:{type:"servant",name:"仕",color:"red",range:[[7,3],[9,5]],steps:[[1,1],[1,-1],[-1,-1],[-1,1]],init:[[9,3],[9,5]]},redKing:{type:"king",name:"帅",color:"red",range:[[7,3],[9,5]],steps:[[0,-1],[0,1],[1,0],[-1,0]],init:[[9,4]]}},this._currentChess=null,this._currentMovables=[],this._currentReplaces=[],this._count=0,this._layout=new Array(10).fill("").map((t,e)=>{let o=document.createElement("div");return o.setAttribute("class","row"),n.appendChild(o),new Array(9).fill("").map((n,t)=>{let r=document.createElement("div");r.setAttribute("class","cell"),o.appendChild(r);let i=document.createElement("div");i.setAttribute("class","chess"),i.dataset.status="blank",r.appendChild(i);let l={elem:i,position:[e,t],name:"",status:"blank"};return this.bindEvent(l),l})}),this.elem=n,this.layoutChess()}layoutChess(){for(var n in this._chessTypes){let t=this._chessTypes[n];t.init.forEach(e=>{let o=this._layout[e[0]][e[1]];this.renderChess(o,{name:t.name,status:"normal",color:t.color,id:n,type:t.type,range:t.range})})}}bindEvent(n){let t=this;n.elem.addEventListener("click",function(e){if("move"===n.status&&t._currentChess)return t.chessRun(t._currentChess,n,!1),void(t._currentChess=null);"replace"!==n.status||t.chessRun(t._currentChess,n,!0)}),n.elem.addEventListener("mousedown",function(e){(t._count%2==0&&"red"===n.color||t._count%2==1&&"black"===n.color)&&("normal"===n.status?(t._currentChess&&"active"===t._currentChess.status&&(t.renderChess(t._currentChess,{status:"normal"}),t.clearStatus()),t.renderChess(n,{status:"active"}),t._currentChess=n,t.chessAblePostion(t._currentChess)):"active"===n.status&&(t.renderChess(n,{status:"normal"}),t._currentChess=null,t.clearStatus()))})}typeIsMovable(n,t,e,o){let r=this,i={car(n,t){if(t[0]===n[0])return(r._layout[t[0]].slice(n[1]+1,t[1]).length?r._layout[t[0]].slice(n[1]+1,t[1]):r._layout[t[0]].slice(t[1]+1,n[1])).every((n,t)=>!n.id);{let e=r._layout.map((n,e)=>n[t[1]]);return(e.slice(n[0]+1,t[0]).length?e.slice(n[0]+1,t[0]):e.slice(t[0]+1,n[0])).every((n,t)=>!n.id)}},horse(n,t){let e=t[0]-n[0],o=t[1]-n[1];return 2===Math.abs(e)?!r._layout[n[0]+e/Math.abs(e)][n[1]].id:!r._layout[n[0]][n[1]+o/Math.abs(o)].id},minister(n,t){let e=t[0]-n[0],o=t[1]-n[1],i=e/Math.abs(e),l=o/Math.abs(o);return!r._layout[n[0]+i][n[1]+l].id},servant:(n,t)=>!0,king:(n,t)=>!0,soldier:(n,t,e)=>"red"===e?n[0]>=5?t[0]-n[0]<0:t[0]-n[0]<=0:n[0]<=4?t[0]-n[0]>0:t[0]-n[0]>=0};return"gun"===n?i.car(t,e):i[n](t,e,o)}typeIsReplace(n,t,e,o){let r=this;return{car:(t,e)=>r.typeIsMovable(n,t,e),horse:(t,e)=>r.typeIsMovable(n,t,e),minister:(t,e)=>r.typeIsMovable(n,t,e),servant:(t,e)=>r.typeIsMovable(n,t,e),king:(t,e)=>r.typeIsMovable(n,t,e),gun(n,t){if(t[0]===n[0]){let e=r._layout[t[0]].slice(n[1]+1,t[1]).length?r._layout[t[0]].slice(n[1]+1,t[1]):r._layout[t[0]].slice(t[1]+1,n[1]),o=0;return e.forEach((n,t)=>{n.id&&o++}),1===o}{let e=r._layout.map((n,e)=>n[t[1]]),o=e.slice(n[0]+1,t[0]).length?e.slice(n[0]+1,t[0]):e.slice(t[0]+1,n[0]),i=0;return o.forEach((n,t)=>{n.id&&i++}),1===i}},soldier:(t,e,o)=>r.typeIsMovable(n,t,e,o)}[n](t,e,o)}chessRun(n,t,e){this._count++,this.clearStatus(),this.renderChess(t,{status:"normal",name:n.name,color:n.color,id:n.id,range:n.range,type:n.type}),this.renderChess(n,{status:"blank",name:"",color:"",id:"",type:"",range:[[0,0],[0,0]]})}renderChess(n,{status:t,name:e,color:o,id:r,range:i,type:l}){n.status=t,n.elem.dataset.status=t,void 0!==e&&(n.name=e,n.elem.textContent=e),void 0!==o&&(n.elem.style.color=o,n.color=o),void 0!==r&&(n.id=r),void 0!==i&&(n.range=i),void 0!==l&&(n.type=l)}clearStatus(){this._currentMovables.forEach((n,t)=>{this.renderChess(n,{status:"blank",name:"",color:"",id:"",type:"",range:[]})}),this._currentReplaces.forEach((n,t)=>{this.renderChess(n,{status:"normal"})}),this._currentMovables=[],this._currentReplaces=[]}chessAblePostion(n){let t=n.id,e=this._chessTypes[t],o=n.position[0],r=n.position[1],i=n.range;this._currentMovables=[],this._currentReplaces=[],e.steps.forEach((t,e)=>{let l=o+t[0],s=this._layout[l];if(!s||l<i[0][0]||l>i[1][0])return;let A=r+t[1],a=s[A];!a||A<i[0][1]||A>i[1][1]||("blank"===a.status&&this.typeIsMovable(n.type,n.position,a.position,n.color)&&(this.renderChess(a,{status:"move"}),this._currentMovables.push(a)),"normal"==a.status&&a.color!==n.color&&this.typeIsReplace(n.type,n.position,a.position,n.color)&&(this.renderChess(a,{status:"replace"}),this._currentReplaces.push(a)))})}}(o);document.getElementById("game1").firstElementChild.appendChild(r.elem)}]);