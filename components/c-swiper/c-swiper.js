// components/c-swiper/c-swiper.js
Component({
  externalClasses: ['c-swiper-out'],
  /**
   * 组件的属性列表
   */
  properties: {
    pageData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerChangeItem (e) {
      let tmp = parseInt(e.detail.currentIndex)
      this.setData({
        currentIndex: tmp
      })
    },

    // swiper滑的时候的样式
    swiperChange (e) {
      // 1. 获取组件本身的对象
      let childBar =  this.selectComponent("#item-count")
      // 2. 调用对象的方法
      childBar._setCurrentIndex(e.detail.current)
    }
  }
})
