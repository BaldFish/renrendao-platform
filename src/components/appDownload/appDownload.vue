<template>
  <div class="appDownload">
    <div class="versions_wrap" v-for="(item,index) of info" :class="{'versions_wrap_notFirst':index!==0,'versions_wrap_odd':index%2===0}">
      <div class="versions">
        <div class="presentation">
          <div class="tittle_wrap">
            <img :src="item.logo" alt="">
            <div class="tittle">
              <h3>{{item.tittle}}</h3>
              <p>更新时间：{{item.update}}</p>
            </div>
          </div>
          <div class="intro_wrap">
            <p class="intro"><i></i>简介：</p>
            <ul class="intro_list">
              <li v-for="intro of item.intro" v-html="intro"></li>
            </ul>
          </div>
          <div class="update_wrap">
            <p class="update"><i></i>更新内容：</p>
            <ul class="update_list">
              <li v-for="content of item.content">{{content}}</li>
            </ul>
          </div>
          <div class="download_wrap">
            <ul class="download_list">
              <li>
                <p @click="downLoad">下载到电脑</p>
              </li>
              <li>
                <p>iPhone版app下载</p>
                <img src="./images/expectation.png" alt="">
              </li>
              <li>
                <p>Android版app下载</p>
                <img src="./images/android.png" alt=""></li>
              <li>
                <p>Pad版app下载</p>
                <img src="./images/expectation.png" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="img">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "appDownload",
    components: {},
    data() {
      return {
        info: [
          {
            tittle: "人人道钱包 V1.0.3",
            logo: require('./images/logo.png'),
            update: "2018年11月12日",
            intro: ["人人道——可以赚钱的区块链钱包。", "全球首款集结积分、资产、身份为一体的基于区块链技术的新型移动端应用。", "在这里，您将走进一个前所未有的新世界。",],
            content: ["1、【重磅】新增资产、身份模块", "2、【优化】用户注册流程优化，减少钱包总数", "3、【修复】修复bug，提升用户体验"],
            img: require('./images/01.png')
          },
          {
            tittle: "人人道钱包 V1.0.0",
            logo: require('./images/logo.png'),
            update: "2018年10月24日",
            intro: ["因业务需要，元积分钱包即日起更名为 <span style='color: #5226f3;font-size: 18px'>人人道钱包</span>", "人人道——可以赚钱的区块链钱包。",
              "全球首款集结积分、资产、身份为一体的基于区块链技术的新型移动端应用。", "在这里，您将走进一个前所未有的新世界。",],
            content: ["1、 【重磅】元链钱包更名为人人道钱包", "2、【优化】人人道钱包和数据集市统一用户体系；用户注册、创建钱包流程优化；减少钱包总数", "3、【修复】修复bug，提升用户体验"],
            img: require('./images/02.png')
          },
          {
            tittle: "元积分钱包 V1.1.0",
            logo: require('./images/wallet.png'),
            update: "2018年09月12日",
            intro: ["元积分钱包是一款移动端轻钱包APP，它旨在为普通用户提供一款安全放心，简单好用，功能强大的数字资产钱包应用。",],
            content: ["1、 【重磅】新增行情模块；设置钱包登录；增加数据集市元积分支付功能", "2、【优化】备份助记词钱包流程优化", "3、【修复】修复bug，提升用户体验"],
            img: require('./images/03.png')
          },
          {
            tittle: "元积分钱包 V1.0.0",
            logo: require('./images/wallet.png'),
            update: "2018年06月18日",
            intro: ["元积分钱包是一款移动端轻钱包APP，它旨在为普通用户提供一款安全放心，简单好用，功能强大的数字资产钱包应用。",],
            content: ["1、  区块链钱包的创建、导入，备份助记词，私钥，keystore，转账，交易流水，扫一扫等功能", "2、 多个钱包的管理，消息中心，联系人，手机号的注册、登录，系统设置，联系我们",],
            img: require('./images/04.png')
          },
        ]
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      downLoad(){
        var tempWindow=window.open('_blank');
        tempWindow.location="http://p5mgatf9g.bkt.clouddn.com/Launch_Wallet_Release_CN.apk"
      }
    },
  }
</script>

<style scoped lang="stylus">
  .appDownload {
    margin-top 100px
    .versions_wrap {
      background-color: #ffffff;
      width 100%
      .versions {
        box-sizing border-box
        width 1200px
        height 600px
        margin 0 auto
        font-size 0
        padding-left 140px
        .presentation {
          float left
          margin-top 50px
          .tittle_wrap {
            font-size 0
            img {
              vertical-align top
            }
            .tittle {
              display inline-block
              padding-left 20px
              h3 {
                font-size: 24px;
                color: #5226f3;
                line-height 42px
              }
              p {
                font-size: 16px;
                color: #333333;
              }
            }
          }
          .intro_wrap {
            padding-left 5px
            margin-top 20px
            .intro {
              font-size: 16px;
              color: #333333;
              line-height: 24px;
              i {
                display inline-block
                background-color: #5226f3;
                width 6px
                height 6px
                border-radius 5px
                vertical-align top
                margin-top 9px
                margin-right 8px
              }
            }
            .intro_list {
              padding-left 11px
              font-size: 16px;
              color: #333333;
              li {
                width 620px
                line-height 20px
              }
            }
          }
          .update_wrap {
            padding-left 5px
            margin-top 36px
            .update {
              font-size: 16px;
              color: #333333;
              line-height: 24px;
              i {
                display inline-block
                background-color: #5226f3;
                width 6px
                height 6px
                border-radius 5px
                vertical-align top
                margin-top 9px
                margin-right 8px
              }
            }
            .update_list {
              padding-left 11px
              font-size: 14px;
              color: #333333;
              li {
                width 620px
                line-height 18px
              }
            }
          }
          .download_wrap {
            padding-left 11px
            color: #333333;
            .download_list {
              font-size 0
              margin-top 20px
              li {
                display inline-block
                margin-right 50px
                font-size: 18px;
                vertical-align top
                text-align center
                p {
                  line-height 36px
                }
                img {
                  vertical-align top
                  margin-top 12px
                }
              }
              li:nth-child(1) {
                p {
                  background-color: #5226f3;
                  color: #ffffff;
                  border-radius: 18px;
                  padding 0px 15px
                  cursor pointer
                }
              }
              li:last-child {
                margin-right 0
              }
            }
          }
        }
        .img {
          float right
          margin-top 60px
        }
      }
    }
    .versions_wrap_notFirst {
      .versions {
        .presentation {
          margin-top 100px
          width 700px
          float right
          .download_wrap {
            display none
          }
        }
        .img {
          float left
        }
      }
      
    }
    .versions_wrap_odd{
      background-color #f9f9f9
      /*.versions {
        .presentation {
          float left
        }
        .img {
          float right
        }
      }*/
    }
  }
</style>
