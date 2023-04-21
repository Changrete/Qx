# > 哔哩哔哩
# >>  “我的信息”的修改
^https?:\/\/.+\.(bilibili|biliapi)\.(com|net)\/x\/v2\/account\/myinfo\?access_key url script-response-body https://raw.githubusercontent.com/Changrete/Qx/main/Rewrite/bilibili/MyInfo.js
# >>  “空间”的修改
^https?:\/\/.+\.(bilibili|biliapi)\.(com|net)\/x\/v2\/space\?access_key url script-response-body https://raw.githubusercontent.com/Changrete/Qx/main/Rewrite/bilibili/Space.js

# >>  “大会员”的修改
^https?:\/\/.+\.(bilibili|biliapi)\.(com|net)\/x\/vip\/web\/vip_center\/combine url script-response-body https://raw.githubusercontent.com/Changrete/Qx/main/Rewrite/bilibili/Center.js
