// ==UserScript==
// @name         syjc.jtzyzg.org.cn自动播放插件
// @include      http://web.syjc.jtzyzg.org.cn
// @include      https://web.syjc.jtzyzg.org.cn
// @version      1.0
// @description  autoplay
// @author       JoshuaYang
// @match        http://syjc.jtzyzg.org.cn/SYJC/LEAP/syjcEdu/html/videonew*
// @match        http://syjc.jtzyzg.org.cn/SYJC/LEAP/syjcEdu/html/videonew*
// @match        http://syjc.jtzyzg.org.cn/SYJC/LEAP/syjcEdu/html/videonew*
// @match        http://syjc.jtzyzg.org.cn/SYJC/LEAP/syjcEdu/html/videonew*
// @grant        none
// @namespace http://web.syjc.jtzyzg.org.cn
// ==/UserScript==

(function() {
    'use strict';

    window.onfocus = function(){console.log('on focus')};
    window.onblur = function(){console.log('on blur')};
})();