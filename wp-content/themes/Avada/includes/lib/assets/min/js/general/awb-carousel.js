!function(e){"use strict";var i={clientX:0,clientY:0,$dragEl:"",lerpDamp:.18,bindEvents:function(){document.addEventListener("mousemove",function(e){i.clientX=e.clientX,i.clientY=e.clientY})},init:function(e){this.lastX=this.clientX,this.lastY=this.clientY,this.$el=e,this.createMarkup(),this.mouseBind()},createMarkup:function(){0==e(".awb-cursor-nav-helper").length?(e("body").append('<div class="awb-cursor-nav-helper"><span><i class="awb-icon-angle-left awb-cursor-nav-left"></i><i class="awb-icon-angle-right awb-cursor-nav-right"></i></span></div>'),this.$dragEl=e(".awb-cursor-nav-helper"),this.pointerBind()):this.$dragEl=e(".awb-cursor-nav-helper").removeAttr("style")},mouseBind:function(){var e=this;e.$el.on("mouseenter",function(){var i,s;e.$dragEl.addClass("awb-cursor-nav-helper--visible"),i=e.$el.is("[data-cursor-color-mode]")?"color-"+e.$el.attr("data-cursor-color-mode"):"",s=e.$el.is("[data-cursor-color]")?e.$el.attr("data-cursor-color"):"",e.$dragEl.removeClass("color-auto color-custom"),e.$dragEl.addClass(i),""!==s&&e.$dragEl[0].style.setProperty("--awb-cursor-color",s)}),e.$el.on("mouseleave",function(){e.$dragEl.removeClass("awb-cursor-nav-helper--visible")})},pointerBind:function(){this.lastY=this.linearInterpolate(this.lastY,this.clientY,this.lerpDamp),this.lastX=this.linearInterpolate(this.lastX,this.clientX,this.lerpDamp),this.$dragEl[0].style.transform="translateX("+this.lastX+"px) translateY("+this.lastY+"px)",requestAnimationFrame(this.pointerBind.bind(this))},linearInterpolate:function(e,i,s){return(1-s)*e+s*i}},s=function(s){(void 0!==s?jQuery('div[data-cid="'+s+'"]').find(".awb-carousel"):jQuery(".awb-carousel")).each(function(){var s=jQuery(this).attr("data-layout")?jQuery(this).data("layout"):"carousel",t=!!jQuery(this).attr("data-slide-effect")&&jQuery(this).data("slide-effect"),r=!(!jQuery(this).attr("data-mousepointer")||"custom"!==jQuery(this).data("mousepointer")),a=!(!jQuery(this).attr("data-autoplay")||"yes"!==jQuery(this).data("autoplay")),n=!jQuery(this).attr("data-loop")||"no"!==jQuery(this).data("loop"),o=jQuery(this).parents(".related-posts").length?awbCarouselVars.related_posts_speed:awbCarouselVars.carousel_speed,l=!(!jQuery(this).attr("data-touchscroll")||"yes"!==jQuery(this).data("touchscroll")),u=jQuery(this).attr("data-columns")?jQuery(this).data("columns"):6,d=jQuery(this).data("scrollitems")?parseInt(jQuery(this).data("scrollitems")):u,c=jQuery(this).attr("data-itemmargin")?parseInt(jQuery(this).data("itemmargin"),10):44,h=jQuery(this).find(".swiper-wrapper").children().length,p={loop:n,spaceBetween:c,speed:500,autoHeight:!0,pagination:{el:jQuery(this).find(".swiper-pagination")[0],clickable:!0},navigation:{nextEl:jQuery(this).find(".awb-swiper-button-next")[0],prevEl:jQuery(this).find(".awb-swiper-button-prev")[0]},breakpoints:{},on:{}};this.swiper||(jQuery(this).closest(".fusion-builder-row")&&jQuery(this).css("max-width",jQuery(this).closest(".fusion-builder-row").width()),"carousel"===s?(p.slidesPerView=jQuery(this).data("columnssmall")?jQuery(this).data("columnssmall"):Math.min(2,u),p.slidesPerGroup=p.slidesPerView,p.breakpoints[fusionJSVars.visibility_small]={slidesPerView:jQuery(this).data("columnsmedium")?jQuery(this).data("columnsmedium"):Math.min(4,u)},p.breakpoints[fusionJSVars.visibility_small].slidesPerGroup=p.breakpoints[fusionJSVars.visibility_small].slidesPerView,p.breakpoints[fusionJSVars.visibility_medium]={slidesPerView:u,slidesPerGroup:d},h<=p.breakpoints[fusionJSVars.visibility_small].slidesPerView&&(p.breakpoints[fusionJSVars.visibility_small].slidesPerView=h),h<=p.breakpoints[fusionJSVars.visibility_medium].slidesPerView&&(p.breakpoints[fusionJSVars.visibility_medium].slidesPerView=h,p.loop=!1,p.autoplay=!1),p.on.breakpoint=function(e,i){n&&h<=i.slidesPerView?jQuery(e.el).find(".awb-swiper-button").addClass("swiper-button-hidden"):n&&jQuery(e.el).find(".awb-swiper-button").removeClass("swiper-button-hidden")}):(p.slidesPerView=1,p.slidesPerGroup=1,"fade"!==t||l||(p.effect="fade",p.fadeEffect={crossFade:!0})),l&&(p.touchEventsTarget="container",p.grabCursor=!0,r&&(p.on.touchMove=function(e,s){i.clientY=s.clientY,i.clientX=s.clientX},p.on.touchStart=function(){e(".awb-cursor-nav-helper").addClass("awb-cursor-nav-helper--touch-start"),jQuery(this.el).find(".swiper-wrapper").addClass("is-touch-start")},p.on.touchEnd=function(){e(".awb-cursor-nav-helper").removeClass("awb-cursor-nav-helper--touch-start"),jQuery(this.el).find(".swiper-wrapper").removeClass("is-touch-start")})),p.allowTouchMove=l,a&&(p.autoplay={delay:parseInt(o,10)}),p.on.init=function(){if(l&&r&&i.init(jQuery(this.el)),"carousel"===s&&jQuery(this.el).find(".fusion-builder-live-child-element").length&&jQuery(this.el).find(".swiper-slide-duplicate").removeClass("fusion-builder-live-child-element fusion-builder-data-cid"),"carousel"===s&&jQuery(this.el).closest(".fusion-image-carousel").hasClass("lightbox-enabled")){const e=this.slides[this.activeIndex],i=jQuery(e).find("a").data("rel");if(void 0!==window.$ilInstances[i]){const e=this;jQuery(this.el).find(`.swiper-slide-duplicate a[data-rel="${i}"]`).on("click",function(i){i.preventDefault();const s=jQuery(this).closest(".swiper-slide-duplicate").data("swiper-slide-index");jQuery(e.el).find(`.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="${s}"] a[data-rel]`).trigger("click")})}}},new Swiper(jQuery(this)[0],p))})};jQuery(window).on("load fusion-reinit-related-posts-carousel fusion-reinit-carousels fusion-element-render-fusion_images fusion-element-render-fusion_featured_products_slider fusion-element-render-fusion_products_slider fusion-element-render-fusion_portfolio fusion-element-render-fusion_tb_related fusion-element-render-fusion_tb_woo_related fusion-element-render-fusion_tb_woo_upsells fusion-element-render-fusion_post_cards fusion-column-resized",function(e,i){s(i)}),jQuery(window).on("fusion-dynamic-content-render",function(e,i){0<jQuery(i).find(".awb-carousel").length&&s()}),jQuery(window).on("fusion-resize-horizontal",function(){jQuery(".awb-carousel").length&&jQuery(".awb-carousel").each(function(){jQuery(this).closest(".fusion-builder-row").length&&jQuery(this).css("max-width",jQuery(this).closest(".fusion-builder-row").width())})}),e(function(){i.bindEvents()})}(jQuery);