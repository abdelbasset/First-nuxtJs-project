(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(t,e,n){var content=n(157);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("38e1607a",content,!0,{sourceMap:!1})},153:function(t,e,n){var content=n(159);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("ab0a78cc",content,!0,{sourceMap:!1})},156:function(t,e,n){"use strict";var o=n(152);n.n(o).a},157:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".post-preview[data-v-066fb62a]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-066fb62a]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-066fb62a]{width:400px;margin:10px}}.post-thumbnail[data-v-066fb62a]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-066fb62a]{padding:10px;text-align:center}a:active .post-content[data-v-066fb62a],a:hover .post-content[data-v-066fb62a]{background-color:#ccc}",""])},158:function(t,e,n){"use strict";var o=n(153);n.n(o).a},159:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".post-list[data-v-2972a1e9]{display:-webkit-flex;display:flex;padding:20px;box-sizing:border-box;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}",""])},160:function(t,e,n){"use strict";var o={name:"PostPreview",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},previewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(n(156),n(5)),c={components:{PostPreview:Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.postLink}},[n("article",{staticClass:"post-preview"},[n("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),n("div",{staticClass:"post-content"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.previewText))])])])])},[],!1,null,"066fb62a",null).exports},props:{isAdmin:{type:Boolean,default:!1}}},l=(n(158),Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"post-list"},[e("PostPreview",{attrs:{id:"1","is-admin":this.isAdmin,thumbnail:"https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg",title:"Hello There",textPreview:"Hello Preview test"}}),this._v(" "),e("PostPreview",{attrs:{id:"2","is-admin":this.isAdmin,thumbnail:"https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg",title:"Hello There 2",textPreview:"Hello Preview test"}}),this._v(" "),e("PostPreview",{attrs:{id:"3","is-admin":this.isAdmin,thumbnail:"https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/AI-circuit-board-tech-16.9.jpg",title:"Hello There 3",textPreview:"Hello Preview test"}})],1)},[],!1,null,"2972a1e9",null));e.a=l.exports},170:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5bf49d2a",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var o=n(170);n.n(o).a},183:function(t,e,n){e=t.exports=n(18)(!1);var o=n(184)(n(185));e.push([t.i,".intro[data-v-1114b640]{height:300px;position:relative;padding:30px;background-image:url("+o+");background-position:50%;background-size:cover}.intro[data-v-1114b640],.intro h1[data-v-1114b640]{box-sizing:border-box}.intro h1[data-v-1114b640]{position:absolute;top:10%;left:5%;width:90%;font-size:1.5rem;color:#000;background-color:#d3d3d3;padding:10px;border-radius:10px;box-shadow:3px 3px 3px #000;border:1px solid #000}@media (min-width:768px){.intro h1[data-v-1114b640]{font-size:2rem}}.featured-posts[data-v-1114b640]{display:-webkit-flex;display:flex;padding:20px;box-sizing:border-box;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center}",""])},184:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},185:function(t,e,n){t.exports=n.p+"img/f94bbfe.jpg"},190:function(t,e,n){"use strict";n.r(e);var o={components:{PostList:n(160).a}},r=(n(182),n(5)),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[this._m(0),this._v(" "),e("PostList")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"intro"},[e("h1",[this._v("Get the latest tech news!")])])}],!1,null,"1114b640",null);e.default=component.exports}}]);