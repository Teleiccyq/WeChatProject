Page({
  data:{
    imgurl:[
      '/pages/img/banner1.png',
      '../img/banner2.jpg',
      '../img/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1300,
    bg: '#C79C77',
    Hei:"",

    infomation:[
      { "icon":"/pages/img/1.jpg",
        "title":"title1",
        "content":"content1"
      },
      { "icon":"/pages/img/2.jpg",
        "title":"title2",
        "content":"content2"
      },
      { "icon":"/pages/img/3.jpg",
        "title":"title3",
        "content":"content3"
      },
      { "icon":"/pages/img/4.jpg",
        "title":"title4",
        "content":"content4"
      },
      { "icon":"/pages/img/5.jpg",
        "title":"title5",
        "content":"content5"
      },
  ]
  },
  infoPage:function() {
      wx.navigateTo({
      url: '/pages/content/content',
    }) 
  }
})