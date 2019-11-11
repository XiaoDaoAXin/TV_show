<!--  -->
<template>
    <div class="screen">
        <div class='healthyWater'>
            <Header :title="title"></Header>
            <div class="body">
                <div class="product_list">
                    <h3>产品</h3>
                    <div class="product_item">
                        <ProductCard v-for="(item,index) in product_list" :name="item.name" :img_url="item.img_url" :key="index"></ProductCard>
                    </div>
                </div>
                <div class="params_list">
                    <div class="speech_box">
                        <SpeechCard v-for="(item,index) in speechCard_list" :title="item.title" :content='item.content' :key="index"></SpeechCard>
                    </div>
                    <div class="params_box">
                        <SmallCard v-for="(item,index) in params_liset" :title="item.title" :params="item.params" :img_url="item.img_url" :key="index"></SmallCard>
                    </div>
                    <h2>健康的家</h2>
                </div>
                <div class="right_box">
                        <div class="service">
                            <h3>内容服务</h3>
                            <div class="service_item">
                                <SmallCard v-for="(item,index) in service_liset" :title="item.title"  :img_url="item.img_url" :key="index"></SmallCard>
                            </div>
                        </div>
                        <div class="AI">
                            <h3>AI系统</h3>
                            <div class="AI_item">
                                <SmallCard v-for="(item,index) in AI_list" :title="item.title" :img_url="item.img_url" :key="index">
                                    <div slot="able_item">
                                    <div class="able_list">
                                            <P v-for="(item,index) in item.able_item" :key="index">{{item}}</P>
                                    </div>
                                    </div>
                                </SmallCard>
                            </div>
                        </div>
                </div>
            </div>
            <LanguageOutput :output_text='output_text'></LanguageOutput>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header'
import SmallCard from '../../components/cards/samllCard'
import SpeechCard from '../../components/cards/speechCard'
import ProductCard from '../../components/cards/productCard'
import LanguageOutput from '../../components/languageOutput'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    SmallCard,
    SpeechCard,
    LanguageOutput,
    ProductCard
},
data() {
//这里存放数据
return {
    title:'健康的水',
    output_text:'健康的家：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx',
    product_list:[
        {
            name:'前置过滤器',
            img_url:require('./assets/imges/前置过滤器.png')
        },
         {
            name:'软水机',
            img_url:require('./assets/imges/软水机.png')
        },
         {
            name:'软水机',
            img_url:require('./assets/imges/软水机.png')
        },
         {
            name:'茶吧机',
            img_url:require('./assets/imges/茶吧机.png')
        },
         {
            name:'TDS检测仪',
            img_url:require('./assets/imges/TDS检测仪.png')
        },
         {
            name:'矿化滤芯',
            img_url:require('./assets/imges/矿化滤芯.png')
        },
         {
            name:'饮水机',
            img_url:require('./assets/imges/饮水机.png')
        },
         {
            name:'音箱',
            img_url:require('./assets/imges/音箱.png')
        }
    ],
    speechCard_list:[
        {
            title:'小美小美',
            content:'我要喝45度的水'
        },
        {
            title:'小美小美',
            content:'滤芯还能用多久？'
        },
        {
            title:'小美小美',
            content:'自来水水质怎么样？'
        }
    ],
    params_liset:[
            {
                title:'饮水温度',
                params:'<65度',
                img_url:require('./assets/imges/饮水温度.png')
            },
             {
                title:'矿化度',
                params:'30-200mg/L',
                img_url:require('./assets/imges/矿化度.png')
            },
            {
                title:'含适量浓度',
                params:'钙/镁/锌/锶',
                img_url:require('./assets/imges/锶.png')
            },
            {
                title:'无重金属污染',
                // params:'07:00PM',
                img_url:require('./assets/imges/无重金属污染.png')
            },
            {
                title:'PH值',
                params:'6.5-8.5',
                img_url:require('./assets/imges/PH值.png')
            },
             {
                title:'无微生物污染',
                // params:'50%',
                img_url:require('./assets/imges/无微生物污染.png')
            },
            {
                title:'富氢水',
                // params:'10:00PM',
                img_url:require('./assets/imges/富氢水.png')
            },
             {
                title:'总硬度',
                params:'10-110mg/L',
                img_url:require('./assets/imges/总硬度.png')
            }
    ],
    service_liset:[
        {
            title:'健康饮水指导',
            img_url:require('./assets/imges/健康饮水指导.png')
        },
         {
            title:'流域水质查询',
            img_url:require('./assets/imges/流域水质查询.png')
        },
         {
            title:'矿物水功效建议',
            img_url:require('./assets/imges/矿物水功效建议.png')
        },
        {
            title:'饮水水质查询',
            img_url:require('./assets/imges/饮水水质查询.png')
        },
         {
            title:'耗材更换服务',
            img_url:require('./assets/imges/耗材更换服务.png')
        },
         {
            title:'管路清洁服务',
            img_url:require('./assets/imges/管路清洁服务.png')
        },
         {
            title:'医疗咨询服务',
            img_url:require('./assets/imges/医疗咨询服务.png')
        }
    ],
    AI_list:[
       {
        title:'美的智慧云',
        able_item:['远程控制家电','水温水质调节','运行数据储存'],
        img_url:require('./assets/imges/美的智慧云.png')
        },
        {
        title:'AI智能',
        able_item:['地理位置','流域水质信息','环境温湿度','日常体征数据','用户行为记录'],
        img_url:require('./assets/imges/AI智能.png')
        },
        {
        title:'大数据',
        able_item:['个性水质需求学习','饮水温度记忆'],
        img_url:require('./assets/imges/大数据.png')
        }
    ]
    

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},

}
</script>
<style lang='scss' scoped>
    .screen{
    height: 100%;
    background-image: url(./assets/imges/背景.jpg);
    background-size: cover;
    }
    .healthyWater{
        height: 100%;
        width: 1790px;
        margin: 0px auto;
        overflow: hidden;
        .body{
            width: 1680px;
            height: 766px;
            // padding: 0px 120px;
            margin: 0px auto;
            box-sizing: border-box;
            .product_list{
                float: left;
                width: 492px;
                height: 742px;
                margin-top: 36px;
                background-image: url(./assets/imges/产品-边框.png);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                h3{
                    height: 93px;
                    font-size:24px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:93px;
                    text-align: center;
                }
                .product_item{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    .product_card{
                        margin-left: 10px;
                        margin-bottom: 14px;
                        &:nth-child(1),
                        &:nth-child(5){
                            margin-left: 0px;
                        }
                    }
                }
            }
            .params_list{
                float: left;
                width:695px;
                height: 700px;
                .speech_box{
                    width: 100%;
                    height: 235px;
                    // border: 1px solid red;
                    position: relative;
                    .speech_Card{
                        position: absolute;
                        &:nth-child(1){
                            left: 117px;
                            top: 142px;
                        }
                         &:nth-child(2){
                            left: 265px;
                            top: 51px;
                        }
                        &:nth-child(3){
                            right: 75px;
                            top: 115px;
                        }
                    }
                }
                .params_box{
                    width: 100%;
                    height: 460px;
                    //  border: 1px solid red;
                     padding: 0px 20px 0px 20px;
                     box-sizing: border-box;
                     >>>.samll_card{
                         float: left;
                         //改变组件的样式
                         width: 183px;
                         height: 65px;
                         padding: 0px;
                         background-image: url(./assets/imges/方块背景.png);
                         background-repeat: no-repeat;
                         background-position: center center;
                        //  background-size: cover;
                         margin-bottom: 32px;
                         &:nth-child(2n){
                             margin-left: 285px;
                         }
                         .img{
                             width: 50px;
                             height: 50px;
                             margin-left: 10px;
                             margin-top: 7px;
                             background-size: contain;
                         }
                         .text{
                             margin-left: 10px;
                             width: 113px;
                             height: 65px;
                             font-size:18px;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:25px;
                             display: flex;
                            flex-direction: column;
                            justify-content: center;
                         }
                     }
                }
                h2{
                    width: 100%;
                    margin-top: 40px;
                    text-align: center;
                    font-size:34px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:48px;
                }
            }
             .right_box{
               float: left;
                width: 492px;
                height: 766px;
                // border: 1px solid red;
                .service{
                    width: 492px;
                    height: 382px;
                    box-sizing: border-box;
                    background-image: url(./assets/imges/内容服务-边框.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: 100%;
                    margin-top: 30px;
                    overflow: hidden;
                    h3{ 
                        margin-top:20px;
                        height: 93px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:93px;
                        text-align: center;
                   }
                   .service_item{
                        //更改组件样式
                        height: 287px;
                        padding: 0px 0px 0px 52px;
                        >>>.samll_card{
                            padding: 0px;
                            margin-bottom: 20px;
                            width: 218px;
                            height: 42px;
                            background-image: none;
                            .img{
                                width: 42px;
                                height: 42px;
                                background-repeat: no-repeat;
                                background-position: center center;
                                background-size: contain;
                            }
                            .text{
                                height: 42px;
                                margin-left: 15px;
                                font-size:18px;
                                    font-weight:400;
                                    color:rgba(255,255,255,1);
                                    line-height:25px;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    p{
                                        width: 130px;
                                    }
                            }
                        }
                   }
                }
                .AI{
                    // width: 460px;
                    height: 344px;
                    background-image: url(./assets/imges/内容服务-边框.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                    margin-top: 16px;
                     h3{
                        height: 93px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:93px;
                        text-align: center;
                    }
                    .AI_item{
                        padding-left: 20px;
                        >>>.samll_card{
                            padding: 0px;
                            width: 153px;
                            height: 210px;
                            background-image:none;
                            .img{
                                width: 100%;
                                height: 40px;
                                background-repeat: no-repeat;
                                background-position: center center;
                                background-size: contain;
                            }
                            .text{
                                width: 100%;
                                height: 170px;
                                margin: 0px;
                                >p{
                                    &:nth-child(1){
                                        width: 100%;
                                        height: 46px;
                                        font-size:18px;
                                        font-weight:400;
                                        color:rgba(255,255,255,1);
                                        line-height:46px;
                                        text-align: center;
                                    }
                                    &:nth-child(2){
                                        width: 109px;
                                        margin: 0px auto;
                                        font-size:14px;
                                        font-weight:400;
                                        color:rgba(255,255,255,1);
                                        line-height:20px;
                                        text-align: center;
                                    }
                                }
                                .able_list{
                                    width: 115px;
                                    margin: 0px auto;
                                    font-size:14px;
                                    font-weight:400;
                                    color:rgba(255,255,255,1);
                                    line-height:20px;
                                    text-align: center;
                                }
                            }
                        }
                    }

                }
            }
        }
        >>>.languageOutput{
            width: 1710px;
            margin-top: 35px;
            .output_text{
                width: 1520px;
            }
        }
    }

</style>