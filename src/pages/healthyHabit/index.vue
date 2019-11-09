<template>
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
                    <SpeechCard  @showModal="showModal" v-for="(item,index) in speechCard_list" :title="item.title" :simulate="item.simulate" :content='item.content' :key="index"></SpeechCard>
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
        <LanguageOutput :class="modal_languageOutput_class ? 'modal_languageOutput' : ''" :output_text='output_text'></LanguageOutput>
        <Modal  :show="if_show_mask" :title="modal_title" @hideModal="hideModal">
            <div class="modal_main">
                <ProductCard v-for="(item,index) in modal_product_list" :name="item.name" :img_url="item.img_url" :product_img="item.product_img" :key="index"></ProductCard>
            </div>
        </Modal>
  </div>
</template>

<script>
import Header from "../../components/header";
import SmallCard from "../../components/cards/samllCard";
import SpeechCard from '../../components/cards/speechCard'
import DetailCard from "../../components/cards/detailCard";
import ProductCard from '../../components/cards/productCard';
import LanguageOutput from "../../components/languageOutput";
import Modal from "../../components/modal";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    SmallCard,
    SpeechCard,
    DetailCard,
    LanguageOutput,
    ProductCard,
    Modal
  },
  data() {
    return {
      title: "健康习惯",
      output_text: "健康习惯：xxxxxxxxxxxxxxx是xxxxxxxxxxxxxxxx",
      if_show_mask:false,
      modal_title:'自动睡眠',
      modal_languageOutput_class:false,
      product_list:[
        {
            name:'灯',
            img_url:require('./assets/imges/灯.png')
        },
         {
            name:'空调',
            img_url:require('./assets/imges/空调.png')
        },
         {
            name:'窗帘',
            img_url:require('./assets/imges/窗帘.png')
        },
         {
            name:'音箱',
            img_url:require('./assets/imges/音箱.png')
        },
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
            name:'电热器',
            img_url:require('./assets/imges/电热器.png')
        },
         {
            name:'燃热',
            img_url:require('./assets/imges/燃热.png')
        },
         {
            name:'主动降燥器',
            img_url:require('./assets/imges/主动降噪.png')
        },
         {
            name:'除螨仪',
            img_url:require('./assets/imges/除螨仪.png')
        },
         {
            name:'智能手环',
            img_url:require('./assets/imges/智能手环.png')
        }
     ],
     speechCard_list:[
        {
            title:'主人，记得',
            content:'晨间一杯水哦～'
        },
        {
            title:'小美小美',
            content:'我明早7:00起床'
        },
        {
            title:'小美小美',
            content:'我想8:00喝粥'
        },
        {
            simulate:'场景模拟体验',
            content:'自动睡眠模式'
        },
        {
            title:'主人，天冷了，',
            content:'洗澡温度已经调高'
        }
    ],
    params_liset:[
            {
                title:'每日摄入',
                params:'1.5L水',
                img_url:require('./assets/imges/每日摄入水.png')
            },
             {
                title:'洗浴温度',
                params:'34-45度',
                img_url:require('./assets/imges/洗浴温度.png')
            },
            {
                title:'每日运动',
                params:'30-60分钟',
                img_url:require('./assets/imges/每日运动.png')
            },
            {
                title:'内胆存水',
                params:'定期更换',
                img_url:require('./assets/imges/内胆存水.png')
            },
            {
                title:'每周定期除螨',
                // params:'定期更换',
                img_url:require('./assets/imges/内胆存水.png')
            },
            {
                title:'噪音',
                params:'<30db',
                img_url:require('./assets/imges/噪音.png')
            },
            {
                title:'睡眠时间',
                params:'6-8小时',
                img_url:require('./assets/imges/睡眠时间.png')
            },
             {
                title:'每2-3小时',
                params:'饮水一次',
                img_url:require('./assets/imges/饮水.png')
            }
    ],
    service_liset:[
        {
            title:'健康习惯指导',
            img_url:require('./assets/imges/健康习惯指导.png')
        },
         {
            title:'家政清洁服务',
            img_url:require('./assets/imges/家政清洁服务.png')
        },
         {
            title:'内胆清洁服务',
            img_url:require('./assets/imges/内胆清洁服务.png')
        },
        {
            title:'习惯打卡服务',
            img_url:require('./assets/imges/习惯打卡服务.png')
        },
         {
            title:'医疗咨询服务',
            img_url:require('./assets/imges/医疗咨询服务.png')
        },
         {
            title:'睡眠音乐内容',
            img_url:require('./assets/imges/睡眠音乐内容.png')
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
        able_item:['个性习惯提醒','用户日程管理'],
        img_url:require('./assets/imges/AI智能.png')
        },
        {
        title:'大数据',
        able_item:['地理位置','天气数据','日常体征数据','用户行为记录'],
        img_url:require('./assets/imges/大数据.png')
        }
    ],
    modal_product_list:[
        {
            name:'智能吸顶灯',
            img_url:require('./assets/imges/边框1.png'),
            product_img:require('./assets/imges/智能吸顶灯.png')
        },
        {
            name:'小美音箱',
            img_url:require('./assets/imges/边框1.png'),
            product_img:require('./assets/imges/小美音箱.png')
        }
    ]   
    };
  },
  methods: {
      //弹出遮罩
      showModal(){
        this.if_show_mask=true 
        this.modal_languageOutput_class=true
      },
      //关闭遮罩
      hideModal(e){
        //   console.log(1)
          this.if_show_mask=false
          this.modal_languageOutput_class=false
      }
  }
  //生命周期 - 创建完成（可以访问当前this实例）
};
</script>
<style lang='scss' scoped>
.healthy_habit {
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
                    justify-content: start;
                    >>>.product_card{
                        width: 80px;
                        height: 190px;
                        margin-left: 10px;
                        margin-bottom: 10px;
                        // &:nth-child(5n+1){
                        //     margin-left: 0px;
                        // }
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
                            left: 175px;
                            top: 88px;
                            .text{
                                width: 136px;
                            }
                        }
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
                            right: 90px;
                            top: 190px;
                             .text{
                                height: 46px;
                                text-align: center;
                            }
                        }
                        &:nth-child(5){
                            left: 285px;
                            top: 270px;
                        }
                    }
                }
                .params_box{
                    width: 100%;
                    height: 353px;
                     padding: 0px 30px 0px 30px;
                     box-sizing: border-box;
                     overflow: hidden;
                    //  position: relative;
                     >>>.samll_card{
                        float: left;
                         //改变组件的样式
                         width: 183px;
                         height: 65px;
                         padding: 0px;
                         background-image: url(./assets/imges/方块背景.png);
                         background-repeat: no-repeat;
                         background-position: center center;
                         margin-bottom: 28px;
                         &:nth-child(2n){
                             margin-left: 332px;
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
                    // background-image: url(./assets/imges/叶子.png);
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
                    background-image: url(./assets/imges/内容服务边框.png);
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
    .languageOutput{
        margin-top: 36px;
    }
    .modal_languageOutput{
        position: fixed;
        bottom: 20px;
        left: 150px;
        z-index: 20;
    }
    .modal_main{
       overflow: hidden;
       display: flex;
       justify-content: center;
        >>>.product_card{
            padding: 31px 0px;
            box-sizing: border-box;
            width: 260px;
            height: 340px;
            background-image: url(./assets/imges/边框1.png);
            background-repeat: no-repeat;
            background-position: center center;
            float: left;
            margin-left: 40px;
            &:nth-child(1){
                margin-left: 0px;
            }
            .text{
                margin-top: 0px;
               font-size:24px;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:33px;
            }
        }
    }
}
</style>