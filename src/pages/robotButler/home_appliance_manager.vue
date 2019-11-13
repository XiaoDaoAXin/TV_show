<!--  -->
<template>
    <div class="screen">
        <div class='home_appliance_manager'>
            <Header :title="title"></Header>
            <div class="body">
                <div class="tab" v-for="(item,index) in features_sort" :key="index">
                    <div class="bg_img" :style="{backgroundImage:'url('+item.img_url+')'}">
                        <div class="title" v-text="item.title"></div>
                    </div>
                    <div class="des" v-text="item.dec"></div>
                </div>
            </div>
            <LanguageOutput :output_text='output_text'></LanguageOutput>
        </div>     
    </div>
</template>

<script>
import Header from '../../components/header'
import LanguageOutput from "../../components/languageOutput";

export default {

  components: {
    Header,
    LanguageOutput
  },
  data() {
    //这里存放数据
    return {
        title:'家电总管',
        output_text: "通过机器人：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
        features_sort:[
            {   clas:'management',
                img_url:require('./assets/imges/homeApplianceManager/全面管理.png'),
                title:'全面管理',
                dec:'机器人本地和云端的大脑是所有设备的 总管和整个家庭的管家'
            },
            {   clas:'control',
                img_url:require('./assets/imges/homeApplianceManager/2.png'),
                title:'多种控制方式',
                dec:'用户可以通过语音、触控、手势等多种方式， 与机器人或家电进行互动'
            },
            {   clas:'decision',
                img_url:require('./assets/imges/homeApplianceManager/3.png'),
                title:'机器人决策',
                dec:'熟悉用户的使用习惯和喜好之后， 主动判断用户需求'
            }  
        ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},

};
</script>
<style lang='scss' scoped>
    .screen{
        overflow: hidden;
        height: 100%;
        background-image: url(./assets/imges/背景.jpg);
        background-size: cover; 
    }
    .home_appliance_manager{
        width: 1790px;
        margin:0px auto;
        .body{
            width: 100%;
            height: 665px;
            margin-top: 116px;
            display: flex;
            justify-content: center;
            .tab{
                width: 577px;
                 height: 665px;
                .bg_img{
                    display: inline-block;
                    width: 577px;
                    height: 553px;
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                    >.title{
                        width: 100%;
                        font-size:24px;
                        font-weight:normal;
                        color:rgba(255,255,255,1);
                        line-height:28px;
                        text-align: center;
                        position: absolute;
                        left: 0px;
                        bottom: 52px;
                    }
                }
                .des{
                    width: 408px;
                    height: 80px;
                    margin: 0px auto;
                    text-align: center;
                    padding: 0px 22px;
                    box-sizing: border-box;
                    font-size:20px;
                    font-weight:normal;
                    color:rgba(255,255,255,1);
                    line-height:23px;
                }
            }

        }
        >>>.languageOutput{
            margin: 0px;
            margin-top: 20px;
            margin-left: 60px;
        }
    }

</style>