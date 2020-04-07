// components/c-swiper-header/c-swiper-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbarData:{
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

    // 封装一个方法给父组件调用
    _setCurrentIndex (index) {
      this.setData({
        currentIndex: index
      })
    },


    _handlderTabbar (e) {
      let tmp = e.currentTarget.id
      this.setData({
        currentIndex: tmp
      })

    // 子组件自定义事件 并且把数据传递出去  跟vue的$emit一毛一样
      this.triggerEvent("selectItem", { currentIndex: tmp })
    },
  }
})
