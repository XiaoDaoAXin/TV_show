<template>
  <div class='healthy_air'>
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
                    <SpeechCard v-for="(item,index) in speechCard_list" :title="item.title" :simulate="item.simulate" :content='item.content' :key="index"></SpeechCard>
                </div>
                <div class="params_box">
                    <SmallCard v-for="(item,index) in params_liset" :title="item.title" :params="item.params" :img_url="item.img_url" :key="index"></SmallCard>
                </div>
                <div class="bg_sea"></div>
                 <h2>健康的家</h2>
            </div>
            <div class="right_box">
                <div class="service">
                    <h3>内容服务</h3>
                    <SmallCard v-for="(item,index) in service_liset" :title="item.title"  :img_url="item.img_url" :key="index"></SmallCard>
                </div>
                <div class="AI">
                    <h3>AI系统</h3>
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
        <LanguageOutput :output_text='output_text'></LanguageOutput>
  </div>
</template>

<script>
import Header from "../../components/header";
import SmallCard from "../../components/cards/samllCard";
import SpeechCard from '../../components/cards/speechCard'
import DetailCard from "../../components/cards/detailCard";
import ProductCard from '../../components/cards/productCard';
import LanguageOutput from "../../components/languageOutput";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    SmallCard,
    SpeechCard,
    DetailCard,
    LanguageOutput,
    ProductCard
  },
  data() {
    return {
      title: "健康空气",
      output_text: "健康空气：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      product_list:[
        {
            name:'空调',
            img_url:require('./assets/imges/空调.png')
        },
         {
            name:'除湿机',
            img_url:require('./assets/imges/除湿机.png')
        },
         {
            name:'音箱',
            img_url:require('./assets/imges/音箱.png')
        },
         {
            name:'新风',
            img_url:require('./assets/imges/新风.png')
        },
         {
            name:'风扇',
            img_url:require('./assets/imges/风扇.png')
        },
         {
            name:'空净',
            img_url:require('./assets/imges/空净.png')
        },
         {
            name:'加湿器',
            img_url:require('./assets/imges/加湿器.png')
        },
         {
            name:'中央空调',
            img_url:require('./assets/imges/中央空调.png')
        },
         {
            name:'Air空间站',
            img_url:require('./assets/imges/Air空间站.png')
        },
         {
            name:'甲醛检测仪',
            img_url:require('./assets/imges/甲醛检测仪.png')
        },
         {
            name:'TVOC 检测仪',
            img_url:require('./assets/imges/TVOC检测仪.png')
        },
         {
            name:'辐射检测仪',
            img_url:require('./assets/imges/辐射检测仪.png')
        }
    ],
    speechCard_list:[
        {
            title:'小美小美',
            content:'今天空气质量怎么样？'
        },
        {
            title:'小美小美',
            content:'空气湿度如何？'
        },
        {
            simulate:'场景模拟体验',
            content:'空湿联动'
        },
        {
            simulate:'场景模拟体验',
            content:'森林深呼吸'
        }
    ],
    params_liset:[
            {
                title:'无甲醛污染',
                // params:'<65度',
                img_url:require('./assets/imges/无甲醛污染.png')
            },
             {
                title:'二氧化碳 ',
                params:'350-450ppm',
                img_url:require('./assets/imges/二氧化碳.png')
            },
            {
                title:'无TVOC污染',
                // params:'钙/镁/锌/锶',
                img_url:require('./assets/imges/无TVOC污染.png')
            },
            {
                title:'湿度',
                params:'40-50%',
                img_url:require('./assets/imges/湿度.png')
            },
            {
                title:'温度',
                params:'22-26摄氏度',
                img_url:require('./assets/imges/温度.png')
            },
            {
                title:'本底辐射   受照剂量',
                params:'<250毫西弗',
                img_url:require('./assets/imges/本底辐射 受照剂量.png')
            },
             {
                title:'PM2.5',
                params:'日均<35度',
                img_url:require('./assets/imges/PM2.5.png')
            }
    ],
    service_liset:[
        {
            title:'健康饮水指导',
            img_url:require('./assets/imges/健康饮水指导.png')
        },
         {
            title:'空气质量查询',
            img_url:require('./assets/imges/空气质量查询.png')
        },
         {
            title:'除甲醛服务',
            img_url:require('./assets/imges/除甲醛服务.png')
        },
        {
            title:'机器清洁服务',
            img_url:require('./assets/imges/机器清洁服务.png')
        },
         {
            title:'耗材更换服务',
            img_url:require('./assets/imges/耗材更换服务.png')
        },
         {
            title:'辐射检测服务',
            img_url:require('./assets/imges/辐射检测服务.png')
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
        able_item:['个性温湿偏好学习','温差大时提醒更换衣服','根据环境大数据智能调节'],
        img_url:require('./assets/imges/AI智能.png')
        },
        {
        title:'大数据',
        able_item:['地理位置','空气质量','环境温湿度','本地流感疫情信息','用户行为记录'],
        img_url:require('./assets/imges/大数据.png')
        }
    ]
    };
  },
  //方法集合
  methods: {}
  //生命周期 - 创建完成（可以访问当前this实例）
};
</script>
<style lang='scss' scoped>
.healthy_air {
    height: 100%;
    background-image: url(./assets/imges/背景.jpg);
    overflow: hidden;
    .body{
            width: 1680px;
            height: 766px;
            // padding: 0px 120px;
            margin: 0px auto;
            box-sizing: border-box;
            .product_list{
                float: left;
                width: 463px;
                height: 700px;
                margin-top: 66px;
                background-image: url(./assets/imges/产品边框.png);
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
                    >>>.product_card{
                        width: 100px;
                        height: 190px;
                        margin-left: 10px;
                        margin-bottom: 10px;
                        &:nth-child(4n+1){
                            margin-left: 0px;
                        }
                        .text{
                            margin-top: 136px;
                        }
                    }
                }
            }
            .params_list{
                float: left;
                width: 760px;
                height: 700px;
                .speech_box{
                    width: 100%;
                    height: 312px;
                    // border: 1px solid red;
                    position: relative;
                    >>>.speech_Card{
                        height: 70px;
                        position: absolute;
                        &:nth-child(1){
                            left: 34px;
                            top: 205px;
                        }
                         &:nth-child(2){
                            left: 160px;
                            top: 88px;
                            .text{
                                width: 136px;
                            }
                        }
                        &:nth-child(3),
                        &:nth-child(4){
                            width: 170px;
                            overflow: hidden;
                            .img{
                                width: 100%;
                                height: 24px;
                                background-image: url(./assets/imges/场景管理.png);
                                background-repeat: no-repeat;
                                background-position:  10px 3px;
                                text-indent: 40px;
                                font-size:12px;
                                font-weight:500;
                                color:rgba(255,255,255,1);
                                line-height:24px;
                            }
                             .text{
                                 width: 100%;
                                 padding: 0px;
                                 margin-top: 6px;
                                height: 20px;
                                text-align: center;
                            }
                        }
                        &:nth-child(3){
                            right: 175px;
                            top: 88px;
                        }
                        &:nth-child(4){
                            right: 65px;
                            top: 205px;
                             .text{
                                height: 46px;
                                text-align: center;
                            }
                        }
                        .img{
                            width: 40px;
                        }
                        .text{
                            width: 160px;
                        }
                    }
                }
                .params_box{
                    width: 100%;
                    height: 353px;
                    //  border: 1px solid red;
                     padding: 0px 30px 0px 40px;
                     box-sizing: border-box;
                     overflow: hidden;
                     position: relative;
                     >>>.samll_card{
                         float: left;
                         //改变组件的样式
                         width: 183px;
                         height: 65px;
                         padding: 0px;
                         background-image: url(./assets/imges/方块背景.png);
                         background-repeat: no-repeat;
                         background-position: center center;
                         margin-bottom: 38px;
                         &:nth-child(2n){
                             margin-left: 310px;
                         }
                         &:nth-child(6){
                             .text{
                                 line-height: 18px;
                                 p{
                                    &:nth-child(1){
                                        width: 70%;
                                    }
                                 }
                             }
                         }
                         &:nth-child(7){
                            position: absolute;
                            bottom: -2px;
                            left: 50%;
                            transform: translateX(-50%);
                         }
                         .img{
                             width: 70px;
                             height: 65px;
                         }
                         .text{
                             margin:0px;
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
                .bg_sea{
                     width: 100%;
                    height: 80px;
                    background-image: url(./assets/imges/叶子.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                }
                h2{
                    width: 100%;
                    // margin-top: 40px;
                    text-align: center;
                    font-size:34px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:34px;
                }
            }
             .right_box{
               float: left;
                width: 455px;
                height: 766px;
                // border: 1px solid red;
                .service{
                    padding: 0px 0px 0px 22px;
                    box-sizing: border-box;
                    width: 460px;
                    height: 340px;
                    background-image: url(./assets/imges/内容服务-边框.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    margin-top: 66px;
                    h3{
                        height: 93px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:93px;
                        text-align: center;
                   }
                   //更改组件样式
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
                .AI{
                    width: 460px;
                    height: 340px;
                    background-image: url(./assets/imges/内容服务-边框.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    margin-top: 36px;
                     h3{
                        height: 93px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:93px;
                        text-align: center;
                    }
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
                                width: 158px;
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
    .languageOutput{
        margin-top: 36px;
    }
}
</style>