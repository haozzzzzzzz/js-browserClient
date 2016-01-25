/**
*	@author Hao Luo
* 	@blog http://hacksome.cn
* 	@date 2016/01/25
*/
(function(){
    var browserClient = window.browserClient = {
        haveDetect : false,

        isAndroid : false,
        isIOS : false,
        isMobile : false,
        isLtIE9 : false,
        isMacSafari : false,
        isWechat : false,
        detectUA : function(){
            this.haveDetect = true;

            var ua = navigator.userAgent;

            //for mac os safari browser
            if ( ua.indexOf('Safari') != -1 && ua.indexOf('Mac') != -1 && ua.indexOf('Chrome') == -1) {
                this.isMacSafari = true;
            }

            if( ua.indexOf('Android') > -1 ){
                this.isAndroid = true;
                this.isMobile = true;
            }else if( ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 ){
                this.isIOS = true;
                this.isMobile = true;
            }

            if( navigator.userAgent.indexOf('MicroMessenger') > -1 ){
                this.isWechat = true;
            }

            if( this.isMobile ){
                return;
            }

            if( ua.indexOf('MSIE 6.0') && ua.indexOf('MSIE 7.0' && ua.indexOf('MSIE 8.0')) ){
                this.isLtIE9 = true;
            }
        },

        doActions : function( actions ){
            if( this.haveDetect == false ){
                this.detectUA();
            }

            actions = actions || {};
            this._doAction( this.isMobile, actions.isMobile );
            this._doAction( this.isAndroid, actions.isAndroid );
            this._doAction( this.isIOS, actions.isIOS );
            this._doAction( this.isMacSafari, actions.isMacSafari );
            this._doAction( this.isWechat, actions.isWechat );
        },

        _doAction : function( b, fn ){
            if( b && typeof fn == 'function'){
                fn( this );
            }
        }
    };

    browserClient.detectUA();
})();