const utils = require("../../utils/footer.js")
Page({
  data: {
    lunboarr: [
      {
        img: '../../images/1.jpg'
      },
      {
        img: '../../images/2.jpeg'
      },
      {
        img: '../../images/3.jpeg'
      },
      {
        img: '../../images/4.jpg'
      },
      {
        img: '../../images/5.jpg'
      },
      {
        img: '../../images/6.jpeg'
      }
    ],
    title: [
      "年卡2000元，季卡600元，月卡300元",
      "次卡500元，单人单次一小时消费30元"
    ],
    autoplay: true,
    interval: 2000,
    duration: 500,
    intervaltext:2700,
    vertical:true
  },
  toExhibition:function(e){
     var id = e.currentTarget.dataset.id
     wx.navigateTo({
       url: '../exhibition/exhibition?id='+id,
     })
  },
  bohao:function(){
    utils.bohao()
  },
  navigation:function(){
    utils.navigation()
  },
  onShareAppMessage:function(options){
    return {
      title: '崇德箭射',
      path: '/page/index/index',
    }
  }
})
