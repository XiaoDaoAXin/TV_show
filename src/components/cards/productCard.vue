<!--  -->
<template>
  <div class='product_card' :style="{backgroundImage:'url('+img_url+')'}">
      <div class="product_img" v-if="product_img" :style="{backgroundImage:'url('+product_img+')'}"></div>
      <div class="text">{{name}}</div>
  </div>
</template>

<script>
export default {
    name: 'DetailCard',
     props: ['name','img_url','product_img'],
  data() {
    return {
    
    }
  },
  methods:{
  
  }
}
</script>
<style lang='scss' scoped>
    .product_card{
        width: 100px;
        height: 290px;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        .product_img{
            width: 100%;
            height: 250px;
            background-position: center center;
            background-repeat: no-repeat;
        }
        .text{
            font-size:16px;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:22px;
            text-align: center;
            margin-top: 238px;
        }
    }
</style>