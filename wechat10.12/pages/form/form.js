var app = getApp();
// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "",
    dizhi: "",
  },
  bindDateChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log(e);
    this.setData({
      dizhi: e.detail.value
    })
  },
  formChange: function (e) {
    console.log("获取的值", e);
    this.setData({
      username:e.detail.value.username,
    }),
    app.globalData.username = e.detail.value.username,
      app.globalData.sex = e.detail.value.sex,
      app.globalData.age = e.detail.value.age,
      app.globalData.hobby = e.detail.value.hobby,
      app.globalData.phoneNum = e.detail.value.phoneNum,
      app.globalData.years = e.detail.value.years,
      app.globalData.localtion = e.detail.value.localtion,
      app.globalData.introduce = e.detail.value.introduce,
      app.globalData.agree = e.detail.value.agree,
      wx.navigateTo({
        url: '../info/info',
      })
    console.log(app.globalData.username);

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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