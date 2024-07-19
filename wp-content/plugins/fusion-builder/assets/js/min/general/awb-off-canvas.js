!function(e){"use strict";window.awb_oc_timeouts={},window.awbOffCanvas={timeouts:{},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},set:function(e,a,n){e=e?"_"+e:"_data";let t=localStorage.getItem("off_canvas"+e);(t=t?JSON.parse(t):{})[a]=n,localStorage.setItem("off_canvas"+e,JSON.stringify(t))},get:function(e,a){e=e?"_"+e:"_data";let n=localStorage.getItem("off_canvas"+e);return(n=n?JSON.parse(n):{})[a]||""},animationsWithoutDirection:["flash","rubberBand","shake","flipinx","flipiny","lightspeedin","flipOutX","flipOutY","lightSpeedOut"],open_off_canvas:function(a,n=!0,t=!1){const o=e('.awb-off-canvas-wrap[data-id="'+a+'"]'),s=o.find(".awb-off-canvas"),i=window["off_canvas_"+a],c=this;if(!o.length)return;if(o.hasClass("awb-show")&&t)return void this.close_off_canvas(a);if(this.set(a,"last_open_date",new Date),o.hasClass("awb-show")&&!t)return;let f=i.enter_animation;const r=i.enter_animation_direction&&"static"!==i.enter_animation_direction?this.capitalize(i.enter_animation_direction):"",l=i.enter_animation_speed||1;if(("off"===i.status_css_animations||"desktop"===i.status_css_animations&&window.cssua.ua.mobile)&&(f=!1),f){if(this.animationsWithoutDirection.includes(f)||(f=f+"In"+r),s.addClass("fusion-animated "+f),s.attr("data-animation-type",f),s.css({visibility:"visible","animation-duration":l+"s"}),"sliding-bar"===i.type&&"push"===i.transition&&("left"===i.position||"right"===i.position)){const a={transition:"margin-inline-start "+i.enter_animation_speed+"s"};e("body").hasClass("rtl")?(a.marginInlineStart="-"+s.outerWidth()+"px","right"===i.position&&(a.marginInlineStart=s.outerWidth()+"px")):(a.marginInlineStart=s.outerWidth()+"px","right"===i.position&&(a.marginInlineStart="-"+s.outerWidth()+"px"));let n="#wrapper";o.hasClass("init-for-studio")&&(n=".post-preview"),e(n).css(a),e('#sliders-container .tfs-slider[data-parallax="1"]').length&&e('#sliders-container .tfs-slider[data-parallax="1"]').css(a)}}else this.enableTrapFocus(o);if("yes"===i.overlay&&"no"===i.overlay_page_scrollbar&&e("html").css("overflow","hidden"),o.addClass("awb-show"),e('a[href^="#awb-oc__'+a+'"]').addClass("awb-oc-active"),n){const e=this.get(a,"open_count")||0;this.set(a,"open_count",e+1)}const d=parseInt(i.auto_close_after_time);d&&(window.awb_oc_timeouts["close_after_time_"+a]=setTimeout(()=>{c.close_off_canvas(a)},1e3*d));const _=parseInt(i.show_close_button_after_time);_&&(window.awb_oc_timeouts["show_close_button_"+a]=setTimeout(()=>{s.children(".off-canvas-close").removeClass("hidden")},1e3*_)),o.trigger(e.Event("awb-oc-opened"),[a])},close_off_canvas:function(a,n=!0){const t=e('.awb-off-canvas-wrap[data-id="'+a+'"]'),o=t.find(".awb-off-canvas"),s=window["off_canvas_"+a];if(0===t.length||void 0===s)return;let i=s.exit_animation;const c=s.exit_animation_direction&&"static"!==s.exit_animation_direction?this.capitalize(s.exit_animation_direction):"",f=s.exit_animation_speed||1;if(("off"===s.status_css_animations||"desktop"===s.status_css_animations&&window.cssua.ua.mobile)&&(i=!1),i){if(this.animationsWithoutDirection.includes(i)||(i=i+"Out"+c),o.addClass("fusion-animated "+i),o.attr("data-animation-type",i),o.addClass("is-closing"),o.css("animation-duration",f+"s"),"sliding-bar"===s.type&&"push"===s.transition&&("left"===s.position||"right"===s.position)){const a={transition:"margin-inline-start "+s.exit_animation_speed+"s",marginInlineStart:0};let n="#wrapper";t.hasClass("init-for-studio")&&(n=".post-preview"),e(n).css(a),e('#sliders-container .tfs-slider[data-parallax="1"]').length&&e('#sliders-container .tfs-slider[data-parallax="1"]').css(a)}}else"yes"===s.overlay&&t.hasClass("init-for-studio")&&o.addClass("is-closing"),"no"===s.overlay&&t.hasClass("init-for-studio")&&e("#icon-bar .go-back").click(),t.removeClass("awb-show");if(e('a[href^="#awb-oc__'+a+'"]').removeClass("awb-oc-active"),"yes"===s.overlay&&"no"===s.overlay_page_scrollbar&&e("html").css("overflow",""),setTimeout(()=>{this.removeHash()},10),n){const e=this.get(a,"close_count")||0;this.set(a,"close_count",e+1)}this.set(a,"closed",!0),clearTimeout(window.awb_oc_timeouts["close_after_time_"+a]),clearTimeout(window.awb_oc_timeouts["show_close_button_"+a]),parseInt(s.show_close_button_after_time)&&o.children(".off-canvas-close").addClass("hidden"),t.trigger(e.Event("awb-oc-closed"),[a])},removeHash(){const e=window.location.href.split("#")[0];history.replaceState({},"",e)},enableTrapFocus(e){if(!e.hasClass("type-popup"))return;const a=e.find(".awb-off-canvas"),n=a.find('a[href]:not([disabled]):visible, button:not([disabled]):visible, textarea:not([disabled]):visible, input[type="text"]:not([disabled]):visible, input[type="radio"]:not([disabled]):visible, input[type="checkbox"]:not([disabled]):visible, select:not([disabled]):visible'),t=n[0],o=n[n.length-1];setTimeout(()=>{a[0].focus()},100),a[0].addEventListener("keydown",function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===t&&(o.focus(),e.preventDefault()):document.activeElement===o&&(t.focus(),e.preventDefault()))})}},e(".awb-off-canvas").on("animationend",function(a){if(a.target!==this)return;const n=e(this),t=n.parent();n.attr("data-animation-type")&&n.removeClass("fusion-animated").removeClass(n.attr("data-animation-type")).removeAttr("data-animation-type"),n.hasClass("is-closing")?(n.removeClass("is-closing"),n.addClass("oc-waiting-for-close"),t.removeClass("awb-show"),t.hasClass("init-for-studio")&&e("#icon-bar .go-back").click()):window.awbOffCanvas.enableTrapFocus(t)}),e(".awb-off-canvas-wrap").on("transitionend",function(a){const n=e(this).find(".awb-off-canvas");n.hasClass("is-closing")&&e(this).hasClass("init-for-studio")&&(e("#icon-bar .go-back").click(),n.removeClass("is-closing")),n.removeClass("oc-waiting-for-close")}),e(window).on("load",function(){if(location.hash&&location.hash.startsWith("#awb-oc__")||location.hash&&location.hash.startsWith("#awb-open-oc__")){const e=location.hash.split("__")[1];window.awbOffCanvas.open_off_canvas(e,!1,!1)}e(".awb-off-canvas-wrap.init-for-studio").each(function(a,n){const t=e(n).data("id");window.awbOffCanvas.open_off_canvas(t,!1,!1)}),e(".awb-off-canvas-wrap").each(function(){e(this).on("awb-oc-closed",function(){e(this).find(".fusion-youtube iframe").each(function(){this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),e(this).find(".fusion-vimeo iframe").each(function(){new Vimeo.Player(this).pause()}),e(this).find("video").each(function(){e(this).get(0).pause()}),e(this).find(".mejs-audio").each(function(){e(this).find(".mejs-playpause-button.mejs-pause button").trigger("click")})})})}),e('a[href^="#awb-oc__"]').on("click",function(a){a.preventDefault();const n=(e(this).attr("href")||"").split("__")[1];window.awbOffCanvas.open_off_canvas(n,!1,!0)}),e('a[href^="#awb-open-oc__"]').on("click",function(a){a.preventDefault();const n=(e(this).attr("href")||"").split("__")[1];window.awbOffCanvas.open_off_canvas(n,!1,!1)}),e('a[href^="#awb-close-oc__"]').on("click",function(a){a.preventDefault();const n=(e(this).attr("href")||"").split("__")[1];n?window.awbOffCanvas.close_off_canvas(n):e(".awb-off-canvas-wrap.awb-show").each(function(){const a=e(this).data("id");window.awbOffCanvas.close_off_canvas(a)}),window.awbOffCanvas.removeHash()}),e(".awb-off-canvas-wrap:not(.overlay-disable-close)").on("click",function(a){if(a.target===this){const a=e(this).data("id");window.awbOffCanvas.close_off_canvas(a)}}),e(".close-on-anchor a").on("click",function(){if((e(this).attr("href")||"").includes("#")){const a=e(this).closest(".awb-off-canvas-wrap").data("id");window.awbOffCanvas.close_off_canvas(a)}}),e(".off-canvas-close").on("click",function(a){a.preventDefault();const n=e(this).closest(".awb-off-canvas-wrap").data("id");window.awbOffCanvas.close_off_canvas(n)}),e(document).on("keydown",function(a){if(27!==a.keyCode)return;e(".awb-off-canvas-wrap.awb-show:not(.disable-close-on-esc)").each(function(a,n){const t=e(n).data("id");window.awbOffCanvas.close_off_canvas(t)})}),e(".awb-off-canvas").on("mouseover",function(){const a=e(this).closest(".awb-off-canvas-wrap").data("id"),n=window["off_canvas_"+a];parseInt(n.auto_close_after_time)&&window.awb_oc_timeouts["close_after_time_"+a]&&clearTimeout(window.awb_oc_timeouts["close_after_time_"+a])}),e(".awb-off-canvas").on("mouseleave",function(){const a=e(this).closest(".awb-off-canvas-wrap").data("id"),n=window["off_canvas_"+a],t=parseInt(n.auto_close_after_time);t&&window.awb_oc_timeouts["close_after_time_"+a]&&(window.awb_oc_timeouts["close_after_time_"+a]=setTimeout(()=>{window.awbOffCanvas.close_off_canvas(a)},1e3*t))}),e("body").on("goback",function(a){e(".post-preview").css({"margin-right":0,"margin-left":0})}),e(".awb-off-canvas-wrap").each(function(a,n){const t=e(n).data("id"),o=window["off_canvas_"+t],s=e("#wpadminbar"),i=s.outerHeight();if("full"===o.height&&s.length&&e(n).find(".awb-off-canvas").css("height",`calc(100vh - ${i}px)`),"sliding-bar"===o.type&&"top"===o.position&&s.length&&e(n).find(".awb-off-canvas").css("margin-top",`${i}px`),"yes"===o.on_click){const a=o.on_click_element?e(o.on_click_element):null;a&&a.length&&(a.attr("data-off-canvas",o.on_click_element),e(document).on("click",o.on_click_element,function(e){e.preventDefault(),window.awbOffCanvas.open_off_canvas(t,!1)}))}"yes"===o.on_add_to_cart&&e(document).on("added_to_cart",function(){window.awbOffCanvas.open_off_canvas(t)});let c=!1;if(o.frequency){if("close"===o.frequency){!0===window.awbOffCanvas.get(t,"closed")&&(c=!0)}if("once"===o.frequency){0<window.awbOffCanvas.get(t,"open_count")&&(c=!0)}if("xtimes"===o.frequency&&o.frequency_xtimes){const e=window.awbOffCanvas.get(t,"open_count");parseInt(o.frequency_xtimes)<=e&&(c=!0)}if("session"===o.frequency){sessionStorage.getItem("off_canvas_"+t+"_opened")?c=!0:sessionStorage.setItem("off_canvas_"+t+"_opened",!0)}let e=window.awbOffCanvas.get(t,"last_open_date");const a=new Date;if("day"===o.frequency&&e){a<(e=new Date(e)).getTime()+864e5&&(c=!0)}if("week"===o.frequency&&e){a<(e=new Date(e)).getTime()+6048e5&&(c=!0)}if("month"===o.frequency&&e){e=new Date(e),a<new Date(e).setMonth(e.getMonth()+1)&&(c=!0)}if("xdays"===o.frequency&&o.frequency_xdays&&e){e=new Date(e);const n=parseInt(o.frequency_xdays);a<e.getTime()+24*n*60*60*1e3&&(c=!0)}}if("yes"===o.after_x_page_views){const e=window.awbOffCanvas.get(t,"page_views")||0;e<parseInt(o.number_of_page_views)&&(c=!0),window.awbOffCanvas.set(t,"page_views",e+1)}if("yes"===o.after_x_sessions){let e;sessionStorage.getItem("off_canvas_"+t)||(sessionStorage.setItem("off_canvas_"+t,!0),e=window.awbOffCanvas.get(t,"sessions")||0,window.awbOffCanvas.set(t,"sessions",e+1)),(e=window.awbOffCanvas.get(t,"sessions"))<=parseInt(o.number_of_sessions)&&(c=!0)}if(o.when_arriving_from){const e=document.referrer,a=window.location.host,n=o.when_arriving_from;let t;!e||e.includes(a)?t="internal":(t="external",/\.?(google|bing|yahoo|duckduckbot|yandex|baidu|msn|teoma|slurp)\./.test(e)&&(t="search")),c=!n.includes(t)}if("opened"===o.off_canvas_state&&"sliding-bar"===o.type&&o.has_js_rules&&!c&&(e(window).on("load",function(){window.awbOffCanvas.open_off_canvas(t)}),c=!0),!0===o.isOpened&&(c=!0),!c){if("yes"===o.on_page_load&&setTimeout(()=>{window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0},100),"yes"===o.time_on_page&&o.time_on_page_duration&&setTimeout(()=>{window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0},1e3*o.time_on_page_duration),"yes"===o.on_scroll){const a=o.scroll_direction,n=o.scroll_to,s=document.documentElement.scrollHeight;let i=o.scroll_position;if(i&&isNaN(i)&&(i=i.includes("%")?s/100*parseInt(i):parseInt(i)),"down"===a&&"element"===n){const e=o.scroll_element?document.querySelector(o.scroll_element):null;if(e){const a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0,a.unobserve(e.target))})});a.observe(e)}}else e(window).on("scroll",function(e){"up"===o.scroll_direction&&this.oldScroll>this.scrollY&&(o.isOpened||window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0),"down"===o.scroll_direction&&this.oldScroll<this.scrollY&&this.scrollY>=i&&(o.isOpened||window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0),this.oldScroll=this.scrollY})}if("yes"===o.exit_intent){const e=function(a){null==a.relatedTarget&&"select"!==a.target.nodeName.toLowerCase()&&(window.awbOffCanvas.open_off_canvas(t),document.removeEventListener("mouseout",e),o.isOpened=!0)};document.addEventListener("mouseout",e)}if("yes"===o.after_inactivity&&o.inactivity_duration){const e=o.inactivity_duration;let a;const n=function(){a=window.setTimeout(s,1e3*e)},s=function(){o.isOpened||window.awbOffCanvas.open_off_canvas(t),o.isOpened=!0},i=function(){document.addEventListener("mousemove",c,!1),document.addEventListener("mousedown",c,!1),document.addEventListener("keypress",c,!1),document.addEventListener("touchmove",c,!1),document.addEventListener("scroll",c,!1),n()},c=function(){window.clearTimeout(a),n()};i()}}})}(jQuery);