<template>
  <div class="aboutUs">
    <div class="contactUs">
    </div>
    <p class="text">北京市 朝阳区建国路93号万达广场8号楼808</p>
    <div id="allmap" class="map"></div>
  </div>
</template>

<script>
  export default {
    name: "aboutUs",
    components: {},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.ready()
    },
    watch: {},
    computed: {},
    methods: {
      ready () {
        // 百度地图API功能
        // 创建Map实例
        var map = new BMap.Map("allmap");
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(116.331398,39.897445),16);
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);
    
        // 定位--大望路万达广场8号楼
        var new_point = new BMap.Point(116.477472,39.915897);
        // 创建标注
        var marker = new BMap.Marker(new_point);
        // 将标注添加到地图中
        map.addOverlay(marker);
        map.panTo(new_point);
    
        // 添加工具条、比例尺控件
        map.addControl(new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
    
      }
    },
  }
</script>

<style scoped lang="stylus">
  .aboutUs {
    margin-top 100px
    .contactUs{
      box-sizing border-box
      height 624px
      background-image: url('./images/contact.png');
      background-position: top center;
      background-repeat: no-repeat;
    }
    .text{
      width: 232px;
      font-size: 20px;
      line-height 24px
      color: #666666;
      text-align center
      margin 0 auto
      margin-top 40px
    }
    #allmap{
      margin 0 auto
      max-width 1920px
      min-width 1200px
      height 400px
      background-color #ffffff
      margin-top 22px
    }
    .map{}
  }
</style>
