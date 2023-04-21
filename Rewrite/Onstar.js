[rewrite_local]


#安吉星开屏广告
^https:\/\/api\.shanghaionstar\.com\/sos\/contentinfo\/v1\/public\/landingpage url reject-dict
#内部广告
^https:\/\/api\.shanghaionstar\.com\/sos\/mobileBizAggr\/v3\/public\/banners url reject-200


hostname = cms.cw.sgmlink.com, api.shanghaionstar.com,