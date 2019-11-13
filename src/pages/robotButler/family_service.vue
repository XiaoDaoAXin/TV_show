<!--  -->
<template>
    <div class="screen">
        <div class='family_service'>
            <Header :title="title"></Header>
            <div class="body">
                <!-- 4个按钮功能 -->
                <div class="tabbar" v-for="(item,index) in features_sort" :key="index" >
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
        title:'家庭服务',
        output_text: "机器人作为家庭管家，为用户安排家政、购物、报事报修等居家和社区服务",
        features_sort:[
            {   clas:'management',
                img_url:require('./assets/imges/family_service/家政服务.png'),
                title:'家政服务',
                dec:'为用户安排维修和保洁等家政服务，并可以接待 和跟随上门服务人员'
            },
            {   clas:'control',
               img_url:require('./assets/imges/family_service/快捷购物.png'),
                title:'快捷购物',
                dec:'便捷购买居家常用物品，并且机器人 可以随时告知物流状态'
            },
            {   clas:'decision',
                img_url:require('./assets/imges/family_service/报事报修.png'),
                title:'报事报修',
                dec:'通过联网家电、传感器和视觉算法，机器人 发现问题后主动联系相关服务'
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
    .family_service{
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