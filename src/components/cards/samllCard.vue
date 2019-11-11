<template>
  <div class='samll_card'>
     <div class="img" :style="{backgroundImage:'url('+img_url+')'}"></div>
     <div class="text">
         <p>{{title}}</p>
         <p v-if="params">{{params}}</p>
         <slot name="able_item"></slot>
     </div>
  </div>
</template>
  
<script>
export default {
    name: 'SmallCard',
     props: ['title','params','img_url'],
  data() {
    return {
    
    }
  },
  methods:{

  }
}
</script>
  
<style scoped lang="scss">
 .samll_card{
     float: left;
     padding: 10px 20px;
     box-sizing: border-box;
     background-image: url(./assets/方块背景.png);
     background-size: cover;
     width: 242px;
     height: 82px;
    font-family:PingFangSC-Regular,PingFang SC,Microsoft YaHei, WenQuanYi Micro Hei;
    font-size:22px;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:30px;
    .img{
        float: left;
        width: 60px;
        height: 60px;
        background-image: url(./assets/温度.png);
        background-repeat: no-repeat;
        background-position: center center;
         background-size: cover;
    }
    .text{
        float: left;
        margin-left: 20px;
        width: 120px;
        height: 80px;
    }
 }
</style>