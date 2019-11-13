<!--  -->
<template>
    <div class="screen">
        <div class='health_assistant'>
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
        title:'健康助手',
        output_text: "为家庭成员建立健康档案，跟进健康状况，提供相关线上服务",
        features_sort:[
            {   clas:'management',
                img_url:require('./assets/imges/health_assistant/健康档案.png'),
                title:'健康档案',
                dec:'建立每个家庭成员健康档案，并且持续追踪和记录'
            },
            {   clas:'control',
                img_url:require('./assets/imges/health_assistant/日常健康提醒.png'),
                title:'日常健康提醒',
                dec:'通过用户或医生的设置，主动对家中成员 进行个性化的健康提醒'
            },
            {   clas:'decision',
               img_url:require('./assets/imges/health_assistant/在线医生交流.png'),
                title:'在线医生交流',
                dec:'用户随时与医生进行视频交流咨询，医生 定期远程了解用户身体状况'
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
    .health_assistant{
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