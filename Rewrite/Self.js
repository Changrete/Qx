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




阿里云盘解锁 vip+解锁倍率+自慰+完全自定义+没卵用
作者：脚本太丑了，不说🤐
用法：添加本地脚本+本地模块，根据个人 yy 意愿随意修改

仅按 Surge 写法测试，Qx 可用墨鱼脚本测试

感谢 P 老板Mock.js（轻修改）

#!name=数据重写
#!desc=数据重写

[Script]
阿里云盘首页简化 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/apps\/v1\/users\/home\/widgets, requires-body=1,script-path=mock.js, argument=("?items")->$1:null，，"test"&("?recentUsed")->$1:null，，"test1"

阿里云盘vip = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/business\/v1\.0\/users\/vip/info, requires-body=1,script-path=mock.js, argument=("?vipList")->$1: [{"code": "svip.20t"，， "promotedAt": 1675574551，， "expire": 4077667351，， "name": "8TB超级会员"} ]，，"test"&("?level")\s?:\s?("(.+?)"|\d|null)->$1: "20t"&("?name")\s?:\s?("(.+?)"|\d|null)->$1: "20T超级会员"

阿里云盘vip容量和限制 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/v2\/databox\/get_personal_info, requires-body=1,script-path=mock.js, argument=("?total_size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76&("?spu_id")\s?:\s?("(.+?)"|\d|null)->$1: "svip"&("?name")\s?:\s?("(.+?)"|\d|null)->$1: "超级会员"&("?is_expires")\s?:\s?("(.+?)"|\d|null)->$1: false&("?clarity_limit")->"test"，，"quota": 3}，，{"feature_id": "video"，，"feature_attr_id": "clarity_limit"，，"quota": -1}，，{"feature_id": "video"，，"feature_attr_id": "test"

阿里云盘vip容量和限制1 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/user\/driveCapacityDetails, requires-body=1,script-path=mock.js, argument=("?drive_total_size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76

阿里云盘vip容量明细 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/user\/capacityDetails, requires-body=1,script-path=mock.js, argument=("?expired")\s?:\s?("(.+?)"|\d|null)->$1: "permanent"&("?size")\s?:\s?("(.+?)"|\d|null)->$1: 1125888647843555573.76

阿里云盘vip描述 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/business\/v1\/users\/me\/vip\/info, requires-body=1,script-path=mock.js, argument=("?description")\s?:\s?("(.+?)"|\d|null)->$1: "永久有效"&("?rightButtonText")\s?:\s?("(.+?)"|\d|null)->$1: "还续撒费"&("?level")\s?:\s?("(.+?)"|\d|null)->$1: "20t"

#阿里云盘图标自定义 = type=http-response,pattern=https:\/\/api\.aliyundrive\.com\/adrive\/v1\/app\/logos, requires-body=1,script-path=mock.js, argument=("?labelCode")\s?:\s?("(.+?)"|\d|null)->$1: "acquired"
#&("?code")\s?:\s?("(.+?)"|\d|null)->$1: "2023-jan-daily-checkin"






hostname = portal.zjzwfw.gov.cn,api.shanghaionstar.com,www.youtube.com,rr*.googlevideo.com, youtubei.googleapis.com,%APPEND% api.aliyundrive.com






