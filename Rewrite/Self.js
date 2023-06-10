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








#https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf
#Google重定向
# Redirect Google Search Service
^https?:\/\/(www.)?(g|google)\.cn url 302 https://www.google.com

# Redirect Google Maps Service
^https?:\/\/(ditu|maps).google\.cn url 302 https://maps.google.com

# Redirect HTTP to HTTPS
^https?:\/\/(www.)?taobao\.com\/ url 302 https://taobao.com/
^https?:\/\/(www.)?jd\.com\/ url 302 https://www.jd.com/
^https?:\/\/(www.)?mi\.com\/ url 302 https://www.mi.com/
^https?:\/\/you\.163\.com\/ url 302 https://you.163.com/
^https?:\/\/(www.)?suning\.com\/ url 302 https://suning.com/
^https?:\/\/(www.)?yhd\.com\/ url 302 https://yhd.com/

# Redirect False to True
# > Firefox - www.firefox.com.cn
^https?:\/\/(www.)?firefox\.com\.cn\/(download\/)?$ url 302 https://www.mozilla.org/zh-CN/firefox/new/
# > IGN China to IGN Global
^https?:\/\/(www.)?ign\.xn--fiqs8s\/ url 302 http://cn.ign.com/ccpref/us
# > Fake Website Made By C&J Marketing
^https?:\/\/(www.)?abbyychina\.com\/ url 302 https://www.abbyy.cn/
^https?:\/\/(www.)?alienskins\.cn\/ url 302 https://exposure.software/
^https?:\/\/(www.)?anydeskchina\.cn\/ url 302 https://anydesk.com/zhs
^https?:\/\/(www.)?bartender\.cc\/ url 302 https://www.macbartender.com/
^https?:\/\/(www.)?(betterzipcn|betterzip)\.(com|net)\/ url 302 https://macitbetter.com/
^https?:\/\/(www.)?beyondcompare\.cc\/ url 302 https://www.scootersoftware.com/
^https?:\/\/(www.)?bingdianhuanyuan\.cn\/ url 302 https://www.faronics.com/zh-hans/products/deep-freeze
^https?:\/\/(www.)?chemdraw\.com\.cn\/ url 302 https://www.perkinelmer.com.cn/
^https?:\/\/(www.)?codesoftchina\.com\/ url 302 https://www.teklynx.com/
^https?:\/\/(www.)?coreldrawchina\.com\/ url 302 https://www.coreldraw.com/cn/
^https?:\/\/(www.)?crossoverchina\.com\/ url 302 https://www.codeweavers.com/
^https?:\/\/(www.)?dongmansoft\.com\/ url 302 https://www.udongman.cn/
^https?:\/\/(www.)?earmasterchina\.cn\/ url 302 https://www.earmaster.com/
^https?:\/\/(www.)?easyrecoverychina\.com\/ url 302 https://www.ontrack.com/
^https?:\/\/(www.)?ediuschina\.com\/ url 302 https://www.grassvalley.com/
^https?:\/\/(www.)?flstudiochina\.com\/ url 302 https://www.image-line.com/
^https?:\/\/(www.)?folxchina\.cn\/ url 302 https://mac.eltima.com/cn/download-manager.html
^https?:\/\/(www.)?formysql\.com\/ url 302 https://www.navicat.com.cn/
^https?:\/\/(www.)?guitarpro\.cc\/ url 302 https://www.guitar-pro.com/
^https?:\/\/(www.)?huishenghuiying\.com\.cn\/ url 302 https://www.coreldraw.com/cn/
^https?:\/\/(www.)?hypeapp\.cn\/ url 302 https://tumult.com/hype/
^https?:\/\/hypersnap\.mairuan\.com\/ url 302 https://www.hyperionics.com/
^https?:\/\/(www.)?iconworkshop\.cn\/ url 302 https://www.axialis.com/
^https?:\/\/(www.)?idmchina\.net\/ url 302 https://www.internetdownloadmanager.com/
^https?:\/\/(www.)?imazingchina\.com\/ url 302 https://imazing.com/zh
^https?:\/\/(www.)?imindmap\.cc\/ url 302 https://www.ayoa.com/previously-imindmap/
^https?:\/\/(www.)?jihehuaban\.com\.cn\/ url 302 https://www.chartwellyorke.com/sketchpad/x24795.html
^https?:\/\/hypersnap\.mairuan\.com\/ url 302 https://www.keyshot.com/
^https?:\/\/(www.)?kingdeecn\.cn\/ url 302 http://www.kingdee.com/
^https?:\/\/(www.)?logoshejishi\.com url 302 https://www.sothink.com/product/logo-design-software/
^https?:\/\/logoshejishi\.mairuan\.com\/ url 302 https://www.sothink.com/product/logo-design-software/
^https?:\/\/(www.)?luping\.net\.cn\/ url 302 https://www.techsmith.com/
^https?:\/\/(www.)?mathtype\.cn\/ url 302 https://www.dessci.com/
^https?:\/\/(www.)?mindmanager\.(cc|cn)\/ url 302 https://www.mindjet.com/cn/
^https?:\/\/(www.)?mindmapper\.cc\/ url 302 https://www.mindmapper.com/
^https?:\/\/(www.)?(mycleanmymac|xitongqingli)\.com\/ url 302 https://macpaw.com/
^https?:\/\/(www.)?nicelabel\.cc\/ url 302 https://www.nicelabel.com/zh/
^https?:\/\/(www.)?ntfsformac\.cc\/ url 302 https://www.tuxera.com/products/tuxera-ntfs-for-mac-cn/
^https?:\/\/(www.)?ntfsformac\.cn\/ url 302 https://china.paragon-software.com/home-mac/ntfs-for-mac/
^https?:\/\/(www.)?officesoftcn\.com\/ url 302 https://www.microsoft.com/zh-cn/microsoft-365
^https?:\/\/(www.)?overturechina\.com\/ url 302 https://sonicscores.com/
^https?:\/\/(www.)?passwordrecovery\.cn\/ url 302 https://cn.elcomsoft.com/aopr.html
^https?:\/\/(www.)?pdfexpert\.cc\/ url 302 https://pdfexpert.com/zh
^https?:\/\/(www.)?photozoomchina\.com\/ url 302 https://www.benvista.com/
^https?:\/\/(www.)?shankejingling\.com\/ url 302 https://www.sothink.com/product/flashdecompiler/
^https?:\/\/cn\.ultraiso\.net\/ url 302 https://cn.ezbsystems.com/ultraiso/
^https?:\/\/(www.)?vegaschina\.cn\/ url 302 https://www.vegascreativesoftware.com/
^https?:\/\/(www.)?xshellcn\.com\/ url 302 https://www.netsarang.com/zh/xshell/
^https?:\/\/(www.)?yuanchengxiezuo\.com\/ url 302 https://www.teamviewer.com/
^https?:\/\/(www.)?zbrushcn.com/ url 302 https://pixologic.com/
^https?:\/\/(www.)?anydeskchina.cn/ url 302 https://anydesk.com/zhs

# AbeamTV - api.*.abema-tv.com
^https?:\/\/api\.[\w-]+\.abema-tv\.com\/v\d\/ip\/check url reject-200

# bstar intl
(^https?:\/\/app\.biliintl\.com\/(x\/)?(intl|dm|reply|history|v\d\/(fav|msgfeed)).+?)(&s_locale=zh-Hans_[A-Z]{2})(.+?)(&sim_code=\d+)(.+) url 302 $1&s_locale=zh-Hans_PH$6&sim_code=51503$8

^https?:\/\/passport\.biliintl\.com\/x\/intl\/passport-login\/(sms\/send|reg\/sms|oauth2\/access_token|login\/sms) url script-request-body https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Rewrite/bstar.js
(^https?:\/\/passport\.biliintl\.com\/x\/intl\/passport-login\/.+)(&s_locale=zh-Hans_[A-Z]{2})(.+)(&sim_code=\d+)(.+) url 302 $1&s_locale=zh-Hans_PH$35&sim_code=51503$5

^https?:\/\/app\.biliintl\.com\/(intl\/gateway\/v\d\/app\/data\/report\/heartbeat\/mobile|x\/(history|reply)/v\d/add) url script-request-body https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Rewrite/bstar.js

# AICoin
^http:\/\/(www.)?aicoin\.cn\/$ url 302 https://www.aicoin.com/






#https://raw.githubusercontent.com/qiangxinglin/Emby/main/QuantumultX/emby.conf
# Emby解锁播放权限
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://raw.githubusercontent.com/qiangxinglin/Emby/main/scripts/emby.js





#https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/colorweather.conf
#彩云天气会员
^http[s]?:\/\/biz\.(caiyunapp|cyapi)\.(com|cn)\/v2\/user.*$ url script-response-body https://raw.githubusercontent.com/WeiRen0/Scripts/main/cytq.js
^https:\/\/ad\.caiyunapp\.com\/ url reject








https://raw.githubusercontent.com/id77/QuantumultX/master/rewrite/Youtube_CC.conf#out=Hant
#YouTubeCC字幕
https:\/\/www.youtube.com\/api\/timedtext\?.+&lang=(?!(zh|zh\-Hans)&)((?!&tlang=zh\-Hans).)*$ url request-header \sHTTP/1\.1(\r\n) request-header &tlang=zh-Hans HTTP/1.1$1





hostname = portal.zjzwfw.gov.cn,list-app-m.i4.cn,api.shanghaionstar.com,interface3.music.163.com,www.google.cn,www.firefox.com.cn,api.*.abema-tv.com,app.biliintl.com,passport.biliintl.com,mb3admin.com,*.caiyunapp.*,*cyapi*,www.youtube.com,







