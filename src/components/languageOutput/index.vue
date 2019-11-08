<template>
    <div class="languageOutput">
      <div class="img"></div>
      <div class="output_text">{{output_text}}</div>
    </div>
</template>
  
<script>
export default {
    name: 'LanguageOutput',
     props: ['output_text'],
  data() {
    return {
    
    }
  },
  methods:{

  }
}
</script>
  
<style scoped lang="scss">
  .languageOutput {
    margin: 0 auto;
    // margin-top: 247px;
    width: 1612px;
    height: 132px;
    .img {
      float: left;
      width: 134px;
      height: 100%;
      background-image: url(./assets/对话头像.png);
      background-position: center center;
      background-repeat: no-repeat;
    }
    .output_text {
      float: left;
      width: 1463px;
      height: 105px;
      background-image: url(./assets/对话框.png);
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
</style>