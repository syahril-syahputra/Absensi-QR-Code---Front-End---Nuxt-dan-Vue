(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{312:function(e,t,n){"use strict";n.r(t);var o={props:["data","selected"],methods:{change:function(e){this.$emit("input",e.target.value)}}},r=n(50),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{staticClass:"w-full bg-white border border-gray-300 rounded-md p-2 text-sm",class:null==e.selected?"text-gray-400":"text-gray-700",domProps:{value:e.selected},on:{change:e.change}},[n("option",{staticClass:"text-gray-400",attrs:{value:"",selected:"",disabled:"",hidden:""}},[e._v("\n    Choose a category for your entry\n  ")]),e._v(" "),e._l(e.data,(function(t){return n("option",{key:t.id,staticClass:"text-gray-700",domProps:{value:t.id}},[e._v("\n    "+e._s(t.code+" : "+t.name)+"\n  ")])}))],2)}),[],!1,null,null,null);t.default=component.exports}}]);