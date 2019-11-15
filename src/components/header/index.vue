<template>
  <div class='header'>
      <div class="return" @click="return_previous_page()"></div>
        {{title}}
      <div class="to_home" @click="go_to_home()"></div>
  </div>
</template>
  
<script>
export default {
    name: 'Header',
     props: ['title'],
  data() {
    return {
    
    }
  },
  methods:{
    go_to_home(url){
      this.$router.push('/');
    },
     return_previous_page(){
      this.$router.go(-1);
    }
  }
}
</script>
  
<style scoped lang="scss">
 .header{
    //  width: 1800px;
     height: 70px;
     margin: 0 auto;
     margin-top:62px;
     text-align: center;
     line-height: 70px;
     font-size:50px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    .return{
        float: left;
        width: 26px;
        height: 46px;
        margin-right:30px;
        background-image: url(./assets/返回.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .to_home{
        float: right;
        width: 56px;
        height: 54px;
        background-image: url(./assets/首页.png);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
 }
</style>