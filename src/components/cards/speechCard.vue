<template>
  <div class='speech_Card' @click="showModal($event)">
     <div class="img">{{simulate}}</div>
     <div class="text">
         <p>{{title}}</p>
         <p>{{content}}</p>
     </div>
  </div>
</template>
  
<script>
export default {
    name: 'SpeechCard',
     props: ['title','content','simulate'],
  data() {
    return {
    
    }
  },
  methods:{
    showModal(e) {
        console.log(e)
        this.$emit('showModal')
    },
  }
}
</script>
  
<style scoped lang="scss">
 .speech_Card{
    // width: 176px;
    height: 70px;
    border-radius: 8px;
    background-color: #009BEE;
    .img{
        float: left;
        width: 30px;
        height: 70px;
        box-sizing: border-box;
        background-image: url(./assets/语音.png);
        background-repeat: no-repeat;
        background-position: center center;
        //  background-size: cover;
    }
    .text{
        padding: 13px 0px 0px 0px;
        box-sizing: border-box;
        float: left;
        // margin-left: 5px;
        // width: 145px;
        height: 70px;
        font-size:16px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
    }
 }
</style>