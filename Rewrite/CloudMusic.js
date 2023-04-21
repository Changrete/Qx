[rewrite_local]



#网易云移除播放页的各种小提示
^https:\/\/interface3\.music\.163\.com\/eapi\/link\/position\/show\/strategy\? url reject-dict
#网易云移除会员续费弹窗提醒
^https:\/\/interface3\.music\.163\.com\/eapi\/vipauth\/app\/auth\/recycle\? url reject-dict


hostname = interface3.music.163.com