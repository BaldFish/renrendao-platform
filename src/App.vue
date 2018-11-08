<template>
  <div id="app">
    <div class="head-wrap" ref="head">
      <div class="head">
        <img src="@/common/images/logo_header.png" alt="">
        <ul class="">
          <li class="nav">
            <span></span><router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <span></span><a href="javascript:void(0)">APP下载</a>
          <li class="nav">
          <span></span><a href="javascript:void(0)">关于我们</a>
          </li>
        </ul>
      </div>
    </div>
    <router-view class="main"></router-view>
    <div class="footer-wrap">
      <div class="footer">
        <ul class="fl_ul">
          <li><a href="/home">首页</a></li>
          <li><a href="javascript:void(0)">APP下载</a></li>
          <li><a href="javascript:void(0)">关于我们</a></li>
        </ul>
        <ul class="fr_ul">
          <li>工作时间: 9:30～18:30</li>
          <li>服务电话：010-58205388</li>
          <li>联系地址：北京市朝阳区建国路93号万达广场8号楼808</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  
  export default {
    name: "App",
    mounted() {
      /*window.addEventListener('scroll', this.headScroll)*/
    },
    methods: {
      /*headScroll: function () {
        window.scrollY > 30 ? (this.$refs.head.style.backgroundColor = "rgba(0,0,0,1)") : (this.$refs.head.style.backgroundColor = "rgba(0,0,0,0.5)")
      },*/
    },
  };
</script>

<style lang="stylus">
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .head-wrap {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0);
    .head {
      position relative
      box-sizing: border-box
      width: 1200px;
      margin: 0 auto;
      padding 4px 35px
      font-size 0
      img {
        vertical-align: top
      }
      ul {
        width 919px
        display inline-block
        text-align right
        margin-top 28px
        .nav {
          display: inline-block;
          margin-right 70px
          font-size 0px
          box-sizing: border-box
          span{
            display inline-block
            width: 4px;
            height: 4px;
            background-color: #ffffff;
            border-radius 2px
            margin-right 8px
          }
          & > a {
            display: inline-block;
            font-size 14px
            color #ffffff
            box-sizing border-box
            line-height 54px
            &.router-link-active, &:hover {
              color: #ffffff;
              border-bottom 1px solid #ffffff
            }
          }
        }
        .nav:last-child{
          margin-right 0
        }
      }
    }
  }
  
  .main {
    flex: 1;
    box-sizing: border-box;
    margin: 0 auto;
    width 100%
    min-width 1200px
  }
  
  .footer-wrap {
    width 100%
    min-width 1200px
    background-color: #222426;
    .footer {
      background-color: #222426;
      box-sizing: border-box
      width 1200px
      height 130px
      margin 0 auto
      font-size 0
      text-align center
      padding-top 29px
      ul{
        font-family: PingFangSC-Regular;
        display inline-block
        font-size 14px
        color: #ffffff;
        vertical-align middle
        li{
          line-height 24px
        }
      }
      .fl_ul{
        font-size 0
        margin-right 202px
        li{
          font-size 14px
          display inline-block
          margin-right 110px
          a{
            color #ffffff
          }
        }
        li:last-child{
          margin-right 0px
        }
      }
      .fr_ul{
        text-align left
      }
    }
  }
</style>
