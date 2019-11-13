<!--居家安全页  -->
<template>
    <div class="screen">
        <div class='home_security'>
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
        title:'居家安全',
        output_text: "连接安防设备和传感器，扫描和巡视家中安全情况，并且进行异常报警",
        features_sort:[
            {   clas:'management',
                img_url:require('./assets/imges/home_security/安防联动.png'),
                title:'安防联动',
                dec:'统一管理家中的各类安防设备，确保 安防系统正常工作'
            },
            {   clas:'control',
                img_url:require('./assets/imges/home_security/巡视检查.png'),
                title:'巡视检查',
                dec:'利用计算机视觉巡视和扫描家中安全状况'
            },
            {   clas:'decision',
                img_url:require('./assets/imges/home_security/异常报警.png'),
                title:'异常报警',
                dec:'异常状况时，机器人发出警报 同时发送消息给用户手机'
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
    .home_security{
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