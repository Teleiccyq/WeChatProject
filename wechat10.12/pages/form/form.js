// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    dizhi:"",
  },
  bindDateChange : function (e) {
    this.setData({
      time:e.detail.value
    })
  },
  bindRegionChange : function (e) {
    console.log(e);
    this.setData({
      dizhi:e.detail.value
    })
  },
  formChange:function (e) {
    console.log("获取的值",e);
    this.setData({
      username:e.detail.value.username,
      sex:e.detail.value.sex,
      age:e.detail.value.age,
      hobby:e.detail.value.hobby,
    })
    wx.navigateTo({
      url: '../info/info',
    })
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