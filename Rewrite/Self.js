#浙里办广告
^https:\/\/portal\.zjzwfw\.gov\.cn\/app_api\/appHome\/selectStartPic url reject-200

#爱思
^https:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject-200
^https:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject-200


#安吉星开屏广告
^https:\/\/api\.shanghaionstar\.com\/sos\/contentinfo\/v1\/public\/landingpage url reject-dict
#内部广告
^https:\/\/api\.shanghaionstar\.com\/sos\/mobileBizAggr\/v3\/public\/banners url reject-200
# > 安吉星去升级提示
^https?:\/\/api\.shanghaionstar\.com\/sos\/contentinfo\/v2 url reject-200


#网易云移除播放页的各种小提示
^https:\/\/interface3\.music\.163\.com\/eapi\/link\/position\/show\/strategy\? url reject-dict
#网易云移除会员续费弹窗提醒
^https:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/recycle\? url reject-dict


hostname = portal.zjzwfw.gov.cn,list-app-m.i4.cn,api.shanghaionstar.com,interface3.music.163.com,