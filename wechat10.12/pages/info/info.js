var app = getApp();
// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    sex: "",
    age: "",
    hobby: "",
    phoneNum: "",
    years: "",
    localtion: "",
    introduce: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        username:app.globalData.username,
        sex:app.globalData.sex,
        age:app.globalData.age,
        hobby:app.globalData.hobby,
        phoneNum:app.globalData.phoneNum,
        years:app.globalData.years,
        localtion:app.globalData.localtion,
        introduce:app.globalData.introduce,
      })

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

  },
})