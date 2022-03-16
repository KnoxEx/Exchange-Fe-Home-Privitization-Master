var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}(function(){var InternationSwiperExtend=function(){function InternationSwiperExtend(){_classCallCheck(this,InternationSwiperExtend)}_createClass(InternationSwiperExtend,[{key:'init',value:function init(){this.pageWidth=this.getPageWidth();this.renderBanner();if(this.imgPages){this.renderNav()}}},{key:'getPageWidth',value:function getPageWidth(){return Math.floor(this.pageTime/this.swiperTime*40)}},{key:'bindNavEvent',value:function bindNavEvent(){var _this=this;this.navList.forEach(function(target,index){target.addEventListener('click',function(){_this.page=index;_this.changeImg();_this.navList.forEach(function(item){item.classList.remove('active')});target.classList.add('active')},false)})}},{key:'renderNav',value:function renderNav(){var html='';var len=this.imgBox.length;for(var i=0;i<len;i+=1){var active='';if(!i){active='active'}html+='<li class="'+active+'">\n                                <span class="pageBg"></span>\n                                <span class="pageBar" style="width: '+this.pageWidth+'px">\n                                </span>\n                            </li>'}this.imgPages.innerHTML=html;this.navList=Array.prototype.slice.call(this.imgPages.querySelectorAll('li'));this.bindNavEvent();this.autoRun()}},{key:'changeImg',value:function changeImg(){this.imgBox.forEach(function(target){target.style.display='none'});this.imgBox[this.page].style.display='block';this.pageTime=0}},{key:'renderBanner',value:function renderBanner(){var _this2=this;this.imgList.forEach(function(target){if(_this2.imgPages){target.addEventListener('mouseover',function(){clearTimeout(_this2.timer)},false);target.addEventListener('mouseout',function(){_this2.autoRun()},false)}})}},{key:'autoRun',value:function autoRun(){var _this3=this;clearTimeout(this.timer);this.timer=setTimeout(function(){var target=_this3.navList[_this3.page].querySelector('.pageBar');target.style.width=Math.floor(_this3.pageTime/_this3.swiperTime*40)+'px';_this3.pageTime+=100;if(_this3.pageTime>_this3.swiperTime){target.style.width=0+'px';_this3.pageTime=0;_this3.page+=1;if(_this3.page>=_this3.imgBox.length){_this3.page=0}_this3.navList[_this3.page].click()}_this3.autoRun()},100)}}]);return InternationSwiperExtend}();window.InternationSwiperExtend=InternationSwiperExtend})();