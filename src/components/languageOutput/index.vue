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
    width: 1710px;
    height: 132px;
    .img {
      float: left;
      width: 134px;
      height: 100%;
      background-image: url(./assets/对话头像.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .output_text {
      float: left;
      width: 1520px;
      height: 110px;
      background-image: url(./assets/对话框.png);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 12px;
      margin-left: 10px;
      font-size: 42px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 105px;
      text-indent: 57px;
    }
  }
</style>