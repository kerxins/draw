//封装的微信微信接口
var WECHAT_URL="/wechat";
var shareParam = {
    'shareTitle' : "世界那么大一起去看看",
    'shareDesc' : "深圳建行银联龙卡出境游征文大赛",
    'shareUrl' : "http://ccbzw.jikehd.com/test/index.html",
    'shareImg' : "http://ccbzw.jikehd.com/ccbtour/img/share.png"
};
function getSignature(){ 
    $.ajax({   
        url: WECHAT_URL + "/getSignature",
        dataType: 'json',
        type: 'GET',
        data: {'url':"http://ccbzw.jikehd.com/test/index.html"},
        success: wxConfig,
        error: function () {  
        } 
        
        
    });
}
 
//jssdk分享授权
function wxConfig(result) {
    if(result.signature==null){
        return;
    }
    wx.config({
//      debug: true,
        appId: 'wxdeb60ae7636eeb7e', 
        timestamp: 1459431611,
        nonceStr: '1639590669',
        signature: result.signature,
        
        jsApiList: [
        //'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage'
        ]
    });

    wx.ready(function(){
        share();
    });
}

//分享内容设置
function share(){
    wx.onMenuShareAppMessage({
      title: shareParam.shareTitle,
      desc: shareParam.shareDesc,
      link: shareParam.shareUrl,
      imgUrl: shareParam.shareImg,
      success: function () { 
      },
      cancel: function () { 
      }
    });

    wx.onMenuShareTimeline({
      title: shareParam.shareTitle,
      desc: shareParam.shareDesc,
      link: shareParam.shareUrl,
      imgUrl: shareParam.shareImg,
      success: function () { 

      },
      cancel: function () { 
            }
    });
}

//分享的参数

//这个方法，获得授权，可以在页面加载完成后直接调用
getSignature();
