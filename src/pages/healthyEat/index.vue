<template>
    <div class="screen">
        <div class='healthy_habit'>
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
                    <!-- <div class="bg_sea"></div> -->
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
      title: "健康饮食",
      output_text: "健康饮食：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      product_list:[
        {
            name:'电饭煲',
            img_url:require('./assets/imges/电饭煲.png')
        },
         {
            name:'破壁机',
            img_url:require('./assets/imges/破壁机.png')
        },
         {
            name:'微蒸烤',
            img_url:require('./assets/imges/微蒸烤.png')
        },
         {
            name:'冰箱',
            img_url:require('./assets/imges/冰箱.png')
        },
         {
            name:'饮水机',
            img_url:require('./assets/imges/饮水机.png')
        },
         {
            name:'燃热',
            img_url:require('./assets/imges/燃热.png')
        },
         {
            name:'主动降噪器',
            img_url:require('./assets/imges/主动降噪器.png')
        },
         {
            name:'除螨仪',
            img_url:require('./assets/imges/除螨仪.png')
        },
         {
            name:'智能手环',
            img_url:require('./assets/imges/智能手环.png')
        },
         {
            name:'电热',
            img_url:require('./assets/imges/电热.png')
        }
     ],
     speechCard_list:[
        {
            title:'小美小美',
            content:'我要买牛奶'
        },
        {
            title:'小美小美',
            content:'冰箱里有什么菜？'
        },
        {
            title:'小美小美',
            content:'今天吃点什么好？'
        },
        {
            title:'小美小美',
            content:'今天吃点什么好？'
        },
        {
            title:'主人，您的血糖有点高',
            content:'少吃碳水哦～'
        }
    ],
    params_liset:[
            {
                title:'有机食品',
                // params:'1.5L水',
                img_url:require('./assets/imges/有机食品.png')
            },
             {
                title:'保质期内食用',
                // params:'34-45度',
                img_url:require('./assets/imges/保质期内食用.png')
            },
            {
                title:'无农药残留',
                // params:'30-60分钟',
                img_url:require('./assets/imges/无农药残留.png')
            },
            {
                title:'营养搭配',
                // params:'定期更换',
                img_url:require('./assets/imges/营养搭配.png')
            },
            {
                title:'VC摄入量',
                params:'100mg/天',
                img_url:require('./assets/imges/VC摄入量.png')
            },
            {
                title:'无违规',
                params:'食品添加剂',
                img_url:require('./assets/imges/无违规 食品添加剂.png')
            },
            {
                title:'VE摄入量',
                params:'100mg/天',
                img_url:require('./assets/imges/VE摄入量.png')
            }
    ],  
    service_liset:[
        {
            title:'饮食营养搭配',
            img_url:require('./assets/imges/饮食营养搭配.png')
        },
         {
            title:'专业冲泡建议',
            img_url:require('./assets/imges/专业冲泡建议.png')
        },
         {
            title:'有机农场食材直供',
            img_url:require('./assets/imges/有机农场食材直供.png')
        },
        {
            title:'医疗咨询服务',
            img_url:require('./assets/imges/医疗咨询服务.png')
        },
         {
            title:'食材营养知识库',
            img_url:require('./assets/imges/食材营养知识库.png')
        },
         {
            title:'日常饮食记录',
            img_url:require('./assets/imges/日常饮食记录.png')
        },
         {
            title:'新鲜食材配送',
            img_url:require('./assets/imges/新鲜食材配送.png')
        }
    ],
    AI_list:[
       {
        title:'美的智慧云',
        able_item:['远程控制家电','运行数据储存'],
        img_url:require('./assets/imges/美的智慧云.png')
        },
        {
        title:'AI智能',
        able_item:['食材到期提醒','果蔬农残智能判断','个性饮食建议'],
        img_url:require('./assets/imges/AI智能.png')
        },
        {
        title:'大数据',
        able_item:['食材储存记录','饮食记录','医疗数据','日常体征数据','用户行为记录'],
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
.screen{
    height: 100%;
    background-image: url(./assets/imges/背景.jpg);
    background-size: cover;
}
.healthy_habit {
    height: 100%;
    width: 1790px;
    margin: 0px auto;
    overflow: hidden;
    .body{
            height: 790px;
            width: 1790px;
            margin: 0px auto;
            overflow: hidden;
            padding: 0px 20px 0px 30px;
            box-sizing: border-box;
            .product_list{
                float: left;
                width: 492px;
                height: 702px;
                padding: 0px 0px 0px 18px;
                box-sizing: border-box;
                margin-top: 60px;
                background-size: cover;
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
                    justify-content: start;
                    >>>.product_card{
                        width: 80px;
                        height: 290px;
                        border-radius: 10px;
                        margin-left: 9px;
                        margin-bottom: 10px;
                        // &:nth-child(5n+1){
                        //     margin-left: 0px;
                        // }
                        .text{
                            margin-top: 170px;
                        }
                    }
                }
            }
            .params_list{
                float: left;
                width: 750px;
                height: 700px;
                .speech_box{
                    width: 100%;
                    height: 352px;
                    // border: 1px solid red;
                    position: relative;
                    >>>.speech_Card{
                        height: 70px;
                        position: absolute;
                        .text{
                            width: 140px;
                        }
                        .img{
                            width: 40px;
                        }
                        &:nth-child(1){
                            left: 74px;
                            top: 190px;
                        }
                         &:nth-child(2){
                            left: 165px;
                            top: 88px;
                            .text{
                                width: 136px;
                            }
                        }
                        &:nth-child(3){
                            right: 175px;
                            top: 88px;
                        }
                        &:nth-child(4){
                            right: 80px;
                            top: 190px;
                        }
                        &:nth-child(5){
                            left: 270px;
                            top: 280px;
                            .text{
                                width: 170px;
                            }
                        }
                    }
                }
                .params_box{
                    width: 100%;
                    height: 353px;
                    padding: 0px 20px 0px 20px;
                     box-sizing: border-box;
                     overflow: hidden;
                     position: relative;
                    //  position: relative;
                     >>>.samll_card{
                        float: left;
                         //改变组件的样式
                         width: 185px;
                         height: 67px;
                         padding: 0px;
                         background-size: cover;
                         background-image: url(./assets/imges/方块背景.png);
                         background-repeat: no-repeat;
                         background-position: center center;
                         margin-bottom: 28px;
                         &:nth-child(2n){
                             margin-left: 335px;
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
                            bottom: -15px;
                            left: 50%;
                            transform: translateX(-50%);
                         }                         
                         .img{
                             width: 50px;
                             height: 50px;
                             margin-left: 10px;
                             margin-top:7px;
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
                // .bg_sea{
                //      width: 100%;
                //     height: 80px;
                    // background-image: url(./assets/imges/叶子.png);
                //     background-repeat: no-repeat;
                //     background-position: center center;
                // }
                h2{
                    width: 100%;
                    margin-top: 40px;
                    text-align: center;
                    font-size:34px;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:34px;
                }
            }
             .right_box{
               float: left;
                width: 492px;
                height: 766px;
                // border: 1px solid red;
                .service{
                    padding: 0px 0px 0px 22px;
                    box-sizing: border-box;
                    // width: 460px;
                    height: 345px;
                    background-size: cover;
                    background-image: url(./assets/imges/内容服务边框.png);
                    background-repeat: no-repeat;
                    background-position: center center;
                    margin-top:60px;
                    h3{
                        height: 93px;
                        font-size:24px;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:93px;
                        text-align: center;
                   }
                   .service_item{
                        height: 287px;
                        padding: 0px 0px 0px 30px;
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
                                background-size: contain;
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
                                        width: 150px;
                                    }
                            }
                        }
                   }

                }
                .AI{
                    // width: 460px;
                    height: 380px;
                    background-size: cover;
                    background-image: url(./assets/imges/内容服务边框.png);
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
                    .AI_item{
                        padding-left: 15px;
                        // box-sizing: border-box;
                        >>>.samll_card{
                            padding: 0px;
                            width: 153px;
                            height: 210px;
                            background-image:none;
                            .img{
                                width: 100%;
                                height: 40px;
                                background-size: contain;
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
                                    margin-top: 25px;
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
        margin-top: 20px;
        width: 1710px;
        .output_text{
            width: 1520px;
        }
        
    }
}
</style>