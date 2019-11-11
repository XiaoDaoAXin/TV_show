<template>
  <div class='detail_card' @click="healthy_service_go(router_url)">
      <h3>{{title}}</h3>
      <div class="dec">
           <div class="img" :style="{backgroundImage:'url('+img_url+')'}"></div>
            <div class="text"><slot></slot></div>
      </div>
  </div>
</template>
  
<script>
export default {
    name: 'DetailCard',
     props: ['title','img_url','router_url'],
  data() {
    return {
    
    }
  },
  methods:{
    healthy_service_go(url){
          this.$router.push({
              path:url
          })
      }    
  }
}
</script>
  
<style scoped lang="scss">
 .detail_card{
     width: 410px;
     height: 268px;
     padding: 41px 20px 30px 30px;
     box-sizing: border-box;
    background-position: center center;
    background-repeat: no-repeat;
     background-size: contain;
     background-image: url(./assets/边框.png);
     h3{
         font-size:24px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:33px;
        text-align: center;
     }
     .dec{
         width: 100%;
         height: 132px;
         margin-top: 18px;
        .img{
            width: 94px;
            height: 126px;
            background-position: center center;
            background-repeat: no-repeat;
            background-image: url(./assets/水.png);
             background-size: contain;
            vertical-align: bottom;
            float: left;
        }
        .text{
            width: 252px;
            height: 126px;
            margin-left: 10px;
            vertical-align: bottom;
            display: flex;
            flex-direction: column;
            justify-content: center;
            float: left;
            font-size:12px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:17px;
        }
     }
 }
</style>