var e=globalThis,t={},r={},o=e.parcelRequirec6f1;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequirec6f1=o),o.register;var n=o("fmRoT");const a=document.querySelector(".favorites__quote__description"),i=document.querySelector(".favorites__quote__author");console.log(i),(async()=>{let e=(await (0,n.default).get("https://energyflow.b.goit.study/api/quote")).data;a.textContent=e.quote,i.textContent=e.author})();
//# sourceMappingURL=favorites.74c3bc93.js.map
