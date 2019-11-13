<template>
    <div class="screen">
        <div class="safe_home">
            <Header :title="title"></Header>
            <div class="body">
                <div class="tabbar" @click="go_btn(item.btn_text)" v-for="(item,index) in features_sort" :key="index" :style="{backgroundImage:'url('+item.bk_img+')'}">
                    <div class="dec_list">
                        <SmallCard v-for="(item,index) in item.dec_list" :title="item.title"  :img_url="item.img_url" :key="index"></SmallCard>
                    </div>
                    <div class="btn" :style="{backgroundImage:'url('+item.btn_img+')'}">
                        <p v-text="item.btn_text"></p>
                    </div>
                </div>
                <div class="card_list left">
                    <p v-for="(item,index) in card_list_left" :key="index" v-text="item.name"></p>
                </div>
                <div  class="card_list right">
                    <p v-for="(item,index) in card_list_right" :key="index" v-text="item.name"></p>
                </div>
            </div>
            <LanguageOutput :output_text='output_text'></LanguageOutput>
        </div>
    </div>
</template>

<script>
import SmallCard from "../../components/cards/samllCard";
import Header from '../../components/header'
import LanguageOutput from "../../components/languageOutput";
export default {
    components: {
        SmallCard,
        Header,
        LanguageOutput
    },
  data() {
    return {
        title:'安全的家',
        output_text: "欢迎来到holacon智能场景实验室",
        features_sort:[
            {
                bk_img:require('./assets/imges/边框.png'),
                btn_img:require('./assets/imges/圆圈.png'),
                btn_text:'人生安全',
                dec_list:[
                    {
                        title:'老人摔倒报警',
                        img_url:require('./assets/imges/老人摔倒报警.png')
                    },
                    {
                        title:'生理指标监测',
                        img_url:require('./assets/imges/生理指标监测.png')
                    },
                    {
                        title:'火灾烟雾报警',
                        img_url:require('./assets/imges/火灾烟雾报警.png')
                    },                    {
                        title:'摄像头安防监控',
                        img_url:require('./assets/imges/摄像头安防监控.png')
                    },
                    {
                        title:'有毒气体报警',
                        img_url:require('./assets/imges/有毒气体报警.png')
                    }
                ]
            },
            {
                bk_img:require('./assets/imges/边框.png'),
                btn_img:require('./assets/imges/圆圈.png'),
                btn_text:'环境安全',
                dec_list:[
                    {
                        title:'自动关门、关窗',
                        img_url:require('./assets/imges/自动关门、关窗.png')
                    },
                    {
                        title:'阳台风雨探测',
                        img_url:require('./assets/imges/阳台风雨探测.png')
                    },
                    {
                        title:'社区卫生安保服务',
                        img_url:require('./assets/imges/社区卫生安保服务.png')
                    },                    {
                        title:'浸水漏水报警',
                        img_url:require('./assets/imges/浸水漏水报警.png')
                    },
                    {
                        title:'自然灾害气象服务',
                        img_url:require('./assets/imges/自然灾害气象服务.png')
                    }
                ]
            },
            {
                bk_img:require('./assets/imges/边框.png'),
                btn_img:require('./assets/imges/圆圈.png'),
                btn_text:'财务安全',
                dec_list:[
                    {
                        title:'陌生人徘徊报警',
                        img_url:require('./assets/imges/陌生人徘徊报警.png')
                    },
                    {
                        title:'门窗异动提醒',
                        img_url:require('./assets/imges/门窗异动提醒.png')
                    },
                    {
                        title:'门锁破坏提醒',
                        img_url:require('./assets/imges/门锁破坏提醒.png')
                    },                    {
                        title:'人体红外感应',
                        img_url:require('./assets/imges/人体红外感应.png')
                    }
                ]
            },
            {
                bk_img:require('./assets/imges/边框.png'),
                btn_img:require('./assets/imges/圆圈.png'),
                btn_text:'隐私安全',
                dec_list:[
                    {
                        title:'回家自动遮挡撤防',
                        img_url:require('./assets/imges/回家自动遮挡撤防.png')
                    },
                    {
                        title:'语音防监听',
                        img_url:require('./assets/imges/语音防监听.png')
                    },
                    {
                        title:'居家生活防爆光',
                        img_url:require('./assets/imges/居家生活防爆光.png')
                    },                    {
                        title:'多端数据加密',
                        img_url:require('./assets/imges/多端数据加密.png')
                    }
                ]
            }
        ],
        card_list_left:[
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'可燃气体报警器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'水浸探测器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能门锁'
            },
                        {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能猫眼'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能晾衣架'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'空气BALL'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'一键报警器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'自然气象服务'
            }
        ],
        card_list_right:[
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'自动推窗器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'人体红外传感器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能摄像头'
            },
                        {
                bk_img:require('./assets/imges/小边框.png'),
                name:'火灾烟雾探测器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能穿戴设备'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'自动窗帘电机'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'门窗探测器'
            },
            {
                bk_img:require('./assets/imges/小边框.png'),
                name:'智能音箱'
            }
        ]
        
    };
  },
  methods: {
        isPlayAudio(){
            this.playAudio()
        },
        //路由跳转
        go_btn(features_sort){
            if(features_sort=='人生安全')
            this.$router.push({
                path:'personalSafety'
            })
        }
  }
};
</script>

<style lang='scss' scoped>
    .screen {
        overflow: hidden;
        height: 100%;
        background-image: url(./assets/imges/背景.jpg);
        background-size: cover; 
    }
    .safe_home{
        width: 1790px;
        margin:0px auto;
        .body{
            width: 100%;
            height: 780px;
            position: relative;
            .tabbar{
                width: 550px;
                height: 220px;
                // padding: 40px;
                // box-sizing: border-box;
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
                overflow: hidden;
                // border: 1px solid red;
                &:nth-child(1){
                    position: absolute;
                    left: 56px;
                    top: 25px;
                }
                &:nth-child(2){
                    position: absolute;
                    right: 56px;
                    top: 25px;
                }
                &:nth-child(3){
                    position: absolute;
                    left: 56px;
                    bottom: 10px;
                }
                &:nth-child(4){
                    position: absolute;
                    right: 56px;
                    bottom: 10px;
                }
                .dec_list{
                    width: 360px;
                    height: 220px;
                    padding: 70px 0px 40px 30px;
                    box-sizing: border-box;
                    // background-color: pink;
                    float: left;
                    >>>.samll_card{
                        float: left;
                        width: 160px;
                        height: 26px;
                        padding: 0px;
                        margin-bottom: 5px;
                        background-image: none;
                        .img{
                            width: 26px;
                            height: 26px;
                            background-repeat: no-repeat;
                            background-size: contain;
                        }
                        .text{
                            height: 26px;
                            width: 130px;
                            margin: 0px;
                            font-size:16px;
                            font-weight:normal;
                            color:rgba(255,255,255,1);
                            line-height:26px;
                            >P{
                                margin: 0px;
                                // padding:0px 2px;
                                width: 130px;
                            }
                        }
                    }               
                }
                .btn{
                    float: right;
                    width: 152px;
                    height: 152px;
                    margin-top: 34px;
                    margin-right: 35px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    >p{
                        width:57px;
                        height:64px;
                        font-size:28px;
                        font-weight:normal;
                        color:rgba(255,255,255,1);
                        line-height:32px;
                    }
                }
            }
            .card_list{
                width: 587px;
                height: 336px;
                position: absolute;
                >p{
                    width: 162px;
                    height: 44px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-image: url(./assets/imges/小边框.png);
                    text-align: center;
                    font-size:20px;
                    font-weight:normal;
                    color:rgba(255,255,255,1);
                    line-height:44px;
                }
            }
            .left{
                left: 0px;
                top:230px;
                >P{
                    position: absolute;
                    &:nth-child(1){
                        right: 0px;
                        top: 40px;
                    }
                    &:nth-child(2){
                        right: 189px;
                        top: 72px;
                    }
                    &:nth-child(3){
                        right: 0px;
                        top: 110px;
                    }
                    &:nth-child(4){
                        right: 380px;
                        top: 50%;
                        transform: translateY(-50%)
                    }
                    &:nth-child(5){
                        right:189px;
                        top: 50%;
                        transform: translateY(-50%)
                    }
                    &:nth-child(6){
                        right:0px;
                        top: 184px;
                    }
                    &:nth-child(7){
                        right:189px;
                        top: 221px;
                    }
                    &:nth-child(8){
                        right:0px;
                        top: 257px;
                    }
                }
            }
            .right{
                right: 0px;
                top: 230px;
                >P{
                    position: absolute;
                    &:nth-child(1){
                        left: 0px;
                        top: 40px;
                    }
                    &:nth-child(2){
                        left: 189px;
                        top: 72px;
                    }
                    &:nth-child(3){
                        left: 0px;
                        top: 110px;
                    }
                    &:nth-child(4){
                        left: 380px;
                        top: 50%;
                        transform: translateY(-50%)
                    }
                    &:nth-child(5){
                        left:189px;
                        top: 50%;
                        transform: translateY(-50%)
                    }
                    &:nth-child(6){
                        left:0px;
                        top: 184px;
                    }
                    &:nth-child(7){
                        left:189px;
                        top: 221px;
                    }
                    &:nth-child(8){
                        left:0px;
                        top: 257px;
                    }
                }
            }
        }
        >>>.languageOutput{
            margin: 0px;
            margin-top: 20px;
            margin-left: 80px;
        }
    }
</style>
