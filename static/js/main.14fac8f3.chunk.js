(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){var n={"./bokoblin.png":17,"./bokoblin.webp":18,"./daruk.png":19,"./daruk.webp":20,"./epona.png":21,"./epona.webp":22,"./gannon.png":23,"./gannon.webp":24,"./guardian.png":25,"./guardian.webp":26,"./kass.png":27,"./kass.webp":28,"./link.png":29,"./link.webp":30,"./lynel.png":31,"./lynel.webp":32,"./mipha.png":33,"./mipha.webp":34,"./revali.png":35,"./revali.webp":36,"./urbosa.png":37,"./urbosa.webp":38,"./zelda.png":39,"./zelda.webp":40};function i(e){var a=c(e);return t(a)}function c(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=16},function(e,a,t){e.exports=t.p+"static/media/bokoblin.36af0a29.png"},function(e,a,t){e.exports=t.p+"static/media/bokoblin.c8eb1056.webp"},function(e,a,t){e.exports=t.p+"static/media/daruk.8813690b.png"},function(e,a,t){e.exports=t.p+"static/media/daruk.9474b78f.webp"},function(e,a,t){e.exports=t.p+"static/media/epona.3a6950ea.png"},function(e,a,t){e.exports=t.p+"static/media/epona.d93bf47c.webp"},function(e,a,t){e.exports=t.p+"static/media/gannon.d3708fc7.png"},function(e,a,t){e.exports=t.p+"static/media/gannon.f43a941c.webp"},function(e,a,t){e.exports=t.p+"static/media/guardian.596cf77b.png"},function(e,a,t){e.exports=t.p+"static/media/guardian.43aea77f.webp"},function(e,a,t){e.exports=t.p+"static/media/kass.7b5fb5d9.png"},function(e,a,t){e.exports=t.p+"static/media/kass.03136ba4.webp"},function(e,a,t){e.exports=t.p+"static/media/link.d95f92cd.png"},function(e,a,t){e.exports=t.p+"static/media/link.1518e425.webp"},function(e,a,t){e.exports=t.p+"static/media/lynel.2c066db8.png"},function(e,a,t){e.exports=t.p+"static/media/lynel.77204c40.webp"},function(e,a,t){e.exports=t.p+"static/media/mipha.203ea1b3.png"},function(e,a,t){e.exports=t.p+"static/media/mipha.19aa5494.webp"},function(e,a,t){e.exports=t.p+"static/media/revali.58410474.png"},function(e,a,t){e.exports=t.p+"static/media/revali.d8ec4422.webp"},function(e,a,t){e.exports=t.p+"static/media/urbosa.75f77e4b.png"},function(e,a,t){e.exports=t.p+"static/media/urbosa.23852b28.webp"},function(e,a,t){e.exports=t.p+"static/media/zelda.26b552fc.png"},function(e,a,t){e.exports=t.p+"static/media/zelda.815fd30a.webp"},,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(9),r=t.n(c),o=t(1),s=t(2),l=t(4),p=t(3),m=t(5),d=t(6);function u(e){var a="";switch(e){case 1:a="./zelda.webp";break;case 2:a="./urbosa.webp";break;case 3:a="./revali.webp";break;case 4:a="./mipha.webp";break;case 5:a="./lynel.webp";break;case 6:a="./link.webp";break;case 7:a="./kass.webp";break;case 8:a="./guardian.webp";break;case 9:a="./gannon.webp";break;case 10:a="./epona.webp";break;case 11:a="./daruk.webp";break;case 12:a="./bokoblin.webp";break;default:a="./link.webp"}return a}var b=function(e){var a=e.id,n=e.imgId,c=e.onClick,r=t(16);return i.a.createElement("img",{id:a,className:"img-responsive gameImg",src:r(u(n)),alt:"",onClick:c})},g=t(10),f=t.n(g),w=function(e){var a=e.handleClose,t=e.show,n=e.children,c=e.btnText,r=t?"modal display-block":"modal display-none";return i.a.createElement("div",{className:r},i.a.createElement("section",{className:"modal-main"},n,i.a.createElement("button",{onClick:a},c)))},k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={imgArray:[1,2,3,4,5,6,7,8,9,10,11,12],guessedArray:[],currentScore:0,topScore:0,message:"Click an image to begin",modalVisible:!1},t.showModal=function(){t.setState({modalVisible:!0})},t.handleRestart=function(){t.setState({guessedArray:[],currentScore:0,modalVisible:!1,message:"Click an image to begin"})},t.handleClick=function(e){var a=e.currentTarget,n=t.state,i=n.guessedArray,c=n.currentScore,r=n.topScore,o=n.imgArray,s=f.a.shuffle(Object(d.a)(o));if(-1===i.indexOf(a.id)){var l=c+1,p=r;if(l>p&&(p=l),l===o.length)return t.setState({correct:!0,currentScore:l,topScore:p,message:"You win! Nice memory!",modalVisible:!0});t.setState({imgArray:s,guessedArray:[].concat(Object(d.a)(i),[a.id]),correct:!0,currentScore:l,topScore:p,message:"You guessed correctly!"})}else t.setState({imgArray:s,correct:!1,message:"Game over!",modalVisible:!0})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.currentScore,n=a.topScore,c=a.imgArray,r=a.message,o=a.modalVisible;return i.a.createElement("div",{className:"container"},i.a.createElement(w,{show:o,handleClose:this.handleRestart,btnText:"Restart Game"},i.a.createElement("h4",null,r),i.a.createElement("h5",null,"You scored ".concat(t," point(s)!"))),i.a.createElement("div",{className:"row p-3 fixed-top bg-dark text-light"},i.a.createElement("div",{className:"col-4 d-inline"},i.a.createElement("h5",null,"React Clicky Game")),i.a.createElement("div",{className:"col-4 d-inline"}," ",i.a.createElement("h5",null,r)),i.a.createElement("div",{className:"col-4 d-inline"},i.a.createElement("h5",null,"Score: ".concat(t," | Top Score: ").concat(n)))),i.a.createElement("div",{className:"jumbotron m-3"},i.a.createElement("h1",{className:"display-4"},"React Clicky Game"),i.a.createElement("p",{className:"lead"},"Breath of the Wild Edition"),i.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!")),i.a.createElement("div",{className:"row"},c.map(function(a){return i.a.createElement("div",{key:a,className:"col-xs-6 col-lg-3"},i.a.createElement(b,{id:a,imgId:a,onClick:e.handleClick}))})))}}]),a}(n.Component),h=(t(42),function(e){function a(){return Object(o.a)(this,a),Object(l.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(43),t(44);r.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.14fac8f3.chunk.js.map