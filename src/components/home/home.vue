<template>
  <div class="home">
    <div class="home_top">
      <div class="img_box">
        <img src="./images/logo_body.png" alt="">
      </div>
    </div>
    <div class="home_body">
      <div class="code">
        <div class="android">
          <img src="./images/Android.png" alt="">
          <p>Android钱包二维码</p>
        </div>
        <div class="gongzhonghao">
          <img src="./images/gongzhonghao.png" alt="">
          <p>公众号</p>
        </div>
      </div>
      <div class="tabs_nav">
        <ul class="tabs">
          <li class="li-tab" v-for="(item,index) of tabsParam" @click="toggleTabs(index)" :class="{active:index===nowIndex}">{{item}}</li>
        </ul>
      </div>
      <div class="divTab" v-show="nowIndex===0">
        <h3><img src="./images/dao.png" alt=""></h3>
        <p>人人道，是<span>为车之道</span>。背靠汽车后龙头平台，近30年市场深耕，集数据、技术、品牌口碑为一身，利用全新技术构建商业新生态。</p>
        <p>人人道，是<span>为DAO之道</span>。DAO即基于共识之分布式自治组织。未来商业必将走向无数DAO组织，未来商业之世界大同趋势下，须践行为DAO之道，方得始终。</p>
        <p>人人道，是<span>为人之道</span>。“区块链”三字，荣耀与争议并存。有兢业向上之精诚技术，亦不乏扰乱风气之浊流。人人道虽为链圈新势力，但志存正道、匡正链圈风气之理想；我们深信，欲行大事、成大业，须固正为人之道。</p>
      </div>
      <div class="divTab two" v-show="nowIndex===1">
        <h3>人人道，全球首款集结积分、资产、身份为一体的基于区块链技术的新型移动端应用。</h3>
        <p><i></i><span>在这里，</span>您可以一键免费生成您的区块链车证及身份证，生成即可赚钱；</p>
        <p><i></i><span>在这里，</span>您是手中数据唯一的主权所有者，一旦上链，尊享永久收益权；</p>
        <p><i></i><span>在这里，</span>倚靠区块链技术，将带您进入一个前所未有的新世界。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {baseURL} from '@/common/js/public.js';
  import _ from "lodash";
  export default {
    name: "home",
    components: {},
    data() {
      return {
        tabsParam: ["关于人人道", "详解人人道"],
        nowIndex: 0,
      }
    },
    mounted() {
    },
    methods: {
      toggleTabs(index) {
        this.nowIndex = index;
      },
    },
  }
</script>

<style scoped lang="stylus">
  .home {
    .home_top {
      box-sizing border-box
      height 786px
      background-image: url('./images/banner.png');
      background-position: top center;
      background-repeat: no-repeat;
      padding-top 240px
      .img_box{
        width 1200px
        margin 0 auto
        text-align center
        font-size 0
      }
    }
    .home_body{
      width 1200px
      margin 0 auto
      background-image: url('./images/logo_zt.png');
      background-position: top 98px left 10px;
      background-repeat: no-repeat;
      position relative
      padding-top 172px
      .code{
        width 678px
        height: 318px;
        margin 0 auto
        background-color: #ffffff;
        box-shadow: 0px 5px 20px 4px rgba(14, 14, 14, 0.1);
        border-radius: 30px;
        font-size 0
        text-align center
        position absolute
        top -236px
        left 261px
        .android,.gongzhonghao{
          display inline-block
          font-size: 18px;
          color: #000000;
          margin 46px 54px 0
        }
      }
      .tabs_nav{
        text-align center
        margin-bottom 90px
        .tabs {
          display inline-block
          text-align center
          font-size 0
          .li-tab {
            box-sizing border-box
            padding 15px
            font-size 22px
            color #333333
            background-color: #ffffff;
            display inline-block
            cursor pointer
            margin 0 45px
            border-radius: 20px;
          }
          .li-tab:last-child {
            border-right none
          }
          .active {
            background-color: #5226f3;
            color #ffffff
          }
        }
      }
      .divTab {
        box-sizing border-box
        width 1200px
        margin 0 auto
        min-height 100px
        margin-bottom 120px
        h3{
          text-align center
          height 46px
          margin-bottom 56px
        }
        p{
          font-size 16px
          color: #333333;
          width 1170px
          margin 0 auto
          text-align center
          line-height 20px
          margin-bottom 22px
          span{
            font-size 24px
            line-height 24px
          }
        }
      }
      .two{
        h3{
          height 20px
          font-size 20px
          color: #333333;
          text-align center
          margin-bottom 56px
        }
        p{
          width 580px
          text-align left
          i{
            display inline-block
            background-color: #5226f3;
            width 10px
            height 10px
            border-radius 5px
            vertical-align top
            margin-top 6px
            margin-right 18px
          }
        }
      }
    }
  }
</style>
