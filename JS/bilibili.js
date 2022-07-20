let body = JSON.parse($response.body);
body['data']['official_verify']['type'] = 1;
body['data']['official_verify']['desc'] = "管理员";
body['data']['vip_type'] = 2;
body['data']['vip_section_v2'] = {};
body['data']['vip_section'] = {};
body['data']['vip'] = {
    "status": 1,
    "avatar_subscript": 1,
    "nickname_color": "#FB7299",
    "due_date": 1964448000,
    "role": 1,
    "vip_pay_type": 0,
    "avatar_subscript_url": "http:\/\/i0.hdslb.com\/bfs\/vip\/icon_Certification_big_member_22_3x.png",
    "label": {
        "bg_color": "#FB7299",
        "bg_style": 1,
        "path": "",
        "text": "十年大会员",
        "label_theme": "ten_annual_vip"
    },
    "type": 2,
    "theme_type": 0
