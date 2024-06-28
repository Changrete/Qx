#浙里办广告
^https:\/\/portal\.zjzwfw\.gov\.cn\/app_api\/appHome\/selectStartPic url reject-200


#安吉星开屏广告
^https:\/\/api\.shanghaionstar\.com\/sos\/contentinfo\/v1\/public\/landingpage url reject-dict
#内部广告
^https:\/\/api\.shanghaionstar\.com\/sos\/mobileBizAggr\/v3\/public\/banners url reject-200
# > 安吉星去升级提示
^https?:\/\/api\.shanghaionstar\.com\/sos\/contentinfo\/v2 url reject-200



https://raw.githubusercontent.com/id77/QuantumultX/master/rewrite/Youtube_CC.conf#out=Hant
#YouTubeCC字幕
https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=(?!(zh|zh\-Hans)&)((?!&tlang=zh\-Hans).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hans HTTP/1.1$1




hostname = portal.zjzwfw.gov.cn,api.shanghaionstar.com,www.youtube.com,rr*.googlevideo.com, youtubei.googleapis.com,






