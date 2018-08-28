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
  onChange:function(event){
    let _this =this;
    _this.setData({
      inputValue:event.detail.value
    })
    _this.shareChange(event.detail.value)
  },
  /**
   * 
   *处理查询 
   */
  shareChange: function (_info) {

    let _this = this, newList=null;
    if (_this.data.inputValue || _info){
      let remark = _this.data.inputValue ? _this.data.inputValue:_info
      newList = _this.data.list.filter((item) => {
        return item.name.includes(remark)
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

  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '18617270763',
      success:function(){

      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '人的一生有一个半童年。一个童年在自己小时候，而半个童年在自己孩子的小时候。',
      path: '/pages/detail/index?id=' + this.data.data.id
    }
    
  },
  /**
   * 跳转回前一页 
   */
  goBackHandler: function () {
    wx.navigateBack({})
  }
})