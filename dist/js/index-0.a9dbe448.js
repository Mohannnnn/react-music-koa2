!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/2R5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateSongPlayVolume=t.updateSongPlayTime=t.updateSongPlayStatus=t.updateSongPlayCur=t.deleteAllSongList=t.deleteSongList=t.addSongList=t.updateAlbumList=t.updateUserInfo=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("Axbo"));t.updateUserInfo=function(e){return{type:n.USERINFO_UPDATE,data:e}},t.updateAlbumList=function(e){return{type:n.ALBUMLIST_UPDATE,data:e}},t.addSongList=function(e){return{type:n.SONGLIST_ADD,data:e}},t.deleteSongList=function(e){return{type:n.SONGLIST_DELETE,data:e}},t.deleteAllSongList=function(e){return{type:n.SONGLIST_DELETEALL,data:e}},t.updateSongPlayCur=function(e){return{type:n.SONGPLAYCUR_UPDATE,data:e}},t.updateSongPlayStatus=function(e){return{type:n.SONGPLAYSTATUS_UPDATE,data:e}},t.updateSongPlayTime=function(e){return{type:n.SONGPLAYTIME_UPDATE,data:e}},t.updateSongPlayVolume=function(e){return{type:n.SONGPLAYVOLUME_UPDATE,data:e}}},0:function(e,t,a){a("201c"),e.exports=a("tjUo")},"20KN":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=y(a("kPKH")),s=y(a("BMrR")),l=y(a("Yz+Y")),o=y(a("iCc5")),r=y(a("V7oC")),u=y(a("FYw3")),i=y(a("mRg0"));a("rO+z"),a("Jmwx");var d=y(a("q1tI")),c=a("/MKj"),f=a("/2R5"),p=a("ANjH"),g=a("eO8H"),m=a("vaoO"),h=y(a("Fea+"));function y(e){return e&&e.__esModule?e:{default:e}}a("jM62");var S=function(e){function t(e){(0,o.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={},a}return(0,i.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,m.getAlbumList)().then(function(t){e.props.albumListUpdateDispatch(t.data)})}},{key:"render",value:function(){return d.default.createElement("section",{className:"recommend"},d.default.createElement(s.default,{style:{paddingLeft:"10px",margin:"20px 0 10px 0",fontSize:"17px",borderLeft:"4px solid #1890ff"}},"推荐歌单"),d.default.createElement(s.default,{gutter:10,type:"flex",justify:"space-between"},""==this.props.albumList?d.default.createElement(h.default,null):this.props.albumList.map(function(e,t){return d.default.createElement(n.default,{span:8,style:{paddingBottom:"10px"},key:t},d.default.createElement("div",{className:"music-list"},d.default.createElement(g.Link,{to:{pathname:"/albumdetail",search:"?id="+e.id,query:{id:e.id}}},d.default.createElement("span",{className:"listen"},e.playCount),d.default.createElement("img",{alt:"",src:e.coverImgUrl}),d.default.createElement("div",{className:"music-text"},e.title))))})))}}]),t}(d.default.Component);t.default=(0,c.connect)(function(e){return{albumList:e.albumList}},function(e){return{albumListUpdateDispatch:(0,p.bindActionCreators)(f.updateAlbumList,e)}})(S)},Au6d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=p(a("Yz+Y")),s=p(a("iCc5")),l=p(a("V7oC")),o=p(a("FYw3")),r=p(a("mRg0")),u=p(a("q1tI")),i=a("/2R5"),d=a("/MKj"),c=a("ANjH"),f=a("vaoO");function p(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.state={},a.songToPlay=a.songToPlay.bind(a),a.songToPause=a.songToPause.bind(a),a.songTimeUpdate=a.songTimeUpdate.bind(a),a.songProgress=a.songProgress.bind(a),a.songEnd=a.songEnd.bind(a),a.getSongMsg=a.getSongMsg.bind(a),a}return(0,r.default)(t,e),(0,l.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.songPlayStatus?this.songToPlay():this.songToPause()}},{key:"songToPlay",value:function(){this.refs.audioMusic.play()}},{key:"songToPause",value:function(){this.refs.audioMusic.pause()}},{key:"songProgress",value:function(){}},{key:"songTimeUpdate",value:function(){}},{key:"songEnd",value:function(){var e=this,t=this.props.songList.length;t>1&&this.props.songList.forEach(function(a,n){if(a.id!=e.props.songPlayCur.id);else{var s=e.props.songList[(n+1)%t].id,l=e.props.songList[(n+1)%t].type;e.getSongMsg(s,l)}})}},{key:"getSongMsg",value:function(e,t){var a=this;switch(t.toLocaleLowerCase()){case"netease":(0,f.getNetEaseSongMsg)({id:e}).then(function(e){200==e.code&&a.props.songPlayCurUpdateDispatch(e.data)});break;case"qq":(0,f.getQqSongMsg)({id:e}).then(function(e){200==e.code&&a.props.songPlayCurUpdateDispatch(e.data)});break;case"kugou":(0,f.getKuGouSongMsg)({id:e}).then(function(e){200==e.code&&a.props.songPlayCurUpdateDispatch(e.data)})}}},{key:"render",value:function(){return u.default.createElement("div",{style:{width:"100%",height:"50px",display:"none"}},u.default.createElement("audio",{ref:"audioMusic",onProgress:this.songProgress,onTimeUpdate:this.songTimeUpdate,onEnded:this.songEnd,src:this.props.songPlayCur.url?this.props.songPlayCur.url:"",preload:"auto",controls:!0,style:{width:"100%",height:"100%",display:"block"}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null}}]),t}(u.default.Component);t.default=(0,d.connect)(function(e){return{songList:e.songList,songPlayCur:e.songPlayCur,songPlayStatus:e.songPlayStatus,songPlayTime:e.songPlayTime,songPlayVolume:e.songPlayVolume}},function(e){return{songPlayCurUpdateDispatch:(0,c.bindActionCreators)(i.updateSongPlayCur,e)}})(g)},Axbo:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.USERINFO_UPDATE="USERINFO_UPDATE",t.ALBUMLIST_UPDATE="ALBUMLIST_UPDATE",t.SONGLIST_ADD="SONGLIST_ADD",t.SONGLIST_DELETE="SONGLIST_DELETE",t.SONGLIST_DELETEALL="SONGLIST_DELETEALL",t.SONGPLAYCUR_UPDATE="SONGPLAYCUR_UPDATE",t.SONGPLAYSTATUS_UPDATE="SONGPLAYSTATUS_UPDATE",t.SONGPLAYTIME_UPDATE="SONGPLAYTIME_UPDATE",t.SONGPLAYVOLUME_UPDATE="SONGPLAYVOLUME_UPDATE"},"Fea+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a("BMrR")),s=c(a("W9HT")),l=c(a("Yz+Y")),o=c(a("iCc5")),r=c(a("V7oC")),u=c(a("FYw3")),i=c(a("mRg0"));a("Jmwx"),a("04bd");var d=c(a("q1tI"));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,o.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.state={},a}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return d.default.createElement(n.default,{type:"flex",justify:"center",align:"middle",style:{padding:"50px",width:"100%"}},d.default.createElement(s.default,{tip:"Loading..."}))}}]),t}(d.default.Component);t.default=f},Ffhv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a("m1cH")),s=a("ANjH"),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("Axbo")),o=r(a("OXQi"));function r(e){return e&&e.__esModule?e:{default:e}}t.default=(0,s.combineReducers)({userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.userInfo,t=arguments[1];switch(t.type){case l.USERINFO_UPDATE:return t.data;default:return e}},albumList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.albumList,t=arguments[1];switch(t.type){case l.ALBUMLIST_UPDATE:return t.data;default:return e}},songList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.songList,t=arguments[1];switch(t.type){case l.SONGLIST_ADD:var a=[].concat((0,n.default)(e),[t.data]),s={};return a.reduce(function(e,t){return!s[t.id]&&(s[t.id]=e.push(t)),e},[]);case l.SONGLIST_DELETE:return e.filter(function(e){if(e.id!=t.data.id)return e});case l.SONGLIST_DELETEALL:return[];default:return e}},songPlayCur:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.songPlayCur,t=arguments[1];switch(t.type){case l.SONGPLAYCUR_UPDATE:return t.data;default:return e}},songPlayStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.songPlayStatus,t=arguments[1];switch(t.type){case l.SONGPLAYSTATUS_UPDATE:return t.data;default:return e}},songPlayTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.songPlayTime,t=arguments[1];switch(t.type){case l.SONGPLAYTIME_UPDATE:return t.data;default:return e}},songPlayVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.default.songPlayVolume,t=arguments[1];switch(t.type){case l.SONGPLAYVOLUME_UPDATE:return t.data;default:return e}}})},Gcfw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=y(a("CtXQ")),s=y(a("BMrR")),l=y(a("kPKH")),o=y(a("Yz+Y")),r=y(a("iCc5")),u=y(a("V7oC")),i=y(a("FYw3")),d=y(a("mRg0")),c=y(a("5rEg"));a("2oDE"),a("Jmwx"),a("rO+z"),a("1vPl");var f=y(a("q1tI")),p=a("eO8H"),g=a("uJMD"),m=a("vaoO"),h=y(a("Fea+"));function y(e){return e&&e.__esModule?e:{default:e}}a("SL7a");var S=c.default.Search,v=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={inputSearchValue:"周杰伦",searchStorageName:"searchStorage",searchStorageArr:[],searchStorageMaxLength:8,initSearchMusic:!1,searchNetEaseList:[],searchQqList:[],searchKugouList:[]},a.startSearch=a.startSearch.bind(a),a.handleChange=a.handleChange.bind(a),a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"startSearch",value:function(e){var t=this;if(""!=e){(0,g.setLocalStorage)(e,this.state.searchStorageName);var a=(0,g.getLocalStorage)(this.state.searchStorageName).length;if(a>this.state.searchStorageMaxLength){var n=(0,g.getLocalStorage)(this.state.searchStorageName).slice(a-this.state.searchStorageMaxLength);(0,g.delLocalStorage)(this.state.searchStorageName),n.forEach(function(e){(0,g.setLocalStorage)(e,t.state.searchStorageName)})}this.setState({searchStorageArr:(0,g.getLocalStorage)(this.state.searchStorageName),initSearchMusic:!0}),(0,m.getNetEaseSearch)({s:e,limit:20}).then(function(e){200==e.code&&t.setState({searchNetEaseList:e.data})}),(0,m.getQqSearch)({s:e,limit:20}).then(function(e){200==e.code&&t.setState({searchQqList:e.data})}),(0,m.getKugouSearch)({s:e,limit:20}).then(function(e){200==e.code&&t.setState({searchKugouList:e.data})})}}},{key:"handleChange",value:function(e){console.log(e.target)}},{key:"render",value:function(){var e=this,t=function(e){var t=e.ele,a=e.index,o=e.from;return f.default.createElement(p.Link,{to:{pathname:"/songdetail",query:{id:t.id,from:o},search:"?id="+t.id+"&from="+o},key:a},f.default.createElement(s.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},f.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},a+1),f.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},f.default.createElement(s.default,{type:"flex",justify:"space-between",align:"middle"},f.default.createElement(s.default,{style:{width:"90%"}},f.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},t.name),f.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},t.singer)),f.default.createElement(n.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))};return f.default.createElement("section",{className:"search"},f.default.createElement(s.default,{type:"flex",align:"middle",justify:"center",style:{padding:"10px 5px"}},f.default.createElement(l.default,{span:24},f.default.createElement(S,{placeholder:"请输入歌手、歌名",defaultValue:this.inputSearchValue,onChange:this.handleChange,onSearch:function(t){return e.startSearch(t)}}))),f.default.createElement(s.default,{type:"flex",align:"top",justify:"center",style:{flexDirection:"column",padding:"5px"}},f.default.createElement(l.default,null,"搜索历史"),f.default.createElement(s.default,{type:"flex",align:"middle",justify:"start",style:{paddingTop:"10px",fontSize:"14px"}},0==this.state.searchStorageArr.length?"":f.default.createElement(function(){return e.state.searchStorageArr.map(function(t,a){return f.default.createElement(l.default,{style:{padding:"0px 15px",border:"1px solid #d3d4da",borderRadius:"15px",lineHeight:"32px",margin:"0 10px 10px 0",cursor:"pointer"},key:a,onClick:function(){return e.startSearch(t)}},t)})},null))),f.default.createElement(s.default,{type:"flex",align:"top",justify:"center",style:{flexDirection:"column",padding:"5px"}},1==this.state.initSearchMusic&&0==this.state.searchNetEaseList.length&&0==this.state.searchQqList.length&&0==this.state.searchKugouList.length?f.default.createElement(h.default,null):"",0==this.state.searchNetEaseList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"网易云搜索结果"),f.default.createElement(function(){return e.state.searchNetEaseList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,from:"netease",key:a})})},null)),0==this.state.searchQqList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"QQ音乐搜索结果"),f.default.createElement(function(){return e.state.searchQqList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,from:"qq",key:a})})},null)),0==this.state.searchKugouList.length?"":f.default.createElement("section",{style:{width:"100%"}},f.default.createElement(l.default,{style:{fontSize:"17px",color:"#333"}},"酷狗音乐搜索结果"),f.default.createElement(function(){return e.state.searchKugouList.map(function(e,a){if(a<30)return f.default.createElement(t,{ele:e,index:a,from:"kugou",key:a})})},null))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return 0==t.searchStorageArr.length?{searchStorageArr:(0,g.getLocalStorage)(t.searchStorageName)}:null}}]),t}(f.default.Component);t.default=v},HB48:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a("14Xm")),s=u(a("4d7F")),l=u(a("gDS+")),o=u(a("GQeE")),r=u(a("D3Ub"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,r.default)(n.default.mark(function e(){var t,a,r,u,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=i.url,c=void 0===d?"":d,f=i.type,p=void 0===f?"GET":f,g=i.data,m=void 0===g?{}:g;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("GET"==(p=p.toUpperCase())?(t="",m&&((0,o.default)(m).forEach(function(e){t+=e+"="+m[e]+"&"}),c=(c+"?"+t).slice(0,-1))):"POST"==p&&(m=(0,l.default)(m)),!window.fetch){e.next=14;break}return a={method:p,mode:"cors",cache:"force-cache",headers:{"Content-type":"application/json",Accept:"application/json"}},"POST"==p&&Object.defineProperty(a,"body",{value:m}),e.next=7,fetch(c,a);case 7:return r=e.sent,e.next=10,r.json();case 10:return u=e.sent,e.abrupt("return",u);case 14:return e.abrupt("return",new s.default(function(e){var t=new XMLHttpRequest||new ActiveXObject("Microsoft.XMLHTTP");t.open(p,c,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),t.send(m),t.onreadystatechange=function(a){if(4==t.readyState&&200==t.status){var n="";t.response.constructor!=Object&&(n=JSON.parse(t.responseText)),e(n)}}}));case 15:case"end":return e.stop()}},e,void 0)}))},LDel:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={albumList:"https://api.bzqll.com/music/netease/hotSongList",songList:"https://api.bzqll.com/music/netease/songList",netEaseSearch:"https://api.bzqll.com/music/netease/search",qqSearch:"https://api.bzqll.com/music/tencent/search",kugouSearch:"https://api.bzqll.com/music/kugou/search",netEaseSongMsg:"https://api.bzqll.com/music/netease/song",qqSongMsg:"https://api.bzqll.com/music/tencent/song",kuGouSongMsg:"https://api.bzqll.com/music/kugou/song"}},OXQi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={userInfo:"",albumList:[],songList:[],songPlayCur:{},songPlayStatus:!1,songPlayTime:0,songPlayVolume:.5}},Q2AE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ANjH"),s=o(a("Ffhv")),l=o(a("sINF"));function o(e){return e&&e.__esModule?e:{default:e}}var r=(0,n.createStore)(s.default,(0,n.applyMiddleware)(l.default));t.default=r},RnhZ:function(e,t,a){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function s(e){var t=l(e);return a(t)}function l(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=l,e.exports=s,s.id="RnhZ"},SL7a:function(e,t,a){},VVpj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a("CtXQ")),s=m(a("BMrR")),l=m(a("kPKH")),o=m(a("Yz+Y")),r=m(a("iCc5")),u=m(a("V7oC")),i=m(a("FYw3")),d=m(a("mRg0"));a("2oDE"),a("Jmwx"),a("rO+z");var c=m(a("q1tI")),f=a("eO8H"),p=a("vaoO"),g=m(a("Fea+"));function m(e){return e&&e.__esModule?e:{default:e}}a("n0f3");var h=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={id:null,songMsg:{}},a.getSongs=a.getSongs.bind(a),a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.query,t=this.props.location.search,a=e&&e.id?e.id:t.split("=")[1];this.getSongs(a)}},{key:"getSongs",value:function(e){var t=this;(0,p.getSongList)({id:e,limit:30}).then(function(a){200==a.code&&t.setState({id:e,songMsg:a.data})})}},{key:"render",value:function(){return c.default.createElement("section",{className:"album-detail"},c.default.createElement(s.default,{className:"head",style:{padding:"30px 10px 10px 15px"}},c.default.createElement("div",{className:"mask",style:{backgroundImage:"url("+this.state.songMsg.songListPic+")"}}),c.default.createElement(l.default,{xs:{span:10},sm:{span:6},style:{postion:"relative",zIndex:2}},c.default.createElement("img",{src:this.state.songMsg.songListPic,alt:"",style:{width:"126px",height:"126px"}}),c.default.createElement("span",{className:"listen"},this.state.songMsg.songListPlayCount)),c.default.createElement(l.default,{span:14,style:{postion:"relative",zIndex:2}},c.default.createElement("p",{style:{color:"#fefefe",fontSize:"17px",lineHeight:"20px"}},this.state.songMsg.songListName),c.default.createElement("p",{style:{color:"#ccc",fontSize:"14px"}},"ID:",this.state.songMsg.songListUserId))),c.default.createElement(s.default,{style:{padding:"20px 10px 10px 15px",color:"#666",fontSize:"14px"}},"简介：",this.state.songMsg.songListDescription),c.default.createElement(s.default,{style:{padding:"0px 10px 0px 15px",color:"#666",fontSize:"14px",lineHeight:"25px",background:"#eeeff0"}},"歌单列表："),c.default.createElement(s.default,{style:{zIndex:10,position:"relative"}},this.state.songMsg.songs?this.state.songMsg.songs.map(function(e,t){if(t<30)return c.default.createElement(f.Link,{to:{pathname:"/songdetail",query:{id:e.id,from:"netease"},search:"?id="+e.id+"&from=netease"},key:t},c.default.createElement(s.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},c.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},t+1),c.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},c.default.createElement(s.default,{type:"flex",justify:"space-between",align:"middle"},c.default.createElement(s.default,{style:{width:"90%"}},c.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},e.name),c.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},e.singer)),c.default.createElement(n.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))}):c.default.createElement(g.default,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null}}]),t}(c.default.Component);t.default=h},a6px:function(e,t,a){},geJ5:function(e,t,a){},ia6h:function(e,t,a){},jM62:function(e,t,a){},lggp:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a("BvKs")),s=v(a("BMrR")),l=v(a("kPKH")),o=v(a("Tckk")),r=v(a("Yz+Y")),u=v(a("iCc5")),i=v(a("V7oC")),d=v(a("FYw3")),c=v(a("mRg0")),f=v(a("5rEg")),p=v(a("Ol7k"));a("2WkQ"),a("Jmwx"),a("rO+z"),a("xpQY"),a("1vPl"),a("M7k7");var g=v(a("q1tI")),m=a("eO8H");a("geJ5");var h=v(a("t57H")),y=v(a("20KN")),S=v(a("Gcfw"));function v(e){return e&&e.__esModule?e:{default:e}}var E=p.default.Header,j=p.default.Content,x=(p.default.Footer,p.default.Sider,f.default.Search),P=function(e){function t(e){(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return a.state={title:"Music",curRoute:"recommend",routes:{recommend:"recommend",hotlist:"hotlist",search:"search"}},a}return(0,c.default)(t,e),(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){return g.default.createElement("div",{className:"home"},g.default.createElement(p.default,null,g.default.createElement(E,{style:{background:"#1890ff",padding:"0 10px",position:"sticky",top:0,left:0,zIndex:10}},g.default.createElement(s.default,{align:"middle",type:"flex",justify:"space-between"},g.default.createElement(l.default,null,g.default.createElement(o.default,{src:"../../assets/images/logo.svg",size:"large"})),g.default.createElement(l.default,{span:7,style:{color:"#fff",fontSize:"16px"}},this.state.title),g.default.createElement(l.default,{span:14},g.default.createElement(m.Link,{to:this.props.match.url+"/"+this.state.routes.search},g.default.createElement(x,{placeholder:"搜索",disabled:!0}))))),g.default.createElement(j,{style:{background:"#fff",overflow:"hidden"}},g.default.createElement(n.default,{mode:"horizontal",selectedKeys:[this.state.curRoute],style:{display:"flex",justifyContent:"space-between"}},g.default.createElement(n.default.Item,{key:this.state.routes.recommend},g.default.createElement(m.Link,{to:this.props.match.url+"/"+this.state.routes.recommend},"推荐音乐")),g.default.createElement(n.default.Item,{key:this.state.routes.hotlist},g.default.createElement(m.Link,{to:this.props.match.url+"/"+this.state.routes.hotlist},"热门歌曲")),g.default.createElement(n.default.Item,{key:this.state.routes.search},g.default.createElement(m.Link,{to:this.props.match.url+"/"+this.state.routes.search},"搜索"))),g.default.createElement(m.Switch,null,g.default.createElement(m.Route,{path:this.props.match.path+"/"+this.state.routes.hotlist,exact:!0,component:h.default}),g.default.createElement(m.Route,{path:this.props.match.path+"/"+this.state.routes.search,exact:!0,component:S.default}),g.default.createElement(m.Route,{path:this.props.match.path+"/:"+this.state.routes.recommend+"?",exact:!0,component:y.default})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.location.pathname.slice(6);return t.routes[a]?{curRoute:t.routes[a]}:null}}]),t}(g.default.Component);t.default=P},n0f3:function(e,t,a){},oYx3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a("q1tI")),s=a("eO8H"),l=u(a("lggp")),o=u(a("zbIP")),r=u(a("VVpj"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return n.default.createElement(s.HashRouter,null,n.default.createElement(s.Switch,null,n.default.createElement(s.Route,{path:"/home",component:l.default}),n.default.createElement(s.Route,{path:"/songdetail",component:o.default}),n.default.createElement(s.Route,{path:"/albumdetail",component:r.default}),n.default.createElement(s.Redirect,{to:"/home"})))}},pYmE:function(e,t,a){},qz5Q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.type||"get",a=e.dataType||"json",n=e.url,s=e.data||{},l=e.success,o="";for(var r in s)o+=r+"="+s[r]+"&";if(o=o.slice(0,-1),"json"==a){var u=new XMLHttpRequest;"get"==t?(u.open("get",n+"?"+o),u.send(null)):"post"==t&&(u.open("post",n),u.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u.send(o)),u.onreadystatechange=function(){if(200==u.status&&4==u.readyState){var e=u.responseText;e=JSON.parse(e),l(e)}}}else if("jsonp"==a){var i="myJsonp"+(new Date).getTime()+Math.random().toString().slice(2),d=document.createElement("script");window[i]=function(e){l(e)},d.src=""==o?n+"&callback="+i:n+"?"+o+"&callback="+i,document.body.appendChild(d)}}},t57H:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a("CtXQ")),s=m(a("BMrR")),l=m(a("kPKH")),o=m(a("Yz+Y")),r=m(a("iCc5")),u=m(a("V7oC")),i=m(a("FYw3")),d=m(a("mRg0"));a("2oDE"),a("Jmwx"),a("rO+z");var c=m(a("q1tI")),f=a("eO8H"),p=a("vaoO"),g=m(a("Fea+"));function m(e){return e&&e.__esModule?e:{default:e}}a("ia6h");var h=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={songList:[]},a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;(0,p.getSongList)().then(function(t){200==t.code&&e.setState({songList:t.data})})}},{key:"render",value:function(){return c.default.createElement("section",{className:"hot-list"},c.default.createElement(s.default,null,c.default.createElement(l.default,{span:24,className:"banner"},c.default.createElement("div",{className:"title-bg"}))),c.default.createElement(s.default,null,this.state.songList.songs?this.state.songList.songs.map(function(e,t){if(t<20)return c.default.createElement(f.Link,{to:{pathname:"/songdetail",query:{id:e.id,from:"netease"},search:"?id="+e.id+"&from=netease"},key:t},c.default.createElement(s.default,{type:"flex",align:"middle",style:{padding:"5px 0 5px 10px"}},c.default.createElement(l.default,{xs:{span:2},sm:{span:1},style:{fontSize:"18px",color:"#999"}},t+1),c.default.createElement(l.default,{xs:{span:22},sm:{span:23},style:{borderBottom:"1px solid rgba(170, 170, 170, 0.3)",paddingRight:"10px"}},c.default.createElement(s.default,{type:"flex",justify:"space-between",align:"middle"},c.default.createElement(s.default,{style:{width:"90%"}},c.default.createElement(l.default,{style:{fontSize:"16px",color:"#333"}},e.name),c.default.createElement(l.default,{style:{fontSize:"12px",color:"#888"}},e.singer)),c.default.createElement(n.default,{type:"play-circle",style:{fontSize:"23px",color:"#aaaaaa"}})))))}):c.default.createElement(g.default,null)))}}]),t}(c.default.Component);t.default=h},tjUo:function(e,t,a){"use strict";var n=i(a("MR/8"));a("yQ84");var s=i(a("q1tI")),l=i(a("i8i4")),o=i(a("xc/l")),r=i(a("wd/R"));a("XDpg");var u=i(a("vpQ9"));function i(e){return e&&e.__esModule?e:{default:e}}r.default.locale("zh-cn"),l.default.render(s.default.createElement(n.default,{locale:o.default},s.default.createElement(u.default,null)),document.getElementById("root"))},uJMD:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delLocalStorage=t.getLocalStorage=t.setLocalStorage=void 0;var n,s=a("gDS+"),l=(n=s)&&n.__esModule?n:{default:n};t.setLocalStorage=function(e,t){var a=o(t);if(e.constructor==Object)r(t),window.localStorage.setItem(t,(0,l.default)(e));else if(a)-1==(0,l.default)(a).indexOf(e.toString())&&a.constructor==Array&&(a.push(e),window.localStorage.setItem(t,(0,l.default)(a)));else{var n=[];n.push(e),window.localStorage.setItem(t,(0,l.default)(n))}};var o=t.getLocalStorage=function(e){return window.localStorage.getItem(e)?JSON.parse(window.localStorage.getItem(e)):""},r=t.delLocalStorage=function(e){e&&window.localStorage.removeItem(e,"")}},vaoO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getKugouSearch=t.getQqSearch=t.getNetEaseSearch=t.getKuGouSongMsg=t.getQqSongMsg=t.getNetEaseSongMsg=t.getSongList=t.getAlbumList=void 0;var n=l(a("HB48")),s=(l(a("qz5Q")),l(a("LDel")));function l(e){return e&&e.__esModule?e:{default:e}}t.getAlbumList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=void 0===t?12:t,l=e.order,o=void 0===l?"hot":l;return(0,n.default)({url:s.default.albumList,data:{key:579621905,cat:"全部",limit:a,offset:0,order:o}})},t.getSongList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.limit,a=void 0===t?20:t,l=e.id,o=void 0===l?3778678:l;return(0,n.default)({url:s.default.songList,data:{key:579621905,id:o,limit:a,offset:0}})},t.getNetEaseSongMsg=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,t=void 0===e?516728102:e;return(0,n.default)({url:s.default.netEaseSongMsg,data:{key:579621905,id:t}})},t.getQqSongMsg=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,t=void 0===e?516728102:e;return(0,n.default)({url:s.default.qqSongMsg,data:{key:579621905,id:t}})},t.getKuGouSongMsg=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id,t=void 0===e?516728102:e;return(0,n.default)({url:s.default.kuGouSongMsg,data:{key:579621905,id:t}})},t.getNetEaseSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,o=void 0===l?"song":l,r=e.limit,u=void 0===r?10:r;return(0,n.default)({url:s.default.netEaseSearch,data:{key:579621905,s:a,type:o,limit:u,offset:0}})},t.getQqSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,o=void 0===l?"song":l,r=e.limit,u=void 0===r?10:r;return(0,n.default)({url:s.default.qqSearch,data:{key:579621905,s:a,type:o,limit:u,offset:0}})},t.getKugouSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.s,a=void 0===t?"":t,l=e.type,o=void 0===l?"song":l,r=e.limit,u=void 0===r?10:r;return(0,n.default)({url:s.default.kugouSearch,data:{key:579621905,s:a,type:o,limit:u,offset:0}})}},vpQ9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=g(a("Yz+Y")),s=g(a("iCc5")),l=g(a("V7oC")),o=g(a("FYw3")),r=g(a("mRg0")),u=a("q1tI"),i=g(u),d=a("/MKj"),c=g(a("oYx3")),f=g(a("Au6d")),p=g(a("Q2AE"));function g(e){return e&&e.__esModule?e:{default:e}}a("pYmE");var m=function(e){function t(){return(0,s.default)(this,t),(0,o.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,r.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return i.default.createElement(d.Provider,{store:p.default},i.default.createElement("div",{className:"app"},i.default.createElement(f.default,null),i.default.createElement(c.default,null)))}}]),t}(u.Component);t.default=m},zbIP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(a("kPKH")),s=h(a("BMrR")),l=h(a("CtXQ")),o=h(a("Yz+Y")),r=h(a("iCc5")),u=h(a("V7oC")),i=h(a("FYw3")),d=h(a("mRg0"));a("rO+z"),a("Jmwx"),a("2oDE");var c=h(a("q1tI")),f=a("/2R5"),p=a("/MKj"),g=a("ANjH"),m=a("vaoO");function h(e){return e&&e.__esModule?e:{default:e}}a("a6px");var y=function(e){function t(e){(0,r.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return a.state={},a.getSongMsg=a.getSongMsg.bind(a),a.changeSongPlayStatus=a.changeSongPlayStatus.bind(a),a.nextSongPlay=a.nextSongPlay.bind(a),a.preSongPlay=a.preSongPlay.bind(a),a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.query,t=this.props.location.search,a=e&&e.id?e.id:t.split("&")[0].split("=")[1],n=e&&e.from?e.from:t.split("&")[1].split("=")[1];this.props.songListAddDispatch({id:a,type:n}),this.getSongMsg(a,n)}},{key:"getSongMsg",value:function(e,t){var a=this;switch(t.toLocaleLowerCase()){case"netease":(0,m.getNetEaseSongMsg)({id:e}).then(function(e){console.log(e),200==e.code&&(a.props.songPlayCurUpdateDispatch(e.data),a.props.songPlayStatusUpdateDispatch(!0))});break;case"qq":(0,m.getQqSongMsg)({id:e}).then(function(e){console.log(e),200==e.code&&(a.props.songPlayCurUpdateDispatch(e.data),a.props.songPlayStatusUpdateDispatch(!0))});break;case"kugou":(0,m.getKuGouSongMsg)({id:e}).then(function(e){console.log(e),200==e.code&&(a.props.songPlayCurUpdateDispatch(e.data),a.props.songPlayStatusUpdateDispatch(!0))})}}},{key:"changeSongPlayStatus",value:function(){this.props.songPlayStatusUpdateDispatch(!this.props.songPlayStatus)}},{key:"nextSongPlay",value:function(){var e=this,t=this.props.songList.length;t>1&&this.props.songList.forEach(function(a,n){if(a.id!=e.props.songPlayCur.id);else{var s=e.props.songList[(n+1)%t].id,l=e.props.songList[(n+1)%t].type;e.getSongMsg(s,l)}})}},{key:"preSongPlay",value:function(){var e=this,t=this.props.songList.length;t>1&&this.props.songList.forEach(function(a,n){if(a.id!=e.props.songPlayCur.id);else{var s=e.props.songList[(n+4)%t].id,l=e.props.songList[(n+4)%t].type;e.getSongMsg(s,l)}})}},{key:"render",value:function(){return c.default.createElement("section",{className:"song-detail"},c.default.createElement("div",{className:"song-bg",style:{backgroundImage:"url("+this.props.songPlayCur.pic+")"}}),c.default.createElement("div",{className:"song-container"},c.default.createElement(s.default,{style:{padding:"15px 10px"}},c.default.createElement(l.default,{type:"left",onClick:function(){return window.history.back()},style:{fontSize:"25px",color:"#fff"}})),c.default.createElement(s.default,{type:"flex",gutter:10,align:"middle",justify:"space-between",style:{flexDirection:"column",paddingBottom:"60px"}},c.default.createElement(n.default,{style:{fontSize:"24px",color:"#fff"}},this.props.songPlayCur.name),c.default.createElement(n.default,{style:{fontSize:"18px",color:"#fff"}},"-",this.props.songPlayCur.singer,"-")),c.default.createElement(s.default,null,c.default.createElement(n.default,{className:(this.props.songPlayStatus?"playing":"paused")+" song-pic",style:{backgroundImage:"url("+this.props.songPlayCur.pic+")",borderRadius:"50%",margin:"0 auto",width:"256px",height:"256px"}})),c.default.createElement(s.default,{type:"flex",align:"middle",justify:"space-between",style:{padding:"20px 20px 40px",position:"fixed",bottom:"0",left:"0",width:"100%"}},c.default.createElement(l.default,{type:"sound",style:{fontSize:"30px",color:"#fff"}}),c.default.createElement(l.default,{onClick:this.preSongPlay,type:"step-backward",style:{fontSize:"50px",color:"#fff"}}),c.default.createElement(l.default,{onClick:this.changeSongPlayStatus,type:this.props.songPlayStatus?"pause-circle":"play-circle",style:{fontSize:"47px",color:"#fff"}}),c.default.createElement(l.default,{onClick:this.nextSongPlay,type:"step-forward",style:{fontSize:"50px",color:"#fff"}}),c.default.createElement(l.default,{type:"menu-unfold",style:{fontSize:"30px",color:"#fff"}}))))}}]),t}(c.default.Component);t.default=(0,p.connect)(function(e){return{songList:e.songList,songPlayCur:e.songPlayCur,songPlayStatus:e.songPlayStatus,songPlayTime:e.songPlayTime,songPlayVolume:e.songPlayVolume}},function(e){return{songListAddDispatch:(0,g.bindActionCreators)(f.addSongList,e),songListDeleteDispatch:(0,g.bindActionCreators)(f.deleteSongList,e),songPlayDeleteAllDispatch:(0,g.bindActionCreators)(f.deleteAllSongList,e),songPlayCurUpdateDispatch:(0,g.bindActionCreators)(f.updateSongPlayCur,e),songPlayStatusUpdateDispatch:(0,g.bindActionCreators)(f.updateSongPlayStatus,e),songPlayTimeUpdateDispatch:(0,g.bindActionCreators)(f.updateSongPlayTime,e),songPlayVolumeUpdateDispatch:(0,g.bindActionCreators)(f.updateSongPlayVolume,e)}})(y)}},[[0,1,2]]])});