!function(e){for(var t=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},n=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var n=e.target||e.srcElement,i=t(n,(function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()}));if(i){for(var l,a=i.parentNode,o=i.parentNode.childNodes,d=o.length,u=0,s=0;s<d;s++)if(1===o[s].nodeType){if(o[s]===i){l=u;break}u++}return l>=0&&r(l,a),!1}},r=function(e,t,n,r){var i,l,a=document.querySelectorAll(".pswp")[0];if(l=function(e){for(var t,n,r,i,l=e.childNodes,a=l.length,o=[],d=0;d<a;d++)1===(t=l[d]).nodeType&&(r=(n=t.children[0]).getAttribute("data-size").split("x"),i={src:n.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},t.children.length>1&&(i.title=t.children[1].innerHTML),n.children.length>0&&(i.msrc=n.children[0].getAttribute("src")),i.el=t,o.push(i));return o}(t),i={galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=l[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},r)if(i.galleryPIDs){for(var o=0;o<l.length;o++)if(l[o].pid==e){i.index=o;break}}else i.index=parseInt(e,10)-1;else i.index=parseInt(e,10);isNaN(i.index)||(n&&(i.showAnimationDuration=0),new PhotoSwipe(a,PhotoSwipeUI_Default,l,i).init())},i=document.querySelectorAll(e),l=0,a=i.length;l<a;l++)i[l].setAttribute("data-pswp-uid",l+1),i[l].onclick=n;var o=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();o.pid&&o.gid&&r(o.pid,i[o.gid-1],!0,!0)}(".my-gallery");
