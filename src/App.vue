<template>
  <div id="app">
    <div class="head-wrap" ref="head">
      <div class="head">
        <img src="@/common/images/logo_header.png" alt="">
        <ul class="">
          <li class="nav">
            <span></span>
            <router-link to="/home">首页</router-link>
          </li>
          <li class="nav">
            <span></span>
            <router-link to="/appDownload">APP下载</router-link>
          </li>
          <!--<li class="nav">
            <span></span>
            <router-link to="/aboutUs">关于我们</router-link>
          </li>-->
        </ul>
      </div>
    </div>
    <router-view class="main"></router-view>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="380px" top="20vh"
      center class="dialog">
      <div class="content">
        <div class="header">
          <a class="close" href="javascript:void(0)" @click="close"></a>
          <p class="phone">咨询热线：010-58205388</p>
          <p class="tip">请填写一下信息，我们会尽快和您联系</p>
        </div>
        <div class="mainer">
          <div class="name">
            <label for="name">您的姓名：</label>
            <input type="text" id="name" v-model="name">
          </div>
          <div class="phone">
            <label for="phone">手机号码：</label>
            <input type="text" id="phone" v-model="phone">
          </div>
          <div class="phone">
            <label for="email">邮箱：</label>
            <input type="text" id="email" v-model="email">
          </div>
          <div class="content">
            <label for="content">留言内容：</label>
            <textarea id="content" v-model="content"></textarea>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="submitAdvise">提交留言</el-button>
  </span>
    </el-dialog>
    <div class="footer-wrap">
      <div class="footer">
        <ul class="fl_ul">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/appDownload">APP下载</router-link>
          </li>
          <!--<li>
            <router-link to="/aboutUs">关于我们</router-link>
          </li>-->
          <li @click="advise">意见和建议</li>
          <li>
            <img class="ft_code" src="./common/images/weixin.png" alt="weixin">
            <p>咨询客服微信号</p>
          </li>
        </ul>
        <ul class="fr_ul">
          <li>工作时间: 9:30～18:30</li>
          <li>服务电话：010-58205388</li>
          <!--<li>联系地址：北京市朝阳区建国路93号万达广场8号楼808</li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import "./common/stylus/index.styl";
  import {baseURL} from "./common/js/public";
  import axios from "axios"
  const querystring = require('querystring');
  
  export default {
    name: "App",
    components: {},
    data() {
      return {
        name: "",
        phone: "",
        content: "",
        email:"",
        tipName: "",
        centerDialogVisible: false,
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    computed: {},
    methods: {
      advise() {
        this.name = "";
        this.phone = "";
        this.content = "";
        this.centerDialogVisible = true
      },
      close() {
        this.centerDialogVisible = false
      },
      submitAdvise() {
        if (this.name === "") {
          this.tipName = "姓名";
          this.openTip();
          return
        }
        if(this.phone===""&&this.email===""){
          this.tipName="手机号码或邮箱";
          this.openTip();
          return
        }
        if (this.content === "") {
          this.tipName = "反馈内容";
          this.openTip();
          return
        }
        let data = {
          name: this.name,
          phone: "+86"+this.phone,
          email:this.email,
          content: this.content,
          platform: 1,
        };
        //提交请求
        axios({
          method: 'post',
          url: `${baseURL}/v1/users/feedback`,
          data: querystring.stringify(data),
        }).then(res => {
          this.centerDialogVisible = false
        }).catch(error => {
          console.log(error);
        })
      },
      openTip() {
        this.$confirm(`${this.tipName}, 不能为空！`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true,
          showCancelButton: false
        }).then(() => {
        }).catch(() => {
        });
      },
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
    background-color: #ffffff;
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
        margin-top 14px
        .nav {
          display: inline-block;
          margin-right 70px
          font-size 0px
          box-sizing: border-box
          span {
            display inline-block
            width: 4px;
            height: 4px;
            background-color: #333333;
            border-radius 2px
            margin-right 8px
          }
          & > a {
            display: inline-block;
            font-size 14px
            color #333333
            box-sizing border-box
            line-height 54px
            &.router-link-active, &:hover {
              color: #333333;
              border-bottom 1px solid #5226f3
            }
          }
        }
        .nav:last-child {
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
      height 160px
      margin 0 auto
      font-size 0
      text-align center
      padding-top 20px
      ul {
        font-family: PingFangSC-Regular;
        display inline-block
        font-size 14px
        color: #ffffff;
        vertical-align middle
        li {
          line-height 24px
        }
      }
      .fl_ul {
        font-size 0
        margin-right 80px
        li {
          font-size 14px
          display inline-block
          margin-right 80px
          vertical-align middle
          a {
            color #ffffff
          }
        }
        li:nth-child(3){
          cursor pointer
          border 1px solid #ffffff
          padding 4px
        }
        li:last-child {
          margin-right 0px
        }
      }
      .fr_ul {
        text-align left
      }
    }
  }
</style>
<style lang="stylus">
  .dialog {
    .el-dialog--center {
      border-radius: 10px;
    }
    .el-dialog__header {
      display none
    }
    .el-dialog__body {
      padding-top 28px
      padding-bottom 28px
      position relative
      .content {
        .header{
          text-align center
          .close{
            display inline-block
            width 15px
            height 15px
            position absolute
            top 12px
            right 20px
            background-image: url('./common/images/close.png');
            background-position: top left;
            background-repeat: no-repeat;
          }
          .phone{
            font-size: 18px;
            color: #5b16fd;
            margin-bottom 8px
          }
          .tip{
            color #666666
          }
        }
        .mainer{
          margin-top 40px
          margin-left 25px
          label{
            color #222222
            font-size 18px
            display inline-block
            width 90px
            text-align right
          }
          input,textarea{
            color #333333
            box-sizing border-box
            outline:none;
            border 1px solid #d2d2d2
            resize:none;
            width 210px
            padding-left 12px
          }
          input:focus,textarea:focus{
            border 1px solid #5b16fd
          }
          input{
            height 26px
          }
          textarea{
            height 130px
          }
          .name{
            margin-bottom 22px
          }
          .phone{
            margin-bottom 22px
          }
          .content{
            label{
              vertical-align top
            }
            textarea{
              vertical-align top
            }
          }
        }
      }
    }
    .el-dialog__footer{
      padding-top 0
      padding-bottom 20px
      .el-button,.el-button--primary{
        border none
        width: 94px;
        height: 30px;
        background-color: #5b16fd;
        border-radius: 8px;
        padding 0
        font-size: 16px;
      }
    }
  }
</style>
