<!--生活陪伴页  -->
<template>
    <div class="screen">
        <div class='life_companion'>
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
        title:'生活陪伴',
        output_text: "通过表情互动、音视频内容、亲属通话等功能，陪伴各类人群的居家生活",
        features_sort:[
            {   clas:'management',
                 img_url:require('./assets/imges/life_companion/交流互动.png'),
                title:'交流互动',
                dec:'机器人陪伴儿童成长， 并且可以做出部分危险行为的判断和警示'
            },
            {   clas:'control',
                 img_url:require('./assets/imges/life_companion/视频通话.png'),
                title:'视频通话',
                dec:'居家老人通过机器人与子女亲属便捷沟通'
            },
            {   clas:'decision',
                 img_url:require('./assets/imges/life_companion/影音娱乐.png'),
                title:'影音娱乐',
                dec:'提供丰富的音视频内容， 并且有覆盖全网电视台的电子节目单'
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
    .life_companion{
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