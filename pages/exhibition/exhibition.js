// pages/exhibition/exhibition.js
const utils=require("../../utils/footer.js")
// console.log(utils)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[
      [
        "../../images/rongyu1.jpeg",
        "../../images/rongyu2.jpeg",
        "../../images/rongyu3.jpeg",
        "../../images/rongyu4.jpeg"      
      ],
      [
        "../../images/zhidao1.jpeg",
        "../../images/zhidao2.jpeg",
        "../../images/zhidao3.jpeg",
        "../../images/zhidao4.jpeg",
        "../../images/zhidao5.jpeg",
        "../../images/zhidao6.jpeg",
        "../../images/zhidao7.jpeg"       
      ],
      [
        "../../images/changdi1.jpg",  
        "../../images/changdi2.jpg",  
        "../../images/changdi3.jpg", 
        "../../images/changdi4.jpg",  
        "../../images/changdi5.jpg",  
        "../../images/changdi6.jpg"
      ]
    ],
    title:["荣誉成绩","教练指导","训练场地"],
    showtitle:"",
    imglist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var id=options.id;
    var images=that.data.images
    var title = that.data.title    
    that.setData({ imglist: images[id],showtitle:title[id]})
  },
  toIndex: function () {
    utils.toIndex();
  },
  bohao: function () {
    utils.bohao()
  },
  navigation: function () {
    utils.navigation()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})