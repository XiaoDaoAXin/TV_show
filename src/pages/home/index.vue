<template>
  <div id="home">
    <h1>蓝图动态导示系统</h1>
    <div class="tabbar">
      <div
        class="item_btn"
        v-for="(item,index) in tabbar"
        :key="item.name"
        @click="go(item.name)"
      >
        <div class="middle_circle">
          <div class="small_circle">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="languageOutput">
      <div class="img"></div>
      <div class="output_text">{{output_text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          name: "safeHome",
          text: "安全的家"
        },
        {
          name: "healthyHome",
          text: "健康的家"
        },
        {
          name: "identityHome",
          text: "个性的家"
        },
        {
          name: "robotButler",
          text: "机器人管家"
        }
      ],
      output_text: "欢迎来到holacon智能场景实验室"
    };
  },
  methods: {
    go(url) {
      this.$router.push({
        path: url
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  overflow: hidden;
  background-image: url(./assets/img/矩形.jpg);
  h1 {
    height: 70px;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    margin-top: 64px;
    color: rgba(255, 255, 255, 1);
  }
  .tabbar {
    margin-top: 152px;
    height: 401px;
    // background-color: pink;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .item_btn {
      height: 100%;
      width: 401px;
      border-radius: 50%;
      margin-left: 39px;
      background-image: url(./assets/img/圆形边框2.png);
      background-position: center center;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .middle_circle {
        width: 400px;
        height: 400px;
        background-image: url(./assets/img/圆形边框1.png);
        background-position: center center;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .small_circle {
          width: 243px;
          height: 243px;
          text-align: center;
          font-size: 42px;
          font-family: MicrosoftSansSerif;
          color: rgba(255, 255, 255, 1);
          line-height: 243px;
          background-image: url(./assets/img/圆形背景.png);
          background-position: center center;
          background-repeat: no-repeat;
        }
      }
    }
  }
  .languageOutput {
    margin: 0 auto;
    margin-top: 247px;
    width: 1612px;
    height: 132px;
    .img {
      float: left;
      width: 134px;
      height: 100%;
      background-image: url(./assets/img/对话头像.png);
      background-position: center center;
      background-repeat: no-repeat;
    }
    .output_text {
      float: left;
      width: 1463px;
      height: 105px;
      background-image: url(./assets/img/对话框.png);
      background-position: center center;
      background-repeat: no-repeat;
      margin-top: 12px;
      margin-left: 10px;
      font-size: 42px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 105px;
      text-indent: 57px;
    }
  }
}
</style>

