var INFO = wx.getSystemInfoSync();
var { FAV, API } = getApp();
var utils =require('./../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    STATUSBAR_HEIGHT: INFO.statusBarHeight,
    inputValue: '',
    bgImg: wx.getStorageSync('DATAS')[0].img_url,
    list: utils.apiJson
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 处理输入框
   */
  onChangeInput: function (event) {
    this.setData({
      inputValue: event.detail.value
    })

  },
  /**
   * 
   *处理查询 
   */
  shareChange: function () {
    let _this = this, newList=null;
    if (_this.data.inputValue){
      newList = _this.data.list.filter((item) => {
        return item.name.includes(_this.data.inputValue)
      });
      if (newList.length>0){
        _this.setData({
          list: newList
        })
      }else{
        wx.showToast({
          title: '没有找到数据，去定制看看吧！',
          icon:'none',

        })
      }
      
    }else{
      _this.setData({
        list:utils.apiJson
      })
    }
    
    
    
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
  /**
   * 跳转回前一页 
   */
  goBackHandler: function () {
    wx.navigateBack({})
  }
})