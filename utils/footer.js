const app = getApp()
const noOff = app.globalData.userInfo
function toIndex (e) {
  wx.navigateTo({
    url: '../index/index',
  })
}
function navigation(){
  getLocation()
}
function getLocation(){
  wx.openLocation({
    latitude: 39.5433200000,
    longitude: 116.6650500000, 
    scale: 28,
    name: '崇德箭射',
    address: '廊坊市西昌路颐和佳苑小区西侧200米（看守所北侧道路进入西行200米）',
  })
}
function bohao(){
  wx.makePhoneCall({
    phoneNumber: '0316-2277219',
    success:function(res){
    },
    fail:function(res){   
    }
  })
}
module.exports = {
  toIndex: toIndex,
  bohao:bohao,
  navigation: navigation
}